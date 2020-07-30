import React from 'react';


const ProductTag = (props) => {
  const { productUrl } = props;

  const tagStyle = {
    left: (props.x - 13).toString() + 'px',
    top: (props.y - 13).toString() + 'px',
    visibility: "visible"
  }
  const productLinkCss = {
    color: 'white'
  };

  return (
    <>

      <div id={"tagged" + props.id} className="tag" style={tagStyle} >
        <span id="span-id"><a href={productUrl} target="_blank" style={productLinkCss}>{props.productName}</a></span>
      </div>
    </>

  );

};
export default ProductTag;