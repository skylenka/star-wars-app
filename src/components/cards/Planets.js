import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Planet extends Component {
    state = {
      planets: []
    }
  
    componentDidMount() {
      fetch('https://swapi.co/api/planets/')
        .then(resp =>  {
          if (resp.ok)
          return resp.json();
          else
          throw new Error ('Błąd seci!');
        }).then(({ results }) => {
          this.setState({
            starships: results,
          });
        }).catch(err => {
          console.log(err)
        });
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