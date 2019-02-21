import React from 'react';
import ListRenderer from './ListRenderer';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Vehicles = () => (
  <ListRenderer
    name="Species"
    curr="https://swapi.co/api/vehicles/"
    renderCard={vehicle => (
      <Card key={vehicle.url}>
        <Card.Content>
          <Card.Header>{vehicle.name}</Card.Header>
          <Card.Meta>Model: {vehicle.model}</Card.Meta>
          <Card.Description>
            Manufacturer: {vehicle.manufacturer}
          </Card.Description>
          <Card.Description>
            Cost in credits: {vehicle.cost_in_credits}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Link to={`details/${vehicle.url.match(/\/api\/(.*)/)[1]}`}>
              Read more
            </Link>
          </div>
        </Card.Content>
      </Card>
    )}
  />
);

export default Vehicles;
