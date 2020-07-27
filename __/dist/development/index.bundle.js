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
    return {
      checked: this.props.checked
    };
  },
  __onClick: function __onClick(event) {
    if (this.props.disabled) {
      return false;
    }

    this.state.checked = event.checked = !this.state.checked;
    this.setState({
      checked: this.state.checked
    });
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
    }

    return false;
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
    console.log(this.state.value, ReactDOM.findDOMNode(this)); //ReactDOM.findDOMNode(this).value = this.state.value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3hzLmpzIiwid2VicGFjazovLy8uL1JhZGlvLmpzIiwid2VicGFjazovLy8uL1NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9VbmNvbnRyb2xDaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaWNvblwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJpY29uIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJ0ZXh0IiwibGF5b3V0IiwiY2hlY2tlZCIsImRpc2FibGVkIiwiZ2V0SW5pdGlhbFN0YXRlIiwicHJvcHMiLCJfX29uQ2xpY2siLCJldmVudCIsInN0YXRlIiwic2V0U3RhdGUiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwidmFsdWUiLCJfX29uQ2hhbmdlIiwiX19yZW5kZXJDb250ZW50IiwiX3JldHVybiIsImNvbnRlbnRSZW5kZXIiLCJyZW5kZXIiLCJyZWFjdCIsImNsYXNzbmFtZSIsInN0eWxlIiwibmFtZSIsIlVuY29udHJvbENoZWNrYm94IiwidGV4dEtleSIsInZhbHVlS2V5IiwiZGF0YVR5cGUiLCJfX2luaXRWYWx1ZSIsIl92YWx1ZSIsInBhcnNlVmFsdWUiLCJ3aW5kb3ciLCJ2YWx1ZU9mIiwiRXJyb3IiLCJfX2lzQ2hlY2tlZCIsIml0ZW0iLCJpbmRleCIsInpuIiwiaXMiLCJpbmRleE9mIiwiX19vbkl0ZW1DbGljayIsImNoZWNrYm94Iiwib25JdGVtQ2xpY2siLCJfX2NsaWNrRGVmYXVsdCIsIl9kYXRhIiwiZGF0YSIsInNwbGljZSIsInB1c2giLCJmb3JjZVVwZGF0ZSIsIl9faXRlbVJlbmRlciIsIl90ZW1wIiwiaXRlbVJlbmRlciIsImNoaWxkcmVuIiwiUmFkaW9JdGVtIiwic2VuZGVyIiwibGFiZWwiLCJSYWRpbyIsIl9fb25SYWRpb0l0ZW1DbGljayIsImNhbGxiYWNrIiwiUmVhY3RET00iLCJwbGFjZWhvbGRlciIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsImZpbmRET01Ob2RlIiwiX19vblNlbGVjdENsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJfX3BhcnNlRXhwIiwiZXhwIiwiZm9ybWF0IiwiX3RleHQiLCJfX29uU2VsZWN0Q2hhbmdlIiwiX3RhcmdldCIsInRhcmdldCIsImNoaWxkTm9kZXMiLCJzZWxlY3RlZEluZGV4IiwiZGF0YXNldCIsInJlcXVpcmVkIiwicmVhZG9ubHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFB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LGFBQWEsK0JBQStCLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBpY29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1pY29uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJDaGVja2JveCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdGxheW91dDogJ2ZsZXgtcm93Jyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZFxuXHRcdH1cblx0fSxcblx0X19vbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLmNoZWNrZWQgPSBldmVudC5jaGVja2VkID0gIXRoaXMuc3RhdGUuY2hlY2tlZDtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNoZWNrZWQ6IHRoaXMuc3RhdGUuY2hlY2tlZFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmNoZWNrZWQ7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkOiB2YWx1ZSB9KTtcblx0fSxcblx0X19vbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHsgY2hlY2tlZDogIXRoaXMuc3RhdGUuY2hlY2tlZCB9KTtcblx0fSxcblx0X19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuY29udGVudFJlbmRlciAmJiB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIodGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gbnVsbCl7XG5cdFx0XHRfcmV0dXJuID0gdGhpcy5wcm9wcy50ZXh0fHwnJztcblx0XHR9XG5cblx0XHRpZihfcmV0dXJuKSB7XG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e19yZXR1cm59PC9kaXY+O1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWNoZWNrYm94JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gXG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fb25DbGlja30gPlxuXHRcdFx0XHQ8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfSBvbkNoYW5nZT17dGhpcy5fX29uQ2hhbmdlfSAvPlxuXHRcdFx0XHQ8aWNvbi5SZWd1bGFyU1ZHSWNvbiBjbGFzc05hbWU9XCJpY29uXCIgaWNvbj17dGhpcy5zdGF0ZS5jaGVja2VkPydmYUNoZWNrU3F1YXJlJzonZmFTcXVhcmUnfSAvPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNvbnRlbnQoKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFVuY29udHJvbENoZWNrYm94ID0gcmVxdWlyZSgnLi9VbmNvbnRyb2xDaGVja2JveCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQ2hlY2tib3hzJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dEtleTogJ3RleHQnLFxuXHRcdFx0dmFsdWVLZXk6ICd2YWx1ZScsXG5cdFx0XHRkYXRhVHlwZTogJ1N0cmluZydcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB0aGlzLl9faW5pdFZhbHVlKClcblx0XHR9O1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsKXtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRfdmFsdWUgPSBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3ZhbHVlO1xuXHR9LFxuXHRwYXJzZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSl7XG5cdFx0XHRyZXR1cm4gKG5ldyB3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0odmFsdWUpKS52YWx1ZU9mKCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRocm93IG5ldyBFcnJvcignRGF0YSBUeXBlIE9mIExpc3QgSXMgTnVsbC4nKTtcblx0fSxcblx0X19pc0NoZWNrZWQ6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF92YWx1ZSA9IGl0ZW1bdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0aWYoem4uaXModGhpcy5zdGF0ZS52YWx1ZSwgJ2FycmF5Jykpe1xuXHRcdFx0aWYodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRfX29uSXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGNoZWNrYm94KXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25JdGVtQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkl0ZW1DbGljayhldmVudCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9fY2xpY2tEZWZhdWx0KGV2ZW50KTtcblx0XHR9XG5cdH0sXG5cdF9fY2xpY2tEZWZhdWx0OiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGEsXG5cdFx0XHRfdmFsdWUgPSBfZGF0YVt0aGlzLnByb3BzLnZhbHVlS2V5XTtcblx0XHRpZih6bi5pcyh0aGlzLnN0YXRlLnZhbHVlLCAnYXJyYXknKSkge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSkgIT0gLTEpe1xuXHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnNwbGljZSh0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSwgMSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0Jykpe1xuXHRcdFx0dmFyIF90ZW1wID0geyBpbmRleDogaW5kZXggfTtcblx0XHRcdF90ZW1wW3RoaXMucHJvcHMudGV4dEtleV0gPSBfdGVtcFt0aGlzLnByb3BzLnZhbHVlS2V5XSA9IGl0ZW07XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fWVsc2V7XG5cdFx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0fVxuXG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLml0ZW1SZW5kZXIgJiYgdGhpcy5wcm9wcy5pdGVtUmVuZGVyKGl0ZW0sIGluZGV4KTtcblx0XHRpZighX3JldHVybikge1xuXHRcdFx0X3JldHVybiA9IGl0ZW1bdGhpcy5wcm9wcy50ZXh0S2V5XTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIDxVbmNvbnRyb2xDaGVja2JveCBrZXk9e2luZGV4fVxuXHRcdFx0XHRcdGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRcdHsuLi5pdGVtfVxuXHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuX19pc0NoZWNrZWQoaXRlbSwgaW5kZXgpfSBcblx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpPT50aGlzLl9fb25JdGVtQ2xpY2soZXZlbnQsIGl0ZW0pfS8+O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1jaGVja2JveHNcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgaWNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaWNvbicpO1xuXG52YXIgUmFkaW9JdGVtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJSYWRpb0l0ZW0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdGRpc2FibGVkOiBmYWxzZVxuXHRcdH1cblx0fSxcblx0X19vbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRldmVudC5kYXRhID0gdGhpcy5wcm9wcztcblx0XHRldmVudC5zZW5kZXIgPSB0aGlzO1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX3JlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5jb250ZW50UmVuZGVyICYmIHRoaXMucHJvcHMuY29udGVudFJlbmRlcih0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBudWxsKXtcblx0XHRcdF9yZXR1cm4gPSB0aGlzLnByb3BzLnRleHQgfHwgdGhpcy5wcm9wcy5sYWJlbCB8fCcnO1xuXHRcdH1cblxuXHRcdGlmKF9yZXR1cm4pIHtcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57X3JldHVybn08L2Rpdj47XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcmFkaW8taXRlbScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gb25DbGljaz17dGhpcy5fX29uQ2xpY2t9IGRhdGEtZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IGRhdGEtY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfT5cblx0XHRcdFx0PGlucHV0IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gdHlwZT0ncmFkaW8nIGRlZmF1bHRDaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSAvPlxuXHRcdFx0XHQ8aWNvbi5SZWd1bGFyU1ZHSWNvbiBjbGFzc05hbWU9XCJpY29uXCIgaWNvbj17dGhpcy5wcm9wcy5jaGVja2VkPydmYURvdENpcmNsZSc6J2ZhQ2lyY2xlJ30gLz5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxudmFyIFJhZGlvID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJSYWRpbycsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHRLZXk6ICd0ZXh0Jyxcblx0XHRcdHZhbHVlS2V5OiAndmFsdWUnLFxuXHRcdFx0ZGF0YVR5cGU6ICdTdHJpbmcnLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdGhpcy5fX2luaXRWYWx1ZSgpXG5cdFx0fTtcblx0fSxcblx0X19pbml0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSBudWxsO1xuXHRcdGlmKHRoaXMucHJvcHMudmFsdWUgIT09IG51bGwpe1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblx0XHR9ZWxzZXtcblx0XHRcdF92YWx1ZSA9ICcnO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnBhcnNlVmFsdWUoX3ZhbHVlKTtcblx0fSxcblx0cGFyc2VWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0pe1xuXHRcdFx0cmV0dXJuIChuZXcgd2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKHZhbHVlKSkudmFsdWVPZigpO1xuXHRcdH1cblx0XHRcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgVHlwZSBPZiBMaXN0IElzIE51bGwuJyk7XG5cdH0sXG5cdF9faXNDaGVja2VkOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoaXRlbVt0aGlzLnByb3BzLnZhbHVlS2V5XSk7XG5cdFx0aWYoX3ZhbHVlID09PSB0aGlzLnN0YXRlLnZhbHVlKXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSxcblx0X19vblJhZGlvSXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0pe1xuXHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgZXZlbnQuZGF0YS5kaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IGV2ZW50LnZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGl0ZW1bdGhpcy5wcm9wcy52YWx1ZUtleV0pO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGl0ZW0sICdvYmplY3QnKSl7XG5cdFx0XHR2YXIgX3RlbXAgPSB7IGluZGV4OiBpbmRleCB9O1xuXHRcdFx0X3RlbXBbdGhpcy5wcm9wcy50ZXh0S2V5XSA9IF90ZW1wW3RoaXMucHJvcHMudmFsdWVLZXldID0gaXRlbTtcblx0XHRcdGl0ZW0gPSBfdGVtcDtcblx0XHR9ZWxzZXtcblx0XHRcdGl0ZW0uaW5kZXggPSBpbmRleDtcblx0XHR9XG5cblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuaXRlbVJlbmRlciAmJiB0aGlzLnByb3BzLml0ZW1SZW5kZXIoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKCFfcmV0dXJuKSB7XG5cdFx0XHRfcmV0dXJuID0gaXRlbVt0aGlzLnByb3BzLnRleHRLZXldO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gPFJhZGlvSXRlbSBrZXk9e2luZGV4fSBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gey4uLml0ZW19XG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KT0+dGhpcy5fX29uUmFkaW9JdGVtQ2xpY2soZXZlbnQsIGl0ZW0pfVxuXHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuX19pc0NoZWNrZWQoaXRlbSl9IC8+O1xuXHR9LFxuXHRcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCBjYWxsYmFjayl7XG5cdFx0dmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUodmFsdWUpO1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgdmFsdWU6IHZhbHVlIH0sIHRoaXMpO1xuXHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKHZhbHVlLCB0aGlzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1yYWRpbycsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSYWRpbztcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJTZWxlY3QnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGF0YVR5cGU6ICdOdW1iZXInLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHRcdHRleHRLZXk6ICd0ZXh0Jyxcblx0XHRcdHZhbHVlS2V5OiAndmFsdWUnLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwic2VsZWN0IC4uLlwiXG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsdWUsIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpKTtcblx0XHQvL1JlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdGhpcy5wYXJzZVZhbHVlKHRoaXMucHJvcHMudmFsdWUpXG5cdFx0fVxuXHR9LFxuXHRwYXJzZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSl7XG5cdFx0XHRyZXR1cm4gd2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKHZhbHVlKS52YWx1ZU9mKCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRocm93IG5ldyBFcnJvcignRGF0YSBUeXBlIE9mIExpc3QgSXMgTnVsbC4nKTtcblx0fSxcblx0X19vblNlbGVjdENsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9LFxuXHRfX3BhcnNlRXhwOiBmdW5jdGlvbiAoaXRlbSwgZXhwKXtcblx0XHRpZih0eXBlb2YgZXhwID09ICdzdHJpbmcnKXtcblx0XHRcdGlmKGV4cC5pbmRleE9mKCd7JykhPS0xKXtcblx0XHRcdFx0cmV0dXJuIHpuLmZvcm1hdChleHAsIGl0ZW0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGl0ZW1bZXhwXTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYodHlwZW9mIGV4cCA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gZXhwKGl0ZW0pO1xuXHRcdH1cblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfdmFsdWUsIF90ZXh0O1xuXHRcdGlmKHpuLmlzKGl0ZW0sICdvYmplY3QnKSl7XG5cdFx0XHRfdmFsdWUgPSB0aGlzLl9fcGFyc2VFeHAoaXRlbSwgdGhpcy5wcm9wcy52YWx1ZUtleSk7XG5cdFx0XHRfdGV4dCA9IHRoaXMuX19wYXJzZUV4cChpdGVtLCB0aGlzLnByb3BzLnRleHRLZXkpO1xuXHRcdH1lbHNle1xuXHRcdFx0X3ZhbHVlID0gX3RleHQgPSBpdGVtO1xuXHRcdH1cblxuXHRcdHJldHVybiA8b3B0aW9uIGtleT17X3ZhbHVlfSB2YWx1ZT17X3ZhbHVlfSBkYXRhLXZhbHVlPXtfdmFsdWV9IGRhdGEtdGV4dD17X3RleHR9PntfdGV4dH08L29wdGlvbj47XG5cdH0sXG5cdF9fb25TZWxlY3RDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF90YXJnZXQgPSBldmVudC50YXJnZXQsXG5cdFx0XHRfZGF0YSA9IGV2ZW50LnRhcmdldC5jaGlsZE5vZGVzW190YXJnZXQuc2VsZWN0ZWRJbmRleF0uZGF0YXNldCxcblx0XHRcdF92YWx1ZSA9IHRoaXMuX19wYXJzZUV4cChfZGF0YSwgdGhpcy5wcm9wcy52YWx1ZUtleSksXG5cdFx0XHRfdGV4dCA9IHRoaXMuX19wYXJzZUV4cChfZGF0YSwgdGhpcy5wcm9wcy50ZXh0S2V5KTtcblxuXHRcdGV2ZW50LnNlbGVjdGVkSW5kZXggPSAoK190YXJnZXQuc2VsZWN0ZWRJbmRleCAtIDEpO1xuXHRcdGV2ZW50LmRhdGEgPSBfZGF0YTtcblx0XHRldmVudC52YWx1ZSA9IF92YWx1ZTtcblx0XHRldmVudC50ZXh0ID0gX3RleHQ7XG5cblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKF92YWx1ZSk7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGFyc2VWYWx1ZSh0aGlzLnN0YXRlLnZhbHVlIHx8IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlKTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUodmFsdWUpO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoeyB2YWx1ZTogdmFsdWUgfSwgdGhpcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItc2VsZWN0XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX1cblx0XHRcdFx0c3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG5cdFx0XHRcdG5hbWU9e3RoaXMucHJvcHMubmFtZX1cblx0XHRcdFx0cmVxdWlyZWQ9e3RoaXMucHJvcHMucmVxdWlyZWR9XG5cdFx0XHRcdGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfHx0aGlzLnByb3BzLnJlYWRvbmx5fVxuXHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cblx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuX19vblNlbGVjdENoYW5nZX1cblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uU2VsZWN0Q2xpY2t9PlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScnIGRpc2FibGVkPnt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfTwvb3B0aW9uPlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlx0XG5cdFx0XHQ8L3NlbGVjdD5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBpY29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1pY29uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJVbmNvbnRyb2xDaGVja2JveCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdGxheW91dDogJ2ZsZXgtcm93Jyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uICgpe31cblx0XHR9XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0ZXZlbnQuZGF0YSA9IHRoaXMucHJvcHM7XG5cdFx0ZXZlbnQuc2VuZGVyID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuY29udGVudFJlbmRlciAmJiB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIodGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gbnVsbCl7XG5cdFx0XHRfcmV0dXJuID0gdGhpcy5wcm9wcy50ZXh0fHwnJztcblx0XHR9XG5cdFx0aWYoX3JldHVybikge1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntfcmV0dXJufTwvZGl2Pjtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXVuY29udHJvbC1jaGVja2JveCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG5cdFx0XHRcdGRhdGEtZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IFxuXHRcdFx0XHRkYXRhLWNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH1cblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uQ2xpY2t9ID5cblx0XHRcdFx0PGlucHV0IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9Lz5cblx0XHRcdFx0PGljb24uUmVndWxhclNWR0ljb24gY2xhc3NOYW1lPVwiaWNvblwiIGljb249e3RoaXMucHJvcHMuY2hlY2tlZD8nZmFDaGVja1NxdWFyZSc6J2ZhU3F1YXJlJ30gLz5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdDaGVja2JveCc6IHJlcXVpcmUoJy4vQ2hlY2tib3gnKSxcbiAgICAnVW5jb250cm9sQ2hlY2tib3gnOiByZXF1aXJlKCcuL1VuY29udHJvbENoZWNrYm94JyksXG4gICAgJ0NoZWNrYm94cyc6IHJlcXVpcmUoJy4vQ2hlY2tib3hzJyksXG4gICAgJ1JhZGlvJzogcmVxdWlyZSgnLi9SYWRpbycpLFxuICAgICdTZWxlY3QnOiByZXF1aXJlKCcuL1NlbGVjdCcpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdERPTVwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImljb25cIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==