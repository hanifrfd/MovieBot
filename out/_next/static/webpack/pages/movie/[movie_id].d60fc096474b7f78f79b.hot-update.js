webpackHotUpdate_N_E("pages/movie/[movie_id]",{

/***/ "./component/Jumbotron.js":
/*!********************************!*\
  !*** ./component/Jumbotron.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Jumbotron; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "G:\\Project\\Project\\Web\\REACT\\moviebot\\nextjs\\moviebot\\component\\Jumbotron.js",
    _s = $RefreshSig$();




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    jumbotron: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
      backgroundColor: 'silver',
      // backgroundImage: `url(${'/1.png'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }, theme.breakpoints.down('sm'), {
      height: '35vh',
      textAlign: 'center'
    })
  };
});
function Jumbotron(_ref) {
  _s();

  var img = _ref.img;
  var classes = useStyles();
  var background = img ? "url(\"https://image.tmdb.org/t/p/original".concat(img.backdrop_path, "\")") : "url(".concat('/1.png', ")");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      container: true,
      className: classes.jumbotron,
      style: {
        backgroundImage: background
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(Jumbotron, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Jumbotron;

var _c;

$RefreshReg$(_c, "Jumbotron");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0p1bWJvdHJvbi5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJqdW1ib3Ryb24iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwidGV4dEFsaWduIiwiSnVtYm90cm9uIiwiaW1nIiwiY2xhc3NlcyIsImJhY2tncm91bmQiLCJiYWNrZHJvcF9wYXRoIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FEaUM7QUFJdkNDLGFBQVMsRUFBRTtBQUNQQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxvQkFBYyxFQUFFLFFBRlg7QUFHTEMsZ0JBQVUsRUFBRSxRQUhQO0FBSUxDLFlBQU0sRUFBRSxNQUpIO0FBS0xDLHFCQUFlLEVBQUUsUUFMWjtBQU1MO0FBQ0FDLG9CQUFjLEVBQUUsT0FQWDtBQVFMQyx3QkFBa0IsRUFBRSxlQVJmO0FBU0xDLHNCQUFnQixFQUFFO0FBVGIsT0FVSlgsS0FBSyxDQUFDWSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQVZJLEVBVTJCO0FBQzlCTixZQUFNLEVBQUUsTUFEc0I7QUFFOUJPLGVBQVMsRUFBRTtBQUZtQixLQVYzQjtBQUo4QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQXFCZSxTQUFTQyxTQUFULE9BQTBCO0FBQUE7O0FBQUEsTUFBTkMsR0FBTSxRQUFOQSxHQUFNO0FBQ3ZDLE1BQU1DLE9BQU8sR0FBR25CLFNBQVMsRUFBekI7QUFFQSxNQUFNb0IsVUFBVSxHQUFHRixHQUFHLHNEQUE4Q0EsR0FBRyxDQUFDRyxhQUFsRCx5QkFBNkUsUUFBN0UsTUFBdEI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUYsT0FBTyxDQUFDaEIsSUFBeEI7QUFBQSwyQkFDRSxxRUFBQyxzREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixlQUFTLEVBQUVnQixPQUFPLENBQUNkLFNBQW5DO0FBQStDLFdBQUssRUFBRTtBQUFFaUIsdUJBQWUsRUFBRUY7QUFBbkI7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztHQVp1QkgsUztVQUNOakIsUzs7O0tBRE1pQixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21vdmllL1ttb3ZpZV9pZF0uZDYwZmMwOTY0NzRiN2Y3OGY3OWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBcclxuICAgIEdyaWQsXHJcbiAgICBUeXBvZ3JhcGh5XHJcbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIGp1bWJvdHJvbjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGhlaWdodDogJzcwdmgnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdzaWx2ZXInLFxyXG4gICAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsnLzEucG5nJ30pYCxcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7ICAgICAgICBcclxuICAgICAgICBoZWlnaHQ6ICczNXZoJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICAgIH0sICAgICAgXHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKdW1ib3Ryb24oe2ltZ30pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IGJhY2tncm91bmQgPSBpbWcgPyBgdXJsKFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwke2ltZy5iYWNrZHJvcF9wYXRofVwiKWAgOiBgdXJsKCR7Jy8xLnBuZyd9KWA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5qdW1ib3Ryb259ICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGJhY2tncm91bmQgfX0+XHJcbiAgICAgICAgey8qIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPldlbGNvbWUgdG8gbW92aWVib3Q8L1R5cG9ncmFwaHk+ICovfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=