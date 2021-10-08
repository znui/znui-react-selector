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
    return {
      value: this.parseValue(this.props.value)
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
    var _value, _text;

    if (zn.is(item, 'object')) {
      _value = this.__parseExp(item, this.props.valueKey);
      _text = this.__parseExp(item, this.props.textKey);
    } else {
      _value = _text = item;
    }

    return /*#__PURE__*/React.createElement("option", {
      disabled: item.disabled,
      selected: this.state.value == _value,
      key: _value,
      value: _value,
      "data-text": _text,
      "data-value": _value
    }, _text);
  },
  __onSelectChange: function __onSelectChange(event) {
    var _target = event.target,
        _data = event.target.childNodes[_target.selectedIndex].dataset,
        _value = this.__parseExp(_data, this.props.valueKey),
        _text = this.__parseExp(_data, this.props.textKey);

    event.selectedIndex = +_target.selectedIndex - 1;
    event.data = _data;
    event.value = _value;
    event.text = _text;
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
  render: function render() {
    return /*#__PURE__*/React.createElement("select", {
      className: znui.react.classname("zr-select", this.props.className),
      style: this.props.style,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3hzLmpzIiwid2VicGFjazovLy8uL0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9Qb3B1cFNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9SYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vVW5jb250cm9sQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpyLXBvcHVwXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiY2xhc3NOYW1lIiwidGV4dCIsImxheW91dCIsImNoZWNrZWQiLCJkaXNhYmxlZCIsImdldEluaXRpYWxTdGF0ZSIsIl92YWx1ZSIsInByb3BzIiwidmFsdWUiLCJfX29uQ2xpY2siLCJldmVudCIsInN0YXRlIiwiZm9yY2VVcGRhdGUiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwic2V0U3RhdGUiLCJfX29uQ2hhbmdlIiwiX19yZW5kZXJDb250ZW50IiwiX3JldHVybiIsImNvbnRlbnRSZW5kZXIiLCJsYWJlbCIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwic3R5bGUiLCJuYW1lIiwiVW5jb250cm9sQ2hlY2tib3giLCJzcGxpdENoYXIiLCJ0ZXh0S2V5IiwidmFsdWVLZXkiLCJkYXRhVHlwZSIsIl9faW5pdFZhbHVlIiwicGFyc2VWYWx1ZSIsIndpbmRvdyIsInZhbHVlT2YiLCJFcnJvciIsIl9faXNDaGVja2VkIiwiaXRlbSIsImluZGV4Iiwiem4iLCJpcyIsImluZGV4T2YiLCJfYXZhbHVlIiwic3BsaXQiLCJmaWx0ZXIiLCJfX29uSXRlbUNsaWNrIiwiY2hlY2tib3giLCJvbkl0ZW1DbGljayIsIl9fY2xpY2tEZWZhdWx0IiwiX2RhdGEiLCJkYXRhIiwic3BsaWNlIiwicHVzaCIsImpvaW4iLCJfX2l0ZW1SZW5kZXIiLCJfdGVtcCIsIml0ZW1SZW5kZXIiLCJjaGlsZHJlbiIsIl90ZXh0IiwiaWNvbiIsInBvcHVwIiwiTGlzdCIsInBsYWNlaG9sZGVyIiwiZ2V0VGV4dCIsInNldFRleHQiLCJzZXREYXRhIiwiX19yZXNvbHZlVGFyZ2V0IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiX19wb3BvdmVyUmVuZGVyIiwiZHJvcGRvd24iLCJfdGFyZ2V0IiwiX2VsZW1lbnQiLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJwb3B1cFJlbmRlciIsInBvcHVwU2VsZWN0IiwiY29udGV4dCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJfX3ZhbHVlUmVuZGVyIiwidGV4dFJlbmRlciIsIl9fcmVuZGVyIiwibWFwIiwib25Db250YWluZXJFdmVudCIsInBvcG92ZXIiLCJhcHAiLCJzZXNzaW9uIiwianVtcCIsInVzZXIiLCJoZWFkaW1ndXJsIiwiVXNlcm5hbWUiLCJOYW1lIiwibWluV2lkdGgiLCJSYWRpb0l0ZW0iLCJzZW5kZXIiLCJSYWRpbyIsIl9fb25SYWRpb0l0ZW1DbGljayIsImNhbGxiYWNrIiwiUmVhY3RET00iLCJtdWx0aXBsZSIsImNvbXBvbmVudERpZE1vdW50IiwidHlwZSIsIl9fb25TZWxlY3RDbGljayIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiX19wYXJzZUV4cCIsImV4cCIsImZvcm1hdCIsIl9fb25TZWxlY3RDaGFuZ2UiLCJjaGlsZE5vZGVzIiwic2VsZWN0ZWRJbmRleCIsImRhdGFzZXQiLCJmaW5kRE9NTm9kZSIsInJlcXVpcmVkIiwicmVhZG9ubHkiLCJ1bmRlZmluZWQiLCJDaGVja2JveCIsIkNoZWNrYm94cyIsIlNlbGVjdCIsIk1lbnUiLCJQb3B1cFNlbGVjdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFMLElBQWNFLG1CQUFPLENBQUMsb0JBQUQsQ0FBakM7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosS0FBSyxDQUFDSyxXQUFOLENBQWtCO0FBQ2xDQyxhQUFXLEVBQUMsWUFEc0I7QUFFbENDLGlCQUFlLEVBQUUsMkJBQVc7QUFDM0IsV0FBTztBQUNOQyxlQUFTLEVBQUUsRUFETDtBQUVOQyxVQUFJLEVBQUUsRUFGQTtBQUdOQyxZQUFNLEVBQUUsVUFIRjtBQUlOQyxhQUFPLEVBQUUsS0FKSDtBQUtOQyxjQUFRLEVBQUU7QUFMSixLQUFQO0FBT0EsR0FWaUM7QUFX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LENBREo7QUFFYmtDLG1CQUFpQixFQUFFbEMsbUJBQU8sQ0FBQyxtREFBRCxDQUZiO0FBR2IrSCxXQUFTLEVBQUUvSCxtQkFBTyxDQUFDLG1DQUFELENBSEw7QUFJYnlHLE9BQUssRUFBRXpHLG1CQUFPLENBQUMsMkJBQUQsQ0FKRDtBQUtiZ0ksUUFBTSxFQUFFaEksbUJBQU8sQ0FBQyw2QkFBRCxDQUxGO0FBTWJpSSxNQUFJLEVBQUVqSSxtQkFBTyxDQUFDLHlCQUFELENBTkE7QUFPYmtJLGFBQVcsRUFBRWxJLG1CQUFPLENBQUMsdUNBQUQ7QUFQUCxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FsRCxhQUFhLG1DQUFtQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJDaGVja2JveCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdGxheW91dDogJ2ZsZXgtcm93Jyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucHJvcHMuY2hlY2tlZDtcblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICE9IG51bGwpIHtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjaGVja2VkOiBfdmFsdWVcblx0XHR9XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5zdGF0ZS5jaGVja2VkID0gZXZlbnQudmFsdWUgPSBldmVudC5jaGVja2VkID0gIXRoaXMuc3RhdGUuY2hlY2tlZDtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuY2hlY2tlZDtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQ6IHZhbHVlIH0pO1xuXHR9LFxuXHRfX29uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkOiAhdGhpcy5zdGF0ZS5jaGVja2VkIH0pO1xuXHR9LFxuXHRfX3JlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5jb250ZW50UmVuZGVyICYmIHRoaXMucHJvcHMuY29udGVudFJlbmRlcih0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBudWxsKXtcblx0XHRcdF9yZXR1cm4gPSB0aGlzLnByb3BzLnRleHQgfHwgdGhpcy5wcm9wcy5sYWJlbCB8fCAnJztcblx0XHR9XG5cblx0XHRpZihfcmV0dXJuKSB7XG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e19yZXR1cm59PC9kaXY+O1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWNoZWNrYm94JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gXG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fb25DbGlja30gPlxuXHRcdFx0XHQ8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfSBvbkNoYW5nZT17dGhpcy5fX29uQ2hhbmdlfSAvPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2VkID8gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwiY2hlY2stc3F1YXJlXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1jaGVjay1zcXVhcmUgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPlxuXHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQwMEg0OFY4MGgzNTJ2MzUyem0tMzUuODY0LTI0MS43MjRMMTkxLjU0NyAzNjEuNDhjLTQuNzA1IDQuNjY3LTEyLjMwMyA0LjYzNy0xNi45Ny0uMDY4bC05MC43ODEtOTEuNTE2Yy00LjY2Ny00LjcwNS00LjYzNy0xMi4zMDMuMDY5LTE2Ljk3MWwyMi43MTktMjIuNTM2YzQuNzA1LTQuNjY3IDEyLjMwMy00LjYzNyAxNi45Ny4wNjlsNTkuNzkyIDYwLjI3NyAxNDEuMzUyLTE0MC4yMTZjNC43MDUtNC42NjcgMTIuMzAzLTQuNjM3IDE2Ljk3LjA2OGwyMi41MzYgMjIuNzE4YzQuNjY3IDQuNzA2IDQuNjM3IDEyLjMwNC0uMDY4IDE2Ljk3MXpcIj48L3BhdGg+XG5cdFx0XHRcdFx0PC9zdmc+OiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJzcXVhcmVcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXNxdWFyZSBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjUgMzIgMCA1My41IDAgODB2MzUyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OFY4MGMwLTI2LjUtMjEuNS00OC00OC00OHptLTYgNDAwSDU0Yy0zLjMgMC02LTIuNy02LTZWODZjMC0zLjMgMi43LTYgNi02aDM0MGMzLjMgMCA2IDIuNyA2IDZ2MzQwYzAgMy4zLTIuNyA2LTYgNnpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBVbmNvbnRyb2xDaGVja2JveCA9IHJlcXVpcmUoJy4vVW5jb250cm9sQ2hlY2tib3gnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkNoZWNrYm94cycsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNwbGl0Q2hhcjogJywnLFxuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkYXRhVHlwZTogJ1N0cmluZydcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB0aGlzLl9faW5pdFZhbHVlKClcblx0XHR9O1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsKXtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRfdmFsdWUgPSBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3ZhbHVlO1xuXHR9LFxuXHRwYXJzZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSl7XG5cdFx0XHRyZXR1cm4gKG5ldyB3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0odmFsdWUpKS52YWx1ZU9mKCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRocm93IG5ldyBFcnJvcignRGF0YSBUeXBlIE9mIExpc3QgSXMgTnVsbC4nKTtcblx0fSxcblx0X19pc0NoZWNrZWQ6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF92YWx1ZSA9IGl0ZW1bdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0aWYoem4uaXModGhpcy5zdGF0ZS52YWx1ZSwgJ2FycmF5Jykpe1xuXHRcdFx0aWYodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHR2YXIgX2F2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUuc3BsaXQodGhpcy5wcm9wcy5zcGxpdENoYXIpLmZpbHRlcigodmFsdWUpPT4hIXZhbHVlKTtcblx0XHRcdGlmKF9hdmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX29uSXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGNoZWNrYm94KXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25JdGVtQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkl0ZW1DbGljayhldmVudCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9fY2xpY2tEZWZhdWx0KGV2ZW50KTtcblx0XHR9XG5cdH0sXG5cdF9fY2xpY2tEZWZhdWx0OiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGEsXG5cdFx0XHRfdmFsdWUgPSBfZGF0YVt0aGlzLnByb3BzLnZhbHVlS2V5XTtcblx0XHRpZih6bi5pcyh0aGlzLnN0YXRlLnZhbHVlLCAnYXJyYXknKSkge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnNwbGljZSh0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSwgMSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHR2YXIgX2F2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUuc3BsaXQodGhpcy5wcm9wcy5zcGxpdENoYXIpLmZpbHRlcigodmFsdWUpPT4hIXZhbHVlKTtcblx0XHRcdGlmKF9hdmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0X2F2YWx1ZS5zcGxpY2UoX2F2YWx1ZS5pbmRleE9mKF92YWx1ZSksIDEpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdF9hdmFsdWUucHVzaChfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IF9hdmFsdWUuam9pbih0aGlzLnByb3BzLnNwbGl0Q2hhcik7XG5cdFx0fVxuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0Jykpe1xuXHRcdFx0dmFyIF90ZW1wID0geyBpbmRleDogaW5kZXggfTtcblx0XHRcdF90ZW1wW3RoaXMucHJvcHMudGV4dEtleV0gPSBfdGVtcFt0aGlzLnByb3BzLnZhbHVlS2V5XSA9IGl0ZW07XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fWVsc2V7XG5cdFx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0fVxuXG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLml0ZW1SZW5kZXIgJiYgdGhpcy5wcm9wcy5pdGVtUmVuZGVyKGl0ZW0sIGluZGV4KTtcblx0XHRpZighX3JldHVybikge1xuXHRcdFx0X3JldHVybiA9IGl0ZW1bdGhpcy5wcm9wcy50ZXh0S2V5XTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIDxVbmNvbnRyb2xDaGVja2JveCBrZXk9e2luZGV4fVxuXHRcdFx0XHRcdGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRcdGNvbnRlbnRSZW5kZXI9e3RoaXMucHJvcHMuY29udGVudFJlbmRlcn1cblx0XHRcdFx0XHR7Li4uaXRlbX1cblx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLl9faXNDaGVja2VkKGl0ZW0sIGluZGV4KX0gXG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KT0+dGhpcy5fX29uSXRlbUNsaWNrKGV2ZW50LCBpdGVtKX0vPjtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItY2hlY2tib3hzXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSU2VsZWN0TGlzdCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNwbGl0Q2hhcjogJywnLFxuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkYXRhVHlwZTogJ1N0cmluZydcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB0aGlzLl9faW5pdFZhbHVlKClcblx0XHR9O1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsKXtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRfdmFsdWUgPSBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3ZhbHVlO1xuXHR9LFxuXHRwYXJzZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSl7XG5cdFx0XHRyZXR1cm4gKG5ldyB3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0odmFsdWUpKS52YWx1ZU9mKCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRocm93IG5ldyBFcnJvcignRGF0YSBUeXBlIE9mIExpc3QgSXMgTnVsbC4nKTtcblx0fSxcblx0X19pc0NoZWNrZWQ6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF92YWx1ZSA9IGl0ZW1bdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0aWYoem4uaXModGhpcy5zdGF0ZS52YWx1ZSwgJ2FycmF5Jykpe1xuXHRcdFx0aWYodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHR2YXIgX2F2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUuc3BsaXQodGhpcy5wcm9wcy5zcGxpdENoYXIpLmZpbHRlcigodmFsdWUpPT4hIXZhbHVlKTtcblx0XHRcdGlmKF9hdmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX29uSXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGNoZWNrYm94KXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25JdGVtQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkl0ZW1DbGljayhldmVudCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9fY2xpY2tEZWZhdWx0KGV2ZW50KTtcblx0XHR9XG5cdH0sXG5cdF9fY2xpY2tEZWZhdWx0OiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGEsXG5cdFx0XHRfdmFsdWUgPSBfZGF0YVt0aGlzLnByb3BzLnZhbHVlS2V5XTtcblx0XHRpZih6bi5pcyh0aGlzLnN0YXRlLnZhbHVlLCAnYXJyYXknKSkge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnNwbGljZSh0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSwgMSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHR2YXIgX2F2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUuc3BsaXQodGhpcy5wcm9wcy5zcGxpdENoYXIpLmZpbHRlcigodmFsdWUpPT4hIXZhbHVlKTtcblx0XHRcdGlmKF9hdmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0X2F2YWx1ZS5zcGxpY2UoX2F2YWx1ZS5pbmRleE9mKF92YWx1ZSksIDEpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdF9hdmFsdWUucHVzaChfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IF9hdmFsdWUuam9pbih0aGlzLnByb3BzLnNwbGl0Q2hhcik7XG5cdFx0fVxuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbkl0ZW1DbGljazogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0Jykpe1xuXHRcdFx0dmFyIF90ZW1wID0geyBpbmRleDogaW5kZXggfTtcblx0XHRcdF90ZW1wW3RoaXMucHJvcHMudGV4dEtleV0gPSBfdGVtcFt0aGlzLnByb3BzLnZhbHVlS2V5XSA9IGl0ZW07XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fWVsc2V7XG5cdFx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0fVxuXG5cdFx0dmFyIF90ZXh0ID0gaXRlbVt0aGlzLnByb3BzLnRleHRLZXldO1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5pdGVtUmVuZGVyICYmIHRoaXMucHJvcHMuaXRlbVJlbmRlcihpdGVtLCBpbmRleCk7XG5cdFx0aWYoIV9yZXR1cm4pIHtcblx0XHRcdF9yZXR1cm4gPSAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0e2l0ZW0uaWNvbiAmJiA8aSBjbGFzc05hbWU9e1wiZmEgXCIgKyBpdGVtLmljb259IC8+fVxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e190ZXh0fTwvc3Bhbj5cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC1pdGVtXCIgb25DbGljaz17KGV2ZW50KT0+dGhpcy5fX29uSXRlbUNsaWNrKGV2ZW50LCBpdGVtLCBpbmRleCl9PntfcmV0dXJufTwvbGk+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dWwgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1zZWxlY3QtbGlzdFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cblx0XHRcdDwvdWw+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xudmFyIExpc3QgPSByZXF1aXJlKCcuL0xpc3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlBvcHVwU2VsZWN0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIlxuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQ6IHRoaXMucHJvcHMudGV4dCxcblx0XHRcdHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG5cdFx0fVxuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoeyB2YWx1ZTogdmFsdWUgfSwgdGhpcyk7XG5cdH0sXG5cdGdldFRleHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS50ZXh0O1xuXHR9LFxuXHRzZXRUZXh0OiBmdW5jdGlvbiAodGV4dCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR0ZXh0OiB0ZXh0XG5cdFx0fSk7XG5cdH0sXG5cdHNldERhdGE6IGZ1bmN0aW9uICh2YWx1ZSwgdGV4dCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR0ZXh0OiB0ZXh0XG5cdFx0fSk7XG5cdH0sXG5cdF9fcmVzb2x2ZVRhcmdldDogZnVuY3Rpb24gKHRhcmdldCl7XG5cdFx0aWYodGFyZ2V0KXtcblx0XHRcdGlmKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtdGV4dCcpKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX19yZXNvbHZlVGFyZ2V0KHRhcmdldC5wYXJlbnROb2RlKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19wb3BvdmVyUmVuZGVyOiBmdW5jdGlvbiAoZXZlbnQsIGRyb3Bkb3duKXtcblxuXHRcdHZhciBfdGFyZ2V0ID0gdGhpcy5fX3Jlc29sdmVUYXJnZXQoZXZlbnQudGFyZ2V0KTtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnBvcHVwUmVuZGVyLCB7XG5cdFx0XHR2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcblx0XHRcdHRleHQ6IHRoaXMuc3RhdGUudGV4dCxcblx0XHRcdGV2ZW50OiBldmVudCxcblx0XHRcdGRyb3Bkb3duOiBkcm9wZG93bixcblx0XHRcdHBvcHVwU2VsZWN0OiB0aGlzXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblxuXHRcdGlmKCFfZWxlbWVudCAmJiB0aGlzLnByb3BzLmRhdGEpe1xuXHRcdCBcdF9lbGVtZW50ID0gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1wb3BvdmVyXCI+XG5cdFx0XHRcdFx0PExpc3Qgc3BsaXRDaGFyPXt0aGlzLnByb3BzLnNwbGl0Q2hhcn0gXG5cdFx0XHRcdFx0XHR0ZXh0S2V5PXt0aGlzLnByb3BzLnRleHRLZXl9XG5cdFx0XHRcdFx0XHR2YWx1ZUtleT17dGhpcy5wcm9wcy52YWx1ZUtleX1cblx0XHRcdFx0XHRcdGRhdGFUeXBlPXt0aGlzLnByb3BzLmRhdGFUeXBlfVxuXHRcdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy5kYXRhfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3sgd2lkdGg6IF90YXJnZXQub2Zmc2V0V2lkdGggfX0gY2xhc3NOYW1lPVwic2VsZWN0LXBvcG92ZXJcIj57X2VsZW1lbnR9PC9kaXY+O1xuXHR9LFxuXHRfX3ZhbHVlUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnRleHRSZW5kZXIsIHtcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0cG9wdXBTZWxlY3Q6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0XHRfZWxlbWVudCA9IHRoaXMuc3RhdGUudGV4dCB8fCB0aGlzLnByb3BzLnBsYWNlaG9sZGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC10ZXh0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPntfZWxlbWVudH08L2Rpdj5cblx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiY2FyZXQtZG93blwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWNhcmV0LWRvd24gZmEtdy0xMCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTMxLjMgMTkyaDI1Ny4zYzE3LjggMCAyNi43IDIxLjUgMTQuMSAzNC4xTDE3NC4xIDM1NC44Yy03LjggNy44LTIwLjUgNy44LTI4LjMgMEwxNy4yIDIyNi4xQzQuNiAyMTMuNSAxMy41IDE5MiAzMS4zIDE5MnpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxwb3B1cC5Ecm9wZG93biBcblx0XHRcdFx0cG9wb3Zlcj17e1xuXHRcdFx0XHRcdHJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwienItc2VsZWN0LW1lbnUtZHJvcGRvd24tbGlzdFwiPlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ+i0puWPt+S/oeaBrycsIGljb246ICdmYS11c2VyLWNpcmNsZScgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ+S8geS4muiupOivgScsIGljb246ICdmYS1kcml2ZXJzLWxpY2Vuc2UtbycgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ+S8geS4mumCgOivtycsIGljb246ICdmYS1kZWFmJyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAn5Z+65pys6K6+572uJywgaWNvbjogJ2ZhLXNsaWRlcnMnIH1cblx0XHRcdFx0XHRcdFx0XHRcdF0ubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtcImljb24gZmEgXCIgKyBpdGVtLmljb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPntpdGVtLmxhYmVsfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b25Db250YWluZXJFdmVudDogZnVuY3Rpb24gKGV2ZW50LCBwb3BvdmVyKXtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXItc2Vzc2lvblwiID5cblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cImF2YXRhclwiIG9uQ2xpY2s9eygpPT56bnVpLmFwcC5zZXNzaW9uLmp1bXAoJy9tYWluL215L2luZm8nKX0+XG5cdFx0XHRcdFx0XHQ8aW1nIGRhdGEtenItcG9wdXAtdG9vbHRpcD1cIuafpeeci+aIkeeahOS4quS6uuS/oeaBr1wiIHNyYz17dGhpcy5zdGF0ZS51c2VyLmhlYWRpbWd1cmwgfHwgJy4uL19jb20vaW1hZ2VzL2xvZ28tMTI4LnBuZyd9IC8+XG5cdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt0aGlzLnN0YXRlLnVzZXIuVXNlcm5hbWUgfHwgdGhpcy5zdGF0ZS51c2VyLk5hbWV9PC9zcGFuPlxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvcG9wdXAuRHJvcGRvd24+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8cG9wdXAuRHJvcGRvd24gXG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1zZWxlY3QtbWVudVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgKHRoaXMucHJvcHMuZGlzYWJsZWQ/J2Rpc2FibGVkJzonJykpfVxuXHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0cG9wb3Zlcj17e1xuXHRcdFx0XHRcdHJlbmRlcjogdGhpcy5fX3BvcG92ZXJSZW5kZXIsXG5cdFx0XHRcdFx0b25Db250YWluZXJFdmVudDogZnVuY3Rpb24gKGV2ZW50LCBwb3BvdmVyKXtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH19PlxuXHRcdFx0XHR7dGhpcy5fX3ZhbHVlUmVuZGVyKCl9XG5cdFx0XHQ8L3BvcHVwLkRyb3Bkb3duPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSUG9wdXBTZWxlY3QnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogJycsXG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqVwiXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogdGhpcy5wcm9wcy50ZXh0LFxuXHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudmFsdWVcblx0XHR9XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWx1ZSB9LCB0aGlzKTtcblx0fSxcblx0Z2V0VGV4dDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnRleHQ7XG5cdH0sXG5cdHNldFRleHQ6IGZ1bmN0aW9uICh0ZXh0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHRleHQ6IHRleHRcblx0XHR9KTtcblx0fSxcblx0c2V0RGF0YTogZnVuY3Rpb24gKHZhbHVlLCB0ZXh0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdHRleHQ6IHRleHRcblx0XHR9KTtcblx0fSxcblx0X19yZXNvbHZlVGFyZ2V0OiBmdW5jdGlvbiAodGFyZ2V0KXtcblx0XHRpZih0YXJnZXQpe1xuXHRcdFx0aWYoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC10ZXh0Jykpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fX3Jlc29sdmVUYXJnZXQodGFyZ2V0LnBhcmVudE5vZGUpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX3BvcG92ZXJSZW5kZXI6IGZ1bmN0aW9uIChldmVudCwgZHJvcGRvd24pe1xuXHRcdHZhciBfdGFyZ2V0ID0gdGhpcy5fX3Jlc29sdmVUYXJnZXQoZXZlbnQudGFyZ2V0KTtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnBvcHVwUmVuZGVyLCB7XG5cdFx0XHR2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcblx0XHRcdHRleHQ6IHRoaXMuc3RhdGUudGV4dCxcblx0XHRcdGV2ZW50OiBldmVudCxcblx0XHRcdGRyb3Bkb3duOiBkcm9wZG93bixcblx0XHRcdHBvcHVwU2VsZWN0OiB0aGlzXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblxuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0IFx0X2VsZW1lbnQgPSAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXBvcG92ZXJcIj5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIHx8IF90YXJnZXQub2Zmc2V0V2lkdGgsIG1pbldpZHRoOiB0aGlzLnByb3BzLm1pbldpZHRoIH19IGNsYXNzTmFtZT1cInNlbGVjdC1wb3BvdmVyXCI+e19lbGVtZW50fTwvZGl2Pjtcblx0fSxcblx0X192YWx1ZVJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy50ZXh0UmVuZGVyLCB7XG5cdFx0XHR2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcblx0XHRcdHRleHQ6IHRoaXMuc3RhdGUudGV4dCxcblx0XHRcdHBvcHVwU2VsZWN0OiB0aGlzXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0XHRpZighX2VsZW1lbnQpe1xuXHRcdFx0X2VsZW1lbnQgPSB0aGlzLnN0YXRlLnRleHQgfHwgdGhpcy5zdGF0ZS52YWx1ZSB8fCB0aGlzLnByb3BzLnBsYWNlaG9sZGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC10ZXh0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPntfZWxlbWVudH08L2Rpdj5cblx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiY2FyZXQtZG93blwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWNhcmV0LWRvd24gZmEtdy0xMCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTMxLjMgMTkyaDI1Ny4zYzE3LjggMCAyNi43IDIxLjUgMTQuMSAzNC4xTDE3NC4xIDM1NC44Yy03LjggNy44LTIwLjUgNy44LTI4LjMgMEwxNy4yIDIyNi4xQzQuNiAyMTMuNSAxMy41IDE5MiAzMS4zIDE5MnpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxwb3B1cC5Ecm9wZG93biBcblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLXNlbGVjdFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgKHRoaXMucHJvcHMuZGlzYWJsZWQ/J2Rpc2FibGVkJzonJykpfVxuXHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0cG9wb3Zlcj17e1xuXHRcdFx0XHRcdHJlbmRlcjogdGhpcy5fX3BvcG92ZXJSZW5kZXIsXG5cdFx0XHRcdFx0b25Db250YWluZXJFdmVudDogZnVuY3Rpb24gKGV2ZW50LCBwb3BvdmVyKXtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH19PlxuXHRcdFx0XHR7dGhpcy5fX3ZhbHVlUmVuZGVyKCl9XG5cdFx0XHQ8L3BvcHVwLkRyb3Bkb3duPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUmFkaW9JdGVtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJSYWRpb0l0ZW0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdGRpc2FibGVkOiBmYWxzZVxuXHRcdH1cblx0fSxcblx0X19vbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRldmVudC5kYXRhID0gdGhpcy5wcm9wcztcblx0XHRldmVudC5zZW5kZXIgPSB0aGlzO1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX3JlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5jb250ZW50UmVuZGVyICYmIHRoaXMucHJvcHMuY29udGVudFJlbmRlcih0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBudWxsKXtcblx0XHRcdF9yZXR1cm4gPSB0aGlzLnByb3BzLnRleHQgfHwgdGhpcy5wcm9wcy5sYWJlbCB8fCcnO1xuXHRcdH1cblxuXHRcdGlmKF9yZXR1cm4pIHtcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57X3JldHVybn08L2Rpdj47XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcmFkaW8taXRlbScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gb25DbGljaz17dGhpcy5fX29uQ2xpY2t9IGRhdGEtZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IGRhdGEtY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfT5cblx0XHRcdFx0PGlucHV0IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gdHlwZT0ncmFkaW8nIGRlZmF1bHRDaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSAvPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5jaGVja2VkID8gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwiZG90LWNpcmNsZVwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZG90LWNpcmNsZSBmYS13LTE2IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+XG5cdFx0XHRcdFx0XHQ8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgNTZjMTEwLjUzMiAwIDIwMCA4OS40NTEgMjAwIDIwMCAwIDExMC41MzItODkuNDUxIDIwMC0yMDAgMjAwLTExMC41MzIgMC0yMDAtODkuNDUxLTIwMC0yMDAgMC0xMTAuNTMyIDg5LjQ1MS0yMDAgMjAwLTIwMG0wLTQ4QzExOS4wMzMgOCA4IDExOS4wMzMgOCAyNTZzMTExLjAzMyAyNDggMjQ4IDI0OCAyNDgtMTExLjAzMyAyNDgtMjQ4UzM5Mi45NjcgOCAyNTYgOHptMCAxNjhjLTQ0LjE4MyAwLTgwIDM1LjgxNy04MCA4MHMzNS44MTcgODAgODAgODAgODAtMzUuODE3IDgwLTgwLTM1LjgxNy04MC04MC04MHpcIj48L3BhdGg+XG5cdFx0XHRcdFx0PC9zdmc+IDogPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwiY2lyY2xlXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1jaXJjbGUgZmEtdy0xNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6bTAgNDQ4Yy0xMTAuNSAwLTIwMC04OS41LTIwMC0yMDBTMTQ1LjUgNTYgMjU2IDU2czIwMCA4OS41IDIwMCAyMDAtODkuNSAyMDAtMjAwIDIwMHpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxudmFyIFJhZGlvID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJSYWRpbycsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHRLZXk6ICd0ZXh0Jyxcblx0XHRcdHZhbHVlS2V5OiAndmFsdWUnLFxuXHRcdFx0ZGF0YVR5cGU6ICdTdHJpbmcnLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdGhpcy5fX2luaXRWYWx1ZSgpXG5cdFx0fTtcblx0fSxcblx0X19pbml0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSBudWxsO1xuXHRcdGlmKHRoaXMucHJvcHMudmFsdWUgIT09IG51bGwpe1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblx0XHR9ZWxzZXtcblx0XHRcdF92YWx1ZSA9ICcnO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhcnNlVmFsdWUoX3ZhbHVlKTtcblx0fSxcblx0cGFyc2VWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0pe1xuXHRcdFx0cmV0dXJuIChuZXcgd2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKHZhbHVlKSkudmFsdWVPZigpO1xuXHRcdH1cblx0XHRcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgVHlwZSBPZiBMaXN0IElzIE51bGwuJyk7XG5cdH0sXG5cdF9faXNDaGVja2VkOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoaXRlbVt0aGlzLnByb3BzLnZhbHVlS2V5XSk7XG5cdFx0aWYoX3ZhbHVlID09PSB0aGlzLnN0YXRlLnZhbHVlKXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSxcblx0X19vblJhZGlvSXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0pe1xuXHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgZXZlbnQuZGF0YS5kaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IGV2ZW50LnZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGl0ZW1bdGhpcy5wcm9wcy52YWx1ZUtleV0pO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGl0ZW0sICdvYmplY3QnKSl7XG5cdFx0XHR2YXIgX3RlbXAgPSB7IGluZGV4OiBpbmRleCB9O1xuXHRcdFx0X3RlbXBbdGhpcy5wcm9wcy50ZXh0S2V5XSA9IF90ZW1wW3RoaXMucHJvcHMudmFsdWVLZXldID0gaXRlbTtcblx0XHRcdGl0ZW0gPSBfdGVtcDtcblx0XHR9ZWxzZXtcblx0XHRcdGl0ZW0uaW5kZXggPSBpbmRleDtcblx0XHR9XG5cblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuaXRlbVJlbmRlciAmJiB0aGlzLnByb3BzLml0ZW1SZW5kZXIoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKCFfcmV0dXJuKSB7XG5cdFx0XHRfcmV0dXJuID0gaXRlbVt0aGlzLnByb3BzLnRleHRLZXldO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gPFJhZGlvSXRlbSBrZXk9e2luZGV4fSBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gey4uLml0ZW19XG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KT0+dGhpcy5fX29uUmFkaW9JdGVtQ2xpY2soZXZlbnQsIGl0ZW0pfVxuXHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuX19pc0NoZWNrZWQoaXRlbSl9IC8+O1xuXHR9LFxuXHRcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCBjYWxsYmFjayl7XG5cdFx0dmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUodmFsdWUpO1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgdmFsdWU6IHZhbHVlIH0sIHRoaXMpO1xuXHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKHZhbHVlLCB0aGlzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1yYWRpbycsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSYWRpbztcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJTZWxlY3QnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGF0YVR5cGU6ICdTdHJpbmcnLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHRcdHRleHRLZXk6ICd0ZXh0Jyxcblx0XHRcdHZhbHVlS2V5OiAndmFsdWUnLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0bXVsdGlwbGU6IGZhbHNlLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCJcblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0Ly9SZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB0aGlzLnBhcnNlVmFsdWUodGhpcy5wcm9wcy52YWx1ZSlcblx0XHR9XG5cdH0sXG5cdHBhcnNlVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodGhpcy5wcm9wcy5tdWx0aXBsZSl7XG5cdFx0XHRzd2l0Y2goem4udHlwZSh2YWx1ZSkpe1xuXHRcdFx0XHRjYXNlICdhcnJheSc6XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0XHRcdHJldHVybiBbdmFsdWVdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZih3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0pe1xuXHRcdFx0cmV0dXJuIHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSh2YWx1ZSkudmFsdWVPZigpO1xuXHRcdH1cblx0XHRcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgVHlwZSBPZiBMaXN0IElzIE51bGwuJyk7XG5cdH0sXG5cdF9fb25TZWxlY3RDbGljazogZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fSxcblx0X19wYXJzZUV4cDogZnVuY3Rpb24gKGl0ZW0sIGV4cCl7XG5cdFx0aWYodHlwZW9mIGV4cCA9PSAnc3RyaW5nJyl7XG5cdFx0XHRpZihleHAuaW5kZXhPZigneycpIT0tMSl7XG5cdFx0XHRcdHJldHVybiB6bi5mb3JtYXQoZXhwLCBpdGVtKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBpdGVtW2V4cF07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmKHR5cGVvZiBleHAgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIGV4cChpdGVtKTtcblx0XHR9XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3ZhbHVlLCBfdGV4dDtcblx0XHRpZih6bi5pcyhpdGVtLCAnb2JqZWN0Jykpe1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5fX3BhcnNlRXhwKGl0ZW0sIHRoaXMucHJvcHMudmFsdWVLZXkpO1xuXHRcdFx0X3RleHQgPSB0aGlzLl9fcGFyc2VFeHAoaXRlbSwgdGhpcy5wcm9wcy50ZXh0S2V5KTtcblx0XHR9ZWxzZXtcblx0XHRcdF92YWx1ZSA9IF90ZXh0ID0gaXRlbTtcblx0XHR9XG5cblx0XHRyZXR1cm4gPG9wdGlvbiBkaXNhYmxlZD17aXRlbS5kaXNhYmxlZH0gc2VsZWN0ZWQ9e3RoaXMuc3RhdGUudmFsdWU9PV92YWx1ZX0ga2V5PXtfdmFsdWV9IHZhbHVlPXtfdmFsdWV9IGRhdGEtdGV4dD17X3RleHR9IGRhdGEtdmFsdWU9e192YWx1ZX0+e190ZXh0fTwvb3B0aW9uPjtcblx0fSxcblx0X19vblNlbGVjdENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX3RhcmdldCA9IGV2ZW50LnRhcmdldCxcblx0XHRcdF9kYXRhID0gZXZlbnQudGFyZ2V0LmNoaWxkTm9kZXNbX3RhcmdldC5zZWxlY3RlZEluZGV4XS5kYXRhc2V0LFxuXHRcdFx0X3ZhbHVlID0gdGhpcy5fX3BhcnNlRXhwKF9kYXRhLCB0aGlzLnByb3BzLnZhbHVlS2V5KSxcblx0XHRcdF90ZXh0ID0gdGhpcy5fX3BhcnNlRXhwKF9kYXRhLCB0aGlzLnByb3BzLnRleHRLZXkpO1xuXG5cdFx0ZXZlbnQuc2VsZWN0ZWRJbmRleCA9ICgrX3RhcmdldC5zZWxlY3RlZEluZGV4IC0gMSk7XG5cdFx0ZXZlbnQuZGF0YSA9IF9kYXRhO1xuXHRcdGV2ZW50LnZhbHVlID0gX3ZhbHVlO1xuXHRcdGV2ZW50LnRleHQgPSBfdGV4dDtcblxuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoX3ZhbHVlKTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5wYXJzZVZhbHVlKHRoaXMuc3RhdGUudmFsdWUgfHwgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUpO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZSh2YWx1ZSk7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWx1ZSB9LCB0aGlzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1zZWxlY3RcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfVxuXHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0bmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuXHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cblx0XHRcdFx0bXVsdGlwbGU9e3RoaXMucHJvcHMubXVsdGlwbGV9XG5cdFx0XHRcdHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuXHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cblx0XHRcdFx0cmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZG9ubHl9XG5cdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25TZWxlY3RDaGFuZ2V9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX19vblNlbGVjdENsaWNrfT5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nJyBkaXNhYmxlZD57dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn08L29wdGlvbj5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cdFxuXHRcdFx0PC9zZWxlY3Q+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJVbmNvbnRyb2xDaGVja2JveCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdGxheW91dDogJ2ZsZXgtcm93Jyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uICgpe31cblx0XHR9XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0ZXZlbnQuZGF0YSA9IHRoaXMucHJvcHM7XG5cdFx0ZXZlbnQuc2VuZGVyID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuY29udGVudFJlbmRlciAmJiB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIodGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gdW5kZWZpbmVkIHx8IF9yZXR1cm4gPT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IHRoaXMucHJvcHMudGV4dCB8fCB0aGlzLnByb3BzLmxhYmVsIHx8ICcnO1xuXHRcdH1cblx0XHRpZihfcmV0dXJuKSB7XG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e19yZXR1cm59PC9kaXY+O1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdW5jb250cm9sLWNoZWNrYm94JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gXG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fb25DbGlja30gPlxuXHRcdFx0XHQ8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0vPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5jaGVja2VkID8gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwiY2hlY2stc3F1YXJlXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1jaGVjay1zcXVhcmUgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPlxuXHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQwMEg0OFY4MGgzNTJ2MzUyem0tMzUuODY0LTI0MS43MjRMMTkxLjU0NyAzNjEuNDhjLTQuNzA1IDQuNjY3LTEyLjMwMyA0LjYzNy0xNi45Ny0uMDY4bC05MC43ODEtOTEuNTE2Yy00LjY2Ny00LjcwNS00LjYzNy0xMi4zMDMuMDY5LTE2Ljk3MWwyMi43MTktMjIuNTM2YzQuNzA1LTQuNjY3IDEyLjMwMy00LjYzNyAxNi45Ny4wNjlsNTkuNzkyIDYwLjI3NyAxNDEuMzUyLTE0MC4yMTZjNC43MDUtNC42NjcgMTIuMzAzLTQuNjM3IDE2Ljk3LjA2OGwyMi41MzYgMjIuNzE4YzQuNjY3IDQuNzA2IDQuNjM3IDEyLjMwNC0uMDY4IDE2Ljk3MXpcIj48L3BhdGg+XG5cdFx0XHRcdFx0PC9zdmc+OiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJzcXVhcmVcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXNxdWFyZSBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjUgMzIgMCA1My41IDAgODB2MzUyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OFY4MGMwLTI2LjUtMjEuNS00OC00OC00OHptLTYgNDAwSDU0Yy0zLjMgMC02LTIuNy02LTZWODZjMC0zLjMgMi43LTYgNi02aDM0MGMzLjMgMCA2IDIuNyA2IDZ2MzQwYzAgMy4zLTIuNyA2LTYgNnpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENoZWNrYm94OiByZXF1aXJlKCcuL0NoZWNrYm94JyksXG4gICAgVW5jb250cm9sQ2hlY2tib3g6IHJlcXVpcmUoJy4vVW5jb250cm9sQ2hlY2tib3gnKSxcbiAgICBDaGVja2JveHM6IHJlcXVpcmUoJy4vQ2hlY2tib3hzJyksXG4gICAgUmFkaW86IHJlcXVpcmUoJy4vUmFkaW8nKSxcbiAgICBTZWxlY3Q6IHJlcXVpcmUoJy4vU2VsZWN0JyksXG4gICAgTWVudTogcmVxdWlyZSgnLi9NZW51JyksXG4gICAgUG9wdXBTZWxlY3Q6IHJlcXVpcmUoJy4vUG9wdXBTZWxlY3QnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJ6ci1wb3B1cFwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9