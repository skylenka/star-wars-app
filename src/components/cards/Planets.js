import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Planet extends Component {
    state = {
      planets: [
        {
          name: '',
          climate: '',
          gravity: '',
          terrain: '',
          url: '',
        },
      ],
    }
  
    componentDidMount() {
      fetch('https://swapi.co/api/planets/')
        .then(resp => resp.json())
        .then(({ results }) => {
          this.setState({
            planets: results,
          })
        })
    }
  
    render() {
      return (
          <Card.Group>
            {this.state.planets.map(planet => (
              <Card key={planet.url}>
                <Card.Content>
                  <Card.Header>{planet.name}</Card.Header>
                  <Card.Meta>{planet.climate}</Card.Meta>
                  <Card.Description>
                  {planet.gravity}
                  </Card.Description>
                  <Card.Description>
                  {planet.terrain}
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
      )
    }
  }
  
  export default Planet;