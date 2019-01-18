import React from 'react';
import ListRenderer from './ListRenderer';
import { Card } from 'semantic-ui-react';

const People = () => (
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
      </Card>
    )}
  />
);

export default People;
