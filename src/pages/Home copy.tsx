import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Button, Form, Col, Row, Navbar, Nav,
} from 'react-bootstrap';
import img from '../Grafiken/KreuzenLogo.png';

document.getElementsByTagName('body')[0].style.backgroundColor = '#1d1d1d';

const Container = styled.div`
    padding: 5%;
    text-align="center";
    align="center";
    position: relative;
    width: 80%; 
    margin: 0 auto;
    horizontal-align: middle;
`;

const SimpleContainer = styled.div`
    padding: 0.5%;
    text-align="center";
    align="center";
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
    <SimpleContainer>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Kreuzen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">DEFI</Nav.Link>
            <Nav.Link href="#link">Files</Nav.Link>
            <Nav.Link href="#link">PJ Evaluation</Nav.Link>
            <Nav.Link href="#link">Das Komm</Nav.Link>
            <Nav.Link href="#link">Post</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        <Col>Test</Col>
        <Col>
          <div style={
            {
              display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh',
            }
          }
          >
            <Container>
              <div style={
                {
                  display: 'flex', justifyContent: 'center',
                }
              }
              >
                <img src={img} alt="Kreuzen_Logo" />
              </div>
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
                        placeholder="Benutzername"
                      />
                    </Form.Group>
                    <Form.Group controlId="password">
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Passwort"
                      />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()} variant="success">
                      Login
                    </Button>
                  </Form>
                </div>
                <div style={{ display: 'flex' }}>
                  <Button
                    size="sm"
                    type="button"
                    variant="link"
                    style={{ marginLeft: 'auto' }}
                  >
                    Passwort vergessen?
                  </Button>
                </div>
                <Container>
                  <div className="row">
                    <Button size="sm" type="button" variant="link">
                      Registrieren
                    </Button>
                    <Button size="sm" type="button" variant="link">
                      Account freischalten
                    </Button>
                  </div>
                </Container>
              </Container>
            </Container>
          </div>
        </Col>
        <Col>test</Col>
      </Row>
    </SimpleContainer>
  );
}
