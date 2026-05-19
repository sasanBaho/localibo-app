"use client";
import React, { useState } from "react";
import ModalBase from "./ModalBase";

const SERVICES = [
  {
    id: "service-one",
    name: "Lawn Care & Maintenance",
    image: "/service-one.png",
    hasToolsOption: false,
  },
  {
    id: "service-two",
    name: "Driveway & Sidewalk Snow Clearing",
    image: "/service-two.png",
    hasToolsOption: true,
  },
] as const;

type ServiceId = (typeof SERVICES)[number]["id"];

interface ServiceState {
  selected: boolean;
  description: string;
  hasTools: boolean;
}

export interface ServicesFormData {
  selectedServices: string[];
  descriptions: Record<string, string>;
  hasTools: boolean;
  paymentMethods: string[];
}

interface SelectServicesModalProps {
  onClose: () => void;
  onDone: (data: ServicesFormData) => void;
  initialData?: ServicesFormData;
}

const Checkbox: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
  <div
    onClick={onChange}
    style={{
      width: 22,
      height: 22,
      borderRadius: 5,
      border: `2px solid ${checked ? "#22c55e" : "#ccc"}`,
      background: checked ? "#22c55e" : "#fff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    {checked && (
      <svg width={13} height={13} viewBox="0 0 20 20" fill="none">
        <path
          d="M5 10.5L9 14.5L15 7.5"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </div>
);

const RadioDot: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
  <div
    onClick={onChange}
    style={{
      width: 22,
      height: 22,
      borderRadius: "50%",
      border: `2px solid ${checked ? "#22c55e" : "#ccc"}`,
      background: checked ? "#22c55e" : "#fff",
      cursor: "pointer",
      flexShrink: 0,
    }}
  />
);

const SelectServicesModal: React.FC<SelectServicesModalProps> = ({ onClose, onDone, initialData }) => {
  const [services, setServices] = useState<Record<ServiceId, ServiceState>>(() => {
    if (initialData) {
      return {
        "service-one": {
          selected: initialData.selectedServices.includes("service-one"),
          description: initialData.descriptions["service-one"] ?? "",
          hasTools: false,
        },
        "service-two": {
          selected: initialData.selectedServices.includes("service-two"),
          description: initialData.descriptions["service-two"] ?? "",
          hasTools: initialData.hasTools,
        },
      };
    }
    return {
      "service-one": { selected: false, description: "", hasTools: false },
      "service-two": { selected: false, description: "", hasTools: true },
    };
  });
  const [payments, setPayments] = useState<Record<string, boolean>>(() => {
    if (initialData) {
      return {
        Cash: initialData.paymentMethods.includes("Cash"),
        "Credit Card": initialData.paymentMethods.includes("Credit Card"),
        "e-Transfer": initialData.paymentMethods.includes("e-Transfer"),
      };
    }
    return { Cash: false, "Credit Card": false, "e-Transfer": false };
  });

  const update = (id: ServiceId, patch: Partial<ServiceState>) =>
    setServices((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));

  const selected = SERVICES.filter((s) => services[s.id].selected);
  const allDescribed = selected.every((s) => services[s.id].description.trim());
  const anyPayment = Object.values(payments).some(Boolean);
  const canDone = selected.length > 0 && allDescribed && anyPayment;

  const handleDone = () => {
    if (!canDone) return;
    const selectedIds = selected.map((s) => s.id);
    const descriptions: Record<string, string> = {};
    selectedIds.forEach((id) => {
      descriptions[id] = services[id].description;
    });
    onDone({
      selectedServices: selectedIds,
      descriptions,
      hasTools: services["service-two"].hasTools,
      paymentMethods: Object.entries(payments)
        .filter(([, v]) => v)
        .map(([k]) => k),
    });
  };

  return (
    <ModalBase onClose={onClose} closeButtonColor="#22c55e">
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4, paddingRight: 40, marginTop: 4 }}>
        Select your service(s):
      </h2>
      <p style={{ color: "#888", fontSize: 14, marginBottom: 24 }}>
        You can select multiple services
      </p>

      {SERVICES.map((svc) => {
        const state = services[svc.id];
        return (
          <div key={svc.id} style={{ marginBottom: 28 }}>
            {/* Service card */}
            <div
              onClick={() => update(svc.id, { selected: !state.selected })}
              style={{
                position: "relative",
                borderRadius: 14,
                overflow: "hidden",
                cursor: "pointer",
                height: 160,
                marginBottom: 14,
              }}
            >
              <img
                src={svc.image}
                alt={svc.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: state.selected ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.08)",
                }}
              />
              {/* Service label with inline circle indicator */}
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  right: 10,
                  background: "rgba(255,255,255,0.92)",
                  borderRadius: 8,
                  padding: "5px 10px",
                  fontWeight: 700,
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  maxWidth: "calc(100% - 20px)",
                }}
              >
                <div style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: state.selected ? "#22c55e" : "#fff",
                  border: state.selected ? "none" : "2px solid #bbb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {state.selected && (
                    <svg width={14} height={14} viewBox="0 0 20 20" fill="none">
                      <path d="M5 10.5L9 14.5L15 7.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                {svc.name}
              </div>
            </div>

            {state.selected && (
              <>
                
                <label style={{ fontWeight: 600, fontSize: 15, display: "block", marginBottom: 6 }}>
                  Description: <span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <textarea
                  value={state.description}
                  onChange={(e) => update(svc.id, { description: e.target.value })}
                  placeholder={`Describe your ${svc.name.toLowerCase()} service…`}
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1px solid #e0e0e0",
                    borderRadius: 10,
                    fontSize: 15,
                    outline: "none",
                    resize: "none",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                    marginBottom: svc.hasToolsOption ? 12 : 0,
                  }}
                />
                <a
                  href="/blog/lawn-care-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block", fontSize: 12, color: "#22c55e", fontWeight: 600, textDecoration: "none", marginBottom: 10 }}
                >
                Service suggestions you can add to your description →
                </a>
              </>
            )}

            {/* Tools radio — always visible for snow service */}
            {svc.hasToolsOption && (
              <div style={{ marginTop: state.selected ? 0 : 4 }}>
                {(["I have tools", "I will use home-owner's tools"] as const).map(
                  (label, i) => {
                    const isChecked = i === 0 ? state.hasTools : !state.hasTools;
                    return (
                      <label
                        key={label}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          cursor: "pointer",
                          marginBottom: 8,
                          fontSize: 15,
                        }}
                      >
                        <RadioDot
                          checked={isChecked}
                          onChange={() => update(svc.id, { hasTools: i === 0 })}
                        />
                        {label}
                      </label>
                    );
                  }
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Payment methods */}
      <div style={{ marginBottom: 32 }}>
        <label style={{ fontWeight: 700, fontSize: 16, display: "block", marginBottom: 14 }}>
          Payment methods:
        </label>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {Object.keys(payments).map((method) => (
            <label
              key={method}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                fontSize: 15,
              }}
            >
              <Checkbox
                checked={payments[method]}
                onChange={() =>
                  setPayments((prev) => ({ ...prev, [method]: !prev[method] }))
                }
              />
              {method}
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handleDone}
        disabled={!canDone}
        style={{
          width: "100%",
          padding: "18px",
          background: canDone ? "#22c55e" : "#ddd",
          color: "#fff",
          border: "none",
          borderRadius: 999,
          fontSize: 17,
          fontWeight: 700,
          cursor: canDone ? "pointer" : "not-allowed",
        }}
      >
        Done
      </button>
    </ModalBase>
  );
};

export default SelectServicesModal;
