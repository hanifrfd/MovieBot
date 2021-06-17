webpackHotUpdate_N_E("pages/tv/[tv_id]",{

/***/ "./data/tv_data.js":
/*!*************************!*\
  !*** ./data/tv_data.js ***!
  \*************************/
/*! exports provided: getTv, getTrailer, getRecomm, getCast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTv", function() { return getTv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrailer", function() { return getTrailer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecomm", function() { return getRecomm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCast", function() { return getCast; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();




var fetcher = function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
};

var getTv = function getTv(tv_id) {
  _s();

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])("https://api.themoviedb.org/3/tv/".concat(tv_id, "?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US"), fetcher),
      tv = _useSWR.data,
      error = _useSWR.error;

  return {
    tv: tv,
    error: error
  };
};

_s(getTv, "VKVjKzsjQqQEp51eNHLWd3GPUsg=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

var getTrailer = function getTrailer(tv_id) {
  _s2();

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])("https://api.themoviedb.org/3/tv/".concat(tv_id, "/videos?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US"), fetcher),
      trailer = _useSWR2.data,
      error = _useSWR2.error;

  return {
    trailer: trailer,
    error: error
  };
};

_s2(getTrailer, "0bvX+9/2qapCbB7hiY/JvCvPvIg=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

var getRecomm = function getRecomm(tv_id) {
  _s3();

  var _useSWR3 = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])("https://api.themoviedb.org/3/tv/".concat(tv_id, "/similar?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US&page=1"), fetcher),
      recomm = _useSWR3.data,
      error = _useSWR3.error;

  return {
    recomm: recomm,
    error: error
  };
};

_s3(getRecomm, "CrVHnlagz8Vk4FzJGKbTDrfci6s=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

var getCast = function getCast(tv_id) {
  _s4();

  var _useSWR4 = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])("https://api.themoviedb.org/3/tv/".concat(tv_id, "/credits?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US"), fetcher),
      cast = _useSWR4.data,
      error = _useSWR4.error;

  return {
    cast: cast,
    error: error
  };
}; //   const res2 = await fetch(`https://api.themoviedb.org/3/tv/${context.query.tv_id}/similar?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US&page=1`)
//   const recomm = await res2.json()
//   const res3 = await fetch(`https://api.themoviedb.org/3/tv/${context.query.tv_id}/videos?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`)
//   const trailer = await res3.json()
//   const res4 = await fetch(`https://api.themoviedb.org/3/tv/${context.query.tv_id}/credits?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`)
//   const cast = await res4.json()

_s4(getCast, "+NmXfFq/TVXGOmedCVt+NVf8qtw=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_1__["default"]];
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _data_tv_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/tv_data */ "./data/tv_data.js");
/* harmony import */ var _component_AppBarBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/AppBarBar */ "./component/AppBarBar.js");
/* harmony import */ var _component_Jumbotron__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/Jumbotron */ "./component/Jumbotron.js");
/* harmony import */ var _component_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/ListItem */ "./component/ListItem.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "G:\\Project\\Project\\Web\\REACT\\moviebot\\nextjs\\moviebot\\pages\\tv\\[tv_id].js",
    _s = $RefreshSig$();











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return {
    movieInfo: {
      padding: '0px 100px',
      marginTop: -70
    },
    card: {
      width: 214.54,
      height: 281.54,
      backgroundColor: 'silver',
      marginBottom: 16,
      marginRight: 8,
      backgroundSize: '100% 100%',
      backgroundPosition: '0% 0%',
      backgroundRepeat: 'no-repeat'
    },
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
    recomm: {
      marginTop: 32,
      padding: '0px 100px'
    },
    infoItem: {
      marginRight: 24
    },
    moviInfo_label: {
      marginBottom: 24
    }
  };
});
function tvInfo() {
  _s();

  var _this = this;

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _getMovie = getMovie(router.query.tv_id),
      tv = _getMovie.tv;

  var _getTrailer = Object(_data_tv_data__WEBPACK_IMPORTED_MODULE_5__["getTrailer"])(router.query.tv_id),
      trailer = _getTrailer.trailer;

  var _getCast = Object(_data_tv_data__WEBPACK_IMPORTED_MODULE_5__["getCast"])(router.query.tv_id),
      cast = _getCast.cast;

  var _getRecomm = Object(_data_tv_data__WEBPACK_IMPORTED_MODULE_5__["getRecomm"])(router.query.tv_id),
      recomm = _getRecomm.recomm;

  if (!tv) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [" ", console.log('nothing')]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 14
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "description",
          content: "Generated by create next app"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Moviebot"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_AppBarBar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Jumbotron__WEBPACK_IMPORTED_MODULE_7__["default"], {
        img: tv
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
          container: true,
          className: classes.movieInfo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
            item: true,
            container: true,
            xs: 12,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
              item: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Card"], {
                className: classes.card,
                style: {
                  backgroundImage: "".concat(tv ? "url(\"https://image.tmdb.org/t/p/w500".concat(tv.poster_path, "\")") : "")
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: classes.movieTitle,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
                variant: "h3",
                children: tv.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
                item: true,
                container: true,
                className: classes.movieTitleInfo,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
                  variant: "subtitle1",
                  className: classes.infoItem,
                  children: tv.first_air_date
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
                  orientation: "vertical",
                  flexItem: true,
                  className: classes.infoItem
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 19
                }, this), tv.genres.map(function (genre, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
                    variant: "subtitle1",
                    className: classes.infoItem,
                    children: genre.name
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 25
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
                  orientation: "vertical",
                  flexItem: true,
                  className: classes.infoItem
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
                  variant: "subtitle1",
                  className: classes.infoItem,
                  children: tv.vote_average
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
            item: true,
            container: true,
            xs: 12,
            className: classes.section,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
              item: true,
              xs: 12,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
                variant: "h6",
                className: classes.moviInfo_label,
                children: "Overview"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
                variant: "subtitle2",
                style: {
                  paddingRight: 20
                },
                children: tv.overview
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
            item: true,
            container: true,
            xs: 12,
            className: classes.section,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
              title: "Trailer",
              type: "trailer",
              datas: trailer
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
              title: "Cast",
              type: "movie",
              datas: cast
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
          container: true,
          className: classes.recomm,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
            item: true,
            xs: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
              title: "Recommendation",
              list: "recommendation",
              type: "tv",
              datas: recomm
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS90dl9kYXRhLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy90di9bdHZfaWRdLmpzIl0sIm5hbWVzIjpbImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsImdldFR2IiwidHZfaWQiLCJ1c2VTV1IiLCJ0diIsImRhdGEiLCJlcnJvciIsImdldFRyYWlsZXIiLCJ0cmFpbGVyIiwiZ2V0UmVjb21tIiwicmVjb21tIiwiZ2V0Q2FzdCIsImNhc3QiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtb3ZpZUluZm8iLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiY2FyZCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJtb3ZpZVRpdGxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5MZWZ0IiwianVzdGlmeUNvbnRlbnQiLCJtb3ZpZVRpdGxlSW5mbyIsInNlY3Rpb24iLCJpbmZvSXRlbSIsIm1vdmlJbmZvX2xhYmVsIiwidHZJbmZvIiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImdldE1vdmllIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZEltYWdlIiwicG9zdGVyX3BhdGgiLCJuYW1lIiwiZmlyc3RfYWlyX2RhdGUiLCJnZW5yZXMiLCJtYXAiLCJnZW5yZSIsImluZGV4Iiwidm90ZV9hdmVyYWdlIiwicGFkZGluZ1JpZ2h0Iiwib3ZlcnZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxHQUFHO0FBQUEsU0FBSUMsS0FBSyxDQUFDRCxHQUFELENBQUws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QkFBSSxFQUFDLGdCQUF0QztBQUF1RCxrQkFBSSxFQUFDLElBQTVEO0FBQWlFLG1CQUFLLEVBQUVBO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFrREU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXNERDtBQUNGLEMsQ0FFRDtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBOztHQXZGd0IyQixNO1VBQ054QixTLEVBQ0QyQixxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90di9bdHZfaWRdLmI0ZGQ3MGE2NTNlNmIwZTViN2ZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5jb25zdCBmZXRjaGVyID0gdXJsID0+IGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUdiA9ICh0dl9pZCkgPT4geyAgICBcclxuICAgIGNvbnN0IHtkYXRhIDogdHYsIGVycm9yfSA9IHVzZVNXUihgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90di8ke3R2X2lkfT9hcGlfa2V5PWVjNGJkZmZjNTc5Mzk3NDhhOGFlMTk1MDM2MjhlNTE0Jmxhbmd1YWdlPWVuLVVTYCxmZXRjaGVyKTtcclxuICAgIHJldHVybiB7dHYsIGVycm9yfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUcmFpbGVyID0gKHR2X2lkKSA9PiB7ICAgIFxyXG4gICAgY29uc3Qge2RhdGEgOiB0cmFpbGVyLCBlcnJvcn0gPSB1c2VTV1IoYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHYvJHt0dl9pZH0vdmlkZW9zP2FwaV9rZXk9ZWM0YmRmZmM1NzkzOTc0OGE4YWUxOTUwMzYyOGU1MTQmbGFuZ3VhZ2U9ZW4tVVNgLGZldGNoZXIpO1xyXG4gICAgcmV0dXJuIHt0cmFpbGVyLCBlcnJvcn07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmVjb21tID0gKHR2X2lkKSA9PiB7ICAgIFxyXG4gICAgY29uc3Qge2RhdGEgOiByZWNvbW0sIGVycm9yfSA9IHVzZVNXUihgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90di8ke3R2X2lkfS9zaW1pbGFyP2FwaV9rZXk9ZWM0YmRmZmM1NzkzOTc0OGE4YWUxOTUwMzYyOGU1MTQmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xYCxmZXRjaGVyKTtcclxuICAgIHJldHVybiB7cmVjb21tLCBlcnJvcn07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2FzdCA9ICh0dl9pZCkgPT4geyAgICBcclxuICAgIGNvbnN0IHtkYXRhIDogY2FzdCwgZXJyb3J9ID0gdXNlU1dSKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3R2LyR7dHZfaWR9L2NyZWRpdHM/YXBpX2tleT1lYzRiZGZmYzU3OTM5NzQ4YThhZTE5NTAzNjI4ZTUxNCZsYW5ndWFnZT1lbi1VU2AsZmV0Y2hlcik7XHJcbiAgICByZXR1cm4ge2Nhc3QsIGVycm9yfTtcclxufTtcclxuXHJcbi8vICAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3R2LyR7Y29udGV4dC5xdWVyeS50dl9pZH0vc2ltaWxhcj9hcGlfa2V5PWVjNGJkZmZjNTc5Mzk3NDhhOGFlMTk1MDM2MjhlNTE0Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9MWApXHJcbi8vICAgY29uc3QgcmVjb21tID0gYXdhaXQgcmVzMi5qc29uKClcclxuXHJcbi8vICAgY29uc3QgcmVzMyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3R2LyR7Y29udGV4dC5xdWVyeS50dl9pZH0vdmlkZW9zP2FwaV9rZXk9ZWM0YmRmZmM1NzkzOTc0OGE4YWUxOTUwMzYyOGU1MTQmbGFuZ3VhZ2U9ZW4tVVNgKVxyXG4vLyAgIGNvbnN0IHRyYWlsZXIgPSBhd2FpdCByZXMzLmpzb24oKVxyXG4gIFxyXG4vLyAgIGNvbnN0IHJlczQgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90di8ke2NvbnRleHQucXVlcnkudHZfaWR9L2NyZWRpdHM/YXBpX2tleT1lYzRiZGZmYzU3OTM5NzQ4YThhZTE5NTAzNjI4ZTUxNCZsYW5ndWFnZT1lbi1VU2ApXHJcbi8vICAgY29uc3QgY2FzdCA9IGF3YWl0IHJlczQuanNvbigpXHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuXHJcbmltcG9ydCB7IGdldFR2LCBnZXRUcmFpbGVyLCBnZXRDYXN0LCBnZXRSZWNvbW0gfSBmcm9tICcuLi8uLi9kYXRhL3R2X2RhdGEnXHJcblxyXG5pbXBvcnQgQXBwQmFyQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudC9BcHBCYXJCYXInXHJcbmltcG9ydCBKdW1ib3Ryb24gZnJvbSAnLi4vLi4vY29tcG9uZW50L0p1bWJvdHJvbidcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudC9MaXN0SXRlbSdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFxyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBDYXJkLFxyXG4gIERpdmlkZXJcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBtb3ZpZUluZm86e1xyXG4gICAgcGFkZGluZzogJzBweCAxMDBweCcsXHJcbiAgICBtYXJnaW5Ub3A6IC03MCxcclxuICB9LFxyXG4gIGNhcmQ6e1xyXG4gICAgd2lkdGg6IDIxNC41NCxcclxuICAgIGhlaWdodDogMjgxLjU0LCAgICBcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3NpbHZlcicsXHJcbiAgICBtYXJnaW5Cb3R0b206IDE2LFxyXG4gICAgbWFyZ2luUmlnaHQ6IDgsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwMCUgMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcwJSAwJScsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0J1xyXG4gIH0sXHJcbiAgbW92aWVUaXRsZTp7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG1hcmdpbkxlZnQ6IDU0LFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXHJcbiAgfSxcclxuICBtb3ZpZVRpdGxlSW5mbzp7XHJcbiAgICBtYXJnaW5Ub3A6IDI0LFxyXG4gIH0sXHJcbiAgc2VjdGlvbjp7XHJcbiAgICBtYXJnaW5Ub3A6IDMyLFxyXG4gIH0sXHJcbiAgcmVjb21tOntcclxuICAgIG1hcmdpblRvcDogMzIsXHJcbiAgICBwYWRkaW5nOiAnMHB4IDEwMHB4JyxcclxuICB9LFxyXG4gIGluZm9JdGVtOntcclxuICAgIG1hcmdpblJpZ2h0OiAyNFxyXG4gIH0sXHJcbiAgbW92aUluZm9fbGFiZWw6e1xyXG4gICAgbWFyZ2luQm90dG9tOiAyNCxcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR2SW5mbygpIHsgIFxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTsgICAgXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHt0dn0gPSBnZXRNb3ZpZShyb3V0ZXIucXVlcnkudHZfaWQpO1xyXG4gIGNvbnN0IHt0cmFpbGVyfSA9IGdldFRyYWlsZXIocm91dGVyLnF1ZXJ5LnR2X2lkKTtcclxuICBjb25zdCB7Y2FzdH0gPSBnZXRDYXN0KHJvdXRlci5xdWVyeS50dl9pZCk7XHJcbiAgY29uc3Qge3JlY29tbX0gPSBnZXRSZWNvbW0ocm91dGVyLnF1ZXJ5LnR2X2lkKTtcclxuICBcclxuICAgIFxyXG4gIGlmKCF0dil7XHJcbiAgICByZXR1cm4gKCA8ZGl2PiB7IGNvbnNvbGUubG9nKCdub3RoaW5nJykgfTwvZGl2PiApXHJcbiAgfVxyXG4gIGVsc2V7ICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZD4gICAgICAgIFxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPiAgICAgICAgXHJcbiAgICAgICAgICA8dGl0bGU+TW92aWVib3Q8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8QXBwQmFyQmFyPjwvQXBwQmFyQmFyPlxyXG4gICAgICAgIDxKdW1ib3Ryb24gaW1nPXt0dn0+PC9KdW1ib3Ryb24+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllSW5mb30+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfSBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGAke3R2ID8gYHVybChcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAke3R2LnBvc3Rlcl9wYXRofVwiKWAgOiBgYH1gICAgfX0+PC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+e3R2Lm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllVGl0bGVJbmZvfT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvSXRlbX0+e3R2LmZpcnN0X2Fpcl9kYXRlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGZsZXhJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvSXRlbX0vPlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0di5nZW5yZXMubWFwKChnZW5yZSwgaW5kZXgpID0+ICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBrZXk9e2luZGV4fSB2YXJpYW50PVwic3VidGl0bGUxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9JdGVtfT57IGdlbnJlLm5hbWUgfTwvVHlwb2dyYXBoeT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgZmxleEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9JdGVtfS8+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0l0ZW19Pnt0di52b3RlX2F2ZXJhZ2V9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpSW5mb19sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgIE92ZXJ2aWV3XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgc3R5bGU9e3twYWRkaW5nUmlnaHQ6MjB9fT5cclxuICAgICAgICAgICAgICAgICAge3R2Lm92ZXJ2aWV3fVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgeHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtIHRpdGxlPVwiVHJhaWxlclwiIHR5cGU9XCJ0cmFpbGVyXCIgZGF0YXM9e3RyYWlsZXJ9PjwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtIHRpdGxlPVwiQ2FzdFwiIHR5cGU9XCJtb3ZpZVwiIGRhdGFzPXtjYXN0fT48L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgXHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucmVjb21tfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSB0aXRsZT1cIlJlY29tbWVuZGF0aW9uXCIgbGlzdD1cInJlY29tbWVuZGF0aW9uXCIgdHlwZT1cInR2XCIgZGF0YXM9e3JlY29tbX0+PC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Zm9vdGVyPjwvZm9vdGVyPiAgIFxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgICkgICAgXHJcbiAgfSAgICAgICAgXHJcbn1cclxuXHJcbi8vIHR2SW5mby5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4geyAgICBcclxuICBcclxuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90di8ke2NvbnRleHQucXVlcnkudHZfaWR9P2FwaV9rZXk9ZWM0YmRmZmM1NzkzOTc0OGE4YWUxOTUwMzYyOGU1MTQmbGFuZ3VhZ2U9ZW4tVVNgKVxyXG4vLyAgIGNvbnN0IHR2ID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuLy8gICBjb25zdCByZXMyID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHYvJHtjb250ZXh0LnF1ZXJ5LnR2X2lkfS9zaW1pbGFyP2FwaV9rZXk9ZWM0YmRmZmM1NzkzOTc0OGE4YWUxOTUwMzYyOGU1MTQmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xYClcclxuLy8gICBjb25zdCByZWNvbW0gPSBhd2FpdCByZXMyLmpzb24oKVxyXG5cclxuLy8gICBjb25zdCByZXMzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHYvJHtjb250ZXh0LnF1ZXJ5LnR2X2lkfS92aWRlb3M/YXBpX2tleT1lYzRiZGZmYzU3OTM5NzQ4YThhZTE5NTAzNjI4ZTUxNCZsYW5ndWFnZT1lbi1VU2ApXHJcbi8vICAgY29uc3QgdHJhaWxlciA9IGF3YWl0IHJlczMuanNvbigpXHJcbiAgXHJcbi8vICAgY29uc3QgcmVzNCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3R2LyR7Y29udGV4dC5xdWVyeS50dl9pZH0vY3JlZGl0cz9hcGlfa2V5PWVjNGJkZmZjNTc5Mzk3NDhhOGFlMTk1MDM2MjhlNTE0Jmxhbmd1YWdlPWVuLVVTYClcclxuLy8gICBjb25zdCBjYXN0ID0gYXdhaXQgcmVzNC5qc29uKClcclxuXHJcblxyXG4vLyAgIHJldHVybiB7IHR2LCByZWNvbW0sIHRyYWlsZXIsIGNhc3QgfVxyXG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==