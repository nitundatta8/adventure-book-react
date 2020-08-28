// import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router';
// import { Image } from 'react-bootstrap';
// import { getImageById, loadImgTagById } from '../../actions/AdventureImage';
// import ProductTaggingDiv from './ProductTaggingDiv';
// import NewProductTagModal from './NewProductTagModal';

// const ProductTag = () => {
//   const { imgId } = useParams();
//   console.log("imgId  " + imgId);
//   const [imgData, setImgData] = useState([]);
//   const [visibility, setVisibility] = useState("");
//   const [modalVisible, setModalVisible] = useState(false);
//   const [tagProducts, setTagProducts] = useState([]);
//   const [posX, setPosX] = useState(0);
//   const [posY, setPosY] = useState(0);


//   const showNewProductTag = (event) => {
//     let image = document.getElementById("pointer_div");
//     let pos_x = event.clientX - 335;
//     let pos_y = event.clientY - 10;
//     // let pos_x = event.clientX ? (event.clientX) : event.pageX - image.offsetLeft;
//     // let pos_y = event.clientY ? (event.clientY) : event.pageY - image.offsetTop;
//     // console.log("pos_x" + pos_x);
//     // console.log("pos_y" + pos_y);
//     setPosX(pos_x);
//     setPosY(pos_y);
//     setModalVisible(true);
//     setVisibility("visible");
//   };
//   const containerStyle = {
//     position: "relative"
//   };

//   const newTagCreated = () => {
//     console.log("call back save");

//     loadImgTagById(callBackImgTagById, imgId);
//     //----callback
//   };
//   const callBackImgTagById = (data) => {
//     console.log(" tag data by Id");
//     setTagProducts(data);
//   };


//   // get Image By Id ----
//   const callbackImageData = (data) => {
//     console.log(" new Img tag");
//     setImgData(data);
//     console.log(imgData)
//   }
//   const title = "image load";
//   useEffect(() => {
//     getImageById(callbackImageData, imgId);
//   }, [title]);
//   // get Image By Id ----

//   return (
//     <>
//       <section class="gallery-block cards-gallery">
//         <div class="container">
//           <div class="col-md-8 col-lg-6" style={containerStyle} id="container">
//             <Image src={"http://localhost:5000/api/AdventureImage/adventureImages/" + imgData.imageUrl} thumbnail id="pointer_div" onClick={showNewProductTag} />
//             {modalVisible ? <NewProductTagModal saveCallback={newTagCreated} visibility={visibility} setModalVisible={setModalVisible} imageId={imgId} x={posX} y={posY} productName="product" /> : ""}

//             {
//               tagProducts.map(tag =>
//                 <ProductTaggingDiv
//                   x={tag.posX}
//                   y={tag.posY}
//                   //visibility={visibility}
//                    productName={tag.campaign.productName}
//                    productUrl={tag.campaign.productUrl}
//                   id={tag.id} />
//               )
//              }
// {/*             
//             <ProductTaggingDiv
//               x={posX}
//               y={posY}
//               visibility={visibility}
//             /> */}
//             <div class="card-body">
//               <h6><a href="#">{imgData.location}</a></h6>
//               <p class="text-muted card-text">{imgData.description}</p>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default ProductTag;