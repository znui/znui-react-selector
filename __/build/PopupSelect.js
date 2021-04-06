"use strict";

var React = znui.React || require('react');

var popup = require('znui-react-popup');

module.exports = React.createClass({
  displayName: 'ZRPopupSelect',
  getDefaultProps: function getDefaultProps() {
    return {
      dataType: 'String',
      className: '',
      text: '',
      textKey: 'text',
      value: '',
      valueKey: 'value',
      disabled: false,
      multiple: false,
      placeholder: "请选择"
    };
  },
  getInitialState: function getInitialState() {
    return {
      text: this.props.text,
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
  getValue: function getValue() {
    return this.parseValue(this.state.value);
  },
  setValue: function setValue(value) {
    this.state.value = this.parseValue(value);
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
  __popoverRender: function __popoverRender() {
    if (this.props.disabled) {
      return null;
    }

    var _element = znui.react.createReactElement(this.props.popupRender, {
      popupSelect: this
    }, this.props.context);

    if (!_element) {
      _element = /*#__PURE__*/React.createElement("div", {
        className: "select-popover"
      });
    }

    return _element;
  },
  __valueRender: function __valueRender() {
    var _text = this.state.text || this.props.placeholder;

    return /*#__PURE__*/React.createElement("div", {
      className: "select-text"
    }, _text);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(popup.Dropdown, {
      className: znui.react.classname("zr-popup-select", this.props.className, this.props.disabled ? 'disabled' : ''),
      style: this.props.style,
      popover: {
        render: this.__popoverRender,
        onWindowInsideContainerEvent: function onWindowInsideContainerEvent(event, popover) {
          return true;
        }
      }
    }, this.__valueRender());
  }
});