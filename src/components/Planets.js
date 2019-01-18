import React from 'react';
import ListRenderer from './ListRenderer';
import { Card } from 'semantic-ui-react';

const Planet = () => (
  <ListRenderer
    name="Planets"
    curr="https://swapi.co/api/planets/"
    renderCard={planet => (
      <Card key={planet.url}>
        <Card.Content>
          <Card.Header>{planet.name}</Card.Header>
          <Card.Meta>Climate: {planet.climate}</Card.Meta>
          <Card.Description>Gravity: {planet.gravity}</Card.Description>
          <Card.Description>Terrain: {planet.terrain}</Card.Description>
        </Card.Content>
      </Card>
    )}
  />
);

export default Planet;
