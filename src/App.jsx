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
        <Route path="/countries/:cca3" component={CountryDetails} />
      </div>
      <Switch>
        <Route path="/" component={CountriesList} exact />
      </Switch>
    </div>
  );
}

export default App;
