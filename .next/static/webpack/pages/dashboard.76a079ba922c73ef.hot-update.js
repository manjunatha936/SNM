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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ \"./src/Components/Dashboard/navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst { Header , Content , Footer , Sider  } = antd__WEBPACK_IMPORTED_MODULE_3__.Layout;\nfunction getItem(label, key, icon, children) {\n    return {\n        key,\n        icon,\n        children,\n        label\n    };\n}\nconst items = [\n    getItem(\"Dashbaord\", \"sub1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.DashboardOutlined, {\n        style: {\n            fontSize: \"20px\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 31,\n        columnNumber: 34\n    }, undefined), [\n        getItem(\"Tom\", \"3\"),\n        getItem(\"Bill\", \"4\"),\n        getItem(\"Alex\", \"5\")\n    ]),\n    getItem(\"Issues\", \"sub2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.FormOutlined, {\n        style: {\n            fontSize: \"20px\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 38,\n        columnNumber: 31\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Logs\", \"sub3\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UnorderedListOutlined, {\n        style: {\n            fontSize: \"20px\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 44,\n        columnNumber: 29\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Result\", \"sub4\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CheckCircleOutlined, {\n        style: {\n            fontSize: \"20px\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 51,\n        columnNumber: 31\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Exception\", \"sub5\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.WarningOutlined, {\n        style: {\n            fontSize: \"20px\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 58,\n        columnNumber: 34\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Account\", \"sub6\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserOutlined, {\n        style: {\n            fontSize: \"20px\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 64,\n        columnNumber: 32\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Graphic Editor\", \"sub7\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.HighlightOutlined, {\n        style: {\n            fontSize: \"20px\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 71,\n        columnNumber: 39\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ])\n];\nconst DashboardLayout = ()=>{\n    _s();\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const SidebarToggle = ()=>{\n        setCollapsed(!collapsed);\n    };\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        style: {\n            height: \"calc(100vh - 50px)\",\n            overflow: \"hidden\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n                width: 208,\n                trigger: null,\n                collapsible: true,\n                collapsed: collapsed,\n                style: {\n                    background: \"#ffffff\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                        className: \"sn-sidebar-menu\",\n                        theme: \"white\",\n                        defaultSelectedKeys: [\n                            \"1\"\n                        ],\n                        mode: \"inline\",\n                        items: items\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        className: \"sn-sidebar-toggler\",\n                        type: \"text\",\n                        block: true,\n                        onClick: SidebarToggle,\n                        children: collapsed ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.MenuUnfoldOutlined, {\n                            style: {\n                                fontSize: \"20px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                            lineNumber: 108,\n                            columnNumber: 34\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.MenuFoldOutlined, {\n                            style: {\n                                fontSize: \"20px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                            lineNumber: 110,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n                className: \"site-layout\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 117,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {}, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 118,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DashboardLayout, \"7hv+4Lu3oEoGQ6wQYEMHbUMVsh4=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken\n    ];\n});\n_c = DashboardLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardLayout);\nvar _c;\n$RefreshReg$(_c, \"DashboardLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9EYXNoYm9hcmQvbGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVMkI7QUFDb0M7QUFDdkI7QUFDRjtBQUt0QyxNQUFNLEVBQUVpQixPQUFNLEVBQUVDLFFBQU8sRUFBRUMsT0FBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR1Ysd0NBQU1BO0FBQ2pELFNBQVNXLFFBQVFDLEtBQUssRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRTtJQUN6QyxPQUFPO1FBQ0hGO1FBQ0FDO1FBQ0FDO1FBQ0FIO0lBQ0o7QUFDSjtBQUVBLE1BQU1JLFFBQVE7SUFFVkwsUUFBUSxhQUFhLHNCQUFRLDhEQUFDbkIsZ0VBQWlCQTtRQUFDeUIsT0FBTztZQUNuREMsVUFBVTtRQUNkOzs7OzttQkFBTztRQUNIUCxRQUFRLE9BQU87UUFDZkEsUUFBUSxRQUFRO1FBQ2hCQSxRQUFRLFFBQVE7S0FDbkI7SUFDREEsUUFBUSxVQUFVLHNCQUFRLDhEQUFDbEIsMkRBQVlBO1FBQUN3QixPQUFPO1lBQzNDQyxVQUFVO1FBQ2Q7Ozs7O21CQUFPO1FBQ0hQLFFBQVEsVUFBVTtRQUNsQkEsUUFBUSxVQUFVO0tBQ3JCO0lBQ0RBLFFBQVEsUUFBUSxzQkFBUSw4REFBQ2hCLG9FQUFxQkE7UUFBQ3NCLE9BQU87WUFDbERDLFVBQVU7UUFDZDs7Ozs7bUJBQU87UUFDSFAsUUFBUSxVQUFVO1FBQ2xCQSxRQUFRLFVBQVU7S0FDckI7SUFFREEsUUFBUSxVQUFVLHNCQUFRLDhEQUFDakIsa0VBQW1CQTtRQUFDdUIsT0FBTztZQUNsREMsVUFBVTtRQUNkOzs7OzttQkFBTztRQUNIUCxRQUFRLFVBQVU7UUFDbEJBLFFBQVEsVUFBVTtLQUNyQjtJQUVEQSxRQUFRLGFBQWEsc0JBQVEsOERBQUNmLDhEQUFlQTtRQUFDcUIsT0FBTztZQUNqREMsVUFBVTtRQUNkOzs7OzttQkFBTztRQUNIUCxRQUFRLFVBQVU7UUFDbEJBLFFBQVEsVUFBVTtLQUNyQjtJQUNEQSxRQUFRLFdBQVcsc0JBQVEsOERBQUNkLDJEQUFZQTtRQUFDb0IsT0FBTztZQUM1Q0MsVUFBVTtRQUNkOzs7OzttQkFBTztRQUNIUCxRQUFRLFVBQVU7UUFDbEJBLFFBQVEsVUFBVTtLQUNyQjtJQUVEQSxRQUFRLGtCQUFrQixzQkFBUSw4REFBQ2IsZ0VBQWlCQTtRQUFDbUIsT0FBTztZQUN4REMsVUFBVTtRQUNkOzs7OzttQkFBTztRQUNIUCxRQUFRLFVBQVU7UUFDbEJBLFFBQVEsVUFBVTtLQUNyQjtDQUVKO0FBQ0QsTUFBTVEsa0JBQWtCLElBQU07O0lBQzFCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHakIsK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNa0IsZ0JBQWdCLElBQU07UUFDeEJELGFBQWEsQ0FBQ0Q7SUFDbEI7SUFDQSxNQUFNLEVBQ0ZHLE9BQU8sRUFBRUMsaUJBQWdCLEVBQUUsR0FDOUIsR0FBR3RCLGdEQUFjO0lBQ2xCLHFCQUNJLDhEQUFDRix3Q0FBTUE7UUFDSGlCLE9BQU87WUFDSFMsUUFBUTtZQUFzQkMsVUFBVTtRQUM1Qzs7MEJBRUEsOERBQUNqQjtnQkFDR2tCLE9BQU87Z0JBQ1BDLFNBQVMsSUFBSTtnQkFDYkMsV0FBVztnQkFDWFYsV0FBV0E7Z0JBQ1hILE9BQU87b0JBQUVjLFlBQVk7Z0JBQVU7O2tDQUUvQiw4REFBQzlCLHNDQUFJQTt3QkFBQytCLFdBQVU7d0JBQ1o5QixPQUFNO3dCQUNOK0IscUJBQXFCOzRCQUFDO3lCQUFJO3dCQUMxQkMsTUFBSzt3QkFDTGxCLE9BQU9BOzs7Ozs7a0NBR1gsOERBQUNiLHdDQUFNQTt3QkFBQzZCLFdBQVU7d0JBQXFCRyxNQUFLO3dCQUFPQyxLQUFLO3dCQUFDQyxTQUFTZjtrQ0FDN0RGLDBCQUFZLDhEQUFDOUIsaUVBQWtCQTs0QkFBQzJCLE9BQU87Z0NBQ3BDQyxVQUFVOzRCQUNkOzs7OztzREFBUSw4REFBQzNCLCtEQUFnQkE7NEJBQUMwQixPQUFPO2dDQUM3QkMsVUFBVTs0QkFDZDs7Ozs7cUNBQUs7Ozs7Ozs7Ozs7OzswQkFJYiw4REFBQ2xCLHdDQUFNQTtnQkFBQ2dDLFdBQVU7O2tDQUNsQiw4REFBQzFCLG1EQUFVQTs7Ozs7a0NBQ1AsOERBQUNFOzs7Ozs7Ozs7Ozs7Ozs7OztBQWNqQjtHQXJETVc7O1FBT0VqQixnREFBY3VCOzs7S0FQaEJOO0FBc0ROLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0Rhc2hib2FyZC9sYXlvdXQuanM/NWRkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIE1lbnVVbmZvbGRPdXRsaW5lZCxcbiAgICBNZW51Rm9sZE91dGxpbmVkLFxuICAgIERhc2hib2FyZE91dGxpbmVkLFxuICAgIEZvcm1PdXRsaW5lZCxcbiAgICBDaGVja0NpcmNsZU91dGxpbmVkLFxuICAgIFVub3JkZXJlZExpc3RPdXRsaW5lZCxcbiAgICBXYXJuaW5nT3V0bGluZWQsXG4gICAgVXNlck91dGxpbmVkLFxuICAgIEhpZ2hsaWdodE91dGxpbmVkXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgQnJlYWRjcnVtYiwgTGF5b3V0LCBNZW51LCB0aGVtZSwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBSZWFjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmlHYXRpb24gZnJvbSBcIi4vbmF2aWdhdGlvblwiO1xuXG5cblxuXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyLCBTaWRlciB9ID0gTGF5b3V0O1xuZnVuY3Rpb24gZ2V0SXRlbShsYWJlbCwga2V5LCBpY29uLCBjaGlsZHJlbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGtleSxcbiAgICAgICAgaWNvbixcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGxhYmVsLFxuICAgIH07XG59XG5cbmNvbnN0IGl0ZW1zID0gW1xuXG4gICAgZ2V0SXRlbShcIkRhc2hiYW9yZFwiLCBcInN1YjFcIiwgPERhc2hib2FyZE91dGxpbmVkIHN0eWxlPXt7XG4gICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIlxuICAgIH19IC8+LCBbXG4gICAgICAgIGdldEl0ZW0oXCJUb21cIiwgXCIzXCIpLFxuICAgICAgICBnZXRJdGVtKFwiQmlsbFwiLCBcIjRcIiksXG4gICAgICAgIGdldEl0ZW0oXCJBbGV4XCIsIFwiNVwiKSxcbiAgICBdKSxcbiAgICBnZXRJdGVtKFwiSXNzdWVzXCIsIFwic3ViMlwiLCA8Rm9ybU91dGxpbmVkIHN0eWxlPXt7XG4gICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIlxuICAgIH19IC8+LCBbXG4gICAgICAgIGdldEl0ZW0oXCJUZWFtIDFcIiwgXCI2XCIpLFxuICAgICAgICBnZXRJdGVtKFwiVGVhbSAyXCIsIFwiOFwiKSxcbiAgICBdKSxcbiAgICBnZXRJdGVtKFwiTG9nc1wiLCBcInN1YjNcIiwgPFVub3JkZXJlZExpc3RPdXRsaW5lZCBzdHlsZT17e1xuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcbiAgICB9fSAvPiwgW1xuICAgICAgICBnZXRJdGVtKFwiVGVhbSAxXCIsIFwiNlwiKSxcbiAgICAgICAgZ2V0SXRlbShcIlRlYW0gMlwiLCBcIjhcIiksXG4gICAgXSksXG5cbiAgICBnZXRJdGVtKFwiUmVzdWx0XCIsIFwic3ViNFwiLCA8Q2hlY2tDaXJjbGVPdXRsaW5lZCBzdHlsZT17e1xuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcbiAgICB9fSAvPiwgW1xuICAgICAgICBnZXRJdGVtKFwiVGVhbSAxXCIsIFwiNlwiKSxcbiAgICAgICAgZ2V0SXRlbShcIlRlYW0gMlwiLCBcIjhcIiksXG4gICAgXSksXG5cbiAgICBnZXRJdGVtKFwiRXhjZXB0aW9uXCIsIFwic3ViNVwiLCA8V2FybmluZ091dGxpbmVkIHN0eWxlPXt7XG4gICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIlxuICAgIH19IC8+LCBbXG4gICAgICAgIGdldEl0ZW0oXCJUZWFtIDFcIiwgXCI2XCIpLFxuICAgICAgICBnZXRJdGVtKFwiVGVhbSAyXCIsIFwiOFwiKSxcbiAgICBdKSxcbiAgICBnZXRJdGVtKFwiQWNjb3VudFwiLCBcInN1YjZcIiwgPFVzZXJPdXRsaW5lZCBzdHlsZT17e1xuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcbiAgICB9fSAvPiwgW1xuICAgICAgICBnZXRJdGVtKFwiVGVhbSAxXCIsIFwiNlwiKSxcbiAgICAgICAgZ2V0SXRlbShcIlRlYW0gMlwiLCBcIjhcIiksXG4gICAgXSksXG5cbiAgICBnZXRJdGVtKFwiR3JhcGhpYyBFZGl0b3JcIiwgXCJzdWI3XCIsIDxIaWdobGlnaHRPdXRsaW5lZCBzdHlsZT17e1xuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcbiAgICB9fSAvPiwgW1xuICAgICAgICBnZXRJdGVtKFwiVGVhbSAxXCIsIFwiNlwiKSxcbiAgICAgICAgZ2V0SXRlbShcIlRlYW0gMlwiLCBcIjhcIiksXG4gICAgXSksXG5cbl07XG5jb25zdCBEYXNoYm9hcmRMYXlvdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBTaWRlYmFyVG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZClcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgICB0b2tlbjogeyBjb2xvckJnQ29udGFpbmVyIH0sXG4gICAgfSA9IHRoZW1lLnVzZVRva2VuKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDUwcHgpXCIsIG92ZXJmbG93OiBcImhpZGRlblwiXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8U2lkZXJcbiAgICAgICAgICAgICAgICB3aWR0aD17MjA4fVxuICAgICAgICAgICAgICAgIHRyaWdnZXI9e251bGx9XG4gICAgICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ9e2NvbGxhcHNlZH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51IGNsYXNzTmFtZT1cInNuLXNpZGViYXItbWVudVwiXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbXCIxXCJdfVxuICAgICAgICAgICAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInNuLXNpZGViYXItdG9nZ2xlclwiIHR5cGU9XCJ0ZXh0XCIgYmxvY2sgb25DbGljaz17U2lkZWJhclRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgIHtjb2xsYXBzZWQgPyA8TWVudVVuZm9sZE91dGxpbmVkIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgfX0gLz4gOiA8TWVudUZvbGRPdXRsaW5lZCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBweFwiXG4gICAgICAgICAgICAgICAgICAgIH19IC8+fVxuXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1NpZGVyPlxuICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJzaXRlLWxheW91dFwiPlxuICAgICAgICAgICAgPE5hdmlHYXRpb24gLz5cbiAgICAgICAgICAgICAgICA8Q29udGVudD5cblxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgICAgIHsvKiA8Rm9vdGVyXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQW50IERlc2lnbiDCqTIwMjMgQ3JlYXRlZCBieSBBbnQgVUVEXG4gICAgICAgIDwvRm9vdGVyPiAqL31cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZExheW91dDtcbiJdLCJuYW1lcyI6WyJNZW51VW5mb2xkT3V0bGluZWQiLCJNZW51Rm9sZE91dGxpbmVkIiwiRGFzaGJvYXJkT3V0bGluZWQiLCJGb3JtT3V0bGluZWQiLCJDaGVja0NpcmNsZU91dGxpbmVkIiwiVW5vcmRlcmVkTGlzdE91dGxpbmVkIiwiV2FybmluZ091dGxpbmVkIiwiVXNlck91dGxpbmVkIiwiSGlnaGxpZ2h0T3V0bGluZWQiLCJCcmVhZGNydW1iIiwiTGF5b3V0IiwiTWVudSIsInRoZW1lIiwiQnV0dG9uIiwidXNlU3RhdGUiLCJSZWFjdCIsIk5hdmlHYXRpb24iLCJIZWFkZXIiLCJDb250ZW50IiwiRm9vdGVyIiwiU2lkZXIiLCJnZXRJdGVtIiwibGFiZWwiLCJrZXkiLCJpY29uIiwiY2hpbGRyZW4iLCJpdGVtcyIsInN0eWxlIiwiZm9udFNpemUiLCJEYXNoYm9hcmRMYXlvdXQiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJTaWRlYmFyVG9nZ2xlIiwidG9rZW4iLCJjb2xvckJnQ29udGFpbmVyIiwidXNlVG9rZW4iLCJoZWlnaHQiLCJvdmVyZmxvdyIsIndpZHRoIiwidHJpZ2dlciIsImNvbGxhcHNpYmxlIiwiYmFja2dyb3VuZCIsImNsYXNzTmFtZSIsImRlZmF1bHRTZWxlY3RlZEtleXMiLCJtb2RlIiwidHlwZSIsImJsb2NrIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Dashboard/layout.js\n"));

/***/ })

});