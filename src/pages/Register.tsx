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

export default function Register() {
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
      <Button>Hello World</Button>
    </SimpleContainer>
  );
}
