
import React from "react";

// reactstrap components
//import { Container } from "reactstrap";
import { Container } from 'react-bootstrap';

// core components

const PageHeader = () => {
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("../assets/img/slider5.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <div><h4>DISCOVER THE COLORFUL WORLD</h4></div>

              <div className="fog-low right">
                <img alt="..." src={require("../assets/img/fog-low.png")} />
              </div>
            </div>

          </Container>
        </div>


      </div>
    </>
  );
}

export default PageHeader;
