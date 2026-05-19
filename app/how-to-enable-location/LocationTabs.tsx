"use client";
import React, { useState } from "react";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  steps: { title: string; detail: string }[];
  note?: string;
}

const TABS: Tab[] = [
  {
    id: "chrome",
    label: "Chrome",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#e5e7eb" strokeWidth="1.5" fill="#fff" />
        <circle cx="12" cy="12" r="4" fill="#4285F4" />
        <path d="M12 8h8.5" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 8a4 4 0 00-3.46 2L4.8 16.5" stroke="#FBBC04" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8.54 10A4 4 0 0016 14l-3.73 6.46" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    steps: [
      { title: "Click the lock icon", detail: "Look for the lock or info icon in the address bar, to the left of the URL." },
      { title: "Open Site settings", detail: 'Click "Site settings" from the dropdown that appears.' },
      { title: "Allow Location", detail: 'Find "Location" in the list and change the setting from "Block" to "Allow".' },
      { title: "Reload the page", detail: "Refresh the page and try creating your account again." },
    ],
  },
  {
    id: "safari-mac",
    label: "Safari (Mac)",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#e5e7eb" strokeWidth="1.5" fill="#fff" />
        <circle cx="12" cy="12" r="10" stroke="#0070C9" strokeWidth="1.5" fill="none" />
        <line x1="12" y1="5" x2="12" y2="19" stroke="#ccc" strokeWidth="1" />
        <line x1="5" y1="12" x2="19" y2="12" stroke="#ccc" strokeWidth="1" />
        <polygon points="12,5 14.5,14.5 12,13 9.5,14.5" fill="#FF3B30" />
        <polygon points="12,19 9.5,9.5 12,11 14.5,9.5" fill="#ccc" />
      </svg>
    ),
    steps: [
      { title: "Open Safari Settings", detail: "In the top menu bar, click Safari then Settings (or Preferences on older macOS)." },
      { title: "Go to the Websites tab", detail: 'Click the "Websites" tab at the top of the Settings window.' },
      { title: "Select Location", detail: 'Click "Location" in the left sidebar.' },
      { title: "Allow Yardyman", detail: 'Find yardyman.ca in the list and change it to "Allow". If it is not listed, set "When visiting other websites" to "Ask" or "Allow".' },
      { title: "Reload the page", detail: "Refresh the page and try again." },
    ],
  },
  {
    id: "safari-ios",
    label: "Safari (iPhone)",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="#e5e7eb" strokeWidth="1.5" fill="#fff" />
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="#0070C9" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="18" r="1.2" fill="#0070C9" />
        <line x1="9" y1="5" x2="15" y2="5" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    steps: [
      { title: "Open iPhone Settings", detail: "Tap the Settings app (grey gear icon) on your home screen." },
      { title: "Tap Privacy & Security", detail: 'Scroll down and tap "Privacy & Security".' },
      { title: "Tap Location Services", detail: 'Tap "Location Services" at the top and make sure the toggle is ON.' },
      { title: "Find Safari Websites", detail: 'Scroll down in the list and tap "Safari Websites".' },
      { title: "Set to While Using", detail: 'Select "While Using the App" to allow websites to request your location.' },
      { title: "Reload the page", detail: "Go back to Safari, refresh the Yardyman page, and try again." },
    ],
    note: 'If Yardyman.ca already has a blocked entry under Location Services, tap it directly and change it to "Allow".',
  },
  {
    id: "firefox",
    label: "Firefox",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#e5e7eb" strokeWidth="1.5" fill="#fff" />
        <circle cx="12" cy="12" r="10" fill="#FF9400" opacity="0.15" />
        <path d="M5 8c1-2 3-4 7-4s7 3 7 8-4 8-8 7c-2 0-4-1-5-3 1 0 3 0 4-2-2 0-3-2-3-3 1 0 2 0 2-1-2-1-3-3-3-5 0 0 1 2 3 2V8z" fill="#FF9400" />
      </svg>
    ),
    steps: [
      { title: "Click the lock icon", detail: "Click the lock icon in the address bar to the left of the URL." },
      { title: "Click More Information", detail: 'In the popup that appears, click "More Information..." at the bottom.' },
      { title: "Go to the Permissions tab", detail: 'In the new window, click the "Permissions" tab.' },
      { title: "Change Location setting", detail: 'Find "Access Your Location", uncheck "Use Default", and select "Allow".' },
      { title: "Reload the page", detail: "Close the window, refresh the page, and try again." },
    ],
  },
  {
    id: "edge",
    label: "Edge",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#e5e7eb" strokeWidth="1.5" fill="#fff" />
        <path d="M6 15c1 3 4 5 7 5 4 0 7-3 7-7 0-3-2-5-4-6-1 2-1 4 0 5-2 0-4-2-4-4 0-1 0-2 1-3-4 1-7 5-7 10z" fill="#0078D4" />
        <path d="M8 17c1 1 3 2 5 2 3 0 5-2 5-4 0-1-1-2-2-2-1 0-2 1-3 1-2 0-4-2-4-4" stroke="#50E6FF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    steps: [
      { title: "Click the lock icon", detail: "Click the lock icon in the address bar, to the left of the URL." },
      { title: "Open Permissions for this site", detail: 'Click "Permissions for this site" in the dropdown.' },
      { title: "Allow Location", detail: 'Find "Location" and change it from "Block" to "Allow".' },
      { title: "Reload the page", detail: "Refresh the page and try creating your account again." },
    ],
  },
  {
    id: "android",
    label: "Android",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
        <path d="M5 16V10a7 7 0 0114 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2z" stroke="#e5e7eb" strokeWidth="1.5" fill="#fff" />
        <path d="M5 16V10a7 7 0 0114 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2z" stroke="#3DDC84" strokeWidth="1.5" fill="none" />
        <line x1="8" y1="22" x2="8" y2="18" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="22" x2="16" y2="18" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round" />
        <line x1="4" y1="8" x2="2" y2="5" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="8" x2="22" y2="5" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="12" r="1" fill="#3DDC84" />
        <circle cx="15" cy="12" r="1" fill="#3DDC84" />
      </svg>
    ),
    steps: [
      { title: "Open Chrome menu", detail: "Tap the three-dot menu at the top-right corner of Chrome." },
      { title: "Go to Settings then Site settings", detail: 'Tap Settings, then scroll to and tap "Site settings".' },
      { title: "Tap Location", detail: 'Tap "Location" and make sure it is set to "Ask first" or "Allowed".' },
      { title: "OR use system settings", detail: 'Open your phone\'s Settings > Apps > Chrome > Permissions > Location, and set it to "Allow only while using the app".' },
      { title: "Reload the page", detail: "Go back to Chrome, refresh the page, and try again." },
    ],
    note: "On some Android versions, the browser permission and the system app permission are separate. If one does not work, check both.",
  },
  {
    id: "samsung",
    label: "Samsung",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#1428A0" strokeWidth="1.5" fill="#fff" />
        <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1428A0">S</text>
      </svg>
    ),
    steps: [
      { title: "Open Samsung Internet menu", detail: "Tap the menu icon (three horizontal lines) at the bottom of the screen." },
      { title: "Go to Settings", detail: 'Tap "Settings" from the menu.' },
      { title: "Tap Sites and downloads", detail: 'Scroll to and tap "Sites and downloads".' },
      { title: "Tap Location", detail: 'Tap "Location" and set it to "Ask" or "Allow".' },
      { title: "Reload the page", detail: "Go back, refresh the Yardyman page, and try again." },
    ],
  },
];

export default function LocationTabs() {
  const [active, setActive] = useState("chrome");
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <div>
      {/* Tab bar — horizontally scrollable */}
      <div style={{
        display: "flex",
        gap: 8,
        overflowX: "auto",
        paddingBottom: 2,
        marginBottom: 24,
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}>
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {TABS.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "8px 14px",
                borderRadius: 999,
                border: isActive ? "2px solid #22c55e" : "1.5px solid #e5e7eb",
                background: isActive ? "#f0fdf4" : "#fff",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "#15803d" : "#6b7280",
                transition: "all 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              {t.icon}
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Steps */}
      <div style={{
        background: "#fff",
        border: "1px solid #f3f4f6",
        borderRadius: 20,
        padding: "24px 20px",
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            background: "#f0fdf4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            {tab.icon}
          </div>
          <span style={{ fontWeight: 700, fontSize: 18, color: "#111827" }}>{tab.label}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {tab.steps.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "#22c55e",
                color: "#fff",
                fontSize: 13,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 1,
              }}>
                {i + 1}
              </div>
              <div>
                <p style={{ margin: "0 0 3px", fontWeight: 700, fontSize: 14, color: "#111827" }}>
                  {step.title}
                </p>
                <p style={{ margin: 0, fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {tab.note && (
          <div style={{
            marginTop: 20,
            background: "#fffbeb",
            border: "1px solid #fde68a",
            borderRadius: 12,
            padding: "12px 14px",
            display: "flex",
            gap: 10,
            alignItems: "flex-start",
          }}>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="#f59e0b" style={{ flexShrink: 0, marginTop: 1 }}>
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="17" x2="12.01" y2="17" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p style={{ margin: 0, fontSize: 13, color: "#92400e", lineHeight: 1.6 }}>{tab.note}</p>
          </div>
        )}
      </div>
    </div>
  );
}
