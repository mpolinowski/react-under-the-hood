import { Component } from 'react'

import '../assets/sass/kraken.scss'
import '../assets/sass/ui.scss'

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
      <div>
        <hr/>

        <div className="grid-full space-bottom text-center">
          <span>{this.props.total} </span>
          <span>total countries </span>
          <Globe className="text-tall" />
        </div>

        <div className="grid-half text-center space-bottom">
          <span>{this.props.visited} </span>
          <span>visited countries </span>
          <Landing className="text-tall" />
        </div>

        <div className="grid-half space-bottom text-center">
          <span>{this.props.wished} </span>
          <span>countries on wishlist </span>
          <Heart className="text-tall" />
        </div>

        <div className="grid-full space-bottom text-center">
          <span>{this.calcTravelProgress (
                    this.props.visited,
                    this.props.goal
                )}
          </span>
          <span> Completion </span>
          <Checked className="text-tall" />
        </div>

        <div className="grid-full text-small text-muted">
          <blockquote>This Data is calculated inside an ES6 Class Component</blockquote>
        </div>
      </div>
    )
  }
}
