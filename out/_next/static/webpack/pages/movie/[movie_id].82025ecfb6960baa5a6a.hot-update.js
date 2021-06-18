webpackHotUpdate_N_E("pages/movie/[movie_id]",{

/***/ "./component/ListItem.js":
/*!*******************************!*\
  !*** ./component/ListItem.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CardItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardItem */ "./component/CardItem.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "G:\\Project\\Project\\Web\\REACT\\moviebot\\nextjs\\moviebot\\component\\ListItem.js",
    _s = $RefreshSig$();





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      flexGrow: 1,
      marginTop: 12,
      width: '100%'
    }, theme.breakpoints.down('sm'), {
      marginTop: 8,
      padding: 0
    }),
    listItem: {
      display: 'flex',
      overflowX: 'auto',
      marginTop: 24,
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    recomm: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      marginTop: 24,
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    }, theme.breakpoints.down('sm'), {
      justifyContent: 'center'
    }),
    nothing: {
      width: '100%',
      minHeight: '30vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };
});
function ListItem(_ref) {
  _s();

  var _this = this;

  var title = _ref.title,
      type = _ref.type,
      datas = _ref.datas,
      list = _ref.list;
  var classes = useStyles();
  var number = datas;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      container: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
          variant: "h5",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "".concat(list === 'recommendation' ? classes.recomm : classes.listItem),
          children: datas ? number.results ? number.results.map(function (data, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CardItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
              type: type,
              data: data,
              children: number
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 21
            }, _this);
          }) : number.cast.map(function (data, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CardItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
              type: type,
              data: data,
              children: number
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 21
            }, _this);
          }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.nothing,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
              variant: "subtitile",
              children: "Still nothing here"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

_s(ListItem, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ListItem;

var _c;

$RefreshReg$(_c, "ListItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0xpc3RJdGVtLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIm1hcmdpblRvcCIsIndpZHRoIiwiYnJlYWtwb2ludHMiLCJkb3duIiwicGFkZGluZyIsImxpc3RJdGVtIiwiZGlzcGxheSIsIm92ZXJmbG93WCIsInJlY29tbSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJub3RoaW5nIiwibWluSGVpZ2h0IiwiYWxpZ25JdGVtcyIsIkxpc3RJdGVtIiwidGl0bGUiLCJ0eXBlIiwiZGF0YXMiLCJsaXN0IiwiY2xhc3NlcyIsIm51bWJlciIsInJlc3VsdHMiLCJtYXAiLCJkYXRhIiwiaW5kZXgiLCJjYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLENBRFI7QUFFRkMsZUFBUyxFQUFFLEVBRlQ7QUFHRkMsV0FBSyxFQUFFO0FBSEwsT0FJREosS0FBSyxDQUFDSyxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUpDLEVBSThCO0FBQzlCSCxlQUFTLEVBQUUsQ0FEbUI7QUFFOUJJLGFBQU8sRUFBRTtBQUZxQixLQUo5QixDQURtQztBQVV2Q0MsWUFBUSxFQUFDO0FBQ0xDLGFBQU8sRUFBRSxNQURKO0FBRUxDLGVBQVMsRUFBRSxNQUZOO0FBR0xQLGVBQVMsRUFBRSxFQUhOO0FBSUwsOEJBQXdCO0FBQ3RCTSxlQUFPLEVBQUU7QUFEYTtBQUpuQixLQVY4QjtBQWtCdkNFLFVBQU07QUFDSkYsYUFBTyxFQUFFLE1BREw7QUFFSkwsV0FBSyxFQUFFLE1BRkg7QUFHSlEsY0FBUSxFQUFFLE1BSE47QUFJSlQsZUFBUyxFQUFFLEVBSlA7QUFLSiw4QkFBd0I7QUFDdEJNLGVBQU8sRUFBRTtBQURhO0FBTHBCLE9BUUhULEtBQUssQ0FBQ0ssV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FSRyxFQVE0QjtBQUM5Qk8sb0JBQWMsRUFBRTtBQURjLEtBUjVCLENBbEJpQztBQThCdkNDLFdBQU8sRUFBQztBQUNOVixXQUFLLEVBQUUsTUFERDtBQUVOVyxlQUFTLEVBQUUsTUFGTDtBQUdOTixhQUFPLEVBQUUsTUFISDtBQUlOTyxnQkFBVSxFQUFFLFFBSk47QUFLTkgsb0JBQWMsRUFBRTtBQUxWO0FBOUIrQixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQXVDZSxTQUFTSSxRQUFULE9BQThDO0FBQUE7O0FBQUE7O0FBQUEsTUFBM0JDLEtBQTJCLFFBQTNCQSxLQUEyQjtBQUFBLE1BQXBCQyxJQUFvQixRQUFwQkEsSUFBb0I7QUFBQSxNQUFkQyxLQUFjLFFBQWRBLEtBQWM7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFDM0QsTUFBTUMsT0FBTyxHQUFHeEIsU0FBUyxFQUF6QjtBQUNBLE1BQU15QixNQUFNLEdBQUdILEtBQWY7QUFHQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUUsT0FBTyxDQUFDckIsSUFBeEI7QUFBQSwyQkFDRSxxRUFBQyxzREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFBLDhCQUNJLHFFQUFDLHNEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBQSwrQkFDRSxxRUFBQyw0REFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBQSxvQkFBMEJpQjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUkscUVBQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsWUFBS0csSUFBSSxLQUFLLGdCQUFULEdBQTRCQyxPQUFPLENBQUNYLE1BQXBDLEdBQTZDVyxPQUFPLENBQUNkLFFBQTFELENBQWQ7QUFBQSxvQkFHSVksS0FBSyxHQUNIRyxNQUFNLENBQUNDLE9BQVAsR0FDQUQsTUFBTSxDQUFDQyxPQUFQLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsZ0NBQ2pCLHFFQUFDLGlEQUFEO0FBQXNCLGtCQUFJLEVBQUVSLElBQTVCO0FBQWtDLGtCQUFJLEVBQUVPLElBQXhDO0FBQUEsd0JBQStDSDtBQUEvQyxlQUFlSSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGlCO0FBQUEsV0FBbkIsQ0FEQSxHQUtBSixNQUFNLENBQUNLLElBQVAsQ0FBWUgsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxnQ0FDZCxxRUFBQyxpREFBRDtBQUFzQixrQkFBSSxFQUFFUixJQUE1QjtBQUFrQyxrQkFBSSxFQUFFTyxJQUF4QztBQUFBLHdCQUErQ0g7QUFBL0MsZUFBZUksS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURjO0FBQUEsV0FBaEIsQ0FORyxnQkFVTDtBQUFLLHFCQUFTLEVBQUVMLE9BQU8sQ0FBQ1IsT0FBeEI7QUFBQSxtQ0FDRSxxRUFBQyw0REFBRDtBQUFZLHFCQUFPLEVBQUMsV0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBbEN1QkcsUTtVQUNObkIsUzs7O0tBRE1tQixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21vdmllL1ttb3ZpZV9pZF0uODIwMjVlY2ZiNjk2MGJhYTVhNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkSXRlbSBmcm9tICcuL0NhcmRJdGVtJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgICAgIFxyXG4gICAgR3JpZCxcclxuICAgIFR5cG9ncmFwaHlcclxuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsICAgIFxyXG4gICAgbWFyZ2luVG9wOiAxMixcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiA4LFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgfSwgICAgXHJcbiAgfSxcclxuICBsaXN0SXRlbTp7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JywgICAgICAgICAgICBcclxuICAgICAgb3ZlcmZsb3dYOiAnYXV0bycsICAgICAgXHJcbiAgICAgIG1hcmdpblRvcDogMjQsXHJcbiAgICAgICcmOjotd2Via2l0LXNjcm9sbGJhcic6IHsgICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICB9XHJcbiAgfSxcclxuICByZWNvbW06e1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBtYXJnaW5Ub3A6IDI0LFxyXG4gICAgJyY6Oi13ZWJraXQtc2Nyb2xsYmFyJzogeyAgICAgICAgXHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICAgIH0sICAgIFxyXG4gIH0sXHJcbiAgbm90aGluZzp7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbWluSGVpZ2h0OiAnMzB2aCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdEl0ZW0oe3RpdGxlLCB0eXBlLCBkYXRhcywgbGlzdH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7ICBcclxuICBjb25zdCBudW1iZXIgPSBkYXRhcztcclxuICBcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e3RpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD4gICAgICAgICAgXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtsaXN0ID09PSAncmVjb21tZW5kYXRpb24nID8gY2xhc3Nlcy5yZWNvbW0gOiBjbGFzc2VzLmxpc3RJdGVtfWB9PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGF0YXMgPyBcclxuICAgICAgICAgICAgICAgICAgbnVtYmVyLnJlc3VsdHMgPyBcclxuICAgICAgICAgICAgICAgICAgbnVtYmVyLnJlc3VsdHMubWFwKChkYXRhLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEl0ZW0ga2V5PXtpbmRleH0gdHlwZT17dHlwZX0gZGF0YT17ZGF0YX0+e251bWJlcn08L0NhcmRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgbnVtYmVyLmNhc3QubWFwKChkYXRhLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEl0ZW0ga2V5PXtpbmRleH0gdHlwZT17dHlwZX0gZGF0YT17ZGF0YX0+e251bWJlcn08L0NhcmRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90aGluZ30+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRpbGVcIj5TdGlsbCBub3RoaW5nIGhlcmU8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+ICAgICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=