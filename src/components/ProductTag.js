import React from 'react';


const ProductTag = (props) => {
  const { productUrl, category } = props;

  const tagStyle = {
    left: (props.x - 13).toString() + 'px',
    top: (props.y - 13).toString() + 'px',
    visibility: "visible"
  }
  const productLinkCss = {
    color: 'white'
  };

  const getCommision = (event) => {
    event.preventDefault();
    console.log(" get commition");
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
        <span ><a href="#" style={cursorStyle} onClick={getCommision} data-placement="top" title={props.productName}>{props.category}</a></span>
      </div>
    </>

  );

};
export default ProductTag;