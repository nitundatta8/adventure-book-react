import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { getAdventureData } from '../actions/AdventureImage'


const AdventuresControl = () => {
  const [images, setImages] = useState([]);

  const getImage = (data) => {
    console.log(" data load ")
    setImages(data);
    console.log(images);
  }
  const title = "image load";
  useEffect(() => {

    // Update the document title using the browser API

    getAdventureData(getImage);
  }, [title]);



  return (
    <React.Fragment>
      {/* {places.map(place => place.name)} */}
      <section class="gallery-block cards-gallery">
        <div class="container">
          <div class="heading">
            <h2>Gallery</h2>
          </div>
          <div class="row">
            {images.map(image =>
              <div class="col-md-6 col-lg-4">
                <div class="card border-0 transform-on-hover">
                  <Image src={image.imageUrl} thumbnail />
                  <div class="card-body">
                    <h6><a href="#">{image.location}</a></h6>
                    <p class="text-muted card-text">{image.description}</p>
                  </div>
                </div>
              </div>)
            }
          </div>

        </div>
      </section>)

    </React.Fragment>
  );


};

export default AdventuresControl;