"use strict";

var React = znui.React || require('react');

var icon = require('znui-react-icon');

module.exports = React.createClass({
  displayName: 'ZRUncontrolCheckbox',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      text: 'Checkbox',
      layout: 'flex-row',
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

    return React.createElement("div", {
      className: "content"
    }, _return);
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname('zr-uncontrol-checkbox', this.props.className),
      onClick: this.__onClick,
      "data-disabled": this.props.disabled,
      "data-checked": this.props.checked
    }, React.createElement("input", {
      name: this.props.name,
      type: "checkbox",
      checked: this.props.checked
    }), React.createElement(icon.RegularSVGIcon, {
      className: "icon",
      icon: this.props.checked ? 'faCheckSquare' : 'faSquare'
    }), this.__renderContent());
  }
});