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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst { Header , Content , Footer , Sider  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;\nfunction getItem(label, key, icon, children) {\n    return {\n        key,\n        icon,\n        children,\n        label\n    };\n}\nconst items = [\n    getItem(\"Option 1\", \"1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.PieChartOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 23,\n        columnNumber: 28\n    }, undefined)),\n    getItem(\"Option 2\", \"2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DesktopOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 24,\n        columnNumber: 28\n    }, undefined)),\n    getItem(\"User\", \"sub1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 25,\n        columnNumber: 27\n    }, undefined), [\n        getItem(\"Tom\", \"3\"),\n        getItem(\"Bill\", \"4\"),\n        getItem(\"Alex\", \"5\")\n    ]),\n    getItem(\"Team\", \"sub2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.TeamOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 30,\n        columnNumber: 27\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Files\", \"9\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.FileOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 34,\n        columnNumber: 25\n    }, undefined))\n];\nconst DashboardLayout = ()=>{\n    _s();\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        style: {\n            minHeight: \"calc(100vh - 50px)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n                trigger: null,\n                collapsible: true,\n                collapsed: collapsed,\n                style: {\n                    background: \"#ffffff\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                        theme: \"white\",\n                        defaultSelectedKeys: [\n                            \"1\"\n                        ],\n                        mode: \"inline\",\n                        items: items\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"text\",\n                        block: true,\n                        children: collapsed ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MenuUnfoldOutlined : _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MenuFoldOutlined\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n                className: \"site-layout\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                        style: {\n                            padding: 0,\n                            background: colorBgContainer\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                        style: {\n                            margin: \"0 16px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb, {\n                                style: {\n                                    margin: \"16px 0\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb.Item, {\n                                        children: \"User\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb.Item, {\n                                        children: \"Bill\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    padding: 24,\n                                    minHeight: 360,\n                                    background: colorBgContainer\n                                },\n                                children: \"Bill is a cat.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: \"Ant Design \\xa92023 Created by Ant UED\"\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DashboardLayout, \"6Y45HKjiTmuFPUO7zK5ujkUpaPs=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken\n    ];\n});\n_c = DashboardLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardLayout);\nvar _c;\n$RefreshReg$(_c, \"DashboardLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9EYXNoYm9hcmQvbGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVEyQjtBQUNvQztBQUN2QjtBQUN4QyxNQUFNLEVBQUVjLE9BQU0sRUFBRUMsUUFBTyxFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHVCx3Q0FBTUE7QUFDakQsU0FBU1UsUUFBUUMsS0FBSyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFO0lBQzNDLE9BQU87UUFDTEY7UUFDQUM7UUFDQUM7UUFDQUg7SUFDRjtBQUNGO0FBRUEsTUFBTUksUUFBUTtJQUNaTCxRQUFRLFlBQVksbUJBQUssOERBQUNqQiwrREFBZ0JBOzs7OztJQUMxQ2lCLFFBQVEsWUFBWSxtQkFBSyw4REFBQ2YsOERBQWVBOzs7OztJQUN6Q2UsUUFBUSxRQUFRLHNCQUFRLDhEQUFDaEIsMkRBQVlBOzs7O21CQUFLO1FBQ3hDZ0IsUUFBUSxPQUFPO1FBQ2ZBLFFBQVEsUUFBUTtRQUNoQkEsUUFBUSxRQUFRO0tBQ2pCO0lBQ0RBLFFBQVEsUUFBUSxzQkFBUSw4REFBQ2QsMkRBQVlBOzs7O21CQUFLO1FBQ3hDYyxRQUFRLFVBQVU7UUFDbEJBLFFBQVEsVUFBVTtLQUNuQjtJQUNEQSxRQUFRLFNBQVMsbUJBQUssOERBQUNsQiwyREFBWUE7Ozs7O0NBQ3BDO0FBQ0QsTUFBTXdCLGtCQUFrQixJQUFNOztJQUM1QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNLEVBQ0plLE9BQU8sRUFBRUMsaUJBQWdCLEVBQUUsR0FDNUIsR0FBR2xCLGdEQUFjO0lBQ2xCLHFCQUNFLDhEQUFDRix3Q0FBTUE7UUFDTHNCLE9BQU87WUFDTEMsV0FBVztRQUNiOzswQkFFQSw4REFBQ2Q7Z0JBQ0NlLFNBQVMsSUFBSTtnQkFDYkMsV0FBVztnQkFDWFIsV0FBV0E7Z0JBQ1hLLE9BQU87b0JBQUVJLFlBQVk7Z0JBQVU7O2tDQUUvQiw4REFBQ3pCLHNDQUFJQTt3QkFDSEMsT0FBTTt3QkFDTnlCLHFCQUFxQjs0QkFBQzt5QkFBSTt3QkFDMUJDLE1BQUs7d0JBQ0xiLE9BQU9BOzs7Ozs7a0NBR1QsOERBQUNaLHdDQUFNQTt3QkFBQzBCLE1BQUs7d0JBQU9DLEtBQUs7a0NBQ3RCYixZQUFZcEIsaUVBQWtCQSxHQUFHQywrREFBZ0I7Ozs7Ozs7Ozs7OzswQkFJdEQsOERBQUNFLHdDQUFNQTtnQkFBQytCLFdBQVU7O2tDQUNoQiw4REFBQ3pCO3dCQUNDZ0IsT0FBTzs0QkFDTFUsU0FBUzs0QkFDVE4sWUFBWU47d0JBQ2Q7Ozs7OztrQ0FFRiw4REFBQ2I7d0JBQ0NlLE9BQU87NEJBQ0xXLFFBQVE7d0JBQ1Y7OzBDQUVBLDhEQUFDbEMsNENBQVVBO2dDQUNUdUIsT0FBTztvQ0FDTFcsUUFBUTtnQ0FDVjs7a0RBRUEsOERBQUNsQyxpREFBZTtrREFBQzs7Ozs7O2tEQUNqQiw4REFBQ0EsaURBQWU7a0RBQUM7Ozs7Ozs7Ozs7OzswQ0FFbkIsOERBQUNvQztnQ0FDQ2IsT0FBTztvQ0FDTFUsU0FBUztvQ0FDVFQsV0FBVztvQ0FDWEcsWUFBWU47Z0NBQ2Q7MENBQ0Q7Ozs7Ozs7Ozs7OztrQ0FJSCw4REFBQ1o7d0JBQ0NjLE9BQU87NEJBQ0xjLFdBQVc7d0JBQ2I7a0NBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBckVNcEI7O1FBSUFkLGdEQUFjbUI7OztLQUpkTDtBQXNFTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9EYXNoYm9hcmQvbGF5b3V0LmpzPzVkZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRmlsZU91dGxpbmVkLFxuICBQaWVDaGFydE91dGxpbmVkLFxuICBVc2VyT3V0bGluZWQsXG4gIERlc2t0b3BPdXRsaW5lZCxcbiAgVGVhbU91dGxpbmVkLFxuICBNZW51VW5mb2xkT3V0bGluZWQsXG4gIE1lbnVGb2xkT3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgQnJlYWRjcnVtYiwgTGF5b3V0LCBNZW51LCB0aGVtZSwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBSZWFjdCB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciwgU2lkZXIgfSA9IExheW91dDtcbmZ1bmN0aW9uIGdldEl0ZW0obGFiZWwsIGtleSwgaWNvbiwgY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHtcbiAgICBrZXksXG4gICAgaWNvbixcbiAgICBjaGlsZHJlbixcbiAgICBsYWJlbCxcbiAgfTtcbn1cblxuY29uc3QgaXRlbXMgPSBbXG4gIGdldEl0ZW0oXCJPcHRpb24gMVwiLCBcIjFcIiwgPFBpZUNoYXJ0T3V0bGluZWQgLz4pLFxuICBnZXRJdGVtKFwiT3B0aW9uIDJcIiwgXCIyXCIsIDxEZXNrdG9wT3V0bGluZWQgLz4pLFxuICBnZXRJdGVtKFwiVXNlclwiLCBcInN1YjFcIiwgPFVzZXJPdXRsaW5lZCAvPiwgW1xuICAgIGdldEl0ZW0oXCJUb21cIiwgXCIzXCIpLFxuICAgIGdldEl0ZW0oXCJCaWxsXCIsIFwiNFwiKSxcbiAgICBnZXRJdGVtKFwiQWxleFwiLCBcIjVcIiksXG4gIF0pLFxuICBnZXRJdGVtKFwiVGVhbVwiLCBcInN1YjJcIiwgPFRlYW1PdXRsaW5lZCAvPiwgW1xuICAgIGdldEl0ZW0oXCJUZWFtIDFcIiwgXCI2XCIpLFxuICAgIGdldEl0ZW0oXCJUZWFtIDJcIiwgXCI4XCIpLFxuICBdKSxcbiAgZ2V0SXRlbShcIkZpbGVzXCIsIFwiOVwiLCA8RmlsZU91dGxpbmVkIC8+KSxcbl07XG5jb25zdCBEYXNoYm9hcmRMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHtcbiAgICB0b2tlbjogeyBjb2xvckJnQ29udGFpbmVyIH0sXG4gIH0gPSB0aGVtZS51c2VUb2tlbigpO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIG1pbkhlaWdodDogXCJjYWxjKDEwMHZoIC0gNTBweClcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFNpZGVyXG4gICAgICAgIHRyaWdnZXI9e251bGx9XG4gICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIiB9fVxuICAgICAgPlxuICAgICAgICA8TWVudVxuICAgICAgICAgIHRoZW1lPVwid2hpdGVcIlxuICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1tcIjFcIl19XG4gICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBibG9jaz5cbiAgICAgICAgICB7Y29sbGFwc2VkID8gTWVudVVuZm9sZE91dGxpbmVkIDogTWVudUZvbGRPdXRsaW5lZH1cbiAgICAgICAgICBcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1NpZGVyPlxuICAgICAgPExheW91dCBjbGFzc05hbWU9XCJzaXRlLWxheW91dFwiPlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvckJnQ29udGFpbmVyLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxDb250ZW50XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpbjogXCIwIDE2cHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJyZWFkY3J1bWJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbjogXCIxNnB4IDBcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5Vc2VyPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPkJpbGw8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogMjQsXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogMzYwLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvckJnQ29udGFpbmVyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCaWxsIGlzIGEgY2F0LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBbnQgRGVzaWduIMKpMjAyMyBDcmVhdGVkIGJ5IEFudCBVRURcbiAgICAgICAgPC9Gb290ZXI+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRMYXlvdXQ7XG4iXSwibmFtZXMiOlsiRmlsZU91dGxpbmVkIiwiUGllQ2hhcnRPdXRsaW5lZCIsIlVzZXJPdXRsaW5lZCIsIkRlc2t0b3BPdXRsaW5lZCIsIlRlYW1PdXRsaW5lZCIsIk1lbnVVbmZvbGRPdXRsaW5lZCIsIk1lbnVGb2xkT3V0bGluZWQiLCJCcmVhZGNydW1iIiwiTGF5b3V0IiwiTWVudSIsInRoZW1lIiwiQnV0dG9uIiwidXNlU3RhdGUiLCJSZWFjdCIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJTaWRlciIsImdldEl0ZW0iLCJsYWJlbCIsImtleSIsImljb24iLCJjaGlsZHJlbiIsIml0ZW1zIiwiRGFzaGJvYXJkTGF5b3V0IiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwidG9rZW4iLCJjb2xvckJnQ29udGFpbmVyIiwidXNlVG9rZW4iLCJzdHlsZSIsIm1pbkhlaWdodCIsInRyaWdnZXIiLCJjb2xsYXBzaWJsZSIsImJhY2tncm91bmQiLCJkZWZhdWx0U2VsZWN0ZWRLZXlzIiwibW9kZSIsInR5cGUiLCJibG9jayIsImNsYXNzTmFtZSIsInBhZGRpbmciLCJtYXJnaW4iLCJJdGVtIiwiZGl2IiwidGV4dEFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Dashboard/layout.js\n"));

/***/ })

});