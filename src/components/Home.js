import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import logo from '../logo.svg';


const Home = () => (
  <>
    <Container fluid>
      
      <Image src={logo} size="small" centered />
      <div className="🤖"></div>
      <div className="後">Star wars</div> 
    </Container>
  </>
);

export default Home;
