"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/Header.tsx":
/*!***********************************!*\
  !*** ./app/components/Header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst Header = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center mt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-white text-5xl font-bold mb-2\",\n                    children: \"Find your table for any occasion\"\n                }, void 0, false, {\n                    fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/components/Header.tsx\",\n                    lineNumber: 5,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" text-left text-lg py-3 m-auto flex justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"State, city, or town\",\n                            className: \"rounded text-lg mr-3 p-2 w-[450px]\",\n                            value: location,\n                            onChange: (e)=>setLocation(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/components/Header.tsx\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-red-600 px-9 py-2 rounded text-white\",\n                            onClick: ()=>location === \"banana\" ? \"\" : router.push(\"/search/\"),\n                            children: \"Let's go\"\n                        }, void 0, false, {\n                            fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/components/Header.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/components/Header.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/components/Header.tsx\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/components/Header.tsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNQSxTQUFTLElBQU07SUFDbkIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBcUM7Ozs7Ozs4QkFJbkQsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQ0NDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pKLFdBQVU7NEJBQ1ZLLE9BQU9DOzRCQUNQQyxVQUFVLENBQUNDLElBQU1DLFlBQVlELEVBQUVFLE1BQU0sQ0FBQ0wsS0FBSzs7Ozs7O3NDQUU3Qyw4REFBQ007NEJBQ0NYLFdBQVU7NEJBQ1ZZLFNBQVMsSUFDUE4sYUFBYSxXQUFXLEtBQUtPLE9BQU9DLElBQUksQ0FBRSxXQUFVO3NDQUV2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRWDtLQTdCTWhCO0FBK0JOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci50c3g/ODRjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bIzBmMWY0N10gdG8tWyM1ZjY5ODRdIHAtMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTV4bCBmb250LWJvbGQgbWItMlwiPlxuICAgICAgICAgIEZpbmQgeW91ciB0YWJsZSBmb3IgYW55IG9jY2FzaW9uXG4gICAgICAgIDwvaDE+XG4gICAgICAgIHsvKiBTRUFSQ0ggQkFSICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LWxlZnQgdGV4dC1sZyBweS0zIG0tYXV0byBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXRlLCBjaXR5LCBvciB0b3duXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgdGV4dC1sZyBtci0zIHAtMiB3LVs0NTBweF1cIlxuICAgICAgICAgICAgdmFsdWU9e2xvY2F0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2NhdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNjAwIHB4LTkgcHktMiByb3VuZGVkIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgbG9jYXRpb24gPT09IFwiYmFuYW5hXCIgPyBcIlwiIDogcm91dGVyLnB1c2goYC9zZWFyY2gvYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMZXQncyBnb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIFNFQVJDSCBCQVIgKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJsb2NhdGlvbiIsIm9uQ2hhbmdlIiwiZSIsInNldExvY2F0aW9uIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInJvdXRlciIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Header.tsx\n"));

/***/ }),

/***/ "(app-client)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NavBar */ \"(app-client)/./app/components/NavBar.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ \"(app-client)/./app/components/Header.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    let router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-gray-100 min-h-screen w-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"max-w-screen-lg m-auto bg-white \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"py-3 px-36 mt-10 flex flex-wrap\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"https://resizer.otstatic.com/v2/photos/wide-huge/3/50699837.jpg\",\n                                        alt: \"Kona Grill\",\n                                        className: \"w-full h-36\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"font-bold text-2xl mb-2\",\n                                                children: \"Kona Grill\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-start\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex mb-2\",\n                                                        children: \"*****\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                                                        lineNumber: 42,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"ml-2\",\n                                                        children: \"77 Reviews\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex text-reg font-light capitalize\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"mr-3 \",\n                                                        children: \"Mexican\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"mr-1\",\n                                                        children: \"$$$$\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                                                        lineNumber: 47,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"\",\n                                                        children: \"• Clearwater\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                                                        lineNumber: 48,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm mt-1 font-bold\",\n                                                children: \" Booked 3 times today\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/roy/Documents/Udemy/NextJS/Laith-nextjs/nextjs-1/app/page.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ERfhiFpK94z5KZ7zcBzrf3SpnZs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFXTUE7QUFMc0M7QUFDWDtBQUNRO0FBQ0E7QUFJMUIsU0FBU0ssT0FBTzs7SUFDN0IsSUFBSUMsU0FBU0wsMERBQVNBO0lBQ3RCLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV6QyxxQkFDRSw4REFBQ087UUFBS0MsV0FBVTtrQkFFZCw0RUFBQ0Q7WUFBS0MsV0FBVTs7OEJBRWQsOERBQUNQLDBEQUFNQTs7Ozs7OEJBR1AsOERBQUNNOztzQ0FFQyw4REFBQ0wsMERBQU1BOzs7OztzQ0FHUCw4REFBQ087NEJBQUlELFdBQVU7c0NBRWIsNEVBQUNDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ0U7d0NBQ0NDLEtBQUk7d0NBQ0pDLEtBQUk7d0NBQ0pKLFdBQVU7Ozs7OztrREFFWiw4REFBQ0M7d0NBQUlELFdBQVU7OzBEQUNiLDhEQUFDSztnREFBR0wsV0FBVTswREFBMEI7Ozs7OzswREFDeEMsOERBQUNDO2dEQUFJRCxXQUFVOztrRUFDYiw4REFBQ0M7d0RBQUlELFdBQVU7a0VBQVk7Ozs7OztrRUFDM0IsOERBQUNNO3dEQUFFTixXQUFVO2tFQUFPOzs7Ozs7Ozs7Ozs7MERBRXRCLDhEQUFDQztnREFBSUQsV0FBVTs7a0VBQ2IsOERBQUNNO3dEQUFFTixXQUFVO2tFQUFROzs7Ozs7a0VBQ3JCLDhEQUFDTTt3REFBRU4sV0FBVTtrRUFBTzs7Ozs7O2tFQUNwQiw4REFBQ007d0RBQUVOLFdBQVU7a0VBQUc7Ozs7Ozs7Ozs7OzswREFFbEIsOERBQUNNO2dEQUFFTixXQUFVOzBEQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVd0RCxDQUFDO0dBL0N1Qkw7O1FBQ1RKLHNEQUFTQTs7O0tBREFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXJcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBsZXQgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBtaW4taC1zY3JlZW4gdy1zY3JlZW5cIj5cbiAgICAgIHsvKiBiZWxvdyB0aGUgY29ycmVjdCBpcyBtYXgtdy1zY3JlZW4tbGcgKi99XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgbS1hdXRvIGJnLXdoaXRlIFwiPlxuICAgICAgICB7LyogTkFWQkFSICovfVxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIHsvKiBOQVZCQVIgKi99XG5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgey8qIEhFQURFUiAqL31cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgey8qIEhFQURFUiAqL31cbiAgICAgICAgICB7LyogQ0FSRFMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0zIHB4LTM2IG10LTEwIGZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICB7LyogQ0FSRCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02NCBoLTcyIG0tMyByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmVzaXplci5vdHN0YXRpYy5jb20vdjIvcGhvdG9zL3dpZGUtaHVnZS8zLzUwNjk5ODM3LmpwZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiS29uYSBHcmlsbFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMzZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMVwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgbWItMlwiPktvbmEgR3JpbGw8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLTJcIj4qKioqKjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPjc3IFJldmlld3M8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQtcmVnIGZvbnQtbGlnaHQgY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItMyBcIj5NZXhpY2FuPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItMVwiPiQkJCQ8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj4mYnVsbDsgQ2xlYXJ3YXRlcjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG10LTEgZm9udC1ib2xkXCI+IEJvb2tlZCAzIHRpbWVzIHRvZGF5PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ0FSRCAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogQ0FSRFMgKi99XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIk5hdkJhciIsIkhlYWRlciIsIkhvbWUiLCJyb3V0ZXIiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImltZyIsInNyYyIsImFsdCIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});