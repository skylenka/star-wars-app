import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Starships from './components/Starships.js';
import People from './components/People.js';
import Planet from './components/Planets.js';
import Films from './components/Films.js';
import Species from './components/Species.js';
import Vehicles from './components/Vehicles.js';
import PeopleDetails from './components/PeopleDetails.js';
import PlanetsDetails from './components/PlanetsDetails.js';
import StarshipsDetails from './components/StarshipsDetails.js';
import FilmsDetails from './components/FilmsDetails.js';
import SpeciesDetails from './components/SpeciesDetails.js';
import VehiclesDetails from './components/VehiclesDetails.js';
import Search from './components/Search.js';
import Home from './components/Home.js';
import NotFound from './components/NotFound.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { Menu, Dropdown, Input } from 'semantic-ui-react';

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

class App extends Component {
  state = {
    value: ''
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleClick = event => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <>
        <Router>
          <div style={{ margin: '10px' }}>
            <Menu inverted>
              <MenuLink
                activeOnlyWhenExact={true}
                name="Home"
                as={Link}
                to="/"
              />
              <Dropdown text="Explore" pointing className="link item">
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
                  <Dropdown.Item as={Link} to="/vehicles">
                    Vehicles
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Menu position="right">
                <Menu.Item>
                  <Input
                    style={{ width: '100px' }}
                    placeholder="Search..."
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </Menu.Item>
                <Menu.Item
                  icon="search"
                  as={Link}
                  to={`/search/${this.state.value}`}
                  onClick={this.handleClick}
                />
              </Menu.Menu>
            </Menu>
            <Switch>
              <Route exact path="/" component={Home} />
              <Redirect from="/star-wars-app" to="/" />
              <Route path="/starships" component={Starships} />
              <Route path="/people" component={People} />
              <Route path="/planets" component={Planet} />
              <Route path="/films" component={Films} />
              <Route path="/species" component={Species} />
              <Route path="/vehicles" component={Vehicles} />
              <Route path="/search/:id?" component={Search} />
              <Route path="/details/people/:id?" component={PeopleDetails} />
              <Route path="/details/planets/:id?" component={PlanetsDetails} />
              <Route
                path="/details/starships/:id?"
                component={StarshipsDetails}
              />
              <Route path="/details/films/:id?" component={FilmsDetails} />
              <Route path="/details/species/:id?" component={SpeciesDetails} />
              <Route
                path="/details/vehicles/:id?"
                component={VehiclesDetails}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
