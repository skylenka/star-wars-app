import React, { Component } from 'react';
import Buttons from '../elements/Buttons';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Starships extends Component {
  state = {
    curr: 'https://swapi.co/api/starships/',
    prev: null,
    next: null,
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

  handlePrevButton = () => {
    if (this.state.prev) {
      fetch(this.state.prev)
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

  handleNextButton = () => {
    if (this.state.next) {
      fetch(this.state.next)
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

  render() {
    return (
      <>
        <h2>Spacecrafts</h2>
        <Buttons
          prev={this.state.prev}
          next={this.state.next}
          fnprev={this.handlePrevButton}
          fnnext={this.handleNextButton}
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
