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
          <Card.Meta>{person.height}</Card.Meta>
          <Card.Description>{person.birth_year}</Card.Description>
          <Card.Description>{person.gender}</Card.Description>
        </Card.Content>
      </Card>
    )}
  />
);

export default People;
