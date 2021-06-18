webpackHotUpdate_N_E("pages/movie/[movie_id]",{

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
      left: -500,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#1C1C1C',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FwcEJhckJhci5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJhcHBCYXIiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwiYm94U2hhZG93IiwiekluZGV4IiwiYnJlYWtwb2ludHMiLCJkb3duIiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwidG9vbGJhciIsImp1c3RpZnlDb250ZW50IiwidGl0bGUiLCJjdXJzb3IiLCJ3aWR0aCIsIm1lbnUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZWZ0IiwidG9wIiwiZmxleERpcmVjdGlvbiIsInRyYW5zaXRpb24iLCJpc09wZW4iLCJtZW51SXRlbSIsIm1hcmdpblRvcCIsInNlYXJjaCIsImNsb3NlIiwidGV4dEFsaWduIiwic2VhcmNoQ29udGFpbmVyIiwic2VhcmNoT3BlbiIsInNlYXJjaEJveCIsImFsaWduSXRlbXMiLCJpbnB1dFJvb3QiLCJBcHBCYXJCYXIiLCJjbGFzc2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJzZXRJc09wZW4iLCJpc1NlYXJjaCIsInNldElzU2VhcmNoIiwic2V0U2VhcmNoIiwiY2hnT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJjaGdTZWFyY2hPcGVuIiwiY2hnU2VhcmNoIiwicHVzaCIsImlucHV0IiwiaW5wdXRJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7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QUNENEMsc0Q7OztLQUZPSCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21vdmllL1ttb3ZpZV9pZF0uNTliZTdhNGM0MGJmNzM5OGI3YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZSc7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLCAgICBcclxuICB9LFxyXG4gIGFwcEJhcjoge1xyXG4gICAgcGFkZGluZzogJzBweCA1MHB4JyxcclxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywgICAgXHJcbiAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgIHpJbmRleDogMSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiAnMHB4IDE2cHgnLCAgICAgIFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBtYXJnaW5MZWZ0OiAwXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdG9vbGJhcjp7XHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7ICAgICAgXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ1xyXG4gICAgfSxcclxuICB9LCAgXHJcbiAgdGl0bGU6IHsgICAgXHJcbiAgICAnJjpob3Zlcic6e1xyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgfSwgICAgXHJcbiAgICB3aWR0aDogJ2F1dG8nXHJcbiAgfSxcclxuICBtZW51OntcclxuICAgIGRpc3BsYXk6ICdmbGV4JywgICAgXHJcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHdpZHRoOiAnMTAwdncnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxQzFDMUMnLCAgICAgIFxyXG4gICAgICBsZWZ0OiAtNTAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCAgICAgIFxyXG4gICAgICB0cmFuc2l0aW9uIDogJ2xlZnQgMC42cycsXHJcbiAgICB9LCAgICBcclxuICB9LFxyXG4gIGlzT3Blbjp7ICAgIFxyXG4gICAgICBsZWZ0OiAtMTYsXHJcbiAgfSxcclxuICBtZW51SXRlbTp7XHJcbiAgICBtYXJnaW5MZWZ0OiAzNixcclxuICAgIHBhZGRpbmc6IDAsICAgIFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpblRvcDogMTgsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IDE2LFxyXG4gICAgICBtYXJnaW5SaWdodDogMjQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoOntcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2xvc2U6e1xyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgZGlzcGxheTonbm9uZScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIH0sXHJcbiAgfSwgIFxyXG4gIHNlYXJjaENvbnRhaW5lcjp7XHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIHRvcDogMCwgICAgXHJcbiAgICBsZWZ0OiAtNTAwLFxyXG4gICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUMxQzFDJyxcclxuICAgIFxyXG4gICAgdHJhbnNpdGlvbjogJ2xlZnQgMXMnLFxyXG4gIH0sXHJcbiAgc2VhcmNoT3Blbjp7ICAgIFxyXG4gICAgbGVmdDogLTE2LFxyXG4gIH0sXHJcbiAgc2VhcmNoQm94OntcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZzogJzEwMHB4IDBweCAwcHggMHB4J1xyXG4gIH0sXHJcbiAgaW5wdXRSb290OntcclxuICAgIG1hcmdpbkxlZnQ6IDE2XHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBCYXJCYXIoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc1NlYXJjaCwgc2V0SXNTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBjaGdPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKCFpc09wZW4pOyAgICBcclxuICAgIGNvbnNvbGUubG9nKCdoYWxvJylcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZ1NlYXJjaE9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRJc1NlYXJjaCghaXNTZWFyY2gpOyAgICBcclxuICAgIGNvbnNvbGUubG9nKCdoYXNsbycpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGdTZWFyY2ggPSAoKSA9PiB7ICAgICAgXHJcbiAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xyXG4gICAgaWYoc2VhcmNoICE9PSAnJyl7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvc2VhcmNoLycgKyBzZWFyY2gpICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XHJcbiAgICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PiAgICAgICAgICBcclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0+XHJcbiAgICAgICAgICAgIE1PVklFQk9UXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtgYH0gYXJpYS1sYWJlbD1cInNlYXJjaFwiIG9uQ2xpY2s9eygpID0+IGNoZ1NlYXJjaE9wZW4oKX0+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiICBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiIG9uQ2xpY2s9eygpID0+IGNoZ09wZW4oKX0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubWVudX0gJHtpc09wZW4gPyBjbGFzc2VzLmlzT3BlbiA6ICcnfWB9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLm1lbnVJdGVtfSAke2NsYXNzZXMuY2xvc2V9YH0gb25DbGljaz17KCkgPT4gY2hnT3BlbigpfT5YPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVJdGVtfT5Nb3ZpZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUl0ZW19PlRWIFNlcmllczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLm1lbnVJdGVtfSAke2NsYXNzZXMuc2VhcmNofWB9IGFyaWEtbGFiZWw9XCJzZWFyY2hcIiBvbkNsaWNrPXsoKSA9PiBjaGdTZWFyY2hPcGVuKCl9PlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLnNlYXJjaENvbnRhaW5lcn0gJHtpc1NlYXJjaCA/IGNsYXNzZXMuc2VhcmNoT3BlbiA6ICcnfWB9PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hCb3h9PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5tZW51SXRlbX0gJHtjbGFzc2VzLmNsb3NlfWB9IG9uQ2xpY2s9eygpID0+IGNoZ1NlYXJjaE9wZW4oKX0+WDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2jigKZcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ3NlYXJjaCcgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJY29ufSBvbkNsaWNrPXsoKSA9PiBjaGdTZWFyY2goKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==