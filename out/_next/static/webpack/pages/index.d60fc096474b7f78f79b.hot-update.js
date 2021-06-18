webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0p1bWJvdHJvbi5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJqdW1ib3Ryb24iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwidGV4dEFsaWduIiwiSnVtYm90cm9uIiwiaW1nIiwiY2xhc3NlcyIsImJhY2tncm91bmQiLCJiYWNrZHJvcF9wYXRoIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FEaUM7QUFJdkNDLGFBQVMsRUFBRTtBQUNQQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxvQkFBYyxFQUFFLFFBRlg7QUFHTEMsZ0JBQVUsRUFBRSxRQUhQO0FBSUxDLFlBQU0sRUFBRSxNQUpIO0FBS0xDLHFCQUFlLEVBQUUsUUFMWjtBQU1MO0FBQ0FDLG9CQUFjLEVBQUUsT0FQWDtBQVFMQyx3QkFBa0IsRUFBRSxlQVJmO0FBU0xDLHNCQUFnQixFQUFFO0FBVGIsT0FVSlgsS0FBSyxDQUFDWSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQVZJLEVBVTJCO0FBQzlCTixZQUFNLEVBQUUsTUFEc0I7QUFFOUJPLGVBQVMsRUFBRTtBQUZtQixLQVYzQjtBQUo4QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQXFCZSxTQUFTQyxTQUFULE9BQTBCO0FBQUE7O0FBQUEsTUFBTkMsR0FBTSxRQUFOQSxHQUFNO0FBQ3ZDLE1BQU1DLE9BQU8sR0FBR25CLFNBQVMsRUFBekI7QUFFQSxNQUFNb0IsVUFBVSxHQUFHRixHQUFHLHNEQUE4Q0EsR0FBRyxDQUFDRyxhQUFsRCx5QkFBNkUsUUFBN0UsTUFBdEI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUYsT0FBTyxDQUFDaEIsSUFBeEI7QUFBQSwyQkFDRSxxRUFBQyxzREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixlQUFTLEVBQUVnQixPQUFPLENBQUNkLFNBQW5DO0FBQStDLFdBQUssRUFBRTtBQUFFaUIsdUJBQWUsRUFBRUY7QUFBbkI7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztHQVp1QkgsUztVQUNOakIsUzs7O0tBRE1pQixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ2MGZjMDk2NDc0YjdmNzhmNzliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgXHJcbiAgICBHcmlkLFxyXG4gICAgVHlwb2dyYXBoeVxyXG4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBqdW1ib3Ryb246IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBoZWlnaHQ6ICc3MHZoJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnc2lsdmVyJyxcclxuICAgICAgLy8gYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Jy8xLnBuZyd9KWAsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXTogeyAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0OiAnMzV2aCcsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgICB9LCAgICAgIFxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSnVtYm90cm9uKHtpbWd9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBiYWNrZ3JvdW5kID0gaW1nID8gYHVybChcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsJHtpbWcuYmFja2Ryb3BfcGF0aH1cIilgIDogYHVybCgkeycvMS5wbmcnfSlgO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuanVtYm90cm9ufSAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBiYWNrZ3JvdW5kIH19PlxyXG4gICAgICAgIHsvKiA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5XZWxjb21lIHRvIG1vdmllYm90PC9UeXBvZ3JhcGh5PiAqL31cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9