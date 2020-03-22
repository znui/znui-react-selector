# znui-react-selector
Selector Component.

[![npm](https://img.shields.io/npm/v/znui-react-selector.svg)](https://www.npmjs.com/package/znui-react-selector)
[![npm](https://img.shields.io/npm/dm/znui-react-selector.svg)](https://www.npmjs.com/package/znui-react-selector)

## Demo

[Take a look at the demo](https://znui.github.io/znui-react-selector/example/www/index.html)

## Installation

```bash
npm install znui-react-selector -s
```

## Usage

```javascript

var ReactDOM = require('react-dom');
var inputs = require('znui-react-selector');


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

```

## License

MIT