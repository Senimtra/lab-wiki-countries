import './App.scss';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <CountriesList />
        <Switch>
          <Route path="/countries/:cca3" component={CountryDetails} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
