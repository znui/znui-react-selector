var React = znui.React || require('react');
var icon = require('znui-react-icon');

module.exports = React.createClass({
	displayName:'ZRCheckbox',
	getDefaultProps: function (){
		return {
			className: '',
			text: 'Checkbox',
			layout: 'flex-row',
			checked: false,
			disabled: false
		}
	},
	getInitialState: function(){
		return {
			checked: this.props.checked
		}
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.checked != this.props.checked){
			this.setState({ checked: nextProps.checked });
		}
	},
	__onClick: function (event){
		if(this.props.disabled){
			return false;
		}
		this.state.checked = event.checked = !this.state.checked;
		this.setState({
			checked: this.state.checked
		});

		this.props.onClick && this.props.onClick(event, this);
		this.props.onChange && this.props.onChange(event, this);
	},
	getValue: function (){
		return this.state.checked;
	},
	setValue: function (value){
		this.setState({ checked: value });
	},
	__renderContent: function (){
		var _return = this.props.contentRender && this.props.contentRender(this);
		if(_return !== null){
			_return = this.props.text||'';
		}

		return <div className="content">{_return}</div>;
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-checkbox', this.props.className)} onClick={this.__onClick} data-disabled={this.props.disabled} data-checked={this.state.checked}>
				<input name={this.props.name} type='checkbox' checked={this.state.checked} />
				<icon.RegularSVGIcon className="icon" icon={this.state.checked?'faCheckSquare':'faSquare'} />
				{this.__renderContent()}
			</div>
		);
	}
});
