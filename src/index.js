import React from 'react'
import { render } from 'react-dom'
import {data1, data2} from './lib'
import './assets/sass/kraken.scss'

render(
		<div>
			<h1>Webpack Styling</h1>
			<h4>With Kraken-Sass Boilerplate</h4>
	    <button className="btn btn-blue btn-block"> {data1} </button>
			<button className="btn btn-blue btn-block"> {data2} </button>
  	</div>,
	document.getElementById('react-container')
)
