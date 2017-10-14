import React from 'react'
import { render } from 'react-dom'

import {data1, data2} from './components/json-data-component'
import './assets/sass/kraken.scss'
import { CountriesVisitedStateless } from './components/countries-visited-stateless'
import { CountriesVisitedES6 } from './components/countries-visited-es6'

window.React = React

render (
		<div>
			<h1>Wanderlust</h1>
			<h2>Countries visited & Wishlist</h2>

			<CountriesVisitedStateless total={196}
																	visited={16}
																	wished={100}
																	goal={96}/>

	    <button className="btn btn-blue btn-block"> {data1} </button>
			<button className="btn btn-blue btn-block"> {data2} </button>
			
			<CountriesVisitedES6 total={196}
													visited={86}
													wished={186}
													goal={96}/>

  	</div>,
	document.getElementById('react-container')
)
