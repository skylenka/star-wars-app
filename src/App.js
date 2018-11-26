import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Starships from './components/cards/Starships.js';
import People from './components/cards/People.js';
import Planet from './components/cards/Planets.js';
import Home from './components/cards/Home.js';
import NotFound from './components/cards/NotFound.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function MenuLink({ name, to, activeOnlyWhenExact }) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <div className={match ? 'active' : ''}>
          {match ? '> ' : ''}
          <Link to={to}>{name}</Link>
        </div>
      )}
    />
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Menu>
              <MenuLink
                activeOnlyWhenExact={true}
                name="home"
                as={Link}
                to="/"
              />
              <MenuLink name="spacecrafts" as={Link} to="/spacecrafts" />
              <MenuLink name="people" as={Link} to="/people" />
              <MenuLink name="planets" as={Link} to="/planets" />
            </Menu>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/spacecrafts" component={Starships} />
            <Route path="/people" component={People} />
            <Route path="/planets" component={Planet} />
            <Route path="*" component={NotFound} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
