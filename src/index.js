import React from 'react'
import { render } from 'react-dom'

import {data1, data2} from './components/json-data-component'
import './assets/sass/kraken.scss'
import { CountriesVisited } from './components/countries-visited'

window.React = React

render(
		<div>
			<h1>Wanderlust</h1>
			<h4>Countries visited & Wishlist</h4>

			<CountriesVisited total={196}
												visited={16}
												wished={100}
												goal={96}/>

	    <button className="btn btn-blue btn-block"> {data1} </button>
			<button className="btn btn-blue btn-block"> {data2} </button>
  	</div>,
	document.getElementById('react-container')
)
