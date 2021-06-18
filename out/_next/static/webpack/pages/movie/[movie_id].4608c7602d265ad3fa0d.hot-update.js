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
      justifyContent: 'center'
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
      width: 170.73,
      height: 141.33,
      marginBottom: 0,
      marginRight: 0
    }),
    movieTitle: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 54,
      justifyContent: 'center'
    },
    movieTitleInfo: {
      marginTop: 24
    },
    section: {
      marginTop: 32
    },
    recomm: Object(G_Project_Project_Web_REACT_moviebot_nextjs_moviebot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginTop: 32,
      padding: '0px 100px'
    }, theme.breakpoints.down('sm'), {
      padding: '0px 16px'
    }),
    infoItem: {
      marginRight: 24
    },
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
      children: console.log(movie)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
          lineNumber: 98,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Moviebot"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_AppBarBar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Jumbotron__WEBPACK_IMPORTED_MODULE_8__["default"], {
        img: movie
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
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
                lineNumber: 107,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: classes.movieTitle,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "h3",
                children: movie.original_title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
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
                  lineNumber: 112,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
                  orientation: "vertical",
                  flexItem: true,
                  className: classes.infoItem
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 17
                }, this), movie.genres.map(function (genre, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                    variant: "subtitle1",
                    className: classes.infoItem,
                    children: genre.name
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 23
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
                  orientation: "vertical",
                  flexItem: true,
                  className: classes.infoItem
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                  variant: "subtitle1",
                  className: classes.infoItem,
                  children: movie.vote_average
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
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
                lineNumber: 126,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                style: {
                  paddingRight: 20
                },
                children: movie.overview
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 125,
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
                lineNumber: 134,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                children: "Christoper Nolan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
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
                lineNumber: 142,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                children: ["$", movie.revenue]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 141,
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
                lineNumber: 150,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
                variant: "subtitle2",
                children: ["$", movie.budget]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
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
              lineNumber: 159,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: "Cast",
              type: "cast",
              datas: cast
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
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
              lineNumber: 166,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWUvW21vdmllX2lkXS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtb3ZpZUluZm8iLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiYnJlYWtwb2ludHMiLCJkb3duIiwibW92aWVDb250YWluZXIiLCJqdXN0aWZ5Q29udGVudCIsImNhcmQiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwibW92aWVUaXRsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luTGVmdCIsIm1vdmllVGl0bGVJbmZvIiwic2VjdGlvbiIsInJlY29tbSIsImluZm9JdGVtIiwibW92aUluZm9fbGFiZWwiLCJjbGFzc2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0TW92aWUiLCJxdWVyeSIsIm1vdmllX2lkIiwibW92aWUiLCJnZXRUcmFpbGVyIiwidHJhaWxlciIsImdldENhc3QiLCJjYXN0IiwiZ2V0UmVjb21tIiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRJbWFnZSIsInBvc3Rlcl9wYXRoIiwib3JpZ2luYWxfdGl0bGUiLCJyZWxlYXNlX2RhdGUiLCJnZW5yZXMiLCJtYXAiLCJnZW5yZSIsImluZGV4IiwibmFtZSIsInZvdGVfYXZlcmFnZSIsInBhZGRpbmdSaWdodCIsIm92ZXJ2aWV3IiwicmV2ZW51ZSIsImJ1ZGdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsSUFBTUEsU0FBUyxHQUFHQyw0RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZD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QUFBdUQsa0JBQUksRUFBQyxPQUE1RDtBQUFvRSxtQkFBSyxFQUFFQTtBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBMkVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFpRkQ7QUFDRixDLENBRUQ7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTs7R0F0SHdCdEIsUztVQUNOSCxTLEVBQ0Q4QixxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tb3ZpZS9bbW92aWVfaWRdLjQ2MDhjNzYwMmQyNjVhZDNmYTBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuXHJcbmltcG9ydCB7IGdldE1vdmllLCBnZXRUcmFpbGVyLCBnZXRDYXN0LCBnZXRSZWNvbW0gfSBmcm9tICcuLi8uLi9kYXRhL21vdmllX2RhdGEnXHJcblxyXG5pbXBvcnQgQXBwQmFyQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudC9BcHBCYXJCYXInXHJcbmltcG9ydCBKdW1ib3Ryb24gZnJvbSAnLi4vLi4vY29tcG9uZW50L0p1bWJvdHJvbidcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudC9MaXN0SXRlbSdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFxyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBDYXJkLFxyXG4gIERpdmlkZXJcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHsgIFxyXG4gIG1vdmllSW5mbzp7XHJcbiAgICBwYWRkaW5nOiAnMHB4IDEwMHB4JyxcclxuICAgIG1hcmdpblRvcDogLTcwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6ICcwcHggMTZweCcsICAgICAgXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW92aWVDb250YWluZXI6e1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7ICAgIFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkOntcclxuICAgIHdpZHRoOiAyMTQuNTQsXHJcbiAgICBoZWlnaHQ6IDI4MS41NCwgICAgXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdzaWx2ZXInLFxyXG4gICAgbWFyZ2luQm90dG9tOiAxNixcclxuICAgIG1hcmdpblJpZ2h0OiA4LFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMDAlIDEwMCUnLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMCUgMCUnLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgd2lkdGg6IDE3MC43MyxcclxuICAgICAgaGVpZ2h0OiAxNDEuMzMsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgbWFyZ2luUmlnaHQ6IDAsICAgICAgXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW92aWVUaXRsZTp7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG1hcmdpbkxlZnQ6IDU0LFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXHJcbiAgfSxcclxuICBtb3ZpZVRpdGxlSW5mbzp7XHJcbiAgICBtYXJnaW5Ub3A6IDI0LFxyXG4gIH0sXHJcbiAgc2VjdGlvbjp7XHJcbiAgICBtYXJnaW5Ub3A6IDMyLFxyXG4gIH0sXHJcbiAgcmVjb21tOntcclxuICAgIG1hcmdpblRvcDogMzIsXHJcbiAgICBwYWRkaW5nOiAnMHB4IDEwMHB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiAnMHB4IDE2cHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGluZm9JdGVtOntcclxuICAgIG1hcmdpblJpZ2h0OiAyNFxyXG4gIH0sXHJcbiAgbW92aUluZm9fbGFiZWw6e1xyXG4gICAgbWFyZ2luQm90dG9tOiAyNCxcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vdmllSW5mbygpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7ICAgIFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB7bW92aWV9ID0gZ2V0TW92aWUocm91dGVyLnF1ZXJ5Lm1vdmllX2lkKTtcclxuICBjb25zdCB7dHJhaWxlcn0gPSBnZXRUcmFpbGVyKHJvdXRlci5xdWVyeS5tb3ZpZV9pZCk7XHJcbiAgY29uc3Qge2Nhc3R9ID0gZ2V0Q2FzdChyb3V0ZXIucXVlcnkubW92aWVfaWQpO1xyXG4gIGNvbnN0IHtyZWNvbW19ID0gZ2V0UmVjb21tKHJvdXRlci5xdWVyeS5tb3ZpZV9pZCk7XHJcbiAgXHJcbiAgaWYoIW1vdmllKXsgICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKG1vdmllKVxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfWVsc2V7ICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiA+XHJcbiAgICAgICAgPEhlYWQ+ICAgICAgICBcclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz4gICAgICAgIFxyXG4gICAgICAgICAgPHRpdGxlPk1vdmllYm90PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEFwcEJhckJhcj48L0FwcEJhckJhcj5cclxuICAgICAgICA8SnVtYm90cm9uIGltZz17bW92aWV9PjwvSnVtYm90cm9uPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubW92aWVJbmZvfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCR7bW92aWUucG9zdGVyX3BhdGh9XCIpYH19PjwvQ2FyZD5cclxuICAgICAgICAgICAgPC9HcmlkPiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllVGl0bGV9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPnttb3ZpZS5vcmlnaW5hbF90aXRsZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllVGl0bGVJbmZvfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0l0ZW19Pnttb3ZpZS5yZWxlYXNlX2RhdGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGZsZXhJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvSXRlbX0vPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmllLmdlbnJlcy5tYXAoKGdlbnJlLCBpbmRleCkgPT4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGtleT17aW5kZXh9IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0l0ZW19PnsgZ2VucmUubmFtZSB9PC9UeXBvZ3JhcGh5PiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBmbGV4SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0l0ZW19Lz5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0l0ZW19Pnttb3ZpZS52b3RlX2F2ZXJhZ2V9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmlJbmZvX2xhYmVsfT5cclxuICAgICAgICAgICAgICAgIE92ZXJ2aWV3XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBzdHlsZT17e3BhZGRpbmdSaWdodDoyMH19PlxyXG4gICAgICAgICAgICAgICAge21vdmllLm92ZXJ2aWV3fVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmlJbmZvX2xhYmVsfT5cclxuICAgICAgICAgICAgICAgIERpcmVjdG9yXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cclxuICAgICAgICAgICAgICAgIENocmlzdG9wZXIgTm9sYW5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpSW5mb19sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICBSZXZlbnVlXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cclxuICAgICAgICAgICAgICAgICR7bW92aWUucmV2ZW51ZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpSW5mb19sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICBCdWRnZXRcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlxyXG4gICAgICAgICAgICAgICAgJHttb3ZpZS5idWRnZXR9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIHRpdGxlPVwiVHJhaWxlclwiIHR5cGU9XCJ0cmFpbGVyXCIgZGF0YXM9e3RyYWlsZXJ9PjwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSB0aXRsZT1cIkNhc3RcIiB0eXBlPVwiY2FzdFwiIGRhdGFzPXtjYXN0fT48L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9HcmlkPiAgICAgICAgIFxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICB7LyogcmVjb21tZW5kYXRpb24gbGlzdCAqL31cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJlY29tbX0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSB0aXRsZT1cIlJlY29tbWVuZGF0aW9uXCIgbGlzdD1cInJlY29tbWVuZGF0aW9uXCIgdHlwZT1cIm1vdmllXCIgZGF0YXM9e3JlY29tbX0+PC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PiAgICAgICAgXHJcbiAgICApICAgIFxyXG4gIH1cclxufVxyXG5cclxuLy8gbW92aWVJbmZvLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7ICAgIFxyXG4gIFxyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLyR7Y29udGV4dC5xdWVyeS5tb3ZpZV9pZH0/YXBpX2tleT1lYzRiZGZmYzU3OTM5NzQ4YThhZTE5NTAzNjI4ZTUxNCZsYW5ndWFnZT1lbi1VU2ApXHJcbi8vICAgY29uc3QgbW92aWUgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4vLyAgIGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke2NvbnRleHQucXVlcnkubW92aWVfaWR9L3NpbWlsYXI/YXBpX2tleT1lYzRiZGZmYzU3OTM5NzQ4YThhZTE5NTAzNjI4ZTUxNCZsYW5ndWFnZT1lbi1VUyZwYWdlPTFgKVxyXG4vLyAgIGNvbnN0IHJlY29tbSA9IGF3YWl0IHJlczIuanNvbigpXHJcblxyXG4vLyAgIGNvbnN0IHJlczMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke2NvbnRleHQucXVlcnkubW92aWVfaWR9L3ZpZGVvcz9hcGlfa2V5PWVjNGJkZmZjNTc5Mzk3NDhhOGFlMTk1MDM2MjhlNTE0Jmxhbmd1YWdlPWVuLVVTYClcclxuLy8gICBjb25zdCB0cmFpbGVyID0gYXdhaXQgcmVzMy5qc29uKClcclxuICBcclxuLy8gICBjb25zdCByZXM0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHtjb250ZXh0LnF1ZXJ5Lm1vdmllX2lkfS9jcmVkaXRzP2FwaV9rZXk9ZWM0YmRmZmM1NzkzOTc0OGE4YWUxOTUwMzYyOGU1MTQmbGFuZ3VhZ2U9ZW4tVVNgKVxyXG4vLyAgIGNvbnN0IGNhc3QgPSBhd2FpdCByZXM0Lmpzb24oKVxyXG5cclxuXHJcbi8vICAgcmV0dXJuIHsgbW92aWUsIHJlY29tbSwgdHJhaWxlciwgY2FzdCB9XHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==