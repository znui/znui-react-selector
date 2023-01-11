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
      className: "text znui-react-long-text"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3hzLmpzIiwid2VicGFjazovLy8uL0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9Qb3B1cFNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9SYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vVW5jb250cm9sQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpyLXBvcHVwXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiY2xhc3NOYW1lIiwidGV4dCIsImxheW91dCIsImNoZWNrZWQiLCJkaXNhYmxlZCIsImdldEluaXRpYWxTdGF0ZSIsIl92YWx1ZSIsInByb3BzIiwidmFsdWUiLCJfX29uQ2xpY2siLCJldmVudCIsInN0YXRlIiwiZm9yY2VVcGRhdGUiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwic2V0U3RhdGUiLCJfX29uQ2hhbmdlIiwiX19yZW5kZXJDb250ZW50IiwiX3JldHVybiIsImNvbnRlbnRSZW5kZXIiLCJsYWJlbCIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwic3R5bGUiLCJuYW1lIiwiVW5jb250cm9sQ2hlY2tib3giLCJzcGxpdENoYXIiLCJ0ZXh0S2V5IiwidmFsdWVLZXkiLCJkYXRhVHlwZSIsIl9faW5pdFZhbHVlIiwicGFyc2VWYWx1ZSIsIndpbmRvdyIsInZhbHVlT2YiLCJFcnJvciIsIl9faXNDaGVja2VkIiwiaXRlbSIsImluZGV4IiwidG9TdHJpbmciLCJ6biIsImlzIiwiaW5kZXhPZiIsIl9hdmFsdWUiLCJzcGxpdCIsImZpbHRlciIsIl9fb25JdGVtQ2xpY2siLCJjaGVja2JveCIsIm9uSXRlbUNsaWNrIiwiX19jbGlja0RlZmF1bHQiLCJfZGF0YSIsImRhdGEiLCJzcGxpY2UiLCJwdXNoIiwiam9pbiIsIl9faXRlbVJlbmRlciIsIl90ZW1wIiwiaXRlbVJlbmRlciIsImNoaWxkcmVuIiwiX3RleHQiLCJpY29uIiwicG9wdXAiLCJMaXN0IiwicGxhY2Vob2xkZXIiLCJnZXRUZXh0Iiwic2V0VGV4dCIsInNldERhdGEiLCJfX3Jlc29sdmVUYXJnZXQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJfX3BvcG92ZXJSZW5kZXIiLCJkcm9wZG93biIsIl90YXJnZXQiLCJfZWxlbWVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsInBvcHVwUmVuZGVyIiwicG9wdXBTZWxlY3QiLCJjb250ZXh0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsIl9fdmFsdWVSZW5kZXIiLCJ0ZXh0UmVuZGVyIiwiX19yZW5kZXIiLCJtYXAiLCJvbkNvbnRhaW5lckV2ZW50IiwicG9wb3ZlciIsImFwcCIsInNlc3Npb24iLCJqdW1wIiwidXNlciIsImhlYWRpbWd1cmwiLCJVc2VybmFtZSIsIk5hbWUiLCJtaW5XaWR0aCIsInNob3dUZXh0IiwiUmFkaW9JdGVtIiwic2VuZGVyIiwiUmFkaW8iLCJfX29uUmFkaW9JdGVtQ2xpY2siLCJjYWxsYmFjayIsIlJlYWN0RE9NIiwibXVsdGlwbGUiLCJjb21wb25lbnREaWRNb3VudCIsIl9jb2xvciIsImNvbG9yIiwidHlwZSIsIl9fb25TZWxlY3RDbGljayIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiX19wYXJzZUV4cCIsImV4cCIsImZvcm1hdCIsIl9pdGVtIiwiX19vblNlbGVjdENoYW5nZSIsImNoaWxkTm9kZXMiLCJzZWxlY3RlZEluZGV4IiwiZGF0YXNldCIsImZpbmRET01Ob2RlIiwiX19yZXNvbHZlU3R5bGUiLCJfc3R5bGUiLCJib3JkZXJDb2xvciIsImV4dGVuZCIsInJlcXVpcmVkIiwicmVhZG9ubHkiLCJ1bmRlZmluZWQiLCJDaGVja2JveCIsIkNoZWNrYm94cyIsIlNlbGVjdCIsIk1lbnUiLCJQb3B1cFNlbGVjdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFMLElBQWNFLG1CQUFPLENBQUMsb0JBQUQsQ0FBakM7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosS0FBSyxDQUFDSyxXQUFOLENBQWtCO0FBQ2xDQyxhQUFXLEVBQUMsWUFEc0I7QUFFbENDLGlCQUFlLEVBQUUsMkJBQVc7QUFDM0IsV0FBTztBQUNOQyxlQUFTLEVBQUUsRUFETDtBQUVOQyxV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TSxFQUFFekksbUJBQU8sQ0FBQyw2QkFBRCxDQUxGO0FBTWIwSSxNQUFJLEVBQUUxSSxtQkFBTyxDQUFDLHlCQUFELENBTkE7QUFPYjJJLGFBQVcsRUFBRTNJLG1CQUFPLENBQUMsdUNBQUQ7QUFQUCxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FsRCxhQUFhLG1DQUFtQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJDaGVja2JveCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdGxheW91dDogJ2ZsZXgtcm93Jyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucHJvcHMuY2hlY2tlZDtcblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICE9IG51bGwpIHtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjaGVja2VkOiBfdmFsdWVcblx0XHR9XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5zdGF0ZS5jaGVja2VkID0gZXZlbnQudmFsdWUgPSBldmVudC5jaGVja2VkID0gIXRoaXMuc3RhdGUuY2hlY2tlZDtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuY2hlY2tlZDtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQ6IHZhbHVlIH0pO1xuXHR9LFxuXHRfX29uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkOiAhdGhpcy5zdGF0ZS5jaGVja2VkIH0pO1xuXHR9LFxuXHRfX3JlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5jb250ZW50UmVuZGVyICYmIHRoaXMucHJvcHMuY29udGVudFJlbmRlcih0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBudWxsKXtcblx0XHRcdF9yZXR1cm4gPSB0aGlzLnByb3BzLnRleHQgfHwgdGhpcy5wcm9wcy5sYWJlbCB8fCAnJztcblx0XHR9XG5cblx0XHRpZihfcmV0dXJuKSB7XG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e19yZXR1cm59PC9kaXY+O1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWNoZWNrYm94JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gXG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fb25DbGlja30gPlxuXHRcdFx0XHQ8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfSBvbkNoYW5nZT17dGhpcy5fX29uQ2hhbmdlfSAvPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2VkID8gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwiY2hlY2stc3F1YXJlXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1jaGVjay1zcXVhcmUgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPlxuXHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQwMEg0OFY4MGgzNTJ2MzUyem0tMzUuODY0LTI0MS43MjRMMTkxLjU0NyAzNjEuNDhjLTQuNzA1IDQuNjY3LTEyLjMwMyA0LjYzNy0xNi45Ny0uMDY4bC05MC43ODEtOTEuNTE2Yy00LjY2Ny00LjcwNS00LjYzNy0xMi4zMDMuMDY5LTE2Ljk3MWwyMi43MTktMjIuNTM2YzQuNzA1LTQuNjY3IDEyLjMwMy00LjYzNyAxNi45Ny4wNjlsNTkuNzkyIDYwLjI3NyAxNDEuMzUyLTE0MC4yMTZjNC43MDUtNC42NjcgMTIuMzAzLTQuNjM3IDE2Ljk3LjA2OGwyMi41MzYgMjIuNzE4YzQuNjY3IDQuNzA2IDQuNjM3IDEyLjMwNC0uMDY4IDE2Ljk3MXpcIj48L3BhdGg+XG5cdFx0XHRcdFx0PC9zdmc+OiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJzcXVhcmVcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXNxdWFyZSBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjUgMzIgMCA1My41IDAgODB2MzUyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OFY4MGMwLTI2LjUtMjEuNS00OC00OC00OHptLTYgNDAwSDU0Yy0zLjMgMC02LTIuNy02LTZWODZjMC0zLjMgMi43LTYgNi02aDM0MGMzLjMgMCA2IDIuNyA2IDZ2MzQwYzAgMy4zLTIuNyA2LTYgNnpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBVbmNvbnRyb2xDaGVja2JveCA9IHJlcXVpcmUoJy4vVW5jb250cm9sQ2hlY2tib3gnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkNoZWNrYm94cycsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNwbGl0Q2hhcjogJywnLFxuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkYXRhVHlwZTogJ1N0cmluZydcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB0aGlzLl9faW5pdFZhbHVlKClcblx0XHR9O1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsKXtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRfdmFsdWUgPSBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3ZhbHVlO1xuXHR9LFxuXHRwYXJzZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSl7XG5cdFx0XHRyZXR1cm4gKG5ldyB3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0odmFsdWUpKS52YWx1ZU9mKCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRocm93IG5ldyBFcnJvcignRGF0YSBUeXBlIE9mIExpc3QgSXMgTnVsbC4nKTtcblx0fSxcblx0X19pc0NoZWNrZWQ6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF92YWx1ZSA9IChpdGVtW3RoaXMucHJvcHMudmFsdWVLZXldKS50b1N0cmluZygpO1xuXHRcdGlmKHpuLmlzKHRoaXMuc3RhdGUudmFsdWUsICdhcnJheScpKXtcblx0XHRcdGlmKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0dmFyIF9hdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlLnNwbGl0KHRoaXMucHJvcHMuc3BsaXRDaGFyKS5maWx0ZXIoKHZhbHVlKT0+ISF2YWx1ZSk7XG5cdFx0XHRpZihfYXZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19vbkl0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBjaGVja2JveCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uSXRlbUNsaWNrICYmIHRoaXMucHJvcHMub25JdGVtQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fX2NsaWNrRGVmYXVsdChldmVudCk7XG5cdFx0fVxuXHR9LFxuXHRfX2NsaWNrRGVmYXVsdDogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX2RhdGEgPSBldmVudC5kYXRhLFxuXHRcdFx0X3ZhbHVlID0gKF9kYXRhW3RoaXMucHJvcHMudmFsdWVLZXldKS50b1N0cmluZygpO1xuXHRcdGlmKHpuLmlzKHRoaXMuc3RhdGUudmFsdWUsICdhcnJheScpKSB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdHRoaXMuc3RhdGUudmFsdWUuc3BsaWNlKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpLCAxKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnB1c2goX3ZhbHVlKTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdHZhciBfYXZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZS5zcGxpdCh0aGlzLnByb3BzLnNwbGl0Q2hhcikuZmlsdGVyKCh2YWx1ZSk9PiEhdmFsdWUpO1xuXHRcdFx0aWYoX2F2YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRfYXZhbHVlLnNwbGljZShfYXZhbHVlLmluZGV4T2YoX3ZhbHVlKSwgMSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0X2F2YWx1ZS5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlLnZhbHVlID0gX2F2YWx1ZS5qb2luKHRoaXMucHJvcHMuc3BsaXRDaGFyKTtcblx0XHR9XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGl0ZW0sICdvYmplY3QnKSl7XG5cdFx0XHR2YXIgX3RlbXAgPSB7IGluZGV4OiBpbmRleCB9O1xuXHRcdFx0X3RlbXBbdGhpcy5wcm9wcy50ZXh0S2V5XSA9IF90ZW1wW3RoaXMucHJvcHMudmFsdWVLZXldID0gaXRlbTtcblx0XHRcdGl0ZW0gPSBfdGVtcDtcblx0XHR9ZWxzZXtcblx0XHRcdGl0ZW0uaW5kZXggPSBpbmRleDtcblx0XHR9XG5cblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuaXRlbVJlbmRlciAmJiB0aGlzLnByb3BzLml0ZW1SZW5kZXIoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKCFfcmV0dXJuKSB7XG5cdFx0XHRfcmV0dXJuID0gaXRlbVt0aGlzLnByb3BzLnRleHRLZXldO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gPFVuY29udHJvbENoZWNrYm94IGtleT17aW5kZXh9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG5cdFx0XHRcdFx0Y29udGVudFJlbmRlcj17dGhpcy5wcm9wcy5jb250ZW50UmVuZGVyfVxuXHRcdFx0XHRcdHsuLi5pdGVtfVxuXHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuX19pc0NoZWNrZWQoaXRlbSwgaW5kZXgpfSBcblx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpPT50aGlzLl9fb25JdGVtQ2xpY2soZXZlbnQsIGl0ZW0pfS8+O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1jaGVja2JveHNcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJTZWxlY3RMaXN0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3BsaXRDaGFyOiAnLCcsXG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRhdGFUeXBlOiAnU3RyaW5nJ1xuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHRoaXMuX19pbml0VmFsdWUoKVxuXHRcdH07XG5cdH0sXG5cdF9faW5pdFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3ZhbHVlID0gbnVsbDtcblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICE9IG51bGwpe1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblx0XHR9ZWxzZXtcblx0XHRcdF92YWx1ZSA9IFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBfdmFsdWU7XG5cdH0sXG5cdHBhcnNlVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYod2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKXtcblx0XHRcdHJldHVybiAobmV3IHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSh2YWx1ZSkpLnZhbHVlT2YoKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEYXRhIFR5cGUgT2YgTGlzdCBJcyBOdWxsLicpO1xuXHR9LFxuXHRfX2lzQ2hlY2tlZDogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3ZhbHVlID0gaXRlbVt0aGlzLnByb3BzLnZhbHVlS2V5XTtcblx0XHRpZih6bi5pcyh0aGlzLnN0YXRlLnZhbHVlLCAnYXJyYXknKSl7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdHZhciBfYXZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZS5zcGxpdCh0aGlzLnByb3BzLnNwbGl0Q2hhcikuZmlsdGVyKCh2YWx1ZSk9PiEhdmFsdWUpO1xuXHRcdFx0aWYoX2F2YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25JdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgY2hlY2tib3gpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkl0ZW1DbGljayAmJiB0aGlzLnByb3BzLm9uSXRlbUNsaWNrKGV2ZW50LCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09IG51bGwpIHtcblx0XHRcdHRoaXMuX19jbGlja0RlZmF1bHQoZXZlbnQpO1xuXHRcdH1cblx0fSxcblx0X19jbGlja0RlZmF1bHQ6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF9kYXRhID0gZXZlbnQuZGF0YSxcblx0XHRcdF92YWx1ZSA9IF9kYXRhW3RoaXMucHJvcHMudmFsdWVLZXldO1xuXHRcdGlmKHpuLmlzKHRoaXMuc3RhdGUudmFsdWUsICdhcnJheScpKSB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdHRoaXMuc3RhdGUudmFsdWUuc3BsaWNlKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpLCAxKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnB1c2goX3ZhbHVlKTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdHZhciBfYXZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZS5zcGxpdCh0aGlzLnByb3BzLnNwbGl0Q2hhcikuZmlsdGVyKCh2YWx1ZSk9PiEhdmFsdWUpO1xuXHRcdFx0aWYoX2F2YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRfYXZhbHVlLnNwbGljZShfYXZhbHVlLmluZGV4T2YoX3ZhbHVlKSwgMSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0X2F2YWx1ZS5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlLnZhbHVlID0gX2F2YWx1ZS5qb2luKHRoaXMucHJvcHMuc3BsaXRDaGFyKTtcblx0XHR9XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uSXRlbUNsaWNrOiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGl0ZW0sICdvYmplY3QnKSl7XG5cdFx0XHR2YXIgX3RlbXAgPSB7IGluZGV4OiBpbmRleCB9O1xuXHRcdFx0X3RlbXBbdGhpcy5wcm9wcy50ZXh0S2V5XSA9IF90ZW1wW3RoaXMucHJvcHMudmFsdWVLZXldID0gaXRlbTtcblx0XHRcdGl0ZW0gPSBfdGVtcDtcblx0XHR9ZWxzZXtcblx0XHRcdGl0ZW0uaW5kZXggPSBpbmRleDtcblx0XHR9XG5cblx0XHR2YXIgX3RleHQgPSBpdGVtW3RoaXMucHJvcHMudGV4dEtleV07XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLml0ZW1SZW5kZXIgJiYgdGhpcy5wcm9wcy5pdGVtUmVuZGVyKGl0ZW0sIGluZGV4KTtcblx0XHRpZighX3JldHVybikge1xuXHRcdFx0X3JldHVybiA9IChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHR7aXRlbS5pY29uICYmIDxpIGNsYXNzTmFtZT17XCJmYSBcIiArIGl0ZW0uaWNvbn0gLz59XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj57X3RleHR9PC9zcGFuPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIiBvbkNsaWNrPXsoZXZlbnQpPT50aGlzLl9fb25JdGVtQ2xpY2soZXZlbnQsIGl0ZW0sIGluZGV4KX0+e19yZXR1cm59PC9saT5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx1bCBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXNlbGVjdC1saXN0XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlxuXHRcdFx0PC91bD5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgcG9wdXAgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBvcHVwJyk7XG52YXIgTGlzdCA9IHJlcXVpcmUoJy4vTGlzdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSUG9wdXBTZWxlY3QnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogJycsXG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqVwiXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogdGhpcy5wcm9wcy50ZXh0LFxuXHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudmFsdWVcblx0XHR9XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWx1ZSB9LCB0aGlzKTtcblx0fSxcblx0Z2V0VGV4dDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnRleHQ7XG5cdH0sXG5cdHNldFRleHQ6IGZ1bmN0aW9uICh0ZXh0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHRleHQ6IHRleHRcblx0XHR9KTtcblx0fSxcblx0c2V0RGF0YTogZnVuY3Rpb24gKHZhbHVlLCB0ZXh0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdHRleHQ6IHRleHRcblx0XHR9KTtcblx0fSxcblx0X19yZXNvbHZlVGFyZ2V0OiBmdW5jdGlvbiAodGFyZ2V0KXtcblx0XHRpZih0YXJnZXQpe1xuXHRcdFx0aWYoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC10ZXh0Jykpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fX3Jlc29sdmVUYXJnZXQodGFyZ2V0LnBhcmVudE5vZGUpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX3BvcG92ZXJSZW5kZXI6IGZ1bmN0aW9uIChldmVudCwgZHJvcGRvd24pe1xuXG5cdFx0dmFyIF90YXJnZXQgPSB0aGlzLl9fcmVzb2x2ZVRhcmdldChldmVudC50YXJnZXQpO1xuXHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucG9wdXBSZW5kZXIsIHtcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0ZXZlbnQ6IGV2ZW50LFxuXHRcdFx0ZHJvcGRvd246IGRyb3Bkb3duLFxuXHRcdFx0cG9wdXBTZWxlY3Q6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoIV9lbGVtZW50ICYmIHRoaXMucHJvcHMuZGF0YSl7XG5cdFx0IFx0X2VsZW1lbnQgPSAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXBvcG92ZXJcIj5cblx0XHRcdFx0XHQ8TGlzdCBzcGxpdENoYXI9e3RoaXMucHJvcHMuc3BsaXRDaGFyfSBcblx0XHRcdFx0XHRcdHRleHRLZXk9e3RoaXMucHJvcHMudGV4dEtleX1cblx0XHRcdFx0XHRcdHZhbHVlS2V5PXt0aGlzLnByb3BzLnZhbHVlS2V5fVxuXHRcdFx0XHRcdFx0ZGF0YVR5cGU9e3RoaXMucHJvcHMuZGF0YVR5cGV9XG5cdFx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLmRhdGF9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17eyB3aWR0aDogX3RhcmdldC5vZmZzZXRXaWR0aCB9fSBjbGFzc05hbWU9XCJzZWxlY3QtcG9wb3ZlclwiPntfZWxlbWVudH08L2Rpdj47XG5cdH0sXG5cdF9fdmFsdWVSZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMudGV4dFJlbmRlciwge1xuXHRcdFx0dmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXG5cdFx0XHR0ZXh0OiB0aGlzLnN0YXRlLnRleHQsXG5cdFx0XHRwb3B1cFNlbGVjdDogdGhpc1xuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHRcdF9lbGVtZW50ID0gdGhpcy5zdGF0ZS50ZXh0IHx8IHRoaXMucHJvcHMucGxhY2Vob2xkZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXRleHRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e19lbGVtZW50fTwvZGl2PlxuXHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJjYXJldC1kb3duXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtY2FyZXQtZG93biBmYS13LTEwIFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzEuMyAxOTJoMjU3LjNjMTcuOCAwIDI2LjcgMjEuNSAxNC4xIDM0LjFMMTc0LjEgMzU0LjhjLTcuOCA3LjgtMjAuNSA3LjgtMjguMyAwTDE3LjIgMjI2LjFDNC42IDIxMy41IDEzLjUgMTkyIDMxLjMgMTkyelwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHBvcHVwLkRyb3Bkb3duIFxuXHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJ6ci1zZWxlY3QtbWVudS1kcm9wZG93bi1saXN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAn6LSm5Y+35L+h5oGvJywgaWNvbjogJ2ZhLXVzZXItY2lyY2xlJyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAn5LyB5Lia6K6k6K+BJywgaWNvbjogJ2ZhLWRyaXZlcnMtbGljZW5zZS1vJyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAn5LyB5Lia6YKA6K+3JywgaWNvbjogJ2ZhLWRlYWYnIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICfln7rmnKzorr7nva4nLCBpY29uOiAnZmEtc2xpZGVycycgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCIga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e1wiaWNvbiBmYSBcIiArIGl0ZW0uaWNvbn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e2l0ZW0ubGFiZWx9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvbkNvbnRhaW5lckV2ZW50OiBmdW5jdGlvbiAoZXZlbnQsIHBvcG92ZXIpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlci1zZXNzaW9uXCIgPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiYXZhdGFyXCIgb25DbGljaz17KCk9PnpudWkuYXBwLnNlc3Npb24uanVtcCgnL21haW4vbXkvaW5mbycpfT5cblx0XHRcdFx0XHRcdDxpbWcgZGF0YS16ci1wb3B1cC10b29sdGlwPVwi5p+l55yL5oiR55qE5Liq5Lq65L+h5oGvXCIgc3JjPXt0aGlzLnN0YXRlLnVzZXIuaGVhZGltZ3VybCB8fCAnLi4vX2NvbS9pbWFnZXMvbG9nby0xMjgucG5nJ30gLz5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e3RoaXMuc3RhdGUudXNlci5Vc2VybmFtZSB8fCB0aGlzLnN0YXRlLnVzZXIuTmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG93blwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9wb3B1cC5Ecm9wZG93bj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxwb3B1cC5Ecm9wZG93biBcblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXNlbGVjdC1tZW51XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCAodGhpcy5wcm9wcy5kaXNhYmxlZD8nZGlzYWJsZWQnOicnKSl9XG5cdFx0XHRcdHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuXHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0cmVuZGVyOiB0aGlzLl9fcG9wb3ZlclJlbmRlcixcblx0XHRcdFx0XHRvbkNvbnRhaW5lckV2ZW50OiBmdW5jdGlvbiAoZXZlbnQsIHBvcG92ZXIpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fX0+XG5cdFx0XHRcdHt0aGlzLl9fdmFsdWVSZW5kZXIoKX1cblx0XHRcdDwvcG9wdXAuRHJvcGRvd24+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgcG9wdXAgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBvcHVwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJQb3B1cFNlbGVjdCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdHRleHRLZXk6ICd0ZXh0Jyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHRcdHZhbHVlS2V5OiAndmFsdWUnLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCJcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0OiB0aGlzLnByb3BzLnRleHQsXG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuXHRcdH1cblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgdmFsdWU6IHZhbHVlIH0sIHRoaXMpO1xuXHR9LFxuXHRnZXRUZXh0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudGV4dDtcblx0fSxcblx0c2V0VGV4dDogZnVuY3Rpb24gKHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHRzZXREYXRhOiBmdW5jdGlvbiAodmFsdWUsIHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHRfX3Jlc29sdmVUYXJnZXQ6IGZ1bmN0aW9uICh0YXJnZXQpe1xuXHRcdGlmKHRhcmdldCl7XG5cdFx0XHRpZighdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0LXRleHQnKSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9fcmVzb2x2ZVRhcmdldCh0YXJnZXQucGFyZW50Tm9kZSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fcG9wb3ZlclJlbmRlcjogZnVuY3Rpb24gKGV2ZW50LCBkcm9wZG93bil7XG5cdFx0dmFyIF90YXJnZXQgPSB0aGlzLl9fcmVzb2x2ZVRhcmdldChldmVudC50YXJnZXQpO1xuXHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucG9wdXBSZW5kZXIsIHtcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0ZXZlbnQ6IGV2ZW50LFxuXHRcdFx0ZHJvcGRvd246IGRyb3Bkb3duLFxuXHRcdFx0cG9wdXBTZWxlY3Q6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtcG9wb3ZlclwiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgX3RhcmdldC5vZmZzZXRXaWR0aCwgbWluV2lkdGg6IHRoaXMucHJvcHMubWluV2lkdGggfX0gY2xhc3NOYW1lPVwic2VsZWN0LXBvcG92ZXJcIj57X2VsZW1lbnR9PC9kaXY+O1xuXHR9LFxuXHRfX3ZhbHVlUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnRleHRSZW5kZXIsIHtcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0cG9wdXBTZWxlY3Q6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0XHRfZWxlbWVudCA9IHRoaXMuc3RhdGUudGV4dCB8fCB0aGlzLnN0YXRlLnZhbHVlIHx8IHRoaXMucHJvcHMucGxhY2Vob2xkZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXRleHRcIj5cblx0XHRcdFx0e3RoaXMucHJvcHMuc2hvd1RleHQgIT09IGZhbHNlICYmIDxkaXYgY2xhc3NOYW1lPVwidGV4dCB6bnVpLXJlYWN0LWxvbmctdGV4dFwiPntfZWxlbWVudH08L2Rpdj59XG5cdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImNhcmV0LWRvd25cIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jYXJldC1kb3duIGZhLXctMTAgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zMS4zIDE5MmgyNTcuM2MxNy44IDAgMjYuNyAyMS41IDE0LjEgMzQuMUwxNzQuMSAzNTQuOGMtNy44IDcuOC0yMC41IDcuOC0yOC4zIDBMMTcuMiAyMjYuMUM0LjYgMjEzLjUgMTMuNSAxOTIgMzEuMyAxOTJ6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8cG9wdXAuRHJvcGRvd24gXG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1zZWxlY3RcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsICh0aGlzLnByb3BzLmRpc2FibGVkPydkaXNhYmxlZCc6JycpKX1cblx0XHRcdFx0c3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG5cdFx0XHRcdHBvcG92ZXI9e3tcblx0XHRcdFx0XHRyZW5kZXI6IHRoaXMuX19wb3BvdmVyUmVuZGVyLFxuXHRcdFx0XHRcdG9uQ29udGFpbmVyRXZlbnQ6IGZ1bmN0aW9uIChldmVudCwgcG9wb3Zlcil7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9fT5cblx0XHRcdFx0e3RoaXMuX192YWx1ZVJlbmRlcigpfVxuXHRcdFx0PC9wb3B1cC5Ecm9wZG93bj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJhZGlvSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSUmFkaW9JdGVtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0ZXZlbnQuZGF0YSA9IHRoaXMucHJvcHM7XG5cdFx0ZXZlbnQuc2VuZGVyID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuY29udGVudFJlbmRlciAmJiB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIodGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gbnVsbCl7XG5cdFx0XHRfcmV0dXJuID0gdGhpcy5wcm9wcy50ZXh0IHx8IHRoaXMucHJvcHMubGFiZWwgfHwnJztcblx0XHR9XG5cblx0XHRpZihfcmV0dXJuKSB7XG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e19yZXR1cm59PC9kaXY+O1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXJhZGlvLWl0ZW0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IG9uQ2xpY2s9e3RoaXMuX19vbkNsaWNrfSBkYXRhLWRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBkYXRhLWNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH0+XG5cdFx0XHRcdDxpbnB1dCBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IHR5cGU9J3JhZGlvJyBkZWZhdWx0Q2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gLz5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuY2hlY2tlZCA/IDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cImRvdC1jaXJjbGVcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWRvdC1jaXJjbGUgZmEtdy0xNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxuXHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDU2YzExMC41MzIgMCAyMDAgODkuNDUxIDIwMCAyMDAgMCAxMTAuNTMyLTg5LjQ1MSAyMDAtMjAwIDIwMC0xMTAuNTMyIDAtMjAwLTg5LjQ1MS0yMDAtMjAwIDAtMTEwLjUzMiA4OS40NTEtMjAwIDIwMC0yMDBtMC00OEMxMTkuMDMzIDggOCAxMTkuMDMzIDggMjU2czExMS4wMzMgMjQ4IDI0OCAyNDggMjQ4LTExMS4wMzMgMjQ4LTI0OFMzOTIuOTY3IDggMjU2IDh6bTAgMTY4Yy00NC4xODMgMC04MCAzNS44MTctODAgODBzMzUuODE3IDgwIDgwIDgwIDgwLTM1LjgxNyA4MC04MC0zNS44MTctODAtODAtODB6XCI+PC9wYXRoPlxuXHRcdFx0XHRcdDwvc3ZnPiA6IDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cImNpcmNsZVwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtY2lyY2xlIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4em0wIDQ0OGMtMTEwLjUgMC0yMDAtODkuNS0yMDAtMjAwUzE0NS41IDU2IDI1NiA1NnMyMDAgODkuNSAyMDAgMjAwLTg5LjUgMjAwLTIwMCAyMDB6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ29udGVudCgpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbnZhciBSYWRpbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSUmFkaW8nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRhdGFUeXBlOiAnU3RyaW5nJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZVxuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHRoaXMuX19pbml0VmFsdWUoKVxuXHRcdH07XG5cdH0sXG5cdF9faW5pdFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3ZhbHVlID0gbnVsbDtcblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICE9PSBudWxsKXtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRfdmFsdWUgPSAnJztcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wYXJzZVZhbHVlKF92YWx1ZSk7XG5cdH0sXG5cdHBhcnNlVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYod2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKXtcblx0XHRcdHJldHVybiAobmV3IHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSh2YWx1ZSkpLnZhbHVlT2YoKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEYXRhIFR5cGUgT2YgTGlzdCBJcyBOdWxsLicpO1xuXHR9LFxuXHRfX2lzQ2hlY2tlZDogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGl0ZW1bdGhpcy5wcm9wcy52YWx1ZUtleV0pO1xuXHRcdGlmKF92YWx1ZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdF9fb25SYWRpb0l0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBpdGVtKXtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkIHx8IGV2ZW50LmRhdGEuZGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSBldmVudC52YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShpdGVtW3RoaXMucHJvcHMudmFsdWVLZXldKTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0Jykpe1xuXHRcdFx0dmFyIF90ZW1wID0geyBpbmRleDogaW5kZXggfTtcblx0XHRcdF90ZW1wW3RoaXMucHJvcHMudGV4dEtleV0gPSBfdGVtcFt0aGlzLnByb3BzLnZhbHVlS2V5XSA9IGl0ZW07XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fWVsc2V7XG5cdFx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0fVxuXG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLml0ZW1SZW5kZXIgJiYgdGhpcy5wcm9wcy5pdGVtUmVuZGVyKGl0ZW0sIGluZGV4KTtcblx0XHRpZighX3JldHVybikge1xuXHRcdFx0X3JldHVybiA9IGl0ZW1bdGhpcy5wcm9wcy50ZXh0S2V5XTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIDxSYWRpb0l0ZW0ga2V5PXtpbmRleH0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IHsuLi5pdGVtfVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk9PnRoaXMuX19vblJhZGlvSXRlbUNsaWNrKGV2ZW50LCBpdGVtKX1cblx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLl9faXNDaGVja2VkKGl0ZW0pfSAvPjtcblx0fSxcblx0XG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgY2FsbGJhY2spe1xuXHRcdHZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKHZhbHVlKTtcblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWx1ZSB9LCB0aGlzKTtcblx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayh2YWx1ZSwgdGhpcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcmFkaW8nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmFkaW87XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSU2VsZWN0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGFUeXBlOiAnU3RyaW5nJyxcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdG11bHRpcGxlOiBmYWxzZSxcblx0XHRcdHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqVwiXG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdC8vUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUodGhpcy5wcm9wcy52YWx1ZSksIF9jb2xvciA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhICYmIHpuLmlzKHRoaXMucHJvcHMuZGF0YSwgJ2FycmF5JykpIHtcblx0XHRcdGZvcih2YXIgaXRlbSBvZiB0aGlzLnByb3BzLmRhdGEpIHtcblx0XHRcdFx0aWYoaXRlbS52YWx1ZSA9PSBfdmFsdWUpIHtcblx0XHRcdFx0XHRfY29sb3IgPSBpdGVtLmNvbG9yO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjb2xvcjogdGhpcy5wcm9wcy5jb2xvciB8fCBfY29sb3IsXG5cdFx0XHRzdHlsZTogbnVsbCxcblx0XHRcdGNsYXNzTmFtZTogbnVsbCxcblx0XHRcdHZhbHVlOiBfdmFsdWVcblx0XHR9O1xuXHR9LFxuXHRwYXJzZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHRoaXMucHJvcHMubXVsdGlwbGUpe1xuXHRcdFx0c3dpdGNoKHpuLnR5cGUodmFsdWUpKXtcblx0XHRcdFx0Y2FzZSAnYXJyYXknOlxuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdFx0XHRyZXR1cm4gW3ZhbHVlXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYod2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKXtcblx0XHRcdHJldHVybiB3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0odmFsdWUpLnZhbHVlT2YoKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEYXRhIFR5cGUgT2YgTGlzdCBJcyBOdWxsLicpO1xuXHR9LFxuXHRfX29uU2VsZWN0Q2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH0sXG5cdF9fcGFyc2VFeHA6IGZ1bmN0aW9uIChpdGVtLCBleHApe1xuXHRcdGlmKHR5cGVvZiBleHAgPT0gJ3N0cmluZycpe1xuXHRcdFx0aWYoZXhwLmluZGV4T2YoJ3snKSE9LTEpe1xuXHRcdFx0XHRyZXR1cm4gem4uZm9ybWF0KGV4cCwgaXRlbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gaXRlbVtleHBdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZih0eXBlb2YgZXhwID09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiBleHAoaXRlbSk7XG5cdFx0fVxuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF92YWx1ZSwgX3RleHQsIF9pdGVtID0gaXRlbSB8fCB7fTtcblx0XHRpZih6bi5pcyhfaXRlbSwgJ29iamVjdCcpKXtcblx0XHRcdF92YWx1ZSA9IHRoaXMuX19wYXJzZUV4cChfaXRlbSwgdGhpcy5wcm9wcy52YWx1ZUtleSk7XG5cdFx0XHRfdGV4dCA9IHRoaXMuX19wYXJzZUV4cChfaXRlbSwgdGhpcy5wcm9wcy50ZXh0S2V5KTtcblx0XHR9ZWxzZXtcblx0XHRcdF92YWx1ZSA9IF90ZXh0ID0gX2l0ZW07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxvcHRpb24gc3R5bGU9e19pdGVtLnN0eWxlfSBjbGFzc05hbWU9e19pdGVtLmNsYXNzTmFtZX0gZGlzYWJsZWQ9e2l0ZW0uZGlzYWJsZWR9IHNlbGVjdGVkPXt0aGlzLnN0YXRlLnZhbHVlPT1fdmFsdWV9IGtleT17X3ZhbHVlfSB2YWx1ZT17X3ZhbHVlfSBkYXRhLXRleHQ9e190ZXh0fSBkYXRhLXZhbHVlPXtfdmFsdWV9IGRhdGEtY29sb3I9e19pdGVtLmNvbG9yIHx8ICcnfT57X3RleHR9PC9vcHRpb24+O1xuXHR9LFxuXHRfX29uU2VsZWN0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxuXHRcdFx0X2RhdGEgPSBldmVudC50YXJnZXQuY2hpbGROb2Rlc1tfdGFyZ2V0LnNlbGVjdGVkSW5kZXhdLmRhdGFzZXQsXG5cdFx0XHRfdmFsdWUgPSB0aGlzLl9fcGFyc2VFeHAoX2RhdGEsIHRoaXMucHJvcHMudmFsdWVLZXkpIHx8IHRoaXMuX19wYXJzZUV4cChfZGF0YSwgJ3ZhbHVlJyksXG5cdFx0XHRfdGV4dCA9IHRoaXMuX19wYXJzZUV4cChfZGF0YSwgdGhpcy5wcm9wcy50ZXh0S2V5KSB8fCB0aGlzLl9fcGFyc2VFeHAoX2RhdGEsICd0ZXh0Jyk7XG5cblx0XHRldmVudC5zZWxlY3RlZEluZGV4ID0gKCtfdGFyZ2V0LnNlbGVjdGVkSW5kZXggLSAxKTtcblx0XHRldmVudC5kYXRhID0gX2RhdGE7XG5cdFx0ZXZlbnQudmFsdWUgPSBfdmFsdWU7XG5cdFx0ZXZlbnQudGV4dCA9IF90ZXh0O1xuXG5cdFx0aWYoX2RhdGEuY29sb3Ipe1xuXHRcdFx0dGhpcy5zdGF0ZS5jb2xvciA9IF9kYXRhLmNvbG9yO1xuXHRcdH1cblx0XHRpZihfZGF0YS5zdHlsZSkge1xuXHRcdFx0dGhpcy5zdGF0ZS5zdHlsZSA9IF9kYXRhLnN0eWxlO1xuXHRcdH1cblx0XHRpZihfZGF0YS5jbGFzc05hbWUpIHtcblx0XHRcdHRoaXMuc3RhdGUuY2xhc3NOYW1lID0gX2RhdGEuY2xhc3NOYW1lO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoX3ZhbHVlKTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5wYXJzZVZhbHVlKHRoaXMuc3RhdGUudmFsdWUgfHwgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUpO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZSh2YWx1ZSk7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWx1ZSB9LCB0aGlzKTtcblx0fSxcblx0X19yZXNvbHZlU3R5bGU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfc3R5bGUgPSB7fTtcblx0XHRpZih0aGlzLnN0YXRlLmNvbG9yKXtcblx0XHRcdF9zdHlsZS5jb2xvciA9IHRoaXMuc3RhdGUuY29sb3I7XG5cdFx0XHRfc3R5bGUuYm9yZGVyQ29sb3IgPSB0aGlzLnN0YXRlLmNvbG9yO1xuXHRcdH1cblx0XHRpZih0aGlzLnN0YXRlLnN0eWxlKSB7XG5cdFx0XHRfc3R5bGUgPSB6bi5leHRlbmQoX3N0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3N0eWxlO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXNlbGVjdFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfVxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh7fSwgdGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5fX3Jlc29sdmVTdHlsZSgpKX1cblx0XHRcdFx0bmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuXHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cblx0XHRcdFx0bXVsdGlwbGU9e3RoaXMucHJvcHMubXVsdGlwbGV9XG5cdFx0XHRcdHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuXHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cblx0XHRcdFx0cmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZG9ubHl9XG5cdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25TZWxlY3RDaGFuZ2V9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX19vblNlbGVjdENsaWNrfT5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nJyBkaXNhYmxlZD57dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn08L29wdGlvbj5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cdFxuXHRcdFx0PC9zZWxlY3Q+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJVbmNvbnRyb2xDaGVja2JveCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdGxheW91dDogJ2ZsZXgtcm93Jyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uICgpe31cblx0XHR9XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0ZXZlbnQuZGF0YSA9IHRoaXMucHJvcHM7XG5cdFx0ZXZlbnQuc2VuZGVyID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuY29udGVudFJlbmRlciAmJiB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIodGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gdW5kZWZpbmVkIHx8IF9yZXR1cm4gPT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IHRoaXMucHJvcHMudGV4dCB8fCB0aGlzLnByb3BzLmxhYmVsIHx8ICcnO1xuXHRcdH1cblx0XHRpZihfcmV0dXJuKSB7XG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e19yZXR1cm59PC9kaXY+O1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdW5jb250cm9sLWNoZWNrYm94JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gXG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fb25DbGlja30gPlxuXHRcdFx0XHQ8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0vPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5jaGVja2VkID8gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwiY2hlY2stc3F1YXJlXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1jaGVjay1zcXVhcmUgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPlxuXHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQwMEg0OFY4MGgzNTJ2MzUyem0tMzUuODY0LTI0MS43MjRMMTkxLjU0NyAzNjEuNDhjLTQuNzA1IDQuNjY3LTEyLjMwMyA0LjYzNy0xNi45Ny0uMDY4bC05MC43ODEtOTEuNTE2Yy00LjY2Ny00LjcwNS00LjYzNy0xMi4zMDMuMDY5LTE2Ljk3MWwyMi43MTktMjIuNTM2YzQuNzA1LTQuNjY3IDEyLjMwMy00LjYzNyAxNi45Ny4wNjlsNTkuNzkyIDYwLjI3NyAxNDEuMzUyLTE0MC4yMTZjNC43MDUtNC42NjcgMTIuMzAzLTQuNjM3IDE2Ljk3LjA2OGwyMi41MzYgMjIuNzE4YzQuNjY3IDQuNzA2IDQuNjM3IDEyLjMwNC0uMDY4IDE2Ljk3MXpcIj48L3BhdGg+XG5cdFx0XHRcdFx0PC9zdmc+OiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJzcXVhcmVcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXNxdWFyZSBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjUgMzIgMCA1My41IDAgODB2MzUyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OFY4MGMwLTI2LjUtMjEuNS00OC00OC00OHptLTYgNDAwSDU0Yy0zLjMgMC02LTIuNy02LTZWODZjMC0zLjMgMi43LTYgNi02aDM0MGMzLjMgMCA2IDIuNyA2IDZ2MzQwYzAgMy4zLTIuNyA2LTYgNnpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENoZWNrYm94OiByZXF1aXJlKCcuL0NoZWNrYm94JyksXG4gICAgVW5jb250cm9sQ2hlY2tib3g6IHJlcXVpcmUoJy4vVW5jb250cm9sQ2hlY2tib3gnKSxcbiAgICBDaGVja2JveHM6IHJlcXVpcmUoJy4vQ2hlY2tib3hzJyksXG4gICAgUmFkaW86IHJlcXVpcmUoJy4vUmFkaW8nKSxcbiAgICBTZWxlY3Q6IHJlcXVpcmUoJy4vU2VsZWN0JyksXG4gICAgTWVudTogcmVxdWlyZSgnLi9NZW51JyksXG4gICAgUG9wdXBTZWxlY3Q6IHJlcXVpcmUoJy4vUG9wdXBTZWxlY3QnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJ6ci1wb3B1cFwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9