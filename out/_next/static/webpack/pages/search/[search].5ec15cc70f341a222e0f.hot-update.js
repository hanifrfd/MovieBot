webpackHotUpdate_N_E("pages/search/[search]",{

/***/ "./pages/search/[search].js":
/*!**********************************!*\
  !*** ./pages/search/[search].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return movieInfo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_seach_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/seach_data */ "./data/seach_data.js");
/* harmony import */ var _component_AppBarBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/AppBarBar */ "./component/AppBarBar.js");
/* harmony import */ var _component_Jumbotron__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/Jumbotron */ "./component/Jumbotron.js");
/* harmony import */ var _component_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/ListItem */ "./component/ListItem.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "G:\\Project\\Project\\Web\\REACT\\moviebot\\nextjs\\moviebot\\pages\\search\\[search].js",
    _s = $RefreshSig$();










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return {
    movieInfo: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      padding: '0px 100px',
      marginTop: -70
    }, theme.breakpoints.down('sm'), {
      padding: '0px 16px'
    }),
    movieContainer: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.breakpoints.down('sm'), {
      justifyContent: 'center',
      textAlign: 'center'
    }),
    card: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      width: 214.54,
      height: 281.54,
      backgroundColor: 'silver',
      marginBottom: 16,
      marginRight: 8,
      backgroundSize: '100% 100%',
      backgroundPosition: '0% 0%',
      backgroundRepeat: 'no-repeat'
    }, theme.breakpoints.down('sm'), {
      width: 131.33,
      height: 171.73,
      marginBottom: 0,
      marginRight: 0
    }),
    movieTitle: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 54,
      justifyContent: 'center'
    }, theme.breakpoints.down('sm'), {
      marginLeft: 0,
      marginTop: 24
    }),
    movieTitleInfo: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginTop: 24
    }, theme.breakpoints.down('sm'), {
      marginLeft: 0,
      marginTop: 24,
      justifyContent: 'center'
    }),
    section: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: 'flex',
      marginTop: 32
    }, theme.breakpoints.down('sm'), {
      flexDirection: 'row',
      padding: '0px'
    }),
    recomm: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginTop: 32,
      padding: '0px 100px'
    }, theme.breakpoints.down('sm'), {
      marginTop: 18,
      padding: '0px 16px',
      justifyContent: 'center'
    }),
    infoItem: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginRight: 24
    }, theme.breakpoints.down('sm'), {
      marginRight: 8
    }),
    moviInfo_label: {
      marginBottom: 24
    },
    moviInfo_overview: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      paddingRight: 20
    }, theme.breakpoints.down('sm'), {
      padding: 0,
      marginBottom: 24
    })
  };
});
function movieInfo() {
  _s();

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _getSearch = Object(_data_seach_data__WEBPACK_IMPORTED_MODULE_5__["getSearch"])(router.query.search),
      search = _getSearch.search,
      error = _getSearch.error,
      datas = _getSearch.datas;

  if (!search) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [" ", console.log('nothing')]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 14
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [" ", console.log(datas), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 12
    }, this); // return (
    //   <div >
    //     <Head>        
    //       <meta name="description" content="Generated by create next app" />        
    //       <title>Moviebot</title>
    //     </Head>
    //     <AppBarBar></AppBarBar>
    //     <Jumbotron></Jumbotron>
    //     <main>
    //     {/* recommendation list */}
    //     <Grid container className={classes.recomm}>
    //       <Grid item xs={12}>
    //         <ListItem title="Recommendation" list="recommendation" type="movie" datas={search}></ListItem>
    //       </Grid>
    //     </Grid>
    //     </main>
    //     <footer>
    //     </footer>
    //   </div>        
    // )    
  }
}

_s(movieInfo, "y+nxznVgQ96pr4dCg1EC6WdujUg=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1tzZWFyY2hdLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1vdmllSW5mbyIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJicmVha3BvaW50cyIsImRvd24iLCJtb3ZpZUNvbnRhaW5lciIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiY2FyZCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJtb3ZpZVRpdGxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5MZWZ0IiwibW92aWVUaXRsZUluZm8iLCJzZWN0aW9uIiwicmVjb21tIiwiaW5mb0l0ZW0iLCJtb3ZpSW5mb19sYWJlbCIsIm1vdmlJbmZvX292ZXJ2aWV3IiwicGFkZGluZ1JpZ2h0IiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImdldFNlYXJjaCIsInF1ZXJ5Iiwic2VhcmNoIiwiZXJyb3IiLCJkYXRhcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsYUFBUztBQUNQQyxhQUFPLEVBQUUsV0FERjtBQUVQQyxlQUFTLEVBQUUsQ0FBQztBQUZMLE9BR05ILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FITSxFQUd5QjtBQUM5QkgsYUFBTyxFQUFFO0FBRHFCLEtBSHpCLENBRDhCO0FBUXZDSSxrQkFBYyxpS0FDWE4s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Y0FJcEJBLEtBSm9CO0FBQUEsTUFJYkMsS0FKYSxjQUliQSxLQUphOztBQU9sQyxNQUFHLENBQUNGLE1BQUosRUFBVztBQUNULHdCQUFTO0FBQUEsc0JBQVFHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBVDtBQUNELEdBRkQsTUFFSztBQUNILHdCQUFPO0FBQUEsc0JBQU9ELE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVAsQ0FERyxDQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDRDtBQUNGOztHQWxDdUJuQyxTO1VBQ05ILFMsRUFDRGlDLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC9bc2VhcmNoXS41ZWMxNWNjNzBmMzQxYTIyMmUwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgZ2V0U2VhcmNoIH0gIGZyb20gJy4uLy4uL2RhdGEvc2VhY2hfZGF0YSdcclxuXHJcbmltcG9ydCBBcHBCYXJCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50L0FwcEJhckJhcidcclxuaW1wb3J0IEp1bWJvdHJvbiBmcm9tICcuLi8uLi9jb21wb25lbnQvSnVtYm90cm9uJ1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi4vLi4vY29tcG9uZW50L0xpc3RJdGVtJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIENhcmQsXHJcbiAgRGl2aWRlclxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoeyAgXHJcbiAgbW92aWVJbmZvOntcclxuICAgIHBhZGRpbmc6ICcwcHggMTAwcHgnLFxyXG4gICAgbWFyZ2luVG9wOiAtNzAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgcGFkZGluZzogJzBweCAxNnB4JywgICAgICBcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3ZpZUNvbnRhaW5lcjp7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHsgICAgXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkOntcclxuICAgIHdpZHRoOiAyMTQuNTQsXHJcbiAgICBoZWlnaHQ6IDI4MS41NCwgICAgXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdzaWx2ZXInLFxyXG4gICAgbWFyZ2luQm90dG9tOiAxNixcclxuICAgIG1hcmdpblJpZ2h0OiA4LFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMDAlIDEwMCUnLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMCUgMCUnLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgd2lkdGg6IDEzMS4zMyxcclxuICAgICAgaGVpZ2h0OiAxNzEuNzMsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgbWFyZ2luUmlnaHQ6IDAsICAgICAgXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW92aWVUaXRsZTp7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG1hcmdpbkxlZnQ6IDU0LFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICAgIG1hcmdpblRvcDogMjQsICAgICAgXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW92aWVUaXRsZUluZm86e1xyXG4gICAgbWFyZ2luVG9wOiAyNCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgICBtYXJnaW5Ub3A6IDI0LFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgICAgICAgICAgICBcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uOntcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIG1hcmdpblRvcDogMzIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVjb21tOntcclxuICAgIG1hcmdpblRvcDogMzIsXHJcbiAgICBwYWRkaW5nOiAnMHB4IDEwMHB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IDE4LFxyXG4gICAgICBwYWRkaW5nOiAnMHB4IDE2cHgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbmZvSXRlbTp7XHJcbiAgICBtYXJnaW5SaWdodDogMjQsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IDgsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW92aUluZm9fbGFiZWw6e1xyXG4gICAgbWFyZ2luQm90dG9tOiAyNCwgICAgXHJcbiAgfSxcclxuICBtb3ZpSW5mb19vdmVydmlldzp7XHJcbiAgICBwYWRkaW5nUmlnaHQ6MjAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbWFyZ2luQm90dG9tOiAyNFxyXG4gICAgfSxcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vdmllSW5mbygpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7ICAgIFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB7c2VhcmNoLGVycm9yLCBkYXRhc30gPSBnZXRTZWFyY2gocm91dGVyLnF1ZXJ5LnNlYXJjaCk7XHJcbiAgXHJcbiAgXHJcbiAgaWYoIXNlYXJjaCl7ICAgICAgIFxyXG4gICAgcmV0dXJuICggPGRpdj4geyBjb25zb2xlLmxvZygnbm90aGluZycpIH08L2Rpdj4gKVxyXG4gIH1lbHNleyAgICBcclxuICAgIHJldHVybiA8ZGl2PiB7Y29uc29sZS5sb2coZGF0YXMpfSA8L2Rpdj5cclxuICAgIC8vIHJldHVybiAoXHJcbiAgICAvLyAgIDxkaXYgPlxyXG4gICAgLy8gICAgIDxIZWFkPiAgICAgICAgXHJcbiAgICAvLyAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+ICAgICAgICBcclxuICAgIC8vICAgICAgIDx0aXRsZT5Nb3ZpZWJvdDwvdGl0bGU+XHJcbiAgICAvLyAgICAgPC9IZWFkPlxyXG4gICAgLy8gICAgIDxBcHBCYXJCYXI+PC9BcHBCYXJCYXI+XHJcbiAgICAvLyAgICAgPEp1bWJvdHJvbj48L0p1bWJvdHJvbj5cclxuICAgIC8vICAgICA8bWFpbj5cclxuICAgIC8vICAgICB7LyogcmVjb21tZW5kYXRpb24gbGlzdCAqL31cclxuICAgIC8vICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJlY29tbX0+XHJcbiAgICAvLyAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAvLyAgICAgICAgIDxMaXN0SXRlbSB0aXRsZT1cIlJlY29tbWVuZGF0aW9uXCIgbGlzdD1cInJlY29tbWVuZGF0aW9uXCIgdHlwZT1cIm1vdmllXCIgZGF0YXM9e3NlYXJjaH0+PC9MaXN0SXRlbT5cclxuICAgIC8vICAgICAgIDwvR3JpZD5cclxuICAgIC8vICAgICA8L0dyaWQ+XHJcbiAgICAvLyAgICAgPC9tYWluPlxyXG5cclxuICAgIC8vICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgXHJcbiAgICAvLyAgICAgPC9mb290ZXI+XHJcbiAgICAvLyAgIDwvZGl2PiAgICAgICAgXHJcbiAgICAvLyApICAgIFxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9