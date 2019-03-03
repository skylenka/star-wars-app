import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';
import ListRenderer from './ListRenderer';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
class Search extends Component {
  state = {
    value: '',
    query: ''
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleClick = event => {
    this.setState({
      query: `https://swapi.co/api/people/?search=${this.state.value}`
    });
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

        <ListRenderer
          name="People"
          curr={this.state.query}
          renderCard={person => (
            <Card key={person.url}>
              <Card.Content>
                <Card.Header>{person.name}</Card.Header>
                <Card.Meta>Height: {person.height}</Card.Meta>
                <Card.Description>Birth: {person.birth_year}</Card.Description>
                <Card.Description>Gender: {person.gender}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div>
                  <Link to={`details/${person.url.match(/\/api\/(.*)/)[1]}`}>
                    Read more
                  </Link>
                </div>
              </Card.Content>
            </Card>
          )}
        />
      </>
    );
  }
}

export default Search;
