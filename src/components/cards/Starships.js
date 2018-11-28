import React, { Component } from 'react';
import Buttons from '../elements/Buttons';
import { Card, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Starships extends Component {
  state = {
    curr: 'https://swapi.co/api/starships/',
    prev: '',
    next: '',
    starships: []
  };

  componentDidMount() {
    fetch(this.state.curr)
      .then(resp => {
        if (resp.ok) return resp.json();
        else throw new Error('Błąd seci!');
      })
      .then(({ results, next, previous }) => {
        this.setState({
          starships: results,
          next: next,
          prev: previous
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>Spacecrafts</h2>
        <Buttons
          curr={this.state.curr}
          prev={this.state.prev}
          next={this.state.next}
        />
        {/* <Button
          content="Prev"
          icon="left arrow"
          labelPosition="left"
          size="mini"
          onClick={() => {
            if (this.state.prev) {
              fetch(this.state.prev)
                .then(resp => {
                  if (resp.ok) return resp.json();
                  else throw new Error("Błąd seci!");
                })
                .then(({ results, next, previous }) => {
                  this.setState({
                    starships: results,
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
                  else throw new Error("Błąd seci!");
                })
                .then(({ results, next, previous }) => {
                  this.setState({
                    starships: results,
                    next: next,
                    prev: previous
                  });
                })
                .catch(err => {
                  console.log(err);
                });
            }
          }}
        /> */}
        <hr />
        <Card.Group>
          {this.state.starships.map(starship => (
            <Card key={starship.url}>
              <Card.Content>
                <Card.Header>{starship.name}</Card.Header>
                <Card.Meta>{starship.model}</Card.Meta>
                <Card.Description>{starship.manufacturer}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    );
  }
}

export default Starships;
