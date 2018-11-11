import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Starships extends Component {
    state = {
      starships: []
    }
  
    componentDidMount() {
      fetch('https://swapi.co/api/starships/')
        .then(resp => resp.json())
        .then(({ results }) => {
          this.setState({
            starships: results,
          });
        })
    }
  
    render() {
      return (
          <Card.Group>
            {this.state.starships.map(starship => (
              <Card key={starship.url}>
                <Card.Content>
                  <Card.Header>{starship.name}</Card.Header>
                  <Card.Meta>{starship.model}</Card.Meta>
                  <Card.Description>
                  {starship.manufacturer}
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
      )
    }
  }
  
  export default Starships;