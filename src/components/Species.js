import React from 'react';
import ListRenderer from './ListRenderer';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Species = () => (
  <ListRenderer
    name="Species"
    curr="https://swapi.co/api/species/"
    renderCard={specie => (
      <Card key={specie.url}>
        <Card.Content>
          <Card.Header>{specie.name}</Card.Header>
          <Card.Meta>Classification: {specie.classification}</Card.Meta>
          <Card.Description>Designation: {specie.designation}</Card.Description>
          <Card.Description>
            Average lifespan: {specie.average_lifespan}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Link to={`details/${specie.url.match(/\/api\/(.*)/)[1]}`}>
              Read more
            </Link>
          </div>
        </Card.Content>
      </Card>
    )}
  />
);

export default Species;
