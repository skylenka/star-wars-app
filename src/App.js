import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  state = {
    starships: [
      {
        name: '',
        url: '',
      },
    ],
  }

  componentDidMount() {
    fetch('https://swapi.co/api/starships/')
      .then(resp => resp.json())
      .then(({ results }) => {
        this.setState({
          starships: results,
        })
      })
  }

  render() {
    return (
      <List>
        {this.state.starships.map(starship => (
          <List.Item key={starship.url}>{starship.name}</List.Item>
        ))}
      </List>
    )
  }
}

export default App;
