"use strict";

var React = znui.React || require('react');

var icon = require('znui-react-icon');

module.exports = React.createClass({
  displayName: 'ZRCheckbox',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      text: 'Checkbox',
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
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.checked != this.props.checked) {
      this.setState({
        checked: nextProps.checked
      });
    }
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
  __renderContent: function __renderContent() {
    var _return = this.props.contentRender && this.props.contentRender(this);

    if (_return !== null) {
      _return = this.props.text || '';
    }

    return React.createElement("div", {
      className: "content"
    }, _return);
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname('zr-checkbox', this.props.className),
      onClick: this.__onClick,
      "data-disabled": this.props.disabled,
      "data-checked": this.state.checked
    }, React.createElement("input", {
      name: this.props.name,
      type: "checkbox",
      checked: this.state.checked
    }), React.createElement(icon.RegularSVGIcon, {
      className: "icon",
      icon: this.state.checked ? 'faCheckSquare' : 'faSquare'
    }), this.__renderContent());
  }
});