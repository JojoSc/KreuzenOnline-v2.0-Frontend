import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  Button, Form, Col, Row, Navbar, Nav,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

const ButtonModified = styled(Button)`
    border-radius: 3px;
    background: #a1f9d2;
    color: black;
    border: 2px white;
`;

const SimpleButton = styled(Button)`
    display: inline-block;
    border-radius: 3px;
    width: 15rem;
    background: transparent;
    color: white;
    border: 1px solid white;
`;

const MintHeader = styled(Navbar)`
    color: #000000;
    background: #a1f9d2;
    border: 1px solid white;
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

  function login() {

  }

  return (
    <SimpleContainer>
      <MintHeader>
        <MintHeader.Brand href="#home">Kreuzen</MintHeader.Brand>
        <MintHeader.Toggle aria-controls="basic-navbar-nav" />
        <MintHeader.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">DEFI</Nav.Link>
            <Nav.Link href="#link">Files</Nav.Link>
            <Nav.Link href="#link">PJ Evaluation</Nav.Link>
            <Nav.Link href="#link">Das Komm</Nav.Link>
            <Nav.Link href="#link">Post</Nav.Link>
          </Nav>
        </MintHeader.Collapse>
      </MintHeader>
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
                    <ButtonModified block size="lg" type="submit" onClick={login}>
                      Login
                    </ButtonModified>
                  </Form>
                </div>
                <div style={{ display: 'flex' }}>
                  <Link to="/passwordreset">
                    <Button
                      size="sm"
                      type="button"
                      variant="link"
                      style={{ marginRight: 'auto', color: '#a1f9d2', display: 'flex' }}
                    >
                      Passwort vergessen?
                    </Button>
                  </Link>
                </div>
                <Container>
                  <div className="row">
                    <Link to="/register">
                      <SimpleButton size="sm" type="button" variant="link">
                        Registrieren
                      </SimpleButton>
                    </Link>
                    <Link to="/unlock">
                      <SimpleButton size="sm" type="button" variant="link">
                        Account freischalten
                      </SimpleButton>
                    </Link>
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
