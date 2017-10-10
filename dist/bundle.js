'use strict';

var _React = React,
    createElement = _React.createElement;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


var style = {
	backgroundColor: 'purple',
	color: 'teal',
	fontFamily: 'verdana'
};

render(React.createElement(
	'h1',
	{ id: 'title',
		className: 'header',
		style: style },
	'Hello World'
), document.getElementById('react-container'));
