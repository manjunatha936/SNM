"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/Components/Dashboard/layout.js":
/*!********************************************!*\
  !*** ./src/Components/Dashboard/layout.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst { Header , Content , Footer , Sider  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;\nfunction getItem(label, key, icon, children) {\n    return {\n        key,\n        icon,\n        children,\n        label\n    };\n}\nconst items = [\n    getItem(\"Dashbaord\", \"sub1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DashboardOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 25,\n        columnNumber: 32\n    }, undefined), [\n        getItem(\"Tom\", \"3\"),\n        getItem(\"Bill\", \"4\"),\n        getItem(\"Alex\", \"5\")\n    ]),\n    getItem(\"Issues\", \"sub2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.FormOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 30,\n        columnNumber: 29\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Logs\", \"sub3\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UnorderedListOutlined, {}, void 0, false, {\n            fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n            lineNumber: 34,\n            columnNumber: 35\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 34,\n        columnNumber: 27\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Result\", \"sub4\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.CheckCircleOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 39,\n        columnNumber: 29\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Exception\", \"sub5\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.WarningOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 44,\n        columnNumber: 32\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Account\", \"sub6\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.TeamOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 48,\n        columnNumber: 30\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Graphic Editor\", \"sub7\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.TeamOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 53,\n        columnNumber: 37\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ])\n];\nconst DashboardLayout = ()=>{\n    _s();\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const SidebarToggle = ()=>{\n        setCollapsed(!collapsed);\n    };\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        style: {\n            height: \"calc(100vh - 50px)\",\n            overflow: \"hidden\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n                trigger: null,\n                collapsible: true,\n                collapsed: collapsed,\n                style: {\n                    background: \"#ffffff\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                        theme: \"white\",\n                        defaultSelectedKeys: [\n                            \"1\"\n                        ],\n                        mode: \"inline\",\n                        items: items\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        className: \"sn-sidebar-toggler\",\n                        type: \"text\",\n                        block: true,\n                        onClick: SidebarToggle,\n                        children: collapsed ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MenuUnfoldOutlined, {\n                            style: {\n                                fontSize: \"20px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                            lineNumber: 87,\n                            columnNumber: 24\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MenuFoldOutlined, {\n                            style: {\n                                fontSize: \"20px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                            lineNumber: 89,\n                            columnNumber: 14\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n                className: \"site-layout\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                        style: {\n                            padding: 0,\n                            background: colorBgContainer\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                        style: {\n                            margin: \"0 16px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb, {\n                                style: {\n                                    margin: \"16px 0\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb.Item, {\n                                        children: \"User\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb.Item, {\n                                        children: \"Bill\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    padding: 24,\n                                    minHeight: 360,\n                                    background: colorBgContainer\n                                },\n                                children: \"Bill is a cat.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DashboardLayout, \"6Y45HKjiTmuFPUO7zK5ujkUpaPs=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken\n    ];\n});\n_c = DashboardLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardLayout);\nvar _c;\n$RefreshReg$(_c, \"DashboardLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9EYXNoYm9hcmQvbGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVMyQjtBQUNvQztBQUN2QjtBQUN4QyxNQUFNLEVBQUVlLE9BQU0sRUFBRUMsUUFBTyxFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHVCx3Q0FBTUE7QUFDakQsU0FBU1UsUUFBUUMsS0FBSyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFO0lBQzNDLE9BQU87UUFDTEY7UUFDQUM7UUFDQUM7UUFDQUg7SUFDRjtBQUNGO0FBRUEsTUFBTUksUUFBUTtJQUVaTCxRQUFRLGFBQWEsc0JBQVEsOERBQUNoQixnRUFBaUJBOzs7O21CQUFLO1FBQ2xEZ0IsUUFBUSxPQUFPO1FBQ2ZBLFFBQVEsUUFBUTtRQUNoQkEsUUFBUSxRQUFRO0tBQ2pCO0lBQ0RBLFFBQVEsVUFBVSxzQkFBUSw4REFBQ2YsMkRBQVlBOzs7O21CQUFLO1FBQzFDZSxRQUFRLFVBQVU7UUFDbEJBLFFBQVEsVUFBVTtLQUNuQjtJQUNEQSxRQUFRLFFBQVEsc0JBQVEsOERBQUNQLHdDQUFNQTtrQkFBQyw0RUFBQ04sb0VBQXFCQTs7Ozs7Ozs7O21CQUFjO1FBQ2xFYSxRQUFRLFVBQVU7UUFDbEJBLFFBQVEsVUFBVTtLQUNuQjtJQUVEQSxRQUFRLFVBQVUsc0JBQVEsOERBQUNkLGtFQUFtQkE7Ozs7bUJBQUs7UUFDakRjLFFBQVEsVUFBVTtRQUNsQkEsUUFBUSxVQUFVO0tBQ25CO0lBRURBLFFBQVEsYUFBYSxzQkFBUSw4REFBQ1osOERBQWVBOzs7O21CQUFLO1FBQ2hEWSxRQUFRLFVBQVU7UUFDbEJBLFFBQVEsVUFBVTtLQUNuQjtJQUNEQSxRQUFRLFdBQVcsc0JBQVEsOERBQUNuQiwyREFBWUE7Ozs7bUJBQUs7UUFDM0NtQixRQUFRLFVBQVU7UUFDbEJBLFFBQVEsVUFBVTtLQUNuQjtJQUVEQSxRQUFRLGtCQUFrQixzQkFBUSw4REFBQ25CLDJEQUFZQTs7OzttQkFBSztRQUNsRG1CLFFBQVEsVUFBVTtRQUNsQkEsUUFBUSxVQUFVO0tBQ25CO0NBRUY7QUFDRCxNQUFNTSxrQkFBa0IsSUFBTTs7SUFDNUIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdkLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsTUFBTWUsZ0JBQWdCLElBQU07UUFDMUJELGFBQWEsQ0FBQ0Q7SUFDaEI7SUFDQSxNQUFNLEVBQ0pHLE9BQU8sRUFBRUMsaUJBQWdCLEVBQUUsR0FDNUIsR0FBR25CLGdEQUFjO0lBQ2xCLHFCQUNFLDhEQUFDRix3Q0FBTUE7UUFDTHVCLE9BQU87WUFDTEMsUUFBUTtZQUFzQkMsVUFBVTtRQUMxQzs7MEJBRUEsOERBQUNoQjtnQkFDQ2lCLFNBQVMsSUFBSTtnQkFDYkMsV0FBVztnQkFDWFYsV0FBV0E7Z0JBQ1hNLE9BQU87b0JBQUVLLFlBQVk7Z0JBQVU7O2tDQUUvQiw4REFBQzNCLHNDQUFJQTt3QkFDSEMsT0FBTTt3QkFDTjJCLHFCQUFxQjs0QkFBQzt5QkFBSTt3QkFDMUJDLE1BQUs7d0JBQ0xmLE9BQU9BOzs7Ozs7a0NBR1QsOERBQUNaLHdDQUFNQTt3QkFBQzRCLFdBQVU7d0JBQXFCQyxNQUFLO3dCQUFPQyxLQUFLO3dCQUFDQyxTQUFTZjtrQ0FDL0RGLDBCQUFZLDhEQUFDekIsaUVBQWtCQTs0QkFBQytCLE9BQU87Z0NBQzNDWSxVQUFVOzRCQUNYOzs7OztzREFBTyw4REFBQzFDLCtEQUFnQkE7NEJBQUU4QixPQUFPO2dDQUMvQlksVUFBVTs0QkFDWDs7Ozs7cUNBQUk7Ozs7Ozs7Ozs7OzswQkFJTCw4REFBQ25DLHdDQUFNQTtnQkFBQytCLFdBQVU7O2tDQUNoQiw4REFBQ3pCO3dCQUNDaUIsT0FBTzs0QkFDTGEsU0FBUzs0QkFDVFIsWUFBWVA7d0JBQ2Q7Ozs7OztrQ0FFRiw4REFBQ2Q7d0JBQ0NnQixPQUFPOzRCQUNMYyxRQUFRO3dCQUNWOzswQ0FFQSw4REFBQ3RDLDRDQUFVQTtnQ0FDVHdCLE9BQU87b0NBQ0xjLFFBQVE7Z0NBQ1Y7O2tEQUVBLDhEQUFDdEMsaURBQWU7a0RBQUM7Ozs7OztrREFDakIsOERBQUNBLGlEQUFlO2tEQUFDOzs7Ozs7Ozs7Ozs7MENBRW5CLDhEQUFDd0M7Z0NBQ0NoQixPQUFPO29DQUNMYSxTQUFTO29DQUNUSSxXQUFXO29DQUNYWixZQUFZUDtnQ0FDZDswQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY1g7R0E1RU1MOztRQU9BZCxnREFBY29COzs7S0FQZE47QUE2RU4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRGFzaGJvYXJkL2xheW91dC5qcz81ZGRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFRlYW1PdXRsaW5lZCxcbiAgTWVudVVuZm9sZE91dGxpbmVkLFxuICBNZW51Rm9sZE91dGxpbmVkLFxuICBEYXNoYm9hcmRPdXRsaW5lZCxcbiAgRm9ybU91dGxpbmVkLFxuICBDaGVja0NpcmNsZU91dGxpbmVkLFxuICBVbm9yZGVyZWRMaXN0T3V0bGluZWQsXG4gIFdhcm5pbmdPdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyBCcmVhZGNydW1iLCBMYXlvdXQsIE1lbnUsIHRoZW1lLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIFJlYWN0IH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyLCBTaWRlciB9ID0gTGF5b3V0O1xuZnVuY3Rpb24gZ2V0SXRlbShsYWJlbCwga2V5LCBpY29uLCBjaGlsZHJlbikge1xuICByZXR1cm4ge1xuICAgIGtleSxcbiAgICBpY29uLFxuICAgIGNoaWxkcmVuLFxuICAgIGxhYmVsLFxuICB9O1xufVxuXG5jb25zdCBpdGVtcyA9IFtcbiBcbiAgZ2V0SXRlbShcIkRhc2hiYW9yZFwiLCBcInN1YjFcIiwgPERhc2hib2FyZE91dGxpbmVkIC8+LCBbXG4gICAgZ2V0SXRlbShcIlRvbVwiLCBcIjNcIiksXG4gICAgZ2V0SXRlbShcIkJpbGxcIiwgXCI0XCIpLFxuICAgIGdldEl0ZW0oXCJBbGV4XCIsIFwiNVwiKSxcbiAgXSksXG4gIGdldEl0ZW0oXCJJc3N1ZXNcIiwgXCJzdWIyXCIsIDxGb3JtT3V0bGluZWQgLz4sIFtcbiAgICBnZXRJdGVtKFwiVGVhbSAxXCIsIFwiNlwiKSxcbiAgICBnZXRJdGVtKFwiVGVhbSAyXCIsIFwiOFwiKSxcbiAgXSksXG4gIGdldEl0ZW0oXCJMb2dzXCIsIFwic3ViM1wiLCA8QnV0dG9uPjxVbm9yZGVyZWRMaXN0T3V0bGluZWQgLz48L0J1dHRvbj4sIFtcbiAgICBnZXRJdGVtKFwiVGVhbSAxXCIsIFwiNlwiKSxcbiAgICBnZXRJdGVtKFwiVGVhbSAyXCIsIFwiOFwiKSxcbiAgXSksXG5cbiAgZ2V0SXRlbShcIlJlc3VsdFwiLCBcInN1YjRcIiwgPENoZWNrQ2lyY2xlT3V0bGluZWQgLz4sIFtcbiAgICBnZXRJdGVtKFwiVGVhbSAxXCIsIFwiNlwiKSxcbiAgICBnZXRJdGVtKFwiVGVhbSAyXCIsIFwiOFwiKSxcbiAgXSksXG5cbiAgZ2V0SXRlbShcIkV4Y2VwdGlvblwiLCBcInN1YjVcIiwgPFdhcm5pbmdPdXRsaW5lZCAvPiwgW1xuICAgIGdldEl0ZW0oXCJUZWFtIDFcIiwgXCI2XCIpLFxuICAgIGdldEl0ZW0oXCJUZWFtIDJcIiwgXCI4XCIpLFxuICBdKSxcbiAgZ2V0SXRlbShcIkFjY291bnRcIiwgXCJzdWI2XCIsIDxUZWFtT3V0bGluZWQgLz4sIFtcbiAgICBnZXRJdGVtKFwiVGVhbSAxXCIsIFwiNlwiKSxcbiAgICBnZXRJdGVtKFwiVGVhbSAyXCIsIFwiOFwiKSxcbiAgXSksXG5cbiAgZ2V0SXRlbShcIkdyYXBoaWMgRWRpdG9yXCIsIFwic3ViN1wiLCA8VGVhbU91dGxpbmVkIC8+LCBbXG4gICAgZ2V0SXRlbShcIlRlYW0gMVwiLCBcIjZcIiksXG4gICAgZ2V0SXRlbShcIlRlYW0gMlwiLCBcIjhcIiksXG4gIF0pLFxuIFxuXTtcbmNvbnN0IERhc2hib2FyZExheW91dCA9ICgpID0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgU2lkZWJhclRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZClcbiAgfVxuICBjb25zdCB7XG4gICAgdG9rZW46IHsgY29sb3JCZ0NvbnRhaW5lciB9LFxuICB9ID0gdGhlbWUudXNlVG9rZW4oKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICBzdHlsZT17e1xuICAgICAgICBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDUwcHgpXCIsIG92ZXJmbG93OiBcImhpZGRlblwiXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxTaWRlclxuICAgICAgICB0cmlnZ2VyPXtudWxsfVxuICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzZWQ9e2NvbGxhcHNlZH1cbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjZmZmZmZmXCIgfX1cbiAgICAgID5cbiAgICAgICAgPE1lbnVcbiAgICAgICAgICB0aGVtZT1cIndoaXRlXCJcbiAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbXCIxXCJdfVxuICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxuICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgLz5cblxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInNuLXNpZGViYXItdG9nZ2xlclwiIHR5cGU9XCJ0ZXh0XCIgYmxvY2sgb25DbGljaz17U2lkZWJhclRvZ2dsZX0+XG4gICAgICAgICAge2NvbGxhcHNlZCA/IDxNZW51VW5mb2xkT3V0bGluZWQgc3R5bGU9e3tcbiAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcbiAgICAgIH19Lz4gOiA8TWVudUZvbGRPdXRsaW5lZCAgc3R5bGU9e3tcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiXG4gICAgICAgfX0vPn1cbiAgICAgICAgICBcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1NpZGVyPlxuICAgICAgPExheW91dCBjbGFzc05hbWU9XCJzaXRlLWxheW91dFwiPlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvckJnQ29udGFpbmVyLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxDb250ZW50XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpbjogXCIwIDE2cHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJyZWFkY3J1bWJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbjogXCIxNnB4IDBcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5Vc2VyPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPkJpbGw8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogMjQsXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogMzYwLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvckJnQ29udGFpbmVyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCaWxsIGlzIGEgY2F0LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIHsvKiA8Rm9vdGVyXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQW50IERlc2lnbiDCqTIwMjMgQ3JlYXRlZCBieSBBbnQgVUVEXG4gICAgICAgIDwvRm9vdGVyPiAqL31cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZExheW91dDtcbiJdLCJuYW1lcyI6WyJUZWFtT3V0bGluZWQiLCJNZW51VW5mb2xkT3V0bGluZWQiLCJNZW51Rm9sZE91dGxpbmVkIiwiRGFzaGJvYXJkT3V0bGluZWQiLCJGb3JtT3V0bGluZWQiLCJDaGVja0NpcmNsZU91dGxpbmVkIiwiVW5vcmRlcmVkTGlzdE91dGxpbmVkIiwiV2FybmluZ091dGxpbmVkIiwiQnJlYWRjcnVtYiIsIkxheW91dCIsIk1lbnUiLCJ0aGVtZSIsIkJ1dHRvbiIsInVzZVN0YXRlIiwiUmVhY3QiLCJIZWFkZXIiLCJDb250ZW50IiwiRm9vdGVyIiwiU2lkZXIiLCJnZXRJdGVtIiwibGFiZWwiLCJrZXkiLCJpY29uIiwiY2hpbGRyZW4iLCJpdGVtcyIsIkRhc2hib2FyZExheW91dCIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsIlNpZGViYXJUb2dnbGUiLCJ0b2tlbiIsImNvbG9yQmdDb250YWluZXIiLCJ1c2VUb2tlbiIsInN0eWxlIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJ0cmlnZ2VyIiwiY29sbGFwc2libGUiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdFNlbGVjdGVkS2V5cyIsIm1vZGUiLCJjbGFzc05hbWUiLCJ0eXBlIiwiYmxvY2siLCJvbkNsaWNrIiwiZm9udFNpemUiLCJwYWRkaW5nIiwibWFyZ2luIiwiSXRlbSIsImRpdiIsIm1pbkhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Dashboard/layout.js\n"));

/***/ })

});