webpackHotUpdate_N_E("pages/search/[search]",{

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
      width: '100vw',
      height: '100vh',
      backgroundColor: '#1C1C1C',
      left: -500,
      transition: 'left 1s'
    },
    searchOpen: {
      left: -16
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

  var chgSearchOpen = function chgSearchOpen() {
    setIsSearch(!isSearch);
    console.log('haslo');
  };

  var chgSearch = function chgSearch() {
    console.log(search);

    if (search !== '') {
      router.push('/search/' + search);
    }
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
          lineNumber: 141,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.menuButton,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            edge: "start",
            color: "inherit",
            className: "",
            "aria-label": "search",
            onClick: function onClick() {
              return chgSearchOpen();
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
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
              lineNumber: 149,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
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
            lineNumber: 153,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "subtitle1",
            color: "inherit",
            className: classes.menuItem,
            children: "Movies"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "subtitle1",
            color: "inherit",
            className: classes.menuItem,
            children: "TV Series"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            edge: "start",
            color: "inherit",
            className: "".concat(classes.menuItem, " ").concat(classes.search),
            "aria-label": "search",
            onClick: function onClick() {
              return chgSearchOpen();
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "".concat(classes.searchContainer, " ").concat(isSearch ? classes.searchOpen : ''),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.searchBox,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "subtitle1",
          color: "inherit",
          className: "".concat(classes.menuItem, " ").concat(classes.close),
          onClick: function onClick() {
            return chgSearchOpen();
          },
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_10__["default"], {
          placeholder: "Search\u2026",
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput
          },
          onChange: function onChange(e) {
            return setSearch(e.target.value);
          },
          inputProps: {
            'aria-label': 'search'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.searchIcon,
          onClick: function onClick() {
            return chgSearch();
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 138,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FwcEJhckJhci5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJhcHBCYXIiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwiYm94U2hhZG93IiwiekluZGV4IiwiYnJlYWtwb2ludHMiLCJkb3duIiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwidG9vbGJhciIsImp1c3RpZnlDb250ZW50IiwidGl0bGUiLCJjdXJzb3IiLCJ3aWR0aCIsIm1lbnUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZWZ0IiwidG9wIiwiZmxleERpcmVjdGlvbiIsInRyYW5zaXRpb24iLCJpc09wZW4iLCJtZW51SXRlbSIsIm1hcmdpblRvcCIsInNlYXJjaCIsImNsb3NlIiwidGV4dEFsaWduIiwic2VhcmNoQ29udGFpbmVyIiwic2VhcmNoT3BlbiIsInNlYXJjaEJveCIsImFsaWduSXRlbXMiLCJpbnB1dFJvb3QiLCJBcHBCYXJCYXIiLCJjbGFzc2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJzZXRJc09wZW4iLCJpc1NlYXJjaCIsInNldElzU2VhcmNoIiwic2V0U2VhcmNoIiwiY2hnT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJjaGdTZWFyY2hPcGVuIiwiY2hnU2VhcmNoIiwicHVzaCIsImlucHV0IiwiaW5wdXRJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7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QUNENEMsc0Q7OztLQUZPSCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC9bc2VhcmNoXS4yOGE1Mjk1NzA0MGMzZTcyNDdmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlJztcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsICAgIFxyXG4gIH0sXHJcbiAgYXBwQmFyOiB7XHJcbiAgICBwYWRkaW5nOiAnMHB4IDUwcHgnLFxyXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCAgICBcclxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgekluZGV4OiAxLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6ICcwcHggMTZweCcsICAgICAgXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IDBcclxuICAgIH0sXHJcbiAgfSxcclxuICB0b29sYmFyOntcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHsgICAgICBcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXHJcbiAgICB9LFxyXG4gIH0sICBcclxuICB0aXRsZTogeyAgICBcclxuICAgICcmOmhvdmVyJzp7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICB9LCAgICBcclxuICAgIHdpZHRoOiAnYXV0bydcclxuICB9LFxyXG4gIG1lbnU6e1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLCAgICBcclxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFDMUMxQycsICAgICAgXHJcbiAgICAgIGxlZnQ6IC01MDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsICAgICAgXHJcbiAgICAgIHRyYW5zaXRpb24gOiAnbGVmdCAwLjZzJyxcclxuICAgIH0sICAgIFxyXG4gIH0sXHJcbiAgaXNPcGVuOnsgICAgXHJcbiAgICAgIGxlZnQ6IC0xNixcclxuICB9LFxyXG4gIG1lbnVJdGVtOntcclxuICAgIG1hcmdpbkxlZnQ6IDM2LFxyXG4gICAgcGFkZGluZzogMCwgICAgXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiAxOCxcclxuICAgICAgbWFyZ2luTGVmdDogMTYsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiAyNCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWFyY2g6e1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjbG9zZTp7XHJcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXHJcbiAgICBkaXNwbGF5Oidub25lJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgfSxcclxuICB9LCAgXHJcbiAgc2VhcmNoQ29udGFpbmVyOntcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgXHJcbiAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMxQzFDMUMnLFxyXG4gICAgbGVmdDogLTUwMCxcclxuICAgIHRyYW5zaXRpb246ICdsZWZ0IDFzJyxcclxuICB9LFxyXG4gIHNlYXJjaE9wZW46eyAgICBcclxuICAgIGxlZnQ6IC0xNixcclxuICB9LFxyXG4gIHNlYXJjaEJveDp7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6ICcxMDBweCAwcHggMHB4IDBweCdcclxuICB9LFxyXG4gIGlucHV0Um9vdDp7XHJcbiAgICBtYXJnaW5MZWZ0OiAxNlxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwQmFyQmFyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNTZWFyY2gsIHNldElzU2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgY2hnT3BlbiA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbighaXNPcGVuKTsgICAgXHJcbiAgICBjb25zb2xlLmxvZygnaGFsbycpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGdTZWFyY2hPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0SXNTZWFyY2goIWlzU2VhcmNoKTsgICAgXHJcbiAgICBjb25zb2xlLmxvZygnaGFzbG8nKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hnU2VhcmNoID0gKCkgPT4geyAgICAgIFxyXG4gICAgY29uc29sZS5sb2coc2VhcmNoKTtcclxuICAgIGlmKHNlYXJjaCAhPT0gJycpe1xyXG4gICAgICByb3V0ZXIucHVzaCgnL3NlYXJjaC8nICsgc2VhcmNoKSAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9PlxyXG4gICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT4gICAgICAgICAgXHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9PlxyXG4gICAgICAgICAgICBNT1ZJRUJPVFxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17YGB9IGFyaWEtbGFiZWw9XCJzZWFyY2hcIiBvbkNsaWNrPXsoKSA9PiBjaGdTZWFyY2hPcGVuKCl9PlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiAgY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIm1lbnVcIiBvbkNsaWNrPXsoKSA9PiBjaGdPcGVuKCl9PlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLm1lbnV9ICR7aXNPcGVuID8gY2xhc3Nlcy5pc09wZW4gOiAnJ31gfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5tZW51SXRlbX0gJHtjbGFzc2VzLmNsb3NlfWB9IG9uQ2xpY2s9eygpID0+IGNoZ09wZW4oKX0+WDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51SXRlbX0+TW92aWVzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVJdGVtfT5UViBTZXJpZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5tZW51SXRlbX0gJHtjbGFzc2VzLnNlYXJjaH1gfSBhcmlhLWxhYmVsPVwic2VhcmNoXCIgb25DbGljaz17KCkgPT4gY2hnU2VhcmNoT3BlbigpfT5cclxuICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5zZWFyY2hDb250YWluZXJ9ICR7aXNTZWFyY2ggPyBjbGFzc2VzLnNlYXJjaE9wZW4gOiAnJ31gfT5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQm94fT4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubWVudUl0ZW19ICR7Y2xhc3Nlcy5jbG9zZX1gfSBvbkNsaWNrPXsoKSA9PiBjaGdTZWFyY2hPcGVuKCl9Plg8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNo4oCmXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuaW5wdXRSb290LFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0SW5wdXQsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdzZWFyY2gnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0gb25DbGljaz17KCkgPT4gY2hnU2VhcmNoKCl9PlxyXG4gICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=