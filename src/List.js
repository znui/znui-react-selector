var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRSelectList',
	getDefaultProps: function (){
		return {
			splitChar: ',',
			textKey: 'text',
			valueKey: 'value',
			dataType: 'String'
		};
	},
	getInitialState: function(){
		return {
			value: this.__initValue()
		};
	},
	__initValue: function (){
		var _value = null;
		if(this.props.value != null){
			_value = this.props.value;
		}else{
			_value = [];
		}

		return _value;
	},
	parseValue: function (value){
		if(window[this.props.dataType]){
			return (new window[this.props.dataType](value)).valueOf();
		}
		
		throw new Error('Data Type Of List Is Null.');
	},
	__isChecked: function (item, index){
		var _value = item[this.props.valueKey];
		if(zn.is(this.state.value, 'array')){
			if(this.state.value.indexOf(_value) != -1){
				return true;
			}else{
				return false;
			}
		}else{
			var _avalue = this.state.value.split(this.props.splitChar).filter((value)=>!!value);
			if(_avalue.indexOf(_value) != -1){
				return true
			}else{
				return false;
			}
		}
	},
	__onItemClick: function (event, checkbox){
		var _return = this.props.onItemClick && this.props.onItemClick(event, this);
		if(_return == null) {
			this.__clickDefault(event);
		}
	},
	__clickDefault: function (event){
		var _data = event.data,
			_value = _data[this.props.valueKey];
		if(zn.is(this.state.value, 'array')) {
			if(this.state.value.indexOf(_value) != -1){
				this.state.value.splice(this.state.value.indexOf(_value), 1);
			}else{
				this.state.value.push(_value);
			}
		}else{
			var _avalue = this.state.value.split(this.props.splitChar).filter((value)=>!!value);
			if(_avalue.indexOf(_value) != -1){
				_avalue.splice(_avalue.indexOf(_value), 1);
			}else{
				_avalue.push(_value);
			}
			this.state.value = _avalue.join(this.props.splitChar);
		}
		event.value = this.state.value;
		this.forceUpdate();
		this.props.onChange && this.props.onChange(event, this);
	},
	__onItemClick: function (){

	},
	__itemRender: function (item, index){
		if(!zn.is(item, 'object')){
			var _temp = { index: index };
			_temp[this.props.textKey] = _temp[this.props.valueKey] = item;
			item = _temp;
		}else{
			item.index = index;
		}

		var _text = item[this.props.textKey];
		var _return = this.props.itemRender && this.props.itemRender(item, index);
		if(!_return) {
			_return = (
				<>
					{item.icon && <i className={"fa " + item.icon} />}
					<span className="label">{_text}</span>
				</>
			);
		}

		return (
			<li key={index} className="list-item" onClick={(event)=>this.__onItemClick(event, item, index)}>{_return}</li>
		);
	},
	render: function(){
		return (
			<ul style={this.props.style} className={znui.react.classname("zr-select-list", this.props.className)}>
				{this.props.children}
				<znui.react.DataView data={this.props.data} itemRender={this.__itemRender} />
			</ul>
		);
	}
});