"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var React = znui.React || require('react');
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