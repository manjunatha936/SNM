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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst { Header , Content , Footer , Sider  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;\nfunction getItem(label, key, icon, children) {\n    return {\n        key,\n        icon,\n        children,\n        label\n    };\n}\nconst items = [\n    getItem(\"Option 1\", \"1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.PieChartOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 23,\n        columnNumber: 28\n    }, undefined)),\n    getItem(\"Option 2\", \"2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DesktopOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 24,\n        columnNumber: 28\n    }, undefined)),\n    getItem(\"User\", \"sub1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 25,\n        columnNumber: 27\n    }, undefined), [\n        getItem(\"Tom\", \"3\"),\n        getItem(\"Bill\", \"4\"),\n        getItem(\"Alex\", \"5\")\n    ]),\n    getItem(\"Team\", \"sub2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.TeamOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 30,\n        columnNumber: 27\n    }, undefined), [\n        getItem(\"Team 1\", \"6\"),\n        getItem(\"Team 2\", \"8\")\n    ]),\n    getItem(\"Files\", \"9\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.FileOutlined, {}, void 0, false, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 34,\n        columnNumber: 25\n    }, undefined))\n];\nconst DashboardLayout = ()=>{\n    _s();\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const SidebarToggle = ()=>{\n        setCollapsed(!collapsed);\n    };\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        style: {\n            height: \"calc(100vh - 50px)\",\n            overflow: \"hidden\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n                trigger: null,\n                collapsible: true,\n                collapsed: collapsed,\n                style: {\n                    background: \"#ffffff\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                        theme: \"white\",\n                        defaultSelectedKeys: [\n                            \"1\"\n                        ],\n                        mode: \"inline\",\n                        items: items\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        className: \"sn-sidebar-toggler\",\n                        type: \"text\",\n                        block: true,\n                        onClick: SidebarToggle,\n                        children: collapsed ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MenuUnfoldOutlined, {\n                            style: {\n                                fontSize: \"20px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                            lineNumber: 64,\n                            columnNumber: 24\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MenuFoldOutlined, {\n                            style: {\n                                fontSize: \"20px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                            lineNumber: 66,\n                            columnNumber: 14\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n                className: \"site-layout\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                        style: {\n                            padding: 0,\n                            background: colorBgContainer\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                        style: {\n                            margin: \"0 16px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb, {\n                                style: {\n                                    margin: \"16px 0\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb.Item, {\n                                        children: \"User\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb.Item, {\n                                        children: \"Bill\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    padding: 24,\n                                    minHeight: 360,\n                                    background: colorBgContainer\n                                },\n                                children: \"Bill is a cat.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: \"Ant Design \\xa92023 Created by Ant UED\"\n                    }, void 0, false, {\n                        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/umeshteli/Documents/Projects/2023/SNM/src/Components/Dashboard/layout.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DashboardLayout, \"6Y45HKjiTmuFPUO7zK5ujkUpaPs=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken\n    ];\n});\n_c = DashboardLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardLayout);\nvar _c;\n$RefreshReg$(_c, \"DashboardLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anM/NWRkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBGaWxlT3V0bGluZWQsXG4gIFBpZUNoYXJ0T3V0bGluZWQsXG4gIFVzZXJPdXRsaW5lZCxcbiAgRGVza3RvcE91dGxpbmVkLFxuICBUZWFtT3V0bGluZWQsXG4gIE1lbnVVbmZvbGRPdXRsaW5lZCxcbiAgTWVudUZvbGRPdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyBCcmVhZGNydW1iLCBMYXlvdXQsIE1lbnUsIHRoZW1lLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIFJlYWN0IH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyLCBTaWRlciB9ID0gTGF5b3V0O1xuZnVuY3Rpb24gZ2V0SXRlbShsYWJlbCwga2V5LCBpY29uLCBjaGlsZHJlbikge1xuICByZXR1cm4ge1xuICAgIGtleSxcbiAgICBpY29uLFxuICAgIGNoaWxkcmVuLFxuICAgIGxhYmVsLFxuICB9O1xufVxuXG5jb25zdCBpdGVtcyA9IFtcbiAgZ2V0SXRlbShcIk9wdGlvbiAxXCIsIFwiMVwiLCA8UGllQ2hhcnRPdXRsaW5lZCAvPiksXG4gIGdldEl0ZW0oXCJPcHRpb24gMlwiLCBcIjJcIiwgPERlc2t0b3BPdXRsaW5lZCAvPiksXG4gIGdldEl0ZW0oXCJVc2VyXCIsIFwic3ViMVwiLCA8VXNlck91dGxpbmVkIC8+LCBbXG4gICAgZ2V0SXRlbShcIlRvbVwiLCBcIjNcIiksXG4gICAgZ2V0SXRlbShcIkJpbGxcIiwgXCI0XCIpLFxuICAgIGdldEl0ZW0oXCJBbGV4XCIsIFwiNVwiKSxcbiAgXSksXG4gIGdldEl0ZW0oXCJUZWFtXCIsIFwic3ViMlwiLCA8VGVhbU91dGxpbmVkIC8+LCBbXG4gICAgZ2V0SXRlbShcIlRlYW0gMVwiLCBcIjZcIiksXG4gICAgZ2V0SXRlbShcIlRlYW0gMlwiLCBcIjhcIiksXG4gIF0pLFxuICBnZXRJdGVtKFwiRmlsZXNcIiwgXCI5XCIsIDxGaWxlT3V0bGluZWQgLz4pLFxuXTtcbmNvbnN0IERhc2hib2FyZExheW91dCA9ICgpID0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgU2lkZWJhclRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZClcbiAgfVxuICBjb25zdCB7XG4gICAgdG9rZW46IHsgY29sb3JCZ0NvbnRhaW5lciB9LFxuICB9ID0gdGhlbWUudXNlVG9rZW4oKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICBzdHlsZT17e1xuICAgICAgICBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDUwcHgpXCIsIG92ZXJmbG93OiBcImhpZGRlblwiXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxTaWRlclxuICAgICAgICB0cmlnZ2VyPXtudWxsfVxuICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzZWQ9e2NvbGxhcHNlZH1cbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjZmZmZmZmXCIgfX1cbiAgICAgID5cbiAgICAgICAgPE1lbnVcbiAgICAgICAgICB0aGVtZT1cIndoaXRlXCJcbiAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbXCIxXCJdfVxuICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxuICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgLz5cblxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInNuLXNpZGViYXItdG9nZ2xlclwiIHR5cGU9XCJ0ZXh0XCIgYmxvY2sgb25DbGljaz17U2lkZWJhclRvZ2dsZX0+XG4gICAgICAgICAge2NvbGxhcHNlZCA/IDxNZW51VW5mb2xkT3V0bGluZWQgc3R5bGU9e3tcbiAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcbiAgICAgIH19Lz4gOiA8TWVudUZvbGRPdXRsaW5lZCAgc3R5bGU9e3tcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiXG4gICAgICAgfX0vPn1cbiAgICAgICAgICBcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1NpZGVyPlxuICAgICAgPExheW91dCBjbGFzc05hbWU9XCJzaXRlLWxheW91dFwiPlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvckJnQ29udGFpbmVyLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxDb250ZW50XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpbjogXCIwIDE2cHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJyZWFkY3J1bWJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbjogXCIxNnB4IDBcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5Vc2VyPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPkJpbGw8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogMjQsXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogMzYwLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvckJnQ29udGFpbmVyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCaWxsIGlzIGEgY2F0LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBbnQgRGVzaWduIMKpMjAyMyBDcmVhdGVkIGJ5IEFudCBVRURcbiAgICAgICAgPC9Gb290ZXI+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRMYXlvdXQ7XG4iXSwibmFtZXMiOlsiRmlsZU91dGxpbmVkIiwiUGllQ2hhcnRPdXRsaW5lZCIsIlVzZXJPdXRsaW5lZCIsIkRlc2t0b3BPdXRsaW5lZCIsIlRlYW1PdXRsaW5lZCIsIk1lbnVVbmZvbGRPdXRsaW5lZCIsIk1lbnVGb2xkT3V0bGluZWQiLCJCcmVhZGNydW1iIiwiTGF5b3V0IiwiTWVudSIsInRoZW1lIiwiQnV0dG9uIiwidXNlU3RhdGUiLCJSZWFjdCIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJTaWRlciIsImdldEl0ZW0iLCJsYWJlbCIsImtleSIsImljb24iLCJjaGlsZHJlbiIsIml0ZW1zIiwiRGFzaGJvYXJkTGF5b3V0IiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiU2lkZWJhclRvZ2dsZSIsInRva2VuIiwiY29sb3JCZ0NvbnRhaW5lciIsInVzZVRva2VuIiwic3R5bGUiLCJoZWlnaHQiLCJvdmVyZmxvdyIsInRyaWdnZXIiLCJjb2xsYXBzaWJsZSIsImJhY2tncm91bmQiLCJkZWZhdWx0U2VsZWN0ZWRLZXlzIiwibW9kZSIsImNsYXNzTmFtZSIsInR5cGUiLCJibG9jayIsIm9uQ2xpY2siLCJmb250U2l6ZSIsInBhZGRpbmciLCJtYXJnaW4iLCJJdGVtIiwiZGl2IiwibWluSGVpZ2h0IiwidGV4dEFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Dashboard/layout.js\n"));

/***/ })

});