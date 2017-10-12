import React from 'react'
import { render } from 'react-dom'
import {data1, data2} from './lib'
import './sass/materialize.scss'

render(
	<nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#" className="waves-effect waves-light btn">{data1}</a></li>
        <li><a href="#" className="waves-effect waves-light btn">{data2}</a></li>
      </ul>
    </div>
  </nav>,
	document.getElementById('react-container')
)
