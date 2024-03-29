require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var inputs = require('../../src/index');

znui.react.createApplication({
    render: <div style={{padding: 10, margin: 10}}>
        <inputs.Checkbox checked={false} />
        <inputs.Checkbox checked={true} />
        <inputs.Radio value={1} data={[{value:1, text: '1'}, {value:2, text: '2'}]} dataType="Number" />
        <inputs.Select value={2} data={[{value:1, text: 'A'}, {value:2, text: 'B'}]} />
        <inputs.Checkboxs value={[2]} data={[{value:1, text: 'A'}, {value:2, text: 'B'}]} />
        <inputs.Menu value={[2]} data={[{value:1, text: 'A'}, {value:2, text: 'B'}]} />
        <inputs.PopupSelect  />
    </div>
});