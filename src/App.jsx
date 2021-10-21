import { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import COUNTRIES_LIST from './countries.json';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    countriesList: null,
  };

  componentDidMount() {
    this.loadCountriesList();
  }

  loadCountriesList() {
    this.setState({ countriesList: COUNTRIES_LIST });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <CountriesList countries={this.state.countriesList} />
          <Switch>
            <Route path="/countries/:cca3" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
