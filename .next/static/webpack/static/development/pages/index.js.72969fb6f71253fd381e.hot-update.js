webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/About */ "./components/About.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Services */ "./components/Services.tsx");
/* harmony import */ var _styles_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/components/Button */ "./styles/components/Button.ts");
/* harmony import */ var _styles_components_HeaderDiv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/components/HeaderDiv */ "./styles/components/HeaderDiv.ts");
/* harmony import */ var _styles_components_HeaderImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/components/HeaderImage */ "./styles/components/HeaderImage.ts");
/* harmony import */ var _styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/components/HeaderText */ "./styles/components/HeaderText.ts");
/* harmony import */ var _styles_components_HeaderTextBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/components/HeaderTextBody */ "./styles/components/HeaderTextBody.ts");
var _jsxFileName = "/Users/jackcaldwell/Projects/dst.com/pages/index.tsx";

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleNavigation", function (navigation) {
      switch (navigation) {
        case 'home':
          window.scrollTo({
            behavior: 'smooth',
            top: 0
          });

        case 'services':
          window.scrollTo({
            behavior: 'smooth',
            top: _this.servicesRef.current.offsetTop
          });

        case 'about':
          window.scrollTo({
            behavior: 'smooth',
            top: _this.aboutRef.current.offsetTop
          });
      }
    });

    _this.servicesRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    _this.aboutRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderImage__WEBPACK_IMPORTED_MODULE_8__["HeaderImage"], {
        src: "/static/header.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderDiv__WEBPACK_IMPORTED_MODULE_7__["HeaderDiv"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_9__["HeaderText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "From concept")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
        duration: 2000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderText__WEBPACK_IMPORTED_MODULE_9__["HeaderText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "to complete.")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
        duration: 3000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_HeaderTextBody__WEBPACK_IMPORTED_MODULE_10__["HeaderTextBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Fully factored garment production.")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
        bottom: true,
        duration: 1500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_components_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        onClick: function onClick() {
          return _this2.handleNavigation('services');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Find out more"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        handleNavigation: this.handleNavigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        ref: this.servicesRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Services__WEBPACK_IMPORTED_MODULE_5__["Services"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        ref: this.aboutRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_About__WEBPACK_IMPORTED_MODULE_2__["About"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.72969fb6f71253fd381e.hot-update.js.map