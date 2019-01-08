import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Starships from './components/Starships.js';
import People from './components/People.js';
import Planet from './components/Planets.js';
import Home from './components/Home.js';
import NotFound from './components/NotFound.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const MenuLink = ({ name, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <Menu.Item className={match ? 'active' : ''}>
        <Link to={to}>{name}</Link>
      </Menu.Item>
    )}
  />
);

const App = () => (
  <>
    <Router>
      <div>
        <Menu>
          <MenuLink activeOnlyWhenExact={true} name="home" as={Link} to="/" />
          <MenuLink name="spacecrafts" as={Link} to="/spacecrafts" />
          <MenuLink name="people" as={Link} to="/people" />
          <MenuLink name="planets" as={Link} to="/planets" />
        </Menu>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/spacecrafts" component={Starships} />
          <Route path="/people" component={People} />
          <Route path="/planets" component={Planet} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  </>
);

export default App;
