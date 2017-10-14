import '../assets/sass/kraken.scss'

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcTravelProgress = (visited, goal) => {
  return percentToDecimal (visited/goal)
}

export const CountriesVisitedES6 = (props) => (

  <div className="countries-visited">
    <hr/>
    <h3>This Data is calculated inside an ES6 Class Component</h3>
    <div className="total-contries">
      <span>{props.total} </span>
      <span>total countries</span>
    </div>
    <div className="visited">
      <span>{props.visited} </span>
      <span>visited countries</span>
    </div>
    <div className="wish-list">
      <span>{props.wished} </span>
      <span>countries on wishlist</span>
    </div>
    <div>
      <span>{calcTravelProgress (
                props.visited,
                props.goal
            )}
      </span>
      <span> Completion</span>
    </div>
  </div>
)

// import { Component } from 'react'
//
// export class CountriesVisited extends Component {
//   percentToDecimal (decimal) {
//     return ((decimal * 100) + '%')
//   }
//   calcTravelProgress (visited, goal) {
//     return this.percentToDecimal (visited/goal)
//   }
//   render() {
//     return (
//       <div className="countries-visited">
//         <div className="total-contries">
//           <span>{this.props.total} </span>
//           <span>total countries</span>
//         </div>
//         <div className="visited">
//           <span>{this.props.visited} </span>
//           <span>visited countries</span>
//         </div>
//         <div className="wish-list">
//           <span>{this.props.wished} </span>
//           <span>countries on wishlist</span>
//         </div>
//         <div>
//           <span>{this.calcTravelProgress (
//                     this.props.visited,
//                     this.props.goal
//                 )}
//           </span>
//           <span> Completion</span>
//         </div>
//       </div>
//     )
//   }
// }
