const { createElement } = React
const { render } = ReactDOM

const style = {
	backgroundColor: 'purple',
	color: 'teal',
	fontFamily: 'verdana'
}

render(
	<h1 id = 'title'
			className = 'header'
			style = {style}>
		Hello World
	</h1>,
	document.getElementById('react-container')
)
