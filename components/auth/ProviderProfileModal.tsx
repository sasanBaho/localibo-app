"use client";
import React, { useEffect, useRef, useState } from "react";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { updateDoc, doc, onSnapshot, serverTimestamp, collection, query, where, getDocs } from "firebase/firestore";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage, auth } from "@/firebase";
import { signOut, getIdToken, RecaptchaVerifier, PhoneAuthProvider, updatePhoneNumber } from "firebase/auth";
import SelectServicesModal, { ServicesFormData } from "./SelectServicesModal";
import SetLocationModal from "./SetLocationModal";
import ImageCropModal from "./ImageCropModal";
import SubscriptionModal from "./SubscriptionModal";
import ViewsAnalyticsModal from "./ViewsAnalyticsModal";
import { BsCircleFill } from "react-icons/bs";
import { slugifyStr } from "@/lib/slugify";

function encodeGeohashLocal(lat: number, lng: number, precision = 9): string {
  const BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";
  let hash = "", bits = 0, bitCount = 0, isLng = true;
  let latMin = -90, latMax = 90, lngMin = -180, lngMax = 180;
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
    if (++bitCount === 5) { hash += BASE32[bits]; bits = 0; bitCount = 0; }
  }
  return hash;
}

export interface ProviderProfile {
  uid: string;
  name: string;
  phone: string;
  email: string;
  photoUrl: string;
  city: string;
  selectedServices: string[];
  descriptions: Record<string, string>;
  hasTools: boolean;
  paymentMethods: string[];
  isAvailable: boolean;
  profileViews: number;
  subscriptionStatus?: string;
  rating?: number;
  ratingsCount?: number;
  latitude?: number;
  longitude?: number;
  citySlug?: string;
  nameSlug?: string;
  nameSlugBase?: string;
}

interface ProviderProfileModalProps {
  profile: ProviderProfile;
  onClose: () => void;
  onAvailabilityChange?: (isAvailable: boolean) => void;
  onProfileUpdated?: (updated: ProviderProfile) => void;
}

const SERVICE_META: Record<string, { shortName: string; icon: string }> = {
  "service-one": { shortName: "Lawn Care", icon: "/lawn-mower-green.png" },
  "service-two": { shortName: "Snow Removal", icon: "/shovel-blue.png" },
};

const GreenCheck: React.FC = () => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: "#22c55e",
      flexShrink: 0,
    }}
  >
    <svg width={14} height={14} viewBox="0 0 20 20" fill="none">
      <path
        d="M5 10.5L9 14.5L15 7.5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const ProviderProfileModal: React.FC<ProviderProfileModalProps> = ({
  profile,
  onClose,
  onAvailabilityChange,
  onProfileUpdated,
}) => {
  useBodyScrollLock();

  const [isAvailable, setIsAvailable] = useState(profile.isAvailable);
  const [profileState, setProfileState] = useState(profile);
  const [showEditServices, setShowEditServices] = useState(false);
  const [saving, setSaving] = useState(false);
  const [cropSrc, setCropSrc] = useState<string | null>(null);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(profile.name);
  const [savingName, setSavingName] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [emailInput, setEmailInput] = useState(profile.email ?? "");
  const [savingEmail, setSavingEmail] = useState(false);
  const [editingPhone, setEditingPhone] = useState(false);
  const [phoneStep, setPhoneStep] = useState<"number" | "code">("number");
  const [newPhoneInput, setNewPhoneInput] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [verificationId, setVerificationId] = useState<string | null>(null);
  const [sendingCode, setSendingCode] = useState(false);
  const [verifyingPhone, setVerifyingPhone] = useState(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);
  const [stripeSubscriptionId, setStripeSubscriptionId] = useState<string | null>(null);
  const [subscriptionInfo, setSubscriptionInfo] = useState<{
    status: string;
    created: number;
    trialEnd: number | null;
    currentPeriodEnd: number;
    cancelAtPeriodEnd: boolean;
  } | null>(null);
  const [cancellingSubscription, setCancellingSubscription] = useState(false);
  const [reactivatingSubscription, setReactivatingSubscription] = useState(false);
  const [showLocationEditor, setShowLocationEditor] = useState(false);
  const [showSubscriptionPlanModal, setShowSubscriptionPlanModal] = useState(false);
  const [subscribeModalLoading, setSubscribeModalLoading] = useState(false);
  const [viewsByMonth, setViewsByMonth] = useState<Record<string, number>>({});
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const SERVICE_SLUG: Record<string, string> = {
    "service-one": "lawn-care",
    "service-two": "snow-removal",
  };

  const firstServiceSlug = SERVICE_SLUG[profileState.selectedServices?.[0]] ?? "lawn-care";
  const _citySlug = profileState.citySlug ?? slugifyStr(profileState.city ?? "");
  const _nameSlug = profileState.nameSlug ?? slugifyStr(profileState.name ?? "");
  const profileUrl =
    _citySlug && _nameSlug
      ? `https://yardyman.com/provider/${_citySlug}/${firstServiceSlug}/${_nameSlug}`
      : null;

  async function computeNameSlug(uid: string, name: string, citySlug: string): Promise<{ nameSlug: string; nameSlugBase: string }> {
    const base = slugifyStr(name);
    const snap = await getDocs(
      query(collection(db, "providers"), where("citySlug", "==", citySlug), where("nameSlugBase", "==", base))
    );
    const others = snap.docs.filter((d) => d.id !== uid);
    if (others.length === 0) return { nameSlug: base, nameSlugBase: base };
    const usedSlugs = new Set(others.map((d) => d.data().nameSlug as string));
    for (let i = 2; ; i++) {
      const candidate = `${base}-${i}`;
      if (!usedSlugs.has(candidate)) return { nameSlug: candidate, nameSlugBase: base };
    }
  }

  async function handleCopyLink() {
    if (!profileUrl) return;
    await navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleShare() {
    if (!profileUrl) return;
    if (navigator.share) {
      await navigator.share({ title: `${profile.name} on Yardyman`, url: profileUrl });
    } else {
      handleCopyLink();
    }
  }

  const getAuthHeaders = async (): Promise<Record<string, string>> => {
    const token = auth.currentUser ? await getIdToken(auth.currentUser) : null;
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "providers", profile.uid), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setIsAvailable(data.isAvailable ?? true);
        setProfileState((prev) => ({
          ...prev,
          profileViews: data.profileViewCount ?? prev.profileViews,
        }));
        setViewsByMonth(data.viewsByMonth ?? {});
        const subId = data.stripeSubscriptionId ?? null;
        setStripeSubscriptionId(subId);
        if (subId) {
          getIdToken(auth.currentUser!).then((token) => {
            fetch(`/api/stripe/subscription?subscriptionId=${subId}`, {
              headers: { Authorization: `Bearer ${token}` },
            })
              .then((r) => r.json())
              .then((info) => { if (!info.error) setSubscriptionInfo(info); })
              .catch(() => {});
          }).catch(() => {});
        }
      }
    });
    return () => unsub();
  }, []);

  const isSubscriptionInactive =
    profile.subscriptionStatus !== "trialing" && (
      profile.subscriptionStatus === "unsubscribed" ||
      subscriptionInfo?.cancelAtPeriodEnd === true ||
      (subscriptionInfo !== null && !["active", "trialing"].includes(subscriptionInfo.status))
    );

  const handleToggle = async () => {
    const next = !isAvailable;
    setIsAvailable(next);
    onAvailabilityChange?.(next);
    try {
      await updateDoc(doc(db, "providers", profile.uid), { isAvailable: next });
    } catch {
      setIsAvailable(!next);
    }
  };

  const handleSubscribeNow = async (priceId: string) => {
    setSubscribeModalLoading(true);
    try {
      localStorage.setItem("stripeReturn", JSON.stringify({ uid: profile.uid }));
      const res = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid: profile.uid, email: profile.email, phone: profile.phone, priceId }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } finally {
      setSubscribeModalLoading(false);
    }
  };

  const handlePhotoFileSelected = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => setCropSrc(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handlePhotoCropDone = async (dataUrl: string) => {
    setCropSrc(null);
    setUploadingPhoto(true);
    try {
      const arr = dataUrl.split(",");
      const mime = arr[0].match(/:(.*?);/)![1];
      const bstr = atob(arr[1]);
      const u8 = new Uint8Array(bstr.length);
      for (let i = 0; i < bstr.length; i++) u8[i] = bstr.charCodeAt(i);
      const blob = new Blob([u8], { type: mime });
      const sRef = storageRef(storage, `provider_profiles/${profile.uid}/profile.jpg`);
      await uploadBytes(sRef, blob, { contentType: "image/jpeg" });
      const url = await getDownloadURL(sRef);
      await updateDoc(doc(db, "providers", profile.uid), { imageUrl: url });
      const updated = { ...profileState, photoUrl: url };
      setProfileState(updated);
      onProfileUpdated?.(updated);
    } finally {
      setUploadingPhoto(false);
    }
  };

  const handleSendPhoneCode = async () => {
    const phone = newPhoneInput.trim();
    if (!phone) return;
    setSendingCode(true);
    setPhoneError(null);
    try {
      recaptchaVerifierRef.current?.clear();
      recaptchaVerifierRef.current = new RecaptchaVerifier(auth, "phone-recaptcha-container", { size: "invisible" });
      const provider = new PhoneAuthProvider(auth);
      const vid = await provider.verifyPhoneNumber(phone, recaptchaVerifierRef.current);
      setVerificationId(vid);
      setPhoneStep("code");
    } catch (err: any) {
      setPhoneError(err?.message ?? "Failed to send code. Use international format (+1...)");
      recaptchaVerifierRef.current?.clear();
      recaptchaVerifierRef.current = null;
    } finally {
      setSendingCode(false);
    }
  };

  const handleVerifyPhoneCode = async () => {
    if (!verificationId || !phoneCode.trim()) return;
    setVerifyingPhone(true);
    setPhoneError(null);
    try {
      const credential = PhoneAuthProvider.credential(verificationId, phoneCode.trim());
      await updatePhoneNumber(auth.currentUser!, credential);
      await updateDoc(doc(db, "providers", profile.uid), { phoneNumber: newPhoneInput.trim() });
      const updated = { ...profileState, phone: newPhoneInput.trim() };
      setProfileState(updated);
      onProfileUpdated?.(updated);
      setEditingPhone(false);
      setPhoneStep("number");
      setNewPhoneInput("");
      setPhoneCode("");
      setVerificationId(null);
      setPhoneError(null);
    } catch (err: any) {
      setPhoneError(err?.message ?? "Invalid code. Please try again.");
    } finally {
      setVerifyingPhone(false);
    }
  };

  const handleEmailSave = async () => {
    const trimmed = emailInput.trim();
    if (!trimmed || trimmed === profileState.email) {
      setEditingEmail(false);
      return;
    }
    setSavingEmail(true);
    try {
      await updateDoc(doc(db, "providers", profile.uid), { email: trimmed });
      const updated = { ...profileState, email: trimmed };
      setProfileState(updated);
      onProfileUpdated?.(updated);
    } finally {
      setSavingEmail(false);
      setEditingEmail(false);
    }
  };

  const handleNameSave = async () => {
    const trimmed = nameInput.trim();
    if (!trimmed || trimmed === profileState.name) {
      setEditingName(false);
      return;
    }
    setSavingName(true);
    try {
      const citySlug = profileState.citySlug ?? slugifyStr(profileState.city ?? "");
      const { nameSlug, nameSlugBase } = await computeNameSlug(profile.uid, trimmed, citySlug);
      await updateDoc(doc(db, "providers", profile.uid), {
        providerName: trimmed,
        nameSlug,
        nameSlugBase,
      });
      const updated = { ...profileState, name: trimmed, nameSlug, nameSlugBase };
      setProfileState(updated);
      onProfileUpdated?.(updated);
    } finally {
      setSavingName(false);
      setEditingName(false);
    }
  };

  const handleServicesDone = async (data: ServicesFormData) => {
    setSaving(true);
    try {
      await updateDoc(doc(db, "providers", profile.uid), {
        selectedServices: data.selectedServices,
        description: data.descriptions,
        hasTools: data.hasTools,
        paymentMethods: data.paymentMethods,
      });
      const updated: ProviderProfile = {
        ...profileState,
        selectedServices: data.selectedServices,
        descriptions: data.descriptions,
        hasTools: data.hasTools,
        paymentMethods: data.paymentMethods,
      };
      setProfileState(updated);
      onProfileUpdated?.(updated);
    } finally {
      setSaving(false);
      setShowEditServices(false);
    }
  };

  const handleLocationSave = async (lng: number, lat: number, city: string, country: string) => {
    const geohash = encodeGeohashLocal(lat, lng);
    const citySlug = slugifyStr(city);
    const { nameSlug, nameSlugBase } = await computeNameSlug(
      profile.uid,
      profileState.name ?? "",
      citySlug
    );
    await updateDoc(doc(db, "providers", profile.uid), {
      latitude: lat,
      longitude: lng,
      geohash,
      city,
      country,
      citySlug,
      nameSlug,
      nameSlugBase,
      updatedAt: serverTimestamp(),
    });
    const updated = { ...profileState, city, citySlug, nameSlug, nameSlugBase, latitude: lat, longitude: lng };
    setProfileState(updated);
    onProfileUpdated?.(updated);
    setShowLocationEditor(false);
  };

  if (showLocationEditor) {
    return (
      <SetLocationModal
        initialLng={profileState.longitude ?? -79.38}
        initialLat={profileState.latitude ?? 43.65}
        providerImageUrl={profileState.photoUrl}
        onConfirm={handleLocationSave}
        onClose={() => setShowLocationEditor(false)}
      />
    );
  }

  if (showEditServices) {
    return (
      <SelectServicesModal
        onClose={() => setShowEditServices(false)}
        onDone={handleServicesDone}
        initialData={{
          selectedServices: profileState.selectedServices,
          descriptions: profileState.descriptions,
          hasTools: profileState.hasTools,
          paymentMethods: profileState.paymentMethods,
        }}
      />
    );
  }

  if (saving) {
    return (
      <div style={{ position: "fixed", inset: 0, zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.45)" }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: "32px 40px", textAlign: "center" }}>
          <div style={{ width: 40, height: 40, border: "4px solid #e0e0e0", borderTopColor: "#22c55e", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 16px" }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ margin: 0, fontWeight: 600, fontSize: 16 }}>Saving changes…</p>
        </div>
      </div>
    );
  }

  if (cropSrc) {
    return (
      <ImageCropModal
        src={cropSrc}
        onCrop={handlePhotoCropDone}
        onCancel={() => setCropSrc(null)}
      />
    );
  }

  if (uploadingPhoto) {
    return (
      <div style={{ position: "fixed", inset: 0, zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.45)" }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: "32px 40px", textAlign: "center" }}>
          <div style={{ width: 40, height: 40, border: "4px solid #e0e0e0", borderTopColor: "#22c55e", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 16px" }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ margin: 0, fontWeight: 600, fontSize: 16 }}>Uploading photo…</p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        background: "rgba(0,0,0,0.45)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {showSubscriptionPlanModal && (
        <SubscriptionModal
          onClose={() => setShowSubscriptionPlanModal(false)}
          onPlanSelected={handleSubscribeNow}
          loading={subscribeModalLoading}
        />
      )}

      {showAnalytics && (
        <ViewsAnalyticsModal
          viewsByMonth={viewsByMonth}
          onClose={() => setShowAnalytics(false)}
        />
      )}

      {/* Hidden file input */}
      <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }}
        onChange={(e) => { if (e.target.files?.[0]) handlePhotoFileSelected(e.target.files[0]); e.target.value = ""; }} />

      <div
        style={{
          width: "100%",
          maxWidth: 520,
          maxHeight: "92dvh",
          overflowY: "auto",
          borderRadius: "20px 20px 0 0",
          background: "#fff",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            background: "#f0efef",
            padding: "20px 20px 28px",
            borderRadius: "20px 20px 0 0",
            position: "relative",
            textAlign: "center",
          }}
        >
          {(() => {
            const currentMonthKey = new Date().toISOString().slice(0, 7);
            const currentMonthLabel = new Date().toLocaleDateString("en-US", { month: "long" });
            const currentMonthViews = viewsByMonth[currentMonthKey] ?? 0;
            return (
              <button
                onClick={() => setShowAnalytics(true)}
                style={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  borderRadius: 999,
                  padding: "5px 11px",
                  display: "flex",
                  alignItems: "start",
                  gap: 5,
                  cursor: "pointer",
                }}
              >
                <img src="/data-analytics.png" alt="views" width={16} height={16} style={{ display: "block", objectFit: "contain" }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: "#1e1e1e", whiteSpace: "nowrap", textDecoration: "underline" }}>
                  {currentMonthLabel} Profile views: {currentMonthViews}
                </span>
              </button>
            );
          })()}

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#22c55e",
              border: "none",
              color: "#fff",
              fontSize: 20,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            ×
          </button>

          {/* Avatar */}
          <div
            onClick={() => fileInputRef.current?.click()}
            style={{
              position: "relative",
              display: "inline-block",
              marginBottom: 14,
              marginTop: 8,
              cursor: "pointer",
            }}
          >
            {profileState.photoUrl ? (
              <div
                style={{
                  width: 103,
                  height: 103,
                  borderRadius: "50%",
                  background: "#22c55e" , // outer colored circle
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
              <img
                src={profileState.photoUrl}
                alt={profileState.name}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #fff",
                }}
              />
              </div>
            ) : (
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: "#ccc",
                  border: "3px solid #22c55e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 36,
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                {profileState.name.charAt(0).toUpperCase()}
              </div>
            )}
            <button
              onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
              aria-label="Change profile photo"
              style={{
                position: "absolute",
                bottom: 2,
                right: 2,
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "#22c55e",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <svg width={15} height={15} viewBox="0 0 24 24" fill="none">
                <path
                  d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle cx="12" cy="13" r="4" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </div>

          {/* Name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginBottom: 10,
            }}
          >
            {editingName ? (
              <>
                <input
                  ref={nameInputRef}
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleNameSave()}
                  autoFocus
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    border: "none",
                    borderBottom: "2px solid #22c55e",
                    outline: "none",
                    background: "transparent",
                    textAlign: "center",
                    width: 180,
                    padding: "2px 4px",
                  }}
                />
                <button
                  onClick={handleNameSave}
                  disabled={savingName}
                  style={{
                    background: "#22c55e",
                    border: "none",
                    borderRadius: 999,
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    padding: "4px 12px",
                    cursor: savingName ? "not-allowed" : "pointer",
                  }}
                >
                  {savingName ? "…" : "Done"}
                </button>
              </>
            ) : (
              <>
                <span
                  onClick={() => { setNameInput(profileState.name); setEditingName(true); }}
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "#111111",
                  }}
                >
                  {profileState.name}
                </span>
                <button
                  onClick={() => { setNameInput(profileState.name); setEditingName(true); }}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  aria-label="Edit name"
                >
                  <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Location + phone */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              fontSize: 14,
              color: "#555",
            }}
          >
            <div
              onClick={() => setShowLocationEditor(true)}
              style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer" }}
              title="Edit your location"
            >
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{ textDecoration: "underline" }}>{profileState.city}</span>
              <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.13h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.92a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>{profileState.phone}</span>
              <button
                onClick={() => { setEditingPhone(true); setPhoneStep("number"); setNewPhoneInput(""); setPhoneCode(""); setPhoneError(null); }}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginLeft: 2 }}
                aria-label="Edit phone"
              >
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Phone edit flow */}
          {editingPhone && (
            <div style={{ margin: "12px 16px 0", background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 14, padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>
                  {phoneStep === "number" ? "Enter new phone number" : "Enter verification code"}
                </span>
                <button
                  onClick={() => { setEditingPhone(false); setPhoneStep("number"); setPhoneError(null); recaptchaVerifierRef.current?.clear(); recaptchaVerifierRef.current = null; }}
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#999", lineHeight: 1 }}
                >×</button>
              </div>

              {phoneStep === "number" ? (
                <>
                  <input
                    value={newPhoneInput}
                    onChange={(e) => setNewPhoneInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendPhoneCode()}
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    autoFocus
                    style={{ width: "100%", fontSize: 15, border: "none", borderBottom: "2px solid #22c55e", outline: "none", background: "transparent", padding: "4px 2px", marginBottom: 8, boxSizing: "border-box" }}
                  />
                  <p style={{ margin: "0 0 12px", fontSize: 11, color: "#888" }}>
                    Use international format, e.g. +1 416 555 0100
                  </p>
                  <button
                    onClick={handleSendPhoneCode}
                    disabled={sendingCode || !newPhoneInput.trim()}
                    style={{ width: "100%", background: sendingCode || !newPhoneInput.trim() ? "#d1fae5" : "#22c55e", color: "#fff", border: "none", borderRadius: 999, padding: "10px", fontWeight: 700, fontSize: 14, cursor: sendingCode || !newPhoneInput.trim() ? "not-allowed" : "pointer" }}
                  >
                    {sendingCode ? "Sending…" : "Send Verification Code"}
                  </button>
                </>
              ) : (
                <>
                  <p style={{ margin: "0 0 8px", fontSize: 12, color: "#555" }}>
                    Code sent to <strong>{newPhoneInput}</strong>
                  </p>
                  <input
                    value={phoneCode}
                    onChange={(e) => setPhoneCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    onKeyDown={(e) => e.key === "Enter" && handleVerifyPhoneCode()}
                    placeholder="6-digit code"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    autoFocus
                    style={{ width: "100%", fontSize: 22, fontWeight: 700, letterSpacing: 8, textAlign: "center", border: "none", borderBottom: "2px solid #22c55e", outline: "none", background: "transparent", padding: "4px 2px", marginBottom: 12, boxSizing: "border-box" }}
                  />
                  <button
                    onClick={handleVerifyPhoneCode}
                    disabled={verifyingPhone || phoneCode.length < 6}
                    style={{ width: "100%", background: verifyingPhone || phoneCode.length < 6 ? "#d1fae5" : "#22c55e", color: "#fff", border: "none", borderRadius: 999, padding: "10px", fontWeight: 700, fontSize: 14, cursor: verifyingPhone || phoneCode.length < 6 ? "not-allowed" : "pointer" }}
                  >
                    {verifyingPhone ? "Verifying…" : "Verify & Update Phone"}
                  </button>
                  <button
                    onClick={() => { setPhoneStep("number"); setPhoneCode(""); setPhoneError(null); }}
                    style={{ width: "100%", background: "none", border: "none", color: "#888", fontSize: 12, marginTop: 8, cursor: "pointer", textDecoration: "underline" }}
                  >
                    Use a different number
                  </button>
                </>
              )}

              {phoneError && (
                <p style={{ margin: "10px 0 0", fontSize: 12, color: "#ef4444", textAlign: "center" }}>{phoneError}</p>
              )}

              {/* Invisible reCAPTCHA mount point */}
              <div id="phone-recaptcha-container" />
            </div>
          )}

          {/* Email */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 8, fontSize: 14, color: "#555" }}>
            <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {editingEmail ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <input
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleEmailSave()}
                    autoFocus
                    type="email"
                    style={{
                      fontSize: 14,
                      border: "none",
                      borderBottom: "2px solid #22c55e",
                      outline: "none",
                      background: "transparent",
                      textAlign: "center",
                      width: 190,
                      padding: "2px 4px",
                    }}
                  />
                  <button
                    onClick={handleEmailSave}
                    disabled={savingEmail}
                    style={{
                      background: "#22c55e",
                      border: "none",
                      borderRadius: 999,
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 700,
                      padding: "3px 10px",
                      cursor: savingEmail ? "not-allowed" : "pointer",
                    }}
                  >
                    {savingEmail ? "…" : "Done"}
                  </button>
                </div>
                <p style={{ margin: 0, fontSize: 11, color: "#323232", textAlign: "center", maxWidth: 260 }}>
                  Subscription updates and support emails will be sent to this address.
                </p>
              </div>
            ) : (
              <>
                <span>{profileState.email || "Add email"}</span>
                <button
                  onClick={() => { setEmailInput(profileState.email ?? ""); setEditingEmail(true); }}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  aria-label="Edit email"
                >
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Inactive subscription alert */}
        {isSubscriptionInactive && (
          <div
            style={{
              background: "#ffffff",
              borderLeft: "4px solid #f59e0b",
              padding: "14px 20px",
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
            }}
          >
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width={20} height={20} viewBox="0 0 24 24" fill="#f59e0b">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="17" x2="12.01" y2="17" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 14, color: "#717171" }}>
                Your account is not visible to homeowners
              </p>
              <p style={{ margin: "0 0 10px", fontSize: 13, color: "#333333" }}>
                Subscribe to appear on the map and start receiving customer requests.
              </p>
              <button
                onClick={async () => {
                  if (stripeSubscriptionId) {
                    setReactivatingSubscription(true);
                    const authHeaders = await getAuthHeaders();
                    fetch("/api/stripe/reactivate-subscription", {
                      method: "POST",
                      headers: { "Content-Type": "application/json", ...authHeaders },
                      body: JSON.stringify({ subscriptionId: stripeSubscriptionId }),
                    })
                      .then(() => setSubscriptionInfo((prev) => prev ? { ...prev, cancelAtPeriodEnd: false } : prev))
                      .finally(() => setReactivatingSubscription(false));
                  } else {
                    setShowSubscriptionPlanModal(true);
                  }
                }}
                disabled={reactivatingSubscription}
                style={{
                  background: "#fb9f00",
                  color: "#fff",
                  border: "none",
                  borderRadius: 999,
                  padding: "8px 18px",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: reactivatingSubscription ? "not-allowed" : "pointer",
                  opacity: reactivatingSubscription ? 0.6 : 1,
                }}
              >
                {reactivatingSubscription ? "Activating…" : stripeSubscriptionId ? "Reactivate Subscription" : "Subscribe Now"}
              </button>
            </div>
          </div>
        )}

        {/* Availability toggle */}
        <div
          style={{
            background: "#f9fafb",
            borderBottom: "1px solid #e5e7eb",
            padding: "18px 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              marginBottom: 6,
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 17, color: "#222222" }}>I'm available</span>
            <button
              onClick={handleToggle}
              style={{
                width: 52,
                height: 30,
                borderRadius: 999,
                border: "none",
                background: isAvailable ? "#22c55e" : "#bbb",
                cursor: "pointer",
                position: "relative",
                padding: 0,
                transition: "background 0.2s",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 3,
                  left: isAvailable ? 24 : 3,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "#fff",
                  transition: "left 0.2s",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                  display: "block",
                }}
              />
            </button>
          </div>
          <p style={{ textAlign: "center", color: "#888", fontSize: 13, margin: 0 }}>
            We will NOT show you on the map if you are not available
          </p>
        </div>

        {/* Services */}
        <div style={{ padding: "20px 20px 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 0,
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 17, color: "#222222" }}>Your Services:</span>
            <button
              onClick={() => setShowEditServices(true)}
              style={{
                background: "none",
                border: "none",
                color: "#22c55e",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Edit
            </button>
          </div>

          {profileState.selectedServices.map((id) => {
            const meta = SERVICE_META[id];
            if (!meta) return null;
            return (
              <div key={id} style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                  <img
                    src={meta.icon}
                    alt={meta.shortName}
                    style={{ width: 32, height: 32, objectFit: "contain" }}
                  />
                  <span style={{ fontSize: 16, color: "#555", fontWeight: 500 }}>
                    {meta.shortName}
                  </span>
                </div>
                <p style={{ color: "#666", fontSize: 14, margin: "0 0 6px 38px" }}>
                  {profileState.descriptions[id]}
                </p>
              </div>
            );
          })}

          {/* Tools preference */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 15, marginTop: 4 }}>
              <BsCircleFill color="#22c55e" size={10} />
            <span style={{ fontSize: 14, color: "#555", fontWeight: 500 }}>
              {profileState.hasTools ? "I have tools" : "I will use home-owner's tools"}
            </span>
          </div>

          {/* Payment Methods */}
          <div style={{ marginTop: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 17, display: "block", marginBottom: 12, color: "#222222" }}>
              Payment Methods:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              {profileState.paymentMethods.map((method) => (
                <span
                  key={method}
                  style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 15 }}
                >
                  <GreenCheck />
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Subscription */}
          {stripeSubscriptionId && (
            <div style={{ marginTop: 18 }}>
              <span style={{ fontWeight: 700, fontSize: 17, display: "block", marginBottom: 10 }}>
                My Subscription:
              </span>
              {subscriptionInfo ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 14, color: "#555" }}>
                    Subscription date:{" "}
                    <span style={{ fontWeight: 600 }}>
                      {new Date(subscriptionInfo.created * 1000).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </span>
                  </span>
                  {!subscriptionInfo.cancelAtPeriodEnd ? (
                    <>
                      <span style={{ fontSize: 14, color: "#555" }}>
                        Next payment:{" "}
                        <span style={{ fontWeight: 600 }}>
                          {new Date(
                            (subscriptionInfo.trialEnd ?? subscriptionInfo.currentPeriodEnd) * 1000
                          ).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                        </span>
                      </span>
                      <button
                        onClick={async () => {
                          if (!stripeSubscriptionId) return;
                          setCancellingSubscription(true);
                          try {
                            const authHeaders = await getAuthHeaders();
                            await fetch("/api/stripe/cancel-subscription", {
                              method: "POST",
                              headers: { "Content-Type": "application/json", ...authHeaders },
                              body: JSON.stringify({ subscriptionId: stripeSubscriptionId }),
                            });
                            setSubscriptionInfo((prev) => prev ? { ...prev, cancelAtPeriodEnd: true } : prev);
                          } finally {
                            setCancellingSubscription(false);
                          }
                        }}
                        disabled={cancellingSubscription}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#555",
                          fontSize: 14,
                          textDecoration: "underline",
                          cursor: cancellingSubscription ? "not-allowed" : "pointer",
                          padding: 0,
                          textAlign: "left",
                          marginTop: 4,
                        }}
                      >
                        {cancellingSubscription ? "Cancelling…" : "Cancel my subscription"}
                      </button>
                    </>
                  ) : (
                    <>
                      <span style={{ fontSize: 14, color: "#888" }}>
                        Subscription ends on:{" "}
                        <span style={{ fontWeight: 600, color: "#555" }}>
                          {new Date(subscriptionInfo.currentPeriodEnd * 1000).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                        </span>
                      </span>
                      <button
                        onClick={async () => {
                          if (!stripeSubscriptionId) return;
                          setReactivatingSubscription(true);
                          try {
                            const authHeaders = await getAuthHeaders();
                            await fetch("/api/stripe/reactivate-subscription", {
                              method: "POST",
                              headers: { "Content-Type": "application/json", ...authHeaders },
                              body: JSON.stringify({ subscriptionId: stripeSubscriptionId }),
                            });
                            setSubscriptionInfo((prev) => prev ? { ...prev, cancelAtPeriodEnd: false } : prev);
                          } finally {
                            setReactivatingSubscription(false);
                          }
                        }}
                        disabled={reactivatingSubscription}
                        style={{
                          background: "none",
                          border: "none",
                          color: reactivatingSubscription ? "#aaa" : "#22c55e",
                          fontSize: 14,
                          textDecoration: "underline",
                          cursor: reactivatingSubscription ? "not-allowed" : "pointer",
                          padding: 0,
                          textAlign: "left",
                          marginTop: 4,
                        }}
                      >
                        {reactivatingSubscription ? "Subscribing…" : "Subscribe"}
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <span style={{ fontSize: 14, color: "#aaa" }}>Loading…</span>
              )}
            </div>
          )}

          {/* Share Profile */}
          <div style={{ borderTop: "1px solid #e5e7eb", marginTop: 24, padding: "20px 0 4px" }}>
            <span style={{ fontWeight: 700, fontSize: 15, color: "#111827", display: "block", marginBottom: 12 }}>
              Share Your Profile
            </span>
            {profileUrl ? (
              <>
                <div style={{
                  display: "flex", alignItems: "center",
                  background: "#f3f4f6", borderRadius: 10, padding: "10px 14px", marginBottom: 12,
                  overflow: "hidden",
                }}>
                  <span style={{ flex: 1, fontSize: 13, color: "#6b7280", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {profileUrl}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    onClick={handleCopyLink}
                    style={{
                      flex: 1, padding: "11px 0", borderRadius: 10,
                      border: "1.5px solid #22c55e",
                      background: copied ? "#22c55e" : "#fff",
                      color: copied ? "#fff" : "#22c55e",
                      fontWeight: 700, fontSize: 14, cursor: "pointer", transition: "all 0.2s",
                    }}
                  >
                    {copied ? "Copied!" : "Copy Link"}
                  </button>
                  <button
                    onClick={handleShare}
                    style={{
                      flex: 1, padding: "11px 0", borderRadius: 10,
                      border: "none", background: "#22c55e", color: "#fff",
                      fontWeight: 700, fontSize: 14, cursor: "pointer",
                    }}
                  >
                    Share
                  </button>
                </div>
              </>
            ) : (
              <span style={{ fontSize: 13, color: "#9ca3af" }}>
                Update your location to enable profile sharing.
              </span>
            )}
          </div>

          {/* Sign out */}
          <div style={{ borderTop: "1px solid #b2b2b2", marginTop: 24, paddingTop: 24, paddingBottom: 40 }}>
            <button
              onClick={async () => { await signOut(auth); onClose(); }}
              style={{
                background: "#22c55e",
                border: "none",
                borderRadius: 999,
                color: "#ffffff",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                padding: "10px 24px",
              }}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfileModal;
