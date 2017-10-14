import { Component } from 'react'

import '../assets/sass/kraken.scss'

import Globe from 'react-icons/lib/go/globe'
import Landing from 'react-icons/lib/md/flight-land'
import Heart from 'react-icons/lib/go/heart'
import Checked from 'react-icons/lib/ti/input-checked'

export class CountriesVisitedES6 extends Component {
  percentToDecimal (decimal) {
    return ((decimal * 100) + '%')
  }
  calcTravelProgress (visited, goal) {
    return this.percentToDecimal (visited/goal)
  }
  render() {
    return (
      <div className="countries-visited">
        <hr/>
        <h3>This Data is calculated inside an ES6 Class Component</h3>
        <div className="total-contries">
          <span>{this.props.total} </span>
          <span>total countries </span>
          <Globe />
        </div>
        <div className="visited">
          <span>{this.props.visited} </span>
          <span>visited countries </span>
          <Landing />
        </div>
        <div className="wish-list">
          <span>{this.props.wished} </span>
          <span>countries on wishlist </span>
          <Heart />
        </div>
        <div>
          <span>{this.calcTravelProgress (
                    this.props.visited,
                    this.props.goal
                )}
          </span>
          <span> Completion </span>
          <Checked />
        </div>
      </div>
    )
  }
}
