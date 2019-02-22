import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';

class Search extends Component {
  state = {
    value: '',
    query: null
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleClick = event => {
    alert(
      `This is query for search: https://swapi.co/api/people/?search=${
        this.state.value
      }`
    );
    this.setState({
      query: `https://swapi.co/api/people/?search=${this.state.value}`
    });

    event.preventDefault();
  };
  render() {
    return (
      <>
        <Input
          placeholder="Search..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button
          style={{ margin: '0px 0px 0px 10px' }}
          positive
          onClick={this.handleClick}
        >
          Go!
        </Button>
      </>
    );
  }
}

export default Search;
