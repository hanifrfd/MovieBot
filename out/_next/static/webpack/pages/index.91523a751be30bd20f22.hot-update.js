webpackHotUpdate_N_E("pages/index",{

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
      padding: 12
    }),
    listItem: {
      display: 'flex',
      overflowX: 'auto',
      marginTop: 24,
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    recomm: {
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      marginTop: 24,
      '&::-webkit-scrollbar': {
        display: 'none'
      }
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
          lineNumber: 47,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
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
              lineNumber: 56,
              columnNumber: 21
            }, _this);
          }) : number.cast.map(function (data, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CardItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
              type: type,
              data: data,
              children: number
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 21
            }, _this);
          }) : 'something here'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0xpc3RJdGVtLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIm1hcmdpblRvcCIsIndpZHRoIiwiYnJlYWtwb2ludHMiLCJkb3duIiwicGFkZGluZyIsImxpc3RJdGVtIiwiZGlzcGxheSIsIm92ZXJmbG93WCIsInJlY29tbSIsImZsZXhXcmFwIiwiTGlzdEl0ZW0iLCJ0aXRsZSIsInR5cGUiLCJkYXRhcyIsImxpc3QiLCJjbGFzc2VzIiwibnVtYmVyIiwicmVzdWx0cyIsIm1hcCIsImRhdGEiLCJpbmRleCIsImNhc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUUsQ0FEUjtBQUVGQyxlQUFTLEVBQUUsRUFGVDtBQUdGQyxXQUFLLEVBQUU7QUFITCxPQUlESixLQUFLLENBQUNLLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBSkMsRUFJOEI7QUFDOUJILGVBQVMsRUFBRSxDQURtQjtBQUU5QkksYUFBTyxFQUFFO0FBRnFCLEtBSjlCLENBRG1DO0FBVXZDQyxZQUFRLEVBQUM7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsZUFBUyxFQUFFLE1BRk47QUFHTFAsZUFBUyxFQUFFLEVBSE47QUFJTCw4QkFBd0I7QUFDdEJNLGVBQU8sRUFBRTtBQURhO0FBSm5CLEtBVjhCO0FBa0J2Q0UsVUFBTSxFQUFDO0FBQ0xGLGFBQU8sRUFBRSxNQURKO0FBRUxMLFdBQUssRUFBRSxNQUZGO0FBR0xRLGNBQVEsRUFBRSxNQUhMO0FBSUxULGVBQVMsRUFBRSxFQUpOO0FBS0wsOEJBQXdCO0FBQ3RCTSxlQUFPLEVBQUU7QUFEYTtBQUxuQjtBQWxCZ0MsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUE2QmUsU0FBU0ksUUFBVCxPQUE4QztBQUFBOztBQUFBOztBQUFBLE1BQTNCQyxLQUEyQixRQUEzQkEsS0FBMkI7QUFBQSxNQUFwQkMsSUFBb0IsUUFBcEJBLElBQW9CO0FBQUEsTUFBZEMsS0FBYyxRQUFkQSxLQUFjO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQzNELE1BQU1DLE9BQU8sR0FBR3BCLFNBQVMsRUFBekI7QUFDQSxNQUFNcUIsTUFBTSxHQUFHSCxLQUFmO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVFLE9BQU8sQ0FBQ2pCLElBQXhCO0FBQUEsMkJBQ0UscUVBQUMsc0RBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBQSw4QkFDSSxxRUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQUEsK0JBQ0UscUVBQUMsNERBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQUEsb0JBQTBCYTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUkscUVBQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsWUFBS0csSUFBSSxLQUFLLGdCQUFULEdBQTRCQyxPQUFPLENBQUNQLE1BQXBDLEdBQTZDTyxPQUFPLENBQUNWLFFBQTFELENBQWQ7QUFBQSxvQkFHSVEsS0FBSyxHQUNIRyxNQUFNLENBQUNDLE9BQVAsR0FDQUQsTUFBTSxDQUFDQyxPQUFQLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsZ0NBQ2pCLHFFQUFDLGlEQUFEO0FBQXNCLGtCQUFJLEVBQUVSLElBQTVCO0FBQWtDLGtCQUFJLEVBQUVPLElBQXhDO0FBQUEsd0JBQStDSDtBQUEvQyxlQUFlSSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGlCO0FBQUEsV0FBbkIsQ0FEQSxHQUtBSixNQUFNLENBQUNLLElBQVAsQ0FBWUgsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxnQ0FDZCxxRUFBQyxpREFBRDtBQUFzQixrQkFBSSxFQUFFUixJQUE1QjtBQUFrQyxrQkFBSSxFQUFFTyxJQUF4QztBQUFBLHdCQUErQ0g7QUFBL0MsZUFBZUksS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURjO0FBQUEsV0FBaEIsQ0FORyxHQVNIO0FBWk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQkQ7O0dBL0J1QlYsUTtVQUNOZixTOzs7S0FETWUsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MTUyM2E3NTFiZTMwYmQyMGYyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmRJdGVtIGZyb20gJy4vQ2FyZEl0ZW0nXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyAgICAgXHJcbiAgICBHcmlkLFxyXG4gICAgVHlwb2dyYXBoeVxyXG4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSwgICAgXHJcbiAgICBtYXJnaW5Ub3A6IDEyLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IDgsXHJcbiAgICAgIHBhZGRpbmc6IDEyLFxyXG4gICAgfSwgICAgXHJcbiAgfSxcclxuICBsaXN0SXRlbTp7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JywgICAgICAgICAgICBcclxuICAgICAgb3ZlcmZsb3dYOiAnYXV0bycsICAgICAgXHJcbiAgICAgIG1hcmdpblRvcDogMjQsXHJcbiAgICAgICcmOjotd2Via2l0LXNjcm9sbGJhcic6IHsgICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICB9XHJcbiAgfSxcclxuICByZWNvbW06e1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBtYXJnaW5Ub3A6IDI0LFxyXG4gICAgJyY6Oi13ZWJraXQtc2Nyb2xsYmFyJzogeyAgICAgICAgXHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdEl0ZW0oe3RpdGxlLCB0eXBlLCBkYXRhcywgbGlzdH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7ICBcclxuICBjb25zdCBudW1iZXIgPSBkYXRhcztcclxuICBcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e3RpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD4gICAgICAgICAgXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtsaXN0ID09PSAncmVjb21tZW5kYXRpb24nID8gY2xhc3Nlcy5yZWNvbW0gOiBjbGFzc2VzLmxpc3RJdGVtfWB9PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGF0YXMgPyBcclxuICAgICAgICAgICAgICAgICAgbnVtYmVyLnJlc3VsdHMgPyBcclxuICAgICAgICAgICAgICAgICAgbnVtYmVyLnJlc3VsdHMubWFwKChkYXRhLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEl0ZW0ga2V5PXtpbmRleH0gdHlwZT17dHlwZX0gZGF0YT17ZGF0YX0+e251bWJlcn08L0NhcmRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgbnVtYmVyLmNhc3QubWFwKChkYXRhLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEl0ZW0ga2V5PXtpbmRleH0gdHlwZT17dHlwZX0gZGF0YT17ZGF0YX0+e251bWJlcn08L0NhcmRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA6ICdzb21ldGhpbmcgaGVyZScgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+ICAgICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=