import '../assets/sass/kraken.scss'

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcTravelProgress = (visited, goal) => {
  return percentToDecimal (visited/goal)
}

export const CountriesVisitedStateless = ({ total, visited, wished, goal }) => (

  <div className="countries-visited">
    <hr/>
    <h3>This Data is calculated inside a stateless Component</h3>
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
      <span> Completion</span><br/><br/>
    </div>
  </div>
)

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
