import './App.css';
import Country from './Country';
import State from './State';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/state">
            <State />
          </Route>
          <Route path="/" exact>
            <Country />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
