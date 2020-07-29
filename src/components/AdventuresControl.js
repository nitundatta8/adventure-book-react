import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { getAdventureData } from '../actions/AdventureImage';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Modal, Button } from 'antd';



const AdventuresControl = () => {
  const [visible, setVisible] = useState(false)
  const loginStatus = useSelector(state => state.user.login);
  const authenticationFail = useSelector(state => state.user.authenticationFail);

  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState({});

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



  ///*************************** */

  let state = { visible: false };

  const showModal = e => {
    console.log("image id");
    console.log(e.target.id)
    setVisible(true);
    images.map(image => {
      if (image.id == e.target.id) {
        console.log(" -- id --" + image.id)
        setCurrentImage(image);
      }
    })
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
    height: '650px',

  }
  const sizeImage = {
    height: '500px'
  }

  ///888***********************

  return (
    <React.Fragment>

      <section class="gallery-block cards-gallery">
        <div class="container">
          <div class="heading">
            <h2>Gallery</h2>
          </div>
          <div class="row">

            {images?.map(image =>
              <div class="col-md-6 col-lg-4">
                <div class="card border-0 transform-on-hover">
                  <Image src={"http://localhost:5000/api/AdventureImage/adventureImages/" + image.imageUrl} thumbnail onClick={showModal} id={image.id} />
                  <div class="card-body">
                    <h6><a href="#">{image.location}</a></h6>
                    <p class="text-muted card-text">{image.description}</p>
                  </div>
                </div>
              </div>)
            }
          </div>




        </div>
      </section>


      <Modal bodyStyle={sizeModal}
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="1050px"

      >


        <div class="container">
          <div class="heading">
            <h2>{currentImage.description}</h2>
          </div>
          <div class="row">
            <div class="col-md-8 col-lg-8"  >
              <div class="card border-0 transform-on-hover">
                <Image src={"http://localhost:5000/api/AdventureImage/adventureImages/" + currentImage.imageUrl} thumbnail onClick={showModal} id={currentImage.id} style={sizeImage} />
                <div class="card-body">
                  <h6><a href="#">{currentImage.location}</a></h6>
                  <p class="text-muted card-text">{currentImage.description}</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4"  >
              <h3>Comments</h3>

              <div class="col-md-12 col-lg-12"  >
                <ul><li>
                  asd
                  </li>
                  <li>
                    asd
                  </li>
                  <li>
                    asd
                  </li>
                </ul>
              </div>
              <div class="col-md-12 col-lg-12"  >

                <textarea>sasdsad</textarea>
                <br />
                <button className="btn-primary" >asds</button>
              </div>

            </div>
          </div>
        </div>
      </Modal>


      <Link to={`/newAdventureForm`} > <h3>Share Your Adventure</h3> </Link>
      <Link to={`/CampaignForm`} > <h3>Add Campaign</h3> </Link>
    </React.Fragment >
  );


};

export default AdventuresControl;