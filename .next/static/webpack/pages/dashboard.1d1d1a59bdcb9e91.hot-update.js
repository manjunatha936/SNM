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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst { Header , Content , Footer , Sider  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;\nfunction getItem(label, key, icon, children) {\n    return {\n        key,\n        icon,\n        children,\n        label\n    };\n}\nconst items = [\n    getItem(\"Dashbaord\", \"sub1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 24,\n        columnNumber: 32\n    }, undefined), [\n        getItem(\"Tom\", \"3\"),\n        getItem(\"Bill\", \"4\"),\n        getItem(\"Alex\", \"5\")\n    ]),\n    getItem(\"Issues\", \"sub2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.TeamOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 29,\n        columnNumber: 29\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Logs\", \"sub3\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.TeamOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 33,\n        columnNumber: 27\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Result\", \"sub4\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.TeamOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 38,\n        columnNumber: 29\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Exception\", \"sub5\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.TeamOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 43,\n        columnNumber: 32\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Account\", \"sub6\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.TeamOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 47,\n        columnNumber: 30\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Graphic Editor\", \"sub7\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.TeamOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 52,\n        columnNumber: 37\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ])\n];\nconst DashboardLayout = ()=>{\n    _s();\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const SidebarToggle = ()=>{\n        setCollapsed(!collapsed);\n    };\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        style: {\n            height: \"calc(100vh - 50px)\",\n            overflow: \"hidden\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n                trigger: null,\n                collapsible: true,\n                collapsed: collapsed,\n                style: {\n                    background: \"#ffffff\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                        theme: \"white\",\n                        defaultSelectedKeys: [\n                            \"1\"\n                        ],\n                        mode: \"inline\",\n                        items: items\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        className: \"sn-sidebar-toggler\",\n                        type: \"text\",\n                        block: true,\n                        onClick: SidebarToggle,\n                        children: collapsed ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MenuUnfoldOutlined, {\n                            style: {\n                                fontSize: \"20px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                            lineNumber: 86,\n                            columnNumber: 24\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MenuFoldOutlined, {\n                            style: {\n                                fontSize: \"20px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                            lineNumber: 88,\n                            columnNumber: 14\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n                className: \"site-layout\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                        style: {\n                            padding: 0,\n                            background: colorBgContainer\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                        style: {\n                            margin: \"0 16px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb, {\n                                style: {\n                                    margin: \"16px 0\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb.Item, {\n                                        children: \"User\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb.Item, {\n                                        children: \"Bill\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    padding: 24,\n                                    minHeight: 360,\n                                    background: colorBgContainer\n                                },\n                                children: \"Bill is a cat.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DashboardLayout, \"6Y45HKjiTmuFPUO7zK5ujkUpaPs=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken\n    ];\n});\n_c = DashboardLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardLayout);\nvar _c;\n$RefreshReg$(_c, \"DashboardLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9EYXNoYm9hcmQvbGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVEyQjtBQUNvQztBQUN2QjtBQUN4QyxNQUFNLEVBQUVjLE9BQU0sRUFBRUMsUUFBTyxFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHVCx3Q0FBTUE7QUFDakQsU0FBU1UsUUFBUUMsS0FBSyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFO0lBQzNDLE9BQU87UUFDTEY7UUFDQUM7UUFDQUM7UUFDQUg7SUFDRjtBQUNGO0FBRUEsTUFBTUksUUFBUTtJQUVaTCxRQUFRLGFBQWEsc0JBQVEsOERBQUNoQiwyREFBWUE7Ozs7bUJBQUs7UUFDN0NnQixRQUFRLE9BQU87UUFDZkEsUUFBUSxRQUFRO1FBQ2hCQSxRQUFRLFFBQVE7S0FDakI7SUFDREEsUUFBUSxVQUFVLHNCQUFRLDhEQUFDZCwyREFBWUE7Ozs7bUJBQUs7UUFDMUNjLFFBQVEsVUFBVTtRQUNsQkEsUUFBUSxVQUFVO0tBQ25CO0lBQ0RBLFFBQVEsUUFBUSxzQkFBUSw4REFBQ2QsMkRBQVlBOzs7O21CQUFLO1FBQ3hDYyxRQUFRLFVBQVU7UUFDbEJBLFFBQVEsVUFBVTtLQUNuQjtJQUVEQSxRQUFRLFVBQVUsc0JBQVEsOERBQUNkLDJEQUFZQTs7OzttQkFBSztRQUMxQ2MsUUFBUSxVQUFVO1FBQ2xCQSxRQUFRLFVBQVU7S0FDbkI7SUFFREEsUUFBUSxhQUFhLHNCQUFRLDhEQUFDZCwyREFBWUE7Ozs7bUJBQUs7UUFDN0NjLFFBQVEsVUFBVTtRQUNsQkEsUUFBUSxVQUFVO0tBQ25CO0lBQ0RBLFFBQVEsV0FBVyxzQkFBUSw4REFBQ2QsMkRBQVlBOzs7O21CQUFLO1FBQzNDYyxRQUFRLFVBQVU7UUFDbEJBLFFBQVEsVUFBVTtLQUNuQjtJQUVEQSxRQUFRLGtCQUFrQixzQkFBUSw4REFBQ2QsMkRBQVlBOzs7O21CQUFLO1FBQ2xEYyxRQUFRLFVBQVU7UUFDbEJBLFFBQVEsVUFBVTtLQUNuQjtDQUVGO0FBQ0QsTUFBTU0sa0JBQWtCLElBQU07O0lBQzVCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU1lLGdCQUFnQixJQUFNO1FBQzFCRCxhQUFhLENBQUNEO0lBQ2hCO0lBQ0EsTUFBTSxFQUNKRyxPQUFPLEVBQUVDLGlCQUFnQixFQUFFLEdBQzVCLEdBQUduQixnREFBYztJQUNsQixxQkFDRSw4REFBQ0Ysd0NBQU1BO1FBQ0x1QixPQUFPO1lBQ0xDLFFBQVE7WUFBc0JDLFVBQVU7UUFDMUM7OzBCQUVBLDhEQUFDaEI7Z0JBQ0NpQixTQUFTLElBQUk7Z0JBQ2JDLFdBQVc7Z0JBQ1hWLFdBQVdBO2dCQUNYTSxPQUFPO29CQUFFSyxZQUFZO2dCQUFVOztrQ0FFL0IsOERBQUMzQixzQ0FBSUE7d0JBQ0hDLE9BQU07d0JBQ04yQixxQkFBcUI7NEJBQUM7eUJBQUk7d0JBQzFCQyxNQUFLO3dCQUNMZixPQUFPQTs7Ozs7O2tDQUdULDhEQUFDWix3Q0FBTUE7d0JBQUM0QixXQUFVO3dCQUFxQkMsTUFBSzt3QkFBT0MsS0FBSzt3QkFBQ0MsU0FBU2Y7a0NBQy9ERiwwQkFBWSw4REFBQ3BCLGlFQUFrQkE7NEJBQUMwQixPQUFPO2dDQUMzQ1ksVUFBVTs0QkFDWDs7Ozs7c0RBQU8sOERBQUNyQywrREFBZ0JBOzRCQUFFeUIsT0FBTztnQ0FDL0JZLFVBQVU7NEJBQ1g7Ozs7O3FDQUFJOzs7Ozs7Ozs7Ozs7MEJBSUwsOERBQUNuQyx3Q0FBTUE7Z0JBQUMrQixXQUFVOztrQ0FDaEIsOERBQUN6Qjt3QkFDQ2lCLE9BQU87NEJBQ0xhLFNBQVM7NEJBQ1RSLFlBQVlQO3dCQUNkOzs7Ozs7a0NBRUYsOERBQUNkO3dCQUNDZ0IsT0FBTzs0QkFDTGMsUUFBUTt3QkFDVjs7MENBRUEsOERBQUN0Qyw0Q0FBVUE7Z0NBQ1R3QixPQUFPO29DQUNMYyxRQUFRO2dDQUNWOztrREFFQSw4REFBQ3RDLGlEQUFlO2tEQUFDOzs7Ozs7a0RBQ2pCLDhEQUFDQSxpREFBZTtrREFBQzs7Ozs7Ozs7Ozs7OzBDQUVuQiw4REFBQ3dDO2dDQUNDaEIsT0FBTztvQ0FDTGEsU0FBUztvQ0FDVEksV0FBVztvQ0FDWFosWUFBWVA7Z0NBQ2Q7MENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNYO0dBNUVNTDs7UUFPQWQsZ0RBQWNvQjs7O0tBUGROO0FBNkVOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0Rhc2hib2FyZC9sYXlvdXQuanM/NWRkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBGaWxlT3V0bGluZWQsXG4gIFBpZUNoYXJ0T3V0bGluZWQsXG4gIFVzZXJPdXRsaW5lZCxcbiAgRGVza3RvcE91dGxpbmVkLFxuICBUZWFtT3V0bGluZWQsXG4gIE1lbnVVbmZvbGRPdXRsaW5lZCxcbiAgTWVudUZvbGRPdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyBCcmVhZGNydW1iLCBMYXlvdXQsIE1lbnUsIHRoZW1lLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIFJlYWN0IH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyLCBTaWRlciB9ID0gTGF5b3V0O1xuZnVuY3Rpb24gZ2V0SXRlbShsYWJlbCwga2V5LCBpY29uLCBjaGlsZHJlbikge1xuICByZXR1cm4ge1xuICAgIGtleSxcbiAgICBpY29uLFxuICAgIGNoaWxkcmVuLFxuICAgIGxhYmVsLFxuICB9O1xufVxuXG5jb25zdCBpdGVtcyA9IFtcbiBcbiAgZ2V0SXRlbShcIkRhc2hiYW9yZFwiLCBcInN1YjFcIiwgPFVzZXJPdXRsaW5lZCAvPiwgW1xuICAgIGdldEl0ZW0oXCJUb21cIiwgXCIzXCIpLFxuICAgIGdldEl0ZW0oXCJCaWxsXCIsIFwiNFwiKSxcbiAgICBnZXRJdGVtKFwiQWxleFwiLCBcIjVcIiksXG4gIF0pLFxuICBnZXRJdGVtKFwiSXNzdWVzXCIsIFwic3ViMlwiLCA8VGVhbU91dGxpbmVkIC8+LCBbXG4gICAgZ2V0SXRlbShcIlRlYW0gMVwiLCBcIjZcIiksXG4gICAgZ2V0SXRlbShcIlRlYW0gMlwiLCBcIjhcIiksXG4gIF0pLFxuICBnZXRJdGVtKFwiTG9nc1wiLCBcInN1YjNcIiwgPFRlYW1PdXRsaW5lZCAvPiwgW1xuICAgIGdldEl0ZW0oXCJUZWFtIDFcIiwgXCI2XCIpLFxuICAgIGdldEl0ZW0oXCJUZWFtIDJcIiwgXCI4XCIpLFxuICBdKSxcblxuICBnZXRJdGVtKFwiUmVzdWx0XCIsIFwic3ViNFwiLCA8VGVhbU91dGxpbmVkIC8+LCBbXG4gICAgZ2V0SXRlbShcIlRlYW0gMVwiLCBcIjZcIiksXG4gICAgZ2V0SXRlbShcIlRlYW0gMlwiLCBcIjhcIiksXG4gIF0pLFxuXG4gIGdldEl0ZW0oXCJFeGNlcHRpb25cIiwgXCJzdWI1XCIsIDxUZWFtT3V0bGluZWQgLz4sIFtcbiAgICBnZXRJdGVtKFwiVGVhbSAxXCIsIFwiNlwiKSxcbiAgICBnZXRJdGVtKFwiVGVhbSAyXCIsIFwiOFwiKSxcbiAgXSksXG4gIGdldEl0ZW0oXCJBY2NvdW50XCIsIFwic3ViNlwiLCA8VGVhbU91dGxpbmVkIC8+LCBbXG4gICAgZ2V0SXRlbShcIlRlYW0gMVwiLCBcIjZcIiksXG4gICAgZ2V0SXRlbShcIlRlYW0gMlwiLCBcIjhcIiksXG4gIF0pLFxuXG4gIGdldEl0ZW0oXCJHcmFwaGljIEVkaXRvclwiLCBcInN1YjdcIiwgPFRlYW1PdXRsaW5lZCAvPiwgW1xuICAgIGdldEl0ZW0oXCJUZWFtIDFcIiwgXCI2XCIpLFxuICAgIGdldEl0ZW0oXCJUZWFtIDJcIiwgXCI4XCIpLFxuICBdKSxcbiBcbl07XG5jb25zdCBEYXNoYm9hcmRMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFNpZGViYXJUb2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpXG4gIH1cbiAgY29uc3Qge1xuICAgIHRva2VuOiB7IGNvbG9yQmdDb250YWluZXIgfSxcbiAgfSA9IHRoZW1lLnVzZVRva2VuKCk7XG4gIHJldHVybiAoXG4gICAgPExheW91dFxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgaGVpZ2h0OiBcImNhbGMoMTAwdmggLSA1MHB4KVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIlxuICAgICAgfX1cbiAgICA+XG4gICAgICA8U2lkZXJcbiAgICAgICAgdHJpZ2dlcj17bnVsbH1cbiAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2ZmZmZmZlwiIH19XG4gICAgICA+XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgdGhlbWU9XCJ3aGl0ZVwiXG4gICAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17W1wiMVwiXX1cbiAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcbiAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJzbi1zaWRlYmFyLXRvZ2dsZXJcIiB0eXBlPVwidGV4dFwiIGJsb2NrIG9uQ2xpY2s9e1NpZGViYXJUb2dnbGV9PlxuICAgICAgICAgIHtjb2xsYXBzZWQgPyA8TWVudVVuZm9sZE91dGxpbmVkIHN0eWxlPXt7XG4gICAgICAgZm9udFNpemU6IFwiMjBweFwiXG4gICAgICB9fS8+IDogPE1lbnVGb2xkT3V0bGluZWQgIHN0eWxlPXt7XG4gICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIlxuICAgICAgIH19Lz59XG4gICAgICAgICAgXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9TaWRlcj5cbiAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXRcIj5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogY29sb3JCZ0NvbnRhaW5lcixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8Q29udGVudFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW46IFwiMCAxNnB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCcmVhZGNydW1iXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXJnaW46IFwiMTZweCAwXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+VXNlcjwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5CaWxsPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgPC9CcmVhZGNydW1iPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDI0LFxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDM2MCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogY29sb3JCZ0NvbnRhaW5lcixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQmlsbCBpcyBhIGNhdC5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250ZW50PlxuICAgICAgICB7LyogPEZvb3RlclxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFudCBEZXNpZ24gwqkyMDIzIENyZWF0ZWQgYnkgQW50IFVFRFxuICAgICAgICA8L0Zvb3Rlcj4gKi99XG4gICAgICA8L0xheW91dD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRMYXlvdXQ7XG4iXSwibmFtZXMiOlsiRmlsZU91dGxpbmVkIiwiUGllQ2hhcnRPdXRsaW5lZCIsIlVzZXJPdXRsaW5lZCIsIkRlc2t0b3BPdXRsaW5lZCIsIlRlYW1PdXRsaW5lZCIsIk1lbnVVbmZvbGRPdXRsaW5lZCIsIk1lbnVGb2xkT3V0bGluZWQiLCJCcmVhZGNydW1iIiwiTGF5b3V0IiwiTWVudSIsInRoZW1lIiwiQnV0dG9uIiwidXNlU3RhdGUiLCJSZWFjdCIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJTaWRlciIsImdldEl0ZW0iLCJsYWJlbCIsImtleSIsImljb24iLCJjaGlsZHJlbiIsIml0ZW1zIiwiRGFzaGJvYXJkTGF5b3V0IiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiU2lkZWJhclRvZ2dsZSIsInRva2VuIiwiY29sb3JCZ0NvbnRhaW5lciIsInVzZVRva2VuIiwic3R5bGUiLCJoZWlnaHQiLCJvdmVyZmxvdyIsInRyaWdnZXIiLCJjb2xsYXBzaWJsZSIsImJhY2tncm91bmQiLCJkZWZhdWx0U2VsZWN0ZWRLZXlzIiwibW9kZSIsImNsYXNzTmFtZSIsInR5cGUiLCJibG9jayIsIm9uQ2xpY2siLCJmb250U2l6ZSIsInBhZGRpbmciLCJtYXJnaW4iLCJJdGVtIiwiZGl2IiwibWluSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Dashboard/layout.js\n"));

/***/ })

});