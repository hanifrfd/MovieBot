webpackHotUpdate_N_E("pages/index",{

/***/ "./component/CardItem.js":
/*!*******************************!*\
  !*** ./component/CardItem.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "G:\\Project\\Project\\Web\\REACT\\moviebot\\nextjs\\moviebot\\component\\CardItem.js",
    _s = $RefreshSig$();





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    card: {
      '&:hover': {
        cursor: 'pointer'
      },
      backgroundColor: 'silver',
      marginBottom: 16,
      marginRight: 8,
      backgroundSize: '100% 100%',
      backgroundPosition: '0% 0%',
      backgroundRepeat: 'no-repeat'
    },
    movie: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      minWidth: '11vw',
      height: 200
    }, theme.breakpoints.down('sm'), {
      marginBottom: 16,
      minWidth: '24vw',
      height: 100
    }),
    trailer: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      minWidth: '17vw',
      height: 130,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }, theme.breakpoints.down('sm'), {
      marginBottom: 16,
      minWidth: '57vw'
    }),
    videoContainer: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: '100vh',
      display: 'none',
      zIndex: 9,
      padding: '8vh 0px',
      backgroundColor: '#000'
    },
    videoController: {
      backgroundColor: '#000',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 10,
      top: 10,
      right: 15,
      position: 'absolute',
      cursor: 'pointer'
    },
    display: {
      display: 'block'
    },
    hide: {
      display: 'none'
    }
  };
});
function CardItem(_ref) {
  _s();

  var type = _ref.type,
      data = _ref.data;
  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      display = _useState[0],
      setDisplay = _useState[1];

  var playVideo = function playVideo() {
    setDisplay(!display);
  };

  var bgImage = function bgImage() {
    if (data.poster_path) {
      return "url(\"https://image.tmdb.org/t/p/w500".concat(data.poster_path, "\")");
    } else if (data.profile_path) {
      return "url(\"https://image.tmdb.org/t/p/w500".concat(data.profile_path, "\")");
    } else if (data.poster_path == null || data.profile_path == null) {
      return '';
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: type !== 'trailer' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      className: "".concat(type === 'trailer' ? classes.trailer : classes.movie, " ").concat(classes.card),
      onClick: function onClick() {
        return type !== 'movie' ? router.push('/tv/' + data.id) : router.push('/movie/' + data.id);
      },
      style: {
        backgroundImage: "".concat(bgImage())
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
        className: "".concat(classes.trailer, " ").concat(classes.card),
        onClick: playVideo,
        style: {
          backgroundImage: "url(\"https://img.youtube.com/vi/".concat(data.key, "/0.jpg\")")
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " ".concat(classes.videoContainer, " ").concat(display ? classes.display : classes.hide),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.videoController,
          onClick: playVideo,
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
          width: "100%",
          height: "100%",
          src: "https://www.youtube.com/embed/".concat(data.key).concat(display ? "?autoplay=1" : ""),
          title: data.name,
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

_s(CardItem, "B2h7Ct5jJ8Pm5xpxHs5cKlQJ9z8=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = CardItem;

var _c;

$RefreshReg$(_c, "CardItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0NhcmRJdGVtLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNhcmQiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsIm1vdmllIiwibWluV2lkdGgiLCJoZWlnaHQiLCJicmVha3BvaW50cyIsImRvd24iLCJ0cmFpbGVyIiwidmlkZW9Db250YWluZXIiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiZGlzcGxheSIsInpJbmRleCIsInBhZGRpbmciLCJ2aWRlb0NvbnRyb2xsZXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoaWRlIiwiQ2FyZEl0ZW0iLCJ0eXBlIiwiZGF0YSIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNldERpc3BsYXkiLCJwbGF5VmlkZW8iLCJiZ0ltYWdlIiwicG9zdGVyX3BhdGgiLCJwcm9maWxlX3BhdGgiLCJwdXNoIiwiaWQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJrZXkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFDO0FBQ0gsaUJBQVc7QUFDVEMsY0FBTSxFQUFFO0FBREMsT0FEUjtBQUlIQyxxQkFBZSxFQUFFLFFBSmQ7QUFLSEMsa0JBQVksRUFBRSxFQUxYO0FBTUhDLGlCQUFXLEVBQUUsQ0FOVjtBQU9IQyxvQkFBYyxFQUFFLFdBUGI7QUFRSEMsd0JBQWtCLEVBQUUsT0FSakI7QUFTSEMsc0JB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O0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQXhEdUJoQixRO1VBQ04vQixTLEVBQ0RvQyxxRDs7O0tBRk9MLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjBkNzViMmNjYjBhZGQwZTZkMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyAgICAgXHJcbiAgICBDYXJkXHJcbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjYXJkOntcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3NpbHZlcicsXHJcbiAgICBtYXJnaW5Cb3R0b206IDE2LFxyXG4gICAgbWFyZ2luUmlnaHQ6IDgsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwMCUgMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcwJSAwJScsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIFxyXG4gIH0sXHJcbiAgbW92aWU6IHsgICAgXHJcbiAgICBtaW5XaWR0aDogJzExdncnLFxyXG4gICAgaGVpZ2h0OiAyMDAsXHJcbiAgICBcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IDE2LFxyXG4gICAgICBtaW5XaWR0aDogJzI0dncnLFxyXG4gICAgICBoZWlnaHQ6IDEwMFxyXG4gICAgfSxcclxuICB9LCAgXHJcbiAgdHJhaWxlcjogeyAgICBcclxuICAgIG1pbldpZHRoOiAnMTd2dycsXHJcbiAgICBoZWlnaHQ6IDEzMCwgICAgXHJcblxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IDE2LFxyXG4gICAgICBtaW5XaWR0aDogJzU3dncnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHZpZGVvQ29udGFpbmVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJywgICAgXHJcbiAgICB0b3A6IDAsICAgIFxyXG4gICAgYm90dG9tOjAsXHJcbiAgICBsZWZ0OjAsXHJcbiAgICByaWdodDowLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIHpJbmRleDogOSxcclxuICAgIHBhZGRpbmc6ICc4dmggMHB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnXHJcbiAgfSxcclxuICB2aWRlb0NvbnRyb2xsZXI6eyAgICBcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgdG9wOiAxMCxcclxuICAgIHJpZ2h0OiAxNSxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcidcclxuICB9LFxyXG4gIGRpc3BsYXk6e1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICB9LFxyXG4gIGhpZGU6e1xyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gIH1cclxuICBcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZEl0ZW0oe3R5cGUsIGRhdGF9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gIGNvbnN0IHBsYXlWaWRlbyA9ICgpID0+IHsgICAgICAgIFxyXG4gICAgc2V0RGlzcGxheSghZGlzcGxheSk7ICAgIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgYmdJbWFnZSA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgaWYoZGF0YS5wb3N0ZXJfcGF0aCl7XHJcbiAgICAgIHJldHVybiBgdXJsKFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCR7ZGF0YS5wb3N0ZXJfcGF0aH1cIilgXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRhdGEucHJvZmlsZV9wYXRoKXtcclxuICAgICAgcmV0dXJuIGB1cmwoXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJHtkYXRhLnByb2ZpbGVfcGF0aH1cIilgXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRhdGEucG9zdGVyX3BhdGggPT0gbnVsbCB8fCBkYXRhLnByb2ZpbGVfcGF0aCA9PSBudWxsKXtcclxuICAgICAgcmV0dXJuICcnICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICB9ICAgIFxyXG5cclxuICByZXR1cm4gKCAgICBcclxuICAgIDxkaXY+ICAgIFxyXG4gICAgeyAgICAgIFxyXG4gICAgICAgIHR5cGUgIT09ICd0cmFpbGVyJyA/XHJcbiAgICAgICAgPENhcmQgXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3R5cGUgPT09ICd0cmFpbGVyJyA/IGNsYXNzZXMudHJhaWxlciA6IGNsYXNzZXMubW92aWV9ICR7Y2xhc3Nlcy5jYXJkIH1gfSBcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHR5cGUgIT09ICdtb3ZpZScgPyByb3V0ZXIucHVzaCgnL3R2LycgKyBkYXRhLmlkKSA6IHJvdXRlci5wdXNoKCcvbW92aWUvJyArIGRhdGEuaWQpfSBcclxuICAgICAgICAgIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6YCR7IGJnSW1hZ2UoKSB9YFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENhcmQgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy50cmFpbGVyfSAke2NsYXNzZXMuY2FyZH1gfSBcclxuICAgICAgICAgICAgb25DbGljaz17cGxheVZpZGVvfSBcclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtkYXRhLmtleX0vMC5qcGdcIilgfX0+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCAke2NsYXNzZXMudmlkZW9Db250YWluZXJ9ICR7ZGlzcGxheSA/IGNsYXNzZXMuZGlzcGxheSAgOiBjbGFzc2VzLmhpZGV9YH0+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnZpZGVvQ29udHJvbGxlcn0gb25DbGljaz17cGxheVZpZGVvfT5YPC9kaXY+XHJcbiAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7ZGF0YS5rZXl9JHtkaXNwbGF5ID8gYD9hdXRvcGxheT0xYCA6IGBgfWB9XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhLm5hbWV9IGZyYW1lQm9yZGVyPVwiMFwiIFxyXG4gICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBcclxuICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuPlxyXG4gICAgICAgICAgICA8L2lmcmFtZT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9