import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class Search extends Component {
  state = {
    curr: null,
    prev: null,
    next: null,
    content: null
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
            content: results,
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

  handleInput = () => {};

  render() {
    return (
      <>
        <Input placeholder="Search..." />
      </>
    );
  }
}

export default Search;
