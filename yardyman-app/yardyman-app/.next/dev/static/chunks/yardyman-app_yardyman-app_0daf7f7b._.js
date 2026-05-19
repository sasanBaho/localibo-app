(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@vercel/analytics/dist/index.mjs [app-client] (ecmascript)");
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["track"])("Provider Details Closed", getAnalyticsPayload());
        onClose();
    }
    function handleCallTap() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["track"])("Provider Call Tapped", getAnalyticsPayload());
    }
    function handleMessageTap() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["track"])("Provider Message Tapped", getAnalyticsPayload());
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
;
;
;
const Navbar = ({ children })=>{
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
                        marginRight: 8
                    }
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                style: {
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    marginRight: 16,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                },
                "aria-label": "Open menu",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
                    size: 28
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                lineNumber: 37,
                columnNumber: 7
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
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
        lineNumber: 20,
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

// firebase.ts
__turbopack_context__.s([
    "app",
    ()=>app,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'firebase/app'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'firebase/firestore'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "app",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["app"],
    "db",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/firebase.ts [app-client] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module 'firebase/firestore'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
"[project]/yardyman-app/yardyman-app/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@vercel/analytics/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$ProviderPopupCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$Map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/map/components/Map.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$MapControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/map/components/MapControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$MapMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/map/components/MapMarker.tsx [app-client] (ecmascript)");
// import { useEffect, useState } from "react";
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/firebase.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/firebase.ts [app-client] (ecmascript)");
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
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
        lineNumber: 38,
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
                lineNumber: 64,
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
                lineNumber: 79,
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
                lineNumber: 94,
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
    const [activeService, setActiveService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("snow");
    const [isSmallScreen, setIsSmallScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setMounted(true);
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
                const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers"));
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
                            paymentMethods: Array.isArray(data.paymentMethods) ? data.paymentMethods : []
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["track"])("Provider Annotation Tapped", {
            providerId: provider.id,
            providerName: provider.providerName || "Unknown",
            serviceType: activeService,
            hasTools: Boolean(provider.hasTools),
            rating: provider.rating ?? null,
            ratingsCount: provider.ratingsCount ?? 0,
            paymentMethodsCount: provider.paymentMethods?.length ?? 0,
            hasInstagram: Boolean(provider.instagramID)
        });
        setSelectedProvider(provider);
    }
    function handleServiceChange(service) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["track"])("Service Filter Switched", {
            selectedService: service,
            previousService: activeService,
            providerResultsCount: service === "snow" ? providers.filter((provider)=>provider.selectedServices?.includes("service-two")).length : providers.filter((provider)=>provider.selectedServices?.includes("service-one")).length
        });
        setActiveService(service);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    width: 24,
                                    height: 24
                                }
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            !isSmallScreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Snow removals"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 255,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleServiceChange("lawn"),
                        style: {
                            border: "none",
                            background: "none",
                            fontWeight: 600,
                            fontSize: 15,
                            color: activeService === "lawn" ? "rgb(5, 181, 5)" : "#555",
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
                                    width: 24,
                                    height: 24
                                }
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            !isSmallScreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Lawn care"
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 279,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 233,
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
                            lineNumber: 298,
                            columnNumber: 11
                        }, this),
                        userLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$MapMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapMarker"], {
                            longitude: userLocation[0],
                            latitude: userLocation[1],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$map$2f$components$2f$MapMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserLocationIndicator, {}, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 304,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                            lineNumber: 303,
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
                                            lineNumber: 319,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 19
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 312,
                                columnNumber: 17
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                    lineNumber: 292,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 283,
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
                lineNumber: 328,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "PKiuVVdlXZfQMRl9JuOhzDD45KU=");
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

//# sourceMappingURL=yardyman-app_yardyman-app_0daf7f7b._.js.map