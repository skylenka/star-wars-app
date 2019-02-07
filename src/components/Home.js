import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import logo from '../logo.svg';
import swlogo from '../logosw.png';

const Home = () => (
  <>
    <Container fluid>
      <Image src={swlogo} size="small" />
      <Image src={logo} size="small" />
    </Container>
  </>
);

export default Home;
