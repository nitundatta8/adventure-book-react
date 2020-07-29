import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getImageById } from './../actions/AdventureImage';
import { Image } from 'react-bootstrap';

const ProductTagging = () => {
  const { imgId } = useParams();
  const [imgData, setImgData] = useState({})

  const imageData = (data) => {
    console.log("Api image data");
    setImgData(data);
  }

  const title = "image load";
  useEffect(() => {
    getImageById(imageData, imgId);
  }, [title]);

  const sizeImage = {
    height: '450px',
    width: '800px'
  }

  return (
    <>
      <h4>Tag your Product </h4>
      <h4>Product Id : {imgId}</h4>
      <section class="gallery-block cards-gallery">
        <div class="container">
          <div class="col-md-8 col-lg-6">
            <Image src={"http://localhost:5000/api/AdventureImage/adventureImages/" + imgData.imageUrl} thumbnail style={sizeImage} />
            <div class="card-body">
              <h6><a href="#">{imgData.location}</a></h6>
              <p class="text-muted card-text">{imgData.description}</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
};
export default ProductTagging;