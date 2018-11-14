import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Planet extends Component {
    state = {
      curr: 'https://swapi.co/api/planets/',
      prev: '',
      next: '',
      planets: []
    }
  
    componentDidMount() {
      fetch(this.state.curr)
        .then(resp =>  {
          if (resp.ok)
          return resp.json();
          else
          throw new Error ('Błąd seci!');
        }).then(({ results, next, previous }) => {
          this.setState({
            planets: results,
            next: next,
            prev: previous,
          });
        }).catch(err => {
          console.log(err)
        });
    }
  
    render() {
      return (
        <div>
            <Button 
              content='Prev' 
              icon='left arrow' 
              labelPosition='left' 
              size='mini'
              onClick={ () => {
                if (this.state.prev) {
                  fetch(this.state.prev)
                  .then(resp =>  {
                    if (resp.ok)
                    return resp.json();
                    else
                    throw new Error ('Błąd seci!');
                  }).then(({ results, next, previous }) => {
                    this.setState({
                      planets: results,
                      next: next,
                      prev: previous,
                    });
                  }).catch(err => {
                    console.log(err)
                  })
                  }
              }} />
              <Button 
              content='Next' 
              icon='right arrow' 
              labelPosition='right' 
              size='mini' 
              onClick={ () => {
                if (this.state.next) {
                  fetch(this.state.next)
                  .then(resp =>  {
                    if (resp.ok)
                    return resp.json();
                    else
                    throw new Error ('Błąd seci!');
                  }).then(({ results, next, previous }) => {
                    this.setState({
                      planets: results,
                      next: next,
                      prev: previous,
                    });
                  }).catch(err => {
                    console.log(err)
                  })
                  }
              }} />
              <hr />
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
          </div>
      )
    }
  }
  
  export default Planet;