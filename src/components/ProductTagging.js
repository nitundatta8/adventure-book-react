import React from 'react';
import { useParams } from 'react-router';

const ProductTagging = () => {
  const { imgId } = useParams();
  return (
    <>
      <h4>Tag your Product </h4>
      <h4>Product Id : {imgId}</h4>
    </>
  )
};
export default ProductTagging;