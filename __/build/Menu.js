"use strict";

var React = znui.React || require('react');
var popup = require('znui-react-popup');
var List = require('./List');
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