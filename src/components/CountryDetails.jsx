// ################################################
// ##  Iteration 1.4 - CountryDetails component  ##
// ################################################

import { Component } from 'react';
import { Link } from 'react-router-dom';
import COUNTRIES_LIST from './../countries.json';

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
    };
  }

  componentDidMount() {
    this.loadCountryDetail();
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.match.params.cca3 !== this.props.match.params.cca3) {
      this.loadCountryDetail();
    }
  }

  loadCountryDetail() {
    const country = COUNTRIES_LIST.filter(
      (el) => el.cca3 === this.props.match.params.cca3
    )[0];
    this.setState({ country });
  }

  render() {
    return (
      (this.state.country && (
        <div>
          <h1>{this.state.country.name.common}</h1>
          <hr></hr>
          <div id="capital">
            <div>Capital</div>
            <span>{this.state.country.capital}</span>
          </div>
          <hr></hr>
          <div id="area">
            <div>Area</div>
            <span>
              {this.state.country.area} km<sup>2</sup>
            </span>
          </div>
          <hr></hr>
          <div id="borders">
            <div>Borders</div>
            <ul>
              {this.state.country.borders.map((country) => (
                <li key={Math.random()}>
                  <Link to={`/countries/${country}`}>
                    {
                      COUNTRIES_LIST.filter((el) => el.cca3 === country)[0].name
                        .common
                    }
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )) || <h1>Loading...</h1>
    );
  }
}

export default CountryDetails;
