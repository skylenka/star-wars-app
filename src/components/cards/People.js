import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Peoples extends Component {
    state = {
      people: [
        {
          name: '',
          height: '',
          birth_year: '',
          gender: '',
          url: '',
        },
      ],
    }
  
    componentDidMount() {
      fetch('https://swapi.co/api/people/')
        .then(resp => resp.json())
        .then(({ results }) => {
          this.setState({
            people: results,
          })
        })
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