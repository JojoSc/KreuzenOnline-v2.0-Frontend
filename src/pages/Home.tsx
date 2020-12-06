import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Button, Form, Col, Row,
} from 'react-bootstrap';
import img from './KreuzenLogo.png';

document.getElementsByTagName('body')[0].style.backgroundColor = '#1d1d1d';

const Container = styled.div`
    padding: 5%;
    text-align="center";
    align="center";
    text-align="center";
    position: relative;
    width: 100%; 
    margin: 0 auto;
    horizontal-align: middle;
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
    <Row>
      <Col>
        <Container>
          <img src={img} />
        </Container>
      </Col>
      <Col>
        <div style={
          {
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
          }
        }
        >
          <Container>
            <span style={{ color: 'white' }}>
              <h1>Kreuzen</h1>
              <h3>Die Online-Lernplattform für Medizin und Zahnmedizin</h3>
            </span>
            <Container>
              <div className="Login">
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="email">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control
                      autoFocus
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button block size="lg" type="submit" disabled={!validateForm()} variant="success">
                    Login
                  </Button>
                </Form>
              </div>
            </Container>
          </Container>
        </div>
      </Col>
      <Col>test</Col>
    </Row>
  );
}
