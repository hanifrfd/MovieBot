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
      marginRight: 0
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
      position: 'absolute',
      top: 64,
      width: '100%',
      height: '100%',
      backgroundColor: '#1C1C1C'
    },
    searchBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 0px 0px 0px'
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
          lineNumber: 123,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            edge: "start",
            color: "inherit",
            className: "",
            "aria-label": "search",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
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
              lineNumber: 131,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
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
            lineNumber: 135,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "subtitle1",
            color: "inherit",
            className: classes.menuItem,
            children: "Movies"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "subtitle1",
            color: "inherit",
            className: classes.menuItem,
            children: "TV Series"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            edge: "start",
            color: "inherit",
            className: "".concat(classes.menuItem, " ").concat(classes.search),
            "aria-label": "search",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "".concat(classes.searchContainer, " ").concat(isSearch ? classes.searchOpen : ''),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.searchBox,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.searchIcon,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
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
          lineNumber: 149,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 120,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FwcEJhckJhci5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJhcHBCYXIiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwiYm94U2hhZG93IiwiekluZGV4IiwiYnJlYWtwb2ludHMiLCJkb3duIiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImRpc3BsYXkiLCJ0b29sYmFyIiwianVzdGlmeUNvbnRlbnQiLCJ0aXRsZSIsImN1cnNvciIsIndpZHRoIiwibWVudSIsIm1hcmdpbkxlZnQiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZWZ0IiwidG9wIiwiZmxleERpcmVjdGlvbiIsInRyYW5zaXRpb24iLCJpc09wZW4iLCJtZW51SXRlbSIsIm1hcmdpblRvcCIsInNlYXJjaCIsImNsb3NlIiwidGV4dEFsaWduIiwic2VhcmNoQ29udGFpbmVyIiwic2VhcmNoQm94IiwiYWxpZ25JdGVtcyIsImlucHV0Um9vdCIsIkFwcEJhckJhciIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNldElzT3BlbiIsImlzU2VhcmNoIiwic2V0SXNTZWFyY2giLCJjaGdPcGVuIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJzZWFyY2hPcGVuIiwic2VhcmNoSWNvbiIsImlucHV0IiwiaW5wdXRJbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBRGlDO0FBSXZDQyxVQUFNLEVBQUU7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MWRiY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZSc7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLCAgICBcclxuICB9LFxyXG4gIGFwcEJhcjoge1xyXG4gICAgcGFkZGluZzogJzBweCA1MHB4JyxcclxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywgICAgXHJcbiAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgIHpJbmRleDogMSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiAnMHB4IDE2cHgnLCAgICAgIFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBtYXJnaW5SaWdodDogMFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRvb2xiYXI6e1xyXG4gICAgcGFkZGluZzogMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXTogeyAgICAgIFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbidcclxuICAgIH0sXHJcbiAgfSwgIFxyXG4gIHRpdGxlOiB7ICAgIFxyXG4gICAgJyY6aG92ZXInOntcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgIH0sICAgIFxyXG4gICAgd2lkdGg6ICdhdXRvJ1xyXG4gIH0sXHJcbiAgbWVudTp7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsICAgIFxyXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUMxQzFDJywgICAgICBcclxuICAgICAgbGVmdDogLTUwMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgICAgICBcclxuICAgICAgdHJhbnNpdGlvbiA6ICdsZWZ0IDAuNnMnLFxyXG4gICAgfSwgICAgXHJcbiAgfSxcclxuICBpc09wZW46e1xyXG4gICAgXHJcbiAgICAgIGxlZnQ6IC0xNiwgICAgICBcclxuICAgIFxyXG4gIH0sXHJcbiAgbWVudUl0ZW06e1xyXG4gICAgbWFyZ2luTGVmdDogMzYsXHJcbiAgICBwYWRkaW5nOiAwLCAgICBcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IDE4LFxyXG4gICAgICBtYXJnaW5MZWZ0OiAxNixcclxuICAgICAgbWFyZ2luUmlnaHQ6IDI0LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlYXJjaDp7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNsb3NlOntcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgIGRpc3BsYXk6J25vbmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoQ29udGFpbmVyOntcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiA2NCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMxQzFDMUMnLFxyXG4gIH0sXHJcbiAgc2VhcmNoQm94OntcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZzogJzI0cHggMHB4IDBweCAwcHgnXHJcbiAgfSxcclxuICBpbnB1dFJvb3Q6e1xyXG4gICAgbWFyZ2luTGVmdDogMTZcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcEJhckJhcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzU2VhcmNoLCBzZXRJc1NlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNoZ09wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7ICAgIFxyXG4gICAgY29uc29sZS5sb2coJ2hhbG8nKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfT5cclxuICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+ICAgICAgICAgIFxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfT5cclxuICAgICAgICAgICAgTU9WSUVCT1RcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2BgfSBhcmlhLWxhYmVsPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiIG9uQ2xpY2s9eygpID0+IGNoZ09wZW4oKX0+XHJcbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5tZW51fSAke2lzT3BlbiA/IGNsYXNzZXMuaXNPcGVuIDogJyd9YH0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubWVudUl0ZW19ICR7Y2xhc3Nlcy5jbG9zZX1gfSBvbkNsaWNrPXsoKSA9PiBjaGdPcGVuKCl9Plg8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUl0ZW19Pk1vdmllczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51SXRlbX0+VFYgU2VyaWVzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubWVudUl0ZW19ICR7Y2xhc3Nlcy5zZWFyY2h9YH0gYXJpYS1sYWJlbD1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLnNlYXJjaENvbnRhaW5lcn0gJHtpc1NlYXJjaCA/IGNsYXNzZXMuc2VhcmNoT3BlbiA6ICcnfWB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQm94fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEljb259PlxyXG4gICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNo4oCmXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuaW5wdXRSb290LFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0SW5wdXQsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnc2VhcmNoJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==