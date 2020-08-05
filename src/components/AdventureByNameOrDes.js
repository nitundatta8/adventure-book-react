import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const AdventureByNameOrDes = () => {

  const [images, setImages] = useState([]);
  const { advImgs } = useParams();

  setImages(advImgs);
  console.log(images);
  return (
    <React.Fragment>
      <section class="gallery-block cards-gallery">
        <div class="container">
          <div class="heading">
            <h2>Gallery</h2>
          </div>
          <div class="row">
            {/* 
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
            } */}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AdventureByNameOrDes;