import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';
import ListRenderer from './ListRenderer';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
class Search extends Component {
  state = {
    value: '',
    query: null
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleClick = event => {
    // alert(
    //   `This is query for search: https://swapi.co/api/people/?search=${
    //     this.state.value
    //   }`
    // );
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

        <ListRenderer
          name="Starships"
          curr={this.state.query}
          renderCard={starship => (
            <Card key={starship.url}>
              <Card.Content>
                <Card.Header>{starship.name}</Card.Header>
                <Card.Meta>Model: {starship.model}</Card.Meta>
                <Card.Description>
                  Manufacturer: {starship.manufacturer}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div>
                  <Link to={`details/${starship.url.match(/\/api\/(.*)/)[1]}`}>
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
