"use client";
import { useState } from "react";
import { Map } from "@/components/map/components/Map";
import { MapMarker, MarkerContent } from "@/components/map/components/MapMarker";

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

interface SetLocationModalProps {
  initialLng: number;
  initialLat: number;
  providerImageUrl?: string;
  onConfirm: (lng: number, lat: number, city: string, country: string) => void;
  onBack?: () => void;
  onClose?: () => void;
}

export default function SetLocationModal({
  initialLng,
  initialLat,
  providerImageUrl,
  onConfirm,
  onBack,
  onClose,
}: SetLocationModalProps) {
  const [markerPos, setMarkerPos] = useState({ lng: initialLng, lat: initialLat });
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [geocoding, setGeocoding] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const handleDragEnd = async (lngLat: { lng: number; lat: number }) => {
    setMarkerPos(lngLat);
    setGeocoding(true);
    const result = await getCityAndCountry(lngLat.lat, lngLat.lng);
    setCity(result.city);
    setCountry(result.country);
    setGeocoding(false);
  };

  const handleConfirm = async () => {
    setConfirming(true);
    let resolvedCity = city;
    let resolvedCountry = country;
    if (!resolvedCity) {
      const result = await getCityAndCountry(markerPos.lat, markerPos.lng);
      resolvedCity = result.city;
      resolvedCountry = result.country;
    }
    onConfirm(markerPos.lng, markerPos.lat, resolvedCity, resolvedCountry);
  };

  const handleBack = onBack ?? onClose;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 600,
      display: "flex",
      flexDirection: "column",
      background: "#f9fafb",
    }}>
      {/* Header */}
      <header style={{
        background: "#fff",
        borderBottom: "1px solid #f3f4f6",
        padding: "14px 20px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        flexShrink: 0,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}>
        <button
          onClick={handleBack}
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "#f3f4f6",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#111827" }}>Set Your Location</h2>
        </div>
      </header>

      {/* Instruction */}
      <div style={{
        background: "#fff",
        padding: "10px 20px",
        borderBottom: "1px solid #f3f4f6",
        flexShrink: 0,
      }}>
        <p style={{ margin: 0, fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>
          Drag the pin to choose exactly where you appear on the map for homeowners.
        </p>
      </div>

      {/* Map */}
      <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
        <Map
          center={[markerPos.lng, markerPos.lat]}
          zoom={13}
          className="h-full w-full"
        >
          <MapMarker
            draggable
            longitude={markerPos.lng}
            latitude={markerPos.lat}
            onDrag={(lngLat) => setMarkerPos({ lng: lngLat.lng, lat: lngLat.lat })}
            onDragEnd={handleDragEnd}
          >
            <MarkerContent>
              <div style={{ cursor: "grab", position: "relative" }}>
                {/* Pin drop shadow */}
                <div style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid #22c55e",
                  boxShadow: "0 4px 16px rgba(34,197,94,0.4), 0 2px 8px rgba(0,0,0,0.2)",
                  background: "#e5e7eb",
                  position: "relative",
                }}>
                  {providerImageUrl ? (
                    <img
                      src={providerImageUrl}
                      alt="Your location"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  ) : (
                    <div style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#22c55e",
                    }}>
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                  )}
                </div>
                {/* Pin tail */}
                <div style={{
                  width: 0,
                  height: 0,
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderTop: "10px solid #22c55e",
                  margin: "0 auto",
                  marginTop: -1,
                }} />
              </div>
            </MarkerContent>
          </MapMarker>
        </Map>
      </div>

      {/* Bottom card */}
      <div style={{
        background: "#fff",
        borderTop: "1px solid #f3f4f6",
        padding: "16px 20px 28px",
        flexShrink: 0,
        boxShadow: "0 -2px 12px rgba(0,0,0,0.06)",
      }}>
        {/* Location label */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 14,
          minHeight: 24,
        }}>
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {geocoding ? (
            <span style={{ fontSize: 14, color: "#9ca3af" }}>Locating…</span>
          ) : city ? (
            <span style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>
              {city}{country ? `, ${country}` : ""}
            </span>
          ) : (
            <span style={{ fontSize: 14, color: "#9ca3af" }}>Drag the pin to set your location</span>
          )}
        </div>

        <button
          onClick={handleConfirm}
          disabled={confirming || geocoding}
          style={{
            width: "100%",
            background: confirming || geocoding ? "#86efac" : "#22c55e",
            color: "#fff",
            border: "none",
            borderRadius: 14,
            padding: "15px 0",
            fontSize: 16,
            fontWeight: 700,
            cursor: confirming || geocoding ? "not-allowed" : "pointer",
            transition: "background 0.15s",
          }}
        >
          {confirming ? "Saving…" : "Confirm Location"}
        </button>
      </div>
    </div>
  );
}
