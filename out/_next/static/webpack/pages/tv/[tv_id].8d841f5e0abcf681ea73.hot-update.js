webpackHotUpdate_N_E("pages/tv/[tv_id]",{

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
      marginLeft: 0
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
    }),
    searchContainer: {
      position: 'fixed',
      top: 0,
      zIndex: 999,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#1C1C1C'
    },
    searchBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 0px 0px 0px'
    },
    inputRoot: {
      marginLeft: 16
    }
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      search = _useState3[0],
      setSearch = _useState3[1];

  var chgOpen = function chgOpen() {
    setIsOpen(!isOpen);
    console.log('halo');
  };

  var chgSearch = function chgSearch() {
    setIsSearch(!isSearch);
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
          lineNumber: 129,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            edge: "start",
            color: "inherit",
            className: "",
            "aria-label": "search",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            onClick: function onClick() {
              return chgOpen();
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
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
            lineNumber: 141,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "subtitle1",
            color: "inherit",
            className: classes.menuItem,
            children: "Movies"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "subtitle1",
            color: "inherit",
            className: classes.menuItem,
            children: "TV Series"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            edge: "start",
            color: "inherit",
            className: "".concat(classes.menuItem, " ").concat(classes.search),
            "aria-label": "search",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "".concat(classes.searchContainer, " ").concat(isSearch ? classes.searchOpen : ''),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.searchBox,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
          lineNumber: 152,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.searchIcon,
          onClick: function onClick() {
            return chgSearch();
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 5
  }, this);
}

_s(AppBarBar, "yAWws7tp1f9nmZOrov4yek4KpE0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FwcEJhckJhci5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJhcHBCYXIiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwiYm94U2hhZG93IiwiekluZGV4IiwiYnJlYWtwb2ludHMiLCJkb3duIiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwidG9vbGJhciIsImp1c3RpZnlDb250ZW50IiwidGl0bGUiLCJjdXJzb3IiLCJ3aWR0aCIsIm1lbnUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZWZ0IiwidG9wIiwiZmxleERpcmVjdGlvbiIsInRyYW5zaXRpb24iLCJpc09wZW4iLCJtZW51SXRlbSIsIm1hcmdpblRvcCIsInNlYXJjaCIsImNsb3NlIiwidGV4dEFsaWduIiwic2VhcmNoQ29udGFpbmVyIiwic2VhcmNoQm94IiwiYWxpZ25JdGVtcyIsImlucHV0Um9vdCIsIkFwcEJhckJhciIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNldElzT3BlbiIsImlzU2VhcmNoIiwic2V0SXNTZWFyY2giLCJzZXRTZWFyY2giLCJjaGdPcGVuIiwiY29uc29sZSIsImxvZyIsImNoZ1NlYXJjaCIsInB1c2giLCJzZWFyY2hPcGVuIiwiaW5wdXQiLCJpbnB1dElucHV0Iiwic2VhcmNoSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQURO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O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRDs7R0E3RHVCWixTO1VBQ054QyxTLEVBQ0QyQyxzRDs7O0tBRk9ILFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHYvW3R2X2lkXS44ZDg0MWY1ZTBhYmNmNjgxZWE3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlJztcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsICAgIFxyXG4gIH0sXHJcbiAgYXBwQmFyOiB7XHJcbiAgICBwYWRkaW5nOiAnMHB4IDUwcHgnLFxyXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCAgICBcclxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgekluZGV4OiAxLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6ICcwcHggMTZweCcsICAgICAgXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IDBcclxuICAgIH0sXHJcbiAgfSxcclxuICB0b29sYmFyOntcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHsgICAgICBcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXHJcbiAgICB9LFxyXG4gIH0sICBcclxuICB0aXRsZTogeyAgICBcclxuICAgICcmOmhvdmVyJzp7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICB9LCAgICBcclxuICAgIHdpZHRoOiAnYXV0bydcclxuICB9LFxyXG4gIG1lbnU6e1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLCAgICBcclxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFDMUMxQycsICAgICAgXHJcbiAgICAgIGxlZnQ6IC01MDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsICAgICAgXHJcbiAgICAgIHRyYW5zaXRpb24gOiAnbGVmdCAwLjZzJyxcclxuICAgIH0sICAgIFxyXG4gIH0sXHJcbiAgaXNPcGVuOnsgICAgXHJcbiAgICAgIGxlZnQ6IC0xNixcclxuICB9LFxyXG4gIG1lbnVJdGVtOntcclxuICAgIG1hcmdpbkxlZnQ6IDM2LFxyXG4gICAgcGFkZGluZzogMCwgICAgXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiAxOCxcclxuICAgICAgbWFyZ2luTGVmdDogMTYsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiAyNCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWFyY2g6e1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjbG9zZTp7XHJcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXHJcbiAgICBkaXNwbGF5Oidub25lJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlYXJjaENvbnRhaW5lcjp7XHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIHRvcDogMCxcclxuICAgIHpJbmRleDogOTk5LFxyXG4gICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUMxQzFDJyxcclxuICB9LFxyXG4gIHNlYXJjaEJveDp7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6ICcxMDBweCAwcHggMHB4IDBweCdcclxuICB9LFxyXG4gIGlucHV0Um9vdDp7XHJcbiAgICBtYXJnaW5MZWZ0OiAxNlxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwQmFyQmFyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNTZWFyY2gsIHNldElzU2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgY2hnT3BlbiA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbighaXNPcGVuKTsgICAgXHJcbiAgICBjb25zb2xlLmxvZygnaGFsbycpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGdTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBzZXRJc1NlYXJjaCghaXNTZWFyY2gpOyAgXHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfT5cclxuICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+ICAgICAgICAgIFxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfT5cclxuICAgICAgICAgICAgTU9WSUVCT1RcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17YGB9IGFyaWEtbGFiZWw9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgIGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCIgb25DbGljaz17KCkgPT4gY2hnT3BlbigpfT5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5tZW51fSAke2lzT3BlbiA/IGNsYXNzZXMuaXNPcGVuIDogJyd9YH0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubWVudUl0ZW19ICR7Y2xhc3Nlcy5jbG9zZX1gfSBvbkNsaWNrPXsoKSA9PiBjaGdPcGVuKCl9Plg8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUl0ZW19Pk1vdmllczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51SXRlbX0+VFYgU2VyaWVzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubWVudUl0ZW19ICR7Y2xhc3Nlcy5zZWFyY2h9YH0gYXJpYS1sYWJlbD1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLnNlYXJjaENvbnRhaW5lcn0gJHtpc1NlYXJjaCA/IGNsYXNzZXMuc2VhcmNoT3BlbiA6ICcnfWB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQm94fT4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNo4oCmXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuaW5wdXRSb290LFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0SW5wdXQsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnc2VhcmNoJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEljb259IG9uQ2xpY2s9eygpID0+IGNoZ1NlYXJjaCgpfT5cclxuICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9