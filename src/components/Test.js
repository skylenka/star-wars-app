import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import ListRenderer from './ListRenderer';

const Test = ({ match }) => (
  <ListRenderer
    name="People"
    curr="https://swapi.co/api/people/"
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
            <Link to={person.url.match(/\/api\/(.*)/)[1]}>Read more</Link>
          </div>
        </Card.Content>
      </Card>
    )}
  />
);

export default Test;