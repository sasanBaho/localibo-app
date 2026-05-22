"use client";
import React, { useEffect, useState } from "react";
import ModalBase from "./ModalBase";

interface StripePlan {
  priceId: string;
  productName: string;
  amount: number;
  currency: string;
  interval: string;
  intervalCount: number;
}

interface SubscriptionModalProps {
  onClose: () => void;
  onPlanSelected: (priceId: string, promoCode?: string) => void;
  loading: boolean;
}

function formatInterval(interval: string, intervalCount: number): string {
  if (intervalCount === 1) return `/ ${interval}`;
  return `/ ${intervalCount} ${interval}s`;
}

function getDiscountLabel(interval: string, intervalCount: number): string | null {
  if (interval === "year") return "75% off";
  if (interval === "month" && intervalCount === 3) return "50% off";
  return null;
}

function formatPrice(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: 2,
  }).format(amount);
}

const PlanSkeleton: React.FC = () => (
  <div style={{
    height: 72,
    borderRadius: 16,
    background: "#f3f4f6",
    animation: "shimmer 1.2s ease-in-out infinite",
  }}>
    <style>{`
      @keyframes shimmer {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    `}</style>
  </div>
);

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ onClose, onPlanSelected, loading }) => {
  const [plans, setPlans] = useState<StripePlan[]>([]);
  const [fetchError, setFetchError] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [selectedPriceId, setSelectedPriceId] = useState<string | null>(null);
  const [promoInput, setPromoInput] = useState("");
  const [promoStatus, setPromoStatus] = useState<"idle" | "checking" | "valid" | "invalid">("idle");
  const [promoError, setPromoError] = useState("");
  const [promoTrialDays, setPromoTrialDays] = useState(0);

  useEffect(() => {
    fetch("/api/stripe/prices")
      .then((r) => r.json())
      .then((data) => {
        setPlans(data);
        setFetching(false);
      })
      .catch(() => {
        setFetchError(true);
        setFetching(false);
      });
  }, []);

  async function applyPromo() {
    const code = promoInput.trim();
    if (!code) return;
    setPromoStatus("checking");
    try {
      const res = await fetch(`/api/stripe/validate-promo?code=${encodeURIComponent(code)}`);
      const data = await res.json();
      if (data.valid) {
        setPromoStatus("valid");
        setPromoTrialDays(data.trialDays as number);
        setPromoError("");
      } else {
        setPromoStatus("invalid");
        setPromoError(data.reason || "Invalid or expired code");
      }
    } catch {
      setPromoStatus("invalid");
      setPromoError("Could not validate code. Please try again.");
    }
  }

  const trialMonths = promoStatus === "valid" ? Math.round(promoTrialDays / 30) : 1;

  return (
    <ModalBase onClose={onClose} closeButtonColor="#a393c9">
      <div style={{ paddingTop: 8 }}>
        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 800, color: "#111" }}>
          Choose a Plan
        </h2>
        <p style={{ margin: "0 0 12px", fontSize: 14, color: "#666" }}>
          Start with a free 1-month trial. Cancel anytime.
        </p>

        <div style={{
          marginBottom: 16,
          padding: "10px 14px",
          background: "#fff7ed",
          border: "1.5px solid #fed7aa",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}>
          <span style={{ fontSize: 15 }}>🎉</span>
          <p style={{ margin: 0, fontSize: 13, color: "#9a3412", lineHeight: 1.4, fontWeight: 600 }}>
            Limited offer ends July 1st — save 50% on 3 months &amp; 75% on yearly
          </p>
        </div>

        {/* Promo code */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ margin: "0 0 6px", fontSize: 13, fontWeight: 600, color: "#555" }}>
            Have a promo code?
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              type="text"
              value={promoInput}
              onChange={(e) => {
                setPromoInput(e.target.value);
                if (promoStatus !== "idle") setPromoStatus("idle");
              }}
              onKeyDown={(e) => e.key === "Enter" && applyPromo()}
              placeholder="Enter code"
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: 12,
                border: promoStatus === "valid"
                  ? "1.5px solid #22c55e"
                  : promoStatus === "invalid"
                  ? "1.5px solid #ef4444"
                  : "1.5px solid #d1d5db",
                fontSize: 14,
                outline: "none",
                textTransform: "uppercase",
              }}
            />
            <button
              onClick={applyPromo}
              disabled={!promoInput.trim() || promoStatus === "checking"}
              style={{
                padding: "10px 18px",
                borderRadius: 12,
                border: "none",
                background: "#a393c9",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                cursor: promoInput.trim() && promoStatus !== "checking" ? "pointer" : "not-allowed",
                opacity: promoInput.trim() && promoStatus !== "checking" ? 1 : 0.5,
                whiteSpace: "nowrap",
              }}
            >
              {promoStatus === "checking" ? "…" : "Apply"}
            </button>
          </div>
          {promoStatus === "valid" && (
            <p style={{ margin: "6px 0 0", fontSize: 13, color: "#16a34a", fontWeight: 600 }}>
              ✓ {trialMonths}-month free trial applied!
            </p>
          )}
          {promoStatus === "invalid" && (
            <p style={{ margin: "6px 0 0", fontSize: 13, color: "#ef4444" }}>
              ✗ {promoError}
            </p>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {fetching ? (
            <>
              <PlanSkeleton />
              <PlanSkeleton />
              <PlanSkeleton />
            </>
          ) : fetchError ? (
            <p style={{ color: "#ef4444", fontSize: 14, textAlign: "center" }}>
              Failed to load plans. Please close and try again.
            </p>
          ) : (
            plans.map((plan, index) => {
              const isSelected = selectedPriceId === plan.priceId;
              const isBestValue = index === plans.length - 1 && plans.length > 1;
              const discountLabel = getDiscountLabel(plan.interval, plan.intervalCount);
              return (
                <button
                  key={plan.priceId}
                  onClick={() => setSelectedPriceId(plan.priceId)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 18px",
                    borderRadius: 16,
                    border: isSelected ? "2.5px solid #a393c9" : "2px solid #e5e7eb",
                    background: isSelected ? "#ede9fe" : "#fff",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "border-color 0.15s, background 0.15s",
                    position: "relative",
                  }}
                >
                  {discountLabel ? (
                    <span style={{
                      position: "absolute",
                      top: -11,
                      right: 14,
                      background: "#f97316",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 700,
                      borderRadius: 999,
                      padding: "2px 10px",
                      letterSpacing: 0.3,
                    }}>
                      {discountLabel}
                    </span>
                  ) : isBestValue && (
                    <span style={{
                      position: "absolute",
                      top: -11,
                      right: 14,
                      background: "#a393c9",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 700,
                      borderRadius: 999,
                      padding: "2px 10px",
                      letterSpacing: 0.3,
                    }}>
                      Best Value
                    </span>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      border: isSelected ? "2px solid #a393c9" : "2px solid #d1d5db",
                      background: isSelected ? "#a393c9" : "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "background 0.15s, border-color 0.15s",
                    }}>
                      {isSelected && (
                        <svg width={12} height={12} viewBox="0 0 20 20" fill="none">
                          <path d="M5 10.5L9 14.5L15 7.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 16, color: "#111" }}>{plan.productName}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontWeight: 800, fontSize: 18, color: "#111" }}>
                      {formatPrice(plan.amount, plan.currency)}
                    </span>
                    <span style={{ fontSize: 13, color: "#888", marginLeft: 2 }}>
                      {formatInterval(plan.interval, plan.intervalCount)}
                    </span>
                    {plan.interval === "year" && (
                      <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>
                        {formatPrice(plan.amount / 12, plan.currency)} per month
                      </div>
                    )}
                    {plan.interval === "month" && plan.intervalCount === 3 && (
                      <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>
                        {formatPrice(plan.amount / 3, plan.currency)} per month
                      </div>
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        <div style={{
          marginTop: 20,
          padding: "12px 14px",
          background: "#ede9fe",
          borderRadius: 12,
          display: "flex",
          gap: 10,
          alignItems: "flex-start",
        }}>
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
            <circle cx="12" cy="12" r="10" stroke="#a393c9" strokeWidth="2" />
            <path d="M12 8v4m0 4h.01" stroke="#a393c9" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p style={{ margin: 0, fontSize: 13, color: "#6b21a8", lineHeight: 1.5 }}>
            {promoStatus === "valid"
              ? `Your first ${trialMonths} months are completely free. Your card won't be charged until after the trial ends.`
              : "Your first month is completely free. Your card won't be charged until after the trial ends."}
          </p>
        </div>

        <button
          onClick={() => selectedPriceId && onPlanSelected(selectedPriceId, promoStatus === "valid" ? promoInput.trim().toUpperCase() : undefined)}
          disabled={!selectedPriceId || loading || fetching}
          style={{
            marginTop: 20,
            width: "100%",
            padding: "15px 0",
            borderRadius: 999,
            background: selectedPriceId && !loading && !fetching ? "#a393c9" : "#d1d5db",
            color: "#fff",
            fontWeight: 700,
            fontSize: 17,
            border: "none",
            cursor: selectedPriceId && !loading && !fetching ? "pointer" : "not-allowed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            transition: "background 0.2s",
          }}
        >
          {loading ? (
            <>
              <span style={{
                width: 20,
                height: 20,
                border: "3px solid rgba(255,255,255,0.4)",
                borderTopColor: "#fff",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
                display: "inline-block",
              }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              Preparing checkout…
            </>
          ) : (
            "Start Free Trial"
          )}
        </button>

        <p style={{ marginTop: 12, textAlign: "center", fontSize: 12, color: "#aaa" }}>
          By continuing, you agree to our terms. Cancel anytime from your profile.
        </p>
      </div>
    </ModalBase>
  );
};

export default SubscriptionModal;
