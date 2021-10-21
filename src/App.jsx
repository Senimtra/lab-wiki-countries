import { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    countriesList: null,
  };

  componentDidMount() {
    this.loadCountriesList();
  }

  loadCountriesList() {
    fetch(
      'https://raw.githubusercontent.com/mledoze/countries/master/countries.json'
    )
      .then((response) => response.json())
      .then((data) => this.setState({ countriesList: data }));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <CountriesList countries={this.state.countriesList} />
          <Switch>
            <Route
              path="/countries/:cca3"
              render={(props) => (
                <CountryDetails
                  countries={this.state.countriesList}
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
