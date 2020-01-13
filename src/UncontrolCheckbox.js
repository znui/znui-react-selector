var React = znui.React || require('react');
var icon = require('znui-react-icon');

module.exports = React.createClass({
	displayName:'ZRUncontrolCheckbox',
	getDefaultProps: function (){
		return {
			className: '',
			text: 'Checkbox',
			layout: 'flex-row',
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
			_return = this.props.text||'';
		}

		return <div className="content">{_return}</div>;
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-uncontrol-checkbox', this.props.className)} onClick={this.__onClick} data-disabled={this.props.disabled} data-checked={this.props.checked}>
				<input name={this.props.name} type='checkbox' checked={this.props.checked} />
				<icon.RegularSVGIcon className="icon" icon={this.props.checked?'faCheckSquare':'faSquare'} />
				{this.__renderContent()}
			</div>
		);
	}
});
