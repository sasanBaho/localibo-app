"use client";
import React, { useEffect, useState } from "react";
import { auth, db } from "@/firebase";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

interface RatingModalProps {
  providerId: string;
  providerName: string;
  onClose: () => void;
  onRated: (newAvgRating: number, newCount: number) => void;
}

const RatingModal: React.FC<RatingModalProps> = ({ providerId, providerName, onClose, onRated }) => {
  useBodyScrollLock();

  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);
  const [existingRating, setExistingRating] = useState(0);
  const [isLoadingExisting, setIsLoadingExisting] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    loadExistingRating();
  }, [providerId]);

  async function loadExistingRating() {
    const uid = auth.currentUser?.uid;
    if (!uid) { setIsLoadingExisting(false); return; }
    try {
      const snap = await getDoc(doc(db, "providers", providerId, "ratings", uid));
      if (snap.exists()) {
        const r = snap.data().rating as number;
        setExistingRating(r);
        setSelected(r);
      }
    } finally {
      setIsLoadingExisting(false);
    }
  }

  async function updateProviderAverage() {
    const ratingsSnap = await getDocs(collection(db, "providers", providerId, "ratings"));
    const ratings = ratingsSnap.docs
      .map((d) => d.data().rating as number)
      .filter((r) => typeof r === "number");

    if (ratings.length === 0) return;

    const average = ratings.reduce((sum, r) => sum + r, 0) / ratings.length;
    await updateDoc(doc(db, "providers", providerId), {
      rating: average,
      ratingsCount: ratings.length,
    });
    onRated(average, ratings.length);
  }

  async function handleSubmit() {
    if (!selected || submitting) return;
    const uid = auth.currentUser?.uid;
    if (!uid) return;

    setSubmitting(true);
    setError(null);
    try {
      const ratingRef = doc(db, "providers", providerId, "ratings", uid);
      if (existingRating > 0) {
        await setDoc(
          ratingRef,
          { rating: selected, updatedAt: serverTimestamp() },
          { merge: true }
        );
      } else {
        await setDoc(ratingRef, {
          rating: selected,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }
      await updateProviderAverage();
      setDone(true);
      setTimeout(onClose, 1400);
    } catch (e: any) {
      setError(e?.message ?? "Failed to submit rating. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const display = hovered || selected;
  const isUpdate = existingRating > 0;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 900,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "20px 20px 0 0",
          width: "100%",
          maxWidth: 520,
          padding: "36px 28px 52px",
          textAlign: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {done ? (
          <>
            <div style={{ fontSize: 48, marginBottom: 14 }}>⭐</div>
            <p style={{ fontWeight: 700, fontSize: 18, margin: 0 }}>
              {isUpdate ? "Rating updated!" : "Rating submitted!"}
            </p>
            <p style={{ color: "#888", fontSize: 14, marginTop: 8 }}>
              Thank you for your feedback.
            </p>
          </>
        ) : isLoadingExisting ? (
          <p style={{ color: "#888", padding: "24px 0" }}>Loading…</p>
        ) : (
          <>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>
              {isUpdate ? `Update your rating for ${providerName}` : `Rate ${providerName}`}
            </h2>

            {isUpdate && (
              <p style={{ color: "#aaa", fontSize: 13, marginBottom: 4 }}>
                Current rating: {existingRating} star{existingRating !== 1 ? "s" : ""}
              </p>
            )}

            {/* Stars */}
            <div style={{ display: "flex", justifyContent: "center", gap: 10, margin: "28px 0 36px" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  width={56}
                  height={56}
                  viewBox="0 0 24 24"
                  fill={star <= display ? "#f7b500" : "none"}
                  stroke="#f7b500"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                  style={{ cursor: "pointer", transition: "fill 0.1s" }}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => setSelected(star)}
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>

            {error && (
              <p style={{ color: "#e53e3e", fontSize: 14, marginBottom: 12 }}>{error}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={!selected || submitting}
              style={{
                width: "100%",
                padding: "18px",
                background: selected && !submitting ? "#555" : "#aaa",
                color: "#fff",
                border: "none",
                borderRadius: 14,
                fontSize: 17,
                fontWeight: 600,
                cursor: selected && !submitting ? "pointer" : "not-allowed",
                marginBottom: 16,
              }}
            >
              {submitting ? "Submitting…" : isUpdate ? "Update rating" : "Submit rating"}
            </button>

            <button
              onClick={onClose}
              style={{ background: "none", border: "none", color: "#aaa", fontSize: 16, cursor: "pointer" }}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default RatingModal;
