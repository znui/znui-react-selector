var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');

module.exports = React.createClass({
	displayName:'ZRSelect',
	getDefaultProps: function () {
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
	componentDidMount: function (){
		//ReactDOM.findDOMNode(this).value = this.state.value;
	},
	getInitialState: function (){
		return {
			color: null,
			style: null,
			className: null,
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
	__onSelectClick: function (event) {
		event.stopPropagation();
		event.preventDefault();
	},
	__parseExp: function (item, exp){
		if(typeof exp == 'string'){
			if(exp.indexOf('{')!=-1){
				return zn.format(exp, item);
			} else {
				return item[exp];
			}
		} else if(typeof exp == 'function') {
			return exp(item);
		}
	},
	__itemRender: function (item, index){
		var _value, _text, _item = item || {};
		if(zn.is(_item, 'object')){
			_value = this.__parseExp(_item, this.props.valueKey);
			_text = this.__parseExp(_item, this.props.textKey);
		}else{
			_value = _text = _item;
		}

		return <option style={_item.style} className={_item.className} disabled={item.disabled} selected={this.state.value==_value} key={_value} value={_value} data-text={_text} data-value={_value}>{_text}</option>;
	},
	__onSelectChange: function (event){
		var _target = event.target,
			_data = event.target.childNodes[_target.selectedIndex].dataset,
			_value = this.__parseExp(_data, this.props.valueKey),
			_text = this.__parseExp(_data, this.props.textKey);

		event.selectedIndex = (+_target.selectedIndex - 1);
		event.data = _data;
		event.value = _value;
		event.text = _text;

		if(_data.color){
			this.state.color = _data.color;
		}
		if(_data.style) {
			this.state.style = _data.style;
		}
		if(_data.className) {
			this.state.className = _data.className;
		}

		this.state.value = this.parseValue(_value);
		this.forceUpdate();
		this.props.onChange && this.props.onChange(event, this);
	},
	getValue: function () {
		return this.parseValue(this.state.value || ReactDOM.findDOMNode(this).value);
	},
	setValue: function (value) {
		this.state.value = this.parseValue(value);
		this.forceUpdate();
		this.props.onChange && this.props.onChange({ value: value }, this);
	},
	__resolveStyle: function (){
		var _style = {};
		if(this.state.color){
			_style.color = this.state.color;
			_style.borderColor = this.state.color;
		}
		if(this.state.style) {
			_style = zn.extend(_style, this.state.style);
		}

		return _style;
	},
	render: function(){
		return (
			<select
				className={znui.react.classname("zr-select", this.props.className, this.state.className)}
				style={znui.react.style({}, this.props.style, this.__resolveStyle())}
				name={this.props.name}
				value={this.state.value}
				multiple={this.props.multiple}
				required={this.props.required}
				disabled={this.props.disabled}
				readOnly={this.props.readonly}
				onChange={this.__onSelectChange}
				onClick={this.__onSelectClick}>
				<option value='' disabled>{this.props.placeholder}</option>
				<znui.react.DataView data={this.props.data} itemRender={this.__itemRender} />	
			</select>
		);
	}
});
