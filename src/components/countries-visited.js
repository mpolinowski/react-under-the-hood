import '../assets/sass/kraken.scss'

// http://www.worldometers.info/geography/how-many-countries-are-there-in-the-world/

// https://www.npmjs.com/package/react-icons

// http://gorangajic.github.io/react-icons/go.html

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcTravelProgress = (visited, goal) => {
  return percentToDecimal (visited/goal)
}

export const CountriesVisited = ({ total, visited, wished, goal }) => (

  <div className="countries-visited">
    <div className="total-contries">
      <span>{total} </span>
      <span>total countries</span>
    </div>
    <div className="visited">
      <span>{visited} </span>
      <span>visited countries</span>
    </div>
    <div className="wish-list">
      <span>{wished} </span>
      <span>countries on wishlist</span>
    </div>
    <div>
      <span>{calcTravelProgress (
                visited,
                goal
            )}
      </span>
      <span> Completion</span>
    </div>
  </div>
)

// export const CountriesVisited = (props) => (
//
//   <div className="countries-visited">
//     <div className="total-contries">
//       <span>{props.total} </span>
//       <span>total countries</span>
//     </div>
//     <div className="visited">
//       <span>{props.visited} </span>
//       <span>visited countries</span>
//     </div>
//     <div className="wish-list">
//       <span>{props.wished} </span>
//       <span>countries on wishlist</span>
//     </div>
//     <div>
//       <span>{calcTravelProgress (
//                 props.visited,
//                 props.goal
//             )}
//       </span>
//       <span> Completion</span>
//     </div>
//   </div>
// )

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
