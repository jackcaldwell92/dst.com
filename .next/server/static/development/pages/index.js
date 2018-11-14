module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Navbar */ "./styles/components/Navbar.ts");
/* harmony import */ var _styles_components_Links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Links */ "./styles/components/Links.ts");
/* harmony import */ var _styles_components_LinkText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/LinkText */ "./styles/components/LinkText.ts");
/* harmony import */ var _styles_components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/components/Logo */ "./styles/components/Logo.ts");
var _jsxFileName = "D:\\Projects\\dst.com\\components\\Header.tsx";






var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styles_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styles_components_Logo__WEBPACK_IMPORTED_MODULE_5__["Logo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "DS Textile Sourcing"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styles_components_Links__WEBPACK_IMPORTED_MODULE_3__["Links"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styles_components_LinkText__WEBPACK_IMPORTED_MODULE_4__["LinkText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styles_components_LinkText__WEBPACK_IMPORTED_MODULE_4__["LinkText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Contact"))));
};

/***/ }),

/***/ "./components/IndexBody.tsx":
/*!**********************************!*\
  !*** ./components/IndexBody.tsx ***!
  \**********************************/
/*! exports provided: IndexBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexBody", function() { return IndexBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/HeaderText */ "./styles/components/HeaderText.ts");
/* harmony import */ var _styles_components_IndexMainDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/IndexMainDiv */ "./styles/components/IndexMainDiv.ts");
var _jsxFileName = "D:\\Projects\\dst.com\\components\\IndexBody.tsx";



var IndexBody = function IndexBody() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_IndexMainDiv__WEBPACK_IMPORTED_MODULE_2__["IndexMainDiv"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_1__["HeaderText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Design"));
};

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styled-components */ "./styles/styled-components.ts");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
var _jsxFileName = "D:\\Projects\\dst.com\\components\\Layout.tsx";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');\n  body {\n    margin: 0px;\n    padding: 0px;\n    background-color: ", ";\n    font-family: 'Open Sans Condensed';\n    font-size: 10px;\n    text-shadow: 0px 16px 24px rgba(0,0,0,0.1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var GlobalStyle = Object(_styles_styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.theme.darkGrey;
});
var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__["theme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })));
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_IndexBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/IndexBody */ "./components/IndexBody.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _styles_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Button */ "./styles/components/Button.ts");
/* harmony import */ var _styles_components_HeaderDiv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/HeaderDiv */ "./styles/components/HeaderDiv.ts");
/* harmony import */ var _styles_components_HeaderImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/components/HeaderImage */ "./styles/components/HeaderImage.ts");
/* harmony import */ var _styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/components/HeaderText */ "./styles/components/HeaderText.ts");
/* harmony import */ var _styles_components_HeaderTextBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/components/HeaderTextBody */ "./styles/components/HeaderTextBody.ts");
var _jsxFileName = "D:\\Projects\\dst.com\\pages\\index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFindOutMoreButtonClicked", function () {
      console.log('Am I scrolling?');
      window.scrollTo({
        behavior: 'smooth',
        top: _this.main.current
      });
    });

    _this.main = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderImage__WEBPACK_IMPORTED_MODULE_5__["HeaderImage"], {
        src: "/static/header.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderDiv__WEBPACK_IMPORTED_MODULE_4__["HeaderDiv"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_6__["HeaderText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "From concept,"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_6__["HeaderText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "to complete."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderTextBody__WEBPACK_IMPORTED_MODULE_7__["HeaderTextBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Fully factored garment production.")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: function onClick() {
          return _this2.handleFindOutMoreButtonClicked();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Find out more")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        ref: function ref() {
          return 'main';
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_IndexBody__WEBPACK_IMPORTED_MODULE_1__["IndexBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./styles/components/Button.ts":
/*!*************************************!*\
  !*** ./styles/components/Button.ts ***!
  \*************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: ", "px;\n  padding: ", "px\n    ", "px;\n  font-size: 1.3rem;\n  background: linear-gradient(\n    45deg,\n    ", ",\n    ", "\n  );\n  color: ", ";\n  border-radius: 1.4rem;\n  border: none;\n  cursor: pointer;\n  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.2);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(_templateObject(), function (props) {
  return props.theme.spacing * 5;
}, function (props) {
  return props.theme.spacing;
}, function (props) {
  return props.theme.spacing * 2;
}, function (props) {
  return props.theme.iceBlue;
}, function (props) {
  return props.theme.lightGrey;
}, function (props) {
  return props.theme.darkGrey;
});

/***/ }),

/***/ "./styles/components/HeaderDiv.ts":
/*!****************************************!*\
  !*** ./styles/components/HeaderDiv.ts ***!
  \****************************************/
/*! exports provided: HeaderDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderDiv", function() { return HeaderDiv; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 100vh;\n  width: 100%;\n  z-index: -1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var HeaderDiv = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());

/***/ }),

/***/ "./styles/components/HeaderImage.ts":
/*!******************************************!*\
  !*** ./styles/components/HeaderImage.ts ***!
  \******************************************/
/*! exports provided: HeaderImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderImage", function() { return HeaderImage; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100vh;\n  width: 100%;\n  opacity: 0.3;\n  position: absolute;\n  top: 0px;\n  z-index: -1;\n  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.2);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var HeaderImage = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject());

/***/ }),

/***/ "./styles/components/HeaderText.ts":
/*!*****************************************!*\
  !*** ./styles/components/HeaderText.ts ***!
  \*****************************************/
/*! exports provided: HeaderText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderText", function() { return HeaderText; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 4rem;\n  letter-spacing: 0.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var HeaderText = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1(_templateObject(), function (props) {
  return props.theme.offWhite;
});

/***/ }),

/***/ "./styles/components/HeaderTextBody.ts":
/*!*********************************************!*\
  !*** ./styles/components/HeaderTextBody.ts ***!
  \*********************************************/
/*! exports provided: HeaderTextBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTextBody", function() { return HeaderTextBody; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 2rem;\n  max-width: 30vw;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var HeaderTextBody = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject(), function (props) {
  return props.theme.offWhite;
});

/***/ }),

/***/ "./styles/components/IndexMainDiv.ts":
/*!*******************************************!*\
  !*** ./styles/components/IndexMainDiv.ts ***!
  \*******************************************/
/*! exports provided: IndexMainDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexMainDiv", function() { return IndexMainDiv; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var IndexMainDiv = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());

/***/ }),

/***/ "./styles/components/LinkText.ts":
/*!***************************************!*\
  !*** ./styles/components/LinkText.ts ***!
  \***************************************/
/*! exports provided: LinkText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkText", function() { return LinkText; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: ", "px\n    ", "px;\n  font-size: 1.2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var LinkText = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject(), function (props) {
  return props.theme.spacing;
}, function (props) {
  return props.theme.spacing * 2;
});

/***/ }),

/***/ "./styles/components/Links.ts":
/*!************************************!*\
  !*** ./styles/components/Links.ts ***!
  \************************************/
/*! exports provided: Links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return Links; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  padding: 0 ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Links = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props.theme.spacing * 2;
});

/***/ }),

/***/ "./styles/components/Logo.ts":
/*!***********************************!*\
  !*** ./styles/components/Logo.ts ***!
  \***********************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css?family=Poiret+One');\n  font-family: 'Poiret One';\n  font-size: 1.4rem;\n  padding: 0 ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Logo = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject(), function (props) {
  return props.theme.spacing * 2;
});

/***/ }),

/***/ "./styles/components/Navbar.ts":
/*!*************************************!*\
  !*** ./styles/components/Navbar.ts ***!
  \*************************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  background: ", ";\n  width: 100%;\n  color: ", ";\n  justify-content: space-between;\n  opacity: 0.9;\n  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.1);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Navbar = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props.theme.teal;
}, function (props) {
  return props.theme.offWhite;
});

/***/ }),

/***/ "./styles/styled-components.ts":
/*!*************************************!*\
  !*** ./styles/styled-components.ts ***!
  \*************************************/
/*! exports provided: css, createGlobalStyle, keyframes, ThemeProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var _ref = styled_components__WEBPACK_IMPORTED_MODULE_0__,
    styled = _ref.default,
    css = _ref.css,
    createGlobalStyle = _ref.createGlobalStyle,
    keyframes = _ref.keyframes,
    ThemeProvider = _ref.ThemeProvider;

/* harmony default export */ __webpack_exports__["default"] = (styled);

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
var theme = {
  darkGrey: '#2B2D2E',
  iceBlue: '#89B9D2',
  lightGrey: '#BFC6C9',
  midGrey: '#8E9496',
  offWhite: '#f8f8f8',
  spacing: 10,
  teal: '#06334A'
};

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map