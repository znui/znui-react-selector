var React = znui.React || require('react');
var icon = require('znui-react-icon');

var RadioItem = React.createClass({
	displayName:'ZRRadioItem',
	getDefaultProps: function (){
		return {
			className: '',
			text: '',
			checked: false,
			disabled: false
		}
	},
	__onClick: function (event){
		if(this.props.disabled){
			return false;
		}
		event.data = this.props;
		event.sender = this;
		this.props.onClick && this.props.onClick(event, this);
		this.props.onChange && this.props.onChange(event, this);
	},
	__renderContent: function (){
		var _return = this.props.contentRender && this.props.contentRender(this);
		if(_return !== null){
			_return = this.props.text||'';
		}

		if(_return) {
			return <div className="content">{_return}</div>;
		}
		
		return null;
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-radio-item', this.props.className)} onClick={this.__onClick} data-disabled={this.props.disabled} data-checked={this.props.checked}>
				<input name={this.props.name} type='radio' defaultChecked={this.props.checked} onChange={this.props.onChange} />
				<icon.RegularSVGIcon className="icon" icon={this.props.checked?'faDotCircle':'faCircle'} />
				{this.__renderContent()}
			</div>
		);
	}
});

var Radio = React.createClass({
	displayName:'ZRRadio',
	getDefaultProps: function (){
		return {
			textKey: 'text',
			valueKey: 'value',
			dataType: 'String',
			disabled: false
		};
	},
	getInitialState: function(){
		return {
			value: this.__initValue()
		};
	},
	__initValue: function (){
		var _value = null;
		if(this.props.value !== null){
			_value = this.props.value;
		}else{
			_value = '';
		}

		return this.parseValue(_value);
	},
	parseValue: function (value){
		if(window[this.props.dataType]){
			return (new window[this.props.dataType](value)).valueOf();
		}
		
		throw new Error('Data Type Of List Is Null.');
	},
	__isChecked: function (item, index){
		var _value = this.parseValue(item[this.props.valueKey]);
		if(_value === this.state.value){
			return true;
		}else{
			return false;
		}
	},
	__onRadioItemClick: function (event, item){
		if(this.props.disabled || event.data.disabled){
			return false;
		}

		this.state.value = event.value = this.parseValue(item[this.props.valueKey]);
		this.forceUpdate();
		this.props.onChange && this.props.onChange(event, this);
		this.props.onClick && this.props.onClick(event, this);
	},
	__itemRender: function (item, index){
		if(!zn.is(item, 'object')){
			var _temp = { index: index };
			_temp[this.props.textKey] = _temp[this.props.valueKey] = item;
			item = _temp;
		}else{
			item.index = index;
		}

		var _return = this.props.itemRender && this.props.itemRender(item, index);
		if(!_return) {
			_return = item[this.props.textKey];
		}
		
		return <RadioItem key={index} disabled={this.props.disabled} {...item}
					onClick={(event)=>this.__onRadioItemClick(event, item)}
					onChange={this.props.onChange}
					checked={this.__isChecked(item)} />;
	},
	
	getValue: function (){
		return this.state.value;
	},
	setValue: function (value, callback){
		value = this.parseValue(value);
		this.state.value = value;
		this.forceUpdate();
		this.props.onChange && this.props.onChange({ value: value }, this);
		callback && callback(value, this);
	},
	render: function(){
		return (
			<div style={this.props.style} className={znui.react.classname('zr-radio', this.props.className)}>
				<znui.react.DataView data={this.props.data} itemRender={this.__itemRender} />
			</div>
		);
	}
});

module.exports = Radio;
