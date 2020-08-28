// import React, { useState } from 'react';
// import { Modal, Button } from 'antd';
// import { getProductNameApi, postTagProduct } from './../../actions/AdventureImage';

// const NewProductTagModal = (props) => {
//   const { imageId, x, y, visibility, saveCallback } = props;
//   const [campaignProductList, setCampaignProductList] = useState([])
//   const [visible, setVisible] = useState(true);
//   // const [brand, setBrand] = useState("");
//   // const [category, setCategory] = useState("");


//   const handleOk = e => {
//     console.log(e);
//     setVisible(false);
//     props.setModalVisible(false);
//     const formInput = document.getElementById("formModal");
//     const campaignID = formInput.productName.value;
//     console.log(" cam Id " + campaignID);
//     postTagProduct(callBackSaveTagData, x, y, imageId, campaignID);
//   };
//   const callBackSaveTagData = (data) => {
//     console.log(" callBackSaveTagData ")
//     saveCallback();
//   };

//   const getProductName = () => {
//     const formInput = document.getElementById("formModal");
//     const brand = formInput.brand.value;
//     const category = formInput.category.value;
//     console.log(brand);

//     getProductNameApi(callbackProductData, brand, category);
//   };

//   const callbackProductData = (data) => {
//     console.log(" productData ");
//     setCampaignProductList(data);
//   };

//   const handleCancel = e => {
//     console.log(e);
//     setVisible(false);
//     props.setModalVisible(false);
//   };
//   const sizeModal = {
//     height: '150px',

//   }

//   const tagStyle = {
//     left: (props.x).toString() + 'px',
//     top: (props.y).toString() + 'px',
//     visibility: visibility
//   }


//   return (
//     <>
//       <div id={"tagged"} className="tag" style={tagStyle} >
//         <span id="span-id"></span>
//         <br /><br />
//       </div>
//       <Modal bodyStyle={sizeModal}
//         title="Tag your product"
//         visible={visible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         width="400px"
//         okText="Save"
//         cancelText="Cancle"

//       >
//         <form id="formModal" >
//           <div>

//             <select id="brand" name="Brand" className="browser-default custom-select">
//               <option value="" disabled selected hidden>Brand</option>
//               <option value="Reebok">Reebok</option>
//               <option value="Adidas">Adidas</option>
//               <option value="Rei">REI</option>
//               <option value="Nike">Nike</option>
//             </select><br />

//             <select id="category" name="Category" className="browser-default custom-select">
//               <option value="" disabled selected hidden>Category</option>
//               <option value="Sking">Sking</option>
//               <option value="Biking">Biking</option>
//               <option value="Swiming">Swiming</option>
//               <option value="Camping">Camping</option>
//               <option value="Hiking">Hiking</option>
//             </select><br />

//             <select id="productName" name="ProductName" className="browser-default custom-select" onClick={getProductName.bind(this)}>
//               {
//                 campaignProductList?.map(campaign =>
//                   <option value={campaign.id}>{campaign.productName}</option>)
//               }
//             </select><br />

//             {/* <button type="submit" className="btn-primary">Save</button><br /> */}

//           </div >
//         </form >

//       </Modal >
//     </>

//   );

// };
// export default NewProductTagModal;