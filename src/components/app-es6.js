import {Component} from 'react'

import { CountriesVisitedES6 } from './countries-visited-es6'
import { CountryList } from './country-list'

export class App extends Component {

     constructor(props) {
      super(props)
        this.state = {
          countries: [
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
            },
            {
              country: "Austria",
              date: new Date ("10/20/2010"),
              visited: true,
              liked: false
            }
          ]
        }
      }

      countCountries(filter) {
        return this.state.countries.filter(
          (country) => (filter) ? country[filter] : country
        ).length
      }

      render() {
        return (
          <div className="app">
            <CountryList countries={this.state.countries} />
            <CountriesVisitedES6 total={this.countCountries()}
          												visited={this.countCountries("visited")}
          												liked={this.countCountries("liked")} />
          </div>
        )
      }

  }
