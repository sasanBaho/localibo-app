(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/yardyman-app/yardyman-app/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analytics",
    ()=>analytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript)");
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyCkEei5sDldeWlMmXB852m_pheh96zF048"),
    authDomain: ("TURBOPACK compile-time value", "lawn-snow-6ab68.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "lawn-snow-6ab68"),
    storageBucket: ("TURBOPACK compile-time value", "lawn-snow-6ab68.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "894448553102"),
    appId: ("TURBOPACK compile-time value", "1:894448553102:web:8466eed52ebb1e10e48ddf"),
    measurementId: ("TURBOPACK compile-time value", "G-QP14130PHF")
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])()[0];
const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupported"])().then((yes)=>yes ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnalytics"])(app) : null);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/lib/analytics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trackEvent",
    ()=>trackEvent,
    "trackPageView",
    ()=>trackPageView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@vercel/analytics/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/lib/firebase.ts [app-client] (ecmascript)");
;
;
;
function normalizeFirebaseEventName(name) {
    const normalized = name.trim().replace(/[^a-zA-Z0-9_]+/g, "_").replace(/_+/g, "_").replace(/^_+|_+$/g, "");
    const prefixed = /^[a-zA-Z]/.test(normalized) ? normalized : `event_${normalized || "unnamed"}`;
    return prefixed.toLowerCase().slice(0, 40);
}
async function trackEvent(name, params) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["track"])(name, params);
    const instance = await __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analytics"];
    if (instance) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logEvent"])(instance, normalizeFirebaseEventName(name), params);
    }
}
async function trackPageView(params) {
    const instance = await __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analytics"];
    if (instance) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logEvent"])(instance, "page_view", params);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/lib/analytics.ts [app-client] (ecmascript)");
;
;
;
const GreenCheckIcon = ({ size = 14 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: size,
            height: size,
            borderRadius: '50%',
            background: '#09f',
            color: '#fff'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size * 0.7,
            height: size * 0.7,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 10.5L9 14.5L15 7.5",
                stroke: "white",
                strokeWidth: "2.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
            lineNumber: 22,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = GreenCheckIcon;
const ProviderPopupCard = ({ provider, onClose, activeService })=>{
    if (!provider) return null;
    // Helper to detect mobile device
    const isMobile = ("TURBOPACK compile-time value", "object") !== "undefined" && /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(window.navigator.userAgent);
    const phone = provider.phone || provider.phoneNumber || provider.contactNumber || "";
    // Format phone number as (XXX) XXX-XXXX if 10 digits
    function formatPhoneNumber(num) {
        if (!num) return '';
        const digits = num.replace(/\D/g, "");
        if (digits.length === 10) {
            return `(${digits.slice(0, 3)})${digits.slice(3, 6)}-${digits.slice(6)}`;
        }
        if (digits.length === 11 && digits[0] === '1') {
            // US country code
            return `+1 (${digits.slice(1, 4)})${digits.slice(4, 7)}-${digits.slice(7)}`;
        }
        // fallback: group as best as possible
        if (digits.length > 6) {
            return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
        }
        if (digits.length > 3) {
            return `${digits.slice(0, 3)}-${digits.slice(3)}`;
        }
        return num;
    }
    function getAnalyticsPayload() {
        return {
            providerId: provider.id || "unknown",
            providerName: provider.providerName || "Unknown",
            serviceType: activeService || "unknown",
            hasTools: Boolean(provider.hasTools),
            rating: provider.rating ?? null,
            ratingsCount: provider.ratingsCount ?? 0,
            paymentMethodsCount: provider.paymentMethods?.length ?? 0,
            hasPhone: Boolean(phone)
        };
    }
    function handleClose() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])("Provider_Details_Closed", getAnalyticsPayload());
        onClose();
    }
    function handleCallTap() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])("Provider_Call_Tapped", getAnalyticsPayload());
    }
    function handleMessageTap() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])("Provider_Message_Tapped", getAnalyticsPayload());
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -60%)",
            zIndex: 100,
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            padding: 24,
            minWidth: 320,
            maxWidth: 350,
            border: "1px solid #e0e0e0"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleClose,
                style: {
                    position: "absolute",
                    right: 16,
                    top: 16,
                    background: "none",
                    border: "none",
                    fontSize: 20,
                    cursor: "pointer"
                },
                children: "×"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: provider.imageUrl,
                        alt: provider.providerName,
                        style: {
                            width: 72,
                            height: 72,
                            borderRadius: "50%",
                            border: `2px solid ${activeService === 'lawn' ? '#1db954' : '#09f'}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 600,
                                    fontSize: 20
                                },
                                children: provider.providerName
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 400,
                                    color: '#666',
                                    fontSize: 15,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    marginTop: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#666',
                                            fontSize: 18,
                                            display: 'flex',
                                            alignItems: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "1em",
                                            height: "1em",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z",
                                                stroke: "#666",
                                                strokeWidth: "1",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                                lineNumber: 105,
                                                columnNumber: 114
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: formatPhoneNumber(phone)
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 16,
                    color: "#444",
                    fontSize: 15,
                    whiteSpace: "pre-line"
                },
                children: provider.description
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 10,
                    color: "#444",
                    fontSize: 15,
                    whiteSpace: "pre-line"
                },
                children: provider.hasTools ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsCircleFill"], {
                            color: "#22c55e",
                            size: 10
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Has tools"
                    ]
                }, void 0, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : "❌ No tools"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 10,
                    color: "#444",
                    fontSize: 15,
                    whiteSpace: "pre-line"
                },
                children: provider.paymentMethods && provider.paymentMethods.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8
                    },
                    children: provider.paymentMethods.map((method, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 4
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GreenCheckIcon, {}, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                    lineNumber: 128,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                method
                            ]
                        }, method, true, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                            lineNumber: 127,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : "💳 No payment methods"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 10,
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start"
                },
                children: [
                    provider.rating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#f7b500",
                            fontWeight: 600,
                            fontSize: 15
                        },
                        children: [
                            "★ ",
                            provider.rating.toFixed(1)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    provider.ratingsCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#888",
                            fontSize: 14
                        },
                        children: [
                            "(",
                            provider.ratingsCount,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 18,
                    display: "flex",
                    gap: 12
                },
                children: isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `tel:${phone}`,
                            onClick: handleCallTap,
                            style: {
                                background: "#09f",
                                color: "#fff",
                                border: "none",
                                borderRadius: 8,
                                padding: "8px 18px",
                                fontWeight: 600,
                                fontSize: 16,
                                cursor: "pointer",
                                textDecoration: "none",
                                display: "inline-block"
                            },
                            children: "Call"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                            lineNumber: 147,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `sms:${phone}`,
                            onClick: handleMessageTap,
                            style: {
                                background: "#fff",
                                color: "#09f",
                                border: "2px solid #09f",
                                borderRadius: 8,
                                padding: "8px 18px",
                                fontWeight: 600,
                                fontSize: 16,
                                cursor: "pointer",
                                textDecoration: "none",
                                display: "inline-block"
                            },
                            children: "Message"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                            lineNumber: 154,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : null
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = ProviderPopupCard;
const __TURBOPACK__default__export__ = ProviderPopupCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "GreenCheckIcon");
__turbopack_context__.k.register(_c1, "ProviderPopupCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Navbar = ({ children, onCreateAccount, currentUser, onEditAccount })=>{
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                setIsMobile(/Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(window.navigator.userAgent));
            }
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "#fff",
            borderRadius: 0,
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            padding: "8px 16px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: 4
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/yardyman-logo.png",
                    alt: "Yardyman Logo",
                    style: {
                        width: 36,
                        height: 36,
                        objectFit: 'contain',
                        marginRight: 8,
                        borderRadius: 4
                    }
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                style: {
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    marginRight: 4,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                },
                "aria-label": "Open menu",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
                    size: 28
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            currentUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onEditAccount,
                "aria-label": "My profile",
                style: {
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: currentUser.photoUrl,
                    alt: currentUser.name,
                    style: {
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "1px solid #3eab40"
                    }
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : onCreateAccount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onCreateAccount,
                "aria-label": "Sign in",
                style: {
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/user-account.png",
                    alt: "Sign in",
                    style: {
                        width: 30,
                        height: 30,
                        objectFit: "contain"
                    }
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                    lineNumber: 68,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                lineNumber: 63,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: isMobile ? 8 : 10
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/map/context/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapContext",
    ()=>MapContext,
    "MarkerContext",
    ()=>MarkerContext,
    "useMap",
    ()=>useMap,
    "useMarkerContext",
    ()=>useMarkerContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
const MapContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useMap() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MapContext);
    if (!context) {
        throw new Error("useMap must be used within a Map component");
    }
    return context;
}
_s(useMap, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const MarkerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useMarkerContext() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MarkerContext);
    if (!context) {
        throw new Error("Marker components must be used within MapMarker");
    }
    return context;
}
_s1(useMarkerContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/map/utils/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultStyles",
    ()=>defaultStyles,
    "getDocumentTheme",
    ()=>getDocumentTheme,
    "getSystemTheme",
    ()=>getSystemTheme,
    "getViewport",
    ()=>getViewport,
    "useResolvedTheme",
    ()=>useResolvedTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function getDocumentTheme() {
    if (typeof document === "undefined") return null;
    if (document.documentElement.classList.contains("dark")) return "dark";
    if (document.documentElement.classList.contains("light")) return "light";
    return null;
}
function getSystemTheme() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function useResolvedTheme(themeProp) {
    _s();
    const [detectedTheme, setDetectedTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useResolvedTheme.useState": ()=>getDocumentTheme() ?? getSystemTheme()
    }["useResolvedTheme.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResolvedTheme.useEffect": ()=>{
            if (themeProp) return;
            const observer = new MutationObserver({
                "useResolvedTheme.useEffect": ()=>{
                    const docTheme = getDocumentTheme();
                    if (docTheme) setDetectedTheme(docTheme);
                }
            }["useResolvedTheme.useEffect"]);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            });
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handleSystemChange = {
                "useResolvedTheme.useEffect.handleSystemChange": (e)=>{
                    if (!getDocumentTheme()) {
                        setDetectedTheme(e.matches ? "dark" : "light");
                    }
                }
            }["useResolvedTheme.useEffect.handleSystemChange"];
            mediaQuery.addEventListener("change", handleSystemChange);
            return ({
                "useResolvedTheme.useEffect": ()=>{
                    observer.disconnect();
                    mediaQuery.removeEventListener("change", handleSystemChange);
                }
            })["useResolvedTheme.useEffect"];
        }
    }["useResolvedTheme.useEffect"], [
        themeProp
    ]);
    return themeProp ?? detectedTheme;
}
_s(useResolvedTheme, "MnkiBsSvHDnyiBtIEjxIR+0Rsy8=");
function getViewport(map) {
    const center = map.getCenter();
    return {
        center: [
            center.lng,
            center.lat
        ],
        zoom: map.getZoom(),
        bearing: map.getBearing(),
        pitch: map.getPitch()
    };
}
const defaultStyles = {
    dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
    light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/map/components/Map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Map",
    ()=>Map
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/maplibre-gl/dist/maplibre-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$context$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/map/context/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/map/utils/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function DefaultLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "size-1.5 rounded-full bg-muted-foreground/60 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/map/components/Map.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "size-1.5 rounded-full bg-muted-foreground/60 animate-pulse [animation-delay:150ms]"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/map/components/Map.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "size-1.5 rounded-full bg-muted-foreground/60 animate-pulse [animation-delay:300ms]"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/map/components/Map.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/map/components/Map.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/map/components/Map.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = DefaultLoader;
const Map = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = _s(function Map({ children, className, theme: themeProp, styles, projection, viewport, onViewportChange, ...props }, ref) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mapInstance, setMapInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStyleLoaded, setIsStyleLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentStyleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const styleTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const internalUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const resolvedTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedTheme"])(themeProp);
    const isControlled = viewport !== undefined && onViewportChange !== undefined;
    const onViewportChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onViewportChange);
    onViewportChangeRef.current = onViewportChange;
    const mapStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Map.Map.useMemo[mapStyles]": ()=>({
                dark: styles?.dark ?? __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultStyles"].dark,
                light: styles?.light ?? __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultStyles"].light
            })
    }["Map.Map.useMemo[mapStyles]"], [
        styles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Map.Map.useImperativeHandle": ()=>mapInstance
    }["Map.Map.useImperativeHandle"], [
        mapInstance
    ]);
    const clearStyleTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Map.Map.useCallback[clearStyleTimeout]": ()=>{
            if (styleTimeoutRef.current) {
                clearTimeout(styleTimeoutRef.current);
                styleTimeoutRef.current = null;
            }
        }
    }["Map.Map.useCallback[clearStyleTimeout]"], []);
    // Initialize map
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Map.Map.useEffect": ()=>{
            if (!containerRef.current) return;
            const initialStyle = resolvedTheme === "dark" ? mapStyles.dark : mapStyles.light;
            currentStyleRef.current = initialStyle;
            const map = new __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: containerRef.current,
                style: initialStyle,
                renderWorldCopies: false,
                attributionControl: {
                    compact: true
                },
                ...props,
                ...viewport
            });
            const styleDataHandler = {
                "Map.Map.useEffect.styleDataHandler": ()=>{
                    clearStyleTimeout();
                    styleTimeoutRef.current = setTimeout({
                        "Map.Map.useEffect.styleDataHandler": ()=>{
                            setIsStyleLoaded(true);
                            if (projection) map.setProjection(projection);
                        }
                    }["Map.Map.useEffect.styleDataHandler"], 100);
                }
            }["Map.Map.useEffect.styleDataHandler"];
            const loadHandler = {
                "Map.Map.useEffect.loadHandler": ()=>setIsLoaded(true)
            }["Map.Map.useEffect.loadHandler"];
            const handleMove = {
                "Map.Map.useEffect.handleMove": ()=>{
                    if (internalUpdateRef.current) return;
                    onViewportChangeRef.current?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewport"])(map));
                }
            }["Map.Map.useEffect.handleMove"];
            map.on("load", loadHandler);
            map.on("styledata", styleDataHandler);
            map.on("move", handleMove);
            setMapInstance(map);
            return ({
                "Map.Map.useEffect": ()=>{
                    clearStyleTimeout();
                    map.off("load", loadHandler);
                    map.off("styledata", styleDataHandler);
                    map.off("move", handleMove);
                    map.remove();
                    setIsLoaded(false);
                    setIsStyleLoaded(false);
                    setMapInstance(null);
                }
            })["Map.Map.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Map.Map.useEffect"], []);
    // Sync controlled viewport to map
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Map.Map.useEffect": ()=>{
            if (!mapInstance || !isControlled || !viewport) return;
            if (mapInstance.isMoving()) return;
            const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewport"])(mapInstance);
            const next = {
                center: viewport.center ?? current.center,
                zoom: viewport.zoom ?? current.zoom,
                bearing: viewport.bearing ?? current.bearing,
                pitch: viewport.pitch ?? current.pitch
            };
            const unchanged = next.center[0] === current.center[0] && next.center[1] === current.center[1] && next.zoom === current.zoom && next.bearing === current.bearing && next.pitch === current.pitch;
            if (unchanged) return;
            internalUpdateRef.current = true;
            mapInstance.jumpTo(next);
            internalUpdateRef.current = false;
        }
    }["Map.Map.useEffect"], [
        mapInstance,
        isControlled,
        viewport
    ]);
    // Handle style change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Map.Map.useEffect": ()=>{
            if (!mapInstance || !resolvedTheme) return;
            const newStyle = resolvedTheme === "dark" ? mapStyles.dark : mapStyles.light;
            if (currentStyleRef.current === newStyle) return;
            clearStyleTimeout();
            currentStyleRef.current = newStyle;
            setIsStyleLoaded(false);
            mapInstance.setStyle(newStyle, {
                diff: true
            });
        }
    }["Map.Map.useEffect"], [
        mapInstance,
        resolvedTheme,
        mapStyles,
        clearStyleTimeout
    ]);
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Map.Map.useMemo[contextValue]": ()=>({
                map: mapInstance,
                isLoaded: isLoaded && isStyleLoaded
            })
    }["Map.Map.useMemo[contextValue]"], [
        mapInstance,
        isLoaded,
        isStyleLoaded
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$context$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContext"].Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-full h-full", className),
            children: [
                !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultLoader, {}, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/map/components/Map.tsx",
                    lineNumber: 175,
                    columnNumber: 23
                }, this),
                mapInstance && children
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/map/components/Map.tsx",
            lineNumber: 174,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/map/components/Map.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}, "LodwGNRJgQk/PYgajWPFTVUleJs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedTheme"]
    ];
})), "LodwGNRJgQk/PYgajWPFTVUleJs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedTheme"]
    ];
});
_c2 = Map;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DefaultLoader");
__turbopack_context__.k.register(_c1, "Map$forwardRef");
__turbopack_context__.k.register(_c2, "Map");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompassButton",
    ()=>CompassButton,
    "ControlButton",
    ()=>ControlButton,
    "ControlGroup",
    ()=>ControlGroup,
    "MapControls",
    ()=>MapControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Locate$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/lucide-react/dist/esm/icons/locate.js [app-client] (ecmascript) <export default as Locate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/lucide-react/dist/esm/icons/maximize.js [app-client] (ecmascript) <export default as Maximize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$context$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/map/context/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// ─── Shared control primitives ────────────────────────────────────────────────
const positionClasses = {
    "top-left": "top-2 left-2",
    "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "bottom-right": "bottom-10 right-2"
};
function ControlGroup({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col rounded-md border border-border bg-background shadow-sm overflow-hidden [&>button:not(:last-child)]:border-b [&>button:not(:last-child)]:border-border",
        children: children
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = ControlGroup;
function ControlButton({ onClick, label, children, disabled = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        "aria-label": label,
        type: "button",
        disabled: disabled,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center size-8 hover:bg-accent dark:hover:bg-accent/40 transition-colors", disabled && "opacity-50 pointer-events-none cursor-not-allowed"),
        children: children
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c1 = ControlButton;
function CompassButton({ onClick }) {
    _s();
    const { map } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$context$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const compassRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompassButton.useEffect": ()=>{
            if (!map || !compassRef.current) return;
            const compass = compassRef.current;
            const updateRotation = {
                "CompassButton.useEffect.updateRotation": ()=>{
                    compass.style.transform = `rotateX(${map.getPitch()}deg) rotateZ(${-map.getBearing()}deg)`;
                }
            }["CompassButton.useEffect.updateRotation"];
            map.on("rotate", updateRotation);
            map.on("pitch", updateRotation);
            updateRotation();
            return ({
                "CompassButton.useEffect": ()=>{
                    map.off("rotate", updateRotation);
                    map.off("pitch", updateRotation);
                }
            })["CompassButton.useEffect"];
        }
    }["CompassButton.useEffect"], [
        map
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlButton, {
        onClick: onClick,
        label: "Reset bearing to north",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ref: compassRef,
            viewBox: "0 0 24 24",
            className: "size-5 transition-transform duration-200",
            style: {
                transformStyle: "preserve-3d"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2L16 12H12V2Z",
                    className: "fill-red-500"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2L8 12H12V2Z",
                    className: "fill-red-300"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 22L16 12H12V22Z",
                    className: "fill-muted-foreground/60"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 22L8 12H12V22Z",
                    className: "fill-muted-foreground/30"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(CompassButton, "X0hXbpmQEYvPBZ19bs3OP0TLmqM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$context$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c2 = CompassButton;
// ─── MapControls ──────────────────────────────────────────────────────────────
function MapControls({ position = "bottom-right", showZoom = true, showCompass = false, showLocate = false, showFullscreen = false, className, onLocate }) {
    _s1();
    const { map } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$context$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const [waitingForLocation, setWaitingForLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleZoomIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapControls.useCallback[handleZoomIn]": ()=>{
            map?.zoomTo(map.getZoom() + 1, {
                duration: 300
            });
        }
    }["MapControls.useCallback[handleZoomIn]"], [
        map
    ]);
    const handleZoomOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapControls.useCallback[handleZoomOut]": ()=>{
            map?.zoomTo(map.getZoom() - 1, {
                duration: 300
            });
        }
    }["MapControls.useCallback[handleZoomOut]"], [
        map
    ]);
    const handleResetBearing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapControls.useCallback[handleResetBearing]": ()=>{
            map?.resetNorthPitch({
                duration: 300
            });
        }
    }["MapControls.useCallback[handleResetBearing]"], [
        map
    ]);
    const handleLocate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapControls.useCallback[handleLocate]": ()=>{
            setWaitingForLocation(true);
            if (!("geolocation" in navigator)) return;
            navigator.geolocation.getCurrentPosition({
                "MapControls.useCallback[handleLocate]": (pos)=>{
                    const coords = {
                        longitude: pos.coords.longitude,
                        latitude: pos.coords.latitude
                    };
                    map?.flyTo({
                        center: [
                            coords.longitude,
                            coords.latitude
                        ],
                        zoom: 14,
                        duration: 1500
                    });
                    onLocate?.(coords);
                    setWaitingForLocation(false);
                }
            }["MapControls.useCallback[handleLocate]"], {
                "MapControls.useCallback[handleLocate]": (error)=>{
                    const messages = {
                        1: "Location permission denied. Please enable location access in your browser settings.",
                        2: "Location unavailable. Please check your device settings.",
                        3: "Location request timed out. Please try again."
                    };
                    if ("TURBOPACK compile-time truthy", 1) {
                        alert(messages[error.code] ?? "Unable to get your location.");
                    }
                    console.error("Error getting location:", error);
                    setWaitingForLocation(false);
                }
            }["MapControls.useCallback[handleLocate]"]);
        }
    }["MapControls.useCallback[handleLocate]"], [
        map,
        onLocate
    ]);
    const handleFullscreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapControls.useCallback[handleFullscreen]": ()=>{
            const container = map?.getContainer();
            if (!container) return;
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                container.requestFullscreen();
            }
        }
    }["MapControls.useCallback[handleFullscreen]"], [
        map
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute z-10 flex flex-col gap-1.5", positionClasses[position], className),
        children: [
            showZoom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlGroup, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlButton, {
                        onClick: handleZoomIn,
                        label: "Zoom in",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlButton, {
                        onClick: handleZoomOut,
                        label: "Zoom out",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this),
            showCompass && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlGroup, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompassButton, {
                    onClick: handleResetBearing
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this),
            showLocate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlGroup, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlButton, {
                    onClick: handleLocate,
                    label: "Find my location",
                    disabled: waitingForLocation,
                    children: waitingForLocation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "size-4 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                        lineNumber: 184,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Locate$3e$__["Locate"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                        lineNumber: 186,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                    lineNumber: 182,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                lineNumber: 181,
                columnNumber: 9
            }, this),
            showFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlGroup, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlButton, {
                    onClick: handleFullscreen,
                    label: "Toggle fullscreen",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                        lineNumber: 194,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                    lineNumber: 193,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s1(MapControls, "WH0yD53q2g/3tybMwlFpCUbmPys=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$context$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c3 = MapControls;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ControlGroup");
__turbopack_context__.k.register(_c1, "ControlButton");
__turbopack_context__.k.register(_c2, "CompassButton");
__turbopack_context__.k.register(_c3, "MapControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/map/components/MapMarker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapMarker",
    ()=>MapMarker,
    "MarkerContent",
    ()=>MarkerContent,
    "MarkerLabel",
    ()=>MarkerLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/maplibre-gl/dist/maplibre-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$context$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/map/context/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// ─── MapMarker ────────────────────────────────────────────────────────────────
function MapMarker({ longitude, latitude, children, onClick, onMouseEnter, onMouseLeave, onDragStart, onDrag, onDragEnd, draggable = false, ...markerOptions }) {
    _s();
    const { map } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$context$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const callbacksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        onClick,
        onMouseEnter,
        onMouseLeave,
        onDragStart,
        onDrag,
        onDragEnd
    });
    callbacksRef.current = {
        onClick,
        onMouseEnter,
        onMouseLeave,
        onDragStart,
        onDrag,
        onDragEnd
    };
    const marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapMarker.useMemo[marker]": ()=>{
            const instance = new __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker({
                ...markerOptions,
                element: document.createElement("div"),
                draggable
            }).setLngLat([
                longitude,
                latitude
            ]);
            const el = instance.getElement();
            el?.addEventListener("click", {
                "MapMarker.useMemo[marker]": (e)=>callbacksRef.current.onClick?.(e)
            }["MapMarker.useMemo[marker]"]);
            el?.addEventListener("mouseenter", {
                "MapMarker.useMemo[marker]": (e)=>callbacksRef.current.onMouseEnter?.(e)
            }["MapMarker.useMemo[marker]"]);
            el?.addEventListener("mouseleave", {
                "MapMarker.useMemo[marker]": (e)=>callbacksRef.current.onMouseLeave?.(e)
            }["MapMarker.useMemo[marker]"]);
            instance.on("dragstart", {
                "MapMarker.useMemo[marker]": ()=>{
                    const lngLat = instance.getLngLat();
                    callbacksRef.current.onDragStart?.({
                        lng: lngLat.lng,
                        lat: lngLat.lat
                    });
                }
            }["MapMarker.useMemo[marker]"]);
            instance.on("drag", {
                "MapMarker.useMemo[marker]": ()=>{
                    const lngLat = instance.getLngLat();
                    callbacksRef.current.onDrag?.({
                        lng: lngLat.lng,
                        lat: lngLat.lat
                    });
                }
            }["MapMarker.useMemo[marker]"]);
            instance.on("dragend", {
                "MapMarker.useMemo[marker]": ()=>{
                    const lngLat = instance.getLngLat();
                    callbacksRef.current.onDragEnd?.({
                        lng: lngLat.lng,
                        lat: lngLat.lat
                    });
                }
            }["MapMarker.useMemo[marker]"]);
            return instance;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MapMarker.useMemo[marker]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapMarker.useEffect": ()=>{
            if (!map) return;
            marker.addTo(map);
            return ({
                "MapMarker.useEffect": ()=>{
                    marker.remove();
                }
            })["MapMarker.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MapMarker.useEffect"], [
        map
    ]);
    // Sync props to marker imperatively
    if (marker.getLngLat().lng !== longitude || marker.getLngLat().lat !== latitude) {
        marker.setLngLat([
            longitude,
            latitude
        ]);
    }
    if (marker.isDraggable() !== draggable) {
        marker.setDraggable(draggable);
    }
    const currentOffset = marker.getOffset();
    const newOffset = markerOptions.offset ?? [
        0,
        0
    ];
    const [newOffsetX, newOffsetY] = Array.isArray(newOffset) ? newOffset : [
        newOffset.x,
        newOffset.y
    ];
    if (currentOffset.x !== newOffsetX || currentOffset.y !== newOffsetY) {
        marker.setOffset(newOffset);
    }
    if (marker.getRotation() !== markerOptions.rotation) {
        marker.setRotation(markerOptions.rotation ?? 0);
    }
    if (marker.getRotationAlignment() !== markerOptions.rotationAlignment) {
        marker.setRotationAlignment(markerOptions.rotationAlignment ?? "auto");
    }
    if (marker.getPitchAlignment() !== markerOptions.pitchAlignment) {
        marker.setPitchAlignment(markerOptions.pitchAlignment ?? "auto");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$context$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerContext"].Provider, {
        value: {
            marker,
            map
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapMarker.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(MapMarker, "pmE51ktL0KmgmHJ4zCZOvuyeiM0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$context$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = MapMarker;
// ─── MarkerContent ────────────────────────────────────────────────────────────
function DefaultMarkerIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-4 w-4 rounded-full border-2 border-white"
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapMarker.tsx",
        lineNumber: 122,
        columnNumber: 10
    }, this);
}
_c1 = DefaultMarkerIcon;
function MarkerContent({ children, className }) {
    _s1();
    const { marker } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$context$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarkerContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative cursor-pointer", className),
        children: children || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultMarkerIcon, {}, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapMarker.tsx",
            lineNumber: 129,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapMarker.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this), marker.getElement());
}
_s1(MarkerContent, "osbt57V5mtn2/24aM74LaDe9FN8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$context$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarkerContext"]
    ];
});
_c2 = MarkerContent;
// ─── MarkerLabel ──────────────────────────────────────────────────────────────
function MarkerLabel({ children, className, position = "top" }) {
    const positionClasses = {
        top: "bottom-full mb-1",
        bottom: "top-full mt-1"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-1/2 -translate-x-1/2 whitespace-nowrap", "text-[10px] font-medium text-foreground", positionClasses[position], className),
        children: children
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/map/components/MapMarker.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_c3 = MarkerLabel;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "MapMarker");
__turbopack_context__.k.register(_c1, "DefaultMarkerIcon");
__turbopack_context__.k.register(_c2, "MarkerContent");
__turbopack_context__.k.register(_c3, "MarkerLabel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/firebase.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "app",
    ()=>app,
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// firebase.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyCkEei5sDldeWlMmXB852m_pheh96zF048"),
    authDomain: ("TURBOPACK compile-time value", "lawn-snow-6ab68.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "lawn-snow-6ab68"),
    storageBucket: ("TURBOPACK compile-time value", "lawn-snow-6ab68.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "894448553102"),
    appId: ("TURBOPACK compile-time value", "1:894448553102:web:8466eed52ebb1e10e48ddf"),
    measurementId: ("TURBOPACK compile-time value", "G-QP14130PHF")
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])()[0];
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/auth/ModalBase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const ModalBase = ({ onClose, children, closeButtonColor = "#09f", slideFrom })=>{
    const animationName = slideFrom === "right" ? "modalSlideFromRight" : slideFrom === "left" ? "modalSlideFromLeft" : "modalSlideUp";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 500,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            background: "rgba(0,0,0,0.45)"
        },
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes modalSlideUp {
          from { transform: translateY(40px); opacity: 0; }
          to   { transform: translateY(0);   opacity: 1; }
        }
        @keyframes modalSlideFromRight {
          from { transform: translateX(60px); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes modalSlideFromLeft {
          from { transform: translateX(-60px); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ModalBase.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "#fff",
                    borderRadius: "20px 20px 0 0",
                    width: "100%",
                    maxWidth: 520,
                    maxHeight: "92dvh",
                    overflowY: "auto",
                    padding: "24px 24px 48px",
                    position: "relative",
                    animation: `${animationName} 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`
                },
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        "aria-label": "Close",
                        style: {
                            position: "absolute",
                            top: 16,
                            right: 16,
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            background: closeButtonColor,
                            border: "none",
                            color: "#fff",
                            fontSize: 20,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            lineHeight: 1,
                            zIndex: 1,
                            flexShrink: 0
                        },
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ModalBase.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ModalBase.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ModalBase.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ModalBase;
const __TURBOPACK__default__export__ = ModalBase;
var _c;
__turbopack_context__.k.register(_c, "ModalBase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/auth/PhoneInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const COUNTRY_CODES = [
    {
        code: "+1",
        flag: "🇺🇸",
        label: "US / CA"
    },
    {
        code: "+44",
        flag: "🇬🇧",
        label: "UK"
    },
    {
        code: "+61",
        flag: "🇦🇺",
        label: "AU"
    },
    {
        code: "+49",
        flag: "🇩🇪",
        label: "DE"
    },
    {
        code: "+33",
        flag: "🇫🇷",
        label: "FR"
    },
    {
        code: "+91",
        flag: "🇮🇳",
        label: "IN"
    }
];
const PhoneInput = ({ value, onChange, countryCode, onCountryCodeChange })=>{
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selected = COUNTRY_CODES.find((c)=>c.code === countryCode) ?? COUNTRY_CODES[0];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhoneInput.useEffect": ()=>{
            const handler = {
                "PhoneInput.useEffect.handler": (e)=>{
                    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                        setOpen(false);
                    }
                }
            }["PhoneInput.useEffect.handler"];
            document.addEventListener("mousedown", handler);
            return ({
                "PhoneInput.useEffect": ()=>document.removeEventListener("mousedown", handler)
            })["PhoneInput.useEffect"];
        }
    }["PhoneInput.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            gap: 8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: wrapperRef,
                style: {
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setOpen((o)=>!o),
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "14px 12px",
                            background: "#f0f0f0",
                            border: "none",
                            borderRadius: 12,
                            cursor: "pointer",
                            fontSize: 15,
                            fontWeight: 500,
                            whiteSpace: "nowrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 22
                                },
                                children: selected.flag
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/PhoneInput.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: selected.code
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/PhoneInput.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 10
                                },
                                children: "▼"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/PhoneInput.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/PhoneInput.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: "calc(100% + 4px)",
                            left: 0,
                            background: "#fff",
                            border: "1px solid #e0e0e0",
                            borderRadius: 12,
                            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                            zIndex: 600,
                            minWidth: 180,
                            overflow: "hidden"
                        },
                        children: COUNTRY_CODES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onCountryCodeChange(c.code);
                                    setOpen(false);
                                },
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    width: "100%",
                                    padding: "12px 16px",
                                    background: c.code === countryCode ? "#f0f8ff" : "#fff",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: 15,
                                    textAlign: "left",
                                    borderBottom: "1px solid #f0f0f0"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 20
                                        },
                                        children: c.flag
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/PhoneInput.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 600
                                        },
                                        children: c.code
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/PhoneInput.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#888",
                                            fontSize: 13
                                        },
                                        children: c.label
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/PhoneInput.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, c.code, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/PhoneInput.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/PhoneInput.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/PhoneInput.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "tel",
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: "Phone number",
                style: {
                    flex: 1,
                    padding: "14px 16px",
                    background: "#f0f0f0",
                    border: "none",
                    borderRadius: 12,
                    fontSize: 16,
                    outline: "none",
                    minWidth: 0
                }
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/PhoneInput.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/PhoneInput.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PhoneInput, "72uTM/mOsB4ZzBRn2bgLzFIO9QI=");
_c = PhoneInput;
const __TURBOPACK__default__export__ = PhoneInput;
var _c;
__turbopack_context__.k.register(_c, "PhoneInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ModalBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/ModalBase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$PhoneInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/PhoneInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/firebase.ts [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const LoginModal = ({ onClose, onCodeSent, onCreateAccount, initialPhone = "", initialCountryCode = "+1", slideFrom })=>{
    _s();
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPhone);
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCountryCode);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const recaptchaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const digits = phone.replace(/\D/g, "");
    const fullPhone = countryCode + digits;
    const isValid = digits.length >= 10;
    const handleSendCode = async ()=>{
        if (!isValid || loading) return;
        setLoading(true);
        setError("");
        try {
            if (!recaptchaRef.current) {
                recaptchaRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecaptchaVerifier"](__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"], "recaptcha-login", {
                    size: "invisible"
                });
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithPhoneNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"], fullPhone, recaptchaRef.current);
            onCodeSent(result, fullPhone);
        } catch (err) {
            setError(err.message ?? "Failed to send verification code. Please try again.");
            recaptchaRef.current = null;
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ModalBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onClose: onClose,
        slideFrom: slideFrom,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "recaptcha-login"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: 26,
                    fontWeight: 700,
                    marginBottom: 28,
                    paddingRight: 40,
                    marginTop: 4
                },
                children: "Sign in to your account!"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    fontWeight: 700,
                    fontSize: 16,
                    display: "block",
                    marginBottom: 10
                },
                children: "Phone Number"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$PhoneInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: phone,
                onChange: setPhone,
                countryCode: countryCode,
                onCountryCodeChange: setCountryCode
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "#888",
                    fontSize: 14,
                    margin: "8px 0 28px"
                },
                children: "We'll send you a verification code via SMS."
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "#e53e3e",
                    fontSize: 14,
                    marginBottom: 12
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSendCode,
                disabled: !isValid || loading,
                style: {
                    width: "100%",
                    padding: "16px",
                    background: isValid && !loading ? "#09f" : "#ddd",
                    color: "#fff",
                    border: "none",
                    borderRadius: 14,
                    fontSize: 17,
                    fontWeight: 600,
                    cursor: isValid && !loading ? "pointer" : "not-allowed",
                    marginBottom: 14
                },
                children: loading ? "Sending…" : "Send Code"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    textAlign: "center",
                    color: "#888",
                    fontSize: 13,
                    marginBottom: 24
                },
                children: [
                    "By tapping Send Code, you agree to our",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            textDecoration: "underline",
                            cursor: "pointer"
                        },
                        children: "Terms of Use"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    "and",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            textDecoration: "underline",
                            cursor: "pointer"
                        },
                        children: "Privacy Policy"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#888",
                            fontSize: 15,
                            margin: "0 0 4px"
                        },
                        children: "Don't have an account?"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCreateAccount,
                        style: {
                            background: "none",
                            border: "none",
                            color: "#09f",
                            fontSize: 17,
                            fontWeight: 700,
                            cursor: "pointer",
                            textDecoration: "underline"
                        },
                        children: "Create account!"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LoginModal, "BqihfczDi/4EK2YNt3O9QtcG3f4=");
_c = LoginModal;
const __TURBOPACK__default__export__ = LoginModal;
var _c;
__turbopack_context__.k.register(_c, "LoginModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function clamp(v, lo, hi) {
    return Math.max(lo, Math.min(v, hi));
}
const ImageCropModal = ({ src, onCrop, onCancel })=>{
    _s();
    // Dynamic crop size — fills the screen width so image is shown "as-is"
    const cropSize = ("TURBOPACK compile-time truthy", 1) ? Math.min(window.innerWidth - 24, 420) : "TURBOPACK unreachable";
    const [imgNatural, setImgNatural] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [offset, setOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Scale so the shorter dimension fills cropSize — image is never squeezed
    const getDisp = (nat)=>nat.w >= nat.h ? {
            w: nat.w / nat.h * cropSize,
            h: cropSize
        } : {
            w: cropSize,
            h: nat.h / nat.w * cropSize
        };
    const disp = imgNatural ? getDisp(imgNatural) : {
        w: cropSize,
        h: cropSize
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageCropModal.useEffect": ()=>{
            const img = new Image();
            img.onload = ({
                "ImageCropModal.useEffect": ()=>{
                    const nat = {
                        w: img.naturalWidth,
                        h: img.naturalHeight
                    };
                    setImgNatural(nat);
                    const d = getDisp(nat);
                    // Start centered
                    setOffset({
                        x: (d.w - cropSize) / 2,
                        y: (d.h - cropSize) / 2
                    });
                }
            })["ImageCropModal.useEffect"];
            img.src = src;
        }
    }["ImageCropModal.useEffect"], [
        src
    ]);
    const onPointerDown = (e)=>{
        e.preventDefault();
        const pt = "touches" in e ? e.touches[0] : e;
        setDragging(true);
        dragStart.current = {
            cx: pt.clientX,
            cy: pt.clientY,
            ox: offset.x,
            oy: offset.y
        };
    };
    const onPointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageCropModal.useCallback[onPointerMove]": (e)=>{
            if (!dragStart.current || !imgNatural) return;
            const pt = "touches" in e ? e.touches[0] : e;
            const dx = dragStart.current.cx - pt.clientX;
            const dy = dragStart.current.cy - pt.clientY;
            const d = getDisp(imgNatural);
            setOffset({
                x: clamp(dragStart.current.ox + dx, 0, Math.max(0, d.w - cropSize)),
                y: clamp(dragStart.current.oy + dy, 0, Math.max(0, d.h - cropSize))
            });
        }
    }["ImageCropModal.useCallback[onPointerMove]"], [
        imgNatural,
        cropSize
    ]);
    const onPointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageCropModal.useCallback[onPointerUp]": ()=>{
            setDragging(false);
            dragStart.current = null;
        }
    }["ImageCropModal.useCallback[onPointerUp]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageCropModal.useEffect": ()=>{
            if (!dragging) return;
            window.addEventListener("mousemove", onPointerMove);
            window.addEventListener("mouseup", onPointerUp);
            window.addEventListener("touchmove", onPointerMove, {
                passive: false
            });
            window.addEventListener("touchend", onPointerUp);
            return ({
                "ImageCropModal.useEffect": ()=>{
                    window.removeEventListener("mousemove", onPointerMove);
                    window.removeEventListener("mouseup", onPointerUp);
                    window.removeEventListener("touchmove", onPointerMove);
                    window.removeEventListener("touchend", onPointerUp);
                }
            })["ImageCropModal.useEffect"];
        }
    }["ImageCropModal.useEffect"], [
        dragging,
        onPointerMove,
        onPointerUp
    ]);
    const handleCrop = ()=>{
        if (!imgNatural || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const OUT = 600;
        canvas.width = OUT;
        canvas.height = OUT;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const scaleX = imgNatural.w / disp.w;
        const scaleY = imgNatural.h / disp.h;
        const img = new Image();
        img.onload = ()=>{
            ctx.drawImage(img, offset.x * scaleX, offset.y * scaleY, cropSize * scaleX, cropSize * scaleY, 0, 0, OUT, OUT);
            onCrop(canvas.toDataURL("image/jpeg", 0.9));
        };
        img.src = src;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 900,
            background: "#111",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    display: "none"
                }
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "rgba(255,255,255,0.55)",
                    fontSize: 13,
                    marginBottom: 20,
                    letterSpacing: 0.3
                },
                children: "Drag to reposition"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    width: cropSize,
                    height: cropSize,
                    overflow: "hidden",
                    cursor: dragging ? "grabbing" : "grab",
                    touchAction: "none",
                    userSelect: "none"
                },
                onMouseDown: onPointerDown,
                onTouchStart: onPointerDown,
                children: [
                    imgNatural && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: src,
                        draggable: false,
                        style: {
                            position: "absolute",
                            width: disp.w,
                            height: disp.h,
                            top: -offset.y,
                            left: -offset.x,
                            opacity: 0.28,
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            borderRadius: "50%",
                            overflow: "hidden",
                            border: "2.5px solid rgba(255,255,255,0.8)",
                            boxSizing: "border-box"
                        },
                        children: imgNatural && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: src,
                            draggable: false,
                            style: {
                                position: "absolute",
                                width: disp.w,
                                height: disp.h,
                                top: -offset.y,
                                left: -offset.x,
                                pointerEvents: "none"
                            }
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 16,
                    marginTop: 36
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        style: {
                            padding: "12px 30px",
                            background: "rgba(255,255,255,0.1)",
                            color: "#fff",
                            border: "none",
                            borderRadius: 999,
                            fontSize: 16,
                            cursor: "pointer"
                        },
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCrop,
                        disabled: !imgNatural,
                        style: {
                            padding: "12px 30px",
                            background: imgNatural ? "#22c55e" : "#444",
                            color: "#fff",
                            border: "none",
                            borderRadius: 999,
                            fontSize: 16,
                            fontWeight: 700,
                            cursor: imgNatural ? "pointer" : "default"
                        },
                        children: "Use Photo"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ImageCropModal, "/LcX/jnEswhoXzkufYM8cAtvuBw=");
_c = ImageCropModal;
const __TURBOPACK__default__export__ = ImageCropModal;
var _c;
__turbopack_context__.k.register(_c, "ImageCropModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ModalBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/ModalBase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$PhoneInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/PhoneInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ImageCropModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/firebase.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const CreateAccountModal = ({ onClose, onCodeSent, onLogin, onPhoneAlreadyRegistered })=>{
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("+1");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [photoFile, setPhotoFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [photoPreview, setPhotoPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showImagePicker, setShowImagePicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cropSrc, setCropSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recaptchaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = ("TURBOPACK compile-time value", "object") !== "undefined" && /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
    const digits = phone.replace(/\D/g, "");
    const fullPhone = countryCode + digits;
    const isValid = name.trim().length > 0 && digits.length >= 10 && email.trim().length > 0;
    const handlePhotoSelected = (file)=>{
        setShowImagePicker(false);
        const reader = new FileReader();
        reader.onload = (e)=>setCropSrc(e.target?.result);
        reader.readAsDataURL(file);
    };
    const handleCropDone = (dataUrl)=>{
        setCropSrc(null);
        setPhotoPreview(dataUrl);
        const arr = dataUrl.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        const u8 = new Uint8Array(bstr.length);
        for(let i = 0; i < bstr.length; i++)u8[i] = bstr.charCodeAt(i);
        setPhotoFile(new File([
            u8
        ], "profile.jpg", {
            type: mime
        }));
    };
    const handleSendCode = async ()=>{
        if (!isValid || loading) return;
        setLoading(true);
        setError("");
        try {
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("phoneNumber", "==", fullPhone)));
            if (!snapshot.empty) {
                setLoading(false);
                onPhoneAlreadyRegistered(phone, countryCode);
                return;
            }
            if (!recaptchaRef.current) {
                recaptchaRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecaptchaVerifier"](__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"], "recaptcha-create", {
                    size: "invisible"
                });
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithPhoneNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"], fullPhone, recaptchaRef.current);
            onCodeSent(result, fullPhone, {
                name,
                email,
                photoFile,
                photoPreview
            });
        } catch (err) {
            setError(err.message ?? "Failed to send verification code. Please try again.");
            recaptchaRef.current = null;
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            cropSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ImageCropModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: cropSrc,
                onCrop: handleCropDone,
                onCancel: ()=>setCropSrc(null)
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ModalBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: onClose,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "recaptcha-create"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 108,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fileInputRef,
                        type: "file",
                        accept: "image/*",
                        style: {
                            display: "none"
                        },
                        onChange: (e)=>e.target.files?.[0] && handlePhotoSelected(e.target.files[0])
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 111,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: cameraInputRef,
                        type: "file",
                        accept: "image/*",
                        capture: "user",
                        style: {
                            display: "none"
                        },
                        onChange: (e)=>e.target.files?.[0] && handlePhotoSelected(e.target.files[0])
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 118,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    showImagePicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "fixed",
                            inset: 0,
                            zIndex: 700,
                            display: "flex",
                            alignItems: "flex-end",
                            background: "rgba(0,0,0,0.4)"
                        },
                        onClick: ()=>setShowImagePicker(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "100%",
                                padding: "0 8px 8px"
                            },
                            onClick: (e)=>e.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "#fff",
                                        borderRadius: 14,
                                        overflow: "hidden",
                                        marginBottom: 8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: "12px 16px",
                                                textAlign: "center",
                                                color: "#888",
                                                fontSize: 14,
                                                borderBottom: "1px solid #e5e5ea"
                                            },
                                            children: "Select Photo"
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>cameraInputRef.current?.click(),
                                            style: {
                                                width: "100%",
                                                padding: "18px",
                                                background: "#fff",
                                                border: "none",
                                                borderBottom: "1px solid #e5e5ea",
                                                color: "#007aff",
                                                fontSize: 17,
                                                cursor: "pointer"
                                            },
                                            children: "Camera"
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>fileInputRef.current?.click(),
                                            style: {
                                                width: "100%",
                                                padding: "18px",
                                                background: "#fff",
                                                border: "none",
                                                color: "#007aff",
                                                fontSize: 17,
                                                cursor: "pointer"
                                            },
                                            children: "Photo Library"
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowImagePicker(false),
                                    style: {
                                        width: "100%",
                                        padding: "18px",
                                        background: "#fff",
                                        border: "none",
                                        borderRadius: 14,
                                        color: "#007aff",
                                        fontSize: 17,
                                        fontWeight: 700,
                                        cursor: "pointer"
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: 20,
                            fontWeight: 700,
                            marginBottom: 4,
                            paddingRight: 40,
                            marginTop: 4
                        },
                        children: "Create Service Provider Account!"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 215,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#e53e3e",
                            fontSize: 14,
                            marginBottom: 5
                        },
                        children: "* All the fields are required."
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 218,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 5
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setShowImagePicker(true),
                            style: {
                                width: 100,
                                height: 100,
                                borderRadius: "50%",
                                background: "#e8e8e8",
                                border: photoPreview ? "3px solid #22c55e" : "none",
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                                padding: 0
                            },
                            children: photoPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: photoPreview,
                                alt: "Profile preview",
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: 32,
                                        height: 32,
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z",
                                                stroke: "#09f",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                                lineNumber: 251,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "13",
                                                r: "4",
                                                stroke: "#09f",
                                                strokeWidth: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#09f",
                                            fontSize: 14,
                                            marginTop: 5
                                        },
                                        children: "Add Photo"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                            lineNumber: 224,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 223,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontWeight: 700,
                            fontSize: 14,
                            display: "block",
                            marginBottom: 8
                        },
                        children: "Full Name"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 267,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: name,
                        onChange: (e)=>setName(e.target.value),
                        placeholder: "Enter your full name",
                        style: {
                            width: "100%",
                            padding: "14px 16px",
                            background: "#f0f0f0",
                            border: "none",
                            borderRadius: 12,
                            fontSize: 14,
                            outline: "none",
                            boxSizing: "border-box",
                            marginBottom: 20
                        }
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 270,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontWeight: 700,
                            fontSize: 14,
                            display: "block",
                            marginBottom: 8
                        },
                        children: "Phone Number"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 289,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$PhoneInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        value: phone,
                        onChange: setPhone,
                        countryCode: countryCode,
                        onCountryCodeChange: setCountryCode
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 292,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#888",
                            fontSize: 14,
                            margin: "8px 0 20px"
                        },
                        children: "We'll send you a verification code via SMS."
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 298,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontWeight: 700,
                            fontSize: 14,
                            display: "block",
                            marginBottom: 8
                        },
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 303,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        placeholder: "Enter your email address",
                        style: {
                            width: "100%",
                            padding: "14px 16px",
                            background: "#f0f0f0",
                            border: "none",
                            borderRadius: 12,
                            fontSize: 14,
                            outline: "none",
                            boxSizing: "border-box",
                            marginBottom: 24
                        }
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 306,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#e53e3e",
                            fontSize: 14,
                            marginBottom: 12
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSendCode,
                        disabled: !isValid || loading,
                        style: {
                            width: "100%",
                            padding: "16px",
                            background: isValid && !loading ? "#09f" : "#ddd",
                            color: "#fff",
                            border: "none",
                            borderRadius: 14,
                            fontSize: 17,
                            fontWeight: 600,
                            cursor: isValid && !loading ? "pointer" : "not-allowed",
                            marginBottom: 14
                        },
                        children: loading ? "Sending…" : "Send Code"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 328,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            textAlign: "center",
                            color: "#888",
                            fontSize: 14,
                            marginBottom: 24
                        },
                        children: [
                            "By tapping Send Code, you agree to our",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    textDecoration: "underline",
                                    cursor: "pointer"
                                },
                                children: "Terms of Use"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                lineNumber: 349,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            "and",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    textDecoration: "underline",
                                    cursor: "pointer"
                                },
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                lineNumber: 351,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 347,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#888",
                                    fontSize: 15,
                                    margin: "0 0 4px"
                                },
                                children: "Already have an account?"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                lineNumber: 355,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onLogin,
                                style: {
                                    background: "none",
                                    border: "none",
                                    color: "#09f",
                                    fontSize: 17,
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    textDecoration: "underline"
                                },
                                children: "Log in!"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                lineNumber: 356,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 354,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                lineNumber: 107,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(CreateAccountModal, "jKJS4NvM9owloLsdTn4KJRuXH3c=");
_c = CreateAccountModal;
const __TURBOPACK__default__export__ = CreateAccountModal;
var _c;
__turbopack_context__.k.register(_c, "CreateAccountModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ModalBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/ModalBase.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const VerifyCodeModal = ({ onClose, confirmationResult, phone, photoPreview, onVerified, onEditPhone, isSignup = false, onLoginInstead })=>{
    _s();
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showBanner, setShowBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VerifyCodeModal.useEffect": ()=>{
            const t = setTimeout({
                "VerifyCodeModal.useEffect.t": ()=>setShowBanner(false)
            }["VerifyCodeModal.useEffect.t"], 4000);
            return ({
                "VerifyCodeModal.useEffect": ()=>clearTimeout(t)
            })["VerifyCodeModal.useEffect"];
        }
    }["VerifyCodeModal.useEffect"], []);
    const handleVerify = async ()=>{
        if (code.length !== 6 || loading) return;
        setLoading(true);
        setError("");
        try {
            const credential = await confirmationResult.confirm(code);
            onVerified(credential);
        } catch  {
            setError("Invalid code. Please check and try again.");
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ModalBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 8
            },
            children: [
                photoPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: photoPreview,
                    alt: "Profile",
                    style: {
                        width: 90,
                        height: 90,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid #22c55e",
                        marginBottom: 16
                    }
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 54,
                        height: 54,
                        borderRadius: "50%",
                        background: "#09f",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: 28,
                        height: 28,
                        viewBox: "0 0 24 24",
                        fill: "white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: 22,
                        fontWeight: 700,
                        marginBottom: 8,
                        textAlign: "center"
                    },
                    children: "Enter the verification code"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "#888",
                        fontSize: 15,
                        marginBottom: 4,
                        textAlign: "center"
                    },
                    children: "We sent a 6-digit code to"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontWeight: 700,
                        fontSize: 16,
                        marginBottom: 28,
                        textAlign: "center"
                    },
                    children: phone
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "tel",
                    inputMode: "numeric",
                    maxLength: 6,
                    value: code,
                    onChange: (e)=>setCode(e.target.value.replace(/\D/g, "").slice(0, 6)),
                    placeholder: "Enter 6-digit code",
                    style: {
                        width: "100%",
                        padding: "16px",
                        background: "#f0f0f0",
                        border: "none",
                        borderRadius: 12,
                        fontSize: 22,
                        letterSpacing: 8,
                        textAlign: "center",
                        outline: "none",
                        boxSizing: "border-box",
                        marginBottom: 16,
                        fontWeight: 600
                    }
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "#e53e3e",
                        fontSize: 14,
                        marginBottom: 12,
                        textAlign: "center"
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 134,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleVerify,
                    disabled: code.length !== 6 || loading,
                    style: {
                        width: "100%",
                        padding: "16px",
                        background: code.length === 6 && !loading ? "#09f" : "#ddd",
                        color: "#fff",
                        border: "none",
                        borderRadius: 14,
                        fontSize: 17,
                        fontWeight: 600,
                        cursor: code.length === 6 && !loading ? "pointer" : "not-allowed",
                        marginBottom: 18
                    },
                    children: loading ? "Verifying…" : "Verify"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onEditPhone,
                    style: {
                        background: "none",
                        border: "none",
                        color: "#09f",
                        fontSize: 16,
                        cursor: "pointer",
                        textDecoration: "underline",
                        marginBottom: 20
                    },
                    children: "Edit phone number"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                showBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "#f0fff4",
                        border: "1px solid #68d391",
                        borderRadius: 10,
                        padding: "12px 16px",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 20,
                        width: "100%",
                        boxSizing: "border-box"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 22,
                                height: 22,
                                borderRadius: "50%",
                                background: "#22c55e",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: 12,
                                height: 12,
                                viewBox: "0 0 20 20",
                                fill: "none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M5 10.5L9 14.5L15 7.5",
                                    stroke: "white",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                                    lineNumber: 201,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                                lineNumber: 200,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: "#276749",
                                fontSize: 14
                            },
                            children: [
                                "Verification code sent to ",
                                phone
                            ]
                        }, void 0, true, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 174,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                isSignup && onLoginInstead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        marginTop: 4
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#888",
                                fontSize: 15,
                                margin: "0 0 4px"
                            },
                            children: "Already have an account?"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onLoginInstead,
                            style: {
                                background: "none",
                                border: "none",
                                color: "#09f",
                                fontSize: 17,
                                fontWeight: 700,
                                cursor: "pointer",
                                textDecoration: "underline"
                            },
                            children: "Log in!"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 217,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(VerifyCodeModal, "iWTVNr2ovjuzppKIJ7143r32HhI=");
_c = VerifyCodeModal;
const __TURBOPACK__default__export__ = VerifyCodeModal;
var _c;
__turbopack_context__.k.register(_c, "VerifyCodeModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ModalBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/ModalBase.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SERVICES = [
    {
        id: "service-one",
        name: "Lawn Care & Maintenance",
        image: "/service-one.png",
        hasToolsOption: false
    },
    {
        id: "service-two",
        name: "Driveway & Sidewalk Snow Clearing",
        image: "/service-two.png",
        hasToolsOption: true
    }
];
const Checkbox = ({ checked, onChange })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onChange,
        style: {
            width: 22,
            height: 22,
            borderRadius: 5,
            border: `2px solid ${checked ? "#22c55e" : "#ccc"}`,
            background: checked ? "#22c55e" : "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
        },
        children: checked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: 13,
            height: 13,
            viewBox: "0 0 20 20",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 10.5L9 14.5L15 7.5",
                stroke: "white",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Checkbox;
const RadioDot = ({ checked, onChange })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onChange,
        style: {
            width: 22,
            height: 22,
            borderRadius: "50%",
            border: `2px solid ${checked ? "#22c55e" : "#ccc"}`,
            background: checked ? "#22c55e" : "#fff",
            cursor: "pointer",
            flexShrink: 0
        }
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = RadioDot;
const SelectServicesModal = ({ onClose, onDone, initialData })=>{
    _s();
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SelectServicesModal.useState": ()=>{
            if (initialData) {
                return {
                    "service-one": {
                        selected: initialData.selectedServices.includes("service-one"),
                        description: initialData.descriptions["service-one"] ?? "",
                        hasTools: false
                    },
                    "service-two": {
                        selected: initialData.selectedServices.includes("service-two"),
                        description: initialData.descriptions["service-two"] ?? "",
                        hasTools: initialData.hasTools
                    }
                };
            }
            return {
                "service-one": {
                    selected: false,
                    description: "",
                    hasTools: false
                },
                "service-two": {
                    selected: false,
                    description: "",
                    hasTools: true
                }
            };
        }
    }["SelectServicesModal.useState"]);
    const [payments, setPayments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SelectServicesModal.useState": ()=>{
            if (initialData) {
                return {
                    Cash: initialData.paymentMethods.includes("Cash"),
                    "Credit Card": initialData.paymentMethods.includes("Credit Card"),
                    "e-Transfer": initialData.paymentMethods.includes("e-Transfer")
                };
            }
            return {
                Cash: false,
                "Credit Card": false,
                "e-Transfer": false
            };
        }
    }["SelectServicesModal.useState"]);
    const update = (id, patch)=>setServices((prev)=>({
                ...prev,
                [id]: {
                    ...prev[id],
                    ...patch
                }
            }));
    const selected = SERVICES.filter((s)=>services[s.id].selected);
    const allDescribed = selected.every((s)=>services[s.id].description.trim());
    const anyPayment = Object.values(payments).some(Boolean);
    const canDone = selected.length > 0 && allDescribed && anyPayment;
    const handleDone = ()=>{
        if (!canDone) return;
        const selectedIds = selected.map((s)=>s.id);
        const descriptions = {};
        selectedIds.forEach((id)=>{
            descriptions[id] = services[id].description;
        });
        onDone({
            selectedServices: selectedIds,
            descriptions,
            hasTools: services["service-two"].hasTools,
            paymentMethods: Object.entries(payments).filter(([, v])=>v).map(([k])=>k)
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ModalBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onClose: onClose,
        closeButtonColor: "#22c55e",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 4,
                    paddingRight: 40,
                    marginTop: 4
                },
                children: "Select your service(s):"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "#888",
                    fontSize: 14,
                    marginBottom: 24
                },
                children: "You can select multiple services"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            SERVICES.map((svc)=>{
                const state = services[svc.id];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 28
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>update(svc.id, {
                                    selected: !state.selected
                                }),
                            style: {
                                position: "relative",
                                borderRadius: 14,
                                overflow: "hidden",
                                cursor: "pointer",
                                height: 160,
                                marginBottom: 14
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: svc.image,
                                    alt: svc.name,
                                    style: {
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        inset: 0,
                                        background: state.selected ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.08)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
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
                                        maxWidth: "calc(100% - 20px)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 26,
                                                height: 26,
                                                borderRadius: "50%",
                                                background: state.selected ? "#22c55e" : "#fff",
                                                border: state.selected ? "none" : "2px solid #bbb",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0
                                            },
                                            children: state.selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: 14,
                                                height: 14,
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 10.5L9 14.5L15 7.5",
                                                    stroke: "white",
                                                    strokeWidth: "2.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                                                lineNumber: 210,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        svc.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        state.selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: {
                                        fontWeight: 600,
                                        fontSize: 15,
                                        display: "block",
                                        marginBottom: 6
                                    },
                                    children: [
                                        "Description: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#e53e3e"
                                            },
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                                            lineNumber: 222,
                                            columnNumber: 32
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                                    lineNumber: 221,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: state.description,
                                    onChange: (e)=>update(svc.id, {
                                            description: e.target.value
                                        }),
                                    placeholder: `Describe your ${svc.name.toLowerCase()} service…`,
                                    rows: 3,
                                    style: {
                                        width: "100%",
                                        padding: "12px 14px",
                                        border: "1px solid #e0e0e0",
                                        borderRadius: 10,
                                        fontSize: 15,
                                        outline: "none",
                                        resize: "none",
                                        boxSizing: "border-box",
                                        fontFamily: "inherit",
                                        marginBottom: svc.hasToolsOption ? 12 : 0
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                                    lineNumber: 224,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true),
                        svc.hasToolsOption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: state.selected ? 0 : 4
                            },
                            children: [
                                "I have tools",
                                "I will use home-owner's tools"
                            ].map((label, i)=>{
                                const isChecked = i === 0 ? state.hasTools : !state.hasTools;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        cursor: "pointer",
                                        marginBottom: 8,
                                        fontSize: 15
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioDot, {
                                            checked: isChecked,
                                            onChange: ()=>update(svc.id, {
                                                    hasTools: i === 0
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                                            lineNumber: 263,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        label
                                    ]
                                }, label, true, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                                    lineNumber: 252,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                            lineNumber: 247,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, svc.id, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 32
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontWeight: 700,
                            fontSize: 16,
                            display: "block",
                            marginBottom: 14
                        },
                        children: "Payment methods:"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 20,
                            flexWrap: "wrap"
                        },
                        children: Object.keys(payments).map((method)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    cursor: "pointer",
                                    fontSize: 15
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                        checked: payments[method],
                                        onChange: ()=>setPayments((prev)=>({
                                                    ...prev,
                                                    [method]: !prev[method]
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    method
                                ]
                            }, method, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleDone,
                disabled: !canDone,
                style: {
                    width: "100%",
                    padding: "18px",
                    background: canDone ? "#22c55e" : "#ddd",
                    color: "#fff",
                    border: "none",
                    borderRadius: 999,
                    fontSize: 17,
                    fontWeight: 700,
                    cursor: canDone ? "pointer" : "not-allowed"
                },
                children: "Done"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SelectServicesModal, "ia0YcpcebiRZTRcTBLknoKODp7g=");
_c2 = SelectServicesModal;
const __TURBOPACK__default__export__ = SelectServicesModal;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Checkbox");
__turbopack_context__.k.register(_c1, "RadioDot");
__turbopack_context__.k.register(_c2, "SelectServicesModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/firebase.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$SelectServicesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ImageCropModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const SERVICE_META = {
    "service-one": {
        shortName: "Lawn Care",
        icon: "/lawn-mower-green.png"
    },
    "service-two": {
        shortName: "Snow Removal",
        icon: "/shovel-blue.png"
    }
};
const GreenCheck = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: "#22c55e",
            flexShrink: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: 11,
            height: 11,
            viewBox: "0 0 20 20",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 10.5L9 14.5L15 7.5",
                stroke: "white",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
            lineNumber: 50,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
        lineNumber: 38,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = GreenCheck;
const ProviderProfileModal = ({ profile, onClose, onAvailabilityChange, onProfileUpdated })=>{
    _s();
    const [isAvailable, setIsAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(profile.isAvailable);
    const [profileState, setProfileState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(profile);
    const [showEditServices, setShowEditServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showImagePicker, setShowImagePicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cropSrc, setCropSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadingPhoto, setUploadingPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingName, setEditingName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nameInput, setNameInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(profile.name);
    const [savingName, setSavingName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nameInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = ("TURBOPACK compile-time value", "object") !== "undefined" && /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProviderProfileModal.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers", profile.uid)).then({
                "ProviderProfileModal.useEffect": (snap)=>{
                    if (snap.exists()) {
                        setIsAvailable(snap.data().isAvailable ?? true);
                    }
                }
            }["ProviderProfileModal.useEffect"]);
        }
    }["ProviderProfileModal.useEffect"], []);
    const handleToggle = async ()=>{
        const next = !isAvailable;
        setIsAvailable(next);
        onAvailabilityChange?.(next);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers", profile.uid), {
                isAvailable: next
            });
        } catch  {
            setIsAvailable(!next);
        }
    };
    const handlePhotoFileSelected = (file)=>{
        setShowImagePicker(false);
        const reader = new FileReader();
        reader.onload = (e)=>setCropSrc(e.target?.result);
        reader.readAsDataURL(file);
    };
    const handlePhotoCropDone = async (dataUrl)=>{
        setCropSrc(null);
        setUploadingPhoto(true);
        try {
            const arr = dataUrl.split(",");
            const mime = arr[0].match(/:(.*?);/)[1];
            const bstr = atob(arr[1]);
            const u8 = new Uint8Array(bstr.length);
            for(let i = 0; i < bstr.length; i++)u8[i] = bstr.charCodeAt(i);
            const blob = new Blob([
                u8
            ], {
                type: mime
            });
            const sRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["storage"], `provider_profiles/${profile.uid}/profile.jpg`);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadBytes"])(sRef, blob, {
                contentType: "image/jpeg"
            });
            const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDownloadURL"])(sRef);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers", profile.uid), {
                imageUrl: url
            });
            const updated = {
                ...profileState,
                photoUrl: url
            };
            setProfileState(updated);
            onProfileUpdated?.(updated);
        } finally{
            setUploadingPhoto(false);
        }
    };
    const handleNameSave = async ()=>{
        const trimmed = nameInput.trim();
        if (!trimmed || trimmed === profileState.name) {
            setEditingName(false);
            return;
        }
        setSavingName(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers", profile.uid), {
                providerName: trimmed
            });
            const updated = {
                ...profileState,
                name: trimmed
            };
            setProfileState(updated);
            onProfileUpdated?.(updated);
        } finally{
            setSavingName(false);
            setEditingName(false);
        }
    };
    const handleServicesDone = async (data)=>{
        setSaving(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers", profile.uid), {
                selectedServices: data.selectedServices,
                description: data.descriptions,
                hasTools: data.hasTools,
                paymentMethods: data.paymentMethods
            });
            const updated = {
                ...profileState,
                selectedServices: data.selectedServices,
                descriptions: data.descriptions,
                hasTools: data.hasTools,
                paymentMethods: data.paymentMethods
            };
            setProfileState(updated);
            onProfileUpdated?.(updated);
        } finally{
            setSaving(false);
            setShowEditServices(false);
        }
    };
    if (showEditServices) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$SelectServicesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClose: ()=>setShowEditServices(false),
            onDone: handleServicesDone,
            initialData: {
                selectedServices: profileState.selectedServices,
                descriptions: profileState.descriptions,
                hasTools: profileState.hasTools,
                paymentMethods: profileState.paymentMethods
            }
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
            lineNumber: 175,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (saving) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "fixed",
                inset: 0,
                zIndex: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.45)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "#fff",
                    borderRadius: 16,
                    padding: "32px 40px",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 40,
                            height: 40,
                            border: "4px solid #e0e0e0",
                            borderTopColor: "#22c55e",
                            borderRadius: "50%",
                            animation: "spin 0.8s linear infinite",
                            margin: "0 auto 16px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `@keyframes spin { to { transform: rotate(360deg); } }`
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0,
                            fontWeight: 600,
                            fontSize: 16
                        },
                        children: "Saving changes…"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
            lineNumber: 190,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (cropSrc) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ImageCropModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: cropSrc,
            onCrop: handlePhotoCropDone,
            onCancel: ()=>setCropSrc(null)
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
            lineNumber: 202,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (uploadingPhoto) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "fixed",
                inset: 0,
                zIndex: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.45)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "#fff",
                    borderRadius: 16,
                    padding: "32px 40px",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 40,
                            height: 40,
                            border: "4px solid #e0e0e0",
                            borderTopColor: "#22c55e",
                            borderRadius: "50%",
                            animation: "spin 0.8s linear infinite",
                            margin: "0 auto 16px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `@keyframes spin { to { transform: rotate(360deg); } }`
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0,
                            fontWeight: 600,
                            fontSize: 16
                        },
                        children: "Uploading photo…"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
            lineNumber: 212,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 500,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            background: "rgba(0,0,0,0.45)"
        },
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: fileInputRef,
                type: "file",
                accept: "image/*",
                style: {
                    display: "none"
                },
                onChange: (e)=>e.target.files?.[0] && handlePhotoFileSelected(e.target.files[0])
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: cameraInputRef,
                type: "file",
                accept: "image/*",
                capture: "user",
                style: {
                    display: "none"
                },
                onChange: (e)=>e.target.files?.[0] && handlePhotoFileSelected(e.target.files[0])
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showImagePicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    zIndex: 700,
                    display: "flex",
                    alignItems: "flex-end",
                    background: "rgba(0,0,0,0.4)"
                },
                onClick: ()=>setShowImagePicker(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "100%",
                        padding: "0 8px 8px"
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "#fff",
                                borderRadius: 14,
                                overflow: "hidden",
                                marginBottom: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "12px 16px",
                                        textAlign: "center",
                                        color: "#888",
                                        fontSize: 14,
                                        borderBottom: "1px solid #e5e5ea"
                                    },
                                    children: "Update Profile Photo"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>cameraInputRef.current?.click(),
                                    style: {
                                        width: "100%",
                                        padding: "18px",
                                        background: "#fff",
                                        border: "none",
                                        borderBottom: "1px solid #e5e5ea",
                                        color: "#007aff",
                                        fontSize: 17,
                                        cursor: "pointer"
                                    },
                                    children: "Camera"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                    lineNumber: 253,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>fileInputRef.current?.click(),
                                    style: {
                                        width: "100%",
                                        padding: "18px",
                                        background: "#fff",
                                        border: "none",
                                        color: "#007aff",
                                        fontSize: 17,
                                        cursor: "pointer"
                                    },
                                    children: "Photo Library"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowImagePicker(false),
                            style: {
                                width: "100%",
                                padding: "18px",
                                background: "#fff",
                                border: "none",
                                borderRadius: 14,
                                color: "#007aff",
                                fontSize: 17,
                                fontWeight: 700,
                                cursor: "pointer"
                            },
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                            lineNumber: 263,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                    lineNumber: 247,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                lineNumber: 245,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    maxWidth: 520,
                    maxHeight: "92dvh",
                    overflowY: "auto",
                    borderRadius: "20px 20px 0 0",
                    background: "#fff"
                },
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "linear-gradient(180deg, #c8c8c8 0%, #e2f0e2 100%)",
                            padding: "20px 20px 28px",
                            borderRadius: "20px 20px 0 0",
                            position: "relative",
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    position: "absolute",
                                    top: 18,
                                    left: 18,
                                    fontSize: 13,
                                    color: "#555"
                                },
                                children: [
                                    "Profile views: ",
                                    profileState.profileViews
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                "aria-label": "Close",
                                style: {
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
                                    fontWeight: "bold"
                                },
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setShowImagePicker(true),
                                style: {
                                    position: "relative",
                                    display: "inline-block",
                                    marginBottom: 14,
                                    marginTop: 8,
                                    cursor: "pointer"
                                },
                                children: [
                                    profileState.photoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: profileState.photoUrl,
                                        alt: profileState.name,
                                        style: {
                                            width: 100,
                                            height: 100,
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            border: "3px solid #22c55e"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 332,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
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
                                            fontWeight: 700
                                        },
                                        children: profileState.name.charAt(0).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowImagePicker(true),
                                        "aria-label": "Change profile photo",
                                        style: {
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
                                            padding: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: 15,
                                            height: 15,
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z",
                                                    stroke: "white",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "13",
                                                    r: "4",
                                                    stroke: "white",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 8,
                                    marginBottom: 10
                                },
                                children: editingName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: nameInputRef,
                                            value: nameInput,
                                            onChange: (e)=>setNameInput(e.target.value),
                                            onKeyDown: (e)=>e.key === "Enter" && handleNameSave(),
                                            autoFocus: true,
                                            style: {
                                                fontSize: 18,
                                                fontWeight: 700,
                                                border: "none",
                                                borderBottom: "2px solid #22c55e",
                                                outline: "none",
                                                background: "transparent",
                                                textAlign: "center",
                                                width: 180,
                                                padding: "2px 4px"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleNameSave,
                                            disabled: savingName,
                                            style: {
                                                background: "#22c55e",
                                                border: "none",
                                                borderRadius: 999,
                                                color: "#fff",
                                                fontSize: 13,
                                                fontWeight: 700,
                                                padding: "4px 12px",
                                                cursor: savingName ? "not-allowed" : "pointer"
                                            },
                                            children: savingName ? "…" : "Done"
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                            lineNumber: 422,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            onClick: ()=>{
                                                setNameInput(profileState.name);
                                                setEditingName(true);
                                            },
                                            style: {
                                                fontSize: 20,
                                                fontWeight: 700,
                                                textDecoration: "underline",
                                                cursor: "pointer"
                                            },
                                            children: profileState.name
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setNameInput(profileState.name);
                                                setEditingName(true);
                                            },
                                            style: {
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                                padding: 0
                                            },
                                            "aria-label": "Edit name",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: 17,
                                                height: 17,
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "#333",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 457,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                            lineNumber: 452,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 16,
                                    fontSize: 14,
                                    color: "#555"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: 13,
                                                height: 13,
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "#555",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "23 4 23 10 17 10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M20.49 15a9 9 0 11-2.12-9.36L23 10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                        lineNumber: 487,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 478,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: 13,
                                                height: 13,
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "#555",
                                                strokeWidth: "2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                    points: "3 11 22 2 13 21 11 13 3 11"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 489,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: profileState.city
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 499,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: 13,
                                                height: 13,
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "#555",
                                                strokeWidth: "2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.13h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.92a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 502,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: profileState.phone
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 512,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 467,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "#f9fafb",
                            borderBottom: "1px solid #e5e7eb",
                            padding: "18px 20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 14,
                                    marginBottom: 6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: 17
                                        },
                                        children: "I'm available"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 534,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleToggle,
                                        style: {
                                            width: 52,
                                            height: 30,
                                            borderRadius: 999,
                                            border: "none",
                                            background: isAvailable ? "#22c55e" : "#bbb",
                                            cursor: "pointer",
                                            position: "relative",
                                            padding: 0,
                                            transition: "background 0.2s"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                position: "absolute",
                                                top: 3,
                                                left: isAvailable ? 24 : 3,
                                                width: 24,
                                                height: 24,
                                                borderRadius: "50%",
                                                background: "#fff",
                                                transition: "left 0.2s",
                                                boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                                                display: "block"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                            lineNumber: 549,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 535,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    textAlign: "center",
                                    color: "#888",
                                    fontSize: 13,
                                    margin: 0
                                },
                                children: "We will NOT show you on the map if you are not available"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 565,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "20px 20px 0"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: 16
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: 17
                                        },
                                        children: "Your Services:"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 580,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowEditServices(true),
                                        style: {
                                            background: "none",
                                            border: "none",
                                            color: "#22c55e",
                                            fontSize: 15,
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 5
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: 15,
                                                height: 15,
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "#22c55e",
                                                strokeWidth: "2.2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                        lineNumber: 596,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                        lineNumber: 597,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 595,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Edit"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 581,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 572,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            profileState.selectedServices.map((id)=>{
                                const meta = SERVICE_META[id];
                                if (!meta) return null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 18
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 10,
                                                marginBottom: 4
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: meta.icon,
                                                    alt: meta.shortName,
                                                    style: {
                                                        width: 28,
                                                        height: 28,
                                                        objectFit: "contain"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 16,
                                                        color: "#555",
                                                        fontWeight: 500
                                                    },
                                                    children: meta.shortName
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                            lineNumber: 608,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: "#666",
                                                fontSize: 14,
                                                margin: "0 0 6px 38px"
                                            },
                                            children: profileState.descriptions[id]
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                            lineNumber: 618,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, id, true, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                    lineNumber: 607,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0));
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    marginBottom: 20,
                                    marginTop: 4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsCircleFill"], {
                                        color: "#22c55e",
                                        size: 10
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 627,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 14,
                                            color: "#555",
                                            fontWeight: 500
                                        },
                                        children: profileState.hasTools ? "I have tools" : "I will use home-owner's tools"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 628,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 626,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingBottom: 40,
                                    marginTop: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: 17,
                                            display: "block",
                                            marginBottom: 12
                                        },
                                        children: "Payment Methods:"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 635,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 14
                                        },
                                        children: profileState.paymentMethods.map((method)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 6,
                                                    fontSize: 15
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GreenCheck, {}, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                        lineNumber: 644,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    method
                                                ]
                                            }, method, true, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 640,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 638,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 634,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                        lineNumber: 571,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProviderProfileModal, "xR3BCp81l56nsrisUiFjVyBZC5g=");
_c1 = ProviderProfileModal;
const __TURBOPACK__default__export__ = ProviderProfileModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "GreenCheck");
__turbopack_context__.k.register(_c1, "ProviderProfileModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/firebase.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$LoginModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$CreateAccountModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$VerifyCodeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$SelectServicesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/SelectServicesModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ProviderProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
async function getCityAndCountry(lat, lng) {
    try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`, {
            headers: {
                "Accept-Language": "en",
                "User-Agent": "YardymanApp/1.0"
            }
        });
        const data = await res.json();
        return {
            city: data.address?.city || data.address?.town || data.address?.village || data.address?.suburb || "Unknown",
            country: data.address?.country || "Unknown"
        };
    } catch  {
        return {
            city: "Unknown",
            country: "Unknown"
        };
    }
}
function encodeGeohash(lat, lng, precision = 9) {
    const BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";
    let hash = "";
    let isLng = true;
    let latMin = -90, latMax = 90;
    let lngMin = -180, lngMax = 180;
    let bits = 0, bitCount = 0;
    while(hash.length < precision){
        if (isLng) {
            const mid = (lngMin + lngMax) / 2;
            bits = bits << 1 | (lng >= mid ? 1 : 0);
            if (lng >= mid) lngMin = mid;
            else lngMax = mid;
        } else {
            const mid = (latMin + latMax) / 2;
            bits = bits << 1 | (lat >= mid ? 1 : 0);
            if (lat >= mid) latMin = mid;
            else latMax = mid;
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
async function uploadPhoto(file, uid) {
    const ext = file.name.split(".").pop() ?? "jpg";
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["storage"], `provider_profiles/${uid}/profile.${ext}`);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadBytes"])(fileRef, file);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDownloadURL"])(fileRef);
}
const AuthFlow = ({ isOpen, onClose, userLocation, onProviderCreated })=>{
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    const [confirmationResult, setConfirmationResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [signupData, setSignupData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prefillPhone, setPrefillPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [prefillCountryCode, setPrefillCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("+1");
    const [loginSlideFrom, setLoginSlideFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthFlow.useEffect": ()=>{
            if (isOpen && step === "none") {
                setStep("login");
            } else if (!isOpen) {
                setStep("none");
                setConfirmationResult(null);
                setPhone("");
                setSignupData(null);
            }
        }
    }["AuthFlow.useEffect"], [
        isOpen
    ]);
    const close = ()=>{
        onClose();
    };
    const handlePhoneAlreadyRegistered = (rawPhone, code)=>{
        setPrefillPhone(rawPhone);
        setPrefillCountryCode(code);
        setLoginSlideFrom("right");
        setStep("login");
    };
    // ── Create account flow ──────────────────────────────────────────────────
    const handleCreateCodeSent = (result, fullPhone, data)=>{
        setConfirmationResult(result);
        setPhone(fullPhone);
        setSignupData(data);
        setStep("verify-create");
    };
    const handleVerifyCreate = async (_credential)=>{
        setStep("select-services");
    };
    const handleServicesDone = async (servicesData)=>{
        if (!signupData) return;
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"].currentUser;
        if (!user) return;
        setSaving(true);
        try {
            let photoUrl = "";
            if (signupData.photoFile) {
                photoUrl = await uploadPhoto(signupData.photoFile, user.uid);
            }
            let city = "Unknown";
            let country = "Unknown";
            const lat = userLocation ? userLocation[1] : 0;
            const lng = userLocation ? userLocation[0] : 0;
            if (userLocation) {
                const location = await getCityAndCountry(lat, lng);
                city = location.city;
                country = location.country;
            }
            const providerDoc = {
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
                serviceLocation: [],
                selectedServices: servicesData.selectedServices,
                description: servicesData.descriptions,
                hasTools: servicesData.hasTools,
                hasDelivery: false,
                paymentMethods: servicesData.paymentMethods,
                isAvailable: true,
                instagramID: "",
                profileViewCount: 0,
                gotCallCount: 0,
                gotMessageCount: 0,
                instaViewCount: 0,
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers", user.uid), providerDoc);
            setProfile({
                uid: user.uid,
                name: signupData.name,
                phone,
                email: signupData.email,
                photoUrl,
                city,
                selectedServices: servicesData.selectedServices,
                descriptions: servicesData.descriptions,
                hasTools: servicesData.hasTools,
                paymentMethods: servicesData.paymentMethods,
                isAvailable: true,
                profileViews: 0
            });
            setStep("profile");
            onProviderCreated?.();
        } finally{
            setSaving(false);
        }
    };
    // ── Login flow ───────────────────────────────────────────────────────────
    const handleLoginCodeSent = (result, fullPhone)=>{
        setConfirmationResult(result);
        setPhone(fullPhone);
        setStep("verify-login");
    };
    const handleVerifyLogin = async (credential)=>{
        const uid = credential.user.uid;
        try {
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("uid", "==", uid));
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
                    descriptions: data.description && typeof data.description === "object" ? data.description : {},
                    hasTools: data.hasTools ?? false,
                    paymentMethods: Array.isArray(data.paymentMethods) ? data.paymentMethods : [],
                    isAvailable: data.isAvailable ?? true,
                    profileViews: data.profileViews ?? 0
                });
                setStep("profile");
            } else {
                // No provider account found — redirect to create
                setStep("create");
            }
        } catch  {
            setStep("profile");
        }
    };
    // ── Render ───────────────────────────────────────────────────────────────
    if (step === "none") return null;
    if (saving) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "fixed",
                inset: 0,
                zIndex: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.45)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "#fff",
                    borderRadius: 16,
                    padding: "32px 40px",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 40,
                            height: 40,
                            border: "4px solid #e0e0e0",
                            borderTopColor: "#22c55e",
                            borderRadius: "50%",
                            animation: "spin 0.8s linear infinite",
                            margin: "0 auto 16px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `@keyframes spin { to { transform: rotate(360deg); } }`
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0,
                            fontWeight: 600,
                            fontSize: 16
                        },
                        children: "Creating your profile…"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx",
                        lineNumber: 291,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx",
                lineNumber: 271,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx",
            lineNumber: 260,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            step === "create" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$CreateAccountModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: close,
                onCodeSent: handleCreateCodeSent,
                onLogin: ()=>{
                    setLoginSlideFrom(undefined);
                    setStep("login");
                },
                onPhoneAlreadyRegistered: handlePhoneAlreadyRegistered
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx",
                lineNumber: 300,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            step === "login" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$LoginModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: close,
                onCodeSent: handleLoginCodeSent,
                onCreateAccount: ()=>setStep("create"),
                initialPhone: prefillPhone,
                initialCountryCode: prefillCountryCode,
                slideFrom: loginSlideFrom
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx",
                lineNumber: 309,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            step === "verify-create" && confirmationResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$VerifyCodeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: close,
                confirmationResult: confirmationResult,
                phone: phone,
                photoPreview: signupData?.photoPreview,
                onVerified: handleVerifyCreate,
                onEditPhone: ()=>setStep("create"),
                isSignup: true,
                onLoginInstead: ()=>setStep("login")
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx",
                lineNumber: 320,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            step === "verify-login" && confirmationResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$VerifyCodeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: close,
                confirmationResult: confirmationResult,
                phone: phone,
                onVerified: handleVerifyLogin,
                onEditPhone: ()=>setStep("login")
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx",
                lineNumber: 333,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            step === "select-services" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$SelectServicesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: close,
                onDone: handleServicesDone
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx",
                lineNumber: 343,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            step === "profile" && profile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ProviderProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                profile: profile,
                onClose: close
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx",
                lineNumber: 347,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(AuthFlow, "wI7hWnsfTF8oCxk1ANJuGtkLqrc=");
_c = AuthFlow;
const __TURBOPACK__default__export__ = AuthFlow;
var _c;
__turbopack_context__.k.register(_c, "AuthFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$ProviderPopupCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$Map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/map/components/Map.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$MapControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$MapMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/map/components/MapMarker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/lib/analytics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/firebase.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$AuthFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ProviderProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function ProviderAvatar({ imageUrl, name }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: 40,
            height: 40,
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid #fff",
            background: "#eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: -20,
            top: -20
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: imageUrl,
            alt: name,
            style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
            }
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = ProviderAvatar;
function UserLocationIndicator() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
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
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
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
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          70% { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c1 = UserLocationIndicator;
function Home() {
    _s();
    const [selectedProvider, setSelectedProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mapStyle = "https://tiles.openfreemap.org/styles/bright";
    const [providers, setProviders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        zoom: 11,
        bearing: 0,
        pitch: 0
    });
    const [userLocation, setUserLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeService, setActiveService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("lawn");
    const [isSmallScreen, setIsSmallScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAuth, setShowAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentProviderData, setCurrentProviderData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showProfile, setShowProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setMounted(true);
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"], {
                "Home.useEffect.unsubscribe": async (user)=>{
                    if (!user) {
                        setCurrentProviderData(null);
                        return;
                    }
                    try {
                        const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("uid", "==", user.uid)));
                        if (!snap.empty) {
                            const data = snap.docs[0].data();
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
                                profileViews: data.profileViewCount ?? data.profileViews ?? 0
                            });
                        }
                    } catch  {
                        setCurrentProviderData(null);
                    }
                }
            }["Home.useEffect.unsubscribe"]);
            return ({
                "Home.useEffect": ()=>unsubscribe()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const updateScreenSize = {
                "Home.useEffect.updateScreenSize": ()=>{
                    setIsSmallScreen(window.innerWidth < 768);
                }
            }["Home.useEffect.updateScreenSize"];
            updateScreenSize();
            window.addEventListener("resize", updateScreenSize);
            return ({
                "Home.useEffect": ()=>{
                    window.removeEventListener("resize", updateScreenSize);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!mounted) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPageView"])({
                page_title: "Home Map",
                page_path: "/",
                page_location: ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable"
            });
            if (("TURBOPACK compile-time value", "object") !== "undefined" && "geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition({
                    "Home.useEffect": (pos)=>{
                        const coords = [
                            pos.coords.longitude,
                            pos.coords.latitude
                        ];
                        setViewport({
                            "Home.useEffect": (v)=>({
                                    ...v,
                                    center: coords,
                                    zoom: 14
                                })
                        }["Home.useEffect"]);
                        setUserLocation(coords);
                    }
                }["Home.useEffect"], {
                    "Home.useEffect": ()=>{}
                }["Home.useEffect"], {
                    enableHighAccuracy: true
                });
            }
            async function fetchProviders() {
                const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers"));
                const fetchedProviders = [];
                querySnapshot.forEach({
                    "Home.useEffect.fetchProviders": (doc)=>{
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
                            isAvailable: data.isAvailable ?? true
                        });
                    }
                }["Home.useEffect.fetchProviders"]);
                setProviders(fetchedProviders);
            }
            fetchProviders();
        }
    }["Home.useEffect"], [
        mounted
    ]);
    // Filtering logic for providers
    const filteredProviders = providers.filter((provider)=>{
        if (provider.isAvailable === false) return false;
        if (activeService === "snow") {
            return provider.selectedServices?.includes("service-two");
        } else {
            return provider.selectedServices?.includes("service-one");
        }
    });
    // Helper to get relevant description for popup
    function getRelevantDescription(provider) {
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
    function handleProviderSelect(provider) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])("Provider Profile Viewed", {
            providerId: provider.id,
            providerName: provider.providerName || "Unknown",
            serviceType: activeService,
            hasTools: Boolean(provider.hasTools),
            rating: provider.rating ?? null,
            ratingsCount: provider.ratingsCount ?? 0,
            paymentMethodsCount: provider.paymentMethods?.length ?? 0,
            hasInstagram: Boolean(provider.instagramID),
            viewSource: "map_annotation"
        });
        setSelectedProvider(provider);
    }
    function handleServiceChange(service) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])("Service Filter Switched", {
            selectedService: service,
            previousService: activeService,
            providerResultsCount: service === "snow" ? providers.filter((provider)=>provider.selectedServices?.includes("service-two")).length : providers.filter((provider)=>provider.selectedServices?.includes("service-one")).length
        });
        setActiveService(service);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onCreateAccount: currentProviderData ? undefined : ()=>setShowAuth(true),
                currentUser: currentProviderData ? {
                    photoUrl: currentProviderData.photoUrl,
                    name: currentProviderData.name
                } : null,
                onEditAccount: ()=>setShowProfile(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleServiceChange("snow"),
                        style: {
                            border: "none",
                            background: "none",
                            fontWeight: 600,
                            fontSize: 15,
                            color: activeService === "snow" ? "#09f" : "#555",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "6px 8px",
                            borderRadius: 9999
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: activeService === "snow" ? "/shovel-blue.png" : "/shovel-black.png",
                                alt: "Shovel icon",
                                style: {
                                    width: 30,
                                    height: 30
                                }
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            !isSmallScreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Snow removals"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 307,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleServiceChange("lawn"),
                        style: {
                            border: "none",
                            background: "none",
                            fontWeight: 600,
                            fontSize: 15,
                            color: activeService === "lawn" ? "rgb(69, 197, 69)" : "#555",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "6px 8px",
                            borderRadius: 9999
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: activeService === "lawn" ? "/lawn-mower-green.png" : "/lawn-mower-black.png",
                                alt: "Lawn mower icon",
                                style: {
                                    width: 34,
                                    height: 34
                                }
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this),
                            !isSmallScreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Lawn care"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 331,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    width: "100vw",
                    height: "100dvh",
                    minHeight: "100svh",
                    zIndex: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$Map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"], {
                    className: "w-full h-full",
                    viewport: viewport,
                    onViewportChange: setViewport,
                    styles: {
                        light: mapStyle,
                        dark: mapStyle
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$MapControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapControls"], {
                            showLocate: true,
                            onLocate: (coords)=>{
                                setViewport((v)=>({
                                        ...v,
                                        center: [
                                            coords.longitude,
                                            coords.latitude
                                        ],
                                        zoom: 14
                                    }));
                                setUserLocation([
                                    coords.longitude,
                                    coords.latitude
                                ]);
                            }
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this),
                        userLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$MapMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapMarker"], {
                            longitude: userLocation[0],
                            latitude: userLocation[1],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$MapMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserLocationIndicator, {}, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                    lineNumber: 357,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 356,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                            lineNumber: 355,
                            columnNumber: 13
                        }, this),
                        filteredProviders.map((provider, idx)=>provider.latitude && provider.longitude && provider.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$MapMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapMarker"], {
                                longitude: provider.longitude,
                                latitude: provider.latitude,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$MapMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>handleProviderSelect(provider),
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderAvatar, {
                                            imageUrl: provider.imageUrl,
                                            name: provider.providerName || "Provider"
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                            lineNumber: 371,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                        lineNumber: 370,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                    lineNumber: 369,
                                    columnNumber: 19
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 364,
                                columnNumber: 17
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                    lineNumber: 344,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            selectedProvider && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$ProviderPopupCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                provider: {
                    ...selectedProvider,
                    description: getRelevantDescription(selectedProvider)
                },
                onClose: ()=>setSelectedProvider(null),
                activeService: activeService
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 380,
                columnNumber: 9
            }, this),
            showProfile && currentProviderData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ProviderProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                profile: currentProviderData,
                onClose: ()=>setShowProfile(false),
                onAvailabilityChange: (isAvailable)=>{
                    setProviders((prev)=>prev.map((p)=>p.id === currentProviderData.uid ? {
                                ...p,
                                isAvailable
                            } : p));
                },
                onProfileUpdated: (updated)=>{
                    setCurrentProviderData(updated);
                    setProviders((prev)=>prev.map((p)=>p.id === updated.uid ? {
                                ...p,
                                selectedServices: updated.selectedServices,
                                description: updated.descriptions,
                                hasTools: updated.hasTools,
                                paymentMethods: updated.paymentMethods,
                                imageUrl: updated.photoUrl
                            } : p));
                }
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 387,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$AuthFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showAuth,
                onClose: ()=>setShowAuth(false),
                userLocation: userLocation,
                onProviderCreated: async ()=>{
                    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers"));
                    const fetched = [];
                    querySnapshot.forEach((doc)=>{
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
                            isAvailable: data.isAvailable ?? true
                        });
                    });
                    setProviders(fetched);
                }
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "RddCPryBwHSbxxfJTwdTYkCBhQg=");
_c2 = Home;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ProviderAvatar");
__turbopack_context__.k.register(_c1, "UserLocationIndicator");
__turbopack_context__.k.register(_c2, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=yardyman-app_yardyman-app_b8dca1d0._.js.map