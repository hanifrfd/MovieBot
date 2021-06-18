webpackHotUpdate_N_E("pages/search/[search]",{

/***/ "./data/seach_data.js":
/*!****************************!*\
  !*** ./data/seach_data.js ***!
  \****************************/
/*! exports provided: getSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearch", function() { return getSearch; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _s = $RefreshSig$();




var fetcher = function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
};

var getSearch = function getSearch(keyword) {
  _s();

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])("https://api.themoviedb.org/3/search/".concat(keyword, "?api_key=ec4bdffc57939748a8ae19503628e514&page=1"), fetcher),
      search = _useSWR.data,
      error = _useSWR.error;

  var datas = "https://api.themoviedb.org/3/search/".concat(keyword, "?api_key=ec4bdffc57939748a8ae19503628e514&page=1");
  return {
    search: search,
    error: error,
    datas: datas
  };
};

_s(getSearch, "SfwAO7MAq8RKAc607UbFnqWjxsw=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9zZWFjaF9kYXRhLmpzIl0sIm5hbWVzIjpbImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsImdldFNlYXJjaCIsImtleXdvcmQiLCJ1c2VTV1IiLCJzZWFyY2giLCJkYXRhIiwiZXJyb3IiLCJkYXRhcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLEdBQUc7QUFBQSxTQUFJQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLElBQUYsRUFBSjtBQUFBLEdBQWpCLENBQUo7QUFBQSxDQUFuQjs7QUFHTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxPQUFELEVBQWE7QUFBQTs7QUFBQSxnQkFDSEMsbURBQU0sK0NBQXdDRCxPQUF4Qyx1REFBa0dQLE9BQWxHLENBREg7QUFBQSxNQUNwQlMsTUFEb0IsV0FDM0JDLElBRDJCO0FBQUEsTUFDWkMsS0FEWSxXQUNaQSxLQURZOztBQUVsQyxNQUFNQyxLQUFLLGlEQUEwQ0wsT0FBMUMscURBQVg7QUFDQSxTQUFPO0FBQUNFLFVBQU0sRUFBTkEsTUFBRDtBQUFTRSxTQUFLLEVBQUxBLEtBQVQ7QUFBZ0JDLFNBQUssRUFBTEE7QUFBaEIsR0FBUDtBQUNILENBSk07O0dBQU1OLFM7VUFDc0JFLDJDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC9bc2VhcmNoXS44MzVjMGJkNzRlMDIwZGQyNmVjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuY29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VhcmNoID0gKGtleXdvcmQpID0+IHsgICAgXHJcbiAgICBjb25zdCB7ZGF0YSA6IHNlYXJjaCwgZXJyb3J9ID0gdXNlU1dSKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC8ke2tleXdvcmR9P2FwaV9rZXk9ZWM0YmRmZmM1NzkzOTc0OGE4YWUxOTUwMzYyOGU1MTQmcGFnZT0xYCxmZXRjaGVyKTtcclxuICAgIGNvbnN0IGRhdGFzID0gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoLyR7a2V5d29yZH0/YXBpX2tleT1lYzRiZGZmYzU3OTM5NzQ4YThhZTE5NTAzNjI4ZTUxNCZwYWdlPTFgO1xyXG4gICAgcmV0dXJuIHtzZWFyY2gsIGVycm9yLCBkYXRhc307XHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9