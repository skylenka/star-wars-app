:diffg LO 
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Starships from './components/cards/Starships.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Spacecrafts() {
  return (
    <div>
      <h2>Spacecrafts</h2>
      <Starships />
    </div>
  );
}

function People() {
  return (
    <div>
      <h2>People</h2>
    </div>
  );
}

function Planets() {
  return (
    <div>
      <h2>Planets</h2>
    </div>
  );
}

class App extends Component {

  render() {
    return (
      <div>
        <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/spacecrafts">Spacecrafts</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/spacecrafts" component={Spacecrafts} />
        <Route path="/people" component={People} />
        <Route path="/planets" component={Planets} />
      </div>
    </Router>
      </div>
    )
  }
}

export default App;
