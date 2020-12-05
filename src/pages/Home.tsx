import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';

import img from './KreuzenLogo.png';

const Container = styled.div`
    padding: 5%;
    text-align="center";
    align="center";
    position: relative;
    width: 50%; 
    margin: 0 auto;
`;

const ContainerN = styled.div`
    padding= 5%
    position: relative
    width: 80%
    margin: 0 auto;
`;

export default function HomeLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
  }

  return (
    <ContainerN>
      <img src={img} />
      <Container>
        <h1>Kreuzen</h1>
        <h2>Die Online-Lernplattform für Medizin und Zahnmedizin</h2>
        <Container>
          <div className="Login">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Passwort</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button color="#acf6c8" block size="lg" type="submit" disabled={!validateForm()}>
                Login
              </Button>
            </Form>
          </div>
        </Container>
      </Container>
    </ContainerN>
  );
}
