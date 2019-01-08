import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

class People extends Component {
  state = {
    curr: 'https://swapi.co/api/people/',
    prev: null,
    next: null,
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

  handleButton = type => {
    if (type === 'previous') {
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
    }
    if (type === 'next') {
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
    }
    return;
  };

  render() {
    return (
      <>
        <h2>People</h2>
        <Button
          content="Prev"
          icon="left arrow"
          labelPosition="left"
          size="mini"
          onClick={() => this.handleButton('previous')}
          disabled={this.state.prev !== null ? false : true}
        />
        <Button
          content="Next"
          icon="right arrow"
          labelPosition="right"
          size="mini"
          onClick={() => this.handleButton('next')}
          disabled={this.state.next !== null ? false : true}
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
