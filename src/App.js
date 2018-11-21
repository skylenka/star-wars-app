import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Starships from './components/cards/Starships.js';
import Peoples from './components/cards/People.js';
import Planet from './components/cards/Planets.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

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
      <Peoples />
    </div>
  );
}

function Planets() {
  return (
    <div>
      <h2>Planets</h2>
      <Planet />
    </div>
  );
}

class App extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Router>
          <div>
            <Menu>
              <Menu.Item
                name="home"
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                as={Link}
                to="/"
              />
              <Menu.Item
                name="spacecrafts"
                active={activeItem === 'spacecrafts'}
                onClick={this.handleItemClick}
                as={Link}
                to="/spacecrafts"
              />
              <Menu.Item
                name="people"
                active={activeItem === 'people'}
                onClick={this.handleItemClick}
                as={Link}
                to="/people"
              />
              <Menu.Item
                name="planets"
                active={activeItem === 'planets'}
                onClick={this.handleItemClick}
                as={Link}
                to="/planets"
              />
            </Menu>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/spacecrafts" component={Spacecrafts} />
            <Route path="/people" component={People} />
            <Route path="/planets" component={Planets} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
