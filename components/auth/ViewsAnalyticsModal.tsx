"use client";
import React from "react";

interface ViewsAnalyticsModalProps {
  viewsByMonth: Record<string, number>;
  onClose: () => void;
}

function monthLabel(key: string): string {
  const [year, month] = key.split("-");
  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

const ViewsAnalyticsModal: React.FC<ViewsAnalyticsModalProps> = ({ viewsByMonth, onClose }) => {
  const months = Array.from({ length: 12 }, (_, i) => {
    const d = new Date();
    d.setDate(1);
    d.setMonth(d.getMonth() - i);
    return d.toISOString().slice(0, 7);
  });

  const values = months.map((k) => viewsByMonth[k] ?? 0);
  const maxViews = Math.max(...values, 1);
  const totalViews = Object.values(viewsByMonth).reduce((a, b) => a + b, 0);

  const firstMonthWithData = [...months].reverse().find((k) => (viewsByMonth[k] ?? 0) > 0);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 600,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        background: "rgba(0,0,0,0.55)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          maxHeight: "85dvh",
          overflowY: "auto",
          borderRadius: "24px 24px 0 0",
          background: "#fff",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 20px 0",
          marginBottom: 4,
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#111827" }}>
              Profile Views
            </h2>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "#6b7280" }}>
              Past 12 months
            </p>
          </div>
          <button
            onClick={onClose}
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
              fontSize: 20,
              color: "#374151",
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            ×
          </button>
        </div>

        {/* Total */}
        <div style={{
          margin: "16px 20px",
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: 14,
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}>
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <div>
            <span style={{ fontSize: 22, fontWeight: 800, color: "#166534" }}>{totalViews}</span>
            <span style={{ fontSize: 13, color: "#16a34a", marginLeft: 6 }}>total views tracked</span>
          </div>
        </div>

        {/* Month rows */}
        <div style={{ padding: "0 20px 32px" }}>
          {months.map((key, i) => {
            const count = viewsByMonth[key] ?? 0;
            const isCurrentMonth = i === 0;
            const barPct = maxViews > 0 ? (count / maxViews) * 100 : 0;
            return (
              <div
                key={key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 0",
                  borderBottom: i < 11 ? "1px solid #f3f4f6" : "none",
                }}
              >
                {/* Month label */}
                <div style={{ width: 110, flexShrink: 0 }}>
                  <span style={{
                    fontSize: 13,
                    fontWeight: isCurrentMonth ? 700 : 500,
                    color: isCurrentMonth ? "#111827" : "#374151",
                  }}>
                    {monthLabel(key)}
                  </span>
                  {isCurrentMonth && (
                    <span style={{
                      display: "block",
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#22c55e",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginTop: 1,
                    }}>
                      This month
                    </span>
                  )}
                </div>

                {/* Bar */}
                <div style={{ flex: 1, background: "#f3f4f6", borderRadius: 999, height: 8, overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: `${barPct}%`,
                    minWidth: count > 0 ? 6 : 0,
                    background: isCurrentMonth ? "#22c55e" : "#86efac",
                    borderRadius: 999,
                    transition: "width 0.3s ease",
                  }} />
                </div>

                {/* Count */}
                <span style={{
                  width: 28,
                  textAlign: "right",
                  fontSize: 14,
                  fontWeight: 700,
                  color: count > 0 ? "#111827" : "#d1d5db",
                  flexShrink: 0,
                }}>
                  {count}
                </span>
              </div>
            );
          })}

          {firstMonthWithData && (
            <p style={{ margin: "16px 0 0", fontSize: 12, color: "#9ca3af", textAlign: "center" }}>
              Tracking started from {monthLabel(firstMonthWithData)}
            </p>
          )}
          {!firstMonthWithData && (
            <p style={{ margin: "16px 0 0", fontSize: 12, color: "#9ca3af", textAlign: "center" }}>
              No views tracked yet — data appears as homeowners find your profile.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewsAnalyticsModal;
