"use client";
import React, { useEffect, useState } from "react";
import { ConfirmationResult, UserCredential } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { auth, storage, db, collection, query, where, getDocs, setDoc, doc, serverTimestamp } from "@/firebase";
import LoginModal from "./LoginModal";
import CreateAccountModal, { SignupFormData } from "./CreateAccountModal";
import VerifyCodeModal from "./VerifyCodeModal";
import SelectServicesModal, { ServicesFormData } from "./SelectServicesModal";
import SubscriptionModal from "./SubscriptionModal";
import ProviderProfileModal, { ProviderProfile } from "./ProviderProfileModal";
import MapPreviewStep from "./MapPreviewStep";
import LocationPermissionModal from "./LocationPermissionModal";
import SetLocationModal from "./SetLocationModal";

type Step =
  | "none"
  | "create"
  | "login"
  | "verify-create"
  | "verify-login"
  | "select-services"
  | "set-location"
  | "creating-profile"
  | "map-preview"
  | "subscription"
  | "profile";

interface AuthFlowProps {
  isOpen: boolean;
  onClose: () => void;
  userLocation: [number, number] | null;
  onProviderCreated?: () => void;
  defaultStep?: "login" | "create";
}

async function getCityAndCountry(lat: number, lng: number): Promise<{ city: string; country: string }> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
      { headers: { "Accept-Language": "en", "User-Agent": "YardymanApp/1.0" } }
    );
    const data = await res.json();
    return {
      city:
        data.address?.city ||
        data.address?.town ||
        data.address?.village ||
        data.address?.suburb ||
        "Unknown",
      country: data.address?.country || "Unknown",
    };
  } catch {
    return { city: "Unknown", country: "Unknown" };
  }
}

function encodeGeohash(lat: number, lng: number, precision = 9): string {
  const BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";
  let hash = "";
  let isLng = true;
  let latMin = -90, latMax = 90;
  let lngMin = -180, lngMax = 180;
  let bits = 0, bitCount = 0;

  while (hash.length < precision) {
    if (isLng) {
      const mid = (lngMin + lngMax) / 2;
      bits = (bits << 1) | (lng >= mid ? 1 : 0);
      if (lng >= mid) lngMin = mid; else lngMax = mid;
    } else {
      const mid = (latMin + latMax) / 2;
      bits = (bits << 1) | (lat >= mid ? 1 : 0);
      if (lat >= mid) latMin = mid; else latMax = mid;
    }
    isLng = !isLng;
    if (++bitCount === 5) {
      hash += BASE32[bits];
      bits = 0;
      bitCount = 0;
    }
  }
  return hash;
}

async function uploadPhoto(file: File, uid: string): Promise<string> {
  const ext = file.name.split(".").pop() ?? "jpg";
  const fileRef = ref(storage, `provider_profiles/${uid}/profile.${ext}`);
  await uploadBytes(fileRef, file);
  return getDownloadURL(fileRef);
}

const AuthFlow: React.FC<AuthFlowProps> = ({
  isOpen,
  onClose,
  userLocation,
  onProviderCreated,
  defaultStep = "login",
}) => {
  const [step, setStep] = useState<Step>("none");
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [phone, setPhone] = useState("");
  const [signupData, setSignupData] = useState<SignupFormData | null>(null);
  const [profile, setProfile] = useState<ProviderProfile | null>(null);
  const [subscriptionLoading, setSubscriptionLoading] = useState(false);
  const [prefillPhone, setPrefillPhone] = useState("");
  const [prefillCountryCode, setPrefillCountryCode] = useState("+1");
  const [loginSlideFrom, setLoginSlideFrom] = useState<"right" | "left" | undefined>(undefined);
  const [previewImageUrl, setPreviewImageUrl] = useState("");
  const [locationOverride, setLocationOverride] = useState<[number, number] | null>(null);
  const [pendingServicesData, setPendingServicesData] = useState<ServicesFormData | null>(null);

  const effectiveLocation = locationOverride ?? userLocation;

  useEffect(() => {
    if (isOpen && step === "none") {
      setStep(defaultStep);
    } else if (!isOpen) {
      setStep("none");
      setConfirmationResult(null);
      setPhone("");
      setSignupData(null);
    }
  }, [isOpen]);

  const close = () => onClose();

  const handlePhoneAlreadyRegistered = (rawPhone: string, code: string) => {
    setPrefillPhone(rawPhone);
    setPrefillCountryCode(code);
    setLoginSlideFrom("right");
    setStep("login");
  };

  // ── Create account flow ──────────────────────────────────────────────────

  const handleCreateCodeSent = (
    result: ConfirmationResult,
    fullPhone: string,
    data: SignupFormData
  ) => {
    setConfirmationResult(result);
    setPhone(fullPhone);
    setSignupData(data);
    setStep("verify-create");
  };

  const handleVerifyCreate = async (_credential: UserCredential) => {
    setStep("select-services");
  };

  const handleServicesDone = (servicesData: ServicesFormData) => {
    setPendingServicesData(servicesData);
    setStep("set-location");
  };

  const handleLocationConfirmed = (lng: number, lat: number) => {
    setLocationOverride([lng, lat]);
    setStep("creating-profile");
    createProviderProfile(pendingServicesData!, [lng, lat]);
  };

  const createProviderProfile = async (servicesData: ServicesFormData, locationParam?: [number, number]) => {
    if (!signupData) return;
    const user = auth.currentUser;
    if (!user) return;

    const resolvedLocation = locationParam ?? effectiveLocation;

    try {
      let photoUrl = "";
      if (signupData.photoFile) {
        photoUrl = await uploadPhoto(signupData.photoFile, user.uid);
      }

      const lat = resolvedLocation ? resolvedLocation[1] : 0;
      const lng = resolvedLocation ? resolvedLocation[0] : 0;
      let city = "Unknown";
      let country = "Unknown";
      if (resolvedLocation) {
        const location = await getCityAndCountry(lat, lng);
        city = location.city;
        country = location.country;
      }

      await setDoc(doc(db, "providers", user.uid), {
        uid: user.uid,
        id: user.uid,
        providerName: signupData.name,
        email: signupData.email,
        phoneNumber: phone,
        imageUrl: photoUrl,
        latitude: lat,
        longitude: lng,
        geohash: encodeGeohash(lat, lng),
        city,
        country,
        selectedServices: servicesData.selectedServices,
        description: servicesData.descriptions,
        hasTools: servicesData.hasTools,
        paymentMethods: servicesData.paymentMethods,
        subscriptionStatus: "unsubscribed",
        isAvailable: true,
        instagramID: "",
        profileViewCount: 0,
        gotCallCount: 0,
        gotMessageCount: 0,
        instaViewCount: 0,
        hasDelivery: false,
        serviceLocation: [],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      onProviderCreated?.();
      setPreviewImageUrl(photoUrl);
      setStep("map-preview");
    } catch {
      setStep("subscription");
    }
  };

  const handleSubscriptionPlanSelected = async (priceId: string) => {
    const user = auth.currentUser;
    if (!user || !signupData) return;

    setSubscriptionLoading(true);
    try {
      localStorage.setItem(
        "pendingProviderRegistration",
        JSON.stringify({ uid: user.uid })
      );
      const res = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, uid: user.uid, email: signupData.email, phone }),
      });
      const { url } = await res.json();
      window.location.href = url;
    } catch {
      setSubscriptionLoading(false);
    }
  };

  // ── Login flow ───────────────────────────────────────────────────────────

  const handleLoginCodeSent = (result: ConfirmationResult, fullPhone: string) => {
    setConfirmationResult(result);
    setPhone(fullPhone);
    setStep("verify-login");
  };

  const handleVerifyLogin = async (credential: UserCredential) => {
    const uid = credential.user.uid;
    try {
      const q = query(collection(db, "providers"), where("uid", "==", uid));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const data = snapshot.docs[0].data();
        setProfile({
          uid,
          name: data.providerName ?? "",
          phone: data.phoneNumber ?? phone,
          email: data.email ?? "",
          photoUrl: data.imageUrl ?? "",
          city: data.city ?? "",
          selectedServices: Array.isArray(data.selectedServices) ? data.selectedServices : [],
          descriptions:
            data.description && typeof data.description === "object" ? data.description : {},
          hasTools: data.hasTools ?? false,
          paymentMethods: Array.isArray(data.paymentMethods) ? data.paymentMethods : [],
          isAvailable: data.isAvailable ?? true,
          profileViews: data.profileViewCount ?? data.profileViews ?? 0,
          subscriptionStatus: data.subscriptionStatus ?? "unsubscribed",
        });
        setStep("profile");
      } else {
        close();
      }
    } catch {
      setStep("profile");
    }
  };

  // ── Render ───────────────────────────────────────────────────────────────

  if (step === "none") return null;

  return (
    <>
      {step === "create" && !effectiveLocation && (
        <LocationPermissionModal
          onGranted={(coords) => setLocationOverride(coords)}
          onClose={close}
        />
      )}

      {step === "create" && effectiveLocation && (
        <CreateAccountModal
          onClose={close}
          onCodeSent={handleCreateCodeSent}
          onLogin={() => { setLoginSlideFrom(undefined); setStep("login"); }}
          onPhoneAlreadyRegistered={handlePhoneAlreadyRegistered}
        />
      )}

      {step === "login" && (
        <LoginModal
          onClose={close}
          onCodeSent={handleLoginCodeSent}
          onCreateAccount={() => setStep("create")}
          initialPhone={prefillPhone}
          initialCountryCode={prefillCountryCode}
          slideFrom={loginSlideFrom}
        />
      )}

      {step === "verify-create" && confirmationResult && (
        <VerifyCodeModal
          onClose={close}
          confirmationResult={confirmationResult}
          phone={phone}
          photoPreview={signupData?.photoPreview}
          onVerified={handleVerifyCreate}
          onEditPhone={() => setStep("create")}
          isSignup
          onLoginInstead={() => setStep("login")}
        />
      )}

      {step === "verify-login" && confirmationResult && (
        <VerifyCodeModal
          onClose={close}
          confirmationResult={confirmationResult}
          phone={phone}
          onVerified={handleVerifyLogin}
          onEditPhone={() => setStep("login")}
        />
      )}

      {step === "select-services" && (
        <SelectServicesModal onClose={close} onDone={handleServicesDone} />
      )}

      {step === "set-location" && (
        <SetLocationModal
          initialLng={effectiveLocation?.[0] ?? -79.38}
          initialLat={effectiveLocation?.[1] ?? 43.65}
          providerImageUrl={signupData?.photoPreview ?? undefined}
          onConfirm={handleLocationConfirmed}
          onBack={() => setStep("select-services")}
        />
      )}

      {step === "creating-profile" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.45)",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              border: "4px solid rgba(255,255,255,0.3)",
              borderTopColor: "#22c55e",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ color: "#fff", fontWeight: 600, fontSize: 16, margin: 0 }}>
            Setting up your profile…
          </p>
        </div>
      )}

      {step === "map-preview" && (
        <MapPreviewStep
          imageUrl={previewImageUrl}
          providerName={signupData?.name ?? ""}
          onSubscribe={() => setStep("subscription")}
          onLater={close}
        />
      )}

      {step === "subscription" && (
        <SubscriptionModal
          onClose={close}
          onPlanSelected={handleSubscriptionPlanSelected}
          loading={subscriptionLoading}
        />
      )}

      {step === "profile" && profile && (
        <ProviderProfileModal profile={profile} onClose={close} />
      )}
    </>
  );
};

export default AuthFlow;
