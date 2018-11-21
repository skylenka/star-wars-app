import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Starships from './components/cards/Starships.js';
import People from './components/cards/People.js';
import Planet from './components/cards/Planets.js';
import Home from './components/cards/Home.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Menu>
              <Menu.Item name="home" as={Link} to="/" />
              <Menu.Item name="spacecrafts" as={Link} to="/spacecrafts" />
              <Menu.Item name="people" as={Link} to="/people" />
              <Menu.Item name="planets" as={Link} to="/planets" />
            </Menu>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/spacecrafts" component={Starships} />
            <Route path="/people" component={People} />
            <Route path="/planets" component={Planet} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
