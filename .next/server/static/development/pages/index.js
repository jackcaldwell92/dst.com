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

/***/ "./components/About.tsx":
/*!******************************!*\
  !*** ./components/About.tsx ***!
  \******************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_AboutDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/AboutDiv */ "./styles/components/AboutDiv.ts");
/* harmony import */ var _styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/HeaderText */ "./styles/components/HeaderText.ts");
/* harmony import */ var _styles_components_WideBodyText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/WideBodyText */ "./styles/components/WideBodyText.ts");
var _jsxFileName = "D:\\Projects\\dst.com\\components\\About.tsx";





var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_AboutDiv__WEBPACK_IMPORTED_MODULE_2__["AboutDiv"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_3__["HeaderText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    duration: 2000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_WideBodyText__WEBPACK_IMPORTED_MODULE_4__["WideBodyText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "DS Textile Sourcing Limited (DST) was established by Steve and Danny Stones in 2013."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_WideBodyText__WEBPACK_IMPORTED_MODULE_4__["WideBodyText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Our services include garment design, fabric and trim sourcing, fully factored production, consultancy, stock holding, and supply of finished textile products within the UK."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_WideBodyText__WEBPACK_IMPORTED_MODULE_4__["WideBodyText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "We specialize in producing personal protective equipment for the private and public sector including military, police, ambulance and fire services, as well as personal load carriage equipment (PLCE), waterproof garments, armour carriers, tactical harnesses, and operational clothing.")));
};

/***/ }),

/***/ "./components/Contact.tsx":
/*!********************************!*\
  !*** ./components/Contact.tsx ***!
  \********************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Button */ "./styles/components/Button.ts");
/* harmony import */ var _styles_components_CenterDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/CenterDiv */ "./styles/components/CenterDiv.ts");
/* harmony import */ var _styles_components_ContactDiv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/ContactDiv */ "./styles/components/ContactDiv.ts");
/* harmony import */ var _styles_components_MailTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/components/MailTo */ "./styles/components/MailTo.ts");
/* harmony import */ var _styles_components_WideBodyText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/components/WideBodyText */ "./styles/components/WideBodyText.ts");
var _jsxFileName = "D:\\Projects\\dst.com\\components\\Contact.tsx";







var Contact = function Contact() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_ContactDiv__WEBPACK_IMPORTED_MODULE_4__["ContactDiv"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_CenterDiv__WEBPACK_IMPORTED_MODULE_3__["CenterDiv"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_MailTo__WEBPACK_IMPORTED_MODULE_5__["MailTo"], {
    href: "mailto:steve@prtextiles.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Contact Us"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_WideBodyText__WEBPACK_IMPORTED_MODULE_6__["WideBodyText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "If you would like to get in touch, please click the button above. Alternatively, you can message us at steve@prtextiles.com"))));
};

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/Links */ "./styles/components/Links.ts");
/* harmony import */ var _styles_components_LinkText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/LinkText */ "./styles/components/LinkText.ts");
/* harmony import */ var _styles_components_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Logo */ "./styles/components/Logo.ts");
/* harmony import */ var _styles_components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Navbar */ "./styles/components/Navbar.ts");
var _jsxFileName = "D:\\Projects\\dst.com\\components\\Header.tsx";





var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_Logo__WEBPACK_IMPORTED_MODULE_3__["Logo"], {
    onClick: function onClick() {
      return props.handleNavigation('home');
    },
    src: "/static/logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_Links__WEBPACK_IMPORTED_MODULE_1__["Links"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_LinkText__WEBPACK_IMPORTED_MODULE_2__["LinkText"], {
    onClick: function onClick() {
      return props.handleNavigation('services');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Services"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_LinkText__WEBPACK_IMPORTED_MODULE_2__["LinkText"], {
    onClick: function onClick() {
      return props.handleNavigation('about');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "About"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_LinkText__WEBPACK_IMPORTED_MODULE_2__["LinkText"], {
    onClick: function onClick() {
      return props.handleNavigation('contact');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Contact")));
};

/***/ }),

/***/ "./components/HeroHeaderText.tsx":
/*!***************************************!*\
  !*** ./components/HeroHeaderText.tsx ***!
  \***************************************/
/*! exports provided: HeroHeaderText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroHeaderText", function() { return HeroHeaderText; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Button */ "./styles/components/Button.ts");
/* harmony import */ var _styles_components_HeaderLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/HeaderLogo */ "./styles/components/HeaderLogo.ts");
/* harmony import */ var _styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/components/HeaderText */ "./styles/components/HeaderText.ts");
/* harmony import */ var _styles_components_HeaderTextBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/components/HeaderTextBody */ "./styles/components/HeaderTextBody.ts");
/* harmony import */ var _styles_components_HeroHeaderTextDiv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/components/HeroHeaderTextDiv */ "./styles/components/HeroHeaderTextDiv.ts");
var _jsxFileName = "D:\\Projects\\dst.com\\components\\HeroHeaderText.tsx";

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









var HeroHeaderText =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeroHeaderText, _React$Component);

  function HeroHeaderText() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HeroHeaderText);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HeroHeaderText)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      opacity: 1,
      translateAmount: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScroll", function () {
      if (window.scrollY < 500) {
        _this.setState({
          headerOpacity: _this.getHeaderOpactity(window.innerHeight, window.scrollY)
        });

        console.log('header opacity: ', _this.state.opacity);

        _this.setState({
          opacity: _this.getHeaderOpactity(window.innerHeight, window.scrollY),
          translateAmount: _this.getTranslateAmount(window.scrollY)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTranslateAmount", function (scrollAmount) {
      if (scrollAmount > 500) {
        return 125;
      } else {
        return scrollAmount / 4;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getHeaderOpactity", function (windowHeight, scrollAmount) {
      var opacity = windowHeight / scrollAmount / 10;
      return opacity;
    });

    return _this;
  }

  _createClass(HeroHeaderText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', Object(lodash__WEBPACK_IMPORTED_MODULE_0__["throttle"])(this.handleScroll, 100));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styles_components_HeroHeaderTextDiv__WEBPACK_IMPORTED_MODULE_7__["HeroHeaderTextDiv"], {
        onScroll: this.handleScroll,
        opacity: this.state.opacity,
        translateAmount: this.state.translateAmount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        delay: 2000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styles_components_HeaderLogo__WEBPACK_IMPORTED_MODULE_4__["HeaderLogo"], {
        src: "/static/logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_5__["HeaderText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "From concept")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        duration: 2000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_5__["HeaderText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "to complete")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        duration: 3000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styles_components_HeaderTextBody__WEBPACK_IMPORTED_MODULE_6__["HeaderTextBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Fully factored garment production")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        bottom: true,
        duration: 1500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styles_components_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: function onClick() {
          return _this2.props.handleFindOutMoreButtonClicked();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Find out more")));
    }
  }]);

  return HeroHeaderText;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

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
var _jsxFileName = "D:\\Projects\\dst.com\\components\\Layout.tsx";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css?family=Open+Sans');\n  body {\n    margin: 0px;\n    padding: 0px;\n    background-image: linear-gradient(45deg, ", ", #585858);\n    font-family: 'Open Sans';\n    font-size: 10px;\n    text-shadow: 0px 16px 24px rgba(0,0,0,0.1);\n  }\n"]);

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
  }, props.children, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })));
};

/***/ }),

/***/ "./components/Services.tsx":
/*!*********************************!*\
  !*** ./components/Services.tsx ***!
  \*********************************/
/*! exports provided: Services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_enter_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-enter-view */ "react-enter-view");
/* harmony import */ var react_enter_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_enter_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_BodyText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/BodyText */ "./styles/components/BodyText.ts");
/* harmony import */ var _styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/HeaderText */ "./styles/components/HeaderText.ts");
/* harmony import */ var _styles_components_IndexBodyGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/components/IndexBodyGrid */ "./styles/components/IndexBodyGrid.ts");
/* harmony import */ var _styles_components_LeftImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/components/LeftImage */ "./styles/components/LeftImage.ts");
/* harmony import */ var _styles_components_LeftText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/components/LeftText */ "./styles/components/LeftText.ts");
/* harmony import */ var _styles_components_RightImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/components/RightImage */ "./styles/components/RightImage.ts");
/* harmony import */ var _styles_components_RightText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/components/RightText */ "./styles/components/RightText.ts");
var _jsxFileName = "D:\\Projects\\dst.com\\components\\Services.tsx";










var Services = function Services() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_IndexBodyGrid__WEBPACK_IMPORTED_MODULE_5__["IndexBodyGrid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_LeftText__WEBPACK_IMPORTED_MODULE_7__["LeftText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_enter_view__WEBPACK_IMPORTED_MODULE_1__["InViewListener"], {
    onEnterView: function onEnterView() {
      return console.log('entered view');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_4__["HeaderText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    style: {
      textDecoration: 'none',
      color: '#f8f8f8'
    },
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Design"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_BodyText__WEBPACK_IMPORTED_MODULE_3__["BodyText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Whether you have designs for your product, or it is simply a concept. We have the expertise to ensure that its potential is reached."))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_RightImage__WEBPACK_IMPORTED_MODULE_8__["RightImage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "/static/baseline-edit-24px.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_LeftImage__WEBPACK_IMPORTED_MODULE_6__["LeftImage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "/static/baseline-desktop_mac-24px.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_RightText__WEBPACK_IMPORTED_MODULE_9__["RightText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_4__["HeaderText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Development"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_BodyText__WEBPACK_IMPORTED_MODULE_3__["BodyText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "From material selection and sourcing, to pattern creation, we cantake care of everything required to your product to manufacture."))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_LeftText__WEBPACK_IMPORTED_MODULE_7__["LeftText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_4__["HeaderText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Production"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_BodyText__WEBPACK_IMPORTED_MODULE_3__["BodyText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "With connections to factories and manufacturers around the world, we have the connections needed to get your product to market, regardless of the scale of your needs."))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_RightImage__WEBPACK_IMPORTED_MODULE_8__["RightImage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "/static/round-location_city-24px.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_LeftImage__WEBPACK_IMPORTED_MODULE_6__["LeftImage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "/static/round-local_shipping-24px.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_RightText__WEBPACK_IMPORTED_MODULE_9__["RightText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_4__["HeaderText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Supply"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_BodyText__WEBPACK_IMPORTED_MODULE_3__["BodyText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "In addition to fully factored garment product, we are also able to offer stock holding services. From our warehouse, located in Manchester, UK, we can supply your stock as you need it.")))));
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
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/About */ "./components/About.tsx");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_HeroHeaderText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HeroHeaderText */ "./components/HeroHeaderText.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Services */ "./components/Services.tsx");
/* harmony import */ var _styles_components_HeaderDiv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/components/HeaderDiv */ "./styles/components/HeaderDiv.ts");
/* harmony import */ var _styles_components_HeaderImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/components/HeaderImage */ "./styles/components/HeaderImage.ts");
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
      window.scrollTo({
        behavior: 'smooth',
        top: _this.servicesRef.current.offsetTop
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleNavigation", function (navigation) {
      switch (navigation) {
        case 'home':
          window.scrollTo({
            behavior: 'smooth',
            top: 0
          });
          return;

        case 'services':
          window.scrollTo({
            behavior: 'smooth',
            top: _this.servicesRef.current.offsetTop
          });
          return;

        case 'about':
          window.scrollTo({
            behavior: 'smooth',
            top: _this.aboutRef.current.offsetTop
          });
          return;

        case 'contact':
          window.scrollTo({
            behavior: 'smooth',
            top: _this.contactRef.current.offsetTop
          });

        default:
          return;
      }
    });

    _this.servicesRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    _this.aboutRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    _this.contactRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    _this.state = {
      headerTextVisible: false
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderImage__WEBPACK_IMPORTED_MODULE_8__["HeaderImage"], {
        src: "/static/header.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderDiv__WEBPACK_IMPORTED_MODULE_7__["HeaderDiv"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_HeroHeaderText__WEBPACK_IMPORTED_MODULE_4__["HeroHeaderText"], {
        handleFindOutMoreButtonClicked: this.handleFindOutMoreButtonClicked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        handleNavigation: this.handleNavigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        ref: this.servicesRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Services__WEBPACK_IMPORTED_MODULE_6__["Services"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        ref: this.aboutRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_About__WEBPACK_IMPORTED_MODULE_1__["About"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        ref: this.contactRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Contact__WEBPACK_IMPORTED_MODULE_2__["Contact"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./styles/components/AboutDiv.ts":
/*!***************************************!*\
  !*** ./styles/components/AboutDiv.ts ***!
  \***************************************/
/*! exports provided: AboutDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDiv", function() { return AboutDiv; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var AboutDiv = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());

/***/ }),

/***/ "./styles/components/BodyText.ts":
/*!***************************************!*\
  !*** ./styles/components/BodyText.ts ***!
  \***************************************/
/*! exports provided: BodyText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyText", function() { return BodyText; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.1rem;\n  color: ", ";\n  max-width: 25vw;\n  letter-spacing: 0.15rem;\n  line-height: 1.8em;\n  font-weight: 100;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var BodyText = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject(), function (props) {
  return props.theme.offWhite;
});

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
  var data = _taggedTemplateLiteral(["\n  margin: ", "px;\n  padding: ", "px\n    ", "px;\n  font-size: 1.1rem;\n  background: linear-gradient(\n    45deg,\n    ", ",\n    ", "\n  );\n  color: ", ";\n  border-radius: 1.4rem;\n  border: none;\n  cursor: pointer;\n  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.2);\n  transition: transform 0.2s;\n\n  :hover {\n    transform: scale(1.1);\n  }\n"]);

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

/***/ "./styles/components/CenterDiv.ts":
/*!****************************************!*\
  !*** ./styles/components/CenterDiv.ts ***!
  \****************************************/
/*! exports provided: CenterDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterDiv", function() { return CenterDiv; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var CenterDiv = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());

/***/ }),

/***/ "./styles/components/ContactDiv.ts":
/*!*****************************************!*\
  !*** ./styles/components/ContactDiv.ts ***!
  \*****************************************/
/*! exports provided: ContactDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDiv", function() { return ContactDiv; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var ContactDiv = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());

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
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n  z-index: -1;\n"]);

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

/***/ "./styles/components/HeaderLogo.ts":
/*!*****************************************!*\
  !*** ./styles/components/HeaderLogo.ts ***!
  \*****************************************/
/*! exports provided: HeaderLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLogo", function() { return HeaderLogo; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* position: absolute;\n  top: 0;\n  left: 0; */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var HeaderLogo = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject());

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
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css?family=Raleway');\n  color: ", ";\n  font-size: 3rem;\n  letter-spacing: 0.5rem;\n  font-weight: normal;\n  font-family: 'Raleway';\n  line-height: 3.5rem;\n"]);

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
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 2rem;\n  max-width: 33vw;\n  letter-spacing: 0.2rem;\n  text-align: center;\n"]);

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

/***/ "./styles/components/HeroHeaderTextDiv.ts":
/*!************************************************!*\
  !*** ./styles/components/HeroHeaderTextDiv.ts ***!
  \************************************************/
/*! exports provided: HeroHeaderTextDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroHeaderTextDiv", function() { return HeroHeaderTextDiv; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  opacity: ", ";\n  transform: translate(0, ", "px);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var HeroHeaderTextDiv = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props.opacity;
}, function (props) {
  return props.translateAmount;
});

/***/ }),

/***/ "./styles/components/IndexBodyGrid.ts":
/*!********************************************!*\
  !*** ./styles/components/IndexBodyGrid.ts ***!
  \********************************************/
/*! exports provided: IndexBodyGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexBodyGrid", function() { return IndexBodyGrid; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto auto auto auto;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 200vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var IndexBodyGrid = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());

/***/ }),

/***/ "./styles/components/LeftImage.ts":
/*!****************************************!*\
  !*** ./styles/components/LeftImage.ts ***!
  \****************************************/
/*! exports provided: LeftImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftImage", function() { return LeftImage; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  grid-column-start: 1;\n  grid-column-end: 2;\n  text-align: center;\n  transition: transform 0.2s;\n  :hover {\n    transform: scale(1.1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var LeftImage = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());

/***/ }),

/***/ "./styles/components/LeftText.ts":
/*!***************************************!*\
  !*** ./styles/components/LeftText.ts ***!
  \***************************************/
/*! exports provided: LeftText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftText", function() { return LeftText; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  grid-column-start: 1;\n  grid-column-end: 2;\n  transition: transform 0.2s;\n  :hover {\n    transform: scale(1.1);\n  }\n  text-align: justify;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var LeftText = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  padding: 25px;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img(_templateObject());

/***/ }),

/***/ "./styles/components/MailTo.ts":
/*!*************************************!*\
  !*** ./styles/components/MailTo.ts ***!
  \*************************************/
/*! exports provided: MailTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailTo", function() { return MailTo; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var MailTo = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a(_templateObject(), function (props) {
  return props.theme.darkGrey;
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
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  width: 100%;\n  color: ", ";\n  justify-content: space-between;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Navbar = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props.theme.offWhite;
});

/***/ }),

/***/ "./styles/components/RightImage.ts":
/*!*****************************************!*\
  !*** ./styles/components/RightImage.ts ***!
  \*****************************************/
/*! exports provided: RightImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightImage", function() { return RightImage; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  grid-column-start: 2;\n  grid-column-end: 3;\n  text-align: center;\n  transition: transform 0.2s;\n  :hover {\n    transform: scale(1.1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var RightImage = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());

/***/ }),

/***/ "./styles/components/RightText.ts":
/*!****************************************!*\
  !*** ./styles/components/RightText.ts ***!
  \****************************************/
/*! exports provided: RightText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightText", function() { return RightText; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  grid-column-start: 2;\n  grid-column-end: 3;\n  transition: transform 0.2s;\n  :hover {\n    transform: scale(1.1);\n  }\n  text-align: justify;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var RightText = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());

/***/ }),

/***/ "./styles/components/WideBodyText.ts":
/*!*******************************************!*\
  !*** ./styles/components/WideBodyText.ts ***!
  \*******************************************/
/*! exports provided: WideBodyText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WideBodyText", function() { return WideBodyText; });
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styled-components */ "./styles/styled-components.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.2rem;\n  color: ", ";\n  max-width: 55vw;\n  letter-spacing: 0.25rem;\n  text-align: center;\n  line-height: 3rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var WideBodyText = _styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject(), function (props) {
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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-enter-view":
/*!***********************************!*\
  !*** external "react-enter-view" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-enter-view");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

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