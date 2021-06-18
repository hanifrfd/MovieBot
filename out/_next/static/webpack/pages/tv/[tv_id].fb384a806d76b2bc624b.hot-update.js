webpackHotUpdate_N_E("pages/tv/[tv_id]",{

/***/ "./pages/tv/[tv_id].js":
/*!*****************************!*\
  !*** ./pages/tv/[tv_id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tvInfo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _data_tv_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/tv_data */ "./data/tv_data.js");
/* harmony import */ var _component_AppBarBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/AppBarBar */ "./component/AppBarBar.js");
/* harmony import */ var _component_Jumbotron__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/Jumbotron */ "./component/Jumbotron.js");
/* harmony import */ var _component_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../component/ListItem */ "./component/ListItem.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "G:\\Project\\Project\\Web\\REACT\\moviebot\\nextjs\\moviebot\\pages\\tv\\[tv_id].js",
    _s = $RefreshSig$();











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
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
function tvInfo() {
  _s();

  var _this = this;

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _getTv = Object(_data_tv_data__WEBPACK_IMPORTED_MODULE_6__["getTv"])(router.query.tv_id),
      tv = _getTv.tv;

  var _getTrailer = Object(_data_tv_data__WEBPACK_IMPORTED_MODULE_6__["getTrailer"])(router.query.tv_id),
      trailer = _getTrailer.trailer;

  var _getCast = Object(_data_tv_data__WEBPACK_IMPORTED_MODULE_6__["getCast"])(router.query.tv_id),
      cast = _getCast.cast;

  var _getRecomm = Object(_data_tv_data__WEBPACK_IMPORTED_MODULE_6__["getRecomm"])(router.query.tv_id),
      recomm = _getRecomm.recomm;

  if (!tv) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [" ", console.log('nothing')]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 14
    }, this);
  } else {
    console.log(tv);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "description",
          content: "Generated by create next app"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Moviebot"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_AppBarBar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Jumbotron__WEBPACK_IMPORTED_MODULE_8__["default"], {
        img: tv
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
          container: true,
          className: classes.movieInfo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
            item: true,
            container: true,
            xs: 12,
            className: classes.movieContainer,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
              item: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Card"], {
                className: classes.card,
                style: {
                  backgroundImage: "url(\"https://image.tmdb.org/t/p/w500".concat(tv.poster_path, "\")")
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: classes.movieTitle,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "h3",
                children: tv.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
                item: true,
                container: true,
                className: classes.movieTitleInfo,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                  variant: "subtitle1",
                  className: classes.infoItem,
                  children: tv.release_date
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
                  orientation: "vertical",
                  flexItem: true,
                  className: classes.infoItem
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 17
                }, this), tv.genres.map(function (genre, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                    variant: "subtitle1",
                    className: classes.infoItem,
                    children: genre.name
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 23
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
                  orientation: "vertical",
                  flexItem: true,
                  className: classes.infoItem
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                  variant: "subtitle1",
                  className: classes.infoItem,
                  children: tv.vote_average
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
            item: true,
            container: true,
            xs: 12,
            className: classes.section,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
              item: true,
              md: 6,
              xs: 12,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "h6",
                className: classes.moviInfo_label,
                children: "Overview"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                className: classes.moviInfo_overview,
                children: tv.overview
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
              item: true,
              md: 2,
              xs: 4,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "h6",
                className: classes.moviInfo_label,
                children: "Director"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                children: "Christoper Nolan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
              item: true,
              md: 2,
              xs: 4,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "h6",
                className: classes.moviInfo_label,
                children: "Revenue"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                children: ["$", tv.revenue]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
              item: true,
              md: 2,
              xs: 4,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "h6",
                className: classes.moviInfo_label,
                children: "Budget"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                children: ["$", tv.budget]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
            item: true,
            container: true,
            xs: 12,
            className: classes.section,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: "Trailer",
              type: "trailer",
              datas: trailer
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: "Cast",
              type: "cast",
              datas: cast
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
          container: true,
          className: classes.recomm,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
            item: true,
            xs: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: "Recommendation",
              list: "recommendation",
              type: "tv",
              datas: recomm
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this);
  }
} // tvInfo.getInitialProps = async (context) => {    
//   const res = await fetch(`https://api.themoviedb.org/3/tv/${context.query.tv_id}?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`)
//   const tv = await res.json()
//   const res2 = await fetch(`https://api.themoviedb.org/3/tv/${context.query.tv_id}/similar?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US&page=1`)
//   const recomm = await res2.json()
//   const res3 = await fetch(`https://api.themoviedb.org/3/tv/${context.query.tv_id}/videos?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`)
//   const trailer = await res3.json()
//   const res4 = await fetch(`https://api.themoviedb.org/3/tv/${context.query.tv_id}/credits?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`)
//   const cast = await res4.json()
//   return { tv, recomm, trailer, cast }
// }

_s(tvInfo, "y+nxznVgQ96pr4dCg1EC6WdujUg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHYvW3R2X2lkXS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtb3ZpZUluZm8iLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiYnJlYWtwb2ludHMiLCJkb3duIiwibW92aWVDb250YWluZXIiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsImNhcmQiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwibW92aWVUaXRsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luTGVmdCIsIm1vdmllVGl0bGVJbmZvIiwic2VjdGlvbiIsInJlY29tbSIsImluZm9JdGVtIiwibW92aUluZm9fbGFiZWwiLCJtb3ZpSW5mb19vdmVydmlldyIsInBhZGRpbmdSaWdodCIsInR2SW5mbyIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXRUdiIsInF1ZXJ5IiwidHZfaWQiLCJ0diIsImdldFRyYWlsZXIiLCJ0cmFpbGVyIiwiZ2V0Q2FzdCIsImNhc3QiLCJnZXRSZWNvbW0iLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZEltYWdlIiwicG9zdGVyX3BhdGgiLCJuYW1lIiwicmVsZWFzZV9kYXRlIiwiZ2VucmVzIiwibWFwIiwiZ2VucmUiLCJpbmRleCIsInZvdGVfYXZlcmFnZSIsIm92ZXJ2aWV3IiwicmV2ZW51ZSIsImJ1ZGdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsSUFBTUEsU0FBUyxHQUFHQyw0RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxT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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBMkVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFpRkQ7QUFDRixDLENBRUQ7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTs7R0FuSHdCSyxNO1VBQ04vQixTLEVBQ0RrQyxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90di9bdHZfaWRdLmZiMzg0YTgwNmQ3NmIyYmM2MjRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcblxyXG5pbXBvcnQgeyBnZXRUdiwgZ2V0VHJhaWxlciwgZ2V0Q2FzdCwgZ2V0UmVjb21tIH0gZnJvbSAnLi4vLi4vZGF0YS90dl9kYXRhJ1xyXG5cclxuaW1wb3J0IEFwcEJhckJhciBmcm9tICcuLi8uLi9jb21wb25lbnQvQXBwQmFyQmFyJ1xyXG5pbXBvcnQgSnVtYm90cm9uIGZyb20gJy4uLy4uL2NvbXBvbmVudC9KdW1ib3Ryb24nXHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnQvTGlzdEl0ZW0nXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgQ2FyZCxcclxuICBEaXZpZGVyXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgbW92aWVJbmZvOntcclxuICAgIHBhZGRpbmc6ICcwcHggMTAwcHgnLFxyXG4gICAgbWFyZ2luVG9wOiAtNzAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgcGFkZGluZzogJzBweCAxNnB4JywgICAgICBcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3ZpZUNvbnRhaW5lcjp7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHsgICAgXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkOntcclxuICAgIHdpZHRoOiAyMTQuNTQsXHJcbiAgICBoZWlnaHQ6IDI4MS41NCwgICAgXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdzaWx2ZXInLFxyXG4gICAgbWFyZ2luQm90dG9tOiAxNixcclxuICAgIG1hcmdpblJpZ2h0OiA4LFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMDAlIDEwMCUnLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMCUgMCUnLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgd2lkdGg6IDEzMS4zMyxcclxuICAgICAgaGVpZ2h0OiAxNzEuNzMsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgbWFyZ2luUmlnaHQ6IDAsICAgICAgXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW92aWVUaXRsZTp7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG1hcmdpbkxlZnQ6IDU0LFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICAgIG1hcmdpblRvcDogMjQsICAgICAgXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW92aWVUaXRsZUluZm86e1xyXG4gICAgbWFyZ2luVG9wOiAyNCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgICBtYXJnaW5Ub3A6IDI0LFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgICAgICAgICAgICBcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uOntcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIG1hcmdpblRvcDogMzIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVjb21tOntcclxuICAgIG1hcmdpblRvcDogMzIsXHJcbiAgICBwYWRkaW5nOiAnMHB4IDEwMHB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiAnMHB4IDE2cHgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbmZvSXRlbTp7XHJcbiAgICBtYXJnaW5SaWdodDogMjQsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IDgsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW92aUluZm9fbGFiZWw6e1xyXG4gICAgbWFyZ2luQm90dG9tOiAyNCwgICAgXHJcbiAgfSxcclxuICBtb3ZpSW5mb19vdmVydmlldzp7XHJcbiAgICBwYWRkaW5nUmlnaHQ6MjAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbWFyZ2luQm90dG9tOiAyNFxyXG4gICAgfSxcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR2SW5mbygpIHsgIFxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTsgICAgXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHt0dn0gPSBnZXRUdihyb3V0ZXIucXVlcnkudHZfaWQpO1xyXG4gIGNvbnN0IHt0cmFpbGVyfSA9IGdldFRyYWlsZXIocm91dGVyLnF1ZXJ5LnR2X2lkKTtcclxuICBjb25zdCB7Y2FzdH0gPSBnZXRDYXN0KHJvdXRlci5xdWVyeS50dl9pZCk7XHJcbiAgY29uc3Qge3JlY29tbX0gPSBnZXRSZWNvbW0ocm91dGVyLnF1ZXJ5LnR2X2lkKTtcclxuICBcclxuICAgIFxyXG4gIGlmKCF0dil7XHJcbiAgICByZXR1cm4gKCA8ZGl2PiB7IGNvbnNvbGUubG9nKCdub3RoaW5nJykgfTwvZGl2PiApXHJcbiAgfVxyXG4gIGVsc2V7ICAgIFxyXG4gICAgY29uc29sZS5sb2codHYpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiA+XHJcbiAgICAgICAgPEhlYWQ+ICAgICAgICBcclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz4gICAgICAgIFxyXG4gICAgICAgICAgPHRpdGxlPk1vdmllYm90PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEFwcEJhckJhcj48L0FwcEJhckJhcj5cclxuICAgICAgICA8SnVtYm90cm9uIGltZz17dHZ9PjwvSnVtYm90cm9uPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubW92aWVJbmZvfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCR7dHYucG9zdGVyX3BhdGh9XCIpYH19PjwvQ2FyZD5cclxuICAgICAgICAgICAgPC9HcmlkPiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllVGl0bGV9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPnt0di5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubW92aWVUaXRsZUluZm99PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvSXRlbX0+e3R2LnJlbGVhc2VfZGF0ZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgZmxleEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9JdGVtfS8+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHYuZ2VucmVzLm1hcCgoZ2VucmUsIGluZGV4KSA9PiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkga2V5PXtpbmRleH0gdmFyaWFudD1cInN1YnRpdGxlMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvSXRlbX0+eyBnZW5yZS5uYW1lIH08L1R5cG9ncmFwaHk+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGZsZXhJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvSXRlbX0vPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvSXRlbX0+e3R2LnZvdGVfYXZlcmFnZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpSW5mb19sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICBPdmVydmlld1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmlJbmZvX292ZXJ2aWV3fT5cclxuICAgICAgICAgICAgICAgIHt0di5vdmVydmlld31cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Mn0geHM9ezR9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMubW92aUluZm9fbGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgRGlyZWN0b3JcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlxyXG4gICAgICAgICAgICAgICAgQ2hyaXN0b3BlciBOb2xhblxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsyfSB4cz17NH0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpSW5mb19sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICBSZXZlbnVlXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cclxuICAgICAgICAgICAgICAgICR7dHYucmV2ZW51ZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Mn0geHM9ezR9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMubW92aUluZm9fbGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgQnVkZ2V0XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cclxuICAgICAgICAgICAgICAgICR7dHYuYnVkZ2V0fVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgeHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSB0aXRsZT1cIlRyYWlsZXJcIiB0eXBlPVwidHJhaWxlclwiIGRhdGFzPXt0cmFpbGVyfT48L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gdGl0bGU9XCJDYXN0XCIgdHlwZT1cImNhc3RcIiBkYXRhcz17Y2FzdH0+PC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvR3JpZD4gICAgICAgICBcclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgey8qIHJlY29tbWVuZGF0aW9uIGxpc3QgKi99XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWNvbW19PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gdGl0bGU9XCJSZWNvbW1lbmRhdGlvblwiIGxpc3Q9XCJyZWNvbW1lbmRhdGlvblwiIHR5cGU9XCJ0dlwiIGRhdGFzPXtyZWNvbW19PjwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj4gICAgICAgIFxyXG4gICAgKSAgICBcclxuICB9ICAgICAgICBcclxufVxyXG5cclxuLy8gdHZJbmZvLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7ICAgIFxyXG4gIFxyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3R2LyR7Y29udGV4dC5xdWVyeS50dl9pZH0/YXBpX2tleT1lYzRiZGZmYzU3OTM5NzQ4YThhZTE5NTAzNjI4ZTUxNCZsYW5ndWFnZT1lbi1VU2ApXHJcbi8vICAgY29uc3QgdHYgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4vLyAgIGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90di8ke2NvbnRleHQucXVlcnkudHZfaWR9L3NpbWlsYXI/YXBpX2tleT1lYzRiZGZmYzU3OTM5NzQ4YThhZTE5NTAzNjI4ZTUxNCZsYW5ndWFnZT1lbi1VUyZwYWdlPTFgKVxyXG4vLyAgIGNvbnN0IHJlY29tbSA9IGF3YWl0IHJlczIuanNvbigpXHJcblxyXG4vLyAgIGNvbnN0IHJlczMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90di8ke2NvbnRleHQucXVlcnkudHZfaWR9L3ZpZGVvcz9hcGlfa2V5PWVjNGJkZmZjNTc5Mzk3NDhhOGFlMTk1MDM2MjhlNTE0Jmxhbmd1YWdlPWVuLVVTYClcclxuLy8gICBjb25zdCB0cmFpbGVyID0gYXdhaXQgcmVzMy5qc29uKClcclxuICBcclxuLy8gICBjb25zdCByZXM0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHYvJHtjb250ZXh0LnF1ZXJ5LnR2X2lkfS9jcmVkaXRzP2FwaV9rZXk9ZWM0YmRmZmM1NzkzOTc0OGE4YWUxOTUwMzYyOGU1MTQmbGFuZ3VhZ2U9ZW4tVVNgKVxyXG4vLyAgIGNvbnN0IGNhc3QgPSBhd2FpdCByZXM0Lmpzb24oKVxyXG5cclxuXHJcbi8vICAgcmV0dXJuIHsgdHYsIHJlY29tbSwgdHJhaWxlciwgY2FzdCB9XHJcbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9