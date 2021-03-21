
import React from "react";

// reactstrap components
//import { Container } from "reactstrap";
import { Container } from 'react-bootstrap';

// core components

const PageHeader = () => {

  const line = {
    paddingTop: 50,
    paddingRight: 70,
    textAlign: "left",
    fontStyle: "oblique",
    color: "green"
  }

  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("../assets/img/page4.jpg") + ")",
          height: 200
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <div><h6 style={line}>DISCOVER THE COLORFUL WORLD</h6></div>

              {/* <div className="fog-low">
                <img alt="..." src={require("../assets/img/fog-low.png")} />
              </div> */}
              {/* <div className="fog-low right">
                <img alt="..." src={require("../assets/img/fog-low.png")} />
              </div> */}
            </div>
            {/* <h2 className="presentation-subtitle text-center">
              Make your mark with a Free Bootstrap 4 (Reactstrap) UI Kit!
            </h2> */}
          </Container>
        </div>
        {/* <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("../assets/img/clouds.png") + ")",
          }}
        /> */}

      </div>
    </>
  );
}

export default PageHeader;
