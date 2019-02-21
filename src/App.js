import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Starships from './components/Starships.js';
import People from './components/People.js';
import Planet from './components/Planets.js';
import Films from './components/Films.js';
import Species from './components/Species.js';
import Home from './components/Home.js';
import PeopleDetails from './components/PeopleDetails.js';
import PlanetsDetails from './components/PlanetsDetails.js';
import StarshipsDetails from './components/StarshipsDetails.js';
import FilmsDetails from './components/FilmsDetails.js';
import SpeciesDetails from './components/SpeciesDetails.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import NotFound from './components/NotFound.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';

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
        <Menu inverted>
          <MenuLink activeOnlyWhenExact={true} name="Home" as={Link} to="/" />
          <Dropdown text="Elements" pointing className="link item">
            <Dropdown.Menu>
              <Dropdown.Header>Categories</Dropdown.Header>
              <Dropdown.Item as={Link} to="/starships">
                Starships
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/people">
                People
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/planets">
                Planets
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/films">
                Films
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/species">
                Species
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <MenuLink name="About" as={Link} to="/about" />
          <MenuLink name="Contact" as={Link} to="/contact" />
        </Menu>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/star-wars-app" to="/" />
          <Route path="/starships" component={Starships} />
          <Route path="/people" component={People} />
          <Route path="/planets" component={Planet} />
          <Route path="/films" component={Films} />
          <Route path="/species" component={Species} />
          <Route path="/details/people/:id?" component={PeopleDetails} />
          <Route path="/details/planets/:id?" component={PlanetsDetails} />
          <Route path="/details/starships/:id?" component={StarshipsDetails} />
          <Route path="/details/films/:id?" component={FilmsDetails} />
          <Route path="/details/species/:id?" component={SpeciesDetails} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  </>
);

export default App;
