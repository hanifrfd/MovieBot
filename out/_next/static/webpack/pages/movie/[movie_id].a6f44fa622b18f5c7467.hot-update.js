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
      flexDirection: 'row',
      padding: '0px'
    }),
    recomm: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginTop: 32,
      padding: '0px 100px'
    }, theme.breakpoints.down('sm'), {
      padding: '0px 0px'
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
      lineNumber: 107,
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
          lineNumber: 113,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Moviebot"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_AppBarBar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Jumbotron__WEBPACK_IMPORTED_MODULE_8__["default"], {
        img: movie
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
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
                lineNumber: 122,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: classes.movieTitle,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "h3",
                children: movie.original_title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
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
                  lineNumber: 127,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
                  orientation: "vertical",
                  flexItem: true,
                  className: classes.infoItem
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 17
                }, this), movie.genres.map(function (genre, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                    variant: "subtitle1",
                    className: classes.infoItem,
                    children: genre.name
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 23
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
                  orientation: "vertical",
                  flexItem: true,
                  className: classes.infoItem
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                  variant: "subtitle1",
                  className: classes.infoItem,
                  children: movie.vote_average
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
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
                lineNumber: 141,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                style: {
                  paddingRight: 20
                },
                children: movie.overview
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
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
                lineNumber: 149,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                children: "Christoper Nolan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 148,
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
                lineNumber: 157,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                children: ["$", movie.revenue]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 156,
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
                lineNumber: 165,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                children: ["$", movie.budget]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
            item: true,
            container: true,
            xs: 12,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: "Trailer",
              type: "trailer",
              datas: trailer
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: "Cast",
              type: "cast",
              datas: cast
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
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
              lineNumber: 181,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWUvW21vdmllX2lkXS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtb3ZpZUluZm8iLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiYnJlYWtwb2ludHMiLCJkb3duIiwibW92aWVDb250YWluZXIiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsImNhcmQiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwibW92aWVUaXRsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luTGVmdCIsIm1vdmllVGl0bGVJbmZvIiwic2VjdGlvbiIsInJlY29tbSIsImluZm9JdGVtIiwibW92aUluZm9fbGFiZWwiLCJjbGFzc2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0TW92aWUiLCJxdWVyeSIsIm1vdmllX2lkIiwibW92aWUiLCJnZXRUcmFpbGVyIiwidHJhaWxlciIsImdldENhc3QiLCJjYXN0IiwiZ2V0UmVjb21tIiwiYmFja2dyb3VuZEltYWdlIiwicG9zdGVyX3BhdGgiLCJvcmlnaW5hbF90aXRsZSIsInJlbGVhc2VfZGF0ZSIsImdlbnJlcyIsIm1hcCIsImdlbnJlIiwiaW5kZXgiLCJuYW1lIiwidm90ZV9hdmVyYWdlIiwicGFkZGluZ1JpZ2h0Iiwib3ZlcnZpZXciLCJyZXZlbnVlIiwiYnVkZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQSxJQUFNQSxTQUFTLEdBQUdDLDRFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLGFB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QSxvQ0FDRSxxRUFBQywyREFBRDtBQUFVLG1CQUFLLEVBQUMsU0FBaEI7QUFBMEIsa0JBQUksRUFBQyxTQUEvQjtBQUF5QyxtQkFBSyxFQUFFakI7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLHFFQUFDLDJEQUFEO0FBQVUsbUJBQUssRUFBQyxNQUFoQjtBQUF1QixrQkFBSSxFQUFDLE1BQTVCO0FBQW1DLG1CQUFLLEVBQUVFO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUE2REEscUVBQUMsdURBQUQ7QUFBTSxtQkFBUyxNQUFmO0FBQWdCLG1CQUFTLEVBQUVWLE9BQU8sQ0FBQ0gsTUFBbkM7QUFBQSxpQ0FDRSxxRUFBQyx1REFBRDtBQUFNLGdCQUFJLE1BQVY7QUFBVyxjQUFFLEVBQUUsRUFBZjtBQUFBLG1DQUNFLHFFQUFDLDJEQUFEO0FBQVUsbUJBQUssRUFBQyxnQkFBaEI7QUFBaUMsa0JBQUksRUFBQyxnQkFBdEM7QUFBdUQsa0JBQUksRUFBQyxPQUE1RDtBQUFvRSxtQkFBSyxFQUFFQTtBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBMkVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFpRkQ7QUFDRixDLENBRUQ7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTs7R0FsSHdCdkIsUztVQUNOSCxTLEVBQ0QrQixxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tb3ZpZS9bbW92aWVfaWRdLmE2ZjQ0ZmE2MjJiMThmNWM3NDY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5cclxuaW1wb3J0IHsgZ2V0TW92aWUsIGdldFRyYWlsZXIsIGdldENhc3QsIGdldFJlY29tbSB9IGZyb20gJy4uLy4uL2RhdGEvbW92aWVfZGF0YSdcclxuXHJcbmltcG9ydCBBcHBCYXJCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50L0FwcEJhckJhcidcclxuaW1wb3J0IEp1bWJvdHJvbiBmcm9tICcuLi8uLi9jb21wb25lbnQvSnVtYm90cm9uJ1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi4vLi4vY29tcG9uZW50L0xpc3RJdGVtJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIENhcmQsXHJcbiAgRGl2aWRlclxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoeyAgXHJcbiAgbW92aWVJbmZvOntcclxuICAgIHBhZGRpbmc6ICcwcHggMTAwcHgnLFxyXG4gICAgbWFyZ2luVG9wOiAtNzAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgcGFkZGluZzogJzBweCAxNnB4JywgICAgICBcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3ZpZUNvbnRhaW5lcjp7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHsgICAgXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkOntcclxuICAgIHdpZHRoOiAyMTQuNTQsXHJcbiAgICBoZWlnaHQ6IDI4MS41NCwgICAgXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdzaWx2ZXInLFxyXG4gICAgbWFyZ2luQm90dG9tOiAxNixcclxuICAgIG1hcmdpblJpZ2h0OiA4LFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMDAlIDEwMCUnLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMCUgMCUnLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgd2lkdGg6IDEzMS4zMyxcclxuICAgICAgaGVpZ2h0OiAxNzEuNzMsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgbWFyZ2luUmlnaHQ6IDAsICAgICAgXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW92aWVUaXRsZTp7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG1hcmdpbkxlZnQ6IDU0LFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICAgIG1hcmdpblRvcDogMjQsICAgICAgXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW92aWVUaXRsZUluZm86e1xyXG4gICAgbWFyZ2luVG9wOiAyNCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgICBtYXJnaW5Ub3A6IDI0LFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgICAgICAgICAgICBcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uOntcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIG1hcmdpblRvcDogMzIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVjb21tOntcclxuICAgIG1hcmdpblRvcDogMzIsXHJcbiAgICBwYWRkaW5nOiAnMHB4IDEwMHB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiAnMHB4IDBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5mb0l0ZW06e1xyXG4gICAgbWFyZ2luUmlnaHQ6IDI0LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiA4LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vdmlJbmZvX2xhYmVsOntcclxuICAgIG1hcmdpbkJvdHRvbTogMjQsXHJcbiAgICBcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vdmllSW5mbygpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7ICAgIFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB7bW92aWV9ID0gZ2V0TW92aWUocm91dGVyLnF1ZXJ5Lm1vdmllX2lkKTtcclxuICBjb25zdCB7dHJhaWxlcn0gPSBnZXRUcmFpbGVyKHJvdXRlci5xdWVyeS5tb3ZpZV9pZCk7XHJcbiAgY29uc3Qge2Nhc3R9ID0gZ2V0Q2FzdChyb3V0ZXIucXVlcnkubW92aWVfaWQpO1xyXG4gIGNvbnN0IHtyZWNvbW19ID0gZ2V0UmVjb21tKHJvdXRlci5xdWVyeS5tb3ZpZV9pZCk7XHJcbiAgXHJcbiAgaWYoIW1vdmllKXsgICAgICAgXHJcbiAgICByZXR1cm4oICAgICAgXHJcbiAgICAgIDxkaXY+bm90aGluZzwvZGl2PlxyXG4gICAgKVxyXG4gIH1lbHNleyAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgPlxyXG4gICAgICAgIDxIZWFkPiAgICAgICAgXHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+ICAgICAgICBcclxuICAgICAgICAgIDx0aXRsZT5Nb3ZpZWJvdDwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxBcHBCYXJCYXI+PC9BcHBCYXJCYXI+XHJcbiAgICAgICAgPEp1bWJvdHJvbiBpbWc9e21vdmllfT48L0p1bWJvdHJvbj5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllSW5mb30+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybChcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAke21vdmllLnBvc3Rlcl9wYXRofVwiKWB9fT48L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpZVRpdGxlfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj57bW92aWUub3JpZ2luYWxfdGl0bGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpZVRpdGxlSW5mb30+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9JdGVtfT57bW92aWUucmVsZWFzZV9kYXRlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBmbGV4SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0l0ZW19Lz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpZS5nZW5yZXMubWFwKChnZW5yZSwgaW5kZXgpID0+ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBrZXk9e2luZGV4fSB2YXJpYW50PVwic3VidGl0bGUxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9JdGVtfT57IGdlbnJlLm5hbWUgfTwvVHlwb2dyYXBoeT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgZmxleEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9JdGVtfS8+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9JdGVtfT57bW92aWUudm90ZV9hdmVyYWdlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgeHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmlJbmZvX2xhYmVsfT5cclxuICAgICAgICAgICAgICAgIE92ZXJ2aWV3XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBzdHlsZT17e3BhZGRpbmdSaWdodDoyMH19PlxyXG4gICAgICAgICAgICAgICAge21vdmllLm92ZXJ2aWV3fVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsyfSB4cz17NH0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpSW5mb19sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICBEaXJlY3RvclxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCI+XHJcbiAgICAgICAgICAgICAgICBDaHJpc3RvcGVyIE5vbGFuXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezJ9IHhzPXs0fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmlJbmZvX2xhYmVsfT5cclxuICAgICAgICAgICAgICAgIFJldmVudWVcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlxyXG4gICAgICAgICAgICAgICAgJHttb3ZpZS5yZXZlbnVlfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXsyfSB4cz17NH0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpSW5mb19sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICBCdWRnZXRcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlxyXG4gICAgICAgICAgICAgICAgJHttb3ZpZS5idWRnZXR9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17MTJ9ID5cclxuICAgICAgICAgICAgPExpc3RJdGVtIHRpdGxlPVwiVHJhaWxlclwiIHR5cGU9XCJ0cmFpbGVyXCIgZGF0YXM9e3RyYWlsZXJ9PjwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSB0aXRsZT1cIkNhc3RcIiB0eXBlPVwiY2FzdFwiIGRhdGFzPXtjYXN0fT48L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9HcmlkPiAgICAgICAgIFxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICB7LyogcmVjb21tZW5kYXRpb24gbGlzdCAqL31cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJlY29tbX0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSB0aXRsZT1cIlJlY29tbWVuZGF0aW9uXCIgbGlzdD1cInJlY29tbWVuZGF0aW9uXCIgdHlwZT1cIm1vdmllXCIgZGF0YXM9e3JlY29tbX0+PC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PiAgICAgICAgXHJcbiAgICApICAgIFxyXG4gIH1cclxufVxyXG5cclxuLy8gbW92aWVJbmZvLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7ICAgIFxyXG4gIFxyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLyR7Y29udGV4dC5xdWVyeS5tb3ZpZV9pZH0/YXBpX2tleT1lYzRiZGZmYzU3OTM5NzQ4YThhZTE5NTAzNjI4ZTUxNCZsYW5ndWFnZT1lbi1VU2ApXHJcbi8vICAgY29uc3QgbW92aWUgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4vLyAgIGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke2NvbnRleHQucXVlcnkubW92aWVfaWR9L3NpbWlsYXI/YXBpX2tleT1lYzRiZGZmYzU3OTM5NzQ4YThhZTE5NTAzNjI4ZTUxNCZsYW5ndWFnZT1lbi1VUyZwYWdlPTFgKVxyXG4vLyAgIGNvbnN0IHJlY29tbSA9IGF3YWl0IHJlczIuanNvbigpXHJcblxyXG4vLyAgIGNvbnN0IHJlczMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke2NvbnRleHQucXVlcnkubW92aWVfaWR9L3ZpZGVvcz9hcGlfa2V5PWVjNGJkZmZjNTc5Mzk3NDhhOGFlMTk1MDM2MjhlNTE0Jmxhbmd1YWdlPWVuLVVTYClcclxuLy8gICBjb25zdCB0cmFpbGVyID0gYXdhaXQgcmVzMy5qc29uKClcclxuICBcclxuLy8gICBjb25zdCByZXM0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHtjb250ZXh0LnF1ZXJ5Lm1vdmllX2lkfS9jcmVkaXRzP2FwaV9rZXk9ZWM0YmRmZmM1NzkzOTc0OGE4YWUxOTUwMzYyOGU1MTQmbGFuZ3VhZ2U9ZW4tVVNgKVxyXG4vLyAgIGNvbnN0IGNhc3QgPSBhd2FpdCByZXM0Lmpzb24oKVxyXG5cclxuXHJcbi8vICAgcmV0dXJuIHsgbW92aWUsIHJlY29tbSwgdHJhaWxlciwgY2FzdCB9XHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==