import React from 'react';
import { Image } from 'react-bootstrap'

class AdventuresControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <React.Fragment>
        <section class="gallery-block cards-gallery">
          <div class="container">
            <div class="heading">
              <h2>Gallery</h2>
            </div>
            <div class="row">
              <div class="col-md-6 col-lg-4">
                <div class="card border-0 transform-on-hover">
                  <Image src="img/image3.jpg" thumbnail />
                  <div class="card-body">
                    <h6><a href="#">Lorem Ipsum</a></h6>
                    <p class="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card border-0 transform-on-hover">
                  <Image src="img/image4.jpg" thumbnail />
                  <div class="card-body">
                    <h6><a href="#">Lorem Ipsum</a></h6>
                    <p class="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card border-0 transform-on-hover">
                  <Image src="img/image5.jpg" thumbnail />
                  <div class="card-body">
                    <h6><a href="#">Lorem Ipsum</a></h6>
                    <p class="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>



      </React.Fragment>
    );
  };

};

export default AdventuresControl;