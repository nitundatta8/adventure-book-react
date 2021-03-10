import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getImageById, loadImgTagById } from './../actions/AdventureImage';
import { Image } from 'react-bootstrap';
import ProductTag from './ProductTag';
import NewProductTag from './NewProductTag';
import { Link } from 'react-router-dom';


const ProductTagging = () => {
  const { imgId } = useParams();
  const loginStatus = JSON.parse(window.localStorage.getItem('user'));
  const [imgData, setImgData] = useState({})
  const [tagProducts, setTagProducts] = useState([]);



  const [newProdTagVisibility, setNewProdTagVisibility] = useState("");
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);


  const callBackImgTagById = (data) => {
    console.log(" callBack Img Tag By Id ")
    setTagProducts(data);
  }

  const newTagCreated = () => {
    console.log("call back save");
    setNewProdTagVisibility("");
    loadImgTagById(callBackImgTagById, imgId, loginStatus.token);
    //----callback
  }

  //left: 314px; top: 38px; visibility: visibl
  //---- array -----//
  // let tagProducts = [{
  //   x: 131,
  //   y: 284,
  //   productName: 'pants',
  //   id: 1
  // }];

  //---- array -----//

  const callbackImageData = (data) => {
    console.log("Api image data");
    console.log(data);
    setImgData(data);
  }

  const title = "image load";
  useEffect(() => {
    console.log(" --  image load --");
    getImageById(callbackImageData, imgId, loginStatus.token);
    loadImgTagById(callBackImgTagById, imgId, loginStatus.token);
  }, [title]);

  const sizeImage = {
    height: '450px',
    width: '600px'
  }
  const containerStyle = {
    position: "relative"
  }

  const showNewProductTag = (event) => {
    let image = document.getElementById("pointer_div");
    console.log("event.offsetX" + event.pageX);
    console.log("event.offsetY" + event.pageY);

    let pos_x = event.offsetX ? (event.offsetX) : event.pageX - image.offsetLeft - 300;
    let pos_y = event.offsetY ? (event.offsetY) : event.pageY - image.offsetTop - 214;


    setNewProdTagVisibility("visible");
    setPosX(pos_x);
    setPosY(pos_y);


  }

  return (
    <>
      <h4>Tag your Product </h4>
      <h4>Product Id : {imgId}</h4>
      <section class="gallery-block cards-gallery">
        <div class="container">
          <div class="col-md-8 col-lg-6" style={containerStyle} id="container">


            <NewProductTag saveCallback={newTagCreated} visibility={newProdTagVisibility} imageId={imgId} x={posX} y={posY} productName="product" />
            {
              tagProducts.map(tag =>
                <ProductTag
                  x={tag.xPos}
                  y={tag.yPos}
                  productName={tag.campaign.productName}
                  productUrl={tag.campaign.productUrl}
                  id={tag.id} />
              )
            }
            <Image src={`http://${process.env.REACT_APP_HOST_NAME}/adventureBook/api/adventureImage/downloadFile/` + imgData.imgUrl} thumbnail style={sizeImage} id="pointer_div" onClick={showNewProductTag} />
            <div class="card-body">
              <h6><a href="#">{imgData.location}</a></h6>
              <p class="text-muted card-text">{imgData.describtion}</p>
            </div>
          </div>

        </div>
      </section>
      <Link to={`/`} > <h3>Back</h3> </Link>
    </>
  )
};
export default ProductTagging;