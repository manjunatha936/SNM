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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst { Header , Content , Footer , Sider  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;\nfunction getItem(label, key, icon, children) {\n    return {\n        key,\n        icon,\n        children,\n        label\n    };\n}\nconst items = [\n    getItem(\"Option 1\", \"1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.PieChartOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 23,\n        columnNumber: 28\n    }, undefined)),\n    getItem(\"Option 2\", \"2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DesktopOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 24,\n        columnNumber: 28\n    }, undefined)),\n    getItem(\"User\", \"sub1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 25,\n        columnNumber: 27\n    }, undefined), [\n        getItem(\"Tom\", \"3\"),\n        getItem(\"Bill\", \"4\"),\n        getItem(\"Alex\", \"5\")\n    ]),\n    getItem(\"Team\", \"sub2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.TeamOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 30,\n        columnNumber: 27\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Files\", \"9\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.FileOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 34,\n        columnNumber: 25\n    }, undefined))\n];\nconst DashboardLayout = ()=>{\n    _s();\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const SidebarToggle = ()=>{\n        setCollapsed(!collapsed);\n    };\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        style: {\n            height: \"calc(100vh - 50px)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n                trigger: null,\n                collapsible: true,\n                collapsed: collapsed,\n                style: {\n                    background: \"#ffffff\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                        theme: \"white\",\n                        defaultSelectedKeys: [\n                            \"1\"\n                        ],\n                        mode: \"inline\",\n                        items: items\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        className: \"sn-sidebar-toggler\",\n                        type: \"text\",\n                        block: true,\n                        onClick: SidebarToggle,\n                        children: collapsed ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MenuUnfoldOutlined, {}, void 0, false, {\n                            fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                            lineNumber: 64,\n                            columnNumber: 24\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MenuFoldOutlined, {}, void 0, false, {\n                            fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                            lineNumber: 64,\n                            columnNumber: 49\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n                className: \"site-layout\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                        style: {\n                            padding: 0,\n                            background: colorBgContainer\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                        style: {\n                            margin: \"0 16px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb, {\n                                style: {\n                                    margin: \"16px 0\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb.Item, {\n                                        children: \"User\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb.Item, {\n                                        children: \"Bill\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    padding: 24,\n                                    minHeight: 360,\n                                    background: colorBgContainer\n                                },\n                                children: \"Bill is a cat.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: \"Ant Design \\xa92023 Created by Ant UED\"\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DashboardLayout, \"6Y45HKjiTmuFPUO7zK5ujkUpaPs=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken\n    ];\n});\n_c = DashboardLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardLayout);\nvar _c;\n$RefreshReg$(_c, \"DashboardLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9EYXNoYm9hcmQvbGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVEyQjtBQUNvQztBQUN2QjtBQUN4QyxNQUFNLEVBQUVjLE9BQU0sRUFBRUMsUUFBTyxFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHVCx3Q0FBTUE7QUFDakQsU0FBU1UsUUFBUUMsS0FBSyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFO0lBQzNDLE9BQU87UUFDTEY7UUFDQUM7UUFDQUM7UUFDQUg7SUFDRjtBQUNGO0FBRUEsTUFBTUksUUFBUTtJQUNaTCxRQUFRLFlBQVksbUJBQUssOERBQUNqQiwrREFBZ0JBOzs7OztJQUMxQ2lCLFFBQVEsWUFBWSxtQkFBSyw4REFBQ2YsOERBQWVBOzs7OztJQUN6Q2UsUUFBUSxRQUFRLHNCQUFRLDhEQUFDaEIsMkRBQVlBOzs7O21CQUFLO1FBQ3hDZ0IsUUFBUSxPQUFPO1FBQ2ZBLFFBQVEsUUFBUTtRQUNoQkEsUUFBUSxRQUFRO0tBQ2pCO0lBQ0RBLFFBQVEsUUFBUSxzQkFBUSw4REFBQ2QsMkRBQVlBOzs7O21CQUFLO1FBQ3hDYyxRQUFRLFVBQVU7UUFDbEJBLFFBQVEsVUFBVTtLQUNuQjtJQUNEQSxRQUFRLFNBQVMsbUJBQUssOERBQUNsQiwyREFBWUE7Ozs7O0NBQ3BDO0FBQ0QsTUFBTXdCLGtCQUFrQixJQUFNOztJQUM1QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNZSxnQkFBZ0IsSUFBTTtRQUMxQkQsYUFBYSxDQUFDRDtJQUNoQjtJQUNBLE1BQU0sRUFDSkcsT0FBTyxFQUFFQyxpQkFBZ0IsRUFBRSxHQUM1QixHQUFHbkIsZ0RBQWM7SUFDbEIscUJBQ0UsOERBQUNGLHdDQUFNQTtRQUNMdUIsT0FBTztZQUNMQyxRQUFRO1FBQ1Y7OzBCQUVBLDhEQUFDZjtnQkFDQ2dCLFNBQVMsSUFBSTtnQkFDYkMsV0FBVztnQkFDWFQsV0FBV0E7Z0JBQ1hNLE9BQU87b0JBQUVJLFlBQVk7Z0JBQVU7O2tDQUUvQiw4REFBQzFCLHNDQUFJQTt3QkFDSEMsT0FBTTt3QkFDTjBCLHFCQUFxQjs0QkFBQzt5QkFBSTt3QkFDMUJDLE1BQUs7d0JBQ0xkLE9BQU9BOzs7Ozs7a0NBR1QsOERBQUNaLHdDQUFNQTt3QkFBQzJCLFdBQVU7d0JBQXFCQyxNQUFLO3dCQUFPQyxLQUFLO3dCQUFDQyxTQUFTZDtrQ0FDL0RGLDBCQUFZLDhEQUFDcEIsaUVBQWtCQTs7OztzREFBTSw4REFBQ0MsK0RBQWdCQTs7OztxQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUk5RCw4REFBQ0Usd0NBQU1BO2dCQUFDOEIsV0FBVTs7a0NBQ2hCLDhEQUFDeEI7d0JBQ0NpQixPQUFPOzRCQUNMVyxTQUFTOzRCQUNUUCxZQUFZTjt3QkFDZDs7Ozs7O2tDQUVGLDhEQUFDZDt3QkFDQ2dCLE9BQU87NEJBQ0xZLFFBQVE7d0JBQ1Y7OzBDQUVBLDhEQUFDcEMsNENBQVVBO2dDQUNUd0IsT0FBTztvQ0FDTFksUUFBUTtnQ0FDVjs7a0RBRUEsOERBQUNwQyxpREFBZTtrREFBQzs7Ozs7O2tEQUNqQiw4REFBQ0EsaURBQWU7a0RBQUM7Ozs7Ozs7Ozs7OzswQ0FFbkIsOERBQUNzQztnQ0FDQ2QsT0FBTztvQ0FDTFcsU0FBUztvQ0FDVEksV0FBVztvQ0FDWFgsWUFBWU47Z0NBQ2Q7MENBQ0Q7Ozs7Ozs7Ozs7OztrQ0FJSCw4REFBQ2I7d0JBQ0NlLE9BQU87NEJBQ0xnQixXQUFXO3dCQUNiO2tDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQXhFTXZCOztRQU9BZCxnREFBY29COzs7S0FQZE47QUF5RU4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRGFzaGJvYXJkL2xheW91dC5qcz81ZGRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEZpbGVPdXRsaW5lZCxcbiAgUGllQ2hhcnRPdXRsaW5lZCxcbiAgVXNlck91dGxpbmVkLFxuICBEZXNrdG9wT3V0bGluZWQsXG4gIFRlYW1PdXRsaW5lZCxcbiAgTWVudVVuZm9sZE91dGxpbmVkLFxuICBNZW51Rm9sZE91dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IEJyZWFkY3J1bWIsIExheW91dCwgTWVudSwgdGhlbWUsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgUmVhY3QgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIsIFNpZGVyIH0gPSBMYXlvdXQ7XG5mdW5jdGlvbiBnZXRJdGVtKGxhYmVsLCBrZXksIGljb24sIGNoaWxkcmVuKSB7XG4gIHJldHVybiB7XG4gICAga2V5LFxuICAgIGljb24sXG4gICAgY2hpbGRyZW4sXG4gICAgbGFiZWwsXG4gIH07XG59XG5cbmNvbnN0IGl0ZW1zID0gW1xuICBnZXRJdGVtKFwiT3B0aW9uIDFcIiwgXCIxXCIsIDxQaWVDaGFydE91dGxpbmVkIC8+KSxcbiAgZ2V0SXRlbShcIk9wdGlvbiAyXCIsIFwiMlwiLCA8RGVza3RvcE91dGxpbmVkIC8+KSxcbiAgZ2V0SXRlbShcIlVzZXJcIiwgXCJzdWIxXCIsIDxVc2VyT3V0bGluZWQgLz4sIFtcbiAgICBnZXRJdGVtKFwiVG9tXCIsIFwiM1wiKSxcbiAgICBnZXRJdGVtKFwiQmlsbFwiLCBcIjRcIiksXG4gICAgZ2V0SXRlbShcIkFsZXhcIiwgXCI1XCIpLFxuICBdKSxcbiAgZ2V0SXRlbShcIlRlYW1cIiwgXCJzdWIyXCIsIDxUZWFtT3V0bGluZWQgLz4sIFtcbiAgICBnZXRJdGVtKFwiVGVhbSAxXCIsIFwiNlwiKSxcbiAgICBnZXRJdGVtKFwiVGVhbSAyXCIsIFwiOFwiKSxcbiAgXSksXG4gIGdldEl0ZW0oXCJGaWxlc1wiLCBcIjlcIiwgPEZpbGVPdXRsaW5lZCAvPiksXG5dO1xuY29uc3QgRGFzaGJvYXJkTGF5b3V0ID0gKCkgPT4ge1xuICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBTaWRlYmFyVG9nZ2xlID0gKCkgPT4ge1xuICAgIHNldENvbGxhcHNlZCghY29sbGFwc2VkKVxuICB9XG4gIGNvbnN0IHtcbiAgICB0b2tlbjogeyBjb2xvckJnQ29udGFpbmVyIH0sXG4gIH0gPSB0aGVtZS51c2VUb2tlbigpO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGhlaWdodDogXCJjYWxjKDEwMHZoIC0gNTBweClcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFNpZGVyXG4gICAgICAgIHRyaWdnZXI9e251bGx9XG4gICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIiB9fVxuICAgICAgPlxuICAgICAgICA8TWVudVxuICAgICAgICAgIHRoZW1lPVwid2hpdGVcIlxuICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1tcIjFcIl19XG4gICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwic24tc2lkZWJhci10b2dnbGVyXCIgdHlwZT1cInRleHRcIiBibG9jayBvbkNsaWNrPXtTaWRlYmFyVG9nZ2xlfT5cbiAgICAgICAgICB7Y29sbGFwc2VkID8gPE1lbnVVbmZvbGRPdXRsaW5lZCAvPiA6IDxNZW51Rm9sZE91dGxpbmVkIC8+fVxuICAgICAgICAgIFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvU2lkZXI+XG4gICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0XCI+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9yQmdDb250YWluZXIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPENvbnRlbnRcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luOiBcIjAgMTZweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QnJlYWRjcnVtYlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjE2cHggMFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPlVzZXI8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+QmlsbDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgIDwvQnJlYWRjcnVtYj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyNCxcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiAzNjAsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9yQmdDb250YWluZXIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJpbGwgaXMgYSBjYXQuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFudCBEZXNpZ24gwqkyMDIzIENyZWF0ZWQgYnkgQW50IFVFRFxuICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZExheW91dDtcbiJdLCJuYW1lcyI6WyJGaWxlT3V0bGluZWQiLCJQaWVDaGFydE91dGxpbmVkIiwiVXNlck91dGxpbmVkIiwiRGVza3RvcE91dGxpbmVkIiwiVGVhbU91dGxpbmVkIiwiTWVudVVuZm9sZE91dGxpbmVkIiwiTWVudUZvbGRPdXRsaW5lZCIsIkJyZWFkY3J1bWIiLCJMYXlvdXQiLCJNZW51IiwidGhlbWUiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlNpZGVyIiwiZ2V0SXRlbSIsImxhYmVsIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuIiwiaXRlbXMiLCJEYXNoYm9hcmRMYXlvdXQiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJTaWRlYmFyVG9nZ2xlIiwidG9rZW4iLCJjb2xvckJnQ29udGFpbmVyIiwidXNlVG9rZW4iLCJzdHlsZSIsImhlaWdodCIsInRyaWdnZXIiLCJjb2xsYXBzaWJsZSIsImJhY2tncm91bmQiLCJkZWZhdWx0U2VsZWN0ZWRLZXlzIiwibW9kZSIsImNsYXNzTmFtZSIsInR5cGUiLCJibG9jayIsIm9uQ2xpY2siLCJwYWRkaW5nIiwibWFyZ2luIiwiSXRlbSIsImRpdiIsIm1pbkhlaWdodCIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Dashboard/layout.js\n"));

/***/ })

});