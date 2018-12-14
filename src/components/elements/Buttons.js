import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Buttons extends Component {
  render() {
    return (
      <>
        <Button
          content="Prev"
          icon="left arrow"
          labelPosition="left"
          size="mini"
          onClick={() => {
            if (this.props.prev) {
              fetch(this.props.prev)
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
          }}
        />
        <Button
          content="Next"
          icon="right arrow"
          labelPosition="right"
          size="mini"
          onClick={() => {
            if (this.props.next) {
              fetch(this.props.next)
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
          }}
        />
      </>
    );
  }
}

export default Buttons;
