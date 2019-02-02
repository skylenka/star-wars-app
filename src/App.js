import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Starships from './components/Starships.js';
import People from './components/People.js';
import Planet from './components/Planets.js';
import Home from './components/Home.js';
import Details from './components/Details.js';
import Test from './components/Test.js';
import NotFound from './components/NotFound.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
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
      <div style={{ margin: '10px' }}>
        <Menu>
          <MenuLink activeOnlyWhenExact={true} name="Home" as={Link} to="/" />
          <MenuLink name="Starschips" as={Link} to="/starchips" />
          <MenuLink name="People" as={Link} to="/people" />
          <MenuLink name="Planets" as={Link} to="/planets" />
          <MenuLink name="Test" as={Link} to="/test" />
        </Menu>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/star-wars-app" to="/" />
          <Route path="/starchips" component={Starships} />
          <Route path="/people" component={People} />
          <Route path="/planets" component={Planet} />
          <Route path="/test" component={Test} />
          <Route path="/details/people/:id?" component={Details} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  </>
);

export default App;
