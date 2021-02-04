import React from 'react';
import { postClickCommision } from './../actions/AdventureImage';


const ProductTag = (props) => {
  const { productUrl, campaignId, adventureImageId } = props;
  const loginStatus = JSON.parse(window.localStorage.getItem('user'));

  const tagStyle = {
    left: (props.x - 13).toString() + 'px',
    top: (props.y - 13).toString() + 'px',
    visibility: "visible"
  }
  const productLinkCss = {
    color: 'white'
  };

  const callbackClickCommision = () => {
    console.log("callback ClickCommision");
  };

  const getCommision = (event) => {
    event.preventDefault();
    console.log(" get commission");
    postClickCommision(callbackClickCommision, campaignId, adventureImageId, loginStatus.token);
    window.open(productUrl, "_blank");
  };
  const cursorStyle = {
    cursor: 'pointer',
    color: 'white'
  }

  return (
    <>

      <div id={"tagged" + props.id} className="tag" style={tagStyle} >
        {/* <span id="span-id"><a href={productUrl} target="_blank" style={productLinkCss}>{props.productName}</a></span> */}
        <span ><a href="#" style={cursorStyle} onClick={getCommision.bind(this)} data-placement="top" title={props.productName}>{props.category}</a></span>
      </div>
    </>

  );

};
export default ProductTag;