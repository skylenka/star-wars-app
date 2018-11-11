import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Peoples extends Component {
    state = {
      people: []
    }
  
    componentDidMount() {
      fetch('https://swapi.co/api/people/')
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
            {this.state.people.map(person => (
              <Card key={person.url}>
                <Card.Content>
                  <Card.Header>{person.name}</Card.Header>
                  <Card.Meta>{person.height}</Card.Meta>
                  <Card.Description>
                  {person.birth_year}
                  </Card.Description>
                  <Card.Description>
                  {person.gender}
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
      )
    }
  }
  
  export default Peoples;