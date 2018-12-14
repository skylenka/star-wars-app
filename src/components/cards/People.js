import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class People extends Component {
  state = {
    curr: 'https://swapi.co/api/people/',
    prev: '',
    next: '',
    people: []
  };

  componentDidMount() {
    fetch(this.state.curr)
      .then(resp => {
        if (resp.ok) return resp.json();
        else throw new Error('Błąd seci!');
      })
      .then(({ results, next, previous }) => {
        this.setState({
          people: results,
          prev: previous,
          next: next
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <h2>People</h2>
        <Button
          content="Prev"
          icon="left arrow"
          labelPosition="left"
          size="mini"
          onClick={() => {
            if (this.state.prev) {
              fetch(this.state.prev)
                .then(resp => {
                  if (resp.ok) return resp.json();
                  else throw new Error('Błąd seci!');
                })
                .then(({ results, next, previous }) => {
                  this.setState({
                    people: results,
                    next: next,
                    prev: previous
                  });
                })
                .catch(err => {
                  console.log(err);
                });
            }
          }}
        />
        <Button
          content="Next"
          icon="right arrow"
          labelPosition="right"
          size="mini"
          onClick={() => {
            if (this.state.next) {
              fetch(this.state.next)
                .then(resp => {
                  if (resp.ok) return resp.json();
                  else throw new Error('Błąd seci!');
                })
                .then(({ results, next, previous }) => {
                  this.setState({
                    people: results,
                    next: next,
                    prev: previous
                  });
                })
                .catch(err => {
                  console.log(err);
                });
            }
          }}
        />
        <hr />
        <Card.Group>
          {this.state.people.map(person => (
            <Card key={person.url}>
              <Card.Content>
                <Card.Header>{person.name}</Card.Header>
                <Card.Meta>{person.height}</Card.Meta>
                <Card.Description>{person.birth_year}</Card.Description>
                <Card.Description>{person.gender}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </>
    );
  }
}

export default People;
