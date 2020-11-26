import React from 'react';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled.div`
    padding: 16px;
`;

const Home = () => (
  <Container>
    <Alert variant="info">
      Hello World!
    </Alert>
  </Container>
);

export default Home;
