import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap';
function Header(props) {
  const styleHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: '5px',
    backgroundColor: 'gray',
    fontSize: '30px',

    width: '100%',
    borderBottom: '5px solid black',
    padding: '1rem'
  }
  const link = {
    color: 'white'
  }



  return (
    <Container>
      <div >
        {/* <h3>Adventure Book</h3>
      <Link style={link} to="/signin"><h4>Sign In</h4></Link>
      <Link style={link} to="/"><h4>Home</h4></Link>
      <Link style={link} to="/newAdventureForm"><h4>Share Adventure</h4></Link> */}

        <Navbar bg="light" expand="lg" className="bg-light justify-content-lg-center">
          <Navbar.Brand href="/">Adventure Book</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/signin">Sign In</Nav.Link>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/newAdventureForm">Share Adventure</Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Navbar>

      </div >
    </Container>
  );
}

export default Header;