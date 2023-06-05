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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var _React$createClass;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass((_React$createClass = {
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
}, _defineProperty(_React$createClass, "__onItemClick", function __onItemClick() {}), _defineProperty(_React$createClass, "__itemRender", function __itemRender(item, index) {
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
}), _defineProperty(_React$createClass, "render", function render() {
  return /*#__PURE__*/React.createElement("ul", {
    style: this.props.style,
    className: znui.react.classname("zr-select-list", this.props.className)
  }, this.props.children, /*#__PURE__*/React.createElement(znui.react.DataView, {
    data: this.props.data,
    itemRender: this.__itemRender
  }));
}), _React$createClass));

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

    if (!_element) {
      _element = /*#__PURE__*/React.createElement("div", {
        className: "select-popover"
      });
    }

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
      popupSelect: this
    }, this.props.context);

    if (!_element) {
      _element = this.state.text || this.state.value || this.props.placeholder;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "select-text"
    }, this.props.showText !== false && /*#__PURE__*/React.createElement("div", {
      className: "text " + (this.props.longText ? 'znui-react-long-text' : '')
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
  render: function render() {
    return /*#__PURE__*/React.createElement(popup.Dropdown, {
      className: znui.react.classname("zr-popup-select", this.props.className, this.props.disabled ? 'disabled' : ''),
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

/***/ "./Radio.js":
/*!******************!*\
  !*** ./Radio.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  componentDidMount: function componentDidMount() {//ReactDOM.findDOMNode(this).value = this.state.value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3hzLmpzIiwid2VicGFjazovLy8uL0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9Qb3B1cFNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9SYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vVW5jb250cm9sQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpyLXBvcHVwXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiY2xhc3NOYW1lIiwidGV4dCIsImxheW91dCIsImNoZWNrZWQiLCJkaXNhYmxlZCIsImdldEluaXRpYWxTdGF0ZSIsIl92YWx1ZSIsInByb3BzIiwidmFsdWUiLCJfX29uQ2xpY2siLCJldmVudCIsInN0YXRlIiwiZm9yY2VVcGRhdGUiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwic2V0U3RhdGUiLCJfX29uQ2hhbmdlIiwiX19yZW5kZXJDb250ZW50IiwiX3JldHVybiIsImNvbnRlbnRSZW5kZXIiLCJsYWJlbCIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwic3R5bGUiLCJuYW1lIiwiVW5jb250cm9sQ2hlY2tib3giLCJzcGxpdENoYXIiLCJ0ZXh0S2V5IiwidmFsdWVLZXkiLCJkYXRhVHlwZSIsIl9faW5pdFZhbHVlIiwicGFyc2VWYWx1ZSIsIndpbmRvdyIsInZhbHVlT2YiLCJFcnJvciIsIl9faXNDaGVja2VkIiwiaXRlbSIsImluZGV4IiwidG9TdHJpbmciLCJ6biIsImlzIiwiaW5kZXhPZiIsIl9hdmFsdWUiLCJzcGxpdCIsImZpbHRlciIsIl9fb25JdGVtQ2xpY2siLCJjaGVja2JveCIsIm9uSXRlbUNsaWNrIiwiX19jbGlja0RlZmF1bHQiLCJfZGF0YSIsImRhdGEiLCJzcGxpY2UiLCJwdXNoIiwiam9pbiIsIl9faXRlbVJlbmRlciIsIl90ZW1wIiwiaXRlbVJlbmRlciIsImNoaWxkcmVuIiwiX3RleHQiLCJpY29uIiwicG9wdXAiLCJMaXN0IiwicGxhY2Vob2xkZXIiLCJnZXRUZXh0Iiwic2V0VGV4dCIsInNldERhdGEiLCJfX3Jlc29sdmVUYXJnZXQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJfX3BvcG92ZXJSZW5kZXIiLCJkcm9wZG93biIsIl90YXJnZXQiLCJfZWxlbWVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsInBvcHVwUmVuZGVyIiwicG9wdXBTZWxlY3QiLCJjb250ZXh0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsIl9fdmFsdWVSZW5kZXIiLCJ0ZXh0UmVuZGVyIiwiX19yZW5kZXIiLCJtYXAiLCJvbkNvbnRhaW5lckV2ZW50IiwicG9wb3ZlciIsImFwcCIsInNlc3Npb24iLCJqdW1wIiwidXNlciIsImhlYWRpbWd1cmwiLCJVc2VybmFtZSIsIk5hbWUiLCJsb25nVGV4dCIsIm1pbldpZHRoIiwic2hvd1RleHQiLCJSYWRpb0l0ZW0iLCJzZW5kZXIiLCJSYWRpbyIsIl9fb25SYWRpb0l0ZW1DbGljayIsImNhbGxiYWNrIiwiUmVhY3RET00iLCJtdWx0aXBsZSIsImNvbXBvbmVudERpZE1vdW50IiwiX2NvbG9yIiwiY29sb3IiLCJ0eXBlIiwiX19vblNlbGVjdENsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJfX3BhcnNlRXhwIiwiZXhwIiwiZm9ybWF0IiwiX2l0ZW0iLCJfX29uU2VsZWN0Q2hhbmdlIiwiY2hpbGROb2RlcyIsInNlbGVjdGVkSW5kZXgiLCJkYXRhc2V0IiwiZmluZERPTU5vZGUiLCJfX3Jlc29sdmVTdHlsZSIsIl9zdHlsZSIsImJvcmRlckNvbG9yIiwiZXh0ZW5kIiwicmVxdWlyZWQiLCJyZWFkb25seSIsInVuZGVmaW5lZCIsIkNoZWNrYm94IiwiQ2hlY2tib3hzIiwiU2VsZWN0IiwiTWVudSIsIlBvcHVwU2VsZWN0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUwsSUFBY0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFqQzs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixLQUFLLENBQUNLLFdBQU4sQ0FBa0I7QUFDbENDLGFBQVcsRUFBQyxZQURzQjtBQUVsQ0MsaUJBQWUsRUFBRSwyQkFBVztBQUMzQixXQUFPO0FBQ05DLGVBQVMsRUFBRSxF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eUksV0FBUyxFQUFFekksbUJBQU8sQ0FBQyxtQ0FBRCxDQUhMO0FBSWI0RyxPQUFLLEVBQUU1RyxtQkFBTyxDQUFDLDJCQUFELENBSkQ7QUFLYjBJLFFBQU0sRUFBRTFJLG1CQUFPLENBQUMsNkJBQUQsQ0FMRjtBQU1iMkksTUFBSSxFQUFFM0ksbUJBQU8sQ0FBQyx5QkFBRCxDQU5BO0FBT2I0SSxhQUFXLEVBQUU1SSxtQkFBTyxDQUFDLHVDQUFEO0FBUFAsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsbUNBQW1DLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBbEQsYUFBYSxtQ0FBbUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQ2hlY2tib3gnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRsYXlvdXQ6ICdmbGV4LXJvdycsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdGRpc2FibGVkOiBmYWxzZVxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnByb3BzLmNoZWNrZWQ7XG5cdFx0aWYodGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hlY2tlZDogX3ZhbHVlXG5cdFx0fVxuXHR9LFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuc3RhdGUuY2hlY2tlZCA9IGV2ZW50LnZhbHVlID0gZXZlbnQuY2hlY2tlZCA9ICF0aGlzLnN0YXRlLmNoZWNrZWQ7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmNoZWNrZWQ7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkOiB2YWx1ZSB9KTtcblx0fSxcblx0X19vbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHsgY2hlY2tlZDogIXRoaXMuc3RhdGUuY2hlY2tlZCB9KTtcblx0fSxcblx0X19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuY29udGVudFJlbmRlciAmJiB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIodGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gbnVsbCl7XG5cdFx0XHRfcmV0dXJuID0gdGhpcy5wcm9wcy50ZXh0IHx8IHRoaXMucHJvcHMubGFiZWwgfHwgJyc7XG5cdFx0fVxuXG5cdFx0aWYoX3JldHVybikge1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntfcmV0dXJufTwvZGl2Pjtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1jaGVja2JveCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG5cdFx0XHRcdGRhdGEtZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IFxuXHRcdFx0XHRkYXRhLWNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH1cblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uQ2xpY2t9ID5cblx0XHRcdFx0PGlucHV0IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH0gb25DaGFuZ2U9e3RoaXMuX19vbkNoYW5nZX0gLz5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZCA/IDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cImNoZWNrLXNxdWFyZVwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtY2hlY2stc3F1YXJlIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj5cblx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQwMCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODB2MzUyYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoMzUyYzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWODBjMC0yNi41MS0yMS40OS00OC00OC00OHptMCA0MDBINDhWODBoMzUydjM1MnptLTM1Ljg2NC0yNDEuNzI0TDE5MS41NDcgMzYxLjQ4Yy00LjcwNSA0LjY2Ny0xMi4zMDMgNC42MzctMTYuOTctLjA2OGwtOTAuNzgxLTkxLjUxNmMtNC42NjctNC43MDUtNC42MzctMTIuMzAzLjA2OS0xNi45NzFsMjIuNzE5LTIyLjUzNmM0LjcwNS00LjY2NyAxMi4zMDMtNC42MzcgMTYuOTcuMDY5bDU5Ljc5MiA2MC4yNzcgMTQxLjM1Mi0xNDAuMjE2YzQuNzA1LTQuNjY3IDEyLjMwMy00LjYzNyAxNi45Ny4wNjhsMjIuNTM2IDIyLjcxOGM0LjY2NyA0LjcwNiA0LjYzNyAxMi4zMDQtLjA2OCAxNi45NzF6XCI+PC9wYXRoPlxuXHRcdFx0XHRcdDwvc3ZnPjogPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwic3F1YXJlXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zcXVhcmUgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQwMCAzMkg0OEMyMS41IDMyIDAgNTMuNSAwIDgwdjM1MmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWODBjMC0yNi41LTIxLjUtNDgtNDgtNDh6bS02IDQwMEg1NGMtMy4zIDAtNi0yLjctNi02Vjg2YzAtMy4zIDIuNy02IDYtNmgzNDBjMy4zIDAgNiAyLjcgNiA2djM0MGMwIDMuMy0yLjcgNi02IDZ6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ29udGVudCgpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVW5jb250cm9sQ2hlY2tib3ggPSByZXF1aXJlKCcuL1VuY29udHJvbENoZWNrYm94Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJDaGVja2JveHMnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzcGxpdENoYXI6ICcsJyxcblx0XHRcdHRleHRLZXk6ICd0ZXh0Jyxcblx0XHRcdHZhbHVlS2V5OiAndmFsdWUnLFxuXHRcdFx0ZGF0YVR5cGU6ICdTdHJpbmcnXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdGhpcy5fX2luaXRWYWx1ZSgpXG5cdFx0fTtcblx0fSxcblx0X19pbml0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSBudWxsO1xuXHRcdGlmKHRoaXMucHJvcHMudmFsdWUgIT0gbnVsbCl7XG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdH1lbHNle1xuXHRcdFx0X3ZhbHVlID0gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF92YWx1ZTtcblx0fSxcblx0cGFyc2VWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0pe1xuXHRcdFx0cmV0dXJuIChuZXcgd2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKHZhbHVlKSkudmFsdWVPZigpO1xuXHRcdH1cblx0XHRcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgVHlwZSBPZiBMaXN0IElzIE51bGwuJyk7XG5cdH0sXG5cdF9faXNDaGVja2VkOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfdmFsdWUgPSAoaXRlbVt0aGlzLnByb3BzLnZhbHVlS2V5XSkudG9TdHJpbmcoKTtcblx0XHRpZih6bi5pcyh0aGlzLnN0YXRlLnZhbHVlLCAnYXJyYXknKSl7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdHZhciBfYXZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZS5zcGxpdCh0aGlzLnByb3BzLnNwbGl0Q2hhcikuZmlsdGVyKCh2YWx1ZSk9PiEhdmFsdWUpO1xuXHRcdFx0aWYoX2F2YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25JdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgY2hlY2tib3gpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkl0ZW1DbGljayAmJiB0aGlzLnByb3BzLm9uSXRlbUNsaWNrKGV2ZW50LCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09IG51bGwpIHtcblx0XHRcdHRoaXMuX19jbGlja0RlZmF1bHQoZXZlbnQpO1xuXHRcdH1cblx0fSxcblx0X19jbGlja0RlZmF1bHQ6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF9kYXRhID0gZXZlbnQuZGF0YSxcblx0XHRcdF92YWx1ZSA9IChfZGF0YVt0aGlzLnByb3BzLnZhbHVlS2V5XSkudG9TdHJpbmcoKTtcblx0XHRpZih6bi5pcyh0aGlzLnN0YXRlLnZhbHVlLCAnYXJyYXknKSkge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnNwbGljZSh0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSwgMSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHR2YXIgX2F2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUuc3BsaXQodGhpcy5wcm9wcy5zcGxpdENoYXIpLmZpbHRlcigodmFsdWUpPT4hIXZhbHVlKTtcblx0XHRcdGlmKF9hdmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0X2F2YWx1ZS5zcGxpY2UoX2F2YWx1ZS5pbmRleE9mKF92YWx1ZSksIDEpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdF9hdmFsdWUucHVzaChfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IF9hdmFsdWUuam9pbih0aGlzLnByb3BzLnNwbGl0Q2hhcik7XG5cdFx0fVxuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0Jykpe1xuXHRcdFx0dmFyIF90ZW1wID0geyBpbmRleDogaW5kZXggfTtcblx0XHRcdF90ZW1wW3RoaXMucHJvcHMudGV4dEtleV0gPSBfdGVtcFt0aGlzLnByb3BzLnZhbHVlS2V5XSA9IGl0ZW07XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fWVsc2V7XG5cdFx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0fVxuXG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLml0ZW1SZW5kZXIgJiYgdGhpcy5wcm9wcy5pdGVtUmVuZGVyKGl0ZW0sIGluZGV4KTtcblx0XHRpZighX3JldHVybikge1xuXHRcdFx0X3JldHVybiA9IGl0ZW1bdGhpcy5wcm9wcy50ZXh0S2V5XTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIDxVbmNvbnRyb2xDaGVja2JveCBrZXk9e2luZGV4fVxuXHRcdFx0XHRcdGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRcdGNvbnRlbnRSZW5kZXI9e3RoaXMucHJvcHMuY29udGVudFJlbmRlcn1cblx0XHRcdFx0XHR7Li4uaXRlbX1cblx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLl9faXNDaGVja2VkKGl0ZW0sIGluZGV4KX0gXG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KT0+dGhpcy5fX29uSXRlbUNsaWNrKGV2ZW50LCBpdGVtKX0vPjtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItY2hlY2tib3hzXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSU2VsZWN0TGlzdCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNwbGl0Q2hhcjogJywnLFxuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkYXRhVHlwZTogJ1N0cmluZydcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB0aGlzLl9faW5pdFZhbHVlKClcblx0XHR9O1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsKXtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRfdmFsdWUgPSBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3ZhbHVlO1xuXHR9LFxuXHRwYXJzZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSl7XG5cdFx0XHRyZXR1cm4gKG5ldyB3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0odmFsdWUpKS52YWx1ZU9mKCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRocm93IG5ldyBFcnJvcignRGF0YSBUeXBlIE9mIExpc3QgSXMgTnVsbC4nKTtcblx0fSxcblx0X19pc0NoZWNrZWQ6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF92YWx1ZSA9IGl0ZW1bdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0aWYoem4uaXModGhpcy5zdGF0ZS52YWx1ZSwgJ2FycmF5Jykpe1xuXHRcdFx0aWYodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHR2YXIgX2F2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUuc3BsaXQodGhpcy5wcm9wcy5zcGxpdENoYXIpLmZpbHRlcigodmFsdWUpPT4hIXZhbHVlKTtcblx0XHRcdGlmKF9hdmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX29uSXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGNoZWNrYm94KXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25JdGVtQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkl0ZW1DbGljayhldmVudCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9fY2xpY2tEZWZhdWx0KGV2ZW50KTtcblx0XHR9XG5cdH0sXG5cdF9fY2xpY2tEZWZhdWx0OiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGEsXG5cdFx0XHRfdmFsdWUgPSBfZGF0YVt0aGlzLnByb3BzLnZhbHVlS2V5XTtcblx0XHRpZih6bi5pcyh0aGlzLnN0YXRlLnZhbHVlLCAnYXJyYXknKSkge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnNwbGljZSh0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSwgMSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHR2YXIgX2F2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUuc3BsaXQodGhpcy5wcm9wcy5zcGxpdENoYXIpLmZpbHRlcigodmFsdWUpPT4hIXZhbHVlKTtcblx0XHRcdGlmKF9hdmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0X2F2YWx1ZS5zcGxpY2UoX2F2YWx1ZS5pbmRleE9mKF92YWx1ZSksIDEpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdF9hdmFsdWUucHVzaChfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IF9hdmFsdWUuam9pbih0aGlzLnByb3BzLnNwbGl0Q2hhcik7XG5cdFx0fVxuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbkl0ZW1DbGljazogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0Jykpe1xuXHRcdFx0dmFyIF90ZW1wID0geyBpbmRleDogaW5kZXggfTtcblx0XHRcdF90ZW1wW3RoaXMucHJvcHMudGV4dEtleV0gPSBfdGVtcFt0aGlzLnByb3BzLnZhbHVlS2V5XSA9IGl0ZW07XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fWVsc2V7XG5cdFx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0fVxuXG5cdFx0dmFyIF90ZXh0ID0gaXRlbVt0aGlzLnByb3BzLnRleHRLZXldO1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5pdGVtUmVuZGVyICYmIHRoaXMucHJvcHMuaXRlbVJlbmRlcihpdGVtLCBpbmRleCk7XG5cdFx0aWYoIV9yZXR1cm4pIHtcblx0XHRcdF9yZXR1cm4gPSAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0e2l0ZW0uaWNvbiAmJiA8aSBjbGFzc05hbWU9e1wiZmEgXCIgKyBpdGVtLmljb259IC8+fVxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e190ZXh0fTwvc3Bhbj5cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC1pdGVtXCIgb25DbGljaz17KGV2ZW50KT0+dGhpcy5fX29uSXRlbUNsaWNrKGV2ZW50LCBpdGVtLCBpbmRleCl9PntfcmV0dXJufTwvbGk+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dWwgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1zZWxlY3QtbGlzdFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cblx0XHRcdDwvdWw+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xudmFyIExpc3QgPSByZXF1aXJlKCcuL0xpc3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlBvcHVwU2VsZWN0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIlxuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQ6IHRoaXMucHJvcHMudGV4dCxcblx0XHRcdHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG5cdFx0fVxuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoeyB2YWx1ZTogdmFsdWUgfSwgdGhpcyk7XG5cdH0sXG5cdGdldFRleHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS50ZXh0O1xuXHR9LFxuXHRzZXRUZXh0OiBmdW5jdGlvbiAodGV4dCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR0ZXh0OiB0ZXh0XG5cdFx0fSk7XG5cdH0sXG5cdHNldERhdGE6IGZ1bmN0aW9uICh2YWx1ZSwgdGV4dCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR0ZXh0OiB0ZXh0XG5cdFx0fSk7XG5cdH0sXG5cdF9fcmVzb2x2ZVRhcmdldDogZnVuY3Rpb24gKHRhcmdldCl7XG5cdFx0aWYodGFyZ2V0KXtcblx0XHRcdGlmKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtdGV4dCcpKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX19yZXNvbHZlVGFyZ2V0KHRhcmdldC5wYXJlbnROb2RlKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19wb3BvdmVyUmVuZGVyOiBmdW5jdGlvbiAoZXZlbnQsIGRyb3Bkb3duKXtcblxuXHRcdHZhciBfdGFyZ2V0ID0gdGhpcy5fX3Jlc29sdmVUYXJnZXQoZXZlbnQudGFyZ2V0KTtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnBvcHVwUmVuZGVyLCB7XG5cdFx0XHR2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcblx0XHRcdHRleHQ6IHRoaXMuc3RhdGUudGV4dCxcblx0XHRcdGV2ZW50OiBldmVudCxcblx0XHRcdGRyb3Bkb3duOiBkcm9wZG93bixcblx0XHRcdHBvcHVwU2VsZWN0OiB0aGlzXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblxuXHRcdGlmKCFfZWxlbWVudCAmJiB0aGlzLnByb3BzLmRhdGEpe1xuXHRcdCBcdF9lbGVtZW50ID0gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1wb3BvdmVyXCI+XG5cdFx0XHRcdFx0PExpc3Qgc3BsaXRDaGFyPXt0aGlzLnByb3BzLnNwbGl0Q2hhcn0gXG5cdFx0XHRcdFx0XHR0ZXh0S2V5PXt0aGlzLnByb3BzLnRleHRLZXl9XG5cdFx0XHRcdFx0XHR2YWx1ZUtleT17dGhpcy5wcm9wcy52YWx1ZUtleX1cblx0XHRcdFx0XHRcdGRhdGFUeXBlPXt0aGlzLnByb3BzLmRhdGFUeXBlfVxuXHRcdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy5kYXRhfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3sgd2lkdGg6IF90YXJnZXQub2Zmc2V0V2lkdGggfX0gY2xhc3NOYW1lPVwic2VsZWN0LXBvcG92ZXJcIj57X2VsZW1lbnR9PC9kaXY+O1xuXHR9LFxuXHRfX3ZhbHVlUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnRleHRSZW5kZXIsIHtcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0cG9wdXBTZWxlY3Q6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0XHRfZWxlbWVudCA9IHRoaXMuc3RhdGUudGV4dCB8fCB0aGlzLnByb3BzLnBsYWNlaG9sZGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC10ZXh0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPntfZWxlbWVudH08L2Rpdj5cblx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiY2FyZXQtZG93blwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWNhcmV0LWRvd24gZmEtdy0xMCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTMxLjMgMTkyaDI1Ny4zYzE3LjggMCAyNi43IDIxLjUgMTQuMSAzNC4xTDE3NC4xIDM1NC44Yy03LjggNy44LTIwLjUgNy44LTI4LjMgMEwxNy4yIDIyNi4xQzQuNiAyMTMuNSAxMy41IDE5MiAzMS4zIDE5MnpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxwb3B1cC5Ecm9wZG93biBcblx0XHRcdFx0cG9wb3Zlcj17e1xuXHRcdFx0XHRcdHJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwienItc2VsZWN0LW1lbnUtZHJvcGRvd24tbGlzdFwiPlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ+i0puWPt+S/oeaBrycsIGljb246ICdmYS11c2VyLWNpcmNsZScgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ+S8geS4muiupOivgScsIGljb246ICdmYS1kcml2ZXJzLWxpY2Vuc2UtbycgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ+S8geS4mumCgOivtycsIGljb246ICdmYS1kZWFmJyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAn5Z+65pys6K6+572uJywgaWNvbjogJ2ZhLXNsaWRlcnMnIH1cblx0XHRcdFx0XHRcdFx0XHRcdF0ubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtcImljb24gZmEgXCIgKyBpdGVtLmljb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPntpdGVtLmxhYmVsfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b25Db250YWluZXJFdmVudDogZnVuY3Rpb24gKGV2ZW50LCBwb3BvdmVyKXtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXItc2Vzc2lvblwiID5cblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cImF2YXRhclwiIG9uQ2xpY2s9eygpPT56bnVpLmFwcC5zZXNzaW9uLmp1bXAoJy9tYWluL215L2luZm8nKX0+XG5cdFx0XHRcdFx0XHQ8aW1nIGRhdGEtenItcG9wdXAtdG9vbHRpcD1cIuafpeeci+aIkeeahOS4quS6uuS/oeaBr1wiIHNyYz17dGhpcy5zdGF0ZS51c2VyLmhlYWRpbWd1cmwgfHwgJy4uL19jb20vaW1hZ2VzL2xvZ28tMTI4LnBuZyd9IC8+XG5cdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt0aGlzLnN0YXRlLnVzZXIuVXNlcm5hbWUgfHwgdGhpcy5zdGF0ZS51c2VyLk5hbWV9PC9zcGFuPlxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvcG9wdXAuRHJvcGRvd24+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8cG9wdXAuRHJvcGRvd24gXG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1zZWxlY3QtbWVudVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgKHRoaXMucHJvcHMuZGlzYWJsZWQ/J2Rpc2FibGVkJzonJykpfVxuXHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0cG9wb3Zlcj17e1xuXHRcdFx0XHRcdHJlbmRlcjogdGhpcy5fX3BvcG92ZXJSZW5kZXIsXG5cdFx0XHRcdFx0b25Db250YWluZXJFdmVudDogZnVuY3Rpb24gKGV2ZW50LCBwb3BvdmVyKXtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH19PlxuXHRcdFx0XHR7dGhpcy5fX3ZhbHVlUmVuZGVyKCl9XG5cdFx0XHQ8L3BvcHVwLkRyb3Bkb3duPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSUG9wdXBTZWxlY3QnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogJycsXG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdGxvbmdUZXh0OiB0cnVlLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCJcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0OiB0aGlzLnByb3BzLnRleHQsXG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuXHRcdH1cblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgdmFsdWU6IHZhbHVlIH0sIHRoaXMpO1xuXHR9LFxuXHRnZXRUZXh0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudGV4dDtcblx0fSxcblx0c2V0VGV4dDogZnVuY3Rpb24gKHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHRzZXREYXRhOiBmdW5jdGlvbiAodmFsdWUsIHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHRfX3Jlc29sdmVUYXJnZXQ6IGZ1bmN0aW9uICh0YXJnZXQpe1xuXHRcdGlmKHRhcmdldCl7XG5cdFx0XHRpZighdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0LXRleHQnKSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9fcmVzb2x2ZVRhcmdldCh0YXJnZXQucGFyZW50Tm9kZSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fcG9wb3ZlclJlbmRlcjogZnVuY3Rpb24gKGV2ZW50LCBkcm9wZG93bil7XG5cdFx0dmFyIF90YXJnZXQgPSB0aGlzLl9fcmVzb2x2ZVRhcmdldChldmVudC50YXJnZXQpO1xuXHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucG9wdXBSZW5kZXIsIHtcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0ZXZlbnQ6IGV2ZW50LFxuXHRcdFx0ZHJvcGRvd246IGRyb3Bkb3duLFxuXHRcdFx0cG9wdXBTZWxlY3Q6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtcG9wb3ZlclwiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgX3RhcmdldC5vZmZzZXRXaWR0aCwgbWluV2lkdGg6IHRoaXMucHJvcHMubWluV2lkdGggfX0gY2xhc3NOYW1lPVwic2VsZWN0LXBvcG92ZXJcIj57X2VsZW1lbnR9PC9kaXY+O1xuXHR9LFxuXHRfX3ZhbHVlUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnRleHRSZW5kZXIsIHtcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0cG9wdXBTZWxlY3Q6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0XHRfZWxlbWVudCA9IHRoaXMuc3RhdGUudGV4dCB8fCB0aGlzLnN0YXRlLnZhbHVlIHx8IHRoaXMucHJvcHMucGxhY2Vob2xkZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXRleHRcIj5cblx0XHRcdFx0e3RoaXMucHJvcHMuc2hvd1RleHQgIT09IGZhbHNlICYmIDxkaXYgY2xhc3NOYW1lPXtcInRleHQgXCIgKyAodGhpcy5wcm9wcy5sb25nVGV4dCA/ICd6bnVpLXJlYWN0LWxvbmctdGV4dCcgOiAnJyl9PntfZWxlbWVudH08L2Rpdj59XG5cdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImNhcmV0LWRvd25cIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jYXJldC1kb3duIGZhLXctMTAgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zMS4zIDE5MmgyNTcuM2MxNy44IDAgMjYuNyAyMS41IDE0LjEgMzQuMUwxNzQuMSAzNTQuOGMtNy44IDcuOC0yMC41IDcuOC0yOC4zIDBMMTcuMiAyMjYuMUM0LjYgMjEzLjUgMTMuNSAxOTIgMzEuMyAxOTJ6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8cG9wdXAuRHJvcGRvd24gXG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1zZWxlY3RcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsICh0aGlzLnByb3BzLmRpc2FibGVkPydkaXNhYmxlZCc6JycpKX1cblx0XHRcdFx0c3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG5cdFx0XHRcdHBvcG92ZXI9e3tcblx0XHRcdFx0XHRyZW5kZXI6IHRoaXMuX19wb3BvdmVyUmVuZGVyLFxuXHRcdFx0XHRcdG9uQ29udGFpbmVyRXZlbnQ6IGZ1bmN0aW9uIChldmVudCwgcG9wb3Zlcil7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9fT5cblx0XHRcdFx0e3RoaXMuX192YWx1ZVJlbmRlcigpfVxuXHRcdFx0PC9wb3B1cC5Ecm9wZG93bj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJhZGlvSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSUmFkaW9JdGVtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0ZXZlbnQuZGF0YSA9IHRoaXMucHJvcHM7XG5cdFx0ZXZlbnQuc2VuZGVyID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuY29udGVudFJlbmRlciAmJiB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIodGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gbnVsbCl7XG5cdFx0XHRfcmV0dXJuID0gdGhpcy5wcm9wcy50ZXh0IHx8IHRoaXMucHJvcHMubGFiZWwgfHwnJztcblx0XHR9XG5cblx0XHRpZihfcmV0dXJuKSB7XG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e19yZXR1cm59PC9kaXY+O1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXJhZGlvLWl0ZW0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IG9uQ2xpY2s9e3RoaXMuX19vbkNsaWNrfSBkYXRhLWRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBkYXRhLWNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH0+XG5cdFx0XHRcdDxpbnB1dCBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IHR5cGU9J3JhZGlvJyBkZWZhdWx0Q2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gLz5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuY2hlY2tlZCA/IDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cImRvdC1jaXJjbGVcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWRvdC1jaXJjbGUgZmEtdy0xNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxuXHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDU2YzExMC41MzIgMCAyMDAgODkuNDUxIDIwMCAyMDAgMCAxMTAuNTMyLTg5LjQ1MSAyMDAtMjAwIDIwMC0xMTAuNTMyIDAtMjAwLTg5LjQ1MS0yMDAtMjAwIDAtMTEwLjUzMiA4OS40NTEtMjAwIDIwMC0yMDBtMC00OEMxMTkuMDMzIDggOCAxMTkuMDMzIDggMjU2czExMS4wMzMgMjQ4IDI0OCAyNDggMjQ4LTExMS4wMzMgMjQ4LTI0OFMzOTIuOTY3IDggMjU2IDh6bTAgMTY4Yy00NC4xODMgMC04MCAzNS44MTctODAgODBzMzUuODE3IDgwIDgwIDgwIDgwLTM1LjgxNyA4MC04MC0zNS44MTctODAtODAtODB6XCI+PC9wYXRoPlxuXHRcdFx0XHRcdDwvc3ZnPiA6IDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cImNpcmNsZVwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtY2lyY2xlIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4em0wIDQ0OGMtMTEwLjUgMC0yMDAtODkuNS0yMDAtMjAwUzE0NS41IDU2IDI1NiA1NnMyMDAgODkuNSAyMDAgMjAwLTg5LjUgMjAwLTIwMCAyMDB6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ29udGVudCgpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbnZhciBSYWRpbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSUmFkaW8nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRhdGFUeXBlOiAnU3RyaW5nJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZVxuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHRoaXMuX19pbml0VmFsdWUoKVxuXHRcdH07XG5cdH0sXG5cdF9faW5pdFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3ZhbHVlID0gbnVsbDtcblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICE9PSBudWxsKXtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRfdmFsdWUgPSAnJztcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wYXJzZVZhbHVlKF92YWx1ZSk7XG5cdH0sXG5cdHBhcnNlVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYod2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKXtcblx0XHRcdHJldHVybiAobmV3IHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSh2YWx1ZSkpLnZhbHVlT2YoKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEYXRhIFR5cGUgT2YgTGlzdCBJcyBOdWxsLicpO1xuXHR9LFxuXHRfX2lzQ2hlY2tlZDogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGl0ZW1bdGhpcy5wcm9wcy52YWx1ZUtleV0pO1xuXHRcdGlmKF92YWx1ZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdF9fb25SYWRpb0l0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBpdGVtKXtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkIHx8IGV2ZW50LmRhdGEuZGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSBldmVudC52YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShpdGVtW3RoaXMucHJvcHMudmFsdWVLZXldKTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0Jykpe1xuXHRcdFx0dmFyIF90ZW1wID0geyBpbmRleDogaW5kZXggfTtcblx0XHRcdF90ZW1wW3RoaXMucHJvcHMudGV4dEtleV0gPSBfdGVtcFt0aGlzLnByb3BzLnZhbHVlS2V5XSA9IGl0ZW07XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fWVsc2V7XG5cdFx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0fVxuXG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLml0ZW1SZW5kZXIgJiYgdGhpcy5wcm9wcy5pdGVtUmVuZGVyKGl0ZW0sIGluZGV4KTtcblx0XHRpZighX3JldHVybikge1xuXHRcdFx0X3JldHVybiA9IGl0ZW1bdGhpcy5wcm9wcy50ZXh0S2V5XTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIDxSYWRpb0l0ZW0ga2V5PXtpbmRleH0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IHsuLi5pdGVtfVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk9PnRoaXMuX19vblJhZGlvSXRlbUNsaWNrKGV2ZW50LCBpdGVtKX1cblx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLl9faXNDaGVja2VkKGl0ZW0pfSAvPjtcblx0fSxcblx0XG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgY2FsbGJhY2spe1xuXHRcdHZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKHZhbHVlKTtcblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWx1ZSB9LCB0aGlzKTtcblx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayh2YWx1ZSwgdGhpcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcmFkaW8nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmFkaW87XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSU2VsZWN0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGFUeXBlOiAnU3RyaW5nJyxcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdG11bHRpcGxlOiBmYWxzZSxcblx0XHRcdHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqVwiXG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdC8vUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUodGhpcy5wcm9wcy52YWx1ZSksIF9jb2xvciA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhICYmIHpuLmlzKHRoaXMucHJvcHMuZGF0YSwgJ2FycmF5JykpIHtcblx0XHRcdGZvcih2YXIgaXRlbSBvZiB0aGlzLnByb3BzLmRhdGEpIHtcblx0XHRcdFx0aWYoaXRlbS52YWx1ZSA9PSBfdmFsdWUpIHtcblx0XHRcdFx0XHRfY29sb3IgPSBpdGVtLmNvbG9yO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjb2xvcjogdGhpcy5wcm9wcy5jb2xvciB8fCBfY29sb3IsXG5cdFx0XHRzdHlsZTogbnVsbCxcblx0XHRcdGNsYXNzTmFtZTogbnVsbCxcblx0XHRcdHZhbHVlOiBfdmFsdWVcblx0XHR9O1xuXHR9LFxuXHRwYXJzZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHRoaXMucHJvcHMubXVsdGlwbGUpe1xuXHRcdFx0c3dpdGNoKHpuLnR5cGUodmFsdWUpKXtcblx0XHRcdFx0Y2FzZSAnYXJyYXknOlxuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdFx0XHRyZXR1cm4gW3ZhbHVlXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYod2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKXtcblx0XHRcdHJldHVybiB3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0odmFsdWUpLnZhbHVlT2YoKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEYXRhIFR5cGUgT2YgTGlzdCBJcyBOdWxsLicpO1xuXHR9LFxuXHRfX29uU2VsZWN0Q2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH0sXG5cdF9fcGFyc2VFeHA6IGZ1bmN0aW9uIChpdGVtLCBleHApe1xuXHRcdGlmKHR5cGVvZiBleHAgPT0gJ3N0cmluZycpe1xuXHRcdFx0aWYoZXhwLmluZGV4T2YoJ3snKSE9LTEpe1xuXHRcdFx0XHRyZXR1cm4gem4uZm9ybWF0KGV4cCwgaXRlbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gaXRlbVtleHBdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZih0eXBlb2YgZXhwID09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiBleHAoaXRlbSk7XG5cdFx0fVxuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF92YWx1ZSwgX3RleHQsIF9pdGVtID0gaXRlbSB8fCB7fTtcblx0XHRpZih6bi5pcyhfaXRlbSwgJ29iamVjdCcpKXtcblx0XHRcdF92YWx1ZSA9IHRoaXMuX19wYXJzZUV4cChfaXRlbSwgdGhpcy5wcm9wcy52YWx1ZUtleSk7XG5cdFx0XHRfdGV4dCA9IHRoaXMuX19wYXJzZUV4cChfaXRlbSwgdGhpcy5wcm9wcy50ZXh0S2V5KTtcblx0XHR9ZWxzZXtcblx0XHRcdF92YWx1ZSA9IF90ZXh0ID0gX2l0ZW07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxvcHRpb24gc3R5bGU9e19pdGVtLnN0eWxlfSBjbGFzc05hbWU9e19pdGVtLmNsYXNzTmFtZX0gZGlzYWJsZWQ9e2l0ZW0uZGlzYWJsZWR9IHNlbGVjdGVkPXt0aGlzLnN0YXRlLnZhbHVlPT1fdmFsdWV9IGtleT17X3ZhbHVlfSB2YWx1ZT17X3ZhbHVlfSBkYXRhLXRleHQ9e190ZXh0fSBkYXRhLXZhbHVlPXtfdmFsdWV9IGRhdGEtY29sb3I9e19pdGVtLmNvbG9yIHx8ICcnfT57X3RleHR9PC9vcHRpb24+O1xuXHR9LFxuXHRfX29uU2VsZWN0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxuXHRcdFx0X2RhdGEgPSBldmVudC50YXJnZXQuY2hpbGROb2Rlc1tfdGFyZ2V0LnNlbGVjdGVkSW5kZXhdLmRhdGFzZXQsXG5cdFx0XHRfdmFsdWUgPSB0aGlzLl9fcGFyc2VFeHAoX2RhdGEsIHRoaXMucHJvcHMudmFsdWVLZXkpIHx8IHRoaXMuX19wYXJzZUV4cChfZGF0YSwgJ3ZhbHVlJyksXG5cdFx0XHRfdGV4dCA9IHRoaXMuX19wYXJzZUV4cChfZGF0YSwgdGhpcy5wcm9wcy50ZXh0S2V5KSB8fCB0aGlzLl9fcGFyc2VFeHAoX2RhdGEsICd0ZXh0Jyk7XG5cblx0XHRldmVudC5zZWxlY3RlZEluZGV4ID0gKCtfdGFyZ2V0LnNlbGVjdGVkSW5kZXggLSAxKTtcblx0XHRldmVudC5kYXRhID0gX2RhdGE7XG5cdFx0ZXZlbnQudmFsdWUgPSBfdmFsdWU7XG5cdFx0ZXZlbnQudGV4dCA9IF90ZXh0O1xuXG5cdFx0aWYoX2RhdGEuY29sb3Ipe1xuXHRcdFx0dGhpcy5zdGF0ZS5jb2xvciA9IF9kYXRhLmNvbG9yO1xuXHRcdH1cblx0XHRpZihfZGF0YS5zdHlsZSkge1xuXHRcdFx0dGhpcy5zdGF0ZS5zdHlsZSA9IF9kYXRhLnN0eWxlO1xuXHRcdH1cblx0XHRpZihfZGF0YS5jbGFzc05hbWUpIHtcblx0XHRcdHRoaXMuc3RhdGUuY2xhc3NOYW1lID0gX2RhdGEuY2xhc3NOYW1lO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoX3ZhbHVlKTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5wYXJzZVZhbHVlKHRoaXMuc3RhdGUudmFsdWUgfHwgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUpO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZSh2YWx1ZSk7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWx1ZSB9LCB0aGlzKTtcblx0fSxcblx0X19yZXNvbHZlU3R5bGU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfc3R5bGUgPSB7fTtcblx0XHRpZih0aGlzLnN0YXRlLmNvbG9yKXtcblx0XHRcdF9zdHlsZS5jb2xvciA9IHRoaXMuc3RhdGUuY29sb3I7XG5cdFx0XHRfc3R5bGUuYm9yZGVyQ29sb3IgPSB0aGlzLnN0YXRlLmNvbG9yO1xuXHRcdH1cblx0XHRpZih0aGlzLnN0YXRlLnN0eWxlKSB7XG5cdFx0XHRfc3R5bGUgPSB6bi5leHRlbmQoX3N0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3N0eWxlO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXNlbGVjdFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfVxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh7fSwgdGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5fX3Jlc29sdmVTdHlsZSgpKX1cblx0XHRcdFx0bmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuXHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cblx0XHRcdFx0bXVsdGlwbGU9e3RoaXMucHJvcHMubXVsdGlwbGV9XG5cdFx0XHRcdHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuXHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cblx0XHRcdFx0cmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZG9ubHl9XG5cdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25TZWxlY3RDaGFuZ2V9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX19vblNlbGVjdENsaWNrfT5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nJyBkaXNhYmxlZD57dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn08L29wdGlvbj5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cdFxuXHRcdFx0PC9zZWxlY3Q+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJVbmNvbnRyb2xDaGVja2JveCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdGxheW91dDogJ2ZsZXgtcm93Jyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uICgpe31cblx0XHR9XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0ZXZlbnQuZGF0YSA9IHRoaXMucHJvcHM7XG5cdFx0ZXZlbnQuc2VuZGVyID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuY29udGVudFJlbmRlciAmJiB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIodGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gdW5kZWZpbmVkIHx8IF9yZXR1cm4gPT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IHRoaXMucHJvcHMudGV4dCB8fCB0aGlzLnByb3BzLmxhYmVsIHx8ICcnO1xuXHRcdH1cblx0XHRpZihfcmV0dXJuKSB7XG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e19yZXR1cm59PC9kaXY+O1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdW5jb250cm9sLWNoZWNrYm94JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gXG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fb25DbGlja30gPlxuXHRcdFx0XHQ8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0vPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5jaGVja2VkID8gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwiY2hlY2stc3F1YXJlXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1jaGVjay1zcXVhcmUgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPlxuXHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQwMEg0OFY4MGgzNTJ2MzUyem0tMzUuODY0LTI0MS43MjRMMTkxLjU0NyAzNjEuNDhjLTQuNzA1IDQuNjY3LTEyLjMwMyA0LjYzNy0xNi45Ny0uMDY4bC05MC43ODEtOTEuNTE2Yy00LjY2Ny00LjcwNS00LjYzNy0xMi4zMDMuMDY5LTE2Ljk3MWwyMi43MTktMjIuNTM2YzQuNzA1LTQuNjY3IDEyLjMwMy00LjYzNyAxNi45Ny4wNjlsNTkuNzkyIDYwLjI3NyAxNDEuMzUyLTE0MC4yMTZjNC43MDUtNC42NjcgMTIuMzAzLTQuNjM3IDE2Ljk3LjA2OGwyMi41MzYgMjIuNzE4YzQuNjY3IDQuNzA2IDQuNjM3IDEyLjMwNC0uMDY4IDE2Ljk3MXpcIj48L3BhdGg+XG5cdFx0XHRcdFx0PC9zdmc+OiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJzcXVhcmVcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXNxdWFyZSBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjUgMzIgMCA1My41IDAgODB2MzUyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OFY4MGMwLTI2LjUtMjEuNS00OC00OC00OHptLTYgNDAwSDU0Yy0zLjMgMC02LTIuNy02LTZWODZjMC0zLjMgMi43LTYgNi02aDM0MGMzLjMgMCA2IDIuNyA2IDZ2MzQwYzAgMy4zLTIuNyA2LTYgNnpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENoZWNrYm94OiByZXF1aXJlKCcuL0NoZWNrYm94JyksXG4gICAgVW5jb250cm9sQ2hlY2tib3g6IHJlcXVpcmUoJy4vVW5jb250cm9sQ2hlY2tib3gnKSxcbiAgICBDaGVja2JveHM6IHJlcXVpcmUoJy4vQ2hlY2tib3hzJyksXG4gICAgUmFkaW86IHJlcXVpcmUoJy4vUmFkaW8nKSxcbiAgICBTZWxlY3Q6IHJlcXVpcmUoJy4vU2VsZWN0JyksXG4gICAgTWVudTogcmVxdWlyZSgnLi9NZW51JyksXG4gICAgUG9wdXBTZWxlY3Q6IHJlcXVpcmUoJy4vUG9wdXBTZWxlY3QnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJ6ci1wb3B1cFwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9