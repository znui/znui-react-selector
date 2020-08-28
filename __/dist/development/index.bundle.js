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

var icon = __webpack_require__(/*! znui-react-icon */ "znui-react-icon");

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
      _return = this.props.text || '';
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
    }), /*#__PURE__*/React.createElement(icon.RegularSVGIcon, {
      className: "icon",
      icon: this.state.checked ? 'faCheckSquare' : 'faSquare'
    }), this.__renderContent());
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
      disabled: this.props.disabled
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

/***/ "./Radio.js":
/*!******************!*\
  !*** ./Radio.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var icon = __webpack_require__(/*! znui-react-icon */ "znui-react-icon");

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
    }), /*#__PURE__*/React.createElement(icon.RegularSVGIcon, {
      className: "icon",
      icon: this.props.checked ? 'faDotCircle' : 'faCircle'
    }), this.__renderContent());
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
      dataType: 'Number',
      className: '',
      value: '',
      textKey: 'text',
      valueKey: 'value',
      disabled: false,
      placeholder: "select ..."
    };
  },
  componentDidMount: function componentDidMount() {
    ReactDOM.findDOMNode(this).value = this.state.value;
  },
  getInitialState: function getInitialState() {
    return {
      value: this.parseValue(this.props.value)
    };
  },
  parseValue: function parseValue(value) {
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
      selected: this.state.value == _value,
      key: _value,
      value: _value,
      "data-value": _value,
      "data-text": _text
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
      required: this.props.required,
      disabled: this.props.disabled || this.props.readonly,
      value: this.state.value,
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

var icon = __webpack_require__(/*! znui-react-icon */ "znui-react-icon");

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

    if (_return !== null) {
      _return = this.props.text || '';
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
    }), /*#__PURE__*/React.createElement(icon.RegularSVGIcon, {
      className: "icon",
      icon: this.props.checked ? 'faCheckSquare' : 'faSquare'
    }), this.__renderContent());
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
  'Checkbox': __webpack_require__(/*! ./Checkbox */ "./Checkbox.js"),
  'UncontrolCheckbox': __webpack_require__(/*! ./UncontrolCheckbox */ "./UncontrolCheckbox.js"),
  'Checkboxs': __webpack_require__(/*! ./Checkboxs */ "./Checkboxs.js"),
  'Radio': __webpack_require__(/*! ./Radio */ "./Radio.js"),
  'Select': __webpack_require__(/*! ./Select */ "./Select.js")
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

/***/ "znui-react-icon":
/*!***********************!*\
  !*** external "icon" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["icon"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3hzLmpzIiwid2VicGFjazovLy8uL1JhZGlvLmpzIiwid2VicGFjazovLy8uL1NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9VbmNvbnRyb2xDaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaWNvblwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJpY29uIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJ0ZXh0IiwibGF5b3V0IiwiY2hlY2tlZCIsImRpc2FibGVkIiwiZ2V0SW5pdGlhbFN0YXRlIiwiX3ZhbHVlIiwicHJvcHMiLCJ2YWx1ZSIsIl9fb25DbGljayIsImV2ZW50Iiwic3RhdGUiLCJmb3JjZVVwZGF0ZSIsIm9uQ2xpY2siLCJvbkNoYW5nZSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJzZXRTdGF0ZSIsIl9fb25DaGFuZ2UiLCJfX3JlbmRlckNvbnRlbnQiLCJfcmV0dXJuIiwiY29udGVudFJlbmRlciIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwic3R5bGUiLCJuYW1lIiwiVW5jb250cm9sQ2hlY2tib3giLCJzcGxpdENoYXIiLCJ0ZXh0S2V5IiwidmFsdWVLZXkiLCJkYXRhVHlwZSIsIl9faW5pdFZhbHVlIiwicGFyc2VWYWx1ZSIsIndpbmRvdyIsInZhbHVlT2YiLCJFcnJvciIsIl9faXNDaGVja2VkIiwiaXRlbSIsImluZGV4Iiwiem4iLCJpcyIsImluZGV4T2YiLCJfYXZhbHVlIiwic3BsaXQiLCJmaWx0ZXIiLCJfX29uSXRlbUNsaWNrIiwiY2hlY2tib3giLCJvbkl0ZW1DbGljayIsIl9fY2xpY2tEZWZhdWx0IiwiX2RhdGEiLCJkYXRhIiwic3BsaWNlIiwicHVzaCIsImpvaW4iLCJfX2l0ZW1SZW5kZXIiLCJfdGVtcCIsIml0ZW1SZW5kZXIiLCJjaGlsZHJlbiIsIlJhZGlvSXRlbSIsInNlbmRlciIsImxhYmVsIiwiUmFkaW8iLCJfX29uUmFkaW9JdGVtQ2xpY2siLCJjYWxsYmFjayIsIlJlYWN0RE9NIiwicGxhY2Vob2xkZXIiLCJjb21wb25lbnREaWRNb3VudCIsImZpbmRET01Ob2RlIiwiX19vblNlbGVjdENsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJfX3BhcnNlRXhwIiwiZXhwIiwiZm9ybWF0IiwiX3RleHQiLCJfX29uU2VsZWN0Q2hhbmdlIiwiX3RhcmdldCIsInRhcmdldCIsImNoaWxkTm9kZXMiLCJzZWxlY3RlZEluZGV4IiwiZGF0YXNldCIsInJlcXVpcmVkIiwicmVhZG9ubHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FB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Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FsRCxhQUFhLCtCQUErQixFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgaWNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaWNvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQ2hlY2tib3gnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRsYXlvdXQ6ICdmbGV4LXJvdycsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdGRpc2FibGVkOiBmYWxzZVxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnByb3BzLmNoZWNrZWQ7XG5cdFx0aWYodGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hlY2tlZDogX3ZhbHVlXG5cdFx0fVxuXHR9LFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuc3RhdGUuY2hlY2tlZCA9IGV2ZW50LnZhbHVlID0gZXZlbnQuY2hlY2tlZCA9ICF0aGlzLnN0YXRlLmNoZWNrZWQ7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmNoZWNrZWQ7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkOiB2YWx1ZSB9KTtcblx0fSxcblx0X19vbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHsgY2hlY2tlZDogIXRoaXMuc3RhdGUuY2hlY2tlZCB9KTtcblx0fSxcblx0X19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuY29udGVudFJlbmRlciAmJiB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIodGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gbnVsbCl7XG5cdFx0XHRfcmV0dXJuID0gdGhpcy5wcm9wcy50ZXh0fHwnJztcblx0XHR9XG5cblx0XHRpZihfcmV0dXJuKSB7XG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e19yZXR1cm59PC9kaXY+O1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWNoZWNrYm94JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gXG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fb25DbGlja30gPlxuXHRcdFx0XHQ8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfSBvbkNoYW5nZT17dGhpcy5fX29uQ2hhbmdlfSAvPlxuXHRcdFx0XHQ8aWNvbi5SZWd1bGFyU1ZHSWNvbiBjbGFzc05hbWU9XCJpY29uXCIgaWNvbj17dGhpcy5zdGF0ZS5jaGVja2VkPydmYUNoZWNrU3F1YXJlJzonZmFTcXVhcmUnfSAvPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNvbnRlbnQoKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFVuY29udHJvbENoZWNrYm94ID0gcmVxdWlyZSgnLi9VbmNvbnRyb2xDaGVja2JveCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQ2hlY2tib3hzJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3BsaXRDaGFyOiAnLCcsXG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRhdGFUeXBlOiAnU3RyaW5nJ1xuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHRoaXMuX19pbml0VmFsdWUoKVxuXHRcdH07XG5cdH0sXG5cdF9faW5pdFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3ZhbHVlID0gbnVsbDtcblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICE9IG51bGwpe1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblx0XHR9ZWxzZXtcblx0XHRcdF92YWx1ZSA9IFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBfdmFsdWU7XG5cdH0sXG5cdHBhcnNlVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYod2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKXtcblx0XHRcdHJldHVybiAobmV3IHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSh2YWx1ZSkpLnZhbHVlT2YoKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEYXRhIFR5cGUgT2YgTGlzdCBJcyBOdWxsLicpO1xuXHR9LFxuXHRfX2lzQ2hlY2tlZDogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3ZhbHVlID0gaXRlbVt0aGlzLnByb3BzLnZhbHVlS2V5XTtcblx0XHRpZih6bi5pcyh0aGlzLnN0YXRlLnZhbHVlLCAnYXJyYXknKSl7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdHZhciBfYXZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZS5zcGxpdCh0aGlzLnByb3BzLnNwbGl0Q2hhcikuZmlsdGVyKCh2YWx1ZSk9PiEhdmFsdWUpO1xuXHRcdFx0aWYoX2F2YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25JdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgY2hlY2tib3gpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkl0ZW1DbGljayAmJiB0aGlzLnByb3BzLm9uSXRlbUNsaWNrKGV2ZW50LCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09IG51bGwpIHtcblx0XHRcdHRoaXMuX19jbGlja0RlZmF1bHQoZXZlbnQpO1xuXHRcdH1cblx0fSxcblx0X19jbGlja0RlZmF1bHQ6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF9kYXRhID0gZXZlbnQuZGF0YSxcblx0XHRcdF92YWx1ZSA9IF9kYXRhW3RoaXMucHJvcHMudmFsdWVLZXldO1xuXHRcdGlmKHpuLmlzKHRoaXMuc3RhdGUudmFsdWUsICdhcnJheScpKSB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSAhPSAtMSl7XG5cdFx0XHRcdHRoaXMuc3RhdGUudmFsdWUuc3BsaWNlKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpLCAxKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnB1c2goX3ZhbHVlKTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdHZhciBfYXZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZS5zcGxpdCh0aGlzLnByb3BzLnNwbGl0Q2hhcikuZmlsdGVyKCh2YWx1ZSk9PiEhdmFsdWUpO1xuXHRcdFx0aWYoX2F2YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRfYXZhbHVlLnNwbGljZShfYXZhbHVlLmluZGV4T2YoX3ZhbHVlKSwgMSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0X2F2YWx1ZS5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlLnZhbHVlID0gX2F2YWx1ZS5qb2luKHRoaXMucHJvcHMuc3BsaXRDaGFyKTtcblx0XHR9XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGl0ZW0sICdvYmplY3QnKSl7XG5cdFx0XHR2YXIgX3RlbXAgPSB7IGluZGV4OiBpbmRleCB9O1xuXHRcdFx0X3RlbXBbdGhpcy5wcm9wcy50ZXh0S2V5XSA9IF90ZW1wW3RoaXMucHJvcHMudmFsdWVLZXldID0gaXRlbTtcblx0XHRcdGl0ZW0gPSBfdGVtcDtcblx0XHR9ZWxzZXtcblx0XHRcdGl0ZW0uaW5kZXggPSBpbmRleDtcblx0XHR9XG5cblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuaXRlbVJlbmRlciAmJiB0aGlzLnByb3BzLml0ZW1SZW5kZXIoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKCFfcmV0dXJuKSB7XG5cdFx0XHRfcmV0dXJuID0gaXRlbVt0aGlzLnByb3BzLnRleHRLZXldO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gPFVuY29udHJvbENoZWNrYm94IGtleT17aW5kZXh9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG5cdFx0XHRcdFx0ey4uLml0ZW19XG5cdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5fX2lzQ2hlY2tlZChpdGVtLCBpbmRleCl9IFxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk9PnRoaXMuX19vbkl0ZW1DbGljayhldmVudCwgaXRlbSl9Lz47XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWNoZWNrYm94c1wiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBpY29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1pY29uJyk7XG5cbnZhciBSYWRpb0l0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlJhZGlvSXRlbScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGV2ZW50LmRhdGEgPSB0aGlzLnByb3BzO1xuXHRcdGV2ZW50LnNlbmRlciA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fcmVuZGVyQ29udGVudDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIgJiYgdGhpcy5wcm9wcy5jb250ZW50UmVuZGVyKHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IHRoaXMucHJvcHMudGV4dCB8fCB0aGlzLnByb3BzLmxhYmVsIHx8Jyc7XG5cdFx0fVxuXG5cdFx0aWYoX3JldHVybikge1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntfcmV0dXJufTwvZGl2Pjtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1yYWRpby1pdGVtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBvbkNsaWNrPXt0aGlzLl9fb25DbGlja30gZGF0YS1kaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gZGF0YS1jaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9PlxuXHRcdFx0XHQ8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSB0eXBlPSdyYWRpbycgZGVmYXVsdENoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9IC8+XG5cdFx0XHRcdDxpY29uLlJlZ3VsYXJTVkdJY29uIGNsYXNzTmFtZT1cImljb25cIiBpY29uPXt0aGlzLnByb3BzLmNoZWNrZWQ/J2ZhRG90Q2lyY2xlJzonZmFDaXJjbGUnfSAvPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNvbnRlbnQoKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG52YXIgUmFkaW8gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlJhZGlvJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkYXRhVHlwZTogJ1N0cmluZycsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2Vcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB0aGlzLl9faW5pdFZhbHVlKClcblx0XHR9O1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy52YWx1ZSAhPT0gbnVsbCl7XG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdH1lbHNle1xuXHRcdFx0X3ZhbHVlID0gJyc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucGFyc2VWYWx1ZShfdmFsdWUpO1xuXHR9LFxuXHRwYXJzZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSl7XG5cdFx0XHRyZXR1cm4gKG5ldyB3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0odmFsdWUpKS52YWx1ZU9mKCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRocm93IG5ldyBFcnJvcignRGF0YSBUeXBlIE9mIExpc3QgSXMgTnVsbC4nKTtcblx0fSxcblx0X19pc0NoZWNrZWQ6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShpdGVtW3RoaXMucHJvcHMudmFsdWVLZXldKTtcblx0XHRpZihfdmFsdWUgPT09IHRoaXMuc3RhdGUudmFsdWUpe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHRfX29uUmFkaW9JdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgaXRlbSl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCBldmVudC5kYXRhLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoaXRlbVt0aGlzLnByb3BzLnZhbHVlS2V5XSk7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZighem4uaXMoaXRlbSwgJ29iamVjdCcpKXtcblx0XHRcdHZhciBfdGVtcCA9IHsgaW5kZXg6IGluZGV4IH07XG5cdFx0XHRfdGVtcFt0aGlzLnByb3BzLnRleHRLZXldID0gX3RlbXBbdGhpcy5wcm9wcy52YWx1ZUtleV0gPSBpdGVtO1xuXHRcdFx0aXRlbSA9IF90ZW1wO1xuXHRcdH1lbHNle1xuXHRcdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdH1cblxuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5pdGVtUmVuZGVyICYmIHRoaXMucHJvcHMuaXRlbVJlbmRlcihpdGVtLCBpbmRleCk7XG5cdFx0aWYoIV9yZXR1cm4pIHtcblx0XHRcdF9yZXR1cm4gPSBpdGVtW3RoaXMucHJvcHMudGV4dEtleV07XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiA8UmFkaW9JdGVtIGtleT17aW5kZXh9IGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSB7Li4uaXRlbX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpPT50aGlzLl9fb25SYWRpb0l0ZW1DbGljayhldmVudCwgaXRlbSl9XG5cdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5fX2lzQ2hlY2tlZChpdGVtKX0gLz47XG5cdH0sXG5cdFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIGNhbGxiYWNrKXtcblx0XHR2YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZSh2YWx1ZSk7XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoeyB2YWx1ZTogdmFsdWUgfSwgdGhpcyk7XG5cdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2sodmFsdWUsIHRoaXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXJhZGlvJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJhZGlvO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlNlbGVjdCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRkYXRhVHlwZTogJ051bWJlcicsXG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRwbGFjZWhvbGRlcjogXCJzZWxlY3QgLi4uXCJcblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0UmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB0aGlzLnBhcnNlVmFsdWUodGhpcy5wcm9wcy52YWx1ZSlcblx0XHR9XG5cdH0sXG5cdHBhcnNlVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYod2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKXtcblx0XHRcdHJldHVybiB3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0odmFsdWUpLnZhbHVlT2YoKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEYXRhIFR5cGUgT2YgTGlzdCBJcyBOdWxsLicpO1xuXHR9LFxuXHRfX29uU2VsZWN0Q2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH0sXG5cdF9fcGFyc2VFeHA6IGZ1bmN0aW9uIChpdGVtLCBleHApe1xuXHRcdGlmKHR5cGVvZiBleHAgPT0gJ3N0cmluZycpe1xuXHRcdFx0aWYoZXhwLmluZGV4T2YoJ3snKSE9LTEpe1xuXHRcdFx0XHRyZXR1cm4gem4uZm9ybWF0KGV4cCwgaXRlbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gaXRlbVtleHBdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZih0eXBlb2YgZXhwID09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiBleHAoaXRlbSk7XG5cdFx0fVxuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF92YWx1ZSwgX3RleHQ7XG5cdFx0aWYoem4uaXMoaXRlbSwgJ29iamVjdCcpKXtcblx0XHRcdF92YWx1ZSA9IHRoaXMuX19wYXJzZUV4cChpdGVtLCB0aGlzLnByb3BzLnZhbHVlS2V5KTtcblx0XHRcdF90ZXh0ID0gdGhpcy5fX3BhcnNlRXhwKGl0ZW0sIHRoaXMucHJvcHMudGV4dEtleSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRfdmFsdWUgPSBfdGV4dCA9IGl0ZW07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxvcHRpb24gc2VsZWN0ZWQ9e3RoaXMuc3RhdGUudmFsdWUgPT0gX3ZhbHVlfSBrZXk9e192YWx1ZX0gdmFsdWU9e192YWx1ZX0gZGF0YS12YWx1ZT17X3ZhbHVlfSBkYXRhLXRleHQ9e190ZXh0fT57X3RleHR9PC9vcHRpb24+O1xuXHR9LFxuXHRfX29uU2VsZWN0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxuXHRcdFx0X2RhdGEgPSBldmVudC50YXJnZXQuY2hpbGROb2Rlc1tfdGFyZ2V0LnNlbGVjdGVkSW5kZXhdLmRhdGFzZXQsXG5cdFx0XHRfdmFsdWUgPSB0aGlzLl9fcGFyc2VFeHAoX2RhdGEsIHRoaXMucHJvcHMudmFsdWVLZXkpLFxuXHRcdFx0X3RleHQgPSB0aGlzLl9fcGFyc2VFeHAoX2RhdGEsIHRoaXMucHJvcHMudGV4dEtleSk7XG5cblx0XHRldmVudC5zZWxlY3RlZEluZGV4ID0gKCtfdGFyZ2V0LnNlbGVjdGVkSW5kZXggLSAxKTtcblx0XHRldmVudC5kYXRhID0gX2RhdGE7XG5cdFx0ZXZlbnQudmFsdWUgPSBfdmFsdWU7XG5cdFx0ZXZlbnQudGV4dCA9IF90ZXh0O1xuXG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShfdmFsdWUpO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnBhcnNlVmFsdWUodGhpcy5zdGF0ZS52YWx1ZSB8fCBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZSk7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKHZhbHVlKTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgdmFsdWU6IHZhbHVlIH0sIHRoaXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXNlbGVjdFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XG5cdFx0XHRcdHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuXHRcdFx0XHRuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG5cdFx0XHRcdHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuXHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZHx8dGhpcy5wcm9wcy5yZWFkb25seX1cblx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25TZWxlY3RDaGFuZ2V9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX19vblNlbGVjdENsaWNrfT5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nJyBkaXNhYmxlZD57dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn08L29wdGlvbj5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cdFxuXHRcdFx0PC9zZWxlY3Q+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgaWNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaWNvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVW5jb250cm9sQ2hlY2tib3gnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRsYXlvdXQ6ICdmbGV4LXJvdycsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiAoKXt9XG5cdFx0fVxuXHR9LFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGV2ZW50LmRhdGEgPSB0aGlzLnByb3BzO1xuXHRcdGV2ZW50LnNlbmRlciA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fcmVuZGVyQ29udGVudDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIgJiYgdGhpcy5wcm9wcy5jb250ZW50UmVuZGVyKHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IHRoaXMucHJvcHMudGV4dHx8Jyc7XG5cdFx0fVxuXHRcdGlmKF9yZXR1cm4pIHtcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57X3JldHVybn08L2Rpdj47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci11bmNvbnRyb2wtY2hlY2tib3gnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuXHRcdFx0XHRkYXRhLWRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBcblx0XHRcdFx0ZGF0YS1jaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX19vbkNsaWNrfSA+XG5cdFx0XHRcdDxpbnB1dCBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfS8+XG5cdFx0XHRcdDxpY29uLlJlZ3VsYXJTVkdJY29uIGNsYXNzTmFtZT1cImljb25cIiBpY29uPXt0aGlzLnByb3BzLmNoZWNrZWQ/J2ZhQ2hlY2tTcXVhcmUnOidmYVNxdWFyZSd9IC8+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ29udGVudCgpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnQ2hlY2tib3gnOiByZXF1aXJlKCcuL0NoZWNrYm94JyksXG4gICAgJ1VuY29udHJvbENoZWNrYm94JzogcmVxdWlyZSgnLi9VbmNvbnRyb2xDaGVja2JveCcpLFxuICAgICdDaGVja2JveHMnOiByZXF1aXJlKCcuL0NoZWNrYm94cycpLFxuICAgICdSYWRpbyc6IHJlcXVpcmUoJy4vUmFkaW8nKSxcbiAgICAnU2VsZWN0JzogcmVxdWlyZSgnLi9TZWxlY3QnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJpY29uXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=