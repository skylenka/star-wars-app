import React, { Component } from 'react';
import Buttons from './Buttons';
import { Card } from 'semantic-ui-react';

class Starships extends Component {
  state = {
    curr: 'https://swapi.co/api/starships/',
    prev: null,
    next: null,
    starships: []
  };

  handleRespond = link => {
    if (link) {
      fetch(link)
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
    return;
  };

  componentDidMount() {
    this.handleRespond(this.state.curr);
  }

  handlePrevButton = () => {
    this.handleRespond(this.state.prev);
  };

  handleNextButton = () => {
    this.handleRespond(this.state.next);
  };

  render() {
    return (
      <>
        <h2>Spacecrafts</h2>
        <Buttons
          prev={this.state.prev}
          next={this.state.next}
          fnPrev={this.handlePrevButton}
          fnNext={this.handleNextButton}
        />

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
      </>
    );
  }
}

export default Starships;