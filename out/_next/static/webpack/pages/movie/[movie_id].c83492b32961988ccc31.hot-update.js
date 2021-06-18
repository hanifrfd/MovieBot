webpackHotUpdate_N_E("pages/movie/[movie_id]",{

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
      minWidth: 100,
      height: 130
    }),
    trailer: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      minWidth: '17vw',
      height: 130,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }, theme.breakpoints.down('sm'), {
      minWidth: 136,
      height: 100
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0NhcmRJdGVtLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNhcmQiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsIm1vdmllIiwibWluV2lkdGgiLCJoZWlnaHQiLCJicmVha3BvaW50cyIsImRvd24iLCJ0cmFpbGVyIiwidmlkZW9Db250YWluZXIiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiZGlzcGxheSIsInpJbmRleCIsInBhZGRpbmciLCJ2aWRlb0NvbnRyb2xsZXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoaWRlIiwiQ2FyZEl0ZW0iLCJ0eXBlIiwiZGF0YSIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNldERpc3BsYXkiLCJwbGF5VmlkZW8iLCJiZ0ltYWdlIiwicG9zdGVyX3BhdGgiLCJwcm9maWxlX3BhdGgiLCJwdXNoIiwiaWQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJrZXkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFDO0FBQ0gsaUJBQVc7QUFDVEMsY0FBTSxFQUFFO0FBREMsT0FEUjtBQUlIQyxxQkFBZSxFQUFFLFFBSmQ7QUFLSEMsa0JBQVksRUFBRSxFQUxYO0FBTUhDLGlCQUFXLEVBQUUsQ0FOVjtBQU9IQyxvQkFBYyxFQUFFLFdBUGI7QUFRSEMsd0JBQWtCLEVBQUUsT0FSakI7QUFTSEMsc0JB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QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQ0Q7O0dBeER1QmhCLFE7VUFDTi9CLFMsRUFDRG9DLHFEOzs7S0FGT0wsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tb3ZpZS9bbW92aWVfaWRdLmM4MzQ5MmIzMjk2MTk4OGNjYzMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgICAgIFxyXG4gICAgQ2FyZFxyXG4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY2FyZDp7XHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdzaWx2ZXInLFxyXG4gICAgbWFyZ2luQm90dG9tOiAxNixcclxuICAgIG1hcmdpblJpZ2h0OiA4LFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMDAlIDEwMCUnLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMCUgMCUnLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBcclxuICB9LFxyXG4gIG1vdmllOiB7ICAgIFxyXG4gICAgbWluV2lkdGg6ICcxMXZ3JyxcclxuICAgIGhlaWdodDogMjAwLFxyXG4gICAgXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiAxNixcclxuICAgICAgbWluV2lkdGg6IDEwMCxcclxuICAgICAgaGVpZ2h0OiAxMzBcclxuICAgIH0sXHJcbiAgfSwgIFxyXG4gIHRyYWlsZXI6IHsgICAgXHJcbiAgICBtaW5XaWR0aDogJzE3dncnLFxyXG4gICAgaGVpZ2h0OiAxMzAsICAgIFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHsgICAgICBcclxuICAgICAgbWluV2lkdGg6IDEzNixcclxuICAgICAgaGVpZ2h0OiAxMDBcclxuICAgIH0sXHJcbiAgfSxcclxuICB2aWRlb0NvbnRhaW5lcjoge1xyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsICAgIFxyXG4gICAgdG9wOiAwLCAgICBcclxuICAgIGJvdHRvbTowLFxyXG4gICAgbGVmdDowLFxyXG4gICAgcmlnaHQ6MCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB6SW5kZXg6IDksXHJcbiAgICBwYWRkaW5nOiAnOHZoIDBweCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJ1xyXG4gIH0sXHJcbiAgdmlkZW9Db250cm9sbGVyOnsgICAgXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiAxMCxcclxuICAgIHRvcDogMTAsXHJcbiAgICByaWdodDogMTUsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgfSxcclxuICBkaXNwbGF5OntcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgfSxcclxuICBoaWRlOntcclxuICAgIGRpc3BsYXk6ICdub25lJyxcclxuICB9XHJcbiAgXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRJdGVtKHt0eXBlLCBkYXRhfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICBjb25zdCBwbGF5VmlkZW8gPSAoKSA9PiB7ICAgICAgICBcclxuICAgIHNldERpc3BsYXkoIWRpc3BsYXkpOyAgICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGJnSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGlmKGRhdGEucG9zdGVyX3BhdGgpe1xyXG4gICAgICByZXR1cm4gYHVybChcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAke2RhdGEucG9zdGVyX3BhdGh9XCIpYFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihkYXRhLnByb2ZpbGVfcGF0aCl7XHJcbiAgICAgIHJldHVybiBgdXJsKFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCR7ZGF0YS5wcm9maWxlX3BhdGh9XCIpYFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihkYXRhLnBvc3Rlcl9wYXRoID09IG51bGwgfHwgZGF0YS5wcm9maWxlX3BhdGggPT0gbnVsbCl7XHJcbiAgICAgIHJldHVybiAnJyAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgfSAgICBcclxuXHJcbiAgcmV0dXJuICggICAgXHJcbiAgICA8ZGl2PiAgICBcclxuICAgIHsgICAgICBcclxuICAgICAgICB0eXBlICE9PSAndHJhaWxlcicgP1xyXG4gICAgICAgIDxDYXJkIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHt0eXBlID09PSAndHJhaWxlcicgPyBjbGFzc2VzLnRyYWlsZXIgOiBjbGFzc2VzLm1vdmllfSAke2NsYXNzZXMuY2FyZCB9YH0gXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0eXBlICE9PSAnbW92aWUnID8gcm91dGVyLnB1c2goJy90di8nICsgZGF0YS5pZCkgOiByb3V0ZXIucHVzaCgnL21vdmllLycgKyBkYXRhLmlkKX0gXHJcbiAgICAgICAgICBzdHlsZT17eyBcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOmAkeyBiZ0ltYWdlKCkgfWBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA6XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxDYXJkIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMudHJhaWxlcn0gJHtjbGFzc2VzLmNhcmR9YH0gXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3BsYXlWaWRlb30gXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybChcImh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7ZGF0YS5rZXl9LzAuanBnXCIpYH19PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AgJHtjbGFzc2VzLnZpZGVvQ29udGFpbmVyfSAke2Rpc3BsYXkgPyBjbGFzc2VzLmRpc3BsYXkgIDogY2xhc3Nlcy5oaWRlfWB9PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy52aWRlb0NvbnRyb2xsZXJ9IG9uQ2xpY2s9e3BsYXlWaWRlb30+WDwvZGl2PlxyXG4gICAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2RhdGEua2V5fSR7ZGlzcGxheSA/IGA/YXV0b3BsYXk9MWAgOiBgYH1gfVxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YS5uYW1lfSBmcmFtZUJvcmRlcj1cIjBcIiBcclxuICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgXHJcbiAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlbj5cclxuICAgICAgICAgICAgPC9pZnJhbWU+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==