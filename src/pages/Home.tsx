import React from 'react';
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';

const Container = styled.div`
    padding: 16px;
`;

function Home() {
  return (
    <Container>
      <Alert variant="info">
        Hallo funktioniert es jetzt?
      </Alert>
    </Container>
  );
}

export default Home;
