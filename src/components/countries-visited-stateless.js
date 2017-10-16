import PropTypes from 'prop-types';

import '../assets/sass/kraken.scss'
import '../assets/sass/ui.scss'

import Globe from 'react-icons/lib/go/globe'
import Landing from 'react-icons/lib/md/flight-land'
import Heart from 'react-icons/lib/go/heart'
import Checked from 'react-icons/lib/ti/input-checked'


const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcTravelProgress = (visited, goal) => {
  return percentToDecimal (visited/goal)
}

export const CountriesVisitedStateless = ({ total=196, visited=50, liked=100, goal=99 }) => (

  <div>
    <hr/>

    <div className="grid-full space-bottom text-center">
      <span>{total} </span>
      <span> total </span>
      <Globe className="text-tall" />
    </div>

    <div className="grid-half text-center space-bottom">
      <span>{visited} </span>
      <span> visited </span>
      <Landing className="text-tall" />
    </div>

    <div className="grid-half space-bottom text-center">
      <span className="text-tall">{liked} </span>
      <span> wishlist </span>
      <Heart className="text-tall" />
    </div>

    <div className="grid-full space-bottom text-center">
      <span>{calcTravelProgress (
                visited,
                goal
            )}
      </span>
      <Checked className="text-tall" /><br/><br/>
    </div>

    <div className="grid-full text-small text-muted">
      <blockquote>This Data is calculated inside a stateless Component</blockquote>
    </div>

  </div>
)

// CountriesVisitedStateless.defaultProps = {
//     total : 196,
//     visited : 50,
//     liked : 100,
//     goal : 99
// }
//

CountriesVisitedStateless.propTypes = {
    total : PropTypes.number.isRequired,
    visited : PropTypes.number.isRequired,
    liked : PropTypes.number,
    goal : PropTypes.number.isRequired
}

// const percentToDecimal = (decimal) => {
//   return ((decimal * 100) + '%')
// }
//
// const calcTravelProgress = (visited, goal) => {
//   return percentToDecimal (visited/goal)
// }
//
// export const CountriesVisitedStateless = (props) => (
//
//   <div>
//     <div className="grid-full space-bottom text-center">
//       <span>{props.total} </span>
//       <span>total countries</span>
//     </div>
//     <div className="grid-half text-center space-bottom">
//       <span>{props.visited} </span>
//       <span>visited countries</span>
//     </div>
//     <div className="grid-half space-bottom text-center">
//       <span>{props.wished} </span>
//       <span>countries on wishlist</span>
//     </div>
//     <div className="grid-full space-bottom text-center">
//       <span>{calcTravelProgress (
//                 props.visited,
//                 props.goal
//             )}
//       </span>
//       <span> Completion</span>
//     </div>
//   </div>
// )
