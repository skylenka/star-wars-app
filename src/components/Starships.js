import React from 'react';
import ListRenderer from './ListRenderer';
import { Card } from 'semantic-ui-react';

const Starships = () => (
  <ListRenderer
    name="Starschips"
    curr="https://swapi.co/api/starships/"
    renderCard={starship => (
      <Card key={starship.url}>
        <Card.Content>
          <Card.Header>{starship.name}</Card.Header>
          <Card.Meta>Model: {starship.model}</Card.Meta>
          <Card.Description>
            Manufacturer: {starship.manufacturer}
          </Card.Description>
        </Card.Content>
      </Card>
    )}
  />
);

export default Starships;
