var React = znui.React || require('react');

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
	},
	__renderContent: function (){
		var _return = this.props.contentRender && this.props.contentRender(this);
		if(_return !== null){
			_return = this.props.text || this.props.label ||'';
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
				{
					this.props.checked ? <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="dot-circle" className="icon svg-inline--fa fa-dot-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path fill="currentColor" d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path>
					</svg> : <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" className="icon svg-inline--fa fa-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
				}
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
