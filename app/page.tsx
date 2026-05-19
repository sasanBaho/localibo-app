"use client";
import { useState, useEffect } from "react";
import ProviderPopupCard from "@/components/ui/ProviderPopupCard";
import type { ProviderPopupCardProps } from "@/components/ui/ProviderPopupCard";
import Navbar from "@/components/ui/Navbar";

type Provider = Omit<ProviderPopupCardProps["provider"], ""> & {
  id: string;
  latitude: number;
  longitude: number;
  imageUrl: string;
  providerName?: string;
  instagramID?: string;
  description?: string;
  rating?: number;
  ratingsCount?: number;
  selectedServices?: string[];
  phoneNumber: String;
  hasTools?: boolean;
  paymentMethods?: string[];
  isAvailable?: boolean;
  subscriptionStatus?: string;
};

import { Map } from "@/components/map/components/Map";
import { MapControls } from "@/components/map/components/MapControls";
import { MapMarker, MarkerContent } from "@/components/map/components/MapMarker";
import { trackEvent, trackPageView } from "@/lib/analytics";
import { db, collection, getDocs, auth, query, where, doc, serverTimestamp } from "../firebase";
import { updateDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signInAnonymously, signOut } from "firebase/auth";
import AuthFlow from "@/components/auth/AuthFlow";
import ProviderProfileModal, { ProviderProfile } from "@/components/auth/ProviderProfileModal";
import UnsubscribedPopup from "@/components/auth/UnsubscribedPopup";
import SubscriptionModal from "@/components/auth/SubscriptionModal";

function ProviderAvatar({ imageUrl, name, rating, ratingsCount, showLock }: {
  imageUrl: string;
  name: string;
  rating?: number;
  ratingsCount?: number;
  showLock?: boolean;
}) {
  const hasRating = (ratingsCount ?? 0) > 0;
  return (
    <div style={{
      position: "absolute",
      left: -23,
      top: -23,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      {/* Circle */}
      <div style={{ position: "relative" }}>
        <div style={{
          width: 46,
          height: 46,
          borderRadius: "50%",
          overflow: "hidden",
          border: "1px solid #fff",
          background: "#eee",
          boxShadow: "0 2px 8px rgba(0,0,0,0.22)",
        }}>
          <img src={imageUrl} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        {/* Lock badge — bottom-right when own unsubscribed pin */}
        {showLock ? (
          <span style={{
            position: "absolute",
            top: -10,
            right: -10,
            width: 28,
            height: 28,
            background: "#ffffff",
            borderRadius: "50%",
            border: "1.5px solid #000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
          }}>
           <img
            src="/hidden.png"
            alt="Hidden"
            width={15}
            height={15}
            style={{ display: "block" }}
          />
          </span>
        ) : !hasRating ? (
          /* "New" badge — top-right */
          <span style={{
            position: "absolute",
            top: -10,
            right: -16,
            background: "#ef4444",
            color: "#fff",
            fontSize: 12,
            fontWeight: 700,
            borderRadius: 999,
            padding: "2px 7px",
            whiteSpace: "nowrap",
            boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
            letterSpacing: 0.2,
          }}>
            New
          </span>
        ) : null}
      </div>
      {/* Star rating — below circle */}
      {!showLock && hasRating && (
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          background: "#fff",
          borderRadius: 999,
          padding: "2px 6px",
          marginTop: -5,
          boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
          zIndex: 999,
        }}>
          <svg width={14} height={14} viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#222" }}>
            {(rating ?? 0).toFixed(1)}
          </span>
        </div>
      )}
    </div>
  );
}

function UserLocationIndicator() {
  return (
    <>
      <span
        style={{
          display: "block",
          width: 32,
          height: 32,
          background: "rgba(0, 153, 255, 0.2)",
          borderRadius: "50%",
          position: "absolute",
          left: -16,
          top: -16,
          animation: "pulse 1.5s infinite",
          border: "2px solid #09f",
          pointerEvents: "none",
        }}
      />
      <span
        style={{
          display: "block",
          width: 15,
          height: 15,
          background: "#09f",
          borderRadius: "50%",
          position: "absolute",
          left: -6,
          top: -6,
          boxShadow: "0 0 8px 2px #09f7",
          border: "2px solid #fff",
          pointerEvents: "none",
        }}
      />
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          70% { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </>
  );
}

export default function Home() {
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const mapStyle = "https://tiles.openfreemap.org/styles/bright";
  const [providers, setProviders] = useState<Provider[]>([]);
  const [viewport, setViewport] = useState({
    zoom: 11,
    bearing: 0,
    pitch: 0,
  });
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [activeService, setActiveService] = useState<"snow" | "lawn">("lawn");
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [authDefaultStep, setAuthDefaultStep] = useState<"login" | "create">("login");
  const [currentProviderData, setCurrentProviderData] = useState<ProviderProfile | null>(null);
  const [showProfile, setShowProfile] = useState(false);

  const [mounted, setMounted] = useState(false);
  const [completingStripeRegistration, setCompletingStripeRegistration] = useState(false);
  const [providerLocation, setProviderLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [providerStripeSubId, setProviderStripeSubId] = useState<string | null>(null);
  const [showUnsubscribedPopup, setShowUnsubscribedPopup] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [subscribeModalLoading, setSubscribeModalLoading] = useState(false);
  const [showOwnPin, setShowOwnPin] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("stripe_session_id");
    const cancelled = params.get("stripe_cancelled");

    if (cancelled) {
      localStorage.removeItem("pendingProviderRegistration");
      window.history.replaceState({}, "", "/");
      return;
    }
    if (!sessionId) return;

    const pending = localStorage.getItem("pendingProviderRegistration");
    if (!pending) return;

    setCompletingStripeRegistration(true);
    (async () => {
      try {
        const res = await fetch(`/api/stripe/verify-session?session_id=${sessionId}`);
        const data = await res.json();
        if (!data.ok) return;

        const { uid } = JSON.parse(pending);
        await updateDoc(doc(db, "providers", uid), {
          stripeCustomerId: data.customerId,
          stripeSubscriptionId: data.subscriptionId,
          subscriptionStatus: data.subscriptionStatus,
          updatedAt: serverTimestamp(),
        });
        localStorage.removeItem("pendingProviderRegistration");
        window.history.replaceState({}, "", "/");

        const providerSnap = await getDoc(doc(db, "providers", uid));
        if (providerSnap.exists()) {
          const d = providerSnap.data();
          setCurrentProviderData({
            uid,
            name: d.providerName ?? "",
            phone: d.phoneNumber ?? "",
            email: d.email ?? "",
            photoUrl: d.imageUrl ?? "",
            city: d.city ?? "",
            selectedServices: Array.isArray(d.selectedServices) ? d.selectedServices : [],
            descriptions: d.description && typeof d.description === "object" ? d.description : {},
            hasTools: d.hasTools ?? false,
            paymentMethods: Array.isArray(d.paymentMethods) ? d.paymentMethods : [],
            isAvailable: d.isAvailable ?? true,
            profileViews: d.profileViewCount ?? 0,
            subscriptionStatus: d.subscriptionStatus,
            rating: d.rating,
            ratingsCount: d.ratingsCount,
            latitude: d.latitude,
            longitude: d.longitude,
          });
          setProviderLocation({ lat: d.latitude ?? 0, lng: d.longitude ?? 0 });
          setProviderStripeSubId(d.stripeSubscriptionId ?? null);
        }
        setShowProfile(true);

        const querySnapshot = await getDocs(collection(db, "providers"));
        const fetched: any[] = [];
        querySnapshot.forEach((docSnap) => {
          const d = docSnap.data();
          fetched.push({
            id: docSnap.id,
            latitude: d.latitude,
            longitude: d.longitude,
            imageUrl: d.imageUrl,
            providerName: d.providerName,
            instagramID: d.instagramID,
            rating: d.rating,
            ratingsCount: d.ratingsCount,
            description: d.description,
            phoneNumber: d.phoneNumber,
            selectedServices: Array.isArray(d.selectedServices) ? d.selectedServices : [],
            hasTools: d.hasTools || false,
            paymentMethods: Array.isArray(d.paymentMethods) ? d.paymentMethods : [],
            isAvailable: d.isAvailable ?? true,
            subscriptionStatus: d.subscriptionStatus,
          });
        });
        setProviders(fetched);
      } finally {
        setCompletingStripeRegistration(false);
      }
    })();
  }, [mounted]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        signInAnonymously(auth).catch(() => {});
        setCurrentProviderData(null);
        return;
      }
      if (user.isAnonymous) {
        setCurrentProviderData(null);
        return;
      }
      try {
        const snap = await getDocs(query(collection(db, "providers"), where("uid", "==", user.uid)));
        if (!snap.empty) {
          const data = snap.docs[0].data();
          const subStatus = data.subscriptionStatus ?? "unsubscribed";
          setCurrentProviderData({
            uid: user.uid,
            name: data.providerName ?? "",
            phone: data.phoneNumber ?? "",
            email: data.email ?? "",
            photoUrl: data.imageUrl ?? "",
            city: data.city ?? "",
            selectedServices: Array.isArray(data.selectedServices) ? data.selectedServices : [],
            descriptions: data.description && typeof data.description === "object" ? data.description : {},
            hasTools: data.hasTools ?? false,
            paymentMethods: Array.isArray(data.paymentMethods) ? data.paymentMethods : [],
            isAvailable: data.isAvailable ?? true,
            profileViews: data.profileViewCount ?? data.profileViews ?? 0,
            subscriptionStatus: subStatus,
            rating: data.rating,
            ratingsCount: data.ratingsCount,
            latitude: data.latitude,
            longitude: data.longitude,
          });
          setProviderStripeSubId(data.stripeSubscriptionId ?? null);
          if (data.latitude && data.longitude) {
            setProviderLocation({ lat: data.latitude, lng: data.longitude });
          }
          const isInactive = !["active", "trialing"].includes(subStatus);
          setShowOwnPin(isInactive);
          if (isInactive && !sessionStorage.getItem("unsubscribedPopupSeen")) {
            setShowUnsubscribedPopup(true);
          }
        }
      } catch {
        setCurrentProviderData(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    trackPageView({
      page_title: "Home Map",
      page_path: "/",
      page_location: typeof window !== "undefined" ? window.location.href : "/",
    });

    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords: [number, number] = [pos.coords.longitude, pos.coords.latitude];
          setViewport((v) => ({
            ...v,
            center: coords,
            zoom: 14,
          }));
          setUserLocation(coords);
        },
        () => {},
        { enableHighAccuracy: true }
      );
    }
    async function fetchProviders() {
      const querySnapshot = await getDocs(collection(db, "providers"));
      const fetchedProviders: any[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedProviders.push({
          id: doc.id,
          latitude: data.latitude,
          longitude: data.longitude,
          imageUrl: data.imageUrl,
          providerName: data.providerName,
          instagramID: data.instagramID,
          rating: data.rating,
          ratingsCount: data.ratingsCount,
          description: data.description,
          phoneNumber: data.phoneNumber,
          selectedServices: Array.isArray(data.selectedServices) ? data.selectedServices : [],
          hasTools: data.hasTools || false,
          paymentMethods: Array.isArray(data.paymentMethods) ? data.paymentMethods : [],
          isAvailable: data.isAvailable ?? true,
          subscriptionStatus: data.subscriptionStatus,
        });
      });
      setProviders(fetchedProviders);
    }
    fetchProviders();
  }, [mounted]);

  // Filtering logic for providers
  const filteredProviders = providers.filter((provider) => {
    if (provider.isAvailable === false) return false;
    const sub = provider.subscriptionStatus;
    if (sub && !["active", "trialing"].includes(sub)) return false;
    if (activeService === "snow") {
      return provider.selectedServices?.includes("service-two");
    } else {
      return provider.selectedServices?.includes("service-one");
    }
  });

  // Helper to get relevant description for popup
  function getRelevantDescription(provider: Provider | null) {
    if (!provider) return "";
    if (provider.description && typeof provider.description === "object") {
      if (activeService === "snow") {
        return provider.description["service-two"] || "";
      } else {
        return provider.description["service-one"] || "";
      }
    }
    return provider.description || "";
  }

  function handleProviderSelect(provider: Provider) {
    trackEvent("Provider Profile Viewed", {
      providerId: provider.id,
      providerName: provider.providerName || "Unknown",
      serviceType: activeService,
      hasTools: Boolean(provider.hasTools),
      rating: provider.rating ?? null,
      ratingsCount: provider.ratingsCount ?? 0,
      paymentMethodsCount: provider.paymentMethods?.length ?? 0,
      hasInstagram: Boolean(provider.instagramID),
      viewSource: "map_annotation",
    });

    fetch("/api/providers/record-view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ providerId: provider.id }),
    })
      .then((r) => r.json())
      .then((d) => { if (!d.ok) console.error("[record-view]", d.error); })
      .catch((e) => console.error("[record-view] fetch failed", e));

    setSelectedProvider(provider);
  }

  const handleSignOut = async () => {
    await signOut(auth);
    // onAuthStateChanged fires and clears currentProviderData automatically
  };

  const handleCancelSubscription = async () => {
    if (!currentProviderData) return;
    const snap = await getDocs(query(collection(db, "providers"), where("uid", "==", currentProviderData.uid)));
    if (snap.empty) return;
    const subscriptionId = snap.docs[0].data().stripeSubscriptionId;
    if (!subscriptionId) return;
    await fetch("/api/stripe/cancel-subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subscriptionId }),
    });
  };

  const handleUnsubscribedGoLive = async () => {
    sessionStorage.setItem("unsubscribedPopupSeen", "1");
    if (providerStripeSubId) {
      await fetch("/api/stripe/reactivate-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subscriptionId: providerStripeSubId }),
      });
      setCurrentProviderData((prev) => prev ? { ...prev, subscriptionStatus: "active" } : prev);
      setShowOwnPin(false);
      setShowUnsubscribedPopup(false);
    } else {
      setShowUnsubscribedPopup(false);
      setShowSubscribeModal(true);
    }
  };

  const handleExistingProviderSubscribe = async (priceId: string) => {
    if (!currentProviderData) return;
    setSubscribeModalLoading(true);
    try {
      localStorage.setItem("pendingProviderRegistration", JSON.stringify({ uid: currentProviderData.uid }));
      const res = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, uid: currentProviderData.uid, email: currentProviderData.email, phone: currentProviderData.phone }),
      });
      const { url } = await res.json();
      window.location.href = url;
    } catch {
      setSubscribeModalLoading(false);
    }
  };

  function handleServiceChange(service: "snow" | "lawn") {
    trackEvent("Service Filter Switched", {
      selectedService: service,
      previousService: activeService,
      providerResultsCount:
        service === "snow"
          ? providers.filter((provider) => provider.selectedServices?.includes("service-two")).length
          : providers.filter((provider) => provider.selectedServices?.includes("service-one")).length,
    });

    if (selectedProvider) {
      const serviceKey = service === "snow" ? "service-two" : "service-one";
      if (!selectedProvider.selectedServices?.includes(serviceKey)) {
        setSelectedProvider(null);
      }
    }

    setActiveService(service);
  }

  return (
    <>
      <Navbar
        onCreateAccount={currentProviderData ? undefined : () => { setAuthDefaultStep("create"); setShowAuth(true); }}
        onSignIn={currentProviderData ? undefined : () => { setAuthDefaultStep("login"); setShowAuth(true); }}
        currentUser={currentProviderData ? { photoUrl: currentProviderData.photoUrl, name: currentProviderData.name } : null}
        onEditAccount={() => setShowProfile(true)}
        onSignOut={handleSignOut}
        onCancelSubscription={handleCancelSubscription}
        canCancelSubscription={["active", "trialing"].includes(currentProviderData?.subscriptionStatus ?? "")}
      >
        <button
          onClick={() => handleServiceChange("snow")}
          style={{
            border: activeService === "snow" ? "1px solid #0369a1" : "1px solid #e2e8f0",
            background: activeService === "snow" ? "#e0f2fe" : "#f8fafc",
            fontWeight: 700,
            fontSize: 15,
            color: activeService === "snow" ? "#0369a1" : "#64748b",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: isSmallScreen ? "7px 10px" : "7px 16px",
            borderRadius: 9999,
            transition: "all 0.15s ease",
          }}
        >
          <img
            src={activeService === "snow" ? "/shovel-darkblue.png" : "/shovel-gray.png"}
            alt="Shovel icon"
            style={{ width: 28, height: 28 }}
          />
          {!isSmallScreen && <span>Snow Removal</span>}
        </button>

        <button
          onClick={() => handleServiceChange("lawn")}
          style={{
            border: activeService === "lawn" ? "1px solid #15803d" : "1px solid #e2e8f0",
            background: activeService === "lawn" ? "#dcfce7" : "#f8fafc",
            fontWeight: 700,
            fontSize: 15,
            color: activeService === "lawn" ? "#15803d" : "#64748b",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: isSmallScreen ? "7px 10px" : "7px 16px",
            borderRadius: 9999,
            transition: "all 0.15s ease",
          }}
        >
          <img
            src={activeService === "lawn" ? "/lawn-mower-darkgreen.png" : "/lawn-mower-gray.png"}
            alt="Lawn mower icon"
            style={{ width: 30, height: 30 }}
          />
          {!isSmallScreen && <span>Lawn Care</span>}
        </button>
      </Navbar>
      {/* Map Section */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100dvh",
          minHeight: "100svh",
          zIndex: 0,
        }}
      >
        <Map
          className="w-full h-full"
          viewport={viewport}
          onViewportChange={setViewport}
          styles={{ light: mapStyle, dark: mapStyle }}
        >
          <MapControls showLocate={true} onLocate={(coords) => {
            setViewport((v) => ({ ...v, center: [coords.longitude, coords.latitude], zoom: 14 }));
            setUserLocation([coords.longitude, coords.latitude]);
          }} />
          {userLocation && (
            <MapMarker longitude={userLocation[0]} latitude={userLocation[1]}>
              <MarkerContent>
                <UserLocationIndicator />
              </MarkerContent>
            </MapMarker>
          )}
          {filteredProviders.map(
            (provider, idx) =>
              provider.latitude && provider.longitude && provider.imageUrl && (
                <MapMarker
                  key={idx}
                  longitude={provider.longitude}
                  latitude={provider.latitude}
                >
                  <MarkerContent>
                    <div onClick={() => handleProviderSelect(provider)} style={{ cursor: "pointer" }}>
                      <ProviderAvatar
                        imageUrl={provider.imageUrl}
                        name={provider.providerName || "Provider"}
                        rating={provider.rating}
                        ratingsCount={provider.ratingsCount}
                      />
                    </div>
                  </MarkerContent>
                </MapMarker>
              )
          )}

          {/* Owner's own greyscale pin — only visible to themselves when unsubscribed and available */}
          {showOwnPin && providerLocation && currentProviderData && currentProviderData.isAvailable !== false &&
            (activeService === "snow"
              ? currentProviderData.selectedServices?.includes("service-two")
              : currentProviderData.selectedServices?.includes("service-one")) && (
            <MapMarker longitude={providerLocation.lng} latitude={providerLocation.lat}>
              <MarkerContent>
                <div
                  onClick={() => setSelectedProvider({
                    id: currentProviderData.uid,
                    latitude: providerLocation.lat,
                    longitude: providerLocation.lng,
                    imageUrl: currentProviderData.photoUrl,
                    providerName: currentProviderData.name,
                    phoneNumber: currentProviderData.phone,
                    selectedServices: currentProviderData.selectedServices,
                    hasTools: currentProviderData.hasTools,
                    paymentMethods: currentProviderData.paymentMethods,
                    subscriptionStatus: currentProviderData.subscriptionStatus,
                    rating: currentProviderData.rating,
                    ratingsCount: currentProviderData.ratingsCount,
                    description: currentProviderData.descriptions,
                  } as any)}
                  style={{ cursor: "pointer" }}
                >
                  <ProviderAvatar
                    imageUrl={currentProviderData.photoUrl}
                    name={currentProviderData.name}
                    showLock
                  />
                </div>
              </MarkerContent>
            </MapMarker>
          )}
        </Map>
      </div>
      {selectedProvider && (
        <ProviderPopupCard
          provider={{ ...selectedProvider, description: getRelevantDescription(selectedProvider) }}
          onClose={() => setSelectedProvider(null)}
          activeService={activeService}
          isOwnerInactive={
            !!(currentProviderData &&
              selectedProvider.id === currentProviderData.uid &&
              !["active", "trialing"].includes(currentProviderData.subscriptionStatus ?? ""))
          }
          isOwnProfile={!!(currentProviderData && selectedProvider.id === currentProviderData.uid)}
          onSubscribe={
            currentProviderData && selectedProvider.id === currentProviderData.uid
              ? () => { setSelectedProvider(null); setShowSubscribeModal(true); }
              : undefined
          }
        />
      )}
      {showProfile && currentProviderData && (
        <ProviderProfileModal
          profile={currentProviderData}
          onClose={() => setShowProfile(false)}
          onAvailabilityChange={(isAvailable) => {
            setCurrentProviderData((prev) => prev ? { ...prev, isAvailable } : prev);
            setProviders((prev) =>
              prev.map((p) =>
                p.id === currentProviderData.uid ? { ...p, isAvailable } : p
              )
            );
          }}
          onProfileUpdated={(updated) => {
            setCurrentProviderData(updated);
            if (updated.latitude && updated.longitude) {
              setProviderLocation({ lat: updated.latitude, lng: updated.longitude });
            }
            setProviders((prev) =>
              prev.map((p) =>
                p.id === updated.uid
                  ? {
                      ...p,
                      selectedServices: updated.selectedServices,
                      description: updated.descriptions as any,
                      hasTools: updated.hasTools,
                      paymentMethods: updated.paymentMethods,
                      imageUrl: updated.photoUrl,
                    }
                  : p
              )
            );
          }}
        />
      )}
      {completingStripeRegistration && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.45)",
        }}>
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: "32px 40px",
            textAlign: "center",
          }}>
            <div style={{
              width: 40,
              height: 40,
              border: "4px solid #e0e0e0",
              borderTopColor: "#22c55e",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
              margin: "0 auto 16px",
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <p style={{ margin: 0, fontWeight: 600, fontSize: 16 }}>Setting up your profile…</p>
          </div>
        </div>
      )}

      {showUnsubscribedPopup && currentProviderData && (
        <UnsubscribedPopup
          profileViews={currentProviderData.profileViews}
          isCancelled={!!providerStripeSubId}
          onGoLive={handleUnsubscribedGoLive}
          onDismiss={() => {
            sessionStorage.setItem("unsubscribedPopupSeen", "1");
            setShowUnsubscribedPopup(false);
          }}
        />
      )}

      {showSubscribeModal && (
        <SubscriptionModal
          onClose={() => setShowSubscribeModal(false)}
          onPlanSelected={handleExistingProviderSubscribe}
          loading={subscribeModalLoading}
        />
      )}

      <AuthFlow
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        userLocation={userLocation}
        defaultStep={authDefaultStep}
        onProviderCreated={async () => {
          const user = auth.currentUser;
          if (user && !user.isAnonymous) {
            const snap = await getDocs(query(collection(db, "providers"), where("uid", "==", user.uid)));
            if (!snap.empty) {
              const data = snap.docs[0].data();
              const subStatus = data.subscriptionStatus ?? "unsubscribed";
              setCurrentProviderData({
                uid: user.uid,
                name: data.providerName ?? "",
                phone: data.phoneNumber ?? "",
                email: data.email ?? "",
                photoUrl: data.imageUrl ?? "",
                city: data.city ?? "",
                selectedServices: Array.isArray(data.selectedServices) ? data.selectedServices : [],
                descriptions: data.description && typeof data.description === "object" ? data.description : {},
                hasTools: data.hasTools ?? false,
                paymentMethods: Array.isArray(data.paymentMethods) ? data.paymentMethods : [],
                isAvailable: data.isAvailable ?? true,
                profileViews: data.profileViewCount ?? 0,
                subscriptionStatus: subStatus,
                rating: data.rating,
                ratingsCount: data.ratingsCount,
                latitude: data.latitude,
                longitude: data.longitude,
              });
              if (data.latitude && data.longitude) {
                setProviderLocation({ lat: data.latitude, lng: data.longitude });
              }
              setShowOwnPin(!["active", "trialing"].includes(subStatus));
            }
          }
          const querySnapshot = await getDocs(collection(db, "providers"));
          const fetched: any[] = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            fetched.push({
              id: doc.id,
              latitude: data.latitude,
              longitude: data.longitude,
              imageUrl: data.imageUrl,
              providerName: data.providerName,
              instagramID: data.instagramID,
              rating: data.rating,
              ratingsCount: data.ratingsCount,
              description: data.description,
              phoneNumber: data.phoneNumber,
              selectedServices: Array.isArray(data.selectedServices) ? data.selectedServices : [],
              hasTools: data.hasTools || false,
              paymentMethods: Array.isArray(data.paymentMethods) ? data.paymentMethods : [],
              isAvailable: data.isAvailable ?? true,
              subscriptionStatus: data.subscriptionStatus ?? "unsubscribed",
            });
          });
          setProviders(fetched);
        }}
      />
    </>
  );
}
