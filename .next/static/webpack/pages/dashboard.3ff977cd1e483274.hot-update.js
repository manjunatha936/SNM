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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst { Header , Content , Footer , Sider  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;\nfunction getItem(label, key, icon, children) {\n    return {\n        key,\n        icon,\n        children,\n        label\n    };\n}\nconst items = [\n    getItem(\"Option 1\", \"1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.PieChartOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 20,\n        columnNumber: 28\n    }, undefined)),\n    getItem(\"Option 2\", \"2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DesktopOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 21,\n        columnNumber: 28\n    }, undefined)),\n    getItem(\"User\", \"sub1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 22,\n        columnNumber: 27\n    }, undefined), [\n        getItem(\"Tom\", \"3\"),\n        getItem(\"Bill\", \"4\"),\n        getItem(\"Alex\", \"5\")\n    ]),\n    getItem(\"Team\", \"sub2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.TeamOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 27,\n        columnNumber: 27\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Files\", \"9\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.FileOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 31,\n        columnNumber: 25\n    }, undefined))\n];\nconst DashboardLayout = ()=>{\n    _s();\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        style: {\n            minHeight: \"calc(100vh - 50px)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n                collapsible: true,\n                collapsed: collapsed,\n                onCollapse: (value)=>setCollapsed(value),\n                style: {\n                    background: \"#ffffff\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                    theme: \"white\",\n                    defaultSelectedKeys: [\n                        \"1\"\n                    ],\n                    mode: \"inline\",\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n                className: \"site-layout\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                        style: {\n                            padding: 0,\n                            background: colorBgContainer\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                        style: {\n                            margin: \"0 16px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb, {\n                                style: {\n                                    margin: \"16px 0\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb.Item, {\n                                        children: \"User\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb.Item, {\n                                        children: \"Bill\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    padding: 24,\n                                    minHeight: 360,\n                                    background: colorBgContainer\n                                },\n                                children: \"Bill is a cat.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: \"Ant Design \\xa92023 Created by Ant UED\"\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DashboardLayout, \"6Y45HKjiTmuFPUO7zK5ujkUpaPs=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken\n    ];\n});\n_c = DashboardLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardLayout);\nvar _c;\n$RefreshReg$(_c, \"DashboardLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9EYXNoYm9hcmQvbGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU0yQjtBQUM0QjtBQUN0QjtBQUNqQyxNQUFNLEVBQUVVLE9BQU0sRUFBRUMsUUFBTyxFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHUCx3Q0FBTUE7QUFDakQsU0FBU1EsUUFBUUMsS0FBSyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFO0lBQzNDLE9BQU87UUFDTEY7UUFDQUM7UUFDQUM7UUFDQUg7SUFDRjtBQUNGO0FBQ0EsTUFBTUksUUFBUTtJQUNaTCxRQUFRLFlBQVksbUJBQUssOERBQUNiLCtEQUFnQkE7Ozs7O0lBQzFDYSxRQUFRLFlBQVksbUJBQUssOERBQUNYLDhEQUFlQTs7Ozs7SUFDekNXLFFBQVEsUUFBUSxzQkFBUSw4REFBQ1osMkRBQVlBOzs7O21CQUFLO1FBQ3hDWSxRQUFRLE9BQU87UUFDZkEsUUFBUSxRQUFRO1FBQ2hCQSxRQUFRLFFBQVE7S0FDakI7SUFDREEsUUFBUSxRQUFRLHNCQUFRLDhEQUFDViwyREFBWUE7Ozs7bUJBQUs7UUFDeENVLFFBQVEsVUFBVTtRQUNsQkEsUUFBUSxVQUFVO0tBQ25CO0lBQ0RBLFFBQVEsU0FBUyxtQkFBSyw4REFBQ2QsMkRBQVlBOzs7OztDQUNwQztBQUNELE1BQU1vQixrQkFBa0IsSUFBTTs7SUFDNUIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsTUFBTSxFQUNKYyxPQUFPLEVBQUVDLGlCQUFnQixFQUFFLEdBQzVCLEdBQUdoQixnREFBYztJQUNsQixxQkFDRSw4REFBQ0Ysd0NBQU1BO1FBQ0xvQixPQUFPO1lBQ0xDLFdBQVc7UUFDYjs7MEJBRUEsOERBQUNkO2dCQUNDZSxXQUFXO2dCQUNYUCxXQUFXQTtnQkFDWFEsWUFBWSxDQUFDQyxRQUFVUixhQUFhUTtnQkFDcENKLE9BQU87b0JBQUVLLFlBQVk7Z0JBQVU7MEJBUy9CLDRFQUFDeEIsc0NBQUlBO29CQUNIQyxPQUFNO29CQUNOd0IscUJBQXFCO3dCQUFDO3FCQUFJO29CQUMxQkMsTUFBSztvQkFDTGQsT0FBT0E7Ozs7Ozs7Ozs7OzBCQUdYLDhEQUFDYix3Q0FBTUE7Z0JBQUM0QixXQUFVOztrQ0FDaEIsOERBQUN4Qjt3QkFDQ2dCLE9BQU87NEJBQ0xTLFNBQVM7NEJBQ1RKLFlBQVlQO3dCQUNkOzs7Ozs7a0NBRUYsOERBQUNiO3dCQUNDZSxPQUFPOzRCQUNMVSxRQUFRO3dCQUNWOzswQ0FFQSw4REFBQy9CLDRDQUFVQTtnQ0FDVHFCLE9BQU87b0NBQ0xVLFFBQVE7Z0NBQ1Y7O2tEQUVBLDhEQUFDL0IsaURBQWU7a0RBQUM7Ozs7OztrREFDakIsOERBQUNBLGlEQUFlO2tEQUFDOzs7Ozs7Ozs7Ozs7MENBRW5CLDhEQUFDaUM7Z0NBQ0NaLE9BQU87b0NBQ0xTLFNBQVM7b0NBQ1RSLFdBQVc7b0NBQ1hJLFlBQVlQO2dDQUNkOzBDQUNEOzs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUNaO3dCQUNDYyxPQUFPOzRCQUNMYSxXQUFXO3dCQUNiO2tDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQXZFTW5COztRQUlBWixnREFBY2lCOzs7S0FKZEw7QUF3RU4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRGFzaGJvYXJkL2xheW91dC5qcz81ZGRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEZpbGVPdXRsaW5lZCxcbiAgUGllQ2hhcnRPdXRsaW5lZCxcbiAgVXNlck91dGxpbmVkLFxuICBEZXNrdG9wT3V0bGluZWQsXG4gIFRlYW1PdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyBCcmVhZGNydW1iLCBMYXlvdXQsIE1lbnUsIHRoZW1lIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyLCBTaWRlciB9ID0gTGF5b3V0O1xuZnVuY3Rpb24gZ2V0SXRlbShsYWJlbCwga2V5LCBpY29uLCBjaGlsZHJlbikge1xuICByZXR1cm4ge1xuICAgIGtleSxcbiAgICBpY29uLFxuICAgIGNoaWxkcmVuLFxuICAgIGxhYmVsLFxuICB9O1xufVxuY29uc3QgaXRlbXMgPSBbXG4gIGdldEl0ZW0oXCJPcHRpb24gMVwiLCBcIjFcIiwgPFBpZUNoYXJ0T3V0bGluZWQgLz4pLFxuICBnZXRJdGVtKFwiT3B0aW9uIDJcIiwgXCIyXCIsIDxEZXNrdG9wT3V0bGluZWQgLz4pLFxuICBnZXRJdGVtKFwiVXNlclwiLCBcInN1YjFcIiwgPFVzZXJPdXRsaW5lZCAvPiwgW1xuICAgIGdldEl0ZW0oXCJUb21cIiwgXCIzXCIpLFxuICAgIGdldEl0ZW0oXCJCaWxsXCIsIFwiNFwiKSxcbiAgICBnZXRJdGVtKFwiQWxleFwiLCBcIjVcIiksXG4gIF0pLFxuICBnZXRJdGVtKFwiVGVhbVwiLCBcInN1YjJcIiwgPFRlYW1PdXRsaW5lZCAvPiwgW1xuICAgIGdldEl0ZW0oXCJUZWFtIDFcIiwgXCI2XCIpLFxuICAgIGdldEl0ZW0oXCJUZWFtIDJcIiwgXCI4XCIpLFxuICBdKSxcbiAgZ2V0SXRlbShcIkZpbGVzXCIsIFwiOVwiLCA8RmlsZU91dGxpbmVkIC8+KSxcbl07XG5jb25zdCBEYXNoYm9hcmRMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHtcbiAgICB0b2tlbjogeyBjb2xvckJnQ29udGFpbmVyIH0sXG4gIH0gPSB0aGVtZS51c2VUb2tlbigpO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIG1pbkhlaWdodDogXCJjYWxjKDEwMHZoIC0gNTBweClcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFNpZGVyXG4gICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgICBvbkNvbGxhcHNlPXsodmFsdWUpID0+IHNldENvbGxhcHNlZCh2YWx1ZSl9XG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2ZmZmZmZlwiIH19XG4gICAgICA+XG4gICAgICAgIHsvKiA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGhlaWdodDogMzIsXG4gICAgICAgICAgICBtYXJnaW46IDE2LFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMilcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPiAqL31cbiAgICAgICAgPE1lbnVcbiAgICAgICAgICB0aGVtZT1cIndoaXRlXCJcbiAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbXCIxXCJdfVxuICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxuICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgLz5cbiAgICAgIDwvU2lkZXI+XG4gICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0XCI+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9yQmdDb250YWluZXIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPENvbnRlbnRcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luOiBcIjAgMTZweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QnJlYWRjcnVtYlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjE2cHggMFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPlVzZXI8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+QmlsbDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgIDwvQnJlYWRjcnVtYj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyNCxcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiAzNjAsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9yQmdDb250YWluZXIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJpbGwgaXMgYSBjYXQuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFudCBEZXNpZ24gwqkyMDIzIENyZWF0ZWQgYnkgQW50IFVFRFxuICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZExheW91dDtcbiJdLCJuYW1lcyI6WyJGaWxlT3V0bGluZWQiLCJQaWVDaGFydE91dGxpbmVkIiwiVXNlck91dGxpbmVkIiwiRGVza3RvcE91dGxpbmVkIiwiVGVhbU91dGxpbmVkIiwiQnJlYWRjcnVtYiIsIkxheW91dCIsIk1lbnUiLCJ0aGVtZSIsInVzZVN0YXRlIiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlNpZGVyIiwiZ2V0SXRlbSIsImxhYmVsIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuIiwiaXRlbXMiLCJEYXNoYm9hcmRMYXlvdXQiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJ0b2tlbiIsImNvbG9yQmdDb250YWluZXIiLCJ1c2VUb2tlbiIsInN0eWxlIiwibWluSGVpZ2h0IiwiY29sbGFwc2libGUiLCJvbkNvbGxhcHNlIiwidmFsdWUiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdFNlbGVjdGVkS2V5cyIsIm1vZGUiLCJjbGFzc05hbWUiLCJwYWRkaW5nIiwibWFyZ2luIiwiSXRlbSIsImRpdiIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Dashboard/layout.js\n"));

/***/ })

});