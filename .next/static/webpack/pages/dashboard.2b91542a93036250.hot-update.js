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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ \"./src/Components/Dashboard/navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst { Header , Content , Footer , Sider  } = antd__WEBPACK_IMPORTED_MODULE_3__.Layout;\nfunction getItem(label, key, icon, children) {\n    return {\n        key,\n        icon,\n        children,\n        label\n    };\n}\nconst items = [\n    getItem(\"Dashbaord\", \"sub1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.DashboardOutlined, {\n        style: {\n            fontSize: \"20px\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 31,\n        columnNumber: 34\n    }, undefined), [\n        getItem(\"Tom\", \"3\"),\n        getItem(\"Bill\", \"4\"),\n        getItem(\"Alex\", \"5\")\n    ]),\n    getItem(\"Issues\", \"sub2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.FormOutlined, {\n        style: {\n            fontSize: \"20px\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 38,\n        columnNumber: 31\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Logs\", \"sub3\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UnorderedListOutlined, {\n        style: {\n            fontSize: \"20px\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 44,\n        columnNumber: 29\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Result\", \"sub4\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CheckCircleOutlined, {\n        style: {\n            fontSize: \"20px\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 51,\n        columnNumber: 31\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Exception\", \"sub5\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.WarningOutlined, {\n        style: {\n            fontSize: \"20px\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 58,\n        columnNumber: 34\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Account\", \"sub6\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserOutlined, {\n        style: {\n            fontSize: \"20px\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 64,\n        columnNumber: 32\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Graphic Editor\", \"sub7\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.HighlightOutlined, {\n        style: {\n            fontSize: \"20px\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 71,\n        columnNumber: 39\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ])\n];\nconst DashboardLayout = ()=>{\n    _s();\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const SidebarToggle = ()=>{\n        setCollapsed(!collapsed);\n    };\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        style: {\n            height: \"calc(100vh - 62px)\",\n            overflow: \"hidden\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n                className: \"sn-sidebar\",\n                width: 208,\n                trigger: null,\n                collapsible: true,\n                collapsed: collapsed,\n                style: {\n                    background: \"#ffffff\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                        className: \"sn-sidebar-menu\",\n                        theme: \"white\",\n                        defaultSelectedKeys: [\n                            \"1\"\n                        ],\n                        mode: \"inline\",\n                        items: items\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        className: \"sn-sidebar-toggler\",\n                        type: \"text\",\n                        block: true,\n                        onClick: SidebarToggle,\n                        children: collapsed ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.MenuUnfoldOutlined, {\n                            style: {\n                                fontSize: \"20px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                            lineNumber: 109,\n                            columnNumber: 34\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.MenuFoldOutlined, {\n                            style: {\n                                fontSize: \"20px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                            lineNumber: 111,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 108,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n                className: \"site-layout\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 118,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {}, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 119,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DashboardLayout, \"7hv+4Lu3oEoGQ6wQYEMHbUMVsh4=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken\n    ];\n});\n_c = DashboardLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardLayout);\nvar _c;\n$RefreshReg$(_c, \"DashboardLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7MEJBSWIsOERBQUNsQix3Q0FBTUE7Z0JBQUM0QixXQUFVOztrQ0FDbEIsOERBQUN0QixtREFBVUE7Ozs7O2tDQUNQLDhEQUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlakI7R0F2RE1XOztRQU9FakIsZ0RBQWN1Qjs7O0tBUGhCTjtBQXdETiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9EYXNoYm9hcmQvbGF5b3V0LmpzPzVkZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBNZW51VW5mb2xkT3V0bGluZWQsXG4gICAgTWVudUZvbGRPdXRsaW5lZCxcbiAgICBEYXNoYm9hcmRPdXRsaW5lZCxcbiAgICBGb3JtT3V0bGluZWQsXG4gICAgQ2hlY2tDaXJjbGVPdXRsaW5lZCxcbiAgICBVbm9yZGVyZWRMaXN0T3V0bGluZWQsXG4gICAgV2FybmluZ091dGxpbmVkLFxuICAgIFVzZXJPdXRsaW5lZCxcbiAgICBIaWdobGlnaHRPdXRsaW5lZFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IExheW91dCwgTWVudSwgdGhlbWUsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgUmVhY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZpR2F0aW9uIGZyb20gXCIuL25hdmlnYXRpb25cIjtcblxuXG5cblxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciwgU2lkZXIgfSA9IExheW91dDtcbmZ1bmN0aW9uIGdldEl0ZW0obGFiZWwsIGtleSwgaWNvbiwgY2hpbGRyZW4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXksXG4gICAgICAgIGljb24sXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBsYWJlbCxcbiAgICB9O1xufVxuXG5jb25zdCBpdGVtcyA9IFtcblxuICAgIGdldEl0ZW0oXCJEYXNoYmFvcmRcIiwgXCJzdWIxXCIsIDxEYXNoYm9hcmRPdXRsaW5lZCBzdHlsZT17e1xuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcbiAgICB9fSAvPiwgW1xuICAgICAgICBnZXRJdGVtKFwiVG9tXCIsIFwiM1wiKSxcbiAgICAgICAgZ2V0SXRlbShcIkJpbGxcIiwgXCI0XCIpLFxuICAgICAgICBnZXRJdGVtKFwiQWxleFwiLCBcIjVcIiksXG4gICAgXSksXG4gICAgZ2V0SXRlbShcIklzc3Vlc1wiLCBcInN1YjJcIiwgPEZvcm1PdXRsaW5lZCBzdHlsZT17e1xuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcbiAgICB9fSAvPiwgW1xuICAgICAgICBnZXRJdGVtKFwiVGVhbSAxXCIsIFwiNlwiKSxcbiAgICAgICAgZ2V0SXRlbShcIlRlYW0gMlwiLCBcIjhcIiksXG4gICAgXSksXG4gICAgZ2V0SXRlbShcIkxvZ3NcIiwgXCJzdWIzXCIsIDxVbm9yZGVyZWRMaXN0T3V0bGluZWQgc3R5bGU9e3tcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiXG4gICAgfX0gLz4sIFtcbiAgICAgICAgZ2V0SXRlbShcIlRlYW0gMVwiLCBcIjZcIiksXG4gICAgICAgIGdldEl0ZW0oXCJUZWFtIDJcIiwgXCI4XCIpLFxuICAgIF0pLFxuXG4gICAgZ2V0SXRlbShcIlJlc3VsdFwiLCBcInN1YjRcIiwgPENoZWNrQ2lyY2xlT3V0bGluZWQgc3R5bGU9e3tcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiXG4gICAgfX0gLz4sIFtcbiAgICAgICAgZ2V0SXRlbShcIlRlYW0gMVwiLCBcIjZcIiksXG4gICAgICAgIGdldEl0ZW0oXCJUZWFtIDJcIiwgXCI4XCIpLFxuICAgIF0pLFxuXG4gICAgZ2V0SXRlbShcIkV4Y2VwdGlvblwiLCBcInN1YjVcIiwgPFdhcm5pbmdPdXRsaW5lZCBzdHlsZT17e1xuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcbiAgICB9fSAvPiwgW1xuICAgICAgICBnZXRJdGVtKFwiVGVhbSAxXCIsIFwiNlwiKSxcbiAgICAgICAgZ2V0SXRlbShcIlRlYW0gMlwiLCBcIjhcIiksXG4gICAgXSksXG4gICAgZ2V0SXRlbShcIkFjY291bnRcIiwgXCJzdWI2XCIsIDxVc2VyT3V0bGluZWQgc3R5bGU9e3tcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiXG4gICAgfX0gLz4sIFtcbiAgICAgICAgZ2V0SXRlbShcIlRlYW0gMVwiLCBcIjZcIiksXG4gICAgICAgIGdldEl0ZW0oXCJUZWFtIDJcIiwgXCI4XCIpLFxuICAgIF0pLFxuXG4gICAgZ2V0SXRlbShcIkdyYXBoaWMgRWRpdG9yXCIsIFwic3ViN1wiLCA8SGlnaGxpZ2h0T3V0bGluZWQgc3R5bGU9e3tcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiXG4gICAgfX0gLz4sIFtcbiAgICAgICAgZ2V0SXRlbShcIlRlYW0gMVwiLCBcIjZcIiksXG4gICAgICAgIGdldEl0ZW0oXCJUZWFtIDJcIiwgXCI4XCIpLFxuICAgIF0pLFxuXG5dO1xuY29uc3QgRGFzaGJvYXJkTGF5b3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgU2lkZWJhclRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpXG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgICAgdG9rZW46IHsgY29sb3JCZ0NvbnRhaW5lciB9LFxuICAgIH0gPSB0aGVtZS51c2VUb2tlbigpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXRcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcImNhbGMoMTAwdmggLSA2MnB4KVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPFNpZGVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic24tc2lkZWJhclwiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezIwOH1cbiAgICAgICAgICAgICAgICB0cmlnZ2VyPXtudWxsfVxuICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjZmZmZmZmXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJzbi1zaWRlYmFyLW1lbnVcIlxuICAgICAgICAgICAgICAgICAgICB0aGVtZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17W1wiMVwiXX1cbiAgICAgICAgICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJzbi1zaWRlYmFyLXRvZ2dsZXJcIiB0eXBlPVwidGV4dFwiIGJsb2NrIG9uQ2xpY2s9e1NpZGViYXJUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICB7Y29sbGFwc2VkID8gPE1lbnVVbmZvbGRPdXRsaW5lZCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBweFwiXG4gICAgICAgICAgICAgICAgICAgIH19IC8+IDogPE1lbnVGb2xkT3V0bGluZWQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIlxuICAgICAgICAgICAgICAgICAgICB9fSAvPn1cblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TaWRlcj5cbiAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXRcIj5cbiAgICAgICAgICAgIDxOYXZpR2F0aW9uIC8+XG4gICAgICAgICAgICAgICAgPENvbnRlbnRcbj5cblxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgICAgIHsvKiA8Rm9vdGVyXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQW50IERlc2lnbiDCqTIwMjMgQ3JlYXRlZCBieSBBbnQgVUVEXG4gICAgICAgIDwvRm9vdGVyPiAqL31cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZExheW91dDtcbiJdLCJuYW1lcyI6WyJNZW51VW5mb2xkT3V0bGluZWQiLCJNZW51Rm9sZE91dGxpbmVkIiwiRGFzaGJvYXJkT3V0bGluZWQiLCJGb3JtT3V0bGluZWQiLCJDaGVja0NpcmNsZU91dGxpbmVkIiwiVW5vcmRlcmVkTGlzdE91dGxpbmVkIiwiV2FybmluZ091dGxpbmVkIiwiVXNlck91dGxpbmVkIiwiSGlnaGxpZ2h0T3V0bGluZWQiLCJMYXlvdXQiLCJNZW51IiwidGhlbWUiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiTmF2aUdhdGlvbiIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJTaWRlciIsImdldEl0ZW0iLCJsYWJlbCIsImtleSIsImljb24iLCJjaGlsZHJlbiIsIml0ZW1zIiwic3R5bGUiLCJmb250U2l6ZSIsIkRhc2hib2FyZExheW91dCIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsIlNpZGViYXJUb2dnbGUiLCJ0b2tlbiIsImNvbG9yQmdDb250YWluZXIiLCJ1c2VUb2tlbiIsImhlaWdodCIsIm92ZXJmbG93IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJ0cmlnZ2VyIiwiY29sbGFwc2libGUiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdFNlbGVjdGVkS2V5cyIsIm1vZGUiLCJ0eXBlIiwiYmxvY2siLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Dashboard/layout.js\n"));

/***/ })

});