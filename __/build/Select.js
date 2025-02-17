"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');
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