webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _components_ProTip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProTip */ "./src/components/ProTip.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Link */ "./src/components/Link.js");
/* harmony import */ var _components_Copyright__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Copyright */ "./src/components/Copyright.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\anana\\Project\\covid-app\\src\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







 // import Link from "next/link";

 //import { XMLHttpRequest } from "../../node_modules/xmlhttprequest/lib/XMLHttpRequest";
//const RequestService = require("../../functions/utils.js");
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var requestService = new RequestService();
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var request = new XMLHttpRequest();
// request.open("GET", url);
// request.send(null);
// alert(request.status);
// let covidapi = httpGet(url);
// console.log(covidapi);

var Index = function Index(props) {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    my: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h4",
    component: "h1",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Hi! Welcome to the Covid App"), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://ananaziz96.github.io/cv/",
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "Built with \u2764\uFE0F by Anan Aziz"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    variant: "contained",
    color: "default",
    component: _components_Link__WEBPACK_IMPORTED_MODULE_6__["default"],
    naked: true,
    href: "/dashboard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "Dashboard")), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, "Covid-19 Cases in Bangladesh"), __jsx("table", {
    style: {
      borderSpacing: "50px 0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Date"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Case of infected")), props.data.map(function (show) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, show.Date), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, show.Cases));
  })));
};

Index.getInitialProps = function _callee() {
  var url, res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "https://api.covid19api.com/dayone/country/bangladesh/status/confirmed/live";
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()(url));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            data: data.map(function (entry) {
              return entry;
            })
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index); // export default function Index() {
//   return (
//     <Container maxWidth="sm">
// <Box my={4}>
//   <Typography variant="h4" component="h1" gutterBottom>
//     Hi! Welcome to the Covid App
//   </Typography>
//   <Link href="https://ananaziz96.github.io/cv/" color="secondary">
//     Built with ❤️ by Anan Aziz
//   </Link>
//   <br />
//   <br />
//   <Button
//     variant="contained"
//     color="default"
//     component={Link}
//     naked
//     href="/dashboard"
//   >
//     Dashboard
//   </Button>
//   {/* <ProTip /> */}
//   {/* <Copyright /> */}
// </Box>
//     </Container>
//   );
// }

/***/ })

})
//# sourceMappingURL=index.js.dc59a44ed7d76d770c22.hot-update.js.map