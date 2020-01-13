
require('./index.less');
require('../src/index.less');
require('znui-react');
var React = require('react');
var ReactDOM = require('react-dom');
var inputs = require('../src/index.js');


ReactDOM.render(
    <div>
        <inputs.Checkbox checked={false} />
        <inputs.Checkbox checked={true} />
        <inputs.Radio data={[{value:1, text: '1'}, {value:2, text: '2'}]} dataType="Number" />
        <inputs.Select value={2} data={[{value:1, text: 'A'}, {value:2, text: 'B'}]} />
        <inputs.Checkboxs value={[2]} data={[{value:1, text: 'A'}, {value:2, text: 'B'}]} />
    </div>,
    document.getElementById('container'),
);