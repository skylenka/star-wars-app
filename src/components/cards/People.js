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
            {this.state.people.map(people => (
              <Card key={people.url}>
                <Card.Content>
                  <Card.Header>{people.name}</Card.Header>
                  <Card.Meta>{people.height}t</Card.Meta>
                  <Card.Description>
                  {people.birth_year}
                  </Card.Description>
                  <Card.Description>
                  {people.gender}
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
      )
    }
  }
  
  export default Peoples;