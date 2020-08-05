import React, { useState } from 'react';
import { searchPlaceByNameOrDes } from './../actions/AdventureImage';
import { Navbar, Nav, Container, Form, FormControl, Image, Button } from 'react-bootstrap';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
    searchPlaceByNameOrDes(callbackPlaceByNameOrDes, event.target.place.value);
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
                <Nav.Link href="/newAdventureForm">Share Adventure</Nav.Link>

              </Nav>
              <Form inline onSubmit={handleSearch.bind(this)}>
                <FormControl type="text" name="place" placeholder="Search" className="mr-sm-2" />
                <Button type="submit" variant="outline-success">Search</Button>
              </Form>

            </Navbar.Collapse>
          </Navbar>

        </div >
      </Container>
      {/* {visible ? <section class="gallery-block cards-gallery">
        <div class="container">
          <div class="heading">
            <h2>Gallery</h2>
          </div>
          <div class="row">

            {images?.map(image =>
              <div class="col-md-6 col-lg-4">
                <div class="card border-0 transform-on-hover">
                  <Image src={"http://localhost:5000/api/AdventureImage/adventureImages/" + image.imageUrl} thumbnail />
                  <div class="card-body">
                    <h6><a href="#">{image.location}</a></h6>
                    <p class="text-muted card-text">{image.description}</p>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>
      </section> : ''} */}

    </>
  );
}

export default Header;