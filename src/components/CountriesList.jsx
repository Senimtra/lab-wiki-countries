// ###############################################
// ##  Iteration 1.3 - CountriesList component  ##
// ###############################################

import { Component } from 'react';
import { Link } from 'react-router-dom';
import COUNTRIES_LIST from '../countries.json';

class CountriesList extends Component {
  constructor() {
    super();
    this.state = {
      list: COUNTRIES_LIST,
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((country) => (
            <li key={country.ccn3}>
              <Link to={`/countries/${country.cca3}`}>
                <img
                  src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                  alt={country.cca2}
                />{' '}
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
