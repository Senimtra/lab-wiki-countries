// ###############################################
// ##  Iteration 1.3 - CountriesList component  ##
// ###############################################

import { Component } from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  render() {
    return (
      <div>
        <ul id="countries-list">
          {this.props.countries.map((country) => (
            <li key={country.ccn3} className="card">
              <Link to={`/countries/${country.cca3}`}>
                <img
                  src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                  alt={country.cca2}
                />
                {country.name.common}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CountriesList;
