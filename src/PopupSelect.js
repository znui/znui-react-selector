var React = znui.React || require('react');
var popup = require('znui-react-popup');

module.exports = React.createClass({
	displayName:'ZRPopupSelect',
	getDefaultProps: function () {
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
	getInitialState: function (){
		return {
			text: this.props.text,
			value: this.parseValue(this.props.value)
		}
	},
	parseValue: function (value){
		if(this.props.multiple){
			switch(zn.type(value)){
				case 'array':
					return value;
				case 'string':
				case 'number':
					return [value];
			}
		}

		if(window[this.props.dataType]){
			return window[this.props.dataType](value).valueOf();
		}
		
		throw new Error('Data Type Of List Is Null.');
	},
	getValue: function () {
		return this.parseValue(this.state.value);
	},
	setValue: function (value) {
		this.state.value = this.parseValue(value);
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
	__popoverRender: function (){
		if(this.props.disabled){
			return null;
		}
		var _element = znui.react.createReactElement(this.props.popupRender, {
			popupSelect: this
		}, this.props.context);

		if(!_element){
		 	_element = (
				<div className="select-popover">
					
				</div>
			);
		}

		return _element;
	},
	__valueRender: function (){
		var _text = this.state.text || this.props.placeholder;
		return (
			<div className="select-text">
				{_text}
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
					onWindowInsideContainerEvent: function (event, popover){
						return true;
					}
				}}>
				{this.__valueRender()}
			</popup.Dropdown>
		);
	}
});
