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
"[project]/yardyman-app/yardyman-app/hooks/useBodyScrollLock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBodyScrollLock",
    ()=>useBodyScrollLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useBodyScrollLock() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBodyScrollLock.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const scrollY = window.scrollY;
            const body = document.body;
            body.style.overflow = "hidden";
            body.style.position = "fixed";
            body.style.top = `-${scrollY}px`;
            body.style.width = "100%";
            return ({
                "useBodyScrollLock.useEffect": ()=>{
                    // Blur the focused input BEFORE restoring the body position.
                    // On iOS, if a textarea is focused when the modal closes, the keyboard
                    // starts its dismiss animation AFTER our cleanup runs — which shifts the
                    // visual viewport and pushes the navbar off-screen. Blurring first makes
                    // iOS start the keyboard dismiss before we touch the body styles.
                    if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur();
                    }
                    body.style.overflow = "";
                    body.style.position = "";
                    body.style.top = "";
                    body.style.width = "";
                    window.scrollTo(0, scrollY);
                }
            })["useBodyScrollLock.useEffect"];
        }
    }["useBodyScrollLock.useEffect"], []);
}
_s(useBodyScrollLock, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/firebase.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$hooks$2f$useBodyScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/hooks/useBodyScrollLock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const REPORT_TYPES = [
    {
        value: "poor_service",
        label: "Poor Service Quality",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: 18,
            height: 18,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "2",
                    y1: "2",
                    x2: "22",
                    y2: "22"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: "unprofessional_behavior",
        label: "Unprofessional Behavior",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: 18,
            height: 18,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 23,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "17",
                    y1: "11",
                    x2: "23",
                    y2: "17"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "23",
                    y1: "11",
                    x2: "17",
                    y2: "17"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 24,
                    columnNumber: 49
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: "no_show",
        label: "Provider No-Show",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: 18,
            height: 18,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "12 6 12 12 16 14"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 33,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "18",
                    y1: "18",
                    x2: "22",
                    y2: "22"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: "overcharging",
        label: "Overcharging",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: 18,
            height: 18,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 7v10M14.5 9.5a2.5 2.5 0 00-5 0 2.5 2.5 0 005 0 2.5 2.5 0 00-5 0"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: "safety_concerns",
        label: "Safety Concerns",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: 18,
            height: 18,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "2",
                    y1: "2",
                    x2: "22",
                    y2: "22"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: "inappropriate_behavior",
        label: "Inappropriate Behavior",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: 18,
            height: 18,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "9",
                    x2: "12",
                    y2: "13"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "17",
                    x2: "12.01",
                    y2: "17"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 64,
                    columnNumber: 48
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: "fraud_scam",
        label: "Fraud / Scam",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: 18,
            height: 18,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "1",
                    y: "4",
                    width: "22",
                    height: "16",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "1",
                    y1: "10",
                    x2: "23",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 73,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "17",
                    x2: "22",
                    y2: "11"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "22",
                    y1: "17",
                    x2: "16",
                    y2: "11"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 74,
                    columnNumber: 49
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: "other",
        label: "Other",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: 18,
            height: 18,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "8",
                    cy: "12",
                    r: "0.5",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "0.5",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 84,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "16",
                    cy: "12",
                    r: "0.5",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 84,
                    columnNumber: 116
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const MAX_DESC = 500;
const ReportModal = ({ providerId, providerName, onClose })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$hooks$2f$useBodyScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBodyScrollLock"])();
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("poor_service");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isValid = description.trim().length > 0 && description.length <= MAX_DESC;
    async function handleSubmit() {
        if (!isValid || submitting) return;
        const userId = __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"].currentUser?.uid;
        if (!userId) {
            setError("You need to be signed in to submit a report.");
            return;
        }
        setSubmitting(true);
        setError(null);
        try {
            const reportId = crypto.randomUUID();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "provider_reports", reportId), {
                id: reportId,
                reporterId: userId,
                providerId,
                providerName: providerName ?? "",
                reportType: selectedType,
                description: description.trim(),
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                status: "pending"
            });
            setDone(true);
            setTimeout(onClose, 2000);
        } catch (e) {
            setError(e?.message ?? "Failed to submit report. Please try again.");
            setSubmitting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 800,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            background: "rgba(0,0,0,0.45)"
        },
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: "#f2f2f7",
                borderRadius: "20px 20px 0 0",
                width: "100%",
                maxWidth: 520,
                maxHeight: "88dvh",
                display: "flex",
                flexDirection: "column"
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "16px 16px 12px",
                        background: "#f2f2f7",
                        borderRadius: "20px 20px 0 0",
                        flexShrink: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                background: "none",
                                border: "none",
                                color: "#007aff",
                                fontSize: 16,
                                cursor: "pointer",
                                padding: 0
                            },
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontWeight: 700,
                                fontSize: 17
                            },
                            children: "Report Provider"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            disabled: !isValid || submitting || done,
                            style: {
                                background: "none",
                                border: "none",
                                color: isValid && !submitting && !done ? "#007aff" : "#aaa",
                                fontSize: 16,
                                fontWeight: 700,
                                cursor: isValid && !submitting && !done ? "pointer" : "not-allowed",
                                padding: 0
                            },
                            children: submitting ? "…" : "Submit"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        overflowY: "auto",
                        flex: 1,
                        paddingBottom: 40
                    },
                    children: done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            padding: "60px 24px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 52,
                                    marginBottom: 16
                                },
                                children: "✅"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                lineNumber: 200,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontWeight: 700,
                                    fontSize: 18,
                                    margin: 0
                                },
                                children: "Report Submitted"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#888",
                                    fontSize: 14,
                                    marginTop: 8,
                                    lineHeight: 1.5
                                },
                                children: "Thank you for your report. Our team will review it and take appropriate action."
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                        lineNumber: 199,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    margin: "12px 16px 0",
                                    background: "#fff",
                                    borderRadius: 12,
                                    overflow: "hidden"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "8px 0 4px 12px",
                                            fontSize: 12,
                                            color: "#888",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: 0.5
                                        },
                                        children: "Provider Information"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 10,
                                            padding: "10px 14px 14px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: 22,
                                                height: 22,
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "#22c55e",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "8",
                                                        r: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M4 20c0-4 3.6-7 8-7s8 3 8 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 52
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 600,
                                                    fontSize: 16
                                                },
                                                children: providerName || "Unknown Provider"
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                lineNumber: 209,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    margin: "20px 16px 0"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 12,
                                            color: "#888",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: 0.5,
                                            marginBottom: 8,
                                            paddingLeft: 4
                                        },
                                        children: "Report Type"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "#fff",
                                            borderRadius: 12,
                                            overflow: "hidden"
                                        },
                                        children: REPORT_TYPES.map((type, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedType(type.value),
                                                style: {
                                                    width: "100%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 12,
                                                    padding: "13px 14px",
                                                    background: "none",
                                                    border: "none",
                                                    borderBottom: idx < REPORT_TYPES.length - 1 ? "1px solid #f0f0f0" : "none",
                                                    cursor: "pointer",
                                                    textAlign: "left"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "#22c55e",
                                                            flexShrink: 0
                                                        },
                                                        children: type.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            flex: 1,
                                                            fontSize: 15,
                                                            color: "#222"
                                                        },
                                                        children: type.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    selectedType === type.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: 20,
                                                        height: 20,
                                                        viewBox: "0 0 24 24",
                                                        fill: "#007aff",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8l-8 8z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, type.value, true, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                lineNumber: 228,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    margin: "20px 16px 0"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 12,
                                            color: "#888",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: 0.5,
                                            marginBottom: 8,
                                            paddingLeft: 4
                                        },
                                        children: "Issue Description"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                        lineNumber: 258,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "#fff",
                                            borderRadius: 12,
                                            padding: "12px 14px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: 13,
                                                    color: "#888",
                                                    margin: "0 0 8px"
                                                },
                                                children: [
                                                    "Please describe the issue ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "#e53e3e"
                                                        },
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 47
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: description,
                                                onChange: (e)=>setDescription(e.target.value),
                                                placeholder: "Describe what happened…",
                                                rows: 4,
                                                style: {
                                                    width: "100%",
                                                    border: "none",
                                                    outline: "none",
                                                    resize: "none",
                                                    fontSize: 15,
                                                    fontFamily: "inherit",
                                                    color: "#222",
                                                    background: "transparent",
                                                    boxSizing: "border-box"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                lineNumber: 265,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    textAlign: "right",
                                                    fontSize: 12,
                                                    color: description.length > MAX_DESC ? "#e53e3e" : "#aaa",
                                                    marginTop: 4
                                                },
                                                children: [
                                                    description.length,
                                                    "/",
                                                    MAX_DESC
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                lineNumber: 282,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                        lineNumber: 261,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                lineNumber: 257,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    margin: "20px 16px 0"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "#fff",
                                        borderRadius: 12,
                                        padding: "14px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8,
                                                marginBottom: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: 18,
                                                    height: 18,
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "#22c55e",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 700,
                                                        fontSize: 15
                                                    },
                                                    children: "Privacy Notice"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                            lineNumber: 291,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 13,
                                                color: "#666",
                                                margin: 0,
                                                lineHeight: 1.5
                                            },
                                            children: "Your report will be sent directly to our admin team and will remain confidential. Reports are not visible to other users or the reported provider."
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                            lineNumber: 297,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                    lineNumber: 290,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                lineNumber: 289,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#e53e3e",
                                    fontSize: 14,
                                    margin: "14px 16px 0",
                                    textAlign: "center"
                                },
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                                lineNumber: 304,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ReportModal, "uvqzNOyKvJRe5j2ZLZR/b0OvPsM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$hooks$2f$useBodyScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBodyScrollLock"]
    ];
});
_c = ReportModal;
const __TURBOPACK__default__export__ = ReportModal;
var _c;
__turbopack_context__.k.register(_c, "ReportModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/firebase.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$hooks$2f$useBodyScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/hooks/useBodyScrollLock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const RatingModal = ({ providerId, providerName, onClose, onRated })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$hooks$2f$useBodyScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBodyScrollLock"])();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [existingRating, setExistingRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoadingExisting, setIsLoadingExisting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RatingModal.useEffect": ()=>{
            loadExistingRating();
        }
    }["RatingModal.useEffect"], [
        providerId
    ]);
    async function loadExistingRating() {
        const uid = __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"].currentUser?.uid;
        if (!uid) {
            setIsLoadingExisting(false);
            return;
        }
        try {
            const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers", providerId, "ratings", uid));
            if (snap.exists()) {
                const r = snap.data().rating;
                setExistingRating(r);
                setSelected(r);
            }
        } finally{
            setIsLoadingExisting(false);
        }
    }
    async function updateProviderAverage() {
        const ratingsSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers", providerId, "ratings"));
        const ratings = ratingsSnap.docs.map((d)=>d.data().rating).filter((r)=>typeof r === "number");
        if (ratings.length === 0) return;
        const average = ratings.reduce((sum, r)=>sum + r, 0) / ratings.length;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers", providerId), {
            rating: average,
            ratingsCount: ratings.length
        });
        onRated(average, ratings.length);
    }
    async function handleSubmit() {
        if (!selected || submitting) return;
        const uid = __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"].currentUser?.uid;
        if (!uid) return;
        setSubmitting(true);
        setError(null);
        try {
            const ratingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers", providerId, "ratings", uid);
            if (existingRating > 0) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(ratingRef, {
                    rating: selected,
                    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                }, {
                    merge: true
                });
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(ratingRef, {
                    rating: selected,
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                });
            }
            await updateProviderAverage();
            setDone(true);
            setTimeout(onClose, 1400);
        } catch (e) {
            setError(e?.message ?? "Failed to submit rating. Please try again.");
        } finally{
            setSubmitting(false);
        }
    }
    const display = hovered || selected;
    const isUpdate = existingRating > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 900,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center"
        },
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: "#fff",
                borderRadius: "20px 20px 0 0",
                width: "100%",
                maxWidth: 520,
                padding: "36px 28px 52px",
                textAlign: "center"
            },
            onClick: (e)=>e.stopPropagation(),
            children: done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 48,
                            marginBottom: 14
                        },
                        children: "⭐"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx",
                        lineNumber: 129,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontWeight: 700,
                            fontSize: 18,
                            margin: 0
                        },
                        children: isUpdate ? "Rating updated!" : "Rating submitted!"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx",
                        lineNumber: 130,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#888",
                            fontSize: 14,
                            marginTop: 8
                        },
                        children: "Thank you for your feedback."
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx",
                        lineNumber: 133,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true) : isLoadingExisting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "#888",
                    padding: "24px 0"
                },
                children: "Loading…"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx",
                lineNumber: 138,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: 20,
                            fontWeight: 700,
                            marginBottom: 6
                        },
                        children: isUpdate ? `Update your rating for ${providerName}` : `Rate ${providerName}`
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx",
                        lineNumber: 141,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    isUpdate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#aaa",
                            fontSize: 13,
                            marginBottom: 4
                        },
                        children: [
                            "Current rating: ",
                            existingRating,
                            " star",
                            existingRating !== 1 ? "s" : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx",
                        lineNumber: 146,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            gap: 10,
                            margin: "28px 0 36px"
                        },
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5
                        ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: 56,
                                height: 56,
                                viewBox: "0 0 24 24",
                                fill: star <= display ? "#f7b500" : "none",
                                stroke: "#f7b500",
                                strokeWidth: "1.4",
                                strokeLinejoin: "round",
                                style: {
                                    cursor: "pointer",
                                    transition: "fill 0.1s"
                                },
                                onMouseEnter: ()=>setHovered(star),
                                onMouseLeave: ()=>setHovered(0),
                                onClick: ()=>setSelected(star),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx",
                                    lineNumber: 168,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, star, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx",
                                lineNumber: 154,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx",
                        lineNumber: 152,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#e53e3e",
                            fontSize: 14,
                            marginBottom: 12
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx",
                        lineNumber: 174,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSubmit,
                        disabled: !selected || submitting,
                        style: {
                            width: "100%",
                            padding: "18px",
                            background: selected && !submitting ? "#555" : "#aaa",
                            color: "#fff",
                            border: "none",
                            borderRadius: 14,
                            fontSize: 17,
                            fontWeight: 600,
                            cursor: selected && !submitting ? "pointer" : "not-allowed",
                            marginBottom: 16
                        },
                        children: submitting ? "Submitting…" : isUpdate ? "Update rating" : "Submit rating"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx",
                        lineNumber: 177,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        style: {
                            background: "none",
                            border: "none",
                            color: "#aaa",
                            fontSize: 16,
                            cursor: "pointer"
                        },
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx",
                        lineNumber: 196,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(RatingModal, "Ddh40/KqUKRwm7dv6icCGp6EwNs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$hooks$2f$useBodyScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBodyScrollLock"]
    ];
});
_c = RatingModal;
const __TURBOPACK__default__export__ = RatingModal;
var _c;
__turbopack_context__.k.register(_c, "RatingModal");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/lib/analytics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$ReportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/ui/ReportModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$RatingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/ui/RatingModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
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
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
            lineNumber: 25,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = GreenCheck;
const StarRating = ({ rating, count })=>{
    const filled = Math.round(rating);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 3
        },
        children: [
            [
                ...Array(5)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: 22,
                    height: 22,
                    viewBox: "0 0 24 24",
                    fill: i < filled ? "#f7b500" : "none",
                    stroke: i < filled ? "#f7b500" : "#d1d5db",
                    strokeWidth: "1.5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, i, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontWeight: 700,
                    fontSize: 15,
                    marginLeft: 4,
                    color: "#222"
                },
                children: rating > 0 ? rating.toFixed(1) : "0.0"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 14,
                    color: "#888"
                },
                children: [
                    "(",
                    count,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = StarRating;
const ProviderPopupCard = ({ provider, onClose, activeService })=>{
    _s();
    const [showReport, setShowReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRating, setShowRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [displayRating, setDisplayRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(provider?.rating ?? 0);
    const [displayCount, setDisplayCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(provider?.ratingsCount ?? 0);
    if (!provider) return null;
    const phone = provider.phone || provider.phoneNumber || provider.contactNumber || "";
    const accentColor = activeService === "snow" ? "#09f" : "#22c55e";
    const serviceIcon = activeService === "snow" ? "/shovel-blue.png" : "/lawn-mower-green.png";
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$ReportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                providerId: provider.id || "",
                providerName: provider.providerName || "",
                onClose: ()=>setShowReport(false)
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showRating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$RatingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                providerId: provider.id || "",
                providerName: provider.providerName || "",
                onClose: ()=>setShowRating(false),
                onRated: (avg, count)=>{
                    setDisplayRating(avg);
                    setDisplayCount(count);
                }
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    bottom: 24,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 100,
                    background: "#fff",
                    borderRadius: 20,
                    boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
                    width: "calc(100vw - 32px)",
                    maxWidth: 400,
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])("Provider_Details_Closed", getAnalyticsPayload());
                            onClose();
                        },
                        style: {
                            position: "absolute",
                            top: 12,
                            right: 12,
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            background: "rgba(0,0,0,0.07)",
                            border: "none",
                            fontSize: 18,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#555",
                            zIndex: 1
                        },
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 14,
                            padding: "30px 16px 16px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: 6,
                                    flexShrink: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 113,
                                                    height: 113,
                                                    borderRadius: "50%",
                                                    background: accentColor,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: provider.imageUrl,
                                                    alt: provider.providerName,
                                                    style: {
                                                        width: 110,
                                                        height: 110,
                                                        borderRadius: "50%",
                                                        objectFit: "cover",
                                                        border: `2px solid white`,
                                                        display: "block"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "absolute",
                                                    bottom: 4,
                                                    right: 2,
                                                    width: 34,
                                                    height: 34,
                                                    borderRadius: "50%",
                                                    background: "#fff",
                                                    border: "1px solid #e5e7eb",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: serviceIcon,
                                                    alt: "service",
                                                    style: {
                                                        width: 30,
                                                        height: 30,
                                                        objectFit: "contain"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: 17,
                                            textAlign: "center"
                                        },
                                        children: provider.providerName
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `tel:${phone}`,
                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])("Provider_Call_Tapped", getAnalyticsPayload()),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 8,
                                            background: "#22c55e",
                                            color: "#fff",
                                            borderRadius: 999,
                                            padding: "13px 0",
                                            fontWeight: 700,
                                            fontSize: 17,
                                            textDecoration: "none"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: 18,
                                                height: 18,
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "#fff",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.13h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.92a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Call"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `sms:${phone}`,
                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])("Provider_Message_Tapped", getAnalyticsPayload()),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 8,
                                            background: "#fff",
                                            color: "#22c55e",
                                            border: "2px solid #22c55e",
                                            borderRadius: 999,
                                            padding: "11px 0",
                                            fontWeight: 700,
                                            fontSize: 17,
                                            textDecoration: "none"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: 18,
                                                height: 18,
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "#22c55e",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                                lineNumber: 225,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Message"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                        lineNumber: 133,
                        columnNumber: 8
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "0 16px 12px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 7,
                                    marginBottom: 6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsCircleFill"], {
                                        color: "#22c55e",
                                        size: 9
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 14,
                                            color: "#444"
                                        },
                                        children: provider.hasTools ? "I have tools" : "I will use home-owner's tools"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            provider.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontStyle: "italic",
                                    fontSize: 14,
                                    color: "#666",
                                    margin: "0 0 8px"
                                },
                                children: provider.description
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : null,
                            provider.paymentMethods && provider.paymentMethods.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 10
                                },
                                children: provider.paymentMethods.map((method)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6,
                                            fontSize: 14,
                                            color: "#444"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GreenCheck, {}, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            method
                                        ]
                                    }, method, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "10px 16px 18px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            borderTop: "1px solid #f3f4f6"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setShowRating(true),
                                style: {
                                    cursor: "pointer"
                                },
                                title: "Tap to rate",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRating, {
                                    rating: displayRating,
                                    count: displayCount
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowReport(true),
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    background: "#fffbeb",
                                    border: "1px solid #fcd34d",
                                    borderRadius: 999,
                                    padding: "5px 10px",
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: "#92400e",
                                    cursor: "pointer"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: 15,
                                        height: 15,
                                        viewBox: "0 0 24 24",
                                        fill: "#f59e0b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                                lineNumber: 296,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "9",
                                                x2: "12",
                                                y2: "13",
                                                stroke: "#fff",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "17",
                                                x2: "12.01",
                                                y2: "17",
                                                stroke: "#fff",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Report"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(ProviderPopupCard, "HKAC4W0qIpjO/t+HMr4xIQYnWbQ=");
_c2 = ProviderPopupCard;
const __TURBOPACK__default__export__ = ProviderPopupCard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "GreenCheck");
__turbopack_context__.k.register(_c1, "StarRating");
__turbopack_context__.k.register(_c2, "ProviderPopupCard");
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
const Navbar = ({ children, onCreateAccount, onSignIn, currentUser, onEditAccount })=>{
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropdownOpen, setDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                setIsMobile(/Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(window.navigator.userAgent));
            }
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (!dropdownOpen) return;
            const handleClick = {
                "Navbar.useEffect.handleClick": (e)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                        setDropdownOpen(false);
                    }
                }
            }["Navbar.useEffect.handleClick"];
            document.addEventListener("mousedown", handleClick);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener("mousedown", handleClick)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        dropdownOpen
    ]);
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
                    lineNumber: 58,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                lineNumber: 57,
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
                    lineNumber: 61,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                lineNumber: 60,
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
                    lineNumber: 70,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : (onCreateAccount || onSignIn) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dropdownRef,
                style: {
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setDropdownOpen((o)=>!o),
                        "aria-label": "Account",
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
                            alt: "Account",
                            style: {
                                width: 30,
                                height: 30,
                                objectFit: "contain"
                            }
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                            lineNumber: 84,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    dropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: "calc(100% + 10px)",
                            left: 0,
                            background: "#fff",
                            borderRadius: 16,
                            boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
                            minWidth: 210,
                            overflow: "hidden",
                            zIndex: 300,
                            border: "1px solid #f0f0f0"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setDropdownOpen(false);
                                    onCreateAccount?.();
                                },
                                style: {
                                    width: "100%",
                                    padding: "14px 16px",
                                    background: "none",
                                    border: "none",
                                    borderBottom: "1px solid #f3f4f6",
                                    textAlign: "left",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            background: "#f0fdf4",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: 18,
                                            height: 18,
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "#22c55e",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "9",
                                                    cy: "7",
                                                    r: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "19",
                                                    y1: "8",
                                                    x2: "19",
                                                    y2: "14"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "22",
                                                    y1: "11",
                                                    x2: "16",
                                                    y2: "11"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                            lineNumber: 126,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                        lineNumber: 116,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 15,
                                                    fontWeight: 700,
                                                    color: "#111",
                                                    lineHeight: 1.3
                                                },
                                                children: "Join as Provider"
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                                lineNumber: 134,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 12,
                                                    color: "#888",
                                                    marginTop: 1
                                                },
                                                children: "Create a new account"
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                                lineNumber: 135,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                lineNumber: 101,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setDropdownOpen(false);
                                    onSignIn?.();
                                },
                                style: {
                                    width: "100%",
                                    padding: "14px 16px",
                                    background: "none",
                                    border: "none",
                                    textAlign: "left",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            background: "#f5f5f5",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: 18,
                                            height: 18,
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "#444",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "10 17 15 12 10 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "15",
                                                    y1: "12",
                                                    x2: "3",
                                                    y2: "12"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                            lineNumber: 164,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                        lineNumber: 154,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 15,
                                                    fontWeight: 700,
                                                    color: "#111",
                                                    lineHeight: 1.3
                                                },
                                                children: "Sign In"
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                                lineNumber: 171,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 12,
                                                    color: "#888",
                                                    marginTop: 1
                                                },
                                                children: "Access your account"
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                                lineNumber: 172,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                        lineNumber: 170,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                                lineNumber: 140,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                        lineNumber: 88,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                lineNumber: 78,
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
                lineNumber: 181,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "tODpHlMXgTK2bBQlj+KE0Ar/cM4=");
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
"[project]/yardyman-app/yardyman-app/components/auth/ModalBase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$hooks$2f$useBodyScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/hooks/useBodyScrollLock.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ModalBase = ({ onClose, children, closeButtonColor = "#09f", slideFrom })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$hooks$2f$useBodyScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBodyScrollLock"])();
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
                lineNumber: 42,
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
                    overscrollBehavior: "contain",
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
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ModalBase.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ModalBase.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ModalBase, "nA5DzsGbEmpxvDD+ZyeRZBeiVpA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$hooks$2f$useBodyScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBodyScrollLock"]
    ];
});
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
        closeButtonColor: "#22c55e",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "recaptcha-login"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginBottom: 28,
                    paddingTop: 4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 56,
                            height: 56,
                            borderRadius: "50%",
                            background: "#f0fdf4",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 14px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: 26,
                            height: 26,
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#22c55e",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "10 17 15 12 10 7"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "15",
                                    y1: "12",
                                    x2: "3",
                                    y2: "12"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: 22,
                            fontWeight: 700,
                            color: "#111827",
                            margin: "0 0 6px"
                        },
                        children: "Welcome Back"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 14,
                            color: "#6b7280",
                            margin: 0
                        },
                        children: "Sign in to manage your services"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    fontWeight: 600,
                    fontSize: 13,
                    color: "#374151",
                    display: "block",
                    marginBottom: 6,
                    letterSpacing: "0.02em"
                },
                children: "Phone Number"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$PhoneInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: phone,
                onChange: setPhone,
                countryCode: countryCode,
                onCountryCodeChange: setCountryCode
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "#9ca3af",
                    fontSize: 13,
                    margin: "6px 0 28px"
                },
                children: "A verification code will be sent via SMS."
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                    borderRadius: 10,
                    padding: "10px 14px",
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: 16,
                        height: 16,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#ef4444",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        style: {
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "12",
                                r: "10"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "12",
                                y1: "8",
                                x2: "12",
                                y2: "12"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "12",
                                y1: "16",
                                x2: "12.01",
                                y2: "16"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#ef4444",
                            fontSize: 13,
                            margin: 0
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSendCode,
                disabled: !isValid || loading,
                style: {
                    width: "100%",
                    padding: "16px",
                    background: isValid && !loading ? "#22c55e" : "#e5e7eb",
                    color: isValid && !loading ? "#fff" : "#9ca3af",
                    border: "none",
                    borderRadius: 14,
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: isValid && !loading ? "pointer" : "not-allowed",
                    marginBottom: 12,
                    transition: "background 0.15s"
                },
                children: loading ? "Sending…" : "Send Verification Code"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    textAlign: "center",
                    color: "#9ca3af",
                    fontSize: 12,
                    marginBottom: 20,
                    lineHeight: 1.6
                },
                children: [
                    "By continuing, you agree to our",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            textDecoration: "underline",
                            cursor: "pointer",
                            color: "#6b7280"
                        },
                        children: "Terms of Use"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    "and",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            textDecoration: "underline",
                            cursor: "pointer",
                            color: "#6b7280"
                        },
                        children: "Privacy Policy"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    borderTop: "1px solid #f3f4f6",
                    paddingTop: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#6b7280",
                            fontSize: 14,
                            margin: "0 0 8px"
                        },
                        children: "New to Yardyman?"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCreateAccount,
                        style: {
                            background: "none",
                            border: "none",
                            color: "#22c55e",
                            fontSize: 15,
                            fontWeight: 700,
                            cursor: "pointer"
                        },
                        children: "Create Provider Account"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/LoginModal.tsx",
                lineNumber: 144,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$hooks$2f$useBodyScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/hooks/useBodyScrollLock.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function clamp(v, lo, hi) {
    return Math.max(lo, Math.min(v, hi));
}
const ImageCropModal = ({ src, onCrop, onCancel })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$hooks$2f$useBodyScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBodyScrollLock"])();
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
                lineNumber: 116,
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
                lineNumber: 118,
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
                        lineNumber: 138,
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
                            lineNumber: 158,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx",
                lineNumber: 123,
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
                        lineNumber: 173,
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
                        lineNumber: 179,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ImageCropModal.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ImageCropModal, "sBrmnEdYGZDTNd0o+oa4dzEKMhw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$hooks$2f$useBodyScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBodyScrollLock"]
    ];
});
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
    const [focusedField, setFocusedField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recaptchaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = ("TURBOPACK compile-time value", "object") !== "undefined" && /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
    const digits = phone.replace(/\D/g, "");
    const fullPhone = countryCode + digits;
    const isValid = name.trim().length > 0 && digits.length >= 10 && email.trim().length > 0;
    const fieldStyle = (fieldName)=>({
            width: "100%",
            padding: "14px 16px",
            background: "#f9fafb",
            border: `1.5px solid ${focusedField === fieldName ? "#22c55e" : "#e5e7eb"}`,
            borderRadius: 12,
            fontSize: 15,
            outline: "none",
            boxSizing: "border-box",
            color: "#111827",
            transition: "border-color 0.15s"
        });
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
                lineNumber: 114,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ModalBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: onClose,
                closeButtonColor: "#22c55e",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "recaptcha-create"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fileInputRef,
                        type: "file",
                        accept: "image/*",
                        capture: false,
                        style: {
                            display: "none"
                        },
                        onChange: (e)=>e.target.files?.[0] && handlePhotoSelected(e.target.files[0])
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 123,
                        columnNumber: 9
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
                        lineNumber: 131,
                        columnNumber: 9
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
                                                color: "#6b7280",
                                                fontSize: 13,
                                                fontWeight: 600,
                                                borderBottom: "1px solid #f3f4f6"
                                            },
                                            children: "Select Photo"
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>cameraInputRef.current?.click(),
                                            style: {
                                                width: "100%",
                                                padding: "18px",
                                                background: "#fff",
                                                border: "none",
                                                borderBottom: "1px solid #f3f4f6",
                                                color: "#22c55e",
                                                fontSize: 17,
                                                cursor: "pointer"
                                            },
                                            children: "Camera"
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                            lineNumber: 168,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>fileInputRef.current?.click(),
                                            style: {
                                                width: "100%",
                                                padding: "18px",
                                                background: "#fff",
                                                border: "none",
                                                color: "#22c55e",
                                                fontSize: 17,
                                                cursor: "pointer"
                                            },
                                            children: "Photo Library"
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowImagePicker(false),
                                    style: {
                                        width: "100%",
                                        padding: "18px",
                                        background: "#fff",
                                        border: "none",
                                        borderRadius: 14,
                                        color: "#374151",
                                        fontSize: 17,
                                        fontWeight: 700,
                                        cursor: "pointer"
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: 24,
                            paddingTop: 4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 56,
                                    height: 56,
                                    borderRadius: "50%",
                                    background: "#f0fdf4",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto 14px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: 28,
                                    height: 28,
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#22c55e",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "9",
                                            cy: "7",
                                            r: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "19",
                                            y1: "8",
                                            x2: "19",
                                            y2: "14"
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "22",
                                            y1: "11",
                                            x2: "16",
                                            y2: "11"
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 22,
                                    fontWeight: 700,
                                    color: "#111827",
                                    margin: "0 0 6px"
                                },
                                children: "Become a Provider"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 14,
                                    color: "#6b7280",
                                    margin: 0
                                },
                                children: "Join Yardyman and start getting clients"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 24
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setShowImagePicker(true),
                            style: {
                                position: "relative",
                                width: 100,
                                height: 100,
                                borderRadius: "50%",
                                background: photoPreview ? "transparent" : "#f0fdf4",
                                border: photoPreview ? "3px solid #22c55e" : "2px dashed #86efac",
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                                padding: 0
                            },
                            children: photoPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: photoPreview,
                                        alt: "Profile preview",
                                        style: {
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                        lineNumber: 269,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: 30,
                                            background: "rgba(0,0,0,0.42)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: 13,
                                            height: 13,
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "white",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                            lineNumber: 285,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                        lineNumber: 274,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: 26,
                                        height: 26,
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "#22c55e",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                                lineNumber: 294,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "13",
                                                r: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                                lineNumber: 295,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                        lineNumber: 293,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#22c55e",
                                            fontSize: 11,
                                            marginTop: 6,
                                            fontWeight: 600
                                        },
                                        children: "Add Photo"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                        lineNumber: 297,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontWeight: 600,
                            fontSize: 13,
                            color: "#374151",
                            display: "block",
                            marginBottom: 6,
                            letterSpacing: "0.02em"
                        },
                        children: "Full Name"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: name,
                        onChange: (e)=>setName(e.target.value),
                        onFocus: ()=>setFocusedField("name"),
                        onBlur: ()=>setFocusedField(null),
                        placeholder: "Enter your full name",
                        style: {
                            ...fieldStyle("name"),
                            marginBottom: 16
                        }
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontWeight: 600,
                            fontSize: 13,
                            color: "#374151",
                            display: "block",
                            marginBottom: 6,
                            letterSpacing: "0.02em"
                        },
                        children: "Phone Number"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$PhoneInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        value: phone,
                        onChange: setPhone,
                        countryCode: countryCode,
                        onCountryCodeChange: setCountryCode
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#9ca3af",
                            fontSize: 13,
                            margin: "6px 0 16px"
                        },
                        children: "A verification code will be sent via SMS."
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontWeight: 600,
                            fontSize: 13,
                            color: "#374151",
                            display: "block",
                            marginBottom: 6,
                            letterSpacing: "0.02em"
                        },
                        children: "Email Address"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        onFocus: ()=>setFocusedField("email"),
                        onBlur: ()=>setFocusedField(null),
                        placeholder: "Enter your email address",
                        style: {
                            ...fieldStyle("email"),
                            marginBottom: 24
                        }
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "#fef2f2",
                            border: "1px solid #fecaca",
                            borderRadius: 10,
                            padding: "10px 14px",
                            marginBottom: 16,
                            display: "flex",
                            alignItems: "center",
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: 16,
                                height: 16,
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "#ef4444",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                style: {
                                    flexShrink: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "8",
                                        x2: "12",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "16",
                                        x2: "12.01",
                                        y2: "16"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#ef4444",
                                    fontSize: 13,
                                    margin: 0
                                },
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                lineNumber: 361,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSendCode,
                        disabled: !isValid || loading,
                        style: {
                            width: "100%",
                            padding: "16px",
                            background: isValid && !loading ? "#22c55e" : "#e5e7eb",
                            color: isValid && !loading ? "#fff" : "#9ca3af",
                            border: "none",
                            borderRadius: 14,
                            fontSize: 16,
                            fontWeight: 700,
                            cursor: isValid && !loading ? "pointer" : "not-allowed",
                            marginBottom: 12,
                            transition: "background 0.15s"
                        },
                        children: loading ? "Sending…" : "Send Verification Code"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 365,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            textAlign: "center",
                            color: "#9ca3af",
                            fontSize: 12,
                            marginBottom: 20,
                            lineHeight: 1.6
                        },
                        children: [
                            "By continuing, you agree to our",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                    color: "#6b7280"
                                },
                                children: "Terms of Use"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            "and",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                    color: "#6b7280"
                                },
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            borderTop: "1px solid #f3f4f6",
                            paddingTop: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#6b7280",
                                    fontSize: 14,
                                    margin: "0 0 8px"
                                },
                                children: "Already have an account?"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onLogin,
                                style: {
                                    background: "none",
                                    border: "none",
                                    color: "#22c55e",
                                    fontSize: 15,
                                    fontWeight: 700,
                                    cursor: "pointer"
                                },
                                children: "Sign In"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/CreateAccountModal.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(CreateAccountModal, "ekf4AGV1edq3TiCCfAbB/jqfs3Q=");
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
    const [digits, setDigits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "",
        "",
        "",
        "",
        "",
        ""
    ]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const inputRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const code = digits.join("");
    const isComplete = code.length === 6;
    const handleDigitChange = (idx, val)=>{
        const cleaned = val.replace(/\D/g, "").slice(-1);
        const newDigits = [
            ...digits
        ];
        newDigits[idx] = cleaned;
        setDigits(newDigits);
        if (cleaned && idx < 5) {
            inputRefs.current[idx + 1]?.focus();
        }
    };
    const handleKeyDown = (idx, e)=>{
        if (e.key === "Backspace" && !digits[idx] && idx > 0) {
            const newDigits = [
                ...digits
            ];
            newDigits[idx - 1] = "";
            setDigits(newDigits);
            inputRefs.current[idx - 1]?.focus();
        }
    };
    const handlePaste = (e)=>{
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
        if (!pasted) return;
        const newDigits = Array(6).fill("").map((_, i)=>pasted[i] ?? "");
        setDigits(newDigits);
        inputRefs.current[Math.min(pasted.length, 5)]?.focus();
    };
    const handleVerify = async ()=>{
        if (!isComplete || loading) return;
        setLoading(true);
        setError("");
        try {
            const credential = await confirmationResult.confirm(code);
            onVerified(credential);
        } catch  {
            setError("Invalid code. Please check and try again.");
            setDigits([
                "",
                "",
                "",
                "",
                "",
                ""
            ]);
            inputRefs.current[0]?.focus();
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ModalBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onClose: onClose,
        closeButtonColor: "#22c55e",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 4
            },
            children: [
                photoPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: photoPreview,
                    alt: "Profile",
                    style: {
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid #22c55e",
                        marginBottom: 16
                    }
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: "#f0fdf4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: 26,
                        height: 26,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#22c55e",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                            lineNumber: 108,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                        lineNumber: 107,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#111827",
                        marginBottom: 6,
                        textAlign: "center"
                    },
                    children: "Check your messages"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "#6b7280",
                        fontSize: 14,
                        textAlign: "center",
                        margin: "0 0 6px"
                    },
                    children: "We sent a 6-digit code to"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 28
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontWeight: 700,
                                fontSize: 15,
                                color: "#111827"
                            },
                            children: phone
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onEditPhone,
                            style: {
                                background: "none",
                                border: "none",
                                color: "#22c55e",
                                fontSize: 13,
                                fontWeight: 600,
                                cursor: "pointer",
                                padding: 0,
                                textDecoration: "underline"
                            },
                            children: "Edit"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 6,
                        marginBottom: 20,
                        width: "100%"
                    },
                    onPaste: handlePaste,
                    children: digits.map((d, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: (el)=>{
                                inputRefs.current[idx] = el;
                            },
                            type: "tel",
                            inputMode: "numeric",
                            maxLength: 1,
                            value: d,
                            onChange: (e)=>handleDigitChange(idx, e.target.value),
                            onKeyDown: (e)=>handleKeyDown(idx, e),
                            style: {
                                flex: 1,
                                minWidth: 0,
                                height: 46,
                                border: `2px solid ${error ? "#fca5a5" : d ? "#22c55e" : "#e5e7eb"}`,
                                borderRadius: 10,
                                fontSize: 18,
                                fontWeight: 700,
                                textAlign: "center",
                                outline: "none",
                                background: error ? "#fff5f5" : d ? "#f0fdf4" : "#f9fafb",
                                color: "#111827",
                                cursor: "text",
                                transition: "border-color 0.15s, background 0.15s"
                            }
                        }, idx, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "#fef2f2",
                        border: "1px solid #fecaca",
                        borderRadius: 10,
                        padding: "10px 14px",
                        marginBottom: 16,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        width: "100%",
                        boxSizing: "border-box"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: 16,
                            height: 16,
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#ef4444",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            style: {
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "12",
                                    y1: "8",
                                    x2: "12",
                                    y2: "12"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "12",
                                    y1: "16",
                                    x2: "12.01",
                                    y2: "16"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#ef4444",
                                fontSize: 13,
                                margin: 0
                            },
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 173,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleVerify,
                    disabled: !isComplete || loading,
                    style: {
                        width: "100%",
                        padding: "16px",
                        background: isComplete && !loading ? "#22c55e" : "#e5e7eb",
                        color: isComplete && !loading ? "#fff" : "#9ca3af",
                        border: "none",
                        borderRadius: 14,
                        fontSize: 16,
                        fontWeight: 700,
                        cursor: isComplete && !loading ? "pointer" : "not-allowed",
                        marginBottom: 16,
                        transition: "background 0.15s"
                    },
                    children: loading ? "Verifying…" : "Verify Code"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                isSignup && onLoginInstead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        borderTop: "1px solid #f3f4f6",
                        paddingTop: 16,
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#6b7280",
                                fontSize: 14,
                                margin: "0 0 8px"
                            },
                            children: "Already have an account?"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onLoginInstead,
                            style: {
                                background: "none",
                                border: "none",
                                color: "#22c55e",
                                fontSize: 15,
                                fontWeight: 700,
                                cursor: "pointer"
                            },
                            children: "Sign In"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                            lineNumber: 217,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/VerifyCodeModal.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(VerifyCodeModal, "bhlNN7M/Pnkva/uLQikhIN0+rYM=");
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
"[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
function formatInterval(interval, intervalCount) {
    if (intervalCount === 1) return `/ ${interval}`;
    return `/ ${intervalCount} ${interval}s`;
}
function formatPrice(amount, currency) {
    return new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: currency.toUpperCase(),
        minimumFractionDigits: 2
    }).format(amount);
}
const PlanSkeleton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: 72,
            borderRadius: 16,
            background: "#f3f4f6",
            animation: "shimmer 1.2s ease-in-out infinite"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: `
      @keyframes shimmer {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    `
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
            lineNumber: 40,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = PlanSkeleton;
const SubscriptionModal = ({ onClose, onPlanSelected, loading })=>{
    _s();
    const [plans, setPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fetchError, setFetchError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fetching, setFetching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedPriceId, setSelectedPriceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubscriptionModal.useEffect": ()=>{
            fetch("/api/stripe/prices").then({
                "SubscriptionModal.useEffect": (r)=>r.json()
            }["SubscriptionModal.useEffect"]).then({
                "SubscriptionModal.useEffect": (data)=>{
                    setPlans(data);
                    setFetching(false);
                }
            }["SubscriptionModal.useEffect"]).catch({
                "SubscriptionModal.useEffect": ()=>{
                    setFetchError(true);
                    setFetching(false);
                }
            }["SubscriptionModal.useEffect"]);
        }
    }["SubscriptionModal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ModalBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onClose: onClose,
        closeButtonColor: "#22c55e",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                paddingTop: 8
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        margin: "0 0 4px",
                        fontSize: 22,
                        fontWeight: 800,
                        color: "#111"
                    },
                    children: "Choose a Plan"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        margin: "0 0 20px",
                        fontSize: 14,
                        color: "#666"
                    },
                    children: "Start with a free 1-month trial. Cancel anytime."
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 12
                    },
                    children: fetching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlanSkeleton, {}, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlanSkeleton, {}, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlanSkeleton, {}, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true) : fetchError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#ef4444",
                            fontSize: 14,
                            textAlign: "center"
                        },
                        children: "Failed to load plans. Please close and try again."
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : plans.map((plan, index)=>{
                        const isSelected = selectedPriceId === plan.priceId;
                        const isBestValue = index === plans.length - 1 && plans.length > 1;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedPriceId(plan.priceId),
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "16px 18px",
                                borderRadius: 16,
                                border: isSelected ? "2.5px solid #22c55e" : "2px solid #e5e7eb",
                                background: isSelected ? "#f0fdf4" : "#fff",
                                cursor: "pointer",
                                textAlign: "left",
                                transition: "border-color 0.15s, background 0.15s",
                                position: "relative"
                            },
                            children: [
                                isBestValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        position: "absolute",
                                        top: -11,
                                        right: 14,
                                        background: "#22c55e",
                                        color: "#fff",
                                        fontSize: 11,
                                        fontWeight: 700,
                                        borderRadius: 999,
                                        padding: "2px 10px",
                                        letterSpacing: 0.3
                                    },
                                    children: "Best Value"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                    lineNumber: 112,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 14
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 22,
                                                height: 22,
                                                borderRadius: "50%",
                                                border: isSelected ? "2px solid #22c55e" : "2px solid #d1d5db",
                                                background: isSelected ? "#22c55e" : "#fff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                                transition: "background 0.15s, border-color 0.15s"
                                            },
                                            children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                                lineNumber: 141,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                            lineNumber: 128,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 700,
                                                    fontSize: 16,
                                                    color: "#111"
                                                },
                                                children: plan.productName
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                                lineNumber: 147,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                            lineNumber: 146,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "right"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontWeight: 800,
                                                fontSize: 18,
                                                color: "#111"
                                            },
                                            children: formatPrice(plan.amount, plan.currency)
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                            lineNumber: 151,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 13,
                                                color: "#888",
                                                marginLeft: 2
                                            },
                                            children: formatInterval(plan.interval, plan.intervalCount)
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                            lineNumber: 154,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                    lineNumber: 150,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, plan.priceId, true, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                            lineNumber: 94,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: 20,
                        padding: "12px 14px",
                        background: "#f0fdf4",
                        borderRadius: 12,
                        display: "flex",
                        gap: 10,
                        alignItems: "flex-start"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: 18,
                            height: 18,
                            viewBox: "0 0 24 24",
                            fill: "none",
                            style: {
                                flexShrink: 0,
                                marginTop: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "#22c55e",
                                    strokeWidth: "2"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 8v4m0 4h.01",
                                    stroke: "#22c55e",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                margin: 0,
                                fontSize: 13,
                                color: "#166534",
                                lineHeight: 1.5
                            },
                            children: "Your first month is completely free. Your card won't be charged until after the trial ends."
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>selectedPriceId && onPlanSelected(selectedPriceId),
                    disabled: !selectedPriceId || loading || fetching,
                    style: {
                        marginTop: 20,
                        width: "100%",
                        padding: "15px 0",
                        borderRadius: 999,
                        background: selectedPriceId && !loading && !fetching ? "#22c55e" : "#d1d5db",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 17,
                        border: "none",
                        cursor: selectedPriceId && !loading && !fetching ? "pointer" : "not-allowed",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        transition: "background 0.2s"
                    },
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 20,
                                    height: 20,
                                    border: "3px solid rgba(255,255,255,0.4)",
                                    borderTopColor: "#fff",
                                    borderRadius: "50%",
                                    animation: "spin 0.8s linear infinite",
                                    display: "inline-block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                children: `@keyframes spin { to { transform: rotate(360deg); } }`
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Preparing checkout…"
                        ]
                    }, void 0, true) : "Start Free Trial"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        marginTop: 12,
                        textAlign: "center",
                        fontSize: 12,
                        color: "#aaa"
                    },
                    children: "By continuing, you agree to our terms. Cancel anytime from your profile."
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SubscriptionModal, "NMvSHEKCFV+SFZiNbg8KdPSOiss=");
_c1 = SubscriptionModal;
const __TURBOPACK__default__export__ = SubscriptionModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "PlanSkeleton");
__turbopack_context__.k.register(_c1, "SubscriptionModal");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$hooks$2f$useBodyScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/hooks/useBodyScrollLock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/firebase.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
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
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = GreenCheck;
const ProviderProfileModal = ({ profile, onClose, onAvailabilityChange, onProfileUpdated })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$hooks$2f$useBodyScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBodyScrollLock"])();
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
    const [stripeSubscriptionId, setStripeSubscriptionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [subscriptionInfo, setSubscriptionInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cancellingSubscription, setCancellingSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reactivatingSubscription, setReactivatingSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nameInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = ("TURBOPACK compile-time value", "object") !== "undefined" && /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProviderProfileModal.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers", profile.uid)).then({
                "ProviderProfileModal.useEffect": (snap)=>{
                    if (snap.exists()) {
                        const data = snap.data();
                        setIsAvailable(data.isAvailable ?? true);
                        const subId = data.stripeSubscriptionId ?? null;
                        setStripeSubscriptionId(subId);
                        if (subId) {
                            fetch(`/api/stripe/subscription?subscriptionId=${subId}`).then({
                                "ProviderProfileModal.useEffect": (r)=>r.json()
                            }["ProviderProfileModal.useEffect"]).then({
                                "ProviderProfileModal.useEffect": (info)=>{
                                    if (!info.error) setSubscriptionInfo(info);
                                }
                            }["ProviderProfileModal.useEffect"]).catch({
                                "ProviderProfileModal.useEffect": ()=>{}
                            }["ProviderProfileModal.useEffect"]);
                        }
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
            lineNumber: 198,
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
                        lineNumber: 215,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `@keyframes spin { to { transform: rotate(360deg); } }`
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                        lineNumber: 216,
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
                        lineNumber: 217,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
            lineNumber: 213,
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
            lineNumber: 225,
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
                        lineNumber: 237,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `@keyframes spin { to { transform: rotate(360deg); } }`
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                        lineNumber: 238,
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
                        lineNumber: 239,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
            lineNumber: 235,
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
                lineNumber: 261,
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
                lineNumber: 263,
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
                                    lineNumber: 272,
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
                                    lineNumber: 276,
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
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                            lineNumber: 271,
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
                            lineNumber: 286,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                    lineNumber: 270,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                lineNumber: 268,
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
                                lineNumber: 315,
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
                                lineNumber: 319,
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
                                    profileState.photoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 103,
                                            height: 103,
                                            borderRadius: "50%",
                                            background: "#22c55e",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: profileState.photoUrl,
                                            alt: profileState.name,
                                            style: {
                                                width: 100,
                                                height: 100,
                                                borderRadius: "50%",
                                                objectFit: "cover",
                                                border: "2px solid #fff"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                            lineNumber: 366,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 355,
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
                                        lineNumber: 379,
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
                                                    lineNumber: 417,
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
                                                    lineNumber: 422,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                            lineNumber: 416,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 397,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 344,
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
                                            lineNumber: 439,
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
                                            lineNumber: 457,
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
                                            lineNumber: 476,
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
                                                        lineNumber: 493,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                        lineNumber: 494,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 492,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                            lineNumber: 487,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 428,
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
                                                        lineNumber: 521,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M20.49 15a9 9 0 11-2.12-9.36L23 10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                        lineNumber: 522,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 513,
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
                                                    lineNumber: 532,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 524,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: profileState.city
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 534,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 512,
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
                                                    lineNumber: 545,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 537,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: profileState.phone
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 547,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 536,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 502,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                        lineNumber: 306,
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
                                        lineNumber: 569,
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
                                            lineNumber: 584,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 570,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 560,
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
                                lineNumber: 600,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                        lineNumber: 553,
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
                                    marginBottom: 0
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
                                        lineNumber: 615,
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
                                                        lineNumber: 631,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 630,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Edit"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 616,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 607,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            profileState.selectedServices.map((id)=>{
                                const meta = SERVICE_META[id];
                                if (!meta) return null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 10
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
                                                        width: 32,
                                                        height: 32,
                                                        objectFit: "contain"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                    lineNumber: 644,
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
                                                    lineNumber: 649,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                            lineNumber: 643,
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
                                            lineNumber: 653,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, id, true, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                    lineNumber: 642,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0));
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    marginBottom: 15,
                                    marginTop: 4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsCircleFill"], {
                                        color: "#22c55e",
                                        size: 10
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 662,
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
                                        lineNumber: 663,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 661,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
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
                                        lineNumber: 670,
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
                                                        lineNumber: 679,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    method
                                                ]
                                            }, method, true, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 675,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 673,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 669,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            stripeSubscriptionId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 18
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: 17,
                                            display: "block",
                                            marginBottom: 10
                                        },
                                        children: "My Subscription:"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 689,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    subscriptionInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 14,
                                                    color: "#555"
                                                },
                                                children: [
                                                    "Subscription date:",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontWeight: 600
                                                        },
                                                        children: new Date(subscriptionInfo.created * 1000).toLocaleDateString("en-US", {
                                                            month: "long",
                                                            day: "numeric",
                                                            year: "numeric"
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                lineNumber: 694,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !subscriptionInfo.cancelAtPeriodEnd ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 14,
                                                            color: "#555"
                                                        },
                                                        children: [
                                                            "Next payment:",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontWeight: 600
                                                                },
                                                                children: new Date((subscriptionInfo.trialEnd ?? subscriptionInfo.currentPeriodEnd) * 1000).toLocaleDateString("en-US", {
                                                                    month: "long",
                                                                    day: "numeric",
                                                                    year: "numeric"
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                                lineNumber: 704,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                        lineNumber: 702,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: async ()=>{
                                                            if (!stripeSubscriptionId) return;
                                                            setCancellingSubscription(true);
                                                            try {
                                                                await fetch("/api/stripe/cancel-subscription", {
                                                                    method: "POST",
                                                                    headers: {
                                                                        "Content-Type": "application/json"
                                                                    },
                                                                    body: JSON.stringify({
                                                                        subscriptionId: stripeSubscriptionId
                                                                    })
                                                                });
                                                                setSubscriptionInfo((prev)=>prev ? {
                                                                        ...prev,
                                                                        cancelAtPeriodEnd: true
                                                                    } : prev);
                                                            } finally{
                                                                setCancellingSubscription(false);
                                                            }
                                                        },
                                                        disabled: cancellingSubscription,
                                                        style: {
                                                            background: "none",
                                                            border: "none",
                                                            color: "#555",
                                                            fontSize: 14,
                                                            textDecoration: "underline",
                                                            cursor: cancellingSubscription ? "not-allowed" : "pointer",
                                                            padding: 0,
                                                            textAlign: "left",
                                                            marginTop: 4
                                                        },
                                                        children: cancellingSubscription ? "Cancelling…" : "Cancel my subscription"
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                        lineNumber: 710,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 14,
                                                            color: "#888"
                                                        },
                                                        children: [
                                                            "Subscription ends on:",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontWeight: 600,
                                                                    color: "#555"
                                                                },
                                                                children: new Date(subscriptionInfo.currentPeriodEnd * 1000).toLocaleDateString("en-US", {
                                                                    month: "long",
                                                                    day: "numeric",
                                                                    year: "numeric"
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                                lineNumber: 745,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                        lineNumber: 743,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: async ()=>{
                                                            if (!stripeSubscriptionId) return;
                                                            setReactivatingSubscription(true);
                                                            try {
                                                                await fetch("/api/stripe/reactivate-subscription", {
                                                                    method: "POST",
                                                                    headers: {
                                                                        "Content-Type": "application/json"
                                                                    },
                                                                    body: JSON.stringify({
                                                                        subscriptionId: stripeSubscriptionId
                                                                    })
                                                                });
                                                                setSubscriptionInfo((prev)=>prev ? {
                                                                        ...prev,
                                                                        cancelAtPeriodEnd: false
                                                                    } : prev);
                                                            } finally{
                                                                setReactivatingSubscription(false);
                                                            }
                                                        },
                                                        disabled: reactivatingSubscription,
                                                        style: {
                                                            background: "none",
                                                            border: "none",
                                                            color: reactivatingSubscription ? "#aaa" : "#22c55e",
                                                            fontSize: 14,
                                                            textDecoration: "underline",
                                                            cursor: reactivatingSubscription ? "not-allowed" : "pointer",
                                                            padding: 0,
                                                            textAlign: "left",
                                                            marginTop: 4
                                                        },
                                                        children: reactivatingSubscription ? "Subscribing…" : "Subscribe"
                                                    }, void 0, false, {
                                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                                        lineNumber: 749,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 693,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 14,
                                            color: "#aaa"
                                        },
                                        children: "Loading…"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                        lineNumber: 783,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 688,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingTop: 28,
                                    paddingBottom: 40
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: async ()=>{
                                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
                                        onClose();
                                    },
                                    style: {
                                        background: "none",
                                        border: "none",
                                        color: "#22c55e",
                                        fontSize: 14,
                                        textDecoration: "underline",
                                        cursor: "pointer",
                                        padding: 0
                                    },
                                    children: "Sign out"
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                    lineNumber: 790,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                                lineNumber: 789,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                        lineNumber: 606,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/auth/ProviderProfileModal.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProviderProfileModal, "osg2/ML5TRDBv/tdOa9ml2YtRmg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$hooks$2f$useBodyScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBodyScrollLock"]
    ];
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$SubscriptionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/auth/SubscriptionModal.tsx [app-client] (ecmascript)");
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
const AuthFlow = ({ isOpen, onClose, userLocation, defaultStep = "login" })=>{
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    const [confirmationResult, setConfirmationResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [signupData, setSignupData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingServicesData, setPendingServicesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [subscriptionLoading, setSubscriptionLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prefillPhone, setPrefillPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [prefillCountryCode, setPrefillCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("+1");
    const [loginSlideFrom, setLoginSlideFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthFlow.useEffect": ()=>{
            if (isOpen && step === "none") {
                setStep(defaultStep);
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
    const handleServicesDone = (servicesData)=>{
        setPendingServicesData(servicesData);
        setStep("subscription");
    };
    const handleSubscriptionPlanSelected = async (priceId)=>{
        if (!signupData || !pendingServicesData) return;
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"].currentUser;
        if (!user) return;
        setSubscriptionLoading(true);
        try {
            let photoUrl = "";
            if (signupData.photoFile) {
                photoUrl = await uploadPhoto(signupData.photoFile, user.uid);
            }
            const lat = userLocation ? userLocation[1] : 0;
            const lng = userLocation ? userLocation[0] : 0;
            let city = "Unknown";
            let country = "Unknown";
            if (userLocation) {
                const location = await getCityAndCountry(lat, lng);
                city = location.city;
                country = location.country;
            }
            const pending = {
                uid: user.uid,
                providerName: signupData.name,
                email: signupData.email,
                phoneNumber: phone,
                imageUrl: photoUrl,
                latitude: lat,
                longitude: lng,
                geohash: encodeGeohash(lat, lng),
                city,
                country,
                selectedServices: pendingServicesData.selectedServices,
                description: pendingServicesData.descriptions,
                hasTools: pendingServicesData.hasTools,
                paymentMethods: pendingServicesData.paymentMethods
            };
            localStorage.setItem("pendingProviderRegistration", JSON.stringify(pending));
            const res = await fetch("/api/stripe/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    priceId,
                    uid: user.uid,
                    email: signupData.email,
                    phone
                })
            });
            const { url } = await res.json();
            window.location.href = url;
        } catch  {
            setSubscriptionLoading(false);
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
                lineNumber: 248,
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
                lineNumber: 257,
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
                lineNumber: 268,
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
                lineNumber: 281,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            step === "select-services" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$SelectServicesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: close,
                onDone: handleServicesDone
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx",
                lineNumber: 291,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            step === "subscription" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$SubscriptionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: close,
                onPlanSelected: handleSubscriptionPlanSelected,
                loading: subscriptionLoading
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx",
                lineNumber: 295,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            step === "profile" && profile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$ProviderProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                profile: profile,
                onClose: close
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/auth/AuthFlow.tsx",
                lineNumber: 303,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(AuthFlow, "bVywr/XJ7AlyHLEBBhiOlMSc15E=");
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
function ProviderAvatar({ imageUrl, name, rating, ratingsCount }) {
    const hasRating = (ratingsCount ?? 0) > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            left: -23,
            top: -23,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 46,
                            height: 46,
                            borderRadius: "50%",
                            overflow: "hidden",
                            border: "1px solid #fff",
                            background: "#eee",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.22)"
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
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    !hasRating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
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
                            letterSpacing: 0.2
                        },
                        children: "New"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            hasRating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    background: "#fff",
                    borderRadius: 999,
                    padding: "2px 6px",
                    marginTop: -5,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                    zIndex: 999
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: 14,
                        height: 14,
                        viewBox: "0 0 24 24",
                        fill: "#f59e0b",
                        stroke: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 12,
                            fontWeight: 700,
                            color: "#222"
                        },
                        children: (rating ?? 0).toFixed(1)
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
        lineNumber: 47,
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
                lineNumber: 116,
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
                lineNumber: 131,
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
                lineNumber: 146,
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
    const [authDefaultStep, setAuthDefaultStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("login");
    const [currentProviderData, setCurrentProviderData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showProfile, setShowProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [completingStripeRegistration, setCompletingStripeRegistration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setMounted(true);
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
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
            ({
                "Home.useEffect": async ()=>{
                    try {
                        const res = await fetch(`/api/stripe/verify-session?session_id=${sessionId}`);
                        const data = await res.json();
                        if (!data.ok) return;
                        const providerData = JSON.parse(pending);
                        const providerDoc = {
                            ...providerData,
                            id: providerData.uid,
                            isAvailable: true,
                            instagramID: "",
                            profileViewCount: 0,
                            gotCallCount: 0,
                            gotMessageCount: 0,
                            instaViewCount: 0,
                            hasDelivery: false,
                            serviceLocation: [],
                            stripeCustomerId: data.customerId,
                            stripeSubscriptionId: data.subscriptionId,
                            subscriptionStatus: data.subscriptionStatus,
                            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                            updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                        };
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers", providerData.uid), providerDoc);
                        localStorage.removeItem("pendingProviderRegistration");
                        window.history.replaceState({}, "", "/");
                        setCurrentProviderData({
                            uid: providerData.uid,
                            name: providerData.providerName,
                            phone: providerData.phoneNumber,
                            email: providerData.email,
                            photoUrl: providerData.imageUrl,
                            city: providerData.city,
                            selectedServices: providerData.selectedServices,
                            descriptions: providerData.description,
                            hasTools: providerData.hasTools,
                            paymentMethods: providerData.paymentMethods,
                            isAvailable: true,
                            profileViews: 0
                        });
                        setShowProfile(true);
                        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers"));
                        const fetched = [];
                        querySnapshot.forEach({
                            "Home.useEffect": (docSnap)=>{
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
                                    isAvailable: d.isAvailable ?? true
                                });
                            }
                        }["Home.useEffect"]);
                        setProviders(fetched);
                    } finally{
                        setCompletingStripeRegistration(false);
                    }
                }
            })["Home.useEffect"]();
        }
    }["Home.useEffect"], [
        mounted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"], {
                "Home.useEffect.unsubscribe": async (user)=>{
                    if (!user) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInAnonymously"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]).catch({
                            "Home.useEffect.unsubscribe": ()=>{}
                        }["Home.useEffect.unsubscribe"]);
                        setCurrentProviderData(null);
                        return;
                    }
                    if (user.isAnonymous) {
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
                onCreateAccount: currentProviderData ? undefined : ()=>{
                    setAuthDefaultStep("create");
                    setShowAuth(true);
                },
                onSignIn: currentProviderData ? undefined : ()=>{
                    setAuthDefaultStep("login");
                    setShowAuth(true);
                },
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
                                lineNumber: 450,
                                columnNumber: 11
                            }, this),
                            !isSmallScreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Snow removals"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 455,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                        lineNumber: 434,
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
                                lineNumber: 474,
                                columnNumber: 11
                            }, this),
                            !isSmallScreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Lawn care"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 479,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                        lineNumber: 458,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 428,
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
                            lineNumber: 498,
                            columnNumber: 11
                        }, this),
                        userLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$MapMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapMarker"], {
                            longitude: userLocation[0],
                            latitude: userLocation[1],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$MapMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserLocationIndicator, {}, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                    lineNumber: 505,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 504,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                            lineNumber: 503,
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
                                            name: provider.providerName || "Provider",
                                            rating: provider.rating,
                                            ratingsCount: provider.ratingsCount
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                            lineNumber: 519,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                        lineNumber: 518,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                    lineNumber: 517,
                                    columnNumber: 19
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 512,
                                columnNumber: 17
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                    lineNumber: 492,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 483,
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
                lineNumber: 533,
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
                lineNumber: 540,
                columnNumber: 9
            }, this),
            completingStripeRegistration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                            lineNumber: 585,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                            children: `@keyframes spin { to { transform: rotate(360deg); } }`
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                            lineNumber: 594,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                margin: 0,
                                fontWeight: 600,
                                fontSize: 16
                            },
                            children: "Setting up your profile…"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                            lineNumber: 595,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                    lineNumber: 579,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 570,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$auth$2f$AuthFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showAuth,
                onClose: ()=>setShowAuth(false),
                userLocation: userLocation,
                defaultStep: authDefaultStep,
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
                lineNumber: 600,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "wzsZRlhbaYwxdChGlzQrso8j5ew=");
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

//# sourceMappingURL=yardyman-app_yardyman-app_2f8b0341._.js.map