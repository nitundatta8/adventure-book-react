import React, { useState } from 'react';
import { getProductNameApi, postTagProduct } from './../actions/AdventureImage';



/*
 function createTagElement(id, productName) {
 <div id
            var div = document.createElement("div");
            div.setAttribute("id", "tagged" + id);
            div.setAttribute("class", "tag");
            div.innerHTML = `<span id="span-id">${productName}</span> 
         `;

            return div;
        }
*/

const NewProductTag = (props) => {
  const { imageId, x, y, visibility, saveCallback } = props;

  const [campaignProductList, setCampaignProductList] = useState([])

  const tagStyleVal = {
    left: (x - 13).toString() + 'px',
    top: (y - 13).toString() + 'px',
    visibility: visibility
  }
  console.log("tagStyleVal")
  console.log(tagStyleVal)





  const productData = (data) => {
    console.log(" product api call");
    setCampaignProductList(data);

  };

  const getProductName = (event) => {
    console.log(" get product ---");
    let brand = document.getElementById("brand").value;
    let category = document.getElementById("category").value;
    console.log(" ===  " + brand);

    getProductNameApi(productData, brand, category);
  };

  //post api for product tag
  const callBackSaveTagData = (data) => {
    console.log(" post tag data api");
    saveCallback();
  };

  const saveTag = (event) => {
    event.preventDefault();
    console.log("   test -- ")
    console.log(event.target.ProductName)
    let campaignID = event.target.ProductName.value
    postTagProduct(callBackSaveTagData, x, y, imageId, campaignID);
  };

  //post api for product tag

  return (
    <>
      <div id={"tagged" + props.id} className="tag" style={tagStyleVal} >
        <span id="span-id">{props.productName}</span>
        <br /><br />
        <form onSubmit={saveTag.bind(this)}>
          <div>

            <select id="brand" name="Brand">
              <option value="" disabled selected hidden>Brand</option>
              <option value="Reebok">Reebok</option>
              <option value="Adidas">Adidas</option>
              <option value="Rei">REI</option>
              <option value="Nike">Nike</option>
            </select><br />

            <select id="category" name="Category">
              <option value="" disabled selected hidden>Category</option>
              <option value="Sking">Sking</option>
              <option value="Sport">Sport</option>
              <option value="Biking">Biking</option>
              <option value="Swiming">Swiming</option>
            </select><br />

            <select id="productName" name="ProductName" onClick={getProductName.bind(this)}>
              {
                campaignProductList?.map(campaign =>
                  <option value={campaign.id}>{campaign.productName}</option>)
              }
            </select>
            {/* <input type="text" id="productName" placeholder="product name" onClick={getProductName.bind(this)} /> */}
            <button type="submit">Save</button>
            <input type="button" value="Cancel" onClick="hideTagElement();" />
          </div>
        </form>
      </div>


    </>

  );

};
export default NewProductTag;