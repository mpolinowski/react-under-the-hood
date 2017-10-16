import React from 'react'
import { render } from 'react-dom'

import {data1, data2} from './components/json-data-component'

import './assets/sass/kraken.scss'
import './assets/sass/index.scss'

import { CountriesVisitedStateless } from './components/countries-visited-stateless'
import { CountriesVisitedES6 } from './components/countries-visited-es6'
import { CountryList } from './components/country-list'

window.React = React

render (

		<div>
			<h1>Wanderlust</h1>
			<h2>Countries visited & Wishlist</h2>

			<CountriesVisitedStateless total={196}
																	visited={16}
																	liked={100}
																	goal={96} />

	    <button className="btn btn-blue btn-block"> {data1} </button>
			<button className="btn btn-blue btn-block"> {data2} </button>

			<CountryList countries= {
					[
						{
							country: "Japan",
							date: new Date ("10/19/2010"),
							visited: true,
							liked: true
						},
						{
							country: "Taiwan",
							date: new Date ("12/12/2006"),
							visited: true,
							liked: true
						},
						{
							country: "China",
							date: new Date ("10/20/2010"),
							visited: true,
							liked: true
						}
					]
				}/>

			<CountriesVisitedES6 total={196}
													visited={86}
													liked={186}
													goal={96} />

  	</div>,
	document.getElementById('react-container')
)
