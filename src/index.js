import React from 'react'
import { render } from 'react-dom'

import {data1, data2} from './components/json-data-component'

import './assets/sass/kraken.scss'
import './assets/sass/index.scss'

import { CountriesVisitedStateless } from './components/countries-visited-stateless'
import { App } from './components/app-es6'

window.React = React

render (

		<div>
			<h1>Wanderlust</h1>
			<h2>Countries visited & Wishlist</h2>

			<App />

	    <button className="btn btn-blue btn-block"> {data1} </button>
			<button className="btn btn-blue btn-block"> {data2} </button>

			<CountriesVisitedStateless total={196}
																	visited={16}
																	liked={100}
																	goal={96} />
		</div>,

	document.getElementById('react-container')
)
