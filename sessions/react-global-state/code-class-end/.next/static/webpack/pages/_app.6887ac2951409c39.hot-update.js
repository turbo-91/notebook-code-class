"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const initialAnimals = [\n        {\n            id: 1,\n            name: \"Cats\",\n            count: 0\n        },\n        {\n            id: 2,\n            name: \"Dogs\",\n            count: 0\n        },\n        {\n            id: 3,\n            name: \"Sheep\",\n            count: 0\n        },\n        {\n            id: 4,\n            name: \"Dragons\",\n            count: 0\n        }\n    ];\n    const [animals, setAnimals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialAnimals);\n    function handleAdd(_id) {\n        console.log(\"clicked on Add\", _id);\n        // setCount(count + 1);\n        const newAnimals = animals.map((animal)=>animal.id === _id ? {\n                ...animal,\n                count: animal.count + 1\n            } : animal);\n        setAnimals(newAnimals);\n    }\n    function handleSubtract(_id) {\n        console.log(\"clicked on Subtract\", _id);\n        // setCount(Math.max(0, count - 1));\n        const newAnimals = animals.map((animal)=>animal.id === _id ? {\n                ...animal,\n                count: Math.max(0, animal.count - 1)\n            } : animal);\n        setAnimals(newAnimals);\n    }\n    const totalCount = animals.map((animal)=>animal.count).reduce((cur, acc)=>acc + cur);\n    console.log(\"totalCount\", totalCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/klausstille/Desktop/encounters/NEW_CURRICULUM/React-global-state/demo-start/pages/_app.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps,\n                    animals: animals,\n                    handleAdd: handleAdd,\n                    handleSubtract: handleSubtract\n                }, void 0, false, {\n                    fileName: \"/Users/klausstille/Desktop/encounters/NEW_CURRICULUM/React-global-state/demo-start/pages/_app.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klausstille/Desktop/encounters/NEW_CURRICULUM/React-global-state/demo-start/pages/_app.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"O0v1czapm1xqrN/AAdQ5pCMsITU=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBaUM7QUFDRztBQUNNO0FBRTNCLFNBQVNHLElBQUksS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4Qjs7SUFDeEIsTUFBTUMsaUJBQWlCO1FBQ25CO1lBQUVDLElBQUk7WUFBR0MsTUFBTTtZQUFRQyxPQUFPO1FBQUU7UUFDaEM7WUFBRUYsSUFBSTtZQUFHQyxNQUFNO1lBQVFDLE9BQU87UUFBRTtRQUNoQztZQUFFRixJQUFJO1lBQUdDLE1BQU07WUFBU0MsT0FBTztRQUFFO1FBQ2pDO1lBQUVGLElBQUk7WUFBR0MsTUFBTTtZQUFXQyxPQUFPO1FBQUU7S0FDdEM7SUFDRCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUNNO0lBRXZDLFNBQVNNLFVBQVVDLEdBQUcsRUFBRTtRQUNwQkMsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQkY7UUFDOUIsdUJBQXVCO1FBQ3ZCLE1BQU1HLGFBQWFOLFFBQVFPLEdBQUcsQ0FBQyxDQUFDQyxTQUM1QkEsT0FBT1gsRUFBRSxLQUFLTSxNQUFNO2dCQUFFLEdBQUdLLE1BQU07Z0JBQUVULE9BQU9TLE9BQU9ULEtBQUssR0FBRztZQUFFLElBQUlTLE1BQU07UUFFdkVQLFdBQVdLO0lBQ2Y7SUFFQSxTQUFTRyxlQUFlTixHQUFHLEVBQUU7UUFDekJDLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJGO1FBQ25DLG9DQUFvQztRQUNwQyxNQUFNRyxhQUFhTixRQUFRTyxHQUFHLENBQUMsQ0FBQ0MsU0FDNUJBLE9BQU9YLEVBQUUsS0FBS00sTUFDUjtnQkFBRSxHQUFHSyxNQUFNO2dCQUFFVCxPQUFPVyxLQUFLQyxHQUFHLENBQUMsR0FBR0gsT0FBT1QsS0FBSyxHQUFHO1lBQUcsSUFDbERTLE1BQU07UUFFaEJQLFdBQVdLO0lBQ2Y7SUFFQSxNQUFNTSxhQUFhWixRQUNkTyxHQUFHLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT1QsS0FBSyxFQUM1QmMsTUFBTSxDQUFDLENBQUNDLEtBQUtDLE1BQVFBLE1BQU1EO0lBQ2hDVixRQUFRQyxHQUFHLENBQUMsY0FBY087SUFFMUIscUJBQ0k7OzBCQUNJLDhEQUFDckIsK0NBQVdBOzs7OzswQkFDWiw4REFBQ0MsMERBQU1BOzBCQUNILDRFQUFDRTtvQkFDSSxHQUFHQyxTQUFTO29CQUNiSyxTQUFTQTtvQkFDVEUsV0FBV0E7b0JBQ1hPLGdCQUFnQkE7Ozs7Ozs7Ozs7Ozs7QUFLcEMsQ0FBQztHQS9DdUJoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgY29uc3QgaW5pdGlhbEFuaW1hbHMgPSBbXG4gICAgICAgIHsgaWQ6IDEsIG5hbWU6IFwiQ2F0c1wiLCBjb3VudDogMCB9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiBcIkRvZ3NcIiwgY291bnQ6IDAgfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogXCJTaGVlcFwiLCBjb3VudDogMCB9LFxuICAgICAgICB7IGlkOiA0LCBuYW1lOiBcIkRyYWdvbnNcIiwgY291bnQ6IDAgfSxcbiAgICBdO1xuICAgIGNvbnN0IFthbmltYWxzLCBzZXRBbmltYWxzXSA9IHVzZVN0YXRlKGluaXRpYWxBbmltYWxzKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkZChfaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkIG9uIEFkZFwiLCBfaWQpO1xuICAgICAgICAvLyBzZXRDb3VudChjb3VudCArIDEpO1xuICAgICAgICBjb25zdCBuZXdBbmltYWxzID0gYW5pbWFscy5tYXAoKGFuaW1hbCkgPT5cbiAgICAgICAgICAgIGFuaW1hbC5pZCA9PT0gX2lkID8geyAuLi5hbmltYWwsIGNvdW50OiBhbmltYWwuY291bnQgKyAxIH0gOiBhbmltYWxcbiAgICAgICAgKTtcbiAgICAgICAgc2V0QW5pbWFscyhuZXdBbmltYWxzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJ0cmFjdChfaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkIG9uIFN1YnRyYWN0XCIsIF9pZCk7XG4gICAgICAgIC8vIHNldENvdW50KE1hdGgubWF4KDAsIGNvdW50IC0gMSkpO1xuICAgICAgICBjb25zdCBuZXdBbmltYWxzID0gYW5pbWFscy5tYXAoKGFuaW1hbCkgPT5cbiAgICAgICAgICAgIGFuaW1hbC5pZCA9PT0gX2lkXG4gICAgICAgICAgICAgICAgPyB7IC4uLmFuaW1hbCwgY291bnQ6IE1hdGgubWF4KDAsIGFuaW1hbC5jb3VudCAtIDEpIH1cbiAgICAgICAgICAgICAgICA6IGFuaW1hbFxuICAgICAgICApO1xuICAgICAgICBzZXRBbmltYWxzKG5ld0FuaW1hbHMpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvdGFsQ291bnQgPSBhbmltYWxzXG4gICAgICAgIC5tYXAoKGFuaW1hbCkgPT4gYW5pbWFsLmNvdW50KVxuICAgICAgICAucmVkdWNlKChjdXIsIGFjYykgPT4gYWNjICsgY3VyKTtcbiAgICBjb25zb2xlLmxvZyhcInRvdGFsQ291bnRcIiwgdG90YWxDb3VudCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgYW5pbWFscz17YW5pbWFsc31cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWRkPXtoYW5kbGVBZGR9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1YnRyYWN0PXtoYW5kbGVTdWJ0cmFjdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJHbG9iYWxTdHlsZSIsIkxheW91dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImluaXRpYWxBbmltYWxzIiwiaWQiLCJuYW1lIiwiY291bnQiLCJhbmltYWxzIiwic2V0QW5pbWFscyIsImhhbmRsZUFkZCIsIl9pZCIsImNvbnNvbGUiLCJsb2ciLCJuZXdBbmltYWxzIiwibWFwIiwiYW5pbWFsIiwiaGFuZGxlU3VidHJhY3QiLCJNYXRoIiwibWF4IiwidG90YWxDb3VudCIsInJlZHVjZSIsImN1ciIsImFjYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});