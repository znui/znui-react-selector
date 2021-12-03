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
      color: null,
      style: null,
      className: null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3hzLmpzIiwid2VicGFjazovLy8uL0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9Qb3B1cFNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9SYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vVW5jb250cm9sQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpyLXBvcHVwXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiY2xhc3NOYW1lIiwidGV4dCIsImxheW91dCIsImNoZWNrZWQiLCJkaXNhYmxlZCIsImdldEluaXRpYWxTdGF0ZSIsIl92YWx1ZSIsInByb3BzIiwidmFsdWUiLCJfX29uQ2xpY2siLCJldmVudCIsInN0YXRlIiwiZm9yY2VVcGRhdGUiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwic2V0U3RhdGUiLCJfX29uQ2hhbmdlIiwiX19yZW5kZXJDb250ZW50IiwiX3JldHVybiIsImNvbnRlbnRSZW5kZXIiLCJsYWJlbCIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwic3R5bGUiLCJuYW1lIiwiVW5jb250cm9sQ2hlY2tib3giLCJzcGxpdENoYXIiLCJ0ZXh0S2V5IiwidmFsdWVLZXkiLCJkYXRhVHlwZSIsIl9faW5pdFZhbHVlIiwicGFyc2VWYWx1ZSIsIndpbmRvdyIsInZhbHVlT2YiLCJFcnJvciIsIl9faXNDaGVja2VkIiwiaXRlbSIsImluZGV4IiwidG9TdHJpbmciLCJ6biIsImlzIiwiaW5kZXhPZiIsIl9hdmFsdWUiLCJzcGxpdCIsImZpbHRlciIsIl9fb25JdGVtQ2xpY2siLCJjaGVja2JveCIsIm9uSXRlbUNsaWNrIiwiX19jbGlja0RlZmF1bHQiLCJfZGF0YSIsImRhdGEiLCJzcGxpY2UiLCJwdXNoIiwiam9pbiIsIl9faXRlbVJlbmRlciIsIl90ZW1wIiwiaXRlbVJlbmRlciIsImNoaWxkcmVuIiwiX3RleHQiLCJpY29uIiwicG9wdXAiLCJMaXN0IiwicGxhY2Vob2xkZXIiLCJnZXRUZXh0Iiwic2V0VGV4dCIsInNldERhdGEiLCJfX3Jlc29sdmVUYXJnZXQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJfX3BvcG92ZXJSZW5kZXIiLCJkcm9wZG93biIsIl90YXJnZXQiLCJfZWxlbWVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsInBvcHVwUmVuZGVyIiwicG9wdXBTZWxlY3QiLCJjb250ZXh0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsIl9fdmFsdWVSZW5kZXIiLCJ0ZXh0UmVuZGVyIiwiX19yZW5kZXIiLCJtYXAiLCJvbkNvbnRhaW5lckV2ZW50IiwicG9wb3ZlciIsImFwcCIsInNlc3Npb24iLCJqdW1wIiwidXNlciIsImhlYWRpbWd1cmwiLCJVc2VybmFtZSIsIk5hbWUiLCJtaW5XaWR0aCIsIlJhZGlvSXRlbSIsInNlbmRlciIsIlJhZGlvIiwiX19vblJhZGlvSXRlbUNsaWNrIiwiY2FsbGJhY2siLCJSZWFjdERPTSIsIm11bHRpcGxlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb2xvciIsInR5cGUiLCJfX29uU2VsZWN0Q2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIl9fcGFyc2VFeHAiLCJleHAiLCJmb3JtYXQiLCJfaXRlbSIsIl9fb25TZWxlY3RDaGFuZ2UiLCJjaGlsZE5vZGVzIiwic2VsZWN0ZWRJbmRleCIsImRhdGFzZXQiLCJmaW5kRE9NTm9kZSIsIl9fcmVzb2x2ZVN0eWxlIiwiX3N0eWxlIiwiYm9yZGVyQ29sb3IiLCJleHRlbmQiLCJyZXF1aXJlZCIsInJlYWRvbmx5IiwidW5kZWZpbmVkIiwiQ2hlY2tib3giLCJDaGVja2JveHMiLCJTZWxlY3QiLCJNZW51IiwiUG9wdXBTZWxlY3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBTCxJQUFjRSxtQkFBTyxDQUFDLG9CQUFELENBQWpDOztBQUVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLEtBQUssQ0FBQ0ssV0FBTixDQUFrQjtBQUNsQ0MsYUFBVyxFQUFDLFlBRHNCO0FBRWxDQyxpQkFBZSxFQUFFLDJCQUFXO0FBQzNCLFdBQU87QUFDTkMsZUFBUyxFQUFFLEVBREw7QUFFTkMsVUFBSSxFQUFFLEVBRkE7QUFHTkMs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QUM7QUFBNUIsTUFBdE0sQ0FSVixFQVVFLEtBQUtnQixlQUFMLEVBVkYsQ0FERDtBQWNBO0FBOUNpQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7OztBQ0ZBeEIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JtSSxVQUFRLEVBQUVySSxtQkFBTyxDQUFDLGlDQUFELENBREo7QUFFYmtDLG1CQUFpQixFQUFFbEMsbUJBQU8sQ0FBQyxtREFBRCxDQUZiO0FBR2JzSSxXQUFTLEVBQUV0SSxtQkFBTyxDQUFDLG1DQUFELENBSEw7QUFJYjBHLE9BQUssRUFBRTFHLG1CQUFPLENBQUMsMkJBQUQsQ0FKRDtBQUtidUksUUFBTSxFQUFFdkksbUJBQU8sQ0FBQyw2QkFBRCxDQUxGO0FBTWJ3SSxNQUFJLEVBQUV4SSxtQkFBTyxDQUFDLHlCQUFELENBTkE7QUFPYnlJLGFBQVcsRUFBRXpJLG1CQUFPLENBQUMsdUNBQUQ7QUFQUCxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FsRCxhQUFhLG1DQUFtQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJDaGVja2JveCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdGxheW91dDogJ2ZsZXgtcm93Jyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucHJvcHMuY2hlY2tlZDtcblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICE9IG51bGwpIHtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjaGVja2VkOiBfdmFsdWVcblx0XHR9XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5zdGF0ZS5jaGVja2VkID0gZXZlbnQudmFsdWUgPSBldmVudC5jaGVja2VkID0gIXRoaXMuc3RhdGUuY2hlY2tlZDtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuY2hlY2tlZDtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQ6IHZhbHVlIH0pO1xuXHR9LFxuXHRfX29uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkOiAhdGhpcy5zdGF0ZS5jaGVja2VkIH0pO1xuXHR9LFxuXHRfX3JlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5jb250ZW50UmVuZGVyICYmIHRoaXMucHJvcHMuY29udGVudFJlbmRlcih0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBudWxsKXtcblx0XHRcdF9yZXR1cm4gPSB0aGlzLnByb3BzLnRleHQgfHwgdGhpcy5wcm9wcy5sYWJlbCB8fCAnJztcblx0XHR9XG5cblx0XHRpZihfcmV0dXJuKSB7XG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e19yZXR1cm59PC9kaXY+O1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWNoZWNrYm94JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gXG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fb25DbGlja30gPlxuXHRcdFx0XHQ8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfSBvbkNoYW5nZT17dGhpcy5fX29uQ2hhbmdlfSAvPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2VkID8gPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwiY2hlY2stc3F1YXJlXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1jaGVjay1zcXVhcmUgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPlxuXHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQwMEg0OFY4MGgzNTJ2MzUyem0tMzUuODY0LTI0MS43MjRMMTkxLjU0NyAzNjEuNDhjLTQuNzA1IDQuNjY3LTEyLjMwMyA0LjYzNy0xNi45Ny0uMDY4bC05MC43ODEtOTEuNTE2Yy00LjY2Ny00LjcwNS00LjYzNy0xMi4zMDMuMDY5LTE2Ljk3MWwyMi43MTktMjIuNTM2YzQuNzA1LTQuNjY3IDEyLjMwMy00LjYzNyAxNi45Ny4wNjlsNTkuNzkyIDYwLjI3NyAxNDEuMzUyLTE0MC4yMTZjNC43MDUtNC42NjcgMTIuMzAzLTQuNjM3IDE2Ljk3LjA2OGwyMi41MzYgMjIuNzE4YzQuNjY3IDQuNzA2IDQuNjM3IDEyLjMwNC0uMDY4IDE2Ljk3MXpcIj48L3BhdGg+XG5cdFx0XHRcdFx0PC9zdmc+OiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJzcXVhcmVcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXNxdWFyZSBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjUgMzIgMCA1My41IDAgODB2MzUyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OFY4MGMwLTI2LjUtMjEuNS00OC00OC00OHptLTYgNDAwSDU0Yy0zLjMgMC02LTIuNy02LTZWODZjMC0zLjMgMi43LTYgNi02aDM0MGMzLjMgMCA2IDIuNyA2IDZ2MzQwYzAgMy4zLTIuNyA2LTYgNnpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBVbmNvbnRyb2xDaGVja2JveCA9IHJlcXVpcmUoJy4vVW5jb250cm9sQ2hlY2tib3gnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkNoZWNrYm94cycsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNwbGl0Q2hhcjogJywnLFxuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkYXRhVHlwZTogJ1N0cmluZydcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB0aGlzLl9faW5pdFZhbHVlKClcblx0XHR9O1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsKXtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRfdmFsdWUgPSBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3ZhbHVlO1xuXHR9LFxuXHRwYXJzZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSl7XG5cdFx0XHRyZXR1cm4gKG5ldyB3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0odmFsdWUpKS52YWx1ZU9mKCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRocm93IG5ldyBFcnJvcignRGF0YSBUeXBlIE9mIExpc3QgSXMgTnVsbC4nKTtcblx0fSxcblx0X19pc0NoZWNrZWQ6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF92YWx1ZSA9IChpdGVtW3RoaXMucHJvcHMudmFsdWVLZXldKS50b1N0cmluZygpO1xuXHRcdGlmKHpuLmlzKHRoaXMuc3RhdGUudmFsdWUsICdhcnJheScpKXtcblx0XHRcdGlmKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0dmFyIF9hdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlLnNwbGl0KHRoaXMucHJvcHMuc3BsaXRDaGFyKS5maWx0ZXIoKHZhbHVlKT0+ISF2YWx1ZSk7XG5cdFx0XHRpZihfYXZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19vbkl0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBjaGVja2JveCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uSXRlbUNsaWNrICYmIHRoaXMucHJvcHMub25JdGVtQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fX2NsaWNrRGVmYXVsdChldmVudCk7XG5cdFx0fVxuXHR9LFxuXHRfX2NsaWNrRGVmYXVsdDogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX2RhdGEgPSBldmVudC5kYXRhLFxuXHRcdFx0X3ZhbHVlID0gKF9kYXRhW3RoaXMucHJvcHMudmFsdWVLZXldKS50b1N0cmluZygpO1xuXHRcdGlmKHpuLmlzKHRoaXMuc3RhdGUudmFsdWUsICdhcnJheScpKSB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdHRoaXMuc3RhdGUudmFsdWUuc3BsaWNlKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpLCAxKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnB1c2goX3ZhbHVlKTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdHZhciBfYXZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZS5zcGxpdCh0aGlzLnByb3BzLnNwbGl0Q2hhcikuZmlsdGVyKCh2YWx1ZSk9PiEhdmFsdWUpO1xuXHRcdFx0aWYoX2F2YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRfYXZhbHVlLnNwbGljZShfYXZhbHVlLmluZGV4T2YoX3ZhbHVlKSwgMSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0X2F2YWx1ZS5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlLnZhbHVlID0gX2F2YWx1ZS5qb2luKHRoaXMucHJvcHMuc3BsaXRDaGFyKTtcblx0XHR9XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGl0ZW0sICdvYmplY3QnKSl7XG5cdFx0XHR2YXIgX3RlbXAgPSB7IGluZGV4OiBpbmRleCB9O1xuXHRcdFx0X3RlbXBbdGhpcy5wcm9wcy50ZXh0S2V5XSA9IF90ZW1wW3RoaXMucHJvcHMudmFsdWVLZXldID0gaXRlbTtcblx0XHRcdGl0ZW0gPSBfdGVtcDtcblx0XHR9ZWxzZXtcblx0XHRcdGl0ZW0uaW5kZXggPSBpbmRleDtcblx0XHR9XG5cblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuaXRlbVJlbmRlciAmJiB0aGlzLnByb3BzLml0ZW1SZW5kZXIoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKCFfcmV0dXJuKSB7XG5cdFx0XHRfcmV0dXJuID0gaXRlbVt0aGlzLnByb3BzLnRleHRLZXldO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gPFVuY29udHJvbENoZWNrYm94IGtleT17aW5kZXh9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG5cdFx0XHRcdFx0Y29udGVudFJlbmRlcj17dGhpcy5wcm9wcy5jb250ZW50UmVuZGVyfVxuXHRcdFx0XHRcdHsuLi5pdGVtfVxuXHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuX19pc0NoZWNrZWQoaXRlbSwgaW5kZXgpfSBcblx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpPT50aGlzLl9fb25JdGVtQ2xpY2soZXZlbnQsIGl0ZW0pfS8+O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1jaGVja2JveHNcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJTZWxlY3RMaXN0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3BsaXRDaGFyOiAnLCcsXG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRhdGFUeXBlOiAnU3RyaW5nJ1xuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHRoaXMuX19pbml0VmFsdWUoKVxuXHRcdH07XG5cdH0sXG5cdF9faW5pdFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3ZhbHVlID0gbnVsbDtcblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICE9IG51bGwpe1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblx0XHR9ZWxzZXtcblx0XHRcdF92YWx1ZSA9IFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBfdmFsdWU7XG5cdH0sXG5cdHBhcnNlVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYod2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKXtcblx0XHRcdHJldHVybiAobmV3IHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSh2YWx1ZSkpLnZhbHVlT2YoKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEYXRhIFR5cGUgT2YgTGlzdCBJcyBOdWxsLicpO1xuXHR9LFxuXHRfX2lzQ2hlY2tlZDogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3ZhbHVlID0gaXRlbVt0aGlzLnByb3BzLnZhbHVlS2V5XTtcblx0XHRpZih6bi5pcyh0aGlzLnN0YXRlLnZhbHVlLCAnYXJyYXknKSl7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdHZhciBfYXZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZS5zcGxpdCh0aGlzLnByb3BzLnNwbGl0Q2hhcikuZmlsdGVyKCh2YWx1ZSk9PiEhdmFsdWUpO1xuXHRcdFx0aWYoX2F2YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25JdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgY2hlY2tib3gpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkl0ZW1DbGljayAmJiB0aGlzLnByb3BzLm9uSXRlbUNsaWNrKGV2ZW50LCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09IG51bGwpIHtcblx0XHRcdHRoaXMuX19jbGlja0RlZmF1bHQoZXZlbnQpO1xuXHRcdH1cblx0fSxcblx0X19jbGlja0RlZmF1bHQ6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF9kYXRhID0gZXZlbnQuZGF0YSxcblx0XHRcdF92YWx1ZSA9IF9kYXRhW3RoaXMucHJvcHMudmFsdWVLZXldO1xuXHRcdGlmKHpuLmlzKHRoaXMuc3RhdGUudmFsdWUsICdhcnJheScpKSB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdHRoaXMuc3RhdGUudmFsdWUuc3BsaWNlKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpLCAxKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnB1c2goX3ZhbHVlKTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdHZhciBfYXZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZS5zcGxpdCh0aGlzLnByb3BzLnNwbGl0Q2hhcikuZmlsdGVyKCh2YWx1ZSk9PiEhdmFsdWUpO1xuXHRcdFx0aWYoX2F2YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRfYXZhbHVlLnNwbGljZShfYXZhbHVlLmluZGV4T2YoX3ZhbHVlKSwgMSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0X2F2YWx1ZS5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlLnZhbHVlID0gX2F2YWx1ZS5qb2luKHRoaXMucHJvcHMuc3BsaXRDaGFyKTtcblx0XHR9XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uSXRlbUNsaWNrOiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGl0ZW0sICdvYmplY3QnKSl7XG5cdFx0XHR2YXIgX3RlbXAgPSB7IGluZGV4OiBpbmRleCB9O1xuXHRcdFx0X3RlbXBbdGhpcy5wcm9wcy50ZXh0S2V5XSA9IF90ZW1wW3RoaXMucHJvcHMudmFsdWVLZXldID0gaXRlbTtcblx0XHRcdGl0ZW0gPSBfdGVtcDtcblx0XHR9ZWxzZXtcblx0XHRcdGl0ZW0uaW5kZXggPSBpbmRleDtcblx0XHR9XG5cblx0XHR2YXIgX3RleHQgPSBpdGVtW3RoaXMucHJvcHMudGV4dEtleV07XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLml0ZW1SZW5kZXIgJiYgdGhpcy5wcm9wcy5pdGVtUmVuZGVyKGl0ZW0sIGluZGV4KTtcblx0XHRpZighX3JldHVybikge1xuXHRcdFx0X3JldHVybiA9IChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHR7aXRlbS5pY29uICYmIDxpIGNsYXNzTmFtZT17XCJmYSBcIiArIGl0ZW0uaWNvbn0gLz59XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj57X3RleHR9PC9zcGFuPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIiBvbkNsaWNrPXsoZXZlbnQpPT50aGlzLl9fb25JdGVtQ2xpY2soZXZlbnQsIGl0ZW0sIGluZGV4KX0+e19yZXR1cm59PC9saT5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx1bCBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXNlbGVjdC1saXN0XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlxuXHRcdFx0PC91bD5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgcG9wdXAgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBvcHVwJyk7XG52YXIgTGlzdCA9IHJlcXVpcmUoJy4vTGlzdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSUG9wdXBTZWxlY3QnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogJycsXG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqVwiXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogdGhpcy5wcm9wcy50ZXh0LFxuXHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudmFsdWVcblx0XHR9XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWx1ZSB9LCB0aGlzKTtcblx0fSxcblx0Z2V0VGV4dDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnRleHQ7XG5cdH0sXG5cdHNldFRleHQ6IGZ1bmN0aW9uICh0ZXh0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHRleHQ6IHRleHRcblx0XHR9KTtcblx0fSxcblx0c2V0RGF0YTogZnVuY3Rpb24gKHZhbHVlLCB0ZXh0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdHRleHQ6IHRleHRcblx0XHR9KTtcblx0fSxcblx0X19yZXNvbHZlVGFyZ2V0OiBmdW5jdGlvbiAodGFyZ2V0KXtcblx0XHRpZih0YXJnZXQpe1xuXHRcdFx0aWYoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC10ZXh0Jykpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fX3Jlc29sdmVUYXJnZXQodGFyZ2V0LnBhcmVudE5vZGUpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX3BvcG92ZXJSZW5kZXI6IGZ1bmN0aW9uIChldmVudCwgZHJvcGRvd24pe1xuXG5cdFx0dmFyIF90YXJnZXQgPSB0aGlzLl9fcmVzb2x2ZVRhcmdldChldmVudC50YXJnZXQpO1xuXHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucG9wdXBSZW5kZXIsIHtcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0ZXZlbnQ6IGV2ZW50LFxuXHRcdFx0ZHJvcGRvd246IGRyb3Bkb3duLFxuXHRcdFx0cG9wdXBTZWxlY3Q6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoIV9lbGVtZW50ICYmIHRoaXMucHJvcHMuZGF0YSl7XG5cdFx0IFx0X2VsZW1lbnQgPSAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXBvcG92ZXJcIj5cblx0XHRcdFx0XHQ8TGlzdCBzcGxpdENoYXI9e3RoaXMucHJvcHMuc3BsaXRDaGFyfSBcblx0XHRcdFx0XHRcdHRleHRLZXk9e3RoaXMucHJvcHMudGV4dEtleX1cblx0XHRcdFx0XHRcdHZhbHVlS2V5PXt0aGlzLnByb3BzLnZhbHVlS2V5fVxuXHRcdFx0XHRcdFx0ZGF0YVR5cGU9e3RoaXMucHJvcHMuZGF0YVR5cGV9XG5cdFx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLmRhdGF9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17eyB3aWR0aDogX3RhcmdldC5vZmZzZXRXaWR0aCB9fSBjbGFzc05hbWU9XCJzZWxlY3QtcG9wb3ZlclwiPntfZWxlbWVudH08L2Rpdj47XG5cdH0sXG5cdF9fdmFsdWVSZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMudGV4dFJlbmRlciwge1xuXHRcdFx0dmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXG5cdFx0XHR0ZXh0OiB0aGlzLnN0YXRlLnRleHQsXG5cdFx0XHRwb3B1cFNlbGVjdDogdGhpc1xuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHRcdF9lbGVtZW50ID0gdGhpcy5zdGF0ZS50ZXh0IHx8IHRoaXMucHJvcHMucGxhY2Vob2xkZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXRleHRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e19lbGVtZW50fTwvZGl2PlxuXHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJjYXJldC1kb3duXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtY2FyZXQtZG93biBmYS13LTEwIFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzEuMyAxOTJoMjU3LjNjMTcuOCAwIDI2LjcgMjEuNSAxNC4xIDM0LjFMMTc0LjEgMzU0LjhjLTcuOCA3LjgtMjAuNSA3LjgtMjguMyAwTDE3LjIgMjI2LjFDNC42IDIxMy41IDEzLjUgMTkyIDMxLjMgMTkyelwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHBvcHVwLkRyb3Bkb3duIFxuXHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJ6ci1zZWxlY3QtbWVudS1kcm9wZG93bi1saXN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAn6LSm5Y+35L+h5oGvJywgaWNvbjogJ2ZhLXVzZXItY2lyY2xlJyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAn5LyB5Lia6K6k6K+BJywgaWNvbjogJ2ZhLWRyaXZlcnMtbGljZW5zZS1vJyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAn5LyB5Lia6YKA6K+3JywgaWNvbjogJ2ZhLWRlYWYnIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICfln7rmnKzorr7nva4nLCBpY29uOiAnZmEtc2xpZGVycycgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCIga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e1wiaWNvbiBmYSBcIiArIGl0ZW0uaWNvbn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e2l0ZW0ubGFiZWx9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvbkNvbnRhaW5lckV2ZW50OiBmdW5jdGlvbiAoZXZlbnQsIHBvcG92ZXIpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlci1zZXNzaW9uXCIgPlxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiYXZhdGFyXCIgb25DbGljaz17KCk9PnpudWkuYXBwLnNlc3Npb24uanVtcCgnL21haW4vbXkvaW5mbycpfT5cblx0XHRcdFx0XHRcdDxpbWcgZGF0YS16ci1wb3B1cC10b29sdGlwPVwi5p+l55yL5oiR55qE5Liq5Lq65L+h5oGvXCIgc3JjPXt0aGlzLnN0YXRlLnVzZXIuaGVhZGltZ3VybCB8fCAnLi4vX2NvbS9pbWFnZXMvbG9nby0xMjgucG5nJ30gLz5cblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e3RoaXMuc3RhdGUudXNlci5Vc2VybmFtZSB8fCB0aGlzLnN0YXRlLnVzZXIuTmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG93blwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9wb3B1cC5Ecm9wZG93bj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxwb3B1cC5Ecm9wZG93biBcblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXNlbGVjdC1tZW51XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCAodGhpcy5wcm9wcy5kaXNhYmxlZD8nZGlzYWJsZWQnOicnKSl9XG5cdFx0XHRcdHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuXHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0cmVuZGVyOiB0aGlzLl9fcG9wb3ZlclJlbmRlcixcblx0XHRcdFx0XHRvbkNvbnRhaW5lckV2ZW50OiBmdW5jdGlvbiAoZXZlbnQsIHBvcG92ZXIpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fX0+XG5cdFx0XHRcdHt0aGlzLl9fdmFsdWVSZW5kZXIoKX1cblx0XHRcdDwvcG9wdXAuRHJvcGRvd24+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgcG9wdXAgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBvcHVwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJQb3B1cFNlbGVjdCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdHRleHRLZXk6ICd0ZXh0Jyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHRcdHZhbHVlS2V5OiAndmFsdWUnLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCJcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0OiB0aGlzLnByb3BzLnRleHQsXG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuXHRcdH1cblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgdmFsdWU6IHZhbHVlIH0sIHRoaXMpO1xuXHR9LFxuXHRnZXRUZXh0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudGV4dDtcblx0fSxcblx0c2V0VGV4dDogZnVuY3Rpb24gKHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHRzZXREYXRhOiBmdW5jdGlvbiAodmFsdWUsIHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHRfX3Jlc29sdmVUYXJnZXQ6IGZ1bmN0aW9uICh0YXJnZXQpe1xuXHRcdGlmKHRhcmdldCl7XG5cdFx0XHRpZighdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0LXRleHQnKSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9fcmVzb2x2ZVRhcmdldCh0YXJnZXQucGFyZW50Tm9kZSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fcG9wb3ZlclJlbmRlcjogZnVuY3Rpb24gKGV2ZW50LCBkcm9wZG93bil7XG5cdFx0dmFyIF90YXJnZXQgPSB0aGlzLl9fcmVzb2x2ZVRhcmdldChldmVudC50YXJnZXQpO1xuXHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucG9wdXBSZW5kZXIsIHtcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0ZXZlbnQ6IGV2ZW50LFxuXHRcdFx0ZHJvcGRvd246IGRyb3Bkb3duLFxuXHRcdFx0cG9wdXBTZWxlY3Q6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtcG9wb3ZlclwiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggfHwgX3RhcmdldC5vZmZzZXRXaWR0aCwgbWluV2lkdGg6IHRoaXMucHJvcHMubWluV2lkdGggfX0gY2xhc3NOYW1lPVwic2VsZWN0LXBvcG92ZXJcIj57X2VsZW1lbnR9PC9kaXY+O1xuXHR9LFxuXHRfX3ZhbHVlUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnRleHRSZW5kZXIsIHtcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0cG9wdXBTZWxlY3Q6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0XHRfZWxlbWVudCA9IHRoaXMuc3RhdGUudGV4dCB8fCB0aGlzLnN0YXRlLnZhbHVlIHx8IHRoaXMucHJvcHMucGxhY2Vob2xkZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXRleHRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e19lbGVtZW50fTwvZGl2PlxuXHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJjYXJldC1kb3duXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtY2FyZXQtZG93biBmYS13LTEwIFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzEuMyAxOTJoMjU3LjNjMTcuOCAwIDI2LjcgMjEuNSAxNC4xIDM0LjFMMTc0LjEgMzU0LjhjLTcuOCA3LjgtMjAuNSA3LjgtMjguMyAwTDE3LjIgMjI2LjFDNC42IDIxMy41IDEzLjUgMTkyIDMxLjMgMTkyelwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHBvcHVwLkRyb3Bkb3duIFxuXHRcdFx0XHRjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtc2VsZWN0XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCAodGhpcy5wcm9wcy5kaXNhYmxlZD8nZGlzYWJsZWQnOicnKSl9XG5cdFx0XHRcdHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuXHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0cmVuZGVyOiB0aGlzLl9fcG9wb3ZlclJlbmRlcixcblx0XHRcdFx0XHRvbkNvbnRhaW5lckV2ZW50OiBmdW5jdGlvbiAoZXZlbnQsIHBvcG92ZXIpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fX0+XG5cdFx0XHRcdHt0aGlzLl9fdmFsdWVSZW5kZXIoKX1cblx0XHRcdDwvcG9wdXAuRHJvcGRvd24+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSYWRpb0l0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlJhZGlvSXRlbScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGV2ZW50LmRhdGEgPSB0aGlzLnByb3BzO1xuXHRcdGV2ZW50LnNlbmRlciA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fcmVuZGVyQ29udGVudDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIgJiYgdGhpcy5wcm9wcy5jb250ZW50UmVuZGVyKHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IHRoaXMucHJvcHMudGV4dCB8fCB0aGlzLnByb3BzLmxhYmVsIHx8Jyc7XG5cdFx0fVxuXG5cdFx0aWYoX3JldHVybikge1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntfcmV0dXJufTwvZGl2Pjtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1yYWRpby1pdGVtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBvbkNsaWNrPXt0aGlzLl9fb25DbGlja30gZGF0YS1kaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gZGF0YS1jaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9PlxuXHRcdFx0XHQ8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSB0eXBlPSdyYWRpbycgZGVmYXVsdENoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9IC8+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmNoZWNrZWQgPyA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJkb3QtY2lyY2xlXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1kb3QtY2lyY2xlIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cblx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA1NmMxMTAuNTMyIDAgMjAwIDg5LjQ1MSAyMDAgMjAwIDAgMTEwLjUzMi04OS40NTEgMjAwLTIwMCAyMDAtMTEwLjUzMiAwLTIwMC04OS40NTEtMjAwLTIwMCAwLTExMC41MzIgODkuNDUxLTIwMCAyMDAtMjAwbTAtNDhDMTE5LjAzMyA4IDggMTE5LjAzMyA4IDI1NnMxMTEuMDMzIDI0OCAyNDggMjQ4IDI0OC0xMTEuMDMzIDI0OC0yNDhTMzkyLjk2NyA4IDI1NiA4em0wIDE2OGMtNDQuMTgzIDAtODAgMzUuODE3LTgwIDgwczM1LjgxNyA4MCA4MCA4MCA4MC0zNS44MTcgODAtODAtMzUuODE3LTgwLTgwLTgwelwiPjwvcGF0aD5cblx0XHRcdFx0XHQ8L3N2Zz4gOiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJjaXJjbGVcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWNpcmNsZSBmYS13LTE2IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMCA0NDhjLTExMC41IDAtMjAwLTg5LjUtMjAwLTIwMFMxNDUuNSA1NiAyNTYgNTZzMjAwIDg5LjUgMjAwIDIwMC04OS41IDIwMC0yMDAgMjAwelwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0fVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNvbnRlbnQoKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG52YXIgUmFkaW8gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlJhZGlvJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkYXRhVHlwZTogJ1N0cmluZycsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2Vcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB0aGlzLl9faW5pdFZhbHVlKClcblx0XHR9O1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy52YWx1ZSAhPT0gbnVsbCl7XG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdH1lbHNle1xuXHRcdFx0X3ZhbHVlID0gJyc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucGFyc2VWYWx1ZShfdmFsdWUpO1xuXHR9LFxuXHRwYXJzZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSl7XG5cdFx0XHRyZXR1cm4gKG5ldyB3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0odmFsdWUpKS52YWx1ZU9mKCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRocm93IG5ldyBFcnJvcignRGF0YSBUeXBlIE9mIExpc3QgSXMgTnVsbC4nKTtcblx0fSxcblx0X19pc0NoZWNrZWQ6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShpdGVtW3RoaXMucHJvcHMudmFsdWVLZXldKTtcblx0XHRpZihfdmFsdWUgPT09IHRoaXMuc3RhdGUudmFsdWUpe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHRfX29uUmFkaW9JdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgaXRlbSl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCBldmVudC5kYXRhLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoaXRlbVt0aGlzLnByb3BzLnZhbHVlS2V5XSk7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZighem4uaXMoaXRlbSwgJ29iamVjdCcpKXtcblx0XHRcdHZhciBfdGVtcCA9IHsgaW5kZXg6IGluZGV4IH07XG5cdFx0XHRfdGVtcFt0aGlzLnByb3BzLnRleHRLZXldID0gX3RlbXBbdGhpcy5wcm9wcy52YWx1ZUtleV0gPSBpdGVtO1xuXHRcdFx0aXRlbSA9IF90ZW1wO1xuXHRcdH1lbHNle1xuXHRcdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdH1cblxuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5pdGVtUmVuZGVyICYmIHRoaXMucHJvcHMuaXRlbVJlbmRlcihpdGVtLCBpbmRleCk7XG5cdFx0aWYoIV9yZXR1cm4pIHtcblx0XHRcdF9yZXR1cm4gPSBpdGVtW3RoaXMucHJvcHMudGV4dEtleV07XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiA8UmFkaW9JdGVtIGtleT17aW5kZXh9IGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSB7Li4uaXRlbX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpPT50aGlzLl9fb25SYWRpb0l0ZW1DbGljayhldmVudCwgaXRlbSl9XG5cdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5fX2lzQ2hlY2tlZChpdGVtKX0gLz47XG5cdH0sXG5cdFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIGNhbGxiYWNrKXtcblx0XHR2YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZSh2YWx1ZSk7XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoeyB2YWx1ZTogdmFsdWUgfSwgdGhpcyk7XG5cdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2sodmFsdWUsIHRoaXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXJhZGlvJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJhZGlvO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlNlbGVjdCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRkYXRhVHlwZTogJ1N0cmluZycsXG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRtdWx0aXBsZTogZmFsc2UsXG5cdFx0XHRwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIlxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHQvL1JlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29sb3I6IG51bGwsXG5cdFx0XHRzdHlsZTogbnVsbCxcblx0XHRcdGNsYXNzTmFtZTogbnVsbCxcblx0XHRcdHZhbHVlOiB0aGlzLnBhcnNlVmFsdWUodGhpcy5wcm9wcy52YWx1ZSlcblx0XHR9XG5cdH0sXG5cdHBhcnNlVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodGhpcy5wcm9wcy5tdWx0aXBsZSl7XG5cdFx0XHRzd2l0Y2goem4udHlwZSh2YWx1ZSkpe1xuXHRcdFx0XHRjYXNlICdhcnJheSc6XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0XHRcdHJldHVybiBbdmFsdWVdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZih3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0pe1xuXHRcdFx0cmV0dXJuIHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSh2YWx1ZSkudmFsdWVPZigpO1xuXHRcdH1cblx0XHRcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgVHlwZSBPZiBMaXN0IElzIE51bGwuJyk7XG5cdH0sXG5cdF9fb25TZWxlY3RDbGljazogZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fSxcblx0X19wYXJzZUV4cDogZnVuY3Rpb24gKGl0ZW0sIGV4cCl7XG5cdFx0aWYodHlwZW9mIGV4cCA9PSAnc3RyaW5nJyl7XG5cdFx0XHRpZihleHAuaW5kZXhPZigneycpIT0tMSl7XG5cdFx0XHRcdHJldHVybiB6bi5mb3JtYXQoZXhwLCBpdGVtKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBpdGVtW2V4cF07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmKHR5cGVvZiBleHAgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIGV4cChpdGVtKTtcblx0XHR9XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3ZhbHVlLCBfdGV4dCwgX2l0ZW0gPSBpdGVtIHx8IHt9O1xuXHRcdGlmKHpuLmlzKF9pdGVtLCAnb2JqZWN0Jykpe1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5fX3BhcnNlRXhwKF9pdGVtLCB0aGlzLnByb3BzLnZhbHVlS2V5KTtcblx0XHRcdF90ZXh0ID0gdGhpcy5fX3BhcnNlRXhwKF9pdGVtLCB0aGlzLnByb3BzLnRleHRLZXkpO1xuXHRcdH1lbHNle1xuXHRcdFx0X3ZhbHVlID0gX3RleHQgPSBfaXRlbTtcblx0XHR9XG5cblx0XHRyZXR1cm4gPG9wdGlvbiBzdHlsZT17X2l0ZW0uc3R5bGV9IGNsYXNzTmFtZT17X2l0ZW0uY2xhc3NOYW1lfSBkaXNhYmxlZD17aXRlbS5kaXNhYmxlZH0gc2VsZWN0ZWQ9e3RoaXMuc3RhdGUudmFsdWU9PV92YWx1ZX0ga2V5PXtfdmFsdWV9IHZhbHVlPXtfdmFsdWV9IGRhdGEtdGV4dD17X3RleHR9IGRhdGEtdmFsdWU9e192YWx1ZX0+e190ZXh0fTwvb3B0aW9uPjtcblx0fSxcblx0X19vblNlbGVjdENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX3RhcmdldCA9IGV2ZW50LnRhcmdldCxcblx0XHRcdF9kYXRhID0gZXZlbnQudGFyZ2V0LmNoaWxkTm9kZXNbX3RhcmdldC5zZWxlY3RlZEluZGV4XS5kYXRhc2V0LFxuXHRcdFx0X3ZhbHVlID0gdGhpcy5fX3BhcnNlRXhwKF9kYXRhLCB0aGlzLnByb3BzLnZhbHVlS2V5KSxcblx0XHRcdF90ZXh0ID0gdGhpcy5fX3BhcnNlRXhwKF9kYXRhLCB0aGlzLnByb3BzLnRleHRLZXkpO1xuXG5cdFx0ZXZlbnQuc2VsZWN0ZWRJbmRleCA9ICgrX3RhcmdldC5zZWxlY3RlZEluZGV4IC0gMSk7XG5cdFx0ZXZlbnQuZGF0YSA9IF9kYXRhO1xuXHRcdGV2ZW50LnZhbHVlID0gX3ZhbHVlO1xuXHRcdGV2ZW50LnRleHQgPSBfdGV4dDtcblxuXHRcdGlmKF9kYXRhLmNvbG9yKXtcblx0XHRcdHRoaXMuc3RhdGUuY29sb3IgPSBfZGF0YS5jb2xvcjtcblx0XHR9XG5cdFx0aWYoX2RhdGEuc3R5bGUpIHtcblx0XHRcdHRoaXMuc3RhdGUuc3R5bGUgPSBfZGF0YS5zdHlsZTtcblx0XHR9XG5cdFx0aWYoX2RhdGEuY2xhc3NOYW1lKSB7XG5cdFx0XHR0aGlzLnN0YXRlLmNsYXNzTmFtZSA9IF9kYXRhLmNsYXNzTmFtZTtcblx0XHR9XG5cblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKF92YWx1ZSk7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGFyc2VWYWx1ZSh0aGlzLnN0YXRlLnZhbHVlIHx8IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlKTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUodmFsdWUpO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoeyB2YWx1ZTogdmFsdWUgfSwgdGhpcyk7XG5cdH0sXG5cdF9fcmVzb2x2ZVN0eWxlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3N0eWxlID0ge307XG5cdFx0aWYodGhpcy5zdGF0ZS5jb2xvcil7XG5cdFx0XHRfc3R5bGUuY29sb3IgPSB0aGlzLnN0YXRlLmNvbG9yO1xuXHRcdFx0X3N0eWxlLmJvcmRlckNvbG9yID0gdGhpcy5zdGF0ZS5jb2xvcjtcblx0XHR9XG5cdFx0aWYodGhpcy5zdGF0ZS5zdHlsZSkge1xuXHRcdFx0X3N0eWxlID0gem4uZXh0ZW5kKF9zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9zdHlsZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1zZWxlY3RcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX1cblx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUoe30sIHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuX19yZXNvbHZlU3R5bGUoKSl9XG5cdFx0XHRcdG5hbWU9e3RoaXMucHJvcHMubmFtZX1cblx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG5cdFx0XHRcdG11bHRpcGxlPXt0aGlzLnByb3BzLm11bHRpcGxlfVxuXHRcdFx0XHRyZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH1cblx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG5cdFx0XHRcdHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRvbmx5fVxuXHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uU2VsZWN0Q2hhbmdlfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fb25TZWxlY3RDbGlja30+XG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9JycgZGlzYWJsZWQ+e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9PC9vcHRpb24+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IC8+XHRcblx0XHRcdDwvc2VsZWN0PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVW5jb250cm9sQ2hlY2tib3gnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRsYXlvdXQ6ICdmbGV4LXJvdycsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiAoKXt9XG5cdFx0fVxuXHR9LFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGV2ZW50LmRhdGEgPSB0aGlzLnByb3BzO1xuXHRcdGV2ZW50LnNlbmRlciA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fcmVuZGVyQ29udGVudDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIgJiYgdGhpcy5wcm9wcy5jb250ZW50UmVuZGVyKHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IHVuZGVmaW5lZCB8fCBfcmV0dXJuID09PSBudWxsKXtcblx0XHRcdF9yZXR1cm4gPSB0aGlzLnByb3BzLnRleHQgfHwgdGhpcy5wcm9wcy5sYWJlbCB8fCAnJztcblx0XHR9XG5cdFx0aWYoX3JldHVybikge1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntfcmV0dXJufTwvZGl2Pjtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXVuY29udHJvbC1jaGVja2JveCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG5cdFx0XHRcdGRhdGEtZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IFxuXHRcdFx0XHRkYXRhLWNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH1cblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uQ2xpY2t9ID5cblx0XHRcdFx0PGlucHV0IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9Lz5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuY2hlY2tlZCA/IDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cImNoZWNrLXNxdWFyZVwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtY2hlY2stc3F1YXJlIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj5cblx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQwMCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODB2MzUyYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoMzUyYzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWODBjMC0yNi41MS0yMS40OS00OC00OC00OHptMCA0MDBINDhWODBoMzUydjM1MnptLTM1Ljg2NC0yNDEuNzI0TDE5MS41NDcgMzYxLjQ4Yy00LjcwNSA0LjY2Ny0xMi4zMDMgNC42MzctMTYuOTctLjA2OGwtOTAuNzgxLTkxLjUxNmMtNC42NjctNC43MDUtNC42MzctMTIuMzAzLjA2OS0xNi45NzFsMjIuNzE5LTIyLjUzNmM0LjcwNS00LjY2NyAxMi4zMDMtNC42MzcgMTYuOTcuMDY5bDU5Ljc5MiA2MC4yNzcgMTQxLjM1Mi0xNDAuMjE2YzQuNzA1LTQuNjY3IDEyLjMwMy00LjYzNyAxNi45Ny4wNjhsMjIuNTM2IDIyLjcxOGM0LjY2NyA0LjcwNiA0LjYzNyAxMi4zMDQtLjA2OCAxNi45NzF6XCI+PC9wYXRoPlxuXHRcdFx0XHRcdDwvc3ZnPjogPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwic3F1YXJlXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zcXVhcmUgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQwMCAzMkg0OEMyMS41IDMyIDAgNTMuNSAwIDgwdjM1MmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWODBjMC0yNi41LTIxLjUtNDgtNDgtNDh6bS02IDQwMEg1NGMtMy4zIDAtNi0yLjctNi02Vjg2YzAtMy4zIDIuNy02IDYtNmgzNDBjMy4zIDAgNiAyLjcgNiA2djM0MGMwIDMuMy0yLjcgNi02IDZ6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ29udGVudCgpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBDaGVja2JveDogcmVxdWlyZSgnLi9DaGVja2JveCcpLFxuICAgIFVuY29udHJvbENoZWNrYm94OiByZXF1aXJlKCcuL1VuY29udHJvbENoZWNrYm94JyksXG4gICAgQ2hlY2tib3hzOiByZXF1aXJlKCcuL0NoZWNrYm94cycpLFxuICAgIFJhZGlvOiByZXF1aXJlKCcuL1JhZGlvJyksXG4gICAgU2VsZWN0OiByZXF1aXJlKCcuL1NlbGVjdCcpLFxuICAgIE1lbnU6IHJlcXVpcmUoJy4vTWVudScpLFxuICAgIFBvcHVwU2VsZWN0OiByZXF1aXJlKCcuL1BvcHVwU2VsZWN0Jylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wienItcG9wdXBcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==