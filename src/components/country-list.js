import Landing from 'react-icons/lib/md/flight-land'
import Heart from 'react-icons/lib/go/heart'

import { CountryRow } from './country-row'

export const CountryList = ({countries}) => (
  <div className="grid-full space-bottom space-top">
    <br/><br/>
    <table className="grid-full space-bottom space-top float-center">
      <thead>
        <tr>
          <th>Date</th>
          <th>Country</th>
          <th>Visited</th>
          <th>Liked</th>
        </tr>
      </thead>

      <tbody>
        {countries.map((country, i) =>
          <CountryRow key={i} {...country} />
        )}
      </tbody>
    </table>
  </div>
)


// export const CountryList = ({countries}) => (
//   <table>
//     <thead>
//       <tr>
//         <th>Date</th>
//         <th>Country</th>
//         <th>Visited</th>
//         <th>Liked</th>
//       </tr>
//     </thead>
//
//     <tbody>
//       {countries.map((country, i) =>
//         <CountryRow key={i}
//                     country={country.country}
//                     date={country.date}
//                     visited={country.visited}
//                     liked={country.liked}/>
//       )}
//     </tbody>
//   </table>
// )
