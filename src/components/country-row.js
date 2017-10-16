import PropTypes from 'prop-types';

import Landing from 'react-icons/lib/md/flight-land'
import Heart from 'react-icons/lib/go/heart'

export const CountryRow = ({country, date, visited, liked}) => (
  <tr>
    <td>
      { date.getMonth() +1 } / { date.getDate() } / { date.getFullYear() }
    </td>
    <td>
      { country }
    </td>
    <td>
      { (visited) ? <Landing /> : null }
    </td>
    <td>
      { (liked) ? <Heart /> : null }
    </td>
  </tr>
)

CountryRow.propTypes = {
    country: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    visited: PropTypes.bool,
    liked: PropTypes.bool,
}
