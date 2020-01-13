"use strict";

var React = znui.React || require('react');

var ReactDOM = znui.React || require('react-dom');

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

    return React.createElement("option", {
      key: index,
      selected: _value == this.state.value ? 'selected' : '',
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

    event.index = +_target.selectedIndex - 1;
    event.data = _data;
    event.value = _value;
    event.text = _text;
    console.log(_value, _text);
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
    return React.createElement("select", {
      className: znui.react.classname("zr-select", this.props.className),
      style: this.props.style,
      name: this.props.name,
      required: this.props.required,
      disabled: this.props.disabled || this.props.readonly,
      value: this.state.value,
      onChange: this.__onSelectChange,
      onClick: this.__onSelectClick
    }, React.createElement("option", {
      value: "",
      disabled: true
    }, this.props.placeholder), React.createElement(znui.react.DataView, {
      data: this.props.data,
      itemRender: this.__itemRender
    }));
  }
});