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
    },
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
          lineNumber: 54,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
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
              lineNumber: 63,
              columnNumber: 21
            }, _this);
          }) : number.cast.map(function (data, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CardItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
              type: type,
              data: data,
              children: number
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 21
            }, _this);
          }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.nothing,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
              variant: "subtitile",
              children: "Still nothing here"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0xpc3RJdGVtLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIm1hcmdpblRvcCIsIndpZHRoIiwiYnJlYWtwb2ludHMiLCJkb3duIiwicGFkZGluZyIsImxpc3RJdGVtIiwiZGlzcGxheSIsIm92ZXJmbG93WCIsInJlY29tbSIsImZsZXhXcmFwIiwibm90aGluZyIsIm1pbkhlaWdodCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIkxpc3RJdGVtIiwidGl0bGUiLCJ0eXBlIiwiZGF0YXMiLCJsaXN0IiwiY2xhc3NlcyIsIm51bWJlciIsInJlc3VsdHMiLCJtYXAiLCJkYXRhIiwiaW5kZXgiLCJjYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLENBRFI7QUFFRkMsZUFBUyxFQUFFLEVBRlQ7QUFHRkMsV0FBSyxFQUFFO0FBSEwsT0FJREosS0FBSyxDQUFDSyxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUpDLEVBSThCO0FBQzlCSCxlQUFTLEVBQUUsQ0FEbUI7QUFFOUJJLGFBQU8sRUFBRTtBQUZxQixLQUo5QixDQURtQztBQVV2Q0MsWUFBUSxFQUFDO0FBQ0xDLGFBQU8sRUFBRSxNQURKO0FBRUxDLGVBQVMsRUFBRSxNQUZOO0FBR0xQLGVBQVMsRUFBRSxFQUhOO0FBSUwsOEJBQXdCO0FBQ3RCTSxlQUFPLEVBQUU7QUFEYTtBQUpuQixLQVY4QjtBQWtCdkNFLFVBQU0sRUFBQztBQUNMRixhQUFPLEVBQUUsTUFESjtBQUVMTCxXQUFLLEVBQUUsTUFGRjtBQUdMUSxjQUFRLEVBQUUsTUFITDtBQUlMVCxlQUFTLEVBQUUsRUFKTjtBQUtMLDhCQUF3QjtBQUN0Qk0sZUFBTyxFQUFFO0FBRGE7QUFMbkIsS0FsQmdDO0FBMkJ2Q0ksV0FBTyxFQUFDO0FBQ05ULFdBQUssRUFBRSxNQUREO0FBRU5VLGVBQVMsRUFBRSxNQUZMO0FBR05MLGFBQU8sRUFBRSxNQUhIO0FBSU5NLGdCQUFVLEVBQUUsUUFKTjtBQUtOQyxvQkFBYyxFQUFFO0FBTFY7QUEzQitCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBb0NlLFNBQVNDLFFBQVQsT0FBOEM7QUFBQTs7QUFBQTs7QUFBQSxNQUEzQkMsS0FBMkIsUUFBM0JBLEtBQTJCO0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLEtBQWMsUUFBZEEsS0FBYztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUMzRCxNQUFNQyxPQUFPLEdBQUd4QixTQUFTLEVBQXpCO0FBQ0EsTUFBTXlCLE1BQU0sR0FBR0gsS0FBZjtBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFFRSxPQUFPLENBQUNyQixJQUF4QjtBQUFBLDJCQUNFLHFFQUFDLHNEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQUEsOEJBQ0kscUVBQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFBLCtCQUNFLHFFQUFDLDREQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUFBLG9CQUEwQmlCO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSSxxRUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxZQUFLRyxJQUFJLEtBQUssZ0JBQVQsR0FBNEJDLE9BQU8sQ0FBQ1gsTUFBcEMsR0FBNkNXLE9BQU8sQ0FBQ2QsUUFBMUQsQ0FBZDtBQUFBLG9CQUdJWSxLQUFLLEdBQ0hHLE1BQU0sQ0FBQ0MsT0FBUCxHQUNBRCxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxnQ0FDakIscUVBQUMsaURBQUQ7QUFBc0Isa0JBQUksRUFBRVIsSUFBNUI7QUFBa0Msa0JBQUksRUFBRU8sSUFBeEM7QUFBQSx3QkFBK0NIO0FBQS9DLGVBQWVJLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEaUI7QUFBQSxXQUFuQixDQURBLEdBS0FKLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZSCxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLGdDQUNkLHFFQUFDLGlEQUFEO0FBQXNCLGtCQUFJLEVBQUVSLElBQTVCO0FBQWtDLGtCQUFJLEVBQUVPLElBQXhDO0FBQUEsd0JBQStDSDtBQUEvQyxlQUFlSSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGM7QUFBQSxXQUFoQixDQU5HLGdCQVVMO0FBQUsscUJBQVMsRUFBRUwsT0FBTyxDQUFDVCxPQUF4QjtBQUFBLG1DQUNFLHFFQUFDLDREQUFEO0FBQVkscUJBQU8sRUFBQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZCRDs7R0FsQ3VCSSxRO1VBQ05uQixTOzs7S0FETW1CLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTg0Yzk5N2ViOWRiN2M5ODljNWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkSXRlbSBmcm9tICcuL0NhcmRJdGVtJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgICAgIFxyXG4gICAgR3JpZCxcclxuICAgIFR5cG9ncmFwaHlcclxuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsICAgIFxyXG4gICAgbWFyZ2luVG9wOiAxMixcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiA4LFxyXG4gICAgICBwYWRkaW5nOiAxMixcclxuICAgIH0sICAgIFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06e1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsICAgICAgICAgICAgXHJcbiAgICAgIG92ZXJmbG93WDogJ2F1dG8nLCAgICAgIFxyXG4gICAgICBtYXJnaW5Ub3A6IDI0LFxyXG4gICAgICAnJjo6LXdlYmtpdC1zY3JvbGxiYXInOiB7ICAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgICAgfVxyXG4gIH0sXHJcbiAgcmVjb21tOntcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgbWFyZ2luVG9wOiAyNCxcclxuICAgICcmOjotd2Via2l0LXNjcm9sbGJhcic6IHsgICAgICAgIFxyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH1cclxuICB9LFxyXG4gIG5vdGhpbmc6e1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1pbkhlaWdodDogJzMwdmgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RJdGVtKHt0aXRsZSwgdHlwZSwgZGF0YXMsIGxpc3R9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpOyAgXHJcbiAgY29uc3QgbnVtYmVyID0gZGF0YXM7XHJcbiAgXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPnt0aXRsZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgIFxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bGlzdCA9PT0gJ3JlY29tbWVuZGF0aW9uJyA/IGNsYXNzZXMucmVjb21tIDogY2xhc3Nlcy5saXN0SXRlbX1gfT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRhdGFzID8gXHJcbiAgICAgICAgICAgICAgICAgIG51bWJlci5yZXN1bHRzID8gXHJcbiAgICAgICAgICAgICAgICAgIG51bWJlci5yZXN1bHRzLm1hcCgoZGF0YSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRJdGVtIGtleT17aW5kZXh9IHR5cGU9e3R5cGV9IGRhdGE9e2RhdGF9PntudW1iZXJ9PC9DYXJkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgIG51bWJlci5jYXN0Lm1hcCgoZGF0YSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRJdGVtIGtleT17aW5kZXh9IHR5cGU9e3R5cGV9IGRhdGE9e2RhdGF9PntudW1iZXJ9PC9DYXJkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGhpbmd9PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0aWxlXCI+U3RpbGwgbm90aGluZyBoZXJlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPiAgICAgICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9