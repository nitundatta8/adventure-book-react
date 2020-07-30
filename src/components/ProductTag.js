import React from 'react';


const ProductTag = (props) => {
  const tagStyle = {
    left: (props.x - 13).toString() + 'px',
    top: (props.y - 13).toString() + 'px',
    visibility: "visible"
  }

  return (
    <>

      <div id={"tagged" + props.id} className="tag" style={tagStyle} >
        <span id="span-id">{props.productName}</span>
      </div>
    </>

  );

};
export default ProductTag;