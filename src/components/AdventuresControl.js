import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { getAdventureData, getCommentById, loadImgTagById, postComment } from '../actions/AdventureImage';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'antd';
import ProductTag from './ProductTag';
import * as c from '../actions/ActionsType';
//import { useParams, useLocation } from 'react-router';




const AdventuresControl = () => {

  const loginStatus = JSON.parse(window.localStorage.getItem('user'));
  const dispatch = useDispatch();
  // const token = useSelector(state => state.user.userInfo.token);
  const [visible, setVisible] = useState(false)
  // const loginStatus = useSelector(state => state.user.login);
  const authenticationFail = useSelector(state => state.user.authenticationFail);
  const [tagProducts, setTagProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState({});
  const [commentList, setCommentList] = useState([]);
  const adventureList = useSelector(state => state.adventure.advrntureInfo)


  const callbackAdventureImage = (data) => {
    console.log(" data load ")

    const action = {
      type: c.ADD_ADVENTURE,
      data
    }
    dispatch(action)

  }
  const title = "image load";
  const places = " ";
  useEffect(() => {
    // getAdventureData(callbackAdventureImage, places);
    getAdventureData(callbackAdventureImage);

  }, [title]);

  //post comment
  const commentsData = (data) => {
    console.log(" post comment ok!!!");
    getCommentById(commentData, currentImage.id, loginStatus.token);
  }

  const doComment = (event) => {
    event.preventDefault();

    postComment(commentsData, event.target.comment.value, currentImage.id, loginStatus.token);
    event.target.comment.value = '';

  }

  //post comment -------

  ///*************************** */

  let state = { visible: false };
  const commentData = (data) => {
    console.log(" comment data");
    if (loginStatus) {
      setCommentList(data);
    }

  }
  const callbackImgTagById = (data) => {
    console.log(" callBack Img Tag By Id ")
    setTagProducts(data);
  }

  const showModal = e => {
    if (loginStatus) {
      setVisible(true);
      adventureList.forEach(image => {
        if (image.id == e.target.id) {
          console.log(" -- id --" + image.id)
          getCommentById(commentData, image.id, loginStatus.token);
          setCurrentImage(image);
          loadImgTagById(callbackImgTagById, image.id);
        }
      })
    }

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
            {adventureList?.map(image =>
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
        width="1050px">

        <div class="container">
          <div class="heading">
            <h2>{currentImage.description}</h2>
          </div>
          <div class="row">
            <div class="col-md-8 col-lg-8"  >
              <div class="card border-0 transform-on-hover" id="container">
                {/* Adding tag to image */}

                {
                  tagProducts.map(tag =>
                    <ProductTag
                      x={tag.xPos}
                      y={tag.yPos}
                      productName={tag.campaign.productName}
                      productUrl={tag.campaign.productUrl}
                      category={tag.campaign.category}
                      id={tag.id}
                      campaignId={tag.campaignId}
                      adventureImageId={tag.adventureImageId} />
                  )
                }
                {/*end */}


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

                <ul>{commentList?.map(comment => <li>{comment?.comments} ( {comment?.user?.firstName})</li>)}
                </ul>
              </div>
              <div class="col-md-12 col-lg-12"  >

                <h5>Share your Comments</h5>
                <form onSubmit={doComment.bind(this)}>
                  <textarea
                    name='comment'
                    placeholder='Enter a comment' /><br />
                  <button type='submit'>Comment</button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </Modal>


      <Link to={`/newAdventureForm`} > <h3>Share Your Adventure</h3> </Link>
      <Link to={`/CampaignForm`} > <h3>Add Campaign</h3> </Link>
      <Link to={`/report`} > <h3>Campaign Report</h3> </Link>
      <Link to={`/commissionreport`} > <h3>Commission Report</h3> </Link>
    </React.Fragment >
  );


};

export default AdventuresControl;