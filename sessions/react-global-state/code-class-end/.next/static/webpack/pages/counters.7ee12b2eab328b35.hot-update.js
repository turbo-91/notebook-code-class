"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/counters",{

/***/ "./pages/counters.js":
/*!***************************!*\
  !*** ./pages/counters.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CountersPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_InfoBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InfoBox */ \"./components/InfoBox.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation.js\");\n/* harmony import */ var _components_CounterList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CounterList */ \"./components/CounterList.js\");\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Link */ \"./components/Link.js\");\n\n\n\n\n\nfunction CountersPage(param) {\n    let { animals  } = param;\n    console.log(\"animals\", animals);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                href: \"/\",\n                children: \"← Back\"\n            }, void 0, false, {\n                fileName: \"/Users/klausstille/Desktop/encounters/NEW_CURRICULUM/React-global-state/demo-start/pages/counters.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CounterList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/klausstille/Desktop/encounters/NEW_CURRICULUM/React-global-state/demo-start/pages/counters.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InfoBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/klausstille/Desktop/encounters/NEW_CURRICULUM/React-global-state/demo-start/pages/counters.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/klausstille/Desktop/encounters/NEW_CURRICULUM/React-global-state/demo-start/pages/counters.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = CountersPage;\nvar _c;\n$RefreshReg$(_c, \"CountersPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3VudGVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDTTtBQUNFO0FBQ2Q7QUFFdkIsU0FBU0ksYUFBYSxLQUFXLEVBQUU7UUFBYixFQUFFQyxRQUFPLEVBQUUsR0FBWDtJQUNqQ0MsUUFBUUMsR0FBRyxDQUFDLFdBQVdGO0lBQ3ZCLHFCQUNJOzswQkFDSSw4REFBQ0Ysd0RBQUlBO2dCQUFDSyxNQUFLOzBCQUFJOzs7Ozs7MEJBRWYsOERBQUNOLCtEQUFXQTs7Ozs7MEJBRVosOERBQUNGLDJEQUFPQTs7Ozs7MEJBRVIsOERBQUNDLDhEQUFVQTs7Ozs7OztBQUd2QixDQUFDO0tBYnVCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb3VudGVycy5qcz9lNDg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbmZvQm94IGZyb20gXCIuLi9jb21wb25lbnRzL0luZm9Cb3hcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCBDb3VudGVyTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudGVyTGlzdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudGVyc1BhZ2UoeyBhbmltYWxzIH0pIHtcbiAgICBjb25zb2xlLmxvZyhcImFuaW1hbHNcIiwgYW5pbWFscyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+4oaQIEJhY2s8L0xpbms+XG5cbiAgICAgICAgICAgIDxDb3VudGVyTGlzdCAvPlxuXG4gICAgICAgICAgICA8SW5mb0JveCAvPlxuXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkluZm9Cb3giLCJOYXZpZ2F0aW9uIiwiQ291bnRlckxpc3QiLCJMaW5rIiwiQ291bnRlcnNQYWdlIiwiYW5pbWFscyIsImNvbnNvbGUiLCJsb2ciLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/counters.js\n"));

/***/ })

});