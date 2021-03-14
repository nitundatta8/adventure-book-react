import React, { useState } from 'react';
import { getAdventureData } from './../actions/AdventureImage';
import { Navbar, Nav, Container, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as c from '../actions/ActionsType';
import { Modal } from 'antd';
import { login } from '../actions/Login';



function Header() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false)
  console.log("process.env.REACT_APP_APP_Title: " + process.env.REACT_APP_APP_Title);
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


  const showModal = e => {

    setVisible(true);


  };

  const handleOk = e => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };

  const sizeModal = {
    height: '450px',

  }

  function doSignUp(event) {
    event.preventDefault();
    console.log("Name : " + event.target.name.value);

    dispatch(login(event.target.name.value, event.target.password.value));

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
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/signin" onClick={showModal}><h6>Sign In</h6></Nav.Link>
                <Nav.Link href="/"><h6>Home</h6></Nav.Link>
                {/* as={Link} to="/" */}
                {<Nav.Link as={Link} to="/newAdventureForm"><h6>Share Adventure</h6></Nav.Link>}
                <NavDropdown title="Campaign" id="nav-dropdown">
                  <NavDropdown.Item as={Link} to="/CampaignForm"><h6>Add Campaign</h6></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/report"><h6>Campaign Report</h6></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Reports" id="nav-dropdown">
                  <NavDropdown.Item as={Link} to="/commissionreport"><h6>Commission Report</h6></NavDropdown.Item>

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


          <Modal bodyStyle={sizeModal}
            title="LOGIN FORM"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            width="550px">

            <div class="container">

              <div>
                <div class="card-body">
                  <form onSubmit={doSignUp}>
                    <h3>Sign In</h3>

                    <div className="form-group">
                      <label>User Name [Test User Name book]</label>
                      <input type="text" name="name" className="form-control" placeholder="User Name" />

                    </div>

                    <div className="form-group">
                      <label>Password [Test Password book]</label>
                      <input type="password" name="password" className="form-control" placeholder="Enter password" />
                    </div>

                    {/* <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                      </div>
                    </div> */}

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    {/* <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                    </p> */}
                  </form>
                </div>

              </div>
            </div>
          </Modal>

        </div >
      </Container>

    </>
  );
}

export default Header;