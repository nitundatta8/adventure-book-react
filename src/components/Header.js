import React, { useState } from 'react';
import { getAdventureData } from './../actions/AdventureImage';
import { Navbar, Nav, Container, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as c from '../actions/ActionsType';

import { useSelector } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false)
  console.log("process.env.REACT_APP_APP_Title: " + process.env.REACT_APP_APP_Title);
  const loginStatus = useSelector(state => state.user.login);

  const callbackPlaceByNameOrDes = (data) => {
    console.log("callback  PlaceByNameOrDes");

    const action = {
      type: c.ADD_ADVENTURE,
      data
    }
    dispatch(action)

  };

  const handleSearch = (event) => {
    console.log(" handleSearch :")
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
            {/* <Navbar.Brand href="/">{process.env.REACT_APP_APP_Title}</Navbar.Brand> */}
            <Navbar.Brand href="/"><h5>ADVENTURE BOOK</h5></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {!loginStatus ?
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/signin"><h6>Sign In</h6></Nav.Link>
                  <Nav.Link as={Link} to="/"><h6>Home</h6></Nav.Link>
                </Nav> :
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/"><h6>Home</h6></Nav.Link>
                  <Nav.Link as={Link} to="/newAdventureForm"><h6>Share Adventure</h6></Nav.Link>

                  <NavDropdown title="Campaign" id="nav-dropdown">
                    <NavDropdown.Item as={Link} to="/CampaignForm"><h6>Add Campaign</h6></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/report"><h6>Campaign Report</h6></NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Reports" id="nav-dropdown">
                    <NavDropdown.Item as={Link} to="/commissionreport"><h6>Commission Report</h6></NavDropdown.Item>
                  </NavDropdown>
                </Nav>}
              <Form inline onSubmit={handleSearch.bind(this)}>
                <FormControl type="text" name="place" placeholder="Search" className="mr-sm-2" />
                <Button type="submit" variant="outline-success">Search</Button>
              </Form>
              {loginStatus ? <h5>LOOGED IN</h5> : <h4></h4>}

            </Navbar.Collapse>
          </Navbar>
        </div >
      </Container>

    </>
  );
}

export default Header;

{/* <NavDropdown.Divider />
  <NavDropdown.Item as={Link} to="#action/3.4">Separated link</NavDropdown.Item> */}