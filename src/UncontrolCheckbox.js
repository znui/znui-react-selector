var React = znui.React || require('react');

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
				{
					this.props.checked ? <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" className="icon svg-inline--fa fa-check-square fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path>
					</svg>: <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" className="icon svg-inline--fa fa-square fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path></svg>
				}
				{this.__renderContent()}
			</div>
		);
	}
});
