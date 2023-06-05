var React = znui.React || require('react');
var popup = require('znui-react-popup');

module.exports = React.createClass({
	displayName:'ZRPopupSelect',
	getDefaultProps: function () {
		return {
			text: '',
			textKey: 'text',
			value: '',
			valueKey: 'value',
			disabled: false,
			longText: true,
			placeholder: "请选择"
		};
	},
	getInitialState: function (){
		return {
			text: this.props.text,
			value: this.props.value
		}
	},
	getValue: function () {
		return this.state.value;
	},
	setValue: function (value) {
		this.state.value = value;
		this.forceUpdate();
		this.props.onChange && this.props.onChange({ value: value }, this);
	},
	getText: function () {
		return this.state.text;
	},
	setText: function (text){
		this.setState({
			text: text
		});
	},
	setData: function (value, text){
		this.setState({
			value: value,
			text: text
		});
	},
	__resolveTarget: function (target){
		if(target){
			if(!target.classList.contains('select-text')){
				return this.__resolveTarget(target.parentNode);
			}else{
				return target;
			}
		}
	},
	__popoverRender: function (event, dropdown){
		var _target = this.__resolveTarget(event.target);
		if(this.props.disabled){
			return null;
		}
		var _element = znui.react.createReactElement(this.props.popupRender, {
			value: this.state.value,
			text: this.state.text,
			event: event,
			dropdown: dropdown,
			popupSelect: this
		}, this.props.context);

		if(!_element){
		 	_element = (
				<div className="select-popover">
					
				</div>
			);
		}

		return <div style={{ width: this.props.width || _target.offsetWidth, minWidth: this.props.minWidth }} className="select-popover">{_element}</div>;
	},
	__valueRender: function (){
		var _element = znui.react.createReactElement(this.props.textRender, {
			value: this.state.value,
			text: this.state.text,
			popupSelect: this
		}, this.props.context);
		if(!_element){
			_element = this.state.text || this.state.value || this.props.placeholder;
		}

		return (
			<div className="select-text">
				{this.props.showText !== false && <div className={"text " + (this.props.longText ? 'znui-react-long-text' : '')}>{_element}</div>}
				<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="svg-inline--fa fa-caret-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
			</div>
		);
	},
	render: function(){
		return (
			<popup.Dropdown 
				className={znui.react.classname("zr-popup-select", this.props.className, (this.props.disabled?'disabled':''))}
				style={this.props.style}
				popover={{
					render: this.__popoverRender,
					onContainerEvent: function (event, popover){
						return false;
					}
				}}>
				{this.__valueRender()}
			</popup.Dropdown>
		);
	}
});
