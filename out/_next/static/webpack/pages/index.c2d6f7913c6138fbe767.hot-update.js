webpackHotUpdate_N_E("pages/index",{

/***/ "./component/AppBarBar.js":
/*!********************************!*\
  !*** ./component/AppBarBar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppBarBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);



var _jsxFileName = "G:\\Project\\Project\\Web\\REACT\\moviebot\\nextjs\\moviebot\\component\\AppBarBar.js",
    _s = $RefreshSig$();











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    appBar: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      padding: '0px 50px',
      background: 'transparent',
      position: 'absolute',
      boxShadow: 'none',
      zIndex: 1
    }, theme.breakpoints.down('sm'), {
      padding: '0px 16px'
    }),
    menuButton: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginRight: theme.spacing(2),
      padding: 0,
      display: 'none'
    }, theme.breakpoints.down('sm'), {
      display: 'block',
      marginRight: theme.spacing(0)
    }),
    toolbar: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      padding: 0
    }, theme.breakpoints.down('sm'), {
      display: 'flex',
      justifyContent: 'space-between'
    }),
    title: {
      '&:hover': {
        cursor: 'pointer'
      },
      width: 'auto'
    },
    menu: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: 'flex',
      marginLeft: 'auto'
    }, theme.breakpoints.down('sm'), {
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#1C1C1C',
      left: -500,
      top: 0,
      flexDirection: 'column',
      transition: 'left 0.6s'
    }),
    isOpen: {
      left: -16
    },
    menuItem: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginLeft: 36,
      padding: 0
    }, theme.breakpoints.down('sm'), {
      marginTop: 18,
      marginLeft: 16,
      marginRight: 24
    }),
    search: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.breakpoints.down('sm'), {
      display: 'none'
    }),
    close: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      textAlign: 'right',
      display: 'none'
    }, theme.breakpoints.down('sm'), {
      display: 'block'
    })
  };
});
function AppBarBar() {
  _s();

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isSearch = _useState2[0],
      setIsSearch = _useState2[1];

  var chgOpen = function chgOpen() {
    setIsOpen(!isOpen);
    console.log('halo');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      position: "absolute",
      className: classes.appBar,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.toolbar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "h6",
          className: classes.title,
          onClick: function onClick() {
            return router.push('/');
          },
          children: "MOVIEBOT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          edge: "start",
          className: classes.menuButton,
          color: "inherit",
          "aria-label": "menu",
          onClick: function onClick() {
            return chgOpen();
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "".concat(classes.menu, " ").concat(isOpen ? classes.isOpen : ''),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "subtitle1",
            color: "inherit",
            className: "".concat(classes.menuItem, " ").concat(classes.close),
            onClick: function onClick() {
              return chgOpen();
            },
            children: "X"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "subtitle1",
            color: "inherit",
            className: classes.menuItem,
            children: "Movies"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "subtitle1",
            color: "inherit",
            className: classes.menuItem,
            children: "TV Series"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            edge: "start",
            color: "inherit",
            className: "".concat(classes.menuItem, " ").concat(classes.search),
            "aria-label": "search",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "".concat(classes.searchContainer, " ").concat(isSearch ? classes.searchOpen : ''),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.searchBox,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.searchIcon,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_10__["default"], {
          placeholder: "Search\u2026",
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput
          },
          inputProps: {
            'aria-label': 'search'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }, this);
}

_s(AppBarBar, "m8J/VMQdZmEevqKsOkFanRUzSBk=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"]];
});

_c = AppBarBar;

var _c;

$RefreshReg$(_c, "AppBarBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FwcEJhckJhci5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJhcHBCYXIiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwiYm94U2hhZG93IiwiekluZGV4IiwiYnJlYWtwb2ludHMiLCJkb3duIiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImRpc3BsYXkiLCJ0b29sYmFyIiwianVzdGlmeUNvbnRlbnQiLCJ0aXRsZSIsImN1cnNvciIsIndpZHRoIiwibWVudSIsIm1hcmdpbkxlZnQiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZWZ0IiwidG9wIiwiZmxleERpcmVjdGlvbiIsInRyYW5zaXRpb24iLCJpc09wZW4iLCJtZW51SXRlbSIsIm1hcmdpblRvcCIsInNlYXJjaCIsImNsb3NlIiwidGV4dEFsaWduIiwiQXBwQmFyQmFyIiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwic2V0SXNPcGVuIiwiaXNTZWFyY2giLCJzZXRJc1NlYXJjaCIsImNoZ09wZW4iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInNlYXJjaENvbnRhaW5lciIsInNlYXJjaE9wZW4iLCJzZWFyY2hCb3giLCJzZWFyY2hJY29uIiwiaW5wdXRSb290IiwiaW5wdXQiLCJpbnB1dElucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FEaUM7QUFJdkNDLFVBQU0sRUFBRTtBQUNOQyxhQUFPLEVB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O0FBQUE7QUFBQTtBQUFBLGdCQUROLGVBSU0scUVBQUMsb0VBQUQ7QUFDRSxxQkFBVyxFQUFDLGNBRGQ7QUFFRSxpQkFBTyxFQUFFO0FBQ1BoRCxnQkFBSSxFQUFFa0MsT0FBTyxDQUFDZSxTQURQO0FBRVBDLGlCQUFLLEVBQUVoQixPQUFPLENBQUNpQjtBQUZSLFdBRlg7QUFNRSxvQkFBVSxFQUFFO0FBQUUsMEJBQWM7QUFBaEI7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQ0Q7O0dBakR1QmxCLFM7VUFDTnBDLFMsRUFDRHVDLHNEOzs7S0FGT0gsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMmQ2Zjc5MTNjNjEzOGZiZTc2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlJztcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsICAgIFxyXG4gIH0sXHJcbiAgYXBwQmFyOiB7XHJcbiAgICBwYWRkaW5nOiAnMHB4IDUwcHgnLFxyXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCAgICBcclxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgekluZGV4OiAxLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6ICcwcHggMTZweCcsICAgICAgXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDApLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRvb2xiYXI6e1xyXG4gICAgcGFkZGluZzogMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXTogeyAgICAgIFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbidcclxuICAgIH0sXHJcbiAgfSwgIFxyXG4gIHRpdGxlOiB7ICAgIFxyXG4gICAgJyY6aG92ZXInOntcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgIH0sICAgIFxyXG4gICAgd2lkdGg6ICdhdXRvJ1xyXG4gIH0sXHJcbiAgbWVudTp7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsICAgIFxyXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUMxQzFDJywgICAgICBcclxuICAgICAgbGVmdDogLTUwMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgICAgICBcclxuICAgICAgdHJhbnNpdGlvbiA6ICdsZWZ0IDAuNnMnLFxyXG4gICAgfSwgICAgXHJcbiAgfSxcclxuICBpc09wZW46e1xyXG4gICAgXHJcbiAgICAgIGxlZnQ6IC0xNiwgICAgICBcclxuICAgIFxyXG4gIH0sXHJcbiAgbWVudUl0ZW06e1xyXG4gICAgbWFyZ2luTGVmdDogMzYsXHJcbiAgICBwYWRkaW5nOiAwLCAgICBcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IDE4LFxyXG4gICAgICBtYXJnaW5MZWZ0OiAxNixcclxuICAgICAgbWFyZ2luUmlnaHQ6IDI0LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlYXJjaDp7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNsb3NlOntcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgIGRpc3BsYXk6J25vbmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB9LFxyXG4gIH1cclxuXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcEJhckJhcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzU2VhcmNoLCBzZXRJc1NlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNoZ09wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7ICAgIFxyXG4gICAgY29uc29sZS5sb2coJ2hhbG8nKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfT5cclxuICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+ICAgICAgICAgIFxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfT5cclxuICAgICAgICAgICAgTU9WSUVCT1RcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiIG9uQ2xpY2s9eygpID0+IGNoZ09wZW4oKX0+XHJcbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubWVudX0gJHtpc09wZW4gPyBjbGFzc2VzLmlzT3BlbiA6ICcnfWB9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLm1lbnVJdGVtfSAke2NsYXNzZXMuY2xvc2V9YH0gb25DbGljaz17KCkgPT4gY2hnT3BlbigpfT5YPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVJdGVtfT5Nb3ZpZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUl0ZW19PlRWIFNlcmllczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLm1lbnVJdGVtfSAke2NsYXNzZXMuc2VhcmNofWB9IGFyaWEtbGFiZWw9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5zZWFyY2hDb250YWluZXJ9ICR7aXNTZWFyY2ggPyBjbGFzc2VzLnNlYXJjaE9wZW4gOiAnJ31gfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEJveH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJY29ufT5cclxuICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPElucHV0QmFzZVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaOKAplwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLmlucHV0Um9vdCxcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dDogY2xhc3Nlcy5pbnB1dElucHV0LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ3NlYXJjaCcgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=