(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
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
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
        lineNumber: 11,
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
                onClick: onClose,
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
                lineNumber: 70,
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
                        lineNumber: 72,
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
                                lineNumber: 74,
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
                                                lineNumber: 78,
                                                columnNumber: 114
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: formatPhoneNumber(phone)
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 71,
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
                lineNumber: 85,
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
                            lineNumber: 91,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Has tools"
                    ]
                }, void 0, true, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : "❌ No tools"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 88,
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
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                method
                            ]
                        }, method, true, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                            lineNumber: 100,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : "💳 No payment methods"
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 96,
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
                        lineNumber: 110,
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
                        lineNumber: 113,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 108,
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
                            lineNumber: 120,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `sms:${phone}`,
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
                            lineNumber: 126,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : null
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/ProviderPopupCard.tsx",
        lineNumber: 56,
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
const Navbar = ()=>{
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
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                lineNumber: 30,
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
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginLeft: "auto"
                }
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/Navbar.tsx",
        lineNumber: 16,
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
"[project]/yardyman-app/yardyman-app/components/ui/map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Map",
    ()=>Map,
    "MapClusterLayer",
    ()=>MapClusterLayer,
    "MapControls",
    ()=>MapControls,
    "MapMarker",
    ()=>MapMarker,
    "MapPopup",
    ()=>MapPopup,
    "MapRoute",
    ()=>MapRoute,
    "MarkerContent",
    ()=>MarkerContent,
    "MarkerLabel",
    ()=>MarkerLabel,
    "MarkerPopup",
    ()=>MarkerPopup,
    "MarkerTooltip",
    ()=>MarkerTooltip,
    "useMap",
    ()=>useMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/maplibre-gl/dist/maplibre-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Locate$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/lucide-react/dist/esm/icons/locate.js [app-client] (ecmascript) <export default as Locate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/lucide-react/dist/esm/icons/maximize.js [app-client] (ecmascript) <export default as Maximize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const defaultStyles = {
    dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
    light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
};
// Check document class for theme (works with next-themes, etc.)
function getDocumentTheme() {
    if (typeof document === "undefined") return null;
    if (document.documentElement.classList.contains("dark")) return "dark";
    if (document.documentElement.classList.contains("light")) return "light";
    return null;
}
// Get system preference
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
            if (themeProp) return; // Skip detection if theme is provided via prop
            // Watch for document class changes (e.g., next-themes toggling dark class)
            const observer = new MutationObserver({
                "useResolvedTheme.useEffect": ()=>{
                    const docTheme = getDocumentTheme();
                    if (docTheme) {
                        setDetectedTheme(docTheme);
                    }
                }
            }["useResolvedTheme.useEffect"]);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            });
            // Also watch for system preference changes
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handleSystemChange = {
                "useResolvedTheme.useEffect.handleSystemChange": (e)=>{
                    // Only use system preference if no document class is set
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
const MapContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useMap() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MapContext);
    if (!context) {
        throw new Error("useMap must be used within a Map component");
    }
    return context;
}
_s1(useMap, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function DefaultLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "size-1.5 rounded-full bg-muted-foreground/60 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "size-1.5 rounded-full bg-muted-foreground/60 animate-pulse [animation-delay:150ms]"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "size-1.5 rounded-full bg-muted-foreground/60 animate-pulse [animation-delay:300ms]"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_c = DefaultLoader;
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
const Map = /*#__PURE__*/ _s2((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = _s2(function Map({ children, className, theme: themeProp, styles, projection, viewport, onViewportChange, ...props }, ref) {
    _s2();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mapInstance, setMapInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStyleLoaded, setIsStyleLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentStyleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const styleTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const internalUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const resolvedTheme = useResolvedTheme(themeProp);
    const isControlled = viewport !== undefined && onViewportChange !== undefined;
    const onViewportChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onViewportChange);
    onViewportChangeRef.current = onViewportChange;
    const mapStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Map.Map.useMemo[mapStyles]": ()=>({
                dark: styles?.dark ?? defaultStyles.dark,
                light: styles?.light ?? defaultStyles.light
            })
    }["Map.Map.useMemo[mapStyles]"], [
        styles
    ]);
    // Expose the map instance to the parent component
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
    // Initialize the map
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
                    // Delay to ensure style is fully processed before allowing layer operations
                    // This is a workaround to avoid race conditions with the style loading
                    // else we have to force update every layer on setStyle change
                    styleTimeoutRef.current = setTimeout({
                        "Map.Map.useEffect.styleDataHandler": ()=>{
                            setIsStyleLoaded(true);
                            if (projection) {
                                map.setProjection(projection);
                            }
                        }
                    }["Map.Map.useEffect.styleDataHandler"], 100);
                }
            }["Map.Map.useEffect.styleDataHandler"];
            const loadHandler = {
                "Map.Map.useEffect.loadHandler": ()=>setIsLoaded(true)
            }["Map.Map.useEffect.loadHandler"];
            // Viewport change handler - skip if triggered by internal update
            const handleMove = {
                "Map.Map.useEffect.handleMove": ()=>{
                    if (internalUpdateRef.current) return;
                    onViewportChangeRef.current?.(getViewport(map));
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
            const current = getViewport(mapInstance);
            const next = {
                center: viewport.center ?? current.center,
                zoom: viewport.zoom ?? current.zoom,
                bearing: viewport.bearing ?? current.bearing,
                pitch: viewport.pitch ?? current.pitch
            };
            if (next.center[0] === current.center[0] && next.center[1] === current.center[1] && next.zoom === current.zoom && next.bearing === current.bearing && next.pitch === current.pitch) {
                return;
            }
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-full h-full", className),
            children: [
                !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultLoader, {}, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                    lineNumber: 327,
                    columnNumber: 23
                }, this),
                mapInstance && children
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
            lineNumber: 323,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
        lineNumber: 322,
        columnNumber: 5
    }, this);
}, "LodwGNRJgQk/PYgajWPFTVUleJs=", false, function() {
    return [
        useResolvedTheme
    ];
})), "LodwGNRJgQk/PYgajWPFTVUleJs=", false, function() {
    return [
        useResolvedTheme
    ];
});
_c2 = Map;
const MarkerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useMarkerContext() {
    _s3();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MarkerContext);
    if (!context) {
        throw new Error("Marker components must be used within MapMarker");
    }
    return context;
}
_s3(useMarkerContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function MapMarker({ longitude, latitude, children, onClick, onMouseEnter, onMouseLeave, onDragStart, onDrag, onDragEnd, draggable = false, ...markerOptions }) {
    _s4();
    const { map } = useMap();
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
            const markerInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker({
                ...markerOptions,
                element: document.createElement("div"),
                draggable
            }).setLngLat([
                longitude,
                latitude
            ]);
            const handleClick = {
                "MapMarker.useMemo[marker].handleClick": (e)=>callbacksRef.current.onClick?.(e)
            }["MapMarker.useMemo[marker].handleClick"];
            const handleMouseEnter = {
                "MapMarker.useMemo[marker].handleMouseEnter": (e)=>callbacksRef.current.onMouseEnter?.(e)
            }["MapMarker.useMemo[marker].handleMouseEnter"];
            const handleMouseLeave = {
                "MapMarker.useMemo[marker].handleMouseLeave": (e)=>callbacksRef.current.onMouseLeave?.(e)
            }["MapMarker.useMemo[marker].handleMouseLeave"];
            markerInstance.getElement()?.addEventListener("click", handleClick);
            markerInstance.getElement()?.addEventListener("mouseenter", handleMouseEnter);
            markerInstance.getElement()?.addEventListener("mouseleave", handleMouseLeave);
            const handleDragStart = {
                "MapMarker.useMemo[marker].handleDragStart": ()=>{
                    const lngLat = markerInstance.getLngLat();
                    callbacksRef.current.onDragStart?.({
                        lng: lngLat.lng,
                        lat: lngLat.lat
                    });
                }
            }["MapMarker.useMemo[marker].handleDragStart"];
            const handleDrag = {
                "MapMarker.useMemo[marker].handleDrag": ()=>{
                    const lngLat = markerInstance.getLngLat();
                    callbacksRef.current.onDrag?.({
                        lng: lngLat.lng,
                        lat: lngLat.lat
                    });
                }
            }["MapMarker.useMemo[marker].handleDrag"];
            const handleDragEnd = {
                "MapMarker.useMemo[marker].handleDragEnd": ()=>{
                    const lngLat = markerInstance.getLngLat();
                    callbacksRef.current.onDragEnd?.({
                        lng: lngLat.lng,
                        lat: lngLat.lat
                    });
                }
            }["MapMarker.useMemo[marker].handleDragEnd"];
            markerInstance.on("dragstart", handleDragStart);
            markerInstance.on("drag", handleDrag);
            markerInstance.on("dragend", handleDragEnd);
            return markerInstance;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkerContext.Provider, {
        value: {
            marker,
            map
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
        lineNumber: 488,
        columnNumber: 5
    }, this);
}
_s4(MapMarker, "pmE51ktL0KmgmHJ4zCZOvuyeiM0=", false, function() {
    return [
        useMap
    ];
});
_c3 = MapMarker;
function MarkerContent({ children, className }) {
    _s5();
    const { marker } = useMarkerContext();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative cursor-pointer", className),
        children: children || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultMarkerIcon, {}, void 0, false, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
            lineNumber: 506,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
        lineNumber: 505,
        columnNumber: 5
    }, this), marker.getElement());
}
_s5(MarkerContent, "osbt57V5mtn2/24aM74LaDe9FN8=", false, function() {
    return [
        useMarkerContext
    ];
});
_c4 = MarkerContent;
function DefaultMarkerIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-4 w-4 rounded-full border-2 border-white"
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
        lineNumber: 514,
        columnNumber: 5
    }, this);
}
_c5 = DefaultMarkerIcon;
function MarkerPopup({ children, className, closeButton = false, ...popupOptions }) {
    _s6();
    const { marker, map } = useMarkerContext();
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarkerPopup.useMemo[container]": ()=>document.createElement("div")
    }["MarkerPopup.useMemo[container]"], []);
    const prevPopupOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(popupOptions);
    const popup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarkerPopup.useMemo[popup]": ()=>{
            const popupInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                offset: 16,
                ...popupOptions,
                closeButton: false
            }).setMaxWidth("none").setDOMContent(container);
            return popupInstance;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MarkerPopup.useMemo[popup]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarkerPopup.useEffect": ()=>{
            if (!map) return;
            popup.setDOMContent(container);
            marker.setPopup(popup);
            return ({
                "MarkerPopup.useEffect": ()=>{
                    marker.setPopup(null);
                }
            })["MarkerPopup.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MarkerPopup.useEffect"], [
        map
    ]);
    if (popup.isOpen()) {
        const prev = prevPopupOptions.current;
        if (prev.offset !== popupOptions.offset) {
            popup.setOffset(popupOptions.offset ?? 16);
        }
        if (prev.maxWidth !== popupOptions.maxWidth && popupOptions.maxWidth) {
            popup.setMaxWidth(popupOptions.maxWidth ?? "none");
        }
        prevPopupOptions.current = popupOptions;
    }
    const handleClose = ()=>popup.remove();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative rounded-md border bg-popover p-3 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95", className),
        children: [
            closeButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleClose,
                className: "absolute top-1 right-1 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                "aria-label": "Close popup",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                        lineNumber: 591,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                        lineNumber: 592,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                lineNumber: 585,
                columnNumber: 9
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
        lineNumber: 578,
        columnNumber: 5
    }, this), container);
}
_s6(MarkerPopup, "+/w8+tbkVxHY4zxX76MrmZzbIkU=", false, function() {
    return [
        useMarkerContext
    ];
});
_c6 = MarkerPopup;
function MarkerTooltip({ children, className, ...popupOptions }) {
    _s7();
    const { marker, map } = useMarkerContext();
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarkerTooltip.useMemo[container]": ()=>document.createElement("div")
    }["MarkerTooltip.useMemo[container]"], []);
    const prevTooltipOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(popupOptions);
    const tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarkerTooltip.useMemo[tooltip]": ()=>{
            const tooltipInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                offset: 16,
                ...popupOptions,
                closeOnClick: true,
                closeButton: false
            }).setMaxWidth("none");
            return tooltipInstance;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MarkerTooltip.useMemo[tooltip]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarkerTooltip.useEffect": ()=>{
            if (!map) return;
            tooltip.setDOMContent(container);
            const handleMouseEnter = {
                "MarkerTooltip.useEffect.handleMouseEnter": ()=>{
                    tooltip.setLngLat(marker.getLngLat()).addTo(map);
                }
            }["MarkerTooltip.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "MarkerTooltip.useEffect.handleMouseLeave": ()=>tooltip.remove()
            }["MarkerTooltip.useEffect.handleMouseLeave"];
            marker.getElement()?.addEventListener("mouseenter", handleMouseEnter);
            marker.getElement()?.addEventListener("mouseleave", handleMouseLeave);
            return ({
                "MarkerTooltip.useEffect": ()=>{
                    marker.getElement()?.removeEventListener("mouseenter", handleMouseEnter);
                    marker.getElement()?.removeEventListener("mouseleave", handleMouseLeave);
                    tooltip.remove();
                }
            })["MarkerTooltip.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MarkerTooltip.useEffect"], [
        map
    ]);
    if (tooltip.isOpen()) {
        const prev = prevTooltipOptions.current;
        if (prev.offset !== popupOptions.offset) {
            tooltip.setOffset(popupOptions.offset ?? 16);
        }
        if (prev.maxWidth !== popupOptions.maxWidth && popupOptions.maxWidth) {
            tooltip.setMaxWidth(popupOptions.maxWidth ?? "none");
        }
        prevTooltipOptions.current = popupOptions;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-md bg-foreground px-2 py-1 text-xs text-background shadow-md animate-in fade-in-0 zoom-in-95", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
        lineNumber: 664,
        columnNumber: 5
    }, this), container);
}
_s7(MarkerTooltip, "LOPTDnmTIcxZ42VqphTSUWla+9s=", false, function() {
    return [
        useMarkerContext
    ];
});
_c7 = MarkerTooltip;
function MarkerLabel({ children, className, position = "top" }) {
    const positionClasses = {
        top: "bottom-full mb-1",
        bottom: "top-full mt-1"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-1/2 -translate-x-1/2 whitespace-nowrap", "text-[10px] font-medium text-foreground", positionClasses[position], className),
        children: children
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
        lineNumber: 696,
        columnNumber: 5
    }, this);
}
_c8 = MarkerLabel;
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
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
        lineNumber: 735,
        columnNumber: 5
    }, this);
}
_c9 = ControlGroup;
function ControlButton({ onClick, label, children, disabled = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        "aria-label": label,
        type: "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center size-8 hover:bg-accent dark:hover:bg-accent/40 transition-colors", disabled && "opacity-50 pointer-events-none cursor-not-allowed"),
        disabled: disabled,
        children: children
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
        lineNumber: 753,
        columnNumber: 5
    }, this);
}
_c10 = ControlButton;
function MapControls({ position = "bottom-right", showZoom = true, showCompass = false, showLocate = false, showFullscreen = false, className, onLocate }) {
    _s8();
    const { map } = useMap();
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
            if ("geolocation" in navigator) {
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
                        let message = "Unable to get your location.";
                        if (error.code === 1) {
                            message = "Location permission denied. Please enable location access in your browser settings.";
                        } else if (error.code === 2) {
                            message = "Location unavailable. Please check your device settings.";
                        } else if (error.code === 3) {
                            message = "Location request timed out. Please try again.";
                        }
                        if ("TURBOPACK compile-time truthy", 1) {
                            alert(message);
                        }
                        console.error("Error getting location:", error);
                        setWaitingForLocation(false);
                    }
                }["MapControls.useCallback[handleLocate]"]);
            }
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
                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                            lineNumber: 849,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                        lineNumber: 848,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlButton, {
                        onClick: handleZoomOut,
                        label: "Zoom out",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                            lineNumber: 852,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                        lineNumber: 851,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                lineNumber: 847,
                columnNumber: 9
            }, this),
            showCompass && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlGroup, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompassButton, {
                    onClick: handleResetBearing
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                    lineNumber: 858,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                lineNumber: 857,
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
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                        lineNumber: 869,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Locate$3e$__["Locate"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                        lineNumber: 871,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                    lineNumber: 863,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                lineNumber: 862,
                columnNumber: 9
            }, this),
            showFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlGroup, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlButton, {
                    onClick: handleFullscreen,
                    label: "Toggle fullscreen",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                        lineNumber: 879,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                    lineNumber: 878,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                lineNumber: 877,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
        lineNumber: 839,
        columnNumber: 5
    }, this);
}
_s8(MapControls, "WH0yD53q2g/3tybMwlFpCUbmPys=", false, function() {
    return [
        useMap
    ];
});
_c11 = MapControls;
function CompassButton({ onClick }) {
    _s9();
    const { map } = useMap();
    const compassRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompassButton.useEffect": ()=>{
            if (!map || !compassRef.current) return;
            const compass = compassRef.current;
            const updateRotation = {
                "CompassButton.useEffect.updateRotation": ()=>{
                    const bearing = map.getBearing();
                    const pitch = map.getPitch();
                    compass.style.transform = `rotateX(${pitch}deg) rotateZ(${-bearing}deg)`;
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
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                    lineNumber: 920,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2L8 12H12V2Z",
                    className: "fill-red-300"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                    lineNumber: 921,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 22L16 12H12V22Z",
                    className: "fill-muted-foreground/60"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                    lineNumber: 922,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 22L8 12H12V22Z",
                    className: "fill-muted-foreground/30"
                }, void 0, false, {
                    fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                    lineNumber: 923,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
            lineNumber: 914,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
        lineNumber: 913,
        columnNumber: 5
    }, this);
}
_s9(CompassButton, "X0hXbpmQEYvPBZ19bs3OP0TLmqM=", false, function() {
    return [
        useMap
    ];
});
_c12 = CompassButton;
function MapPopup({ longitude, latitude, onClose, children, className, closeButton = false, ...popupOptions }) {
    _s10();
    const { map } = useMap();
    const popupOptionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(popupOptions);
    const onCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    onCloseRef.current = onClose;
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapPopup.useMemo[container]": ()=>document.createElement("div")
    }["MapPopup.useMemo[container]"], []);
    const popup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapPopup.useMemo[popup]": ()=>{
            const popupInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                offset: 16,
                ...popupOptions,
                closeButton: false
            }).setMaxWidth("none").setLngLat([
                longitude,
                latitude
            ]);
            return popupInstance;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MapPopup.useMemo[popup]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapPopup.useEffect": ()=>{
            if (!map) return;
            const onCloseProp = {
                "MapPopup.useEffect.onCloseProp": ()=>onCloseRef.current?.()
            }["MapPopup.useEffect.onCloseProp"];
            popup.on("close", onCloseProp);
            popup.setDOMContent(container);
            popup.addTo(map);
            return ({
                "MapPopup.useEffect": ()=>{
                    popup.off("close", onCloseProp);
                    if (popup.isOpen()) {
                        popup.remove();
                    }
                }
            })["MapPopup.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MapPopup.useEffect"], [
        map
    ]);
    if (popup.isOpen()) {
        const prev = popupOptionsRef.current;
        if (popup.getLngLat().lng !== longitude || popup.getLngLat().lat !== latitude) {
            popup.setLngLat([
                longitude,
                latitude
            ]);
        }
        if (prev.offset !== popupOptions.offset) {
            popup.setOffset(popupOptions.offset ?? 16);
        }
        if (prev.maxWidth !== popupOptions.maxWidth && popupOptions.maxWidth) {
            popup.setMaxWidth(popupOptions.maxWidth ?? "none");
        }
        popupOptionsRef.current = popupOptions;
    }
    const handleClose = ()=>{
        popup.remove();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative rounded-md border bg-popover p-3 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95", className),
        children: [
            closeButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleClose,
                className: "absolute top-1 right-1 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                "aria-label": "Close popup",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                        lineNumber: 1028,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                        lineNumber: 1029,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
                lineNumber: 1022,
                columnNumber: 9
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/yardyman-app/yardyman-app/components/ui/map.tsx",
        lineNumber: 1015,
        columnNumber: 5
    }, this), container);
}
_s10(MapPopup, "Wjp4CaQlJagRwxx+0M3p9g43Ju4=", false, function() {
    return [
        useMap
    ];
});
_c13 = MapPopup;
function MapRoute({ id: propId, coordinates, color = "#4285F4", width = 3, opacity = 0.8, dashArray, onClick, onMouseEnter, onMouseLeave, interactive = true }) {
    _s11();
    const { map, isLoaded } = useMap();
    const autoId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const id = propId ?? autoId;
    const sourceId = `route-source-${id}`;
    const layerId = `route-layer-${id}`;
    // Add source and layer on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapRoute.useEffect": ()=>{
            if (!isLoaded || !map) return;
            map.addSource(sourceId, {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates: []
                    }
                }
            });
            map.addLayer({
                id: layerId,
                type: "line",
                source: sourceId,
                layout: {
                    "line-join": "round",
                    "line-cap": "round"
                },
                paint: {
                    "line-color": color,
                    "line-width": width,
                    "line-opacity": opacity,
                    ...dashArray && {
                        "line-dasharray": dashArray
                    }
                }
            });
            return ({
                "MapRoute.useEffect": ()=>{
                    try {
                        if (map.getLayer(layerId)) map.removeLayer(layerId);
                        if (map.getSource(sourceId)) map.removeSource(sourceId);
                    } catch  {
                    // ignore
                    }
                }
            })["MapRoute.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MapRoute.useEffect"], [
        isLoaded,
        map
    ]);
    // When coordinates change, update the source data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapRoute.useEffect": ()=>{
            if (!isLoaded || !map || coordinates.length < 2) return;
            const source = map.getSource(sourceId);
            if (source) {
                source.setData({
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates
                    }
                });
            }
        }
    }["MapRoute.useEffect"], [
        isLoaded,
        map,
        coordinates,
        sourceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapRoute.useEffect": ()=>{
            if (!isLoaded || !map || !map.getLayer(layerId)) return;
            map.setPaintProperty(layerId, "line-color", color);
            map.setPaintProperty(layerId, "line-width", width);
            map.setPaintProperty(layerId, "line-opacity", opacity);
            if (dashArray) {
                map.setPaintProperty(layerId, "line-dasharray", dashArray);
            }
        }
    }["MapRoute.useEffect"], [
        isLoaded,
        map,
        layerId,
        color,
        width,
        opacity,
        dashArray
    ]);
    // Handle click and hover events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapRoute.useEffect": ()=>{
            if (!isLoaded || !map || !interactive) return;
            const handleClick = {
                "MapRoute.useEffect.handleClick": ()=>{
                    onClick?.();
                }
            }["MapRoute.useEffect.handleClick"];
            const handleMouseEnter = {
                "MapRoute.useEffect.handleMouseEnter": ()=>{
                    map.getCanvas().style.cursor = "pointer";
                    onMouseEnter?.();
                }
            }["MapRoute.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "MapRoute.useEffect.handleMouseLeave": ()=>{
                    map.getCanvas().style.cursor = "";
                    onMouseLeave?.();
                }
            }["MapRoute.useEffect.handleMouseLeave"];
            map.on("click", layerId, handleClick);
            map.on("mouseenter", layerId, handleMouseEnter);
            map.on("mouseleave", layerId, handleMouseLeave);
            return ({
                "MapRoute.useEffect": ()=>{
                    map.off("click", layerId, handleClick);
                    map.off("mouseenter", layerId, handleMouseEnter);
                    map.off("mouseleave", layerId, handleMouseLeave);
                }
            })["MapRoute.useEffect"];
        }
    }["MapRoute.useEffect"], [
        isLoaded,
        map,
        layerId,
        onClick,
        onMouseEnter,
        onMouseLeave,
        interactive
    ]);
    return null;
}
_s11(MapRoute, "fZWEgp/cj9GW0P5QywplEE6iRnQ=", false, function() {
    return [
        useMap,
        __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c14 = MapRoute;
function MapClusterLayer({ data, clusterMaxZoom = 14, clusterRadius = 50, clusterColors = [
    "#22c55e",
    "#eab308",
    "#ef4444"
], clusterThresholds = [
    100,
    750
], pointColor = "#3b82f6", onPointClick, onClusterClick }) {
    _s12();
    const { map, isLoaded } = useMap();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const sourceId = `cluster-source-${id}`;
    const clusterLayerId = `clusters-${id}`;
    const clusterCountLayerId = `cluster-count-${id}`;
    const unclusteredLayerId = `unclustered-point-${id}`;
    const stylePropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        clusterColors,
        clusterThresholds,
        pointColor
    });
    // Add source and layers on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapClusterLayer.useEffect": ()=>{
            if (!isLoaded || !map) return;
            // Add clustered GeoJSON source
            map.addSource(sourceId, {
                type: "geojson",
                data,
                cluster: true,
                clusterMaxZoom,
                clusterRadius
            });
            // Add cluster circles layer
            map.addLayer({
                id: clusterLayerId,
                type: "circle",
                source: sourceId,
                filter: [
                    "has",
                    "point_count"
                ],
                paint: {
                    "circle-color": [
                        "step",
                        [
                            "get",
                            "point_count"
                        ],
                        clusterColors[0],
                        clusterThresholds[0],
                        clusterColors[1],
                        clusterThresholds[1],
                        clusterColors[2]
                    ],
                    "circle-radius": [
                        "step",
                        [
                            "get",
                            "point_count"
                        ],
                        20,
                        clusterThresholds[0],
                        30,
                        clusterThresholds[1],
                        40
                    ],
                    "circle-stroke-width": 1,
                    "circle-stroke-color": "#fff",
                    "circle-opacity": 0.85
                }
            });
            // Add cluster count text layer
            map.addLayer({
                id: clusterCountLayerId,
                type: "symbol",
                source: sourceId,
                filter: [
                    "has",
                    "point_count"
                ],
                layout: {
                    "text-field": "{point_count_abbreviated}",
                    "text-font": [
                        "Open Sans"
                    ],
                    "text-size": 12
                },
                paint: {
                    "text-color": "#fff"
                }
            });
            // Add unclustered point layer
            map.addLayer({
                id: unclusteredLayerId,
                type: "circle",
                source: sourceId,
                filter: [
                    "!",
                    [
                        "has",
                        "point_count"
                    ]
                ],
                paint: {
                    "circle-color": pointColor,
                    "circle-radius": 5,
                    "circle-stroke-width": 2,
                    "circle-stroke-color": "#fff"
                }
            });
            return ({
                "MapClusterLayer.useEffect": ()=>{
                    try {
                        if (map.getLayer(clusterCountLayerId)) map.removeLayer(clusterCountLayerId);
                        if (map.getLayer(unclusteredLayerId)) map.removeLayer(unclusteredLayerId);
                        if (map.getLayer(clusterLayerId)) map.removeLayer(clusterLayerId);
                        if (map.getSource(sourceId)) map.removeSource(sourceId);
                    } catch  {
                    // ignore
                    }
                }
            })["MapClusterLayer.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MapClusterLayer.useEffect"], [
        isLoaded,
        map,
        sourceId
    ]);
    // Update source data when data prop changes (only for non-URL data)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapClusterLayer.useEffect": ()=>{
            if (!isLoaded || !map || typeof data === "string") return;
            const source = map.getSource(sourceId);
            if (source) {
                source.setData(data);
            }
        }
    }["MapClusterLayer.useEffect"], [
        isLoaded,
        map,
        data,
        sourceId
    ]);
    // Update layer styles when props change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapClusterLayer.useEffect": ()=>{
            if (!isLoaded || !map) return;
            const prev = stylePropsRef.current;
            const colorsChanged = prev.clusterColors !== clusterColors || prev.clusterThresholds !== clusterThresholds;
            // Update cluster layer colors and sizes
            if (map.getLayer(clusterLayerId) && colorsChanged) {
                map.setPaintProperty(clusterLayerId, "circle-color", [
                    "step",
                    [
                        "get",
                        "point_count"
                    ],
                    clusterColors[0],
                    clusterThresholds[0],
                    clusterColors[1],
                    clusterThresholds[1],
                    clusterColors[2]
                ]);
                map.setPaintProperty(clusterLayerId, "circle-radius", [
                    "step",
                    [
                        "get",
                        "point_count"
                    ],
                    20,
                    clusterThresholds[0],
                    30,
                    clusterThresholds[1],
                    40
                ]);
            }
            // Update unclustered point layer color
            if (map.getLayer(unclusteredLayerId) && prev.pointColor !== pointColor) {
                map.setPaintProperty(unclusteredLayerId, "circle-color", pointColor);
            }
            stylePropsRef.current = {
                clusterColors,
                clusterThresholds,
                pointColor
            };
        }
    }["MapClusterLayer.useEffect"], [
        isLoaded,
        map,
        clusterLayerId,
        unclusteredLayerId,
        clusterColors,
        clusterThresholds,
        pointColor
    ]);
    // Handle click events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapClusterLayer.useEffect": ()=>{
            if (!isLoaded || !map) return;
            // Cluster click handler - zoom into cluster
            const handleClusterClick = {
                "MapClusterLayer.useEffect.handleClusterClick": async (e)=>{
                    const features = map.queryRenderedFeatures(e.point, {
                        layers: [
                            clusterLayerId
                        ]
                    });
                    if (!features.length) return;
                    const feature = features[0];
                    const clusterId = feature.properties?.cluster_id;
                    const pointCount = feature.properties?.point_count;
                    const coordinates = feature.geometry.coordinates;
                    if (onClusterClick) {
                        onClusterClick(clusterId, coordinates, pointCount);
                    } else {
                        // Default behavior: zoom to cluster expansion zoom
                        const source = map.getSource(sourceId);
                        const zoom = await source.getClusterExpansionZoom(clusterId);
                        map.easeTo({
                            center: coordinates,
                            zoom
                        });
                    }
                }
            }["MapClusterLayer.useEffect.handleClusterClick"];
            // Unclustered point click handler
            const handlePointClick = {
                "MapClusterLayer.useEffect.handlePointClick": (e)=>{
                    if (!onPointClick || !e.features?.length) return;
                    const feature = e.features[0];
                    const coordinates = feature.geometry.coordinates.slice();
                    // Handle world copies
                    while(Math.abs(e.lngLat.lng - coordinates[0]) > 180){
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }
                    onPointClick(feature, coordinates);
                }
            }["MapClusterLayer.useEffect.handlePointClick"];
            // Cursor style handlers
            const handleMouseEnterCluster = {
                "MapClusterLayer.useEffect.handleMouseEnterCluster": ()=>{
                    map.getCanvas().style.cursor = "pointer";
                }
            }["MapClusterLayer.useEffect.handleMouseEnterCluster"];
            const handleMouseLeaveCluster = {
                "MapClusterLayer.useEffect.handleMouseLeaveCluster": ()=>{
                    map.getCanvas().style.cursor = "";
                }
            }["MapClusterLayer.useEffect.handleMouseLeaveCluster"];
            const handleMouseEnterPoint = {
                "MapClusterLayer.useEffect.handleMouseEnterPoint": ()=>{
                    if (onPointClick) {
                        map.getCanvas().style.cursor = "pointer";
                    }
                }
            }["MapClusterLayer.useEffect.handleMouseEnterPoint"];
            const handleMouseLeavePoint = {
                "MapClusterLayer.useEffect.handleMouseLeavePoint": ()=>{
                    map.getCanvas().style.cursor = "";
                }
            }["MapClusterLayer.useEffect.handleMouseLeavePoint"];
            map.on("click", clusterLayerId, handleClusterClick);
            map.on("click", unclusteredLayerId, handlePointClick);
            map.on("mouseenter", clusterLayerId, handleMouseEnterCluster);
            map.on("mouseleave", clusterLayerId, handleMouseLeaveCluster);
            map.on("mouseenter", unclusteredLayerId, handleMouseEnterPoint);
            map.on("mouseleave", unclusteredLayerId, handleMouseLeavePoint);
            return ({
                "MapClusterLayer.useEffect": ()=>{
                    map.off("click", clusterLayerId, handleClusterClick);
                    map.off("click", unclusteredLayerId, handlePointClick);
                    map.off("mouseenter", clusterLayerId, handleMouseEnterCluster);
                    map.off("mouseleave", clusterLayerId, handleMouseLeaveCluster);
                    map.off("mouseenter", unclusteredLayerId, handleMouseEnterPoint);
                    map.off("mouseleave", unclusteredLayerId, handleMouseLeavePoint);
                }
            })["MapClusterLayer.useEffect"];
        }
    }["MapClusterLayer.useEffect"], [
        isLoaded,
        map,
        clusterLayerId,
        unclusteredLayerId,
        sourceId,
        onClusterClick,
        onPointClick
    ]);
    return null;
}
_s12(MapClusterLayer, "BxTB1777A+XN8JW2f+BFO48fPQ0=", false, function() {
    return [
        useMap,
        __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c15 = MapClusterLayer;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "DefaultLoader");
__turbopack_context__.k.register(_c1, "Map$forwardRef");
__turbopack_context__.k.register(_c2, "Map");
__turbopack_context__.k.register(_c3, "MapMarker");
__turbopack_context__.k.register(_c4, "MarkerContent");
__turbopack_context__.k.register(_c5, "DefaultMarkerIcon");
__turbopack_context__.k.register(_c6, "MarkerPopup");
__turbopack_context__.k.register(_c7, "MarkerTooltip");
__turbopack_context__.k.register(_c8, "MarkerLabel");
__turbopack_context__.k.register(_c9, "ControlGroup");
__turbopack_context__.k.register(_c10, "ControlButton");
__turbopack_context__.k.register(_c11, "MapControls");
__turbopack_context__.k.register(_c12, "CompassButton");
__turbopack_context__.k.register(_c13, "MapPopup");
__turbopack_context__.k.register(_c14, "MapRoute");
__turbopack_context__.k.register(_c15, "MapClusterLayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/yardyman-app/yardyman-app/firebase.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "app",
    ()=>app,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// firebase.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
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
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/yardyman-app/yardyman-app/components/ui/map.tsx [app-client] (ecmascript)");
// import { useEffect, useState } from "react";
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
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
        lineNumber: 34,
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
                lineNumber: 60,
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
                lineNumber: 75,
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
                lineNumber: 90,
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
                const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "providers"));
                const fetchedProviders = [];
                querySnapshot.forEach({
                    "Home.useEffect.fetchProviders": (doc)=>{
                        const data = doc.data();
                        fetchedProviders.push({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 200,
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
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 72,
                            right: 16,
                            zIndex: 120,
                            display: "flex",
                            gap: 10,
                            background: "rgba(255, 255, 255, 0.5)",
                            borderRadius: "9999px",
                            padding: "8px 12px",
                            boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                            backdropFilter: "blur(4px)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveService("snow"),
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
                                    padding: "6px 8px"
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
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Snow removals"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveService("lawn"),
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
                                    padding: "6px 8px"
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
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Lawn care"
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"], {
                        className: "w-full h-full",
                        viewport: viewport,
                        onViewportChange: setViewport,
                        styles: {
                            light: mapStyle,
                            dark: mapStyle
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapControls"], {
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
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            userLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapMarker"], {
                                longitude: userLocation[0],
                                latitude: userLocation[1],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserLocationIndicator, {}, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                    lineNumber: 284,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this),
                            filteredProviders.map((provider, idx)=>provider.latitude && provider.longitude && provider.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapMarker"], {
                                    longitude: provider.longitude,
                                    latitude: provider.latitude,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$components$2f$ui$2f$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setSelectedProvider(provider),
                                            style: {
                                                cursor: "pointer"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$yardyman$2d$app$2f$yardyman$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderAvatar, {
                                                imageUrl: provider.imageUrl,
                                                name: provider.providerName || "Provider"
                                            }, void 0, false, {
                                                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                                lineNumber: 299,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 19
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/yardyman-app/yardyman-app/app/page.tsx",
                lineNumber: 202,
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
                lineNumber: 308,
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

//# sourceMappingURL=yardyman-app_yardyman-app_ff7451e8._.js.map