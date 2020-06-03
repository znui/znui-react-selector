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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vQ2hlY2tib3hzLmpzIiwid2VicGFjazovLy8uL1JhZGlvLmpzIiwid2VicGFjazovLy8uL1NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9VbmNvbnRyb2xDaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaWNvblwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJpY29uIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJ0ZXh0IiwibGF5b3V0IiwiY2hlY2tlZCIsImRpc2FibGVkIiwiZ2V0SW5pdGlhbFN0YXRlIiwicHJvcHMiLCJfX29uQ2xpY2siLCJldmVudCIsInN0YXRlIiwic2V0U3RhdGUiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwidmFsdWUiLCJfX29uQ2hhbmdlIiwiX19yZW5kZXJDb250ZW50IiwiX3JldHVybiIsImNvbnRlbnRSZW5kZXIiLCJyZW5kZXIiLCJyZWFjdCIsImNsYXNzbmFtZSIsInN0eWxlIiwibmFtZSIsIlVuY29udHJvbENoZWNrYm94IiwidGV4dEtleSIsInZhbHVlS2V5IiwiZGF0YVR5cGUiLCJfX2luaXRWYWx1ZSIsIl92YWx1ZSIsInBhcnNlVmFsdWUiLCJ3aW5kb3ciLCJ2YWx1ZU9mIiwiRXJyb3IiLCJfX2lzQ2hlY2tlZCIsIml0ZW0iLCJpbmRleCIsInpuIiwiaXMiLCJpbmRleE9mIiwiX19vbkl0ZW1DbGljayIsImNoZWNrYm94Iiwib25JdGVtQ2xpY2siLCJfX2NsaWNrRGVmYXVsdCIsIl9kYXRhIiwiZGF0YSIsInNwbGljZSIsInB1c2giLCJmb3JjZVVwZGF0ZSIsIl9faXRlbVJlbmRlciIsIl90ZW1wIiwiaXRlbVJlbmRlciIsImNoaWxkcmVuIiwiUmFkaW9JdGVtIiwic2VuZGVyIiwiUmFkaW8iLCJfX29uUmFkaW9JdGVtQ2xpY2siLCJjYWxsYmFjayIsIlJlYWN0RE9NIiwicGxhY2Vob2xkZXIiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kRE9NTm9kZSIsIl9fb25TZWxlY3RDbGljayIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiX19wYXJzZUV4cCIsImV4cCIsImZvcm1hdCIsIl90ZXh0IiwiX19vblNlbGVjdENoYW5nZSIsIl90YXJnZXQiLCJ0YXJnZXQiLCJjaGlsZE5vZGVzIiwic2VsZWN0ZWRJbmRleCIsImRhdGFzZXQiLCJyZXF1aXJlZCIsInJlYWRvbmx5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVy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dmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgaWNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaWNvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQ2hlY2tib3gnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRsYXlvdXQ6ICdmbGV4LXJvdycsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdGRpc2FibGVkOiBmYWxzZVxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWRcblx0XHR9XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5zdGF0ZS5jaGVja2VkID0gZXZlbnQuY2hlY2tlZCA9ICF0aGlzLnN0YXRlLmNoZWNrZWQ7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjaGVja2VkOiB0aGlzLnN0YXRlLmNoZWNrZWRcblx0XHR9KTtcblxuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5jaGVja2VkO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgY2hlY2tlZDogdmFsdWUgfSk7XG5cdH0sXG5cdF9fb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQ6ICF0aGlzLnN0YXRlLmNoZWNrZWQgfSk7XG5cdH0sXG5cdF9fcmVuZGVyQ29udGVudDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIgJiYgdGhpcy5wcm9wcy5jb250ZW50UmVuZGVyKHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IHRoaXMucHJvcHMudGV4dHx8Jyc7XG5cdFx0fVxuXG5cdFx0aWYoX3JldHVybikge1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntfcmV0dXJufTwvZGl2Pjtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1jaGVja2JveCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG5cdFx0XHRcdGRhdGEtZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IFxuXHRcdFx0XHRkYXRhLWNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH1cblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uQ2xpY2t9ID5cblx0XHRcdFx0PGlucHV0IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH0gb25DaGFuZ2U9e3RoaXMuX19vbkNoYW5nZX0gLz5cblx0XHRcdFx0PGljb24uUmVndWxhclNWR0ljb24gY2xhc3NOYW1lPVwiaWNvblwiIGljb249e3RoaXMuc3RhdGUuY2hlY2tlZD8nZmFDaGVja1NxdWFyZSc6J2ZhU3F1YXJlJ30gLz5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBVbmNvbnRyb2xDaGVja2JveCA9IHJlcXVpcmUoJy4vVW5jb250cm9sQ2hlY2tib3gnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkNoZWNrYm94cycsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHRLZXk6ICd0ZXh0Jyxcblx0XHRcdHZhbHVlS2V5OiAndmFsdWUnLFxuXHRcdFx0ZGF0YVR5cGU6ICdTdHJpbmcnXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdGhpcy5fX2luaXRWYWx1ZSgpXG5cdFx0fTtcblx0fSxcblx0X19pbml0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSBudWxsO1xuXHRcdGlmKHRoaXMucHJvcHMudmFsdWUgIT0gbnVsbCl7XG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdH1lbHNle1xuXHRcdFx0X3ZhbHVlID0gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF92YWx1ZTtcblx0fSxcblx0cGFyc2VWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0pe1xuXHRcdFx0cmV0dXJuIChuZXcgd2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKHZhbHVlKSkudmFsdWVPZigpO1xuXHRcdH1cblx0XHRcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgVHlwZSBPZiBMaXN0IElzIE51bGwuJyk7XG5cdH0sXG5cdF9faXNDaGVja2VkOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfdmFsdWUgPSBpdGVtW3RoaXMucHJvcHMudmFsdWVLZXldO1xuXHRcdGlmKHpuLmlzKHRoaXMuc3RhdGUudmFsdWUsICdhcnJheScpKXtcblx0XHRcdGlmKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0X19vbkl0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBjaGVja2JveCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uSXRlbUNsaWNrICYmIHRoaXMucHJvcHMub25JdGVtQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fX2NsaWNrRGVmYXVsdChldmVudCk7XG5cdFx0fVxuXHR9LFxuXHRfX2NsaWNrRGVmYXVsdDogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX2RhdGEgPSBldmVudC5kYXRhLFxuXHRcdFx0X3ZhbHVlID0gX2RhdGFbdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0aWYoem4uaXModGhpcy5zdGF0ZS52YWx1ZSwgJ2FycmF5JykpIHtcblx0XHRcdGlmKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcblx0XHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5zcGxpY2UodGhpcy5zdGF0ZS52YWx1ZS5pbmRleE9mKF92YWx1ZSksIDEpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuc3RhdGUudmFsdWUucHVzaChfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRldmVudC52YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZighem4uaXMoaXRlbSwgJ29iamVjdCcpKXtcblx0XHRcdHZhciBfdGVtcCA9IHsgaW5kZXg6IGluZGV4IH07XG5cdFx0XHRfdGVtcFt0aGlzLnByb3BzLnRleHRLZXldID0gX3RlbXBbdGhpcy5wcm9wcy52YWx1ZUtleV0gPSBpdGVtO1xuXHRcdFx0aXRlbSA9IF90ZW1wO1xuXHRcdH1lbHNle1xuXHRcdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdH1cblxuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5pdGVtUmVuZGVyICYmIHRoaXMucHJvcHMuaXRlbVJlbmRlcihpdGVtLCBpbmRleCk7XG5cdFx0aWYoIV9yZXR1cm4pIHtcblx0XHRcdF9yZXR1cm4gPSBpdGVtW3RoaXMucHJvcHMudGV4dEtleV07XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiA8VW5jb250cm9sQ2hlY2tib3gga2V5PXtpbmRleH1cblx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cblx0XHRcdFx0XHR7Li4uaXRlbX1cblx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLl9faXNDaGVja2VkKGl0ZW0sIGluZGV4KX0gXG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KT0+dGhpcy5fX29uSXRlbUNsaWNrKGV2ZW50LCBpdGVtKX0vPjtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItY2hlY2tib3hzXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGljb24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWljb24nKTtcblxudmFyIFJhZGlvSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSUmFkaW9JdGVtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0ZXZlbnQuZGF0YSA9IHRoaXMucHJvcHM7XG5cdFx0ZXZlbnQuc2VuZGVyID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuY29udGVudFJlbmRlciAmJiB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIodGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gbnVsbCl7XG5cdFx0XHRfcmV0dXJuID0gdGhpcy5wcm9wcy50ZXh0fHwnJztcblx0XHR9XG5cblx0XHRpZihfcmV0dXJuKSB7XG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e19yZXR1cm59PC9kaXY+O1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXJhZGlvLWl0ZW0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IG9uQ2xpY2s9e3RoaXMuX19vbkNsaWNrfSBkYXRhLWRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBkYXRhLWNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH0+XG5cdFx0XHRcdDxpbnB1dCBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IHR5cGU9J3JhZGlvJyBkZWZhdWx0Q2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gLz5cblx0XHRcdFx0PGljb24uUmVndWxhclNWR0ljb24gY2xhc3NOYW1lPVwiaWNvblwiIGljb249e3RoaXMucHJvcHMuY2hlY2tlZD8nZmFEb3RDaXJjbGUnOidmYUNpcmNsZSd9IC8+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ29udGVudCgpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbnZhciBSYWRpbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSUmFkaW8nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRhdGFUeXBlOiAnU3RyaW5nJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZVxuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHRoaXMuX19pbml0VmFsdWUoKVxuXHRcdH07XG5cdH0sXG5cdF9faW5pdFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3ZhbHVlID0gbnVsbDtcblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICE9PSBudWxsKXtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRfdmFsdWUgPSAnJztcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wYXJzZVZhbHVlKF92YWx1ZSk7XG5cdH0sXG5cdHBhcnNlVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYod2luZG93W3RoaXMucHJvcHMuZGF0YVR5cGVdKXtcblx0XHRcdHJldHVybiAobmV3IHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSh2YWx1ZSkpLnZhbHVlT2YoKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEYXRhIFR5cGUgT2YgTGlzdCBJcyBOdWxsLicpO1xuXHR9LFxuXHRfX2lzQ2hlY2tlZDogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGl0ZW1bdGhpcy5wcm9wcy52YWx1ZUtleV0pO1xuXHRcdGlmKF92YWx1ZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdF9fb25SYWRpb0l0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBpdGVtKXtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkIHx8IGV2ZW50LmRhdGEuZGlzYWJsZWQpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSBldmVudC52YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShpdGVtW3RoaXMucHJvcHMudmFsdWVLZXldKTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0Jykpe1xuXHRcdFx0dmFyIF90ZW1wID0geyBpbmRleDogaW5kZXggfTtcblx0XHRcdF90ZW1wW3RoaXMucHJvcHMudGV4dEtleV0gPSBfdGVtcFt0aGlzLnByb3BzLnZhbHVlS2V5XSA9IGl0ZW07XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fWVsc2V7XG5cdFx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0fVxuXG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLml0ZW1SZW5kZXIgJiYgdGhpcy5wcm9wcy5pdGVtUmVuZGVyKGl0ZW0sIGluZGV4KTtcblx0XHRpZighX3JldHVybikge1xuXHRcdFx0X3JldHVybiA9IGl0ZW1bdGhpcy5wcm9wcy50ZXh0S2V5XTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIDxSYWRpb0l0ZW0ga2V5PXtpbmRleH0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IHsuLi5pdGVtfVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk9PnRoaXMuX19vblJhZGlvSXRlbUNsaWNrKGV2ZW50LCBpdGVtKX1cblx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLl9faXNDaGVja2VkKGl0ZW0pfSAvPjtcblx0fSxcblx0XG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgY2FsbGJhY2spe1xuXHRcdHZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKHZhbHVlKTtcblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWx1ZSB9LCB0aGlzKTtcblx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayh2YWx1ZSwgdGhpcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcmFkaW8nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmFkaW87XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSU2VsZWN0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGFUeXBlOiAnTnVtYmVyJyxcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0XHR0ZXh0S2V5OiAndGV4dCcsXG5cdFx0XHR2YWx1ZUtleTogJ3ZhbHVlJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdHBsYWNlaG9sZGVyOiBcInNlbGVjdCAuLi5cIlxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlLCBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKSk7XG5cdFx0Ly9SZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHRoaXMucGFyc2VWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKVxuXHRcdH1cblx0fSxcblx0cGFyc2VWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih3aW5kb3dbdGhpcy5wcm9wcy5kYXRhVHlwZV0pe1xuXHRcdFx0cmV0dXJuIHdpbmRvd1t0aGlzLnByb3BzLmRhdGFUeXBlXSh2YWx1ZSkudmFsdWVPZigpO1xuXHRcdH1cblx0XHRcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgVHlwZSBPZiBMaXN0IElzIE51bGwuJyk7XG5cdH0sXG5cdF9fb25TZWxlY3RDbGljazogZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fSxcblx0X19wYXJzZUV4cDogZnVuY3Rpb24gKGl0ZW0sIGV4cCl7XG5cdFx0aWYodHlwZW9mIGV4cCA9PSAnc3RyaW5nJyl7XG5cdFx0XHRpZihleHAuaW5kZXhPZigneycpIT0tMSl7XG5cdFx0XHRcdHJldHVybiB6bi5mb3JtYXQoZXhwLCBpdGVtKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBpdGVtW2V4cF07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmKHR5cGVvZiBleHAgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIGV4cChpdGVtKTtcblx0XHR9XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3ZhbHVlLCBfdGV4dDtcblx0XHRpZih6bi5pcyhpdGVtLCAnb2JqZWN0Jykpe1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5fX3BhcnNlRXhwKGl0ZW0sIHRoaXMucHJvcHMudmFsdWVLZXkpO1xuXHRcdFx0X3RleHQgPSB0aGlzLl9fcGFyc2VFeHAoaXRlbSwgdGhpcy5wcm9wcy50ZXh0S2V5KTtcblx0XHR9ZWxzZXtcblx0XHRcdF92YWx1ZSA9IF90ZXh0ID0gaXRlbTtcblx0XHR9XG5cblx0XHRyZXR1cm4gPG9wdGlvbiBrZXk9e192YWx1ZX0gdmFsdWU9e192YWx1ZX0gZGF0YS12YWx1ZT17X3ZhbHVlfSBkYXRhLXRleHQ9e190ZXh0fT57X3RleHR9PC9vcHRpb24+O1xuXHR9LFxuXHRfX29uU2VsZWN0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxuXHRcdFx0X2RhdGEgPSBldmVudC50YXJnZXQuY2hpbGROb2Rlc1tfdGFyZ2V0LnNlbGVjdGVkSW5kZXhdLmRhdGFzZXQsXG5cdFx0XHRfdmFsdWUgPSB0aGlzLl9fcGFyc2VFeHAoX2RhdGEsIHRoaXMucHJvcHMudmFsdWVLZXkpLFxuXHRcdFx0X3RleHQgPSB0aGlzLl9fcGFyc2VFeHAoX2RhdGEsIHRoaXMucHJvcHMudGV4dEtleSk7XG5cblx0XHRldmVudC5zZWxlY3RlZEluZGV4ID0gKCtfdGFyZ2V0LnNlbGVjdGVkSW5kZXggLSAxKTtcblx0XHRldmVudC5kYXRhID0gX2RhdGE7XG5cdFx0ZXZlbnQudmFsdWUgPSBfdmFsdWU7XG5cdFx0ZXZlbnQudGV4dCA9IF90ZXh0O1xuXG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShfdmFsdWUpO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnBhcnNlVmFsdWUodGhpcy5zdGF0ZS52YWx1ZSB8fCBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZSk7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKHZhbHVlKTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgdmFsdWU6IHZhbHVlIH0sIHRoaXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXNlbGVjdFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XG5cdFx0XHRcdHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuXHRcdFx0XHRuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG5cdFx0XHRcdHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuXHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZHx8dGhpcy5wcm9wcy5yZWFkb25seX1cblx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25TZWxlY3RDaGFuZ2V9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX19vblNlbGVjdENsaWNrfT5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nJyBkaXNhYmxlZD57dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn08L29wdGlvbj5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cdFxuXHRcdFx0PC9zZWxlY3Q+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgaWNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaWNvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVW5jb250cm9sQ2hlY2tib3gnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRsYXlvdXQ6ICdmbGV4LXJvdycsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiAoKXt9XG5cdFx0fVxuXHR9LFxuXHRfX29uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGV2ZW50LmRhdGEgPSB0aGlzLnByb3BzO1xuXHRcdGV2ZW50LnNlbmRlciA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fcmVuZGVyQ29udGVudDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLmNvbnRlbnRSZW5kZXIgJiYgdGhpcy5wcm9wcy5jb250ZW50UmVuZGVyKHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IHRoaXMucHJvcHMudGV4dHx8Jyc7XG5cdFx0fVxuXHRcdGlmKF9yZXR1cm4pIHtcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57X3JldHVybn08L2Rpdj47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci11bmNvbnRyb2wtY2hlY2tib3gnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuXHRcdFx0XHRkYXRhLWRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBcblx0XHRcdFx0ZGF0YS1jaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX19vbkNsaWNrfSA+XG5cdFx0XHRcdDxpbnB1dCBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfS8+XG5cdFx0XHRcdDxpY29uLlJlZ3VsYXJTVkdJY29uIGNsYXNzTmFtZT1cImljb25cIiBpY29uPXt0aGlzLnByb3BzLmNoZWNrZWQ/J2ZhQ2hlY2tTcXVhcmUnOidmYVNxdWFyZSd9IC8+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ29udGVudCgpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnQ2hlY2tib3gnOiByZXF1aXJlKCcuL0NoZWNrYm94JyksXG4gICAgJ1VuY29udHJvbENoZWNrYm94JzogcmVxdWlyZSgnLi9VbmNvbnRyb2xDaGVja2JveCcpLFxuICAgICdDaGVja2JveHMnOiByZXF1aXJlKCcuL0NoZWNrYm94cycpLFxuICAgICdSYWRpbyc6IHJlcXVpcmUoJy4vUmFkaW8nKSxcbiAgICAnU2VsZWN0JzogcmVxdWlyZSgnLi9TZWxlY3QnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJpY29uXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=