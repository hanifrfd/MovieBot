webpackHotUpdate_N_E("pages/movie/[movie_id]",{

/***/ "./pages/movie/[movie_id].js":
/*!***********************************!*\
  !*** ./pages/movie/[movie_id].js ***!
  \***********************************/
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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _data_movie_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/movie_data */ "./data/movie_data.js");
/* harmony import */ var _component_AppBarBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/AppBarBar */ "./component/AppBarBar.js");
/* harmony import */ var _component_Jumbotron__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/Jumbotron */ "./component/Jumbotron.js");
/* harmony import */ var _component_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../component/ListItem */ "./component/ListItem.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "G:\\Project\\Project\\Web\\REACT\\moviebot\\nextjs\\moviebot\\pages\\movie\\[movie_id].js",
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
      flexDirection: 'column'
    }),
    recomm: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginTop: 32,
      padding: '0px 100px'
    }, theme.breakpoints.down('sm'), {
      padding: '0px 16px'
    }),
    infoItem: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginRight: 24
    }, theme.breakpoints.down('sm'), {
      marginRight: 8
    }),
    moviInfo_label: {
      marginBottom: 24
    }
  };
});
function movieInfo() {
  _s();

  var _this = this;

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _getMovie = Object(_data_movie_data__WEBPACK_IMPORTED_MODULE_6__["getMovie"])(router.query.movie_id),
      movie = _getMovie.movie;

  var _getTrailer = Object(_data_movie_data__WEBPACK_IMPORTED_MODULE_6__["getTrailer"])(router.query.movie_id),
      trailer = _getTrailer.trailer;

  var _getCast = Object(_data_movie_data__WEBPACK_IMPORTED_MODULE_6__["getCast"])(router.query.movie_id),
      cast = _getCast.cast;

  var _getRecomm = Object(_data_movie_data__WEBPACK_IMPORTED_MODULE_6__["getRecomm"])(router.query.movie_id),
      recomm = _getRecomm.recomm;

  if (!movie) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "nothing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "description",
          content: "Generated by create next app"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Moviebot"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_AppBarBar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Jumbotron__WEBPACK_IMPORTED_MODULE_8__["default"], {
        img: movie
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
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
                  backgroundImage: "url(\"https://image.tmdb.org/t/p/w500".concat(movie.poster_path, "\")")
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: classes.movieTitle,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "h3",
                children: movie.original_title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
                item: true,
                container: true,
                className: classes.movieTitleInfo,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                  variant: "subtitle1",
                  className: classes.infoItem,
                  children: movie.release_date
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
                  orientation: "vertical",
                  flexItem: true,
                  className: classes.infoItem
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 17
                }, this), movie.genres.map(function (genre, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                    variant: "subtitle1",
                    className: classes.infoItem,
                    children: genre.name
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 23
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
                  orientation: "vertical",
                  flexItem: true,
                  className: classes.infoItem
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                  variant: "subtitle1",
                  className: classes.infoItem,
                  children: movie.vote_average
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
            item: true,
            container: true,
            xs: 12,
            className: classes.section,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
              item: true,
              xs: 6,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "h6",
                className: classes.moviInfo_label,
                children: "Overview"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                style: {
                  paddingRight: 20
                },
                children: movie.overview
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
              item: true,
              xs: 2,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "h6",
                className: classes.moviInfo_label,
                children: "Director"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                children: "Christoper Nolan"
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
              xs: 2,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "h6",
                className: classes.moviInfo_label,
                children: "Revenue"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                children: ["$", movie.revenue]
              }, void 0, true, {
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
              xs: 2,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "h6",
                className: classes.moviInfo_label,
                children: "Budget"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                children: ["$", movie.budget]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
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
              lineNumber: 172,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: "Cast",
              type: "cast",
              datas: cast
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
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
              type: "movie",
              datas: recomm
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this);
  }
} // movieInfo.getInitialProps = async (context) => {    
//   const res = await fetch(`https://api.themoviedb.org/3/movie/${context.query.movie_id}?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`)
//   const movie = await res.json()
//   const res2 = await fetch(`https://api.themoviedb.org/3/movie/${context.query.movie_id}/similar?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US&page=1`)
//   const recomm = await res2.json()
//   const res3 = await fetch(`https://api.themoviedb.org/3/movie/${context.query.movie_id}/videos?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`)
//   const trailer = await res3.json()
//   const res4 = await fetch(`https://api.themoviedb.org/3/movie/${context.query.movie_id}/credits?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`)
//   const cast = await res4.json()
//   return { movie, recomm, trailer, cast }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWUvW21vdmllX2lkXS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtb3ZpZUluZm8iLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiYnJlYWtwb2ludHMiLCJkb3duIiwibW92aWVDb250YWluZXIiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsImNhcmQiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwibW92aWVUaXRsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luTGVmdCIsIm1vdmllVGl0bGVJbmZvIiwic2VjdGlvbiIsInJlY29tbSIsImluZm9JdGVtIiwibW92aUluZm9fbGFiZWwiLCJjbGFzc2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0TW92aWUiLCJxdWVyeSIsIm1vdmllX2lkIiwibW92aWUiLCJnZXRUcmFpbGVyIiwidHJhaWxlciIsImdldENhc3QiLCJjYXN0IiwiZ2V0UmVjb21tIiwiYmFja2dyb3VuZEltYWdlIiwicG9zdGVyX3BhdGgiLCJvcmlnaW5hbF90aXRsZSIsInJlbGVhc2VfZGF0ZSIsImdlbnJlcyIsIm1hcCIsImdlbnJlIiwiaW5kZXgiLCJuYW1lIiwidm90ZV9hdmVyYWdlIiwicGFkZGluZ1JpZ2h0Iiwib3ZlcnZpZXciLCJyZXZlbnVlIiwiYnVkZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQSxJQUFNQSxTQUFTLEdBQUdDLDRFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLGFB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WTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUscUVBQUMsMkRBQUQ7QUFBVSxtQkFBSyxFQUFDLE1BQWhCO0FBQXVCLGtCQUFJLEVBQUMsTUFBNUI7QUFBbUMsbUJBQUssRUFBRUU7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQTZEQSxxRUFBQyx1REFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBZ0IsbUJBQVMsRUFBRVYsT0FBTyxDQUFDSCxNQUFuQztBQUFBLGlDQUNFLHFFQUFDLHVEQUFEO0FBQU0sZ0JBQUksTUFBVjtBQUFXLGNBQUUsRUFBRSxFQUFmO0FBQUEsbUNBQ0UscUVBQUMsMkRBQUQ7QUFBVSxtQkFBSyxFQUFDLGdCQUFoQjtBQUFpQyxrQkFBSSxFQUFDLGdCQUF0QztBQUF1RCxrQkFBSSxFQUFDLE9BQTVEO0FBQW9FLG1CQUFLLEVBQUVBO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUEyRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQWlGRDtBQUNGLEMsQ0FFRDtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBOztHQWxId0J2QixTO1VBQ05ILFMsRUFDRCtCLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21vdmllL1ttb3ZpZV9pZF0uYWRjMTI4MzQ0ZGZlODNhYTNiMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcblxyXG5pbXBvcnQgeyBnZXRNb3ZpZSwgZ2V0VHJhaWxlciwgZ2V0Q2FzdCwgZ2V0UmVjb21tIH0gZnJvbSAnLi4vLi4vZGF0YS9tb3ZpZV9kYXRhJ1xyXG5cclxuaW1wb3J0IEFwcEJhckJhciBmcm9tICcuLi8uLi9jb21wb25lbnQvQXBwQmFyQmFyJ1xyXG5pbXBvcnQgSnVtYm90cm9uIGZyb20gJy4uLy4uL2NvbXBvbmVudC9KdW1ib3Ryb24nXHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnQvTGlzdEl0ZW0nXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgQ2FyZCxcclxuICBEaXZpZGVyXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7ICBcclxuICBtb3ZpZUluZm86e1xyXG4gICAgcGFkZGluZzogJzBweCAxMDBweCcsXHJcbiAgICBtYXJnaW5Ub3A6IC03MCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiAnMHB4IDE2cHgnLCAgICAgIFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vdmllQ29udGFpbmVyOntcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXTogeyAgICBcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcmQ6e1xyXG4gICAgd2lkdGg6IDIxNC41NCxcclxuICAgIGhlaWdodDogMjgxLjU0LCAgICBcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3NpbHZlcicsXHJcbiAgICBtYXJnaW5Cb3R0b206IDE2LFxyXG4gICAgbWFyZ2luUmlnaHQ6IDgsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwMCUgMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcwJSAwJScsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICB3aWR0aDogMTMxLjMzLFxyXG4gICAgICBoZWlnaHQ6IDE3MS43MyxcclxuICAgICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgICBtYXJnaW5SaWdodDogMCwgICAgICBcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3ZpZVRpdGxlOntcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbWFyZ2luTGVmdDogNTQsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgbWFyZ2luTGVmdDogMCxcclxuICAgICAgbWFyZ2luVG9wOiAyNCwgICAgICBcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3ZpZVRpdGxlSW5mbzp7XHJcbiAgICBtYXJnaW5Ub3A6IDI0LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICAgIG1hcmdpblRvcDogMjQsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyAgICAgICAgICAgIFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb246e1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgbWFyZ2luVG9wOiAzMixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICByZWNvbW06e1xyXG4gICAgbWFyZ2luVG9wOiAzMixcclxuICAgIHBhZGRpbmc6ICcwcHggMTAwcHgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6ICcwcHggMTZweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5mb0l0ZW06e1xyXG4gICAgbWFyZ2luUmlnaHQ6IDI0LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiA4LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vdmlJbmZvX2xhYmVsOntcclxuICAgIG1hcmdpbkJvdHRvbTogMjQsXHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb3ZpZUluZm8oKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpOyAgICBcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qge21vdmllfSA9IGdldE1vdmllKHJvdXRlci5xdWVyeS5tb3ZpZV9pZCk7XHJcbiAgY29uc3Qge3RyYWlsZXJ9ID0gZ2V0VHJhaWxlcihyb3V0ZXIucXVlcnkubW92aWVfaWQpO1xyXG4gIGNvbnN0IHtjYXN0fSA9IGdldENhc3Qocm91dGVyLnF1ZXJ5Lm1vdmllX2lkKTtcclxuICBjb25zdCB7cmVjb21tfSA9IGdldFJlY29tbShyb3V0ZXIucXVlcnkubW92aWVfaWQpO1xyXG4gIFxyXG4gIGlmKCFtb3ZpZSl7ICAgICAgIFxyXG4gICAgcmV0dXJuKCAgICAgIFxyXG4gICAgICA8ZGl2Pm5vdGhpbmc8L2Rpdj5cclxuICAgIClcclxuICB9ZWxzZXsgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2ID5cclxuICAgICAgICA8SGVhZD4gICAgICAgIFxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPiAgICAgICAgXHJcbiAgICAgICAgICA8dGl0bGU+TW92aWVib3Q8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8QXBwQmFyQmFyPjwvQXBwQmFyQmFyPlxyXG4gICAgICAgIDxKdW1ib3Ryb24gaW1nPXttb3ZpZX0+PC9KdW1ib3Ryb24+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpZUluZm99PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgeHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMubW92aWVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfSBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJHttb3ZpZS5wb3N0ZXJfcGF0aH1cIilgfX0+PC9DYXJkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubW92aWVUaXRsZX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+e21vdmllLm9yaWdpbmFsX3RpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubW92aWVUaXRsZUluZm99PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvSXRlbX0+e21vdmllLnJlbGVhc2VfZGF0ZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgZmxleEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9JdGVtfS8+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92aWUuZ2VucmVzLm1hcCgoZ2VucmUsIGluZGV4KSA9PiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkga2V5PXtpbmRleH0gdmFyaWFudD1cInN1YnRpdGxlMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvSXRlbX0+eyBnZW5yZS5uYW1lIH08L1R5cG9ncmFwaHk+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGZsZXhJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvSXRlbX0vPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvSXRlbX0+e21vdmllLnZvdGVfYXZlcmFnZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMubW92aUluZm9fbGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgT3ZlcnZpZXdcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OjIwfX0+XHJcbiAgICAgICAgICAgICAgICB7bW92aWUub3ZlcnZpZXd9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMubW92aUluZm9fbGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgRGlyZWN0b3JcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlxyXG4gICAgICAgICAgICAgICAgQ2hyaXN0b3BlciBOb2xhblxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmlJbmZvX2xhYmVsfT5cclxuICAgICAgICAgICAgICAgIFJldmVudWVcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlxyXG4gICAgICAgICAgICAgICAgJHttb3ZpZS5yZXZlbnVlfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmlJbmZvX2xhYmVsfT5cclxuICAgICAgICAgICAgICAgIEJ1ZGdldFxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCI+XHJcbiAgICAgICAgICAgICAgICAke21vdmllLmJ1ZGdldH1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gdGl0bGU9XCJUcmFpbGVyXCIgdHlwZT1cInRyYWlsZXJcIiBkYXRhcz17dHJhaWxlcn0+PC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIHRpdGxlPVwiQ2FzdFwiIHR5cGU9XCJjYXN0XCIgZGF0YXM9e2Nhc3R9PjwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgXHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIHsvKiByZWNvbW1lbmRhdGlvbiBsaXN0ICovfVxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucmVjb21tfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIHRpdGxlPVwiUmVjb21tZW5kYXRpb25cIiBsaXN0PVwicmVjb21tZW5kYXRpb25cIiB0eXBlPVwibW92aWVcIiBkYXRhcz17cmVjb21tfT48L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+ICAgICAgICBcclxuICAgICkgICAgXHJcbiAgfVxyXG59XHJcblxyXG4vLyBtb3ZpZUluZm8uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHsgICAgXHJcbiAgXHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHtjb250ZXh0LnF1ZXJ5Lm1vdmllX2lkfT9hcGlfa2V5PWVjNGJkZmZjNTc5Mzk3NDhhOGFlMTk1MDM2MjhlNTE0Jmxhbmd1YWdlPWVuLVVTYClcclxuLy8gICBjb25zdCBtb3ZpZSA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbi8vICAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLyR7Y29udGV4dC5xdWVyeS5tb3ZpZV9pZH0vc2ltaWxhcj9hcGlfa2V5PWVjNGJkZmZjNTc5Mzk3NDhhOGFlMTk1MDM2MjhlNTE0Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9MWApXHJcbi8vICAgY29uc3QgcmVjb21tID0gYXdhaXQgcmVzMi5qc29uKClcclxuXHJcbi8vICAgY29uc3QgcmVzMyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLyR7Y29udGV4dC5xdWVyeS5tb3ZpZV9pZH0vdmlkZW9zP2FwaV9rZXk9ZWM0YmRmZmM1NzkzOTc0OGE4YWUxOTUwMzYyOGU1MTQmbGFuZ3VhZ2U9ZW4tVVNgKVxyXG4vLyAgIGNvbnN0IHRyYWlsZXIgPSBhd2FpdCByZXMzLmpzb24oKVxyXG4gIFxyXG4vLyAgIGNvbnN0IHJlczQgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke2NvbnRleHQucXVlcnkubW92aWVfaWR9L2NyZWRpdHM/YXBpX2tleT1lYzRiZGZmYzU3OTM5NzQ4YThhZTE5NTAzNjI4ZTUxNCZsYW5ndWFnZT1lbi1VU2ApXHJcbi8vICAgY29uc3QgY2FzdCA9IGF3YWl0IHJlczQuanNvbigpXHJcblxyXG5cclxuLy8gICByZXR1cm4geyBtb3ZpZSwgcmVjb21tLCB0cmFpbGVyLCBjYXN0IH1cclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9