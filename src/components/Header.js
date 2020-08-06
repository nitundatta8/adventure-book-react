import React, { useState } from 'react';
import { getAdventureData } from './../actions/AdventureImage';
import { Navbar, Nav, Container, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as c from '../actions/ActionsType';

function Header() {
  const dispatch = useDispatch();
  const callbackPlaceByNameOrDes = (data) => {
    console.log("callback  PlaceByNameOrDes");

    const action = {
      type: c.ADD_ADVENTURE,
      data
    }
    dispatch(action)

  };

  const handleSearch = (event) => {
    console.log(" handleSearch ")
    event.preventDefault();
    if (event.target.place.value.trim() != "") {
      getAdventureData(callbackPlaceByNameOrDes, event.target.place.value);
    }

  };

  return (
    <>
      <Container>
        <div >
          <Navbar bg="light" expand="lg" className="bg-light justify-content-lg-center">
            <Navbar.Brand href="/">Adventure Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/signin">Sign In</Nav.Link>
                <Nav.Link href="/">Home</Nav.Link>
                {/* as={Link} to="/" */}
                {<Nav.Link as={Link} to="/newAdventureForm">Share Adventure</Nav.Link>}
                <NavDropdown title="Campaign" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/CampaignForm">Add Campaign</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/report">Campaign Report</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Reports" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/commissionreport">Commission Report</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

              </Nav>
              <Form inline onSubmit={handleSearch.bind(this)}>
                <FormControl type="text" name="place" placeholder="Search" className="mr-sm-2" />
                <Button type="submit" variant="outline-success">Search</Button>
              </Form>

            </Navbar.Collapse>
          </Navbar>

        </div >
      </Container>

    </>
  );
}

export default Header;