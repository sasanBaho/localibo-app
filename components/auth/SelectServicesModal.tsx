"use client";
import React, { useState } from "react";
import ModalBase from "./ModalBase";

const SERVICES = [
  { id: "service-one", name: "Hair, Beauty & Styling", image: "/service-one.png" },
  { id: "service-two", name: "Tailoring & Alterations", image: "/service-two.png" },
  { id: "service-three", name: "Cooking & Baking", image: "/service-three.png" },
] as const;

type ServiceId = (typeof SERVICES)[number]["id"];

interface ServiceState {
  selected: boolean;
  description: string;
  hasTools: boolean;
  instagramID: string;
}

export interface ServicesFormData {
  selectedServices: string[];
  descriptions: Record<string, string>;
  hasTools: boolean;
  paymentMethods: string[];
  serviceLocation: string[];
  hasDelivery: boolean;
  instagramIDs: Record<string, string>;
}

interface SelectServicesModalProps {
  onClose: () => void;
  onDone: (data: ServicesFormData) => void;
  initialData?: Partial<ServicesFormData>;
}

const Checkbox: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
  <div
    onClick={onChange}
    style={{
      width: 22,
      height: 22,
      borderRadius: 5,
      border: `2px solid ${checked ? "#a393c9" : "#ccc"}`,
      background: checked ? "#a393c9" : "#fff",
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
      border: `2px solid ${checked ? "#a393c9" : "#ccc"}`,
      background: checked ? "#a393c9" : "#fff",
      cursor: "pointer",
      flexShrink: 0,
    }}
  />
);

const SERVICE_LOCATION_OPTIONS = [
  { value: "onCustomerLocation", label: "At customer's location" },
  { value: "onProviderLocation", label: "At provider's location" },
];

const SelectServicesModal: React.FC<SelectServicesModalProps> = ({ onClose, onDone, initialData }) => {
  const [services, setServices] = useState<Record<ServiceId, ServiceState>>(() => {
    const sel = initialData?.selectedServices ?? [];
    const desc = initialData?.descriptions ?? {};
    const insta = initialData?.instagramIDs ?? {};
    return {
      "service-one": { selected: sel.includes("service-one"), description: desc["service-one"] ?? "", hasTools: false, instagramID: insta["service-one"] ?? "" },
      "service-two": { selected: sel.includes("service-two"), description: desc["service-two"] ?? "", hasTools: false, instagramID: insta["service-two"] ?? "" },
      "service-three": { selected: sel.includes("service-three"), description: desc["service-three"] ?? "", hasTools: false, instagramID: insta["service-three"] ?? "" },
    };
  });

  const [payments, setPayments] = useState<Record<string, boolean>>(() => {
    const pm = initialData?.paymentMethods ?? [];
    return {
      Cash: pm.includes("Cash"),
      "Credit Card": pm.includes("Credit Card"),
      "e-Transfer": pm.includes("e-Transfer"),
    };
  });

  const [serviceLocation, setServiceLocation] = useState<string[]>(
    initialData?.serviceLocation ?? []
  );

  const [hasDelivery, setHasDelivery] = useState<boolean | null>(
    initialData?.hasDelivery !== undefined ? initialData.hasDelivery : null
  );

  const update = (id: ServiceId, patch: Partial<ServiceState>) =>
    setServices((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));

  const toggleLocation = (value: string) =>
    setServiceLocation((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );

  const selected = SERVICES.filter((s) => services[s.id].selected);
  const allDescribed = selected.every((s) => services[s.id].description.trim());
  const anyPayment = Object.values(payments).some(Boolean);

  const hasBeautyOrTailor = services["service-one"].selected || services["service-two"].selected;
  const hasCook = services["service-three"].selected;
  const locationValid = !hasBeautyOrTailor || serviceLocation.length > 0;
  const deliveryValid = !hasCook || hasDelivery !== null;

  const canDone = selected.length > 0 && allDescribed && anyPayment && locationValid && deliveryValid;

  const handleDone = () => {
    if (!canDone) return;
    const selectedIds = selected.map((s) => s.id);
    const descriptions: Record<string, string> = {};
    const instagramIDs: Record<string, string> = {};
    selectedIds.forEach((id) => {
      descriptions[id] = services[id].description;
      instagramIDs[id] = services[id].instagramID;
    });
    onDone({
      selectedServices: selectedIds,
      descriptions,
      hasTools: initialData?.hasTools ?? false,
      paymentMethods: Object.entries(payments).filter(([, v]) => v).map(([k]) => k),
      serviceLocation: hasBeautyOrTailor ? serviceLocation : [],
      hasDelivery: hasCook ? (hasDelivery ?? false) : false,
      instagramIDs,
    });
  };

  return (
    <ModalBase onClose={onClose} closeButtonColor="#a393c9">
      <style>{`
        @keyframes expandIn {
          from { opacity: 0; transform: translateY(-10px) scaleY(0.96); }
          to   { opacity: 1; transform: translateY(0) scaleY(1); }
        }
      `}</style>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4, paddingRight: 40, marginTop: 4 }}>
        Select your service(s):
      </h2>
      <p style={{ color: "#888", fontSize: 14, marginBottom: 24 }}>
        You can select multiple services
      </p>

      {SERVICES.map((svc) => {
        const state = services[svc.id];
        const isBeautyOrTailor = svc.id === "service-one" || svc.id === "service-two";
        const isCook = svc.id === "service-three";

        return (
          <div
            key={svc.id}
            style={{
              marginBottom: 20,
              borderRadius: 16,
              border: `2px solid ${state.selected ? "#a393c9" : "#e5e7eb"}`,
              overflow: "hidden",
            }}
          >
            {/* Image header — click to toggle */}
            <div
              onClick={() => update(svc.id, { selected: !state.selected })}
              style={{ position: "relative", height: 120, cursor: "pointer" }}
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
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  background: "rgba(255,255,255,0.55)",
                  borderRadius: 8,
                  padding: "5px 10px",
                  fontWeight: 700,
                  fontSize: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: state.selected ? "#a393c9" : "#fff",
                    border: state.selected ? "none" : "2px solid #bbb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {state.selected && (
                    <svg width={14} height={14} viewBox="0 0 20 20" fill="none">
                      <path d="M5 10.5L9 14.5L15 7.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                {svc.name}
              </div>
            </div>

            {/* Expanded form fields (shown when selected) */}
            {state.selected && (
              <div style={{ padding: "16px 16px 20px", background: "#faf9ff", animation: "expandIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}>
                {/* Description */}
                <label style={{ fontWeight: 600, fontSize: 14, display: "block", marginBottom: 6 }}>
                  Description: <span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <textarea
                  value={state.description}
                  onChange={(e) => update(svc.id, { description: e.target.value })}
                  placeholder={`Describe your ${svc.name.toLowerCase()} service…`}
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    border: "1px solid #e0e0e0",
                    borderRadius: 10,
                    fontSize: 14,
                    outline: "none",
                    resize: "none",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                    marginBottom: 14,
                    background: "#fff",
                  }}
                />

                {/* Instagram ID */}
                <label style={{ fontWeight: 600, fontSize: 14, display: "block", marginBottom: 6 }}>
                  Instagram ID{" "}
                  <span style={{ fontWeight: 400, color: "#888", fontSize: 12 }}>(optional)</span>
                </label>
                <div
                  style={{
                    position: "relative",
                    marginBottom: isBeautyOrTailor || isCook ? 16 : 0,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 12,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#a393c9",
                      fontWeight: 700,
                      fontSize: 15,
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  >
                    @
                  </span>
                  <input
                    type="text"
                    value={state.instagramID}
                    onChange={(e) =>
                      update(svc.id, {
                        instagramID: e.target.value.replace(/^@/, "").replace(/\s/g, ""),
                      })
                    }
                    placeholder="your_instagram"
                    style={{
                      width: "100%",
                      padding: "10px 12px 10px 28px",
                      border: "1px solid #e0e0e0",
                      borderRadius: 10,
                      fontSize: 14,
                      outline: "none",
                      boxSizing: "border-box",
                      fontFamily: "inherit",
                      background: "#fff",
                    }}
                  />
                </div>

                {/* Service location (beauty + tailor) */}
                {isBeautyOrTailor && (
                  <div>
                    <label style={{ fontWeight: 600, fontSize: 14, display: "block", marginBottom: 4 }}>
                      Service location: <span style={{ color: "#e53e3e" }}>*</span>
                    </label>
                    <p style={{ color: "#888", fontSize: 12, marginBottom: 10, marginTop: 0 }}>
                      Where do you perform your service?
                    </p>
                    {SERVICE_LOCATION_OPTIONS.map((opt) => (
                      <label
                        key={opt.value}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          cursor: "pointer",
                          marginBottom: 10,
                          fontSize: 14,
                        }}
                      >
                        <Checkbox
                          checked={serviceLocation.includes(opt.value)}
                          onChange={() => toggleLocation(opt.value)}
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                )}

                {/* Delivery (cook) */}
                {isCook && (
                  <div>
                    <label style={{ fontWeight: 600, fontSize: 14, display: "block", marginBottom: 4 }}>
                      Delivery: <span style={{ color: "#e53e3e" }}>*</span>
                    </label>
                    <p style={{ color: "#888", fontSize: 12, marginBottom: 10, marginTop: 0 }}>
                      Do you offer delivery?
                    </p>
                    {(
                      [
                        { label: "Has delivery", value: true },
                        { label: "Client pickup", value: false },
                      ] as const
                    ).map((opt) => (
                      <label
                        key={opt.label}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          cursor: "pointer",
                          marginBottom: 10,
                          fontSize: 14,
                        }}
                      >
                        <RadioDot
                          checked={hasDelivery === opt.value}
                          onChange={() => setHasDelivery(opt.value)}
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Payment methods */}
      <div style={{ marginTop: 8, marginBottom: 32 }}>
        <label style={{ fontWeight: 700, fontSize: 16, display: "block", marginBottom: 14 }}>
          Payment methods:
        </label>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {Object.keys(payments).map((method) => (
            <label
              key={method}
              style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 15 }}
            >
              <Checkbox
                checked={payments[method]}
                onChange={() => setPayments((prev) => ({ ...prev, [method]: !prev[method] }))}
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
          background: canDone ? "#a393c9" : "#ddd",
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
