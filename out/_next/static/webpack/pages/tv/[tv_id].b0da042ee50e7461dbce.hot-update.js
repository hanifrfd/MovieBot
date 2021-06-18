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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FwcEJhckJhci5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJhcHBCYXIiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwiYm94U2hhZG93IiwiekluZGV4IiwiYnJlYWtwb2ludHMiLCJkb3duIiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImRpc3BsYXkiLCJ0b29sYmFyIiwianVzdGlmeUNvbnRlbnQiLCJ0aXRsZSIsImN1cnNvciIsIndpZHRoIiwibWVudSIsIm1hcmdpbkxlZnQiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZWZ0IiwidG9wIiwiZmxleERpcmVjdGlvbiIsInRyYW5zaXRpb24iLCJpc09wZW4iLCJtZW51SXRlbSIsIm1hcmdpblRvcCIsInNlYXJjaCIsImNsb3NlIiwidGV4dEFsaWduIiwic2VhcmNoQ29udGFpbmVyIiwic2VhcmNoQm94IiwiYWxpZ25JdGVtcyIsImlucHV0Um9vdCIsIkFwcEJhckJhciIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNldElzT3BlbiIsImlzU2VhcmNoIiwic2V0SXNTZWFyY2giLCJjaGdPcGVuIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJzZWFyY2hPcGVuIiwic2VhcmNoSWNvbiIsImlucHV0IiwiaW5wdXRJbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBRGlDO0FBSXZDQyxVQUFNLEVBQUU7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MGU3NDYxZGJjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlJztcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsICAgIFxyXG4gIH0sXHJcbiAgYXBwQmFyOiB7XHJcbiAgICBwYWRkaW5nOiAnMHB4IDUwcHgnLFxyXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCAgICBcclxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgekluZGV4OiAxLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6ICcwcHggMTZweCcsICAgICAgXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiAwXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdG9vbGJhcjp7XHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7ICAgICAgXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ1xyXG4gICAgfSxcclxuICB9LCAgXHJcbiAgdGl0bGU6IHsgICAgXHJcbiAgICAnJjpob3Zlcic6e1xyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgfSwgICAgXHJcbiAgICB3aWR0aDogJ2F1dG8nXHJcbiAgfSxcclxuICBtZW51OntcclxuICAgIGRpc3BsYXk6ICdmbGV4JywgICAgXHJcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHdpZHRoOiAnMTAwdncnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxQzFDMUMnLCAgICAgIFxyXG4gICAgICBsZWZ0OiAtNTAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCAgICAgIFxyXG4gICAgICB0cmFuc2l0aW9uIDogJ2xlZnQgMC42cycsXHJcbiAgICB9LCAgICBcclxuICB9LFxyXG4gIGlzT3Blbjp7XHJcbiAgICBcclxuICAgICAgbGVmdDogLTE2LCAgICAgIFxyXG4gICAgXHJcbiAgfSxcclxuICBtZW51SXRlbTp7XHJcbiAgICBtYXJnaW5MZWZ0OiAzNixcclxuICAgIHBhZGRpbmc6IDAsICAgIFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpblRvcDogMTgsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IDE2LFxyXG4gICAgICBtYXJnaW5SaWdodDogMjQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoOntcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2xvc2U6e1xyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgZGlzcGxheTonbm9uZScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWFyY2hDb250YWluZXI6e1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDY0LFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzFDMUMxQycsXHJcbiAgfSxcclxuICBzZWFyY2hCb3g6e1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiAnMjRweCAwcHggMHB4IDBweCdcclxuICB9LFxyXG4gIGlucHV0Um9vdDp7XHJcbiAgICBtYXJnaW5MZWZ0OiAxNlxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwQmFyQmFyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNTZWFyY2gsIHNldElzU2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgY2hnT3BlbiA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbighaXNPcGVuKTsgICAgXHJcbiAgICBjb25zb2xlLmxvZygnaGFsbycpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9PlxyXG4gICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT4gICAgICAgICAgXHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9PlxyXG4gICAgICAgICAgICBNT1ZJRUJPVFxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17YGB9IGFyaWEtbGFiZWw9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259IGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCIgb25DbGljaz17KCkgPT4gY2hnT3BlbigpfT5cclxuICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLm1lbnV9ICR7aXNPcGVuID8gY2xhc3Nlcy5pc09wZW4gOiAnJ31gfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5tZW51SXRlbX0gJHtjbGFzc2VzLmNsb3NlfWB9IG9uQ2xpY2s9eygpID0+IGNoZ09wZW4oKX0+WDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51SXRlbX0+TW92aWVzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVJdGVtfT5UViBTZXJpZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5tZW51SXRlbX0gJHtjbGFzc2VzLnNlYXJjaH1gfSBhcmlhLWxhYmVsPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuc2VhcmNoQ29udGFpbmVyfSAke2lzU2VhcmNoID8gY2xhc3Nlcy5zZWFyY2hPcGVuIDogJyd9YH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hCb3h9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2jigKZcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdzZWFyY2gnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9