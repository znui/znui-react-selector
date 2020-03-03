var React = znui.React || require('react');
var icon = require('znui-react-icon');

module.exports = React.createClass({
	displayName:'ZRUncontrolCheckbox',
	getDefaultProps: function (){
		return {
			className: '',
			text: '',
			layout: 'flex-row',
			checked: false,
			disabled: false,
			onChange: function (){}
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
			_return = this.props.text||'';
		}
		if(_return) {
			return <div className="content">{_return}</div>;
		}

		return null;
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-uncontrol-checkbox', this.props.className)} style={this.props.style}
				data-disabled={this.props.disabled} 
				data-checked={this.props.checked}
				onClick={this.__onClick} >
				<input name={this.props.name} type='checkbox' checked={this.props.checked} onChange={this.props.onChange}/>
				<icon.RegularSVGIcon className="icon" icon={this.props.checked?'faCheckSquare':'faSquare'} />
				{this.__renderContent()}
			</div>
		);
	}
});
