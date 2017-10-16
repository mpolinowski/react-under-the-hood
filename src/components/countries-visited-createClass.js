import { createClass, PropTypes } from 'react'
import '../assets/sass/kraken.scss'

// cannot be rendered inside react 16 - you need to downgrade your react and reactDom version to react < 15.5

export const CountriesVisited = React.createClass({
	propTypes() {
		total : propTypes.number,
		visited : propTypes.number,
		liked : propTypes.number,
		goal : propTypes.number
	},
	getDefaultProps() {
		return {
			total : 196,
			visited : 50,
			liked : 100,
			goal : 99
		}
	},
	percentToDecimal(decimal) {
		return ((decimal * 100) + '%')
	},
	calcGoalProgress(total, goal) {
		return this.percentToDecimal(total/goal)
	},
	render() {
		return (
			<div className="countries-visited">
        <hr/>
        <h3>The React.createClass Syntax is no longer supported inside React v16!</h3>
				<div className="total-contries">
					<span>{this.props.total} </span>
					<span>total countries</span>
				</div>
				<div className="visited">
					<span>{this.props.visited} </span>
					<span>visited countries</span>
				</div>
				<div className="wish-list">
					<span>{this.props.liked} </span>
					<span>countries on wishlist</span>
				</div>
				<div>
					<span>
						{this.calcGoalProgress(
							this.props.total,
							this.props.goal
						)}
					</span>
				</div>
			</div>
		)
	}
})
