(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Checkbox.js":
/*!*********************!*\
  !*** ./Checkbox.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: 'ZRCheckbox',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      text: '',
      layout: 'flex-row',
      checked: false,
      disabled: false
    };
  },
  getInitialState: function getInitialState() {
    var _value = this.props.checked;
    if (this.props.value != null) {
      _value = this.props.value;
    }
    return {
      checked: _value
    };
  },
  __onClick: function __onClick(event) {
    if (this.props.disabled) {
      return false;
    }
    this.state.checked = event.value = event.checked = !this.state.checked;
    this.forceUpdate();
    this.props.onClick && this.props.onClick(event, this);
    this.props.onChange && this.props.onChange(event, this);
  },
  getValue: function getValue() {
    return this.state.checked;
  },
  setValue: function setValue(value) {
    this.setState({
      checked: value
    });
  },
  __onChange: function __onChange(event) {
    this.setState({
      checked: !this.state.checked
    });
  },
  __renderContent: function __renderContent() {
    var _return = this.props.contentRender && this.props.contentRender(this);
    if (_return !== null) {
      _return = this.props.text || this.props.label || '';
    }
    if (_return) {
      return /*#__PURE__*/React.createElement("div", {
        className: "content"
      }, _return);
    }
    return null;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-checkbox', this.props.className),
      style: this.props.style,
      "data-disabled": this.props.disabled,
      "data-checked": this.state.checked,
      onClick: this.__onClick
    }, /*#__PURE__*/React.createElement("input", {
      name: this.props.name,
      type: "checkbox",
      checked: this.state.checked,
      onChange: this.__onChange
    }), this.state.checked ? /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "far",
      "data-icon": "check-square",
      className: "icon svg-inline--fa fa-check-square fa-w-14 ",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"
    })) : /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "far",
      "data-icon": "square",
      className: "icon svg-inline--fa fa-square fa-w-14 ",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"
    })), this.__renderContent());
  }
});

/***/ }),

/***/ "./Checkboxs.js":
/*!**********************!*\
  !*** ./Checkboxs.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || __webpack_require__(/*! react */ "react");
var UncontrolCheckbox = __webpack_require__(/*! ./UncontrolCheckbox */ "./UncontrolCheckbox.js");
module.exports = React.createClass({
  displayName: 'ZRCheckboxs',
  getDefaultProps: function getDefaultProps() {
    return {
      splitChar: ',',
      textKey: 'text',
      valueKey: 'value',
      dataType: 'String'
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.__initValue()
    };
  },
  __initValue: function __initValue() {
    var _value = null;
    if (this.props.value != null) {
      _value = this.props.value;
    } else {
      _value = [];
    }
    return _value;
  },
  parseValue: function parseValue(value) {
    if (window[this.props.dataType]) {
      return new window[this.props.dataType](value).valueOf();
    }
    throw new Error('Data Type Of List Is Null.');
  },
  __isChecked: function __isChecked(item, index) {
    var _value = item[this.props.valueKey].toString();
    if (zn.is(this.state.value, 'array')) {
      if (this.state.value.indexOf(_value) != -1) {
        return true;
      } else {
        return false;
      }
    } else {
      var _avalue = this.state.value.split(this.props.splitChar).filter(function (value) {
        return !!value;
      });
      if (_avalue.indexOf(_value) != -1) {
        return true;
      } else {
        return false;
      }
    }
  },
  __onItemClick: function __onItemClick(event, checkbox) {
    var _return = this.props.onItemClick && this.props.onItemClick(event, this);
    if (_return == null) {
      this.__clickDefault(event);
    }
  },
  __clickDefault: function __clickDefault(event) {
    var _data = event.data,
      _value = _data[this.props.valueKey].toString();
    if (zn.is(this.state.value, 'array')) {
      if (this.state.value.indexOf(_value) != -1) {
        this.state.value.splice(this.state.value.indexOf(_value), 1);
      } else {
        this.state.value.push(_value);
      }
    } else {
      var _avalue = this.state.value.split(this.props.splitChar).filter(function (value) {
        return !!value;
      });
      if (_avalue.indexOf(_value) != -1) {
        _avalue.splice(_avalue.indexOf(_value), 1);
      } else {
        _avalue.push(_value);
      }
      this.state.value = _avalue.join(this.props.splitChar);
    }
    event.value = this.state.value;
    this.forceUpdate();
    this.props.onChange && this.props.onChange(event, this);
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;
    if (!zn.is(item, 'object')) {
      var _temp = {
        index: index
      };
      _temp[this.props.textKey] = _temp[this.props.valueKey] = item;
      item = _temp;
    } else {
      item.index = index;
    }
    var _return = this.props.itemRender && this.props.itemRender(item, index);
    if (!_return) {
      _return = item[this.props.textKey];
    }
    return /*#__PURE__*/React.createElement(UncontrolCheckbox, _extends({
      key: index,
      disabled: this.props.disabled,
      contentRender: this.props.contentRender
    }, item, {
      checked: this.__isChecked(item, index),
      onClick: function onClick(event) {
        return _this.__onItemClick(event, item);
      }
    }));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style,
      className: znui.react.classname("zr-checkboxs", this.props.className)
    }, this.props.children, /*#__PURE__*/React.createElement(znui.react.DataView, {
      data: this.props.data,
      itemRender: this.__itemRender
    }));
  }
});

/***/ }),

/***/ "./List.js":
/*!*****************!*\
  !*** ./List.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass(_defineProperty(_defineProperty(_defineProperty({
  displayName: 'ZRSelectList',
  getDefaultProps: function getDefaultProps() {
    return {
      splitChar: ',',
      textKey: 'text',
      valueKey: 'value',
      dataType: 'String'
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.__initValue()
    };
  },
  __initValue: function __initValue() {
    var _value = null;
    if (this.props.value != null) {
      _value = this.props.value;
    } else {
      _value = [];
    }
    return _value;
  },
  parseValue: function parseValue(value) {
    if (window[this.props.dataType]) {
      return new window[this.props.dataType](value).valueOf();
    }
    throw new Error('Data Type Of List Is Null.');
  },
  __isChecked: function __isChecked(item, index) {
    var _value = item[this.props.valueKey];
    if (zn.is(this.state.value, 'array')) {
      if (this.state.value.indexOf(_value) != -1) {
        return true;
      } else {
        return false;
      }
    } else {
      var _avalue = this.state.value.split(this.props.splitChar).filter(function (value) {
        return !!value;
      });
      if (_avalue.indexOf(_value) != -1) {
        return true;
      } else {
        return false;
      }
    }
  },
  __onItemClick: function __onItemClick(event, checkbox) {
    var _return = this.props.onItemClick && this.props.onItemClick(event, this);
    if (_return == null) {
      this.__clickDefault(event);
    }
  },
  __clickDefault: function __clickDefault(event) {
    var _data = event.data,
      _value = _data[this.props.valueKey];
    if (zn.is(this.state.value, 'array')) {
      if (this.state.value.indexOf(_value) != -1) {
        this.state.value.splice(this.state.value.indexOf(_value), 1);
      } else {
        this.state.value.push(_value);
      }
    } else {
      var _avalue = this.state.value.split(this.props.splitChar).filter(function (value) {
        return !!value;
      });
      if (_avalue.indexOf(_value) != -1) {
        _avalue.splice(_avalue.indexOf(_value), 1);
      } else {
        _avalue.push(_value);
      }
      this.state.value = _avalue.join(this.props.splitChar);
    }
    event.value = this.state.value;
    this.forceUpdate();
    this.props.onChange && this.props.onChange(event, this);
  }
}, "__onItemClick", function __onItemClick() {}), "__itemRender", function __itemRender(item, index) {
  var _this = this;
  if (!zn.is(item, 'object')) {
    var _temp = {
      index: index
    };
    _temp[this.props.textKey] = _temp[this.props.valueKey] = item;
    item = _temp;
  } else {
    item.index = index;
  }
  var _text = item[this.props.textKey];
  var _return = this.props.itemRender && this.props.itemRender(item, index);
  if (!_return) {
    _return = /*#__PURE__*/React.createElement(React.Fragment, null, item.icon && /*#__PURE__*/React.createElement("i", {
      className: "fa " + item.icon
    }), /*#__PURE__*/React.createElement("span", {
      className: "label"
    }, _text));
  }
  return /*#__PURE__*/React.createElement("li", {
    key: index,
    className: "list-item",
    onClick: function onClick(event) {
      return _this.__onItemClick(event, item, index);
    }
  }, _return);
}), "render", function render() {
  return /*#__PURE__*/React.createElement("ul", {
    style: this.props.style,
    className: znui.react.classname("zr-select-list", this.props.className)
  }, this.props.children, /*#__PURE__*/React.createElement(znui.react.DataView, {
    data: this.props.data,
    itemRender: this.__itemRender
  }));
}));

/***/ }),

/***/ "./Menu.js":
/*!*****************!*\
  !*** ./Menu.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
var popup = __webpack_require__(/*! znui-react-popup */ "znui-react-popup");
var List = __webpack_require__(/*! ./List */ "./List.js");
module.exports = React.createClass({
  displayName: 'ZRPopupSelect',
  getDefaultProps: function getDefaultProps() {
    return {
      text: '',
      textKey: 'text',
      value: '',
      valueKey: 'value',
      disabled: false,
      placeholder: "请选择"
    };
  },
  getInitialState: function getInitialState() {
    return {
      text: this.props.text,
      value: this.props.value
    };
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value) {
    this.state.value = value;
    this.forceUpdate();
    this.props.onChange && this.props.onChange({
      value: value
    }, this);
  },
  getText: function getText() {
    return this.state.text;
  },
  setText: function setText(text) {
    this.setState({
      text: text
    });
  },
  setData: function setData(value, text) {
    this.setState({
      value: value,
      text: text
    });
  },
  __resolveTarget: function __resolveTarget(target) {
    if (target) {
      if (!target.classList.contains('select-text')) {
        return this.__resolveTarget(target.parentNode);
      } else {
        return target;
      }
    }
  },
  __popoverRender: function __popoverRender(event, dropdown) {
    var _target = this.__resolveTarget(event.target);
    if (this.props.disabled) {
      return null;
    }
    var _element = znui.react.createReactElement(this.props.popupRender, {
      value: this.state.value,
      text: this.state.text,
      event: event,
      dropdown: dropdown,
      popupSelect: this
    }, this.props.context);
    if (!_element && this.props.data) {
      _element = /*#__PURE__*/React.createElement("div", {
        className: "select-popover"
      }, /*#__PURE__*/React.createElement(List, {
        splitChar: this.props.splitChar,
        textKey: this.props.textKey,
        valueKey: this.props.valueKey,
        dataType: this.props.dataType,
        data: this.props.data
      }));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: _target.offsetWidth
      },
      className: "select-popover"
    }, _element);
  },
  __valueRender: function __valueRender() {
    var _element = znui.react.createReactElement(this.props.textRender, {
      value: this.state.value,
      text: this.state.text,
      popupSelect: this
    }, this.props.context);
    if (!_element) {
      _element = this.state.text || this.props.placeholder;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "select-text"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text"
    }, _element), /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "caret-down",
      className: "svg-inline--fa fa-caret-down fa-w-10 ",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 320 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
    })));
  },
  __render: function __render() {
    return /*#__PURE__*/React.createElement(popup.Dropdown, {
      popover: {
        render: function render() {
          return /*#__PURE__*/React.createElement("ul", {
            className: "zr-select-menu-dropdown-list"
          }, [{
            label: '账号信息',
            icon: 'fa-user-circle'
          }, {
            label: '企业认证',
            icon: 'fa-drivers-license-o'
          }, {
            label: '企业邀请',
            icon: 'fa-deaf'
          }, {
            label: '基本设置',
            icon: 'fa-sliders'
          }].map(function (item, index) {
            return /*#__PURE__*/React.createElement("li", {
              className: "list-item",
              key: index
            }, /*#__PURE__*/React.createElement("i", {
              className: "icon fa " + item.icon
            }), /*#__PURE__*/React.createElement("span", {
              className: "label"
            }, item.label));
          }));
        },
        onContainerEvent: function onContainerEvent(event, popover) {
          return false;
        }
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "user-session"
    }, /*#__PURE__*/React.createElement("figure", {
      className: "avatar",
      onClick: function onClick() {
        return znui.app.session.jump('/main/my/info');
      }
    }, /*#__PURE__*/React.createElement("img", {
      "data-zr-popup-tooltip": "\u67E5\u770B\u6211\u7684\u4E2A\u4EBA\u4FE1\u606F",
      src: this.state.user.headimgurl || '../_com/images/logo-128.png'
    })), /*#__PURE__*/React.createElement("span", {
      className: "name"
    }, this.state.user.Username || this.state.user.Name), /*#__PURE__*/React.createElement("i", {
      className: "fa fa-angle-down"
    })));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(popup.Dropdown, {
      className: znui.react.classname("zr-select-menu", this.props.className, this.props.disabled ? 'disabled' : ''),
      style: this.props.style,
      popover: {
        render: this.__popoverRender,
        onContainerEvent: function onContainerEvent(event, popover) {
          return false;
        }
      }
    }, this.__valueRender());
  }
});

/***/ }),

/***/ "./PopupSelect.js":
/*!************************!*\
  !*** ./PopupSelect.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
var popup = __webpack_require__(/*! znui-react-popup */ "znui-react-popup");
module.exports = React.createClass({
  displayName: 'ZRPopupSelect',
  getDefaultProps: function getDefaultProps() {
    return {
      text: '',
      textKey: 'text',
      value: '',
      valueKey: 'value',
      disabled: false,
      longText: true,
      placeholder: "请选择"
    };
  },
  getInitialState: function getInitialState() {
    return {
      text: this.props.text,
      value: this.props.value,
      dropdown: null
    };
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value) {
    this.state.value = value;
    this.forceUpdate();
    this.props.onChange && this.props.onChange({
      value: value
    }, this);
  },
  getText: function getText() {
    return this.state.text;
  },
  setText: function setText(text) {
    this.setState({
      text: text
    });
  },
  setData: function setData(value, text) {
    this.setState({
      value: value,
      text: text
    });
  },
  __resolveTarget: function __resolveTarget(target) {
    if (target) {
      if (!target.classList.contains('select-text')) {
        return this.__resolveTarget(target.parentNode);
      } else {
        return target;
      }
    }
  },
  __popoverRender: function __popoverRender(event, dropdown) {
    var _target = this.__resolveTarget(event.target);
    if (this.props.disabled) {
      return null;
    }
    var _element = znui.react.createReactElement(this.props.popupRender, {
      value: this.state.value,
      text: this.state.text,
      event: event,
      dropdown: dropdown,
      popupSelect: this
    }, this.props.context);
    if (!_element) {
      _element = /*#__PURE__*/React.createElement("div", {
        className: "select-popover"
      });
    }
    this.state.dropdown = dropdown;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: this.props.width || _target.offsetWidth,
        minWidth: this.props.minWidth
      },
      className: "select-popover"
    }, _element);
  },
  __valueRender: function __valueRender() {
    var _element = znui.react.createReactElement(this.props.textRender, {
      value: this.state.value,
      text: this.state.text,
      dropdown: this.state.dropdown,
      popupSelect: this
    }, this.props.context);
    if (!_element) {
      var _text = this.state.text || this.state.value || this.props.placeholder;
      _element = /*#__PURE__*/React.createElement("div", {
        className: "text " + (this.props.longText ? 'znui-react-long-text' : '')
      }, _text);
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "select-text",
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, this.props.showText !== false && _element, /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "caret-down",
      className: "svg-inline--fa fa-caret-down fa-w-10 ",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 320 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
    })));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(popup.Dropdown, {
      className: znui.react.classname("zr-popup-select", this.props.className, this.props.disabled ? 'disabled' : ''),
      style: this.props.style,
      stopPropagation: this.props.stopPropagation,
      popover: {
        render: this.__popoverRender,
        onContainerEvent: function onContainerEvent(event, popover) {
          return false;
        }
      }
    }, this.__valueRender());
  }
});

/***/ }),

/***/ "./Radio.js":
/*!******************!*\
  !*** ./Radio.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || __webpack_require__(/*! react */ "react");
var RadioItem = React.createClass({
  displayName: 'ZRRadioItem',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      text: '',
      checked: false,
      disabled: false
    };
  },
  __onClick: function __onClick(event) {
    if (this.props.disabled) {
      return false;
    }
    event.data = this.props;
    event.sender = this;
    this.props.onClick && this.props.onClick(event, this);
  },
  __renderContent: function __renderContent() {
    var _return = this.props.contentRender && this.props.contentRender(this);
    if (_return !== null) {
      _return = this.props.text || this.props.label || '';
    }
    if (_return) {
      return /*#__PURE__*/React.createElement("div", {
        className: "content"
      }, _return);
    }
    return null;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-radio-item', this.props.className),
      onClick: this.__onClick,
      "data-disabled": this.props.disabled,
      "data-checked": this.props.checked
    }, /*#__PURE__*/React.createElement("input", {
      name: this.props.name,
      type: "radio",
      defaultChecked: this.props.checked,
      onChange: this.props.onChange
    }), this.props.checked ? /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "far",
      "data-icon": "dot-circle",
      className: "icon svg-inline--fa fa-dot-circle fa-w-16 ",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
    })) : /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "far",
      "data-icon": "circle",
      className: "icon svg-inline--fa fa-circle fa-w-16 ",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"
    })), this.__renderContent());
  }
});
var Radio = React.createClass({
  displayName: 'ZRRadio',
  getDefaultProps: function getDefaultProps() {
    return {
      textKey: 'text',
      valueKey: 'value',
      dataType: 'String',
      disabled: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.__initValue()
    };
  },
  __initValue: function __initValue() {
    var _value = null;
    if (this.props.value !== null) {
      _value = this.props.value;
    } else {
      _value = '';
    }
    return this.parseValue(_value);
  },
  parseValue: function parseValue(value) {
    if (window[this.props.dataType]) {
      return new window[this.props.dataType](value).valueOf();
    }
    throw new Error('Data Type Of List Is Null.');
  },
  __isChecked: function __isChecked(item, index) {
    var _value = this.parseValue(item[this.props.valueKey]);
    if (_value === this.state.value) {
      return true;
    } else {
      return false;
    }
  },
  __onRadioItemClick: function __onRadioItemClick(event, item) {
    if (this.props.disabled || event.data.disabled) {
      return false;
    }
    this.state.value = event.value = this.parseValue(item[this.props.valueKey]);
    this.forceUpdate();
    this.props.onChange && this.props.onChange(event, this);
    this.props.onClick && this.props.onClick(event, this);
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;
    if (!zn.is(item, 'object')) {
      var _temp = {
        index: index
      };
      _temp[this.props.textKey] = _temp[this.props.valueKey] = item;
      item = _temp;
    } else {
      item.index = index;
    }
    var _return = this.props.itemRender && this.props.itemRender(item, index);
    if (!_return) {
      _return = item[this.props.textKey];
    }
    return /*#__PURE__*/React.createElement(RadioItem, _extends({
      key: index,
      disabled: this.props.disabled
    }, item, {
      onClick: function onClick(event) {
        return _this.__onRadioItemClick(event, item);
      },
      checked: this.__isChecked(item)
    }));
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value, callback) {
    value = this.parseValue(value);
    this.state.value = value;
    this.forceUpdate();
    this.props.onChange && this.props.onChange({
      value: value
    }, this);
    callback && callback(value, this);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style,
      className: znui.react.classname('zr-radio', this.props.className)
    }, /*#__PURE__*/React.createElement(znui.react.DataView, {
      data: this.props.data,
      itemRender: this.__itemRender
    }));
  }
});
module.exports = Radio;

/***/ }),

/***/ "./Select.js":
/*!*******************!*\
  !*** ./Select.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var React = znui.React || __webpack_require__(/*! react */ "react");
var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");
module.exports = React.createClass({
  displayName: 'ZRSelect',
  getDefaultProps: function getDefaultProps() {
    return {
      dataType: 'String',
      className: '',
      value: '',
      textKey: 'text',
      valueKey: 'value',
      disabled: false,
      multiple: false,
      placeholder: "请选择"
    };
  },
  componentDidMount: function componentDidMount() {
    //ReactDOM.findDOMNode(this).value = this.state.value;
  },
  getInitialState: function getInitialState() {
    var _value = this.parseValue(this.props.value),
      _color = null;
    if (this.props.data && zn.is(this.props.data, 'array')) {
      var _iterator = _createForOfIteratorHelper(this.props.data),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          if (item.value == _value) {
            _color = item.color;
            continue;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return {
      color: this.props.color || _color,
      style: null,
      className: null,
      value: _value
    };
  },
  parseValue: function parseValue(value) {
    if (this.props.multiple) {
      switch (zn.type(value)) {
        case 'array':
          return value;
        case 'string':
        case 'number':
          return [value];
      }
    }
    if (window[this.props.dataType]) {
      return window[this.props.dataType](value).valueOf();
    }
    throw new Error('Data Type Of List Is Null.');
  },
  __onSelectClick: function __onSelectClick(event) {
    event.stopPropagation();
    event.preventDefault();
  },
  __parseExp: function __parseExp(item, exp) {
    if (typeof exp == 'string') {
      if (exp.indexOf('{') != -1) {
        return zn.format(exp, item);
      } else {
        return item[exp];
      }
    } else if (typeof exp == 'function') {
      return exp(item);
    }
  },
  __itemRender: function __itemRender(item, index) {
    var _value,
      _text,
      _item = item || {};
    if (zn.is(_item, 'object')) {
      _value = this.__parseExp(_item, this.props.valueKey);
      _text = this.__parseExp(_item, this.props.textKey);
    } else {
      _value = _text = _item;
    }
    return /*#__PURE__*/React.createElement("option", {
      style: _item.style,
      className: _item.className,
      disabled: item.disabled,
      selected: this.state.value == _value,
      key: _value,
      value: _value,
      "data-text": _text,
      "data-value": _value,
      "data-color": _item.color || ''
    }, _text);
  },
  __onSelectChange: function __onSelectChange(event) {
    var _target = event.target,
      _data = event.target.childNodes[_target.selectedIndex].dataset,
      _value = this.__parseExp(_data, this.props.valueKey) || this.__parseExp(_data, 'value'),
      _text = this.__parseExp(_data, this.props.textKey) || this.__parseExp(_data, 'text');
    event.selectedIndex = +_target.selectedIndex - 1;
    event.data = _data;
    event.value = _value;
    event.text = _text;
    if (_data.color) {
      this.state.color = _data.color;
    }
    if (_data.style) {
      this.state.style = _data.style;
    }
    if (_data.className) {
      this.state.className = _data.className;
    }
    this.state.value = this.parseValue(_value);
    this.forceUpdate();
    this.props.onChange && this.props.onChange(event, this);
  },
  getValue: function getValue() {
    return this.parseValue(this.state.value || ReactDOM.findDOMNode(this).value);
  },
  setValue: function setValue(value) {
    this.state.value = this.parseValue(value);
    this.forceUpdate();
    this.props.onChange && this.props.onChange({
      value: value
    }, this);
  },
  __resolveStyle: function __resolveStyle() {
    var _style = {};
    if (this.state.color) {
      _style.color = this.state.color;
      _style.borderColor = this.state.color;
    }
    if (this.state.style) {
      _style = zn.extend(_style, this.state.style);
    }
    return _style;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("select", {
      className: znui.react.classname("zr-select", this.props.className, this.state.className),
      style: znui.react.style({}, this.props.style, this.__resolveStyle()),
      name: this.props.name,
      value: this.state.value,
      multiple: this.props.multiple,
      required: this.props.required,
      disabled: this.props.disabled,
      readOnly: this.props.readonly,
      onChange: this.__onSelectChange,
      onClick: this.__onSelectClick
    }, /*#__PURE__*/React.createElement("option", {
      value: "",
      disabled: true
    }, this.props.placeholder), /*#__PURE__*/React.createElement(znui.react.DataView, {
      data: this.props.data,
      itemRender: this.__itemRender
    }));
  }
});

/***/ }),

/***/ "./UncontrolCheckbox.js":
/*!******************************!*\
  !*** ./UncontrolCheckbox.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: 'ZRUncontrolCheckbox',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      text: '',
      layout: 'flex-row',
      checked: false,
      disabled: false,
      onChange: function onChange() {}
    };
  },
  __onClick: function __onClick(event) {
    if (this.props.disabled) {
      return false;
    }
    event.data = this.props;
    event.sender = this;
    this.props.onClick && this.props.onClick(event, this);
  },
  __renderContent: function __renderContent() {
    var _return = this.props.contentRender && this.props.contentRender(this);
    if (_return === undefined || _return === null) {
      _return = this.props.text || this.props.label || '';
    }
    if (_return) {
      return /*#__PURE__*/React.createElement("div", {
        className: "content"
      }, _return);
    }
    return null;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-uncontrol-checkbox', this.props.className),
      style: this.props.style,
      "data-disabled": this.props.disabled,
      "data-checked": this.props.checked,
      onClick: this.__onClick
    }, /*#__PURE__*/React.createElement("input", {
      name: this.props.name,
      type: "checkbox",
      checked: this.props.checked,
      onChange: this.props.onChange
    }), this.props.checked ? /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "far",
      "data-icon": "check-square",
      className: "icon svg-inline--fa fa-check-square fa-w-14 ",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"
    })) : /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "far",
      "data-icon": "square",
      className: "icon svg-inline--fa fa-square fa-w-14 ",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"
    })), this.__renderContent());
  }
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Checkbox: __webpack_require__(/*! ./Checkbox */ "./Checkbox.js"),
  UncontrolCheckbox: __webpack_require__(/*! ./UncontrolCheckbox */ "./UncontrolCheckbox.js"),
  Checkboxs: __webpack_require__(/*! ./Checkboxs */ "./Checkboxs.js"),
  Radio: __webpack_require__(/*! ./Radio */ "./Radio.js"),
  Select: __webpack_require__(/*! ./Select */ "./Select.js"),
  Menu: __webpack_require__(/*! ./Menu */ "./Menu.js"),
  PopupSelect: __webpack_require__(/*! ./PopupSelect */ "./PopupSelect.js")
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ }),

/***/ "znui-react-popup":
/*!***************************!*\
  !*** external "zr-popup" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["zr-popup"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3hzLmpzIiwid2VicGFjazovLy8uL0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9Qb3B1cFNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9SYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vVW5jb250cm9sQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpyLXBvcHVwXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiY2xhc3NOYW1lIiwidGV4dCIsImxheW91dCIsImNoZWNrZWQiLCJkaXNhYmxlZCIsImdldEluaXRpYWxTdGF0ZSIsIl92YWx1ZSIsInByb3BzIiwidmFsdWUiLCJfX29uQ2xpY2siLCJldmVudCIsInN0YXRlIiwiZm9yY2VVcGRhdGUiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwic2V0U3RhdGUiLCJfX29uQ2hhbmdlIiwiX19yZW5kZXJDb250ZW50IiwiX3JldHVybiIsImNvbnRlbnRSZW5kZXIiLCJsYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXIiLCJyZWFjdCIsImNsYXNzbmFtZSIsInN0eWxlIiwibmFtZSIsInR5cGUiLCJmb2N1c2FibGUiLCJyb2xlIiwieG1sbnMiLCJ2aWV3Qm94IiwiZmlsbCIsImQiLCJVbmNvbnRyb2xDaGVja2JveCIsInNwbGl0Q2hhciIsInRleHRLZXkiLCJ2YWx1ZUtleSIsImRhdGFUeXBlIiwiX19pbml0VmFsdWUiLCJwYXJzZVZhbHVlIiwid2luZG93IiwidmFsdWVPZiIsIkVycm9yIiwiX19pc0NoZWNrZWQiLCJpdGVtIiwiaW5kZXgiLCJ0b1N0cmluZyIsInpuIiwiaXMiLCJpbmRleE9mIiwiX2F2YWx1ZSIsInNwbGl0IiwiZmlsdGVyIiwiX19vbkl0ZW1DbGljayIsImNoZWNrYm94Iiwib25JdGVtQ2xpY2siLCJfX2NsaWNrRGVmYXVsdCIsIl9kYXRhIiwiZGF0YSIsInNwbGljZSIsInB1c2giLCJqb2luIiwiX19pdGVtUmVuZGVyIiwiX3RoaXMiLCJfdGVtcCIsIml0ZW1SZW5kZXIiLCJfZXh0ZW5kcyIsImtleSIsImNoaWxkcmVuIiwiRGF0YVZpZXciLCJfZGVmaW5lUHJvcGVydHkiLCJfdGV4dCIsIkZyYWdtZW50IiwiaWNvbiIsInBvcHVwIiwiTGlzdCIsInBsYWNlaG9sZGVyIiwiZ2V0VGV4dCIsInNldFRleHQiLCJzZXREYXRhIiwiX19yZXNvbHZlVGFyZ2V0IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiX19wb3BvdmVyUmVuZGVyIiwiZHJvcGRvd24iLCJfdGFyZ2V0IiwiX2VsZW1lbnQiLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJwb3B1cFJlbmRlciIsInBvcHVwU2VsZWN0IiwiY29udGV4dCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJfX3ZhbHVlUmVuZGVyIiwidGV4dFJlbmRlciIsIl9fcmVuZGVyIiwiRHJvcGRvd24iLCJwb3BvdmVyIiwibWFwIiwib25Db250YWluZXJFdmVudCIsImFwcCIsInNlc3Npb24iLCJqdW1wIiwic3JjIiwidXNlciIsImhlYWRpbWd1cmwiLCJVc2VybmFtZSIsIk5hbWUiLCJsb25nVGV4dCIsIm1pbldpZHRoIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInNob3dUZXh0IiwiUmFkaW9JdGVtIiwic2VuZGVyIiwiZGVmYXVsdENoZWNrZWQiLCJSYWRpbyIsIl9fb25SYWRpb0l0ZW1DbGljayIsImNhbGxiYWNrIiwiUmVhY3RET00iLCJtdWx0aXBsZSIsImNvbXBvbmVudERpZE1vdW50IiwiX2NvbG9yIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImNvbG9yIiwiZXJyIiwiZiIsIl9fb25TZWxlY3RDbGljayIsInByZXZlbnREZWZhdWx0IiwiX19wYXJzZUV4cCIsImV4cCIsImZvcm1hdCIsIl9pdGVtIiwic2VsZWN0ZWQiLCJfX29uU2VsZWN0Q2hhbmdlIiwiY2hpbGROb2RlcyIsInNlbGVjdGVkSW5kZXgiLCJkYXRhc2V0IiwiZmluZERPTU5vZGUiLCJfX3Jlc29sdmVTdHlsZSIsIl9zdHlsZSIsImJvcmRlckNvbG9yIiwiZXh0ZW5kIiwicmVxdWlyZWQiLCJyZWFkT25seSIsInJlYWRvbmx5IiwidW5kZWZpbmVkIiwiQ2hlY2tib3giLCJDaGVja2JveHMiLCJTZWxlY3QiLCJNZW51IiwiUG9wdXBTZWxlY3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FB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QUN4QyxDQUFDLEM7Ozs7Ozs7Ozs7O0FDUkQsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWxELGFBQWEsbUNBQW1DLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkNoZWNrYm94Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0bGF5b3V0OiAnZmxleC1yb3cnLFxuXHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5wcm9wcy5jaGVja2VkO1xuXHRcdGlmKHRoaXMucHJvcHMudmFsdWUgIT0gbnVsbCkge1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoZWNrZWQ6IF92YWx1ZVxuXHRcdH1cblx0fSxcblx0X19vbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLmNoZWNrZWQgPSBldmVudC52YWx1ZSA9IGV2ZW50LmNoZWNrZWQgPSAhdGhpcy5zdGF0ZS5jaGVja2VkO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblxuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5jaGVja2VkO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgY2hlY2tlZDogdmFsdWUgfSk7XG5cdH0sXG5cdF9fb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQ6ICF0aGlzLnN0YXRlLmNoZWNrZWQgfSk7XG5cdH0sXG5cdF9fcmVuZGVyQ29udGVudDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIgJiYgdGhpcy5wcm9wcy5jb250ZW50UmVuZGVyKHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IHRoaXMucHJvcHMudGV4dCB8fCB0aGlzLnByb3BzLmxhYmVsIHx8ICcnO1xuXHRcdH1cblxuXHRcdGlmKF9yZXR1cm4pIHtcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57X3JldHVybn08L2Rpdj47XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItY2hlY2tib3gnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuXHRcdFx0XHRkYXRhLWRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBcblx0XHRcdFx0ZGF0YS1jaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX19vbkNsaWNrfSA+XG5cdFx0XHRcdDxpbnB1dCBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9IG9uQ2hhbmdlPXt0aGlzLl9fb25DaGFuZ2V9IC8+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWQgPyA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJjaGVjay1zcXVhcmVcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWNoZWNrLXNxdWFyZSBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+XG5cdFx0XHRcdFx0XHQ8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MDAgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwdjM1MmMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDM1MmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjgwYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6bTAgNDAwSDQ4VjgwaDM1MnYzNTJ6bS0zNS44NjQtMjQxLjcyNEwxOTEuNTQ3IDM2MS40OGMtNC43MDUgNC42NjctMTIuMzAzIDQuNjM3LTE2Ljk3LS4wNjhsLTkwLjc4MS05MS41MTZjLTQuNjY3LTQuNzA1LTQuNjM3LTEyLjMwMy4wNjktMTYuOTcxbDIyLjcxOS0yMi41MzZjNC43MDUtNC42NjcgMTIuMzAzLTQuNjM3IDE2Ljk3LjA2OWw1OS43OTIgNjAuMjc3IDE0MS4zNTItMTQwLjIxNmM0LjcwNS00LjY2NyAxMi4zMDMtNC42MzcgMTYuOTcuMDY4bDIyLjUzNiAyMi43MThjNC42NjcgNC43MDYgNC42MzcgMTIuMzA0LS4wNjggMTYuOTcxelwiPjwvcGF0aD5cblx0XHRcdFx0XHQ8L3N2Zz46IDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cInNxdWFyZVwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc3F1YXJlIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MDAgMzJINDhDMjEuNSAzMiAwIDUzLjUgMCA4MHYzNTJjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjgwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4em0tNiA0MDBINTRjLTMuMyAwLTYtMi43LTYtNlY4NmMwLTMuMyAyLjctNiA2LTZoMzQwYzMuMyAwIDYgMi43IDYgNnYzNDBjMCAzLjMtMi43IDYtNiA2elwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0fVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNvbnRlbnQoKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFVuY29udHJvbENoZWNrYm94ID0gcmVxdWlyZSgnLi9VbmNvbnRyb2xDaGVja2JveCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQ2hlY2tib3hzJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3BsaXRDaGFyOiAnLCcsXG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRhdGFUeXBlOiAnU3RyaW5nJ1xuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHRoaXMuX19pbml0VmFsdWUoKVxuXHRcdH07XG5cdH0sXG5cdF9faW5pdFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3ZhbHVlID0gbnVsbDtcblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICE9IG51bGwpe1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblx0XHR9ZWxzZXtcblx0XHRcdF92YWx1ZSA9IFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBfdmFsdWU7XG5cdH0sXG5cdHBhcnNlVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYod2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKXtcblx0XHRcdHJldHVybiAobmV3IHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSh2YWx1ZSkpLnZhbHVlT2YoKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEYXRhIFR5cGUgT2YgTGlzdCBJcyBOdWxsLicpO1xuXHR9LFxuXHRfX2lzQ2hlY2tlZDogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3ZhbHVlID0gKGl0ZW1bdGhpcy5wcm9wcy52YWx1ZUtleV0pLnRvU3RyaW5nKCk7XG5cdFx0aWYoem4uaXModGhpcy5zdGF0ZS52YWx1ZSwgJ2FycmF5Jykpe1xuXHRcdFx0aWYodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHR2YXIgX2F2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUuc3BsaXQodGhpcy5wcm9wcy5zcGxpdENoYXIpLmZpbHRlcigodmFsdWUpPT4hIXZhbHVlKTtcblx0XHRcdGlmKF9hdmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX29uSXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGNoZWNrYm94KXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25JdGVtQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkl0ZW1DbGljayhldmVudCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9fY2xpY2tEZWZhdWx0KGV2ZW50KTtcblx0XHR9XG5cdH0sXG5cdF9fY2xpY2tEZWZhdWx0OiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGEsXG5cdFx0XHRfdmFsdWUgPSAoX2RhdGFbdGhpcy5wcm9wcy52YWx1ZUtleV0pLnRvU3RyaW5nKCk7XG5cdFx0aWYoem4uaXModGhpcy5zdGF0ZS52YWx1ZSwgJ2FycmF5JykpIHtcblx0XHRcdGlmKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5zcGxpY2UodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSksIDEpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuc3RhdGUudmFsdWUucHVzaChfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0dmFyIF9hdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlLnNwbGl0KHRoaXMucHJvcHMuc3BsaXRDaGFyKS5maWx0ZXIoKHZhbHVlKT0+ISF2YWx1ZSk7XG5cdFx0XHRpZihfYXZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdF9hdmFsdWUuc3BsaWNlKF9hdmFsdWUuaW5kZXhPZihfdmFsdWUpLCAxKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRfYXZhbHVlLnB1c2goX3ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUudmFsdWUgPSBfYXZhbHVlLmpvaW4odGhpcy5wcm9wcy5zcGxpdENoYXIpO1xuXHRcdH1cblx0XHRldmVudC52YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZighem4uaXMoaXRlbSwgJ29iamVjdCcpKXtcblx0XHRcdHZhciBfdGVtcCA9IHsgaW5kZXg6IGluZGV4IH07XG5cdFx0XHRfdGVtcFt0aGlzLnByb3BzLnRleHRLZXldID0gX3RlbXBbdGhpcy5wcm9wcy52YWx1ZUtleV0gPSBpdGVtO1xuXHRcdFx0aXRlbSA9IF90ZW1wO1xuXHRcdH1lbHNle1xuXHRcdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdH1cblxuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5pdGVtUmVuZGVyICYmIHRoaXMucHJvcHMuaXRlbVJlbmRlcihpdGVtLCBpbmRleCk7XG5cdFx0aWYoIV9yZXR1cm4pIHtcblx0XHRcdF9yZXR1cm4gPSBpdGVtW3RoaXMucHJvcHMudGV4dEtleV07XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiA8VW5jb250cm9sQ2hlY2tib3gga2V5PXtpbmRleH1cblx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cblx0XHRcdFx0XHRjb250ZW50UmVuZGVyPXt0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXJ9XG5cdFx0XHRcdFx0ey4uLml0ZW19XG5cdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5fX2lzQ2hlY2tlZChpdGVtLCBpbmRleCl9IFxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk9PnRoaXMuX19vbkl0ZW1DbGljayhldmVudCwgaXRlbSl9Lz47XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWNoZWNrYm94c1wiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlNlbGVjdExpc3QnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzcGxpdENoYXI6ICcsJyxcblx0XHRcdHRleHRLZXk6ICd0ZXh0Jyxcblx0XHRcdHZhbHVlS2V5OiAndmFsdWUnLFxuXHRcdFx0ZGF0YVR5cGU6ICdTdHJpbmcnXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdGhpcy5fX2luaXRWYWx1ZSgpXG5cdFx0fTtcblx0fSxcblx0X19pbml0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSBudWxsO1xuXHRcdGlmKHRoaXMucHJvcHMudmFsdWUgIT0gbnVsbCl7XG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdH1lbHNle1xuXHRcdFx0X3ZhbHVlID0gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF92YWx1ZTtcblx0fSxcblx0cGFyc2VWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0pe1xuXHRcdFx0cmV0dXJuIChuZXcgd2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKHZhbHVlKSkudmFsdWVPZigpO1xuXHRcdH1cblx0XHRcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgVHlwZSBPZiBMaXN0IElzIE51bGwuJyk7XG5cdH0sXG5cdF9faXNDaGVja2VkOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfdmFsdWUgPSBpdGVtW3RoaXMucHJvcHMudmFsdWVLZXldO1xuXHRcdGlmKHpuLmlzKHRoaXMuc3RhdGUudmFsdWUsICdhcnJheScpKXtcblx0XHRcdGlmKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0dmFyIF9hdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlLnNwbGl0KHRoaXMucHJvcHMuc3BsaXRDaGFyKS5maWx0ZXIoKHZhbHVlKT0+ISF2YWx1ZSk7XG5cdFx0XHRpZihfYXZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19vbkl0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBjaGVja2JveCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uSXRlbUNsaWNrICYmIHRoaXMucHJvcHMub25JdGVtQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fX2NsaWNrRGVmYXVsdChldmVudCk7XG5cdFx0fVxuXHR9LFxuXHRfX2NsaWNrRGVmYXVsdDogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX2RhdGEgPSBldmVudC5kYXRhLFxuXHRcdFx0X3ZhbHVlID0gX2RhdGFbdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0aWYoem4uaXModGhpcy5zdGF0ZS52YWx1ZSwgJ2FycmF5JykpIHtcblx0XHRcdGlmKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5zcGxpY2UodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSksIDEpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuc3RhdGUudmFsdWUucHVzaChfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0dmFyIF9hdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlLnNwbGl0KHRoaXMucHJvcHMuc3BsaXRDaGFyKS5maWx0ZXIoKHZhbHVlKT0+ISF2YWx1ZSk7XG5cdFx0XHRpZihfYXZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdF9hdmFsdWUuc3BsaWNlKF9hdmFsdWUuaW5kZXhPZihfdmFsdWUpLCAxKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRfYXZhbHVlLnB1c2goX3ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUudmFsdWUgPSBfYXZhbHVlLmpvaW4odGhpcy5wcm9wcy5zcGxpdENoYXIpO1xuXHRcdH1cblx0XHRldmVudC52YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fb25JdGVtQ2xpY2s6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZighem4uaXMoaXRlbSwgJ29iamVjdCcpKXtcblx0XHRcdHZhciBfdGVtcCA9IHsgaW5kZXg6IGluZGV4IH07XG5cdFx0XHRfdGVtcFt0aGlzLnByb3BzLnRleHRLZXldID0gX3RlbXBbdGhpcy5wcm9wcy52YWx1ZUtleV0gPSBpdGVtO1xuXHRcdFx0aXRlbSA9IF90ZW1wO1xuXHRcdH1lbHNle1xuXHRcdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdH1cblxuXHRcdHZhciBfdGV4dCA9IGl0ZW1bdGhpcy5wcm9wcy50ZXh0S2V5XTtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuaXRlbVJlbmRlciAmJiB0aGlzLnByb3BzLml0ZW1SZW5kZXIoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKCFfcmV0dXJuKSB7XG5cdFx0XHRfcmV0dXJuID0gKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdHtpdGVtLmljb24gJiYgPGkgY2xhc3NOYW1lPXtcImZhIFwiICsgaXRlbS5pY29ufSAvPn1cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPntfdGV4dH08L3NwYW4+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiIG9uQ2xpY2s9eyhldmVudCk9PnRoaXMuX19vbkl0ZW1DbGljayhldmVudCwgaXRlbSwgaW5kZXgpfT57X3JldHVybn08L2xpPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHVsIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItc2VsZWN0LWxpc3RcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IC8+XG5cdFx0XHQ8L3VsPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcbnZhciBMaXN0ID0gcmVxdWlyZSgnLi9MaXN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJQb3B1cFNlbGVjdCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdHRleHRLZXk6ICd0ZXh0Jyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHRcdHZhbHVlS2V5OiAndmFsdWUnLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCJcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0OiB0aGlzLnByb3BzLnRleHQsXG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuXHRcdH1cblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgdmFsdWU6IHZhbHVlIH0sIHRoaXMpO1xuXHR9LFxuXHRnZXRUZXh0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudGV4dDtcblx0fSxcblx0c2V0VGV4dDogZnVuY3Rpb24gKHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHRzZXREYXRhOiBmdW5jdGlvbiAodmFsdWUsIHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHRfX3Jlc29sdmVUYXJnZXQ6IGZ1bmN0aW9uICh0YXJnZXQpe1xuXHRcdGlmKHRhcmdldCl7XG5cdFx0XHRpZighdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0LXRleHQnKSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9fcmVzb2x2ZVRhcmdldCh0YXJnZXQucGFyZW50Tm9kZSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fcG9wb3ZlclJlbmRlcjogZnVuY3Rpb24gKGV2ZW50LCBkcm9wZG93bil7XG5cblx0XHR2YXIgX3RhcmdldCA9IHRoaXMuX19yZXNvbHZlVGFyZ2V0KGV2ZW50LnRhcmdldCk7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5wb3B1cFJlbmRlciwge1xuXHRcdFx0dmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXG5cdFx0XHR0ZXh0OiB0aGlzLnN0YXRlLnRleHQsXG5cdFx0XHRldmVudDogZXZlbnQsXG5cdFx0XHRkcm9wZG93bjogZHJvcGRvd24sXG5cdFx0XHRwb3B1cFNlbGVjdDogdGhpc1xuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cblx0XHRpZighX2VsZW1lbnQgJiYgdGhpcy5wcm9wcy5kYXRhKXtcblx0XHQgXHRfZWxlbWVudCA9IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtcG9wb3ZlclwiPlxuXHRcdFx0XHRcdDxMaXN0IHNwbGl0Q2hhcj17dGhpcy5wcm9wcy5zcGxpdENoYXJ9IFxuXHRcdFx0XHRcdFx0dGV4dEtleT17dGhpcy5wcm9wcy50ZXh0S2V5fVxuXHRcdFx0XHRcdFx0dmFsdWVLZXk9e3RoaXMucHJvcHMudmFsdWVLZXl9XG5cdFx0XHRcdFx0XHRkYXRhVHlwZT17dGhpcy5wcm9wcy5kYXRhVHlwZX1cblx0XHRcdFx0XHRcdGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBfdGFyZ2V0Lm9mZnNldFdpZHRoIH19IGNsYXNzTmFtZT1cInNlbGVjdC1wb3BvdmVyXCI+e19lbGVtZW50fTwvZGl2Pjtcblx0fSxcblx0X192YWx1ZVJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy50ZXh0UmVuZGVyLCB7XG5cdFx0XHR2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcblx0XHRcdHRleHQ6IHRoaXMuc3RhdGUudGV4dCxcblx0XHRcdHBvcHVwU2VsZWN0OiB0aGlzXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0XHRpZighX2VsZW1lbnQpe1xuXHRcdFx0X2VsZW1lbnQgPSB0aGlzLnN0YXRlLnRleHQgfHwgdGhpcy5wcm9wcy5wbGFjZWhvbGRlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtdGV4dFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj57X2VsZW1lbnR9PC9kaXY+XG5cdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImNhcmV0LWRvd25cIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jYXJldC1kb3duIGZhLXctMTAgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zMS4zIDE5MmgyNTcuM2MxNy44IDAgMjYuNyAyMS41IDE0LjEgMzQuMUwxNzQuMSAzNTQuOGMtNy44IDcuOC0yMC41IDcuOC0yOC4zIDBMMTcuMiAyMjYuMUM0LjYgMjEzLjUgMTMuNSAxOTIgMzEuMyAxOTJ6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8cG9wdXAuRHJvcGRvd24gXG5cdFx0XHRcdHBvcG92ZXI9e3tcblx0XHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cInpyLXNlbGVjdC1tZW51LWRyb3Bkb3duLWxpc3RcIj5cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICfotKblj7fkv6Hmga8nLCBpY29uOiAnZmEtdXNlci1jaXJjbGUnIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICfkvIHkuJrorqTor4EnLCBpY29uOiAnZmEtZHJpdmVycy1saWNlbnNlLW8nIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICfkvIHkuJrpgoDor7cnLCBpY29uOiAnZmEtZGVhZicgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ+WfuuacrOiuvue9ricsIGljb246ICdmYS1zbGlkZXJzJyB9XG5cdFx0XHRcdFx0XHRcdFx0XHRdLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIiBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17XCJpY29uIGZhIFwiICsgaXRlbS5pY29ufSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj57aXRlbS5sYWJlbH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG9uQ29udGFpbmVyRXZlbnQ6IGZ1bmN0aW9uIChldmVudCwgcG9wb3Zlcil7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyLXNlc3Npb25cIiA+XG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJhdmF0YXJcIiBvbkNsaWNrPXsoKT0+em51aS5hcHAuc2Vzc2lvbi5qdW1wKCcvbWFpbi9teS9pbmZvJyl9PlxuXHRcdFx0XHRcdFx0PGltZyBkYXRhLXpyLXBvcHVwLXRvb2x0aXA9XCLmn6XnnIvmiJHnmoTkuKrkurrkv6Hmga9cIiBzcmM9e3RoaXMuc3RhdGUudXNlci5oZWFkaW1ndXJsIHx8ICcuLi9fY29tL2ltYWdlcy9sb2dvLTEyOC5wbmcnfSAvPlxuXHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dGhpcy5zdGF0ZS51c2VyLlVzZXJuYW1lIHx8IHRoaXMuc3RhdGUudXNlci5OYW1lfTwvc3Bhbj5cblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3BvcHVwLkRyb3Bkb3duPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHBvcHVwLkRyb3Bkb3duIFxuXHRcdFx0XHRjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItc2VsZWN0LW1lbnVcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsICh0aGlzLnByb3BzLmRpc2FibGVkPydkaXNhYmxlZCc6JycpKX1cblx0XHRcdFx0c3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG5cdFx0XHRcdHBvcG92ZXI9e3tcblx0XHRcdFx0XHRyZW5kZXI6IHRoaXMuX19wb3BvdmVyUmVuZGVyLFxuXHRcdFx0XHRcdG9uQ29udGFpbmVyRXZlbnQ6IGZ1bmN0aW9uIChldmVudCwgcG9wb3Zlcil7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9fT5cblx0XHRcdFx0e3RoaXMuX192YWx1ZVJlbmRlcigpfVxuXHRcdFx0PC9wb3B1cC5Ecm9wZG93bj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlBvcHVwU2VsZWN0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRsb25nVGV4dDogdHJ1ZSxcblx0XHRcdHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqVwiXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogdGhpcy5wcm9wcy50ZXh0LFxuXHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG5cdFx0XHRkcm9wZG93bjogbnVsbFxuXHRcdH1cblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgdmFsdWU6IHZhbHVlIH0sIHRoaXMpO1xuXHR9LFxuXHRnZXRUZXh0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudGV4dDtcblx0fSxcblx0c2V0VGV4dDogZnVuY3Rpb24gKHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHRzZXREYXRhOiBmdW5jdGlvbiAodmFsdWUsIHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHRfX3Jlc29sdmVUYXJnZXQ6IGZ1bmN0aW9uICh0YXJnZXQpe1xuXHRcdGlmKHRhcmdldCl7XG5cdFx0XHRpZighdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0LXRleHQnKSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9fcmVzb2x2ZVRhcmdldCh0YXJnZXQucGFyZW50Tm9kZSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fcG9wb3ZlclJlbmRlcjogZnVuY3Rpb24gKGV2ZW50LCBkcm9wZG93bil7XG5cdFx0dmFyIF90YXJnZXQgPSB0aGlzLl9fcmVzb2x2ZVRhcmdldChldmVudC50YXJnZXQpO1xuXHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucG9wdXBSZW5kZXIsIHtcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0ZXZlbnQ6IGV2ZW50LFxuXHRcdFx0ZHJvcGRvd246IGRyb3Bkb3duLFxuXHRcdFx0cG9wdXBTZWxlY3Q6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtcG9wb3ZlclwiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHRoaXMuc3RhdGUuZHJvcGRvd24gPSBkcm9wZG93bjtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17eyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB8fCBfdGFyZ2V0Lm9mZnNldFdpZHRoLCBtaW5XaWR0aDogdGhpcy5wcm9wcy5taW5XaWR0aCB9fSBjbGFzc05hbWU9XCJzZWxlY3QtcG9wb3ZlclwiPlxuXHRcdFx0XHR7X2VsZW1lbnR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX3ZhbHVlUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnRleHRSZW5kZXIsIHtcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0ZHJvcGRvd246IHRoaXMuc3RhdGUuZHJvcGRvd24sXG5cdFx0XHRwb3B1cFNlbGVjdDogdGhpc1xuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHRcdHZhciBfdGV4dCA9IHRoaXMuc3RhdGUudGV4dCB8fCB0aGlzLnN0YXRlLnZhbHVlIHx8IHRoaXMucHJvcHMucGxhY2Vob2xkZXI7XG5cdFx0XHRfZWxlbWVudCA9IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1widGV4dCBcIiArICh0aGlzLnByb3BzLmxvbmdUZXh0ID8gJ3pudWktcmVhY3QtbG9uZy10ZXh0JyA6ICcnKX0+e190ZXh0fTwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtdGV4dFwiIG9uQ2xpY2s9eyhlKT0+ZS5zdG9wUHJvcGFnYXRpb24oKX0+XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5zaG93VGV4dCAhPT0gZmFsc2UgJiYgX2VsZW1lbnQgfVxuXHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJjYXJldC1kb3duXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtY2FyZXQtZG93biBmYS13LTEwIFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzEuMyAxOTJoMjU3LjNjMTcuOCAwIDI2LjcgMjEuNSAxNC4xIDM0LjFMMTc0LjEgMzU0LjhjLTcuOCA3LjgtMjAuNSA3LjgtMjguMyAwTDE3LjIgMjI2LjFDNC42IDIxMy41IDEzLjUgMTkyIDMxLjMgMTkyelwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHBvcHVwLkRyb3Bkb3duIFxuXHRcdFx0XHRjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtc2VsZWN0XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCAodGhpcy5wcm9wcy5kaXNhYmxlZD8nZGlzYWJsZWQnOicnKSl9XG5cdFx0XHRcdHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuXHRcdFx0XHRzdG9wUHJvcGFnYXRpb249e3RoaXMucHJvcHMuc3RvcFByb3BhZ2F0aW9ufVxuXHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0cmVuZGVyOiB0aGlzLl9fcG9wb3ZlclJlbmRlcixcblx0XHRcdFx0XHRvbkNvbnRhaW5lckV2ZW50OiBmdW5jdGlvbiAoZXZlbnQsIHBvcG92ZXIpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fX0+XG5cdFx0XHRcdHt0aGlzLl9fdmFsdWVSZW5kZXIoKX1cblx0XHRcdDwvcG9wdXAuRHJvcGRvd24+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSYWRpb0l0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlJhZGlvSXRlbScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGV2ZW50LmRhdGEgPSB0aGlzLnByb3BzO1xuXHRcdGV2ZW50LnNlbmRlciA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fcmVuZGVyQ29udGVudDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIgJiYgdGhpcy5wcm9wcy5jb250ZW50UmVuZGVyKHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IHRoaXMucHJvcHMudGV4dCB8fCB0aGlzLnByb3BzLmxhYmVsIHx8Jyc7XG5cdFx0fVxuXG5cdFx0aWYoX3JldHVybikge1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntfcmV0dXJufTwvZGl2Pjtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1yYWRpby1pdGVtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBvbkNsaWNrPXt0aGlzLl9fb25DbGlja30gZGF0YS1kaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gZGF0YS1jaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9PlxuXHRcdFx0XHQ8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSB0eXBlPSdyYWRpbycgZGVmYXVsdENoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9IC8+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmNoZWNrZWQgPyA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJkb3QtY2lyY2xlXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1kb3QtY2lyY2xlIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cblx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA1NmMxMTAuNTMyIDAgMjAwIDg5LjQ1MSAyMDAgMjAwIDAgMTEwLjUzMi04OS40NTEgMjAwLTIwMCAyMDAtMTEwLjUzMiAwLTIwMC04OS40NTEtMjAwLTIwMCAwLTExMC41MzIgODkuNDUxLTIwMCAyMDAtMjAwbTAtNDhDMTE5LjAzMyA4IDggMTE5LjAzMyA4IDI1NnMxMTEuMDMzIDI0OCAyNDggMjQ4IDI0OC0xMTEuMDMzIDI0OC0yNDhTMzkyLjk2NyA4IDI1NiA4em0wIDE2OGMtNDQuMTgzIDAtODAgMzUuODE3LTgwIDgwczM1LjgxNyA4MCA4MCA4MCA4MC0zNS44MTcgODAtODAtMzUuODE3LTgwLTgwLTgwelwiPjwvcGF0aD5cblx0XHRcdFx0XHQ8L3N2Zz4gOiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJjaXJjbGVcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWNpcmNsZSBmYS13LTE2IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMCA0NDhjLTExMC41IDAtMjAwLTg5LjUtMjAwLTIwMFMxNDUuNSA1NiAyNTYgNTZzMjAwIDg5LjUgMjAwIDIwMC04OS41IDIwMC0yMDAgMjAwelwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0fVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNvbnRlbnQoKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG52YXIgUmFkaW8gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlJhZGlvJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkYXRhVHlwZTogJ1N0cmluZycsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2Vcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB0aGlzLl9faW5pdFZhbHVlKClcblx0XHR9O1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy52YWx1ZSAhPT0gbnVsbCl7XG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdH1lbHNle1xuXHRcdFx0X3ZhbHVlID0gJyc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucGFyc2VWYWx1ZShfdmFsdWUpO1xuXHR9LFxuXHRwYXJzZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSl7XG5cdFx0XHRyZXR1cm4gKG5ldyB3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0odmFsdWUpKS52YWx1ZU9mKCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRocm93IG5ldyBFcnJvcignRGF0YSBUeXBlIE9mIExpc3QgSXMgTnVsbC4nKTtcblx0fSxcblx0X19pc0NoZWNrZWQ6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShpdGVtW3RoaXMucHJvcHMudmFsdWVLZXldKTtcblx0XHRpZihfdmFsdWUgPT09IHRoaXMuc3RhdGUudmFsdWUpe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHRfX29uUmFkaW9JdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgaXRlbSl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCBldmVudC5kYXRhLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoaXRlbVt0aGlzLnByb3BzLnZhbHVlS2V5XSk7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZighem4uaXMoaXRlbSwgJ29iamVjdCcpKXtcblx0XHRcdHZhciBfdGVtcCA9IHsgaW5kZXg6IGluZGV4IH07XG5cdFx0XHRfdGVtcFt0aGlzLnByb3BzLnRleHRLZXldID0gX3RlbXBbdGhpcy5wcm9wcy52YWx1ZUtleV0gPSBpdGVtO1xuXHRcdFx0aXRlbSA9IF90ZW1wO1xuXHRcdH1lbHNle1xuXHRcdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdH1cblxuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5pdGVtUmVuZGVyICYmIHRoaXMucHJvcHMuaXRlbVJlbmRlcihpdGVtLCBpbmRleCk7XG5cdFx0aWYoIV9yZXR1cm4pIHtcblx0XHRcdF9yZXR1cm4gPSBpdGVtW3RoaXMucHJvcHMudGV4dEtleV07XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiA8UmFkaW9JdGVtIGtleT17aW5kZXh9IGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSB7Li4uaXRlbX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpPT50aGlzLl9fb25SYWRpb0l0ZW1DbGljayhldmVudCwgaXRlbSl9XG5cdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5fX2lzQ2hlY2tlZChpdGVtKX0gLz47XG5cdH0sXG5cdFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIGNhbGxiYWNrKXtcblx0XHR2YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZSh2YWx1ZSk7XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoeyB2YWx1ZTogdmFsdWUgfSwgdGhpcyk7XG5cdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2sodmFsdWUsIHRoaXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXJhZGlvJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJhZGlvO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlNlbGVjdCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRkYXRhVHlwZTogJ1N0cmluZycsXG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRtdWx0aXBsZTogZmFsc2UsXG5cdFx0XHRwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIlxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHQvL1JlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKHRoaXMucHJvcHMudmFsdWUpLCBfY29sb3IgPSBudWxsO1xuXHRcdGlmKHRoaXMucHJvcHMuZGF0YSAmJiB6bi5pcyh0aGlzLnByb3BzLmRhdGEsICdhcnJheScpKSB7XG5cdFx0XHRmb3IodmFyIGl0ZW0gb2YgdGhpcy5wcm9wcy5kYXRhKSB7XG5cdFx0XHRcdGlmKGl0ZW0udmFsdWUgPT0gX3ZhbHVlKSB7XG5cdFx0XHRcdFx0X2NvbG9yID0gaXRlbS5jb2xvcjtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29sb3I6IHRoaXMucHJvcHMuY29sb3IgfHwgX2NvbG9yLFxuXHRcdFx0c3R5bGU6IG51bGwsXG5cdFx0XHRjbGFzc05hbWU6IG51bGwsXG5cdFx0XHR2YWx1ZTogX3ZhbHVlXG5cdFx0fTtcblx0fSxcblx0cGFyc2VWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih0aGlzLnByb3BzLm11bHRpcGxlKXtcblx0XHRcdHN3aXRjaCh6bi50eXBlKHZhbHVlKSl7XG5cdFx0XHRcdGNhc2UgJ2FycmF5Jzpcblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdGNhc2UgJ3N0cmluZyc6XG5cdFx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdFx0cmV0dXJuIFt2YWx1ZV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSl7XG5cdFx0XHRyZXR1cm4gd2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKHZhbHVlKS52YWx1ZU9mKCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRocm93IG5ldyBFcnJvcignRGF0YSBUeXBlIE9mIExpc3QgSXMgTnVsbC4nKTtcblx0fSxcblx0X19vblNlbGVjdENsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9LFxuXHRfX3BhcnNlRXhwOiBmdW5jdGlvbiAoaXRlbSwgZXhwKXtcblx0XHRpZih0eXBlb2YgZXhwID09ICdzdHJpbmcnKXtcblx0XHRcdGlmKGV4cC5pbmRleE9mKCd7JykhPS0xKXtcblx0XHRcdFx0cmV0dXJuIHpuLmZvcm1hdChleHAsIGl0ZW0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGl0ZW1bZXhwXTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYodHlwZW9mIGV4cCA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gZXhwKGl0ZW0pO1xuXHRcdH1cblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfdmFsdWUsIF90ZXh0LCBfaXRlbSA9IGl0ZW0gfHwge307XG5cdFx0aWYoem4uaXMoX2l0ZW0sICdvYmplY3QnKSl7XG5cdFx0XHRfdmFsdWUgPSB0aGlzLl9fcGFyc2VFeHAoX2l0ZW0sIHRoaXMucHJvcHMudmFsdWVLZXkpO1xuXHRcdFx0X3RleHQgPSB0aGlzLl9fcGFyc2VFeHAoX2l0ZW0sIHRoaXMucHJvcHMudGV4dEtleSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRfdmFsdWUgPSBfdGV4dCA9IF9pdGVtO1xuXHRcdH1cblxuXHRcdHJldHVybiA8b3B0aW9uIHN0eWxlPXtfaXRlbS5zdHlsZX0gY2xhc3NOYW1lPXtfaXRlbS5jbGFzc05hbWV9IGRpc2FibGVkPXtpdGVtLmRpc2FibGVkfSBzZWxlY3RlZD17dGhpcy5zdGF0ZS52YWx1ZT09X3ZhbHVlfSBrZXk9e192YWx1ZX0gdmFsdWU9e192YWx1ZX0gZGF0YS10ZXh0PXtfdGV4dH0gZGF0YS12YWx1ZT17X3ZhbHVlfSBkYXRhLWNvbG9yPXtfaXRlbS5jb2xvciB8fCAnJ30+e190ZXh0fTwvb3B0aW9uPjtcblx0fSxcblx0X19vblNlbGVjdENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX3RhcmdldCA9IGV2ZW50LnRhcmdldCxcblx0XHRcdF9kYXRhID0gZXZlbnQudGFyZ2V0LmNoaWxkTm9kZXNbX3RhcmdldC5zZWxlY3RlZEluZGV4XS5kYXRhc2V0LFxuXHRcdFx0X3ZhbHVlID0gdGhpcy5fX3BhcnNlRXhwKF9kYXRhLCB0aGlzLnByb3BzLnZhbHVlS2V5KSB8fCB0aGlzLl9fcGFyc2VFeHAoX2RhdGEsICd2YWx1ZScpLFxuXHRcdFx0X3RleHQgPSB0aGlzLl9fcGFyc2VFeHAoX2RhdGEsIHRoaXMucHJvcHMudGV4dEtleSkgfHwgdGhpcy5fX3BhcnNlRXhwKF9kYXRhLCAndGV4dCcpO1xuXG5cdFx0ZXZlbnQuc2VsZWN0ZWRJbmRleCA9ICgrX3RhcmdldC5zZWxlY3RlZEluZGV4IC0gMSk7XG5cdFx0ZXZlbnQuZGF0YSA9IF9kYXRhO1xuXHRcdGV2ZW50LnZhbHVlID0gX3ZhbHVlO1xuXHRcdGV2ZW50LnRleHQgPSBfdGV4dDtcblxuXHRcdGlmKF9kYXRhLmNvbG9yKXtcblx0XHRcdHRoaXMuc3RhdGUuY29sb3IgPSBfZGF0YS5jb2xvcjtcblx0XHR9XG5cdFx0aWYoX2RhdGEuc3R5bGUpIHtcblx0XHRcdHRoaXMuc3RhdGUuc3R5bGUgPSBfZGF0YS5zdHlsZTtcblx0XHR9XG5cdFx0aWYoX2RhdGEuY2xhc3NOYW1lKSB7XG5cdFx0XHR0aGlzLnN0YXRlLmNsYXNzTmFtZSA9IF9kYXRhLmNsYXNzTmFtZTtcblx0XHR9XG5cblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKF92YWx1ZSk7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGFyc2VWYWx1ZSh0aGlzLnN0YXRlLnZhbHVlIHx8IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlKTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUodmFsdWUpO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoeyB2YWx1ZTogdmFsdWUgfSwgdGhpcyk7XG5cdH0sXG5cdF9fcmVzb2x2ZVN0eWxlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3N0eWxlID0ge307XG5cdFx0aWYodGhpcy5zdGF0ZS5jb2xvcil7XG5cdFx0XHRfc3R5bGUuY29sb3IgPSB0aGlzLnN0YXRlLmNvbG9yO1xuXHRcdFx0X3N0eWxlLmJvcmRlckNvbG9yID0gdGhpcy5zdGF0ZS5jb2xvcjtcblx0XHR9XG5cdFx0aWYodGhpcy5zdGF0ZS5zdHlsZSkge1xuXHRcdFx0X3N0eWxlID0gem4uZXh0ZW5kKF9zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9zdHlsZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1zZWxlY3RcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX1cblx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUoe30sIHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuX19yZXNvbHZlU3R5bGUoKSl9XG5cdFx0XHRcdG5hbWU9e3RoaXMucHJvcHMubmFtZX1cblx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG5cdFx0XHRcdG11bHRpcGxlPXt0aGlzLnByb3BzLm11bHRpcGxlfVxuXHRcdFx0XHRyZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH1cblx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG5cdFx0XHRcdHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRvbmx5fVxuXHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uU2VsZWN0Q2hhbmdlfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fb25TZWxlY3RDbGlja30+XG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9JycgZGlzYWJsZWQ+e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9PC9vcHRpb24+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IC8+XHRcblx0XHRcdDwvc2VsZWN0PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVW5jb250cm9sQ2hlY2tib3gnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRsYXlvdXQ6ICdmbGV4LXJvdycsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiAoKXt9XG5cdFx0fVxuXHR9LFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGV2ZW50LmRhdGEgPSB0aGlzLnByb3BzO1xuXHRcdGV2ZW50LnNlbmRlciA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fcmVuZGVyQ29udGVudDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIgJiYgdGhpcy5wcm9wcy5jb250ZW50UmVuZGVyKHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IHVuZGVmaW5lZCB8fCBfcmV0dXJuID09PSBudWxsKXtcblx0XHRcdF9yZXR1cm4gPSB0aGlzLnByb3BzLnRleHQgfHwgdGhpcy5wcm9wcy5sYWJlbCB8fCAnJztcblx0XHR9XG5cdFx0aWYoX3JldHVybikge1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntfcmV0dXJufTwvZGl2Pjtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXVuY29udHJvbC1jaGVja2JveCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG5cdFx0XHRcdGRhdGEtZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IFxuXHRcdFx0XHRkYXRhLWNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH1cblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uQ2xpY2t9ID5cblx0XHRcdFx0PGlucHV0IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9Lz5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuY2hlY2tlZCA/IDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cImNoZWNrLXNxdWFyZVwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtY2hlY2stc3F1YXJlIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj5cblx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQwMCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODB2MzUyYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoMzUyYzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWODBjMC0yNi41MS0yMS40OS00OC00OC00OHptMCA0MDBINDhWODBoMzUydjM1MnptLTM1Ljg2NC0yNDEuNzI0TDE5MS41NDcgMzYxLjQ4Yy00LjcwNSA0LjY2Ny0xMi4zMDMgNC42MzctMTYuOTctLjA2OGwtOTAuNzgxLTkxLjUxNmMtNC42NjctNC43MDUtNC42MzctMTIuMzAzLjA2OS0xNi45NzFsMjIuNzE5LTIyLjUzNmM0LjcwNS00LjY2NyAxMi4zMDMtNC42MzcgMTYuOTcuMDY5bDU5Ljc5MiA2MC4yNzcgMTQxLjM1Mi0xNDAuMjE2YzQuNzA1LTQuNjY3IDEyLjMwMy00LjYzNyAxNi45Ny4wNjhsMjIuNTM2IDIyLjcxOGM0LjY2NyA0LjcwNiA0LjYzNyAxMi4zMDQtLjA2OCAxNi45NzF6XCI+PC9wYXRoPlxuXHRcdFx0XHRcdDwvc3ZnPjogPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwic3F1YXJlXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zcXVhcmUgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQwMCAzMkg0OEMyMS41IDMyIDAgNTMuNSAwIDgwdjM1MmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWODBjMC0yNi41LTIxLjUtNDgtNDgtNDh6bS02IDQwMEg1NGMtMy4zIDAtNi0yLjctNi02Vjg2YzAtMy4zIDIuNy02IDYtNmgzNDBjMy4zIDAgNiAyLjcgNiA2djM0MGMwIDMuMy0yLjcgNi02IDZ6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ29udGVudCgpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBDaGVja2JveDogcmVxdWlyZSgnLi9DaGVja2JveCcpLFxuICAgIFVuY29udHJvbENoZWNrYm94OiByZXF1aXJlKCcuL1VuY29udHJvbENoZWNrYm94JyksXG4gICAgQ2hlY2tib3hzOiByZXF1aXJlKCcuL0NoZWNrYm94cycpLFxuICAgIFJhZGlvOiByZXF1aXJlKCcuL1JhZGlvJyksXG4gICAgU2VsZWN0OiByZXF1aXJlKCcuL1NlbGVjdCcpLFxuICAgIE1lbnU6IHJlcXVpcmUoJy4vTWVudScpLFxuICAgIFBvcHVwU2VsZWN0OiByZXF1aXJlKCcuL1BvcHVwU2VsZWN0Jylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wienItcG9wdXBcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==