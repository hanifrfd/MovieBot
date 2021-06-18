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
      minWidth: 100,
      height: 130
    }),
    trailer: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      minWidth: '17vw',
      height: 130,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }, theme.breakpoints.down('sm'), {
      minWidth: 236,
      height: 100,
      padding: 0
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
      lineNumber: 104,
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
        lineNumber: 114,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " ".concat(classes.videoContainer, " ").concat(display ? classes.display : classes.hide),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.videoController,
          onClick: playVideo,
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
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
          lineNumber: 121,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0NhcmRJdGVtLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNhcmQiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsIm1vdmllIiwibWluV2lkdGgiLCJoZWlnaHQiLCJicmVha3BvaW50cyIsImRvd24iLCJ0cmFpbGVyIiwicGFkZGluZyIsInZpZGVvQ29udGFpbmVyIiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJ6SW5kZXgiLCJ2aWRlb0NvbnRyb2xsZXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoaWRlIiwiQ2FyZEl0ZW0iLCJ0eXBlIiwiZGF0YSIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNldERpc3BsYXkiLCJwbGF5VmlkZW8iLCJiZ0ltYWdlIiwicG9zdGVyX3BhdGgiLCJwcm9maWxlX3BhdGgiLCJwdXNoIiwiaWQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJrZXkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFDO0FBQ0gsaUJBQVc7QUFDVEMsY0FBTSxFQUFFO0FBREMsT0FEUjtBQUlIQyxxQkFBZSxFQUFFLFFBSmQ7QUFLSEMsa0JBQVksRUFBRSxFQUxYO0FBTUhDLGlCQUFXLEVBQUUsQ0FOVjtBQU9IQyxvQkFBYyxFQUFFLFdBUGI7QUFRSEMsd0JBQWtCLEVBQUUsT0FSakI7QUFTSEMsc0JBQWdCLEVBQUU7QUFUZixLQURrQztBQWF2Q0MsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxNQURQO0FBRUhDLFlBQU0sRUFBRTtBQUZMLE9BSUZYLEtBQUssQ0FBQ1ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FKRSxFQUk2QjtBQUM5QlQsa0JBQVksRUFBRSxFQURnQjtBQUU5Qk0sY0FBUSxFQUFFLEdBRm9CO0FBRzlCQyxZQUFNLEVBQUU7QUFIc0IsS0FKN0IsQ0Fia0M7QUF1QnZDRyxXQUFPLEVBQUU7QUFDUEosY0FBUSxFQUFFLE1BREw7QUFFTEMsWUFBTSxFQUFFLEdBRkg7QUFHTEwsb0JBQWMsRUFBRSxPQUhYO0FBSUxDLHdCQUFrQixFQUFFO0FBSmYsT0FNSlAsS0FBSyxDQUFDWSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQU5JLEVBTTJCO0FBQzlCSCxjQUFRLEVBQUUsR0FEb0I7QUFFOUJDLFlBQU0sRUFBRSxHQUZzQjtBQUc5QkksYUFBTyxFQUFFO0FBSHFCLEtBTjNCLENBdkJnQztBQW1DdkNDLGtCQUFjLEVBQUU7QUFDZEMsY0FBUSxFQUFFLE9BREk7QUFFZEMsU0FBRyxFQUFFLENBRlM7QUFHZEMsWUFBTSxFQUFDLENBSE87QUFJZEMsVUFBSSxFQUFDLENBSlM7QUFLZEMsV0FBSyxFQUFDLENBTFE7QUFNZEMsV0FBSyxFQUFFLE1BTk87QUFPZFgsWUFBTSxFQUFFLE9BUE07QUFRZFksYUFBTyxFQUFFLE1BUks7QUFTZEMsWUFBTSxFQUFFLENBVE07QUFVZFQsYUFBTyxFQUFFLFNBVks7QUFXZFoscUJBQWUsRUFBRTtBQVhILEtBbkN1QjtBQWdEdkNzQixtQkFBZSxFQUFDO0FBQ2R0QixxQkFBZSxFQUFFLE1BREg7QUFFZG9CLGFBQU8sRUFBRSxNQUZLO0FBR2RHLG9CQUFjLEVBQUUsVUFIRjtBQUlkQyxnQkFBVSxFQUFFLFFBSkU7QUFLZFosYUFBTyxFQUFFLEVBTEs7QUFNZEcsU0FBRyxFQUFFLEVBTlM7QUFPZEcsV0FBSyxFQUFFLEVBUE87QUFRZEosY0FBUSxFQUFFLFVBUkk7QUFTZGYsWUFBTSxFQUFFO0FBVE0sS0FoRHVCO0FBMkR2Q3FCLFdBQU8sRUFBQztBQUNOQSxhQUFPLEVBQUU7QUFESCxLQTNEK0I7QUE4RHZDSyxRQUFJLEVBQUM7QUFDSEwsYUFBTyxFQUFFO0FBRE47QUE5RGtDLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBb0VlLFNBQVNNLFFBQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFiQyxJQUFhLFFBQWJBLElBQWE7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFDN0MsTUFBTUMsT0FBTyxHQUFHbEMsU0FBUyxFQUF6QjtBQUNBLE1BQU1tQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUY2QyxrQkFHZkMsc0RBQVEsQ0FBQyxLQUFELENBSE87QUFBQSxNQUd0Q1osT0FIc0M7QUFBQSxNQUc3QmEsVUFINkI7O0FBTTdDLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJELGNBQVUsQ0FBQyxDQUFDYixPQUFGLENBQVY7QUFDRCxHQUZEOztBQUlBLE1BQU1lLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFFcEIsUUFBR1AsSUFBSSxDQUFDUSxXQUFSLEVBQW9CO0FBQ2xCLDREQUE4Q1IsSUFBSSxDQUFDUSxXQUFuRDtBQUNELEtBRkQsTUFHSyxJQUFHUixJQUFJLENBQUNTLFlBQVIsRUFBcUI7QUFDeEIsNERBQThDVCxJQUFJLENBQUNTLFlBQW5EO0FBQ0QsS0FGSSxNQUdBLElBQUdULElBQUksQ0FBQ1EsV0FBTCxJQUFvQixJQUFwQixJQUE0QlIsSUFBSSxDQUFDUyxZQUFMLElBQXFCLElBQXBELEVBQXlEO0FBQzVELGFBQU8sRUFBUDtBQUNEO0FBRUYsR0FaRDs7QUFjQSxzQkFDRTtBQUFBLGNBRUlWLElBQUksS0FBSyxTQUFULGdCQUNBLHFFQUFDLHNEQUFEO0FBQ0UsZUFBUyxZQUFLQSxJQUFJLEtBQUssU0FBVCxHQUFxQkUsT0FBTyxDQUFDbEIsT0FBN0IsR0FBdUNrQixPQUFPLENBQUN2QixLQUFwRCxjQUE2RHVCLE9BQU8sQ0FBQy9CLElBQXJFLENBRFg7QUFFRSxhQUFPLEVBQUU7QUFBQSxlQUFNNkIsSUFBSSxLQUFLLE9BQVQsR0FBbUJHLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZLFNBQVNWLElBQUksQ0FBQ1csRUFBMUIsQ0FBbkIsR0FBbURULE1BQU0sQ0FBQ1EsSUFBUCxDQUFZLFlBQVlWLElBQUksQ0FBQ1csRUFBN0IsQ0FBekQ7QUFBQSxPQUZYO0FBR0UsV0FBSyxFQUFFO0FBQ0xDLHVCQUFlLFlBQUtMLE9BQU8sRUFBWjtBQURWO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGdCQVVBO0FBQUEsOEJBQ0UscUVBQUMsc0RBQUQ7QUFDRSxpQkFBUyxZQUFLTixPQUFPLENBQUNsQixPQUFiLGNBQXdCa0IsT0FBTyxDQUFDL0IsSUFBaEMsQ0FEWDtBQUVFLGVBQU8sRUFBRW9DLFNBRlg7QUFHRSxhQUFLLEVBQUU7QUFBRU0seUJBQWUsNkNBQXFDWixJQUFJLENBQUNhLEdBQTFDO0FBQWpCO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBSyxpQkFBUyxhQUFNWixPQUFPLENBQUNoQixjQUFkLGNBQWdDTyxPQUFPLEdBQUdTLE9BQU8sQ0FBQ1QsT0FBWCxHQUFzQlMsT0FBTyxDQUFDSixJQUFyRSxDQUFkO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFSSxPQUFPLENBQUNQLGVBQXhCO0FBQXlDLGlCQUFPLEVBQUVZLFNBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBUSxlQUFLLEVBQUMsTUFBZDtBQUFxQixnQkFBTSxFQUFDLE1BQTVCO0FBQ0EsYUFBRywwQ0FBbUNOLElBQUksQ0FBQ2EsR0FBeEMsU0FBOENyQixPQUFPLHFCQUFyRCxDQURIO0FBRUEsZUFBSyxFQUFFUSxJQUFJLENBQUNjLElBRlo7QUFFa0IscUJBQVcsRUFBQyxHQUY5QjtBQUdBLGVBQUssRUFBQywwRkFITjtBQUlBLHlCQUFlO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQ0Q7O0dBeER1QmhCLFE7VUFDTi9CLFMsRUFDRG9DLHFEOzs7S0FGT0wsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZTE1YTg2NTU4NzM5NjhlZmQwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7ICAgICBcclxuICAgIENhcmRcclxuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNhcmQ6e1xyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnc2lsdmVyJyxcclxuICAgIG1hcmdpbkJvdHRvbTogMTYsXHJcbiAgICBtYXJnaW5SaWdodDogOCxcclxuICAgIGJhY2tncm91bmRTaXplOiAnMTAwJSAxMDAlJyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAlIDAlJyxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgXHJcbiAgfSxcclxuICBtb3ZpZTogeyAgICBcclxuICAgIG1pbldpZHRoOiAnMTF2dycsXHJcbiAgICBoZWlnaHQ6IDIwMCxcclxuICAgIFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogMTYsXHJcbiAgICAgIG1pbldpZHRoOiAxMDAsXHJcbiAgICAgIGhlaWdodDogMTMwXHJcbiAgICB9LFxyXG4gIH0sICBcclxuICB0cmFpbGVyOiB7ICAgIFxyXG4gICAgbWluV2lkdGg6ICcxN3Z3JyxcclxuICAgIGhlaWdodDogMTMwLCAgICBcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcblxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7ICAgICAgXHJcbiAgICAgIG1pbldpZHRoOiAyMzYsXHJcbiAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHZpZGVvQ29udGFpbmVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJywgICAgXHJcbiAgICB0b3A6IDAsICAgIFxyXG4gICAgYm90dG9tOjAsXHJcbiAgICBsZWZ0OjAsXHJcbiAgICByaWdodDowLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIHpJbmRleDogOSxcclxuICAgIHBhZGRpbmc6ICc4dmggMHB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnXHJcbiAgfSxcclxuICB2aWRlb0NvbnRyb2xsZXI6eyAgICBcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgdG9wOiAxMCxcclxuICAgIHJpZ2h0OiAxNSxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcidcclxuICB9LFxyXG4gIGRpc3BsYXk6e1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICB9LFxyXG4gIGhpZGU6e1xyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gIH1cclxuICBcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZEl0ZW0oe3R5cGUsIGRhdGF9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gIGNvbnN0IHBsYXlWaWRlbyA9ICgpID0+IHsgICAgICAgIFxyXG4gICAgc2V0RGlzcGxheSghZGlzcGxheSk7ICAgIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgYmdJbWFnZSA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgaWYoZGF0YS5wb3N0ZXJfcGF0aCl7XHJcbiAgICAgIHJldHVybiBgdXJsKFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCR7ZGF0YS5wb3N0ZXJfcGF0aH1cIilgXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRhdGEucHJvZmlsZV9wYXRoKXtcclxuICAgICAgcmV0dXJuIGB1cmwoXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJHtkYXRhLnByb2ZpbGVfcGF0aH1cIilgXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRhdGEucG9zdGVyX3BhdGggPT0gbnVsbCB8fCBkYXRhLnByb2ZpbGVfcGF0aCA9PSBudWxsKXtcclxuICAgICAgcmV0dXJuICcnICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICB9ICAgIFxyXG5cclxuICByZXR1cm4gKCAgICBcclxuICAgIDxkaXY+ICAgIFxyXG4gICAgeyAgICAgIFxyXG4gICAgICAgIHR5cGUgIT09ICd0cmFpbGVyJyA/XHJcbiAgICAgICAgPENhcmQgXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3R5cGUgPT09ICd0cmFpbGVyJyA/IGNsYXNzZXMudHJhaWxlciA6IGNsYXNzZXMubW92aWV9ICR7Y2xhc3Nlcy5jYXJkIH1gfSBcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHR5cGUgIT09ICdtb3ZpZScgPyByb3V0ZXIucHVzaCgnL3R2LycgKyBkYXRhLmlkKSA6IHJvdXRlci5wdXNoKCcvbW92aWUvJyArIGRhdGEuaWQpfSBcclxuICAgICAgICAgIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6YCR7IGJnSW1hZ2UoKSB9YFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENhcmQgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy50cmFpbGVyfSAke2NsYXNzZXMuY2FyZH1gfSBcclxuICAgICAgICAgICAgb25DbGljaz17cGxheVZpZGVvfSBcclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtkYXRhLmtleX0vMC5qcGdcIilgfX0+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCAke2NsYXNzZXMudmlkZW9Db250YWluZXJ9ICR7ZGlzcGxheSA/IGNsYXNzZXMuZGlzcGxheSAgOiBjbGFzc2VzLmhpZGV9YH0+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnZpZGVvQ29udHJvbGxlcn0gb25DbGljaz17cGxheVZpZGVvfT5YPC9kaXY+XHJcbiAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7ZGF0YS5rZXl9JHtkaXNwbGF5ID8gYD9hdXRvcGxheT0xYCA6IGBgfWB9XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhLm5hbWV9IGZyYW1lQm9yZGVyPVwiMFwiIFxyXG4gICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBcclxuICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuPlxyXG4gICAgICAgICAgICA8L2lmcmFtZT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9