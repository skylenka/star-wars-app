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
            {this.state.planets.map(planets => (
              <Card key={planets.url}>
                <Card.Content>
                  <Card.Header>{planets.name}</Card.Header>
                  <Card.Meta>{planets.climate}t</Card.Meta>
                  <Card.Description>
                  {planets.gravity}
                  </Card.Description>
                  <Card.Description>
                  {planets.terrain}
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
      )
    }
  }
  
  export default Planet;