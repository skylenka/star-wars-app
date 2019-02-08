import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import logo from '../logo.svg';

const Home = () => (
  <>
    <Container fluid>
      <Image src={logo} size="small" centered />
      <div className="robot" />
      <div className="word">Star Wars</div>
    </Container>
  </>
);

export default Home;
