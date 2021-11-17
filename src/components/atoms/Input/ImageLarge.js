import React from 'react';

const ImageLarge = ({ url, border, borderColor }) => {
  // Default Image
  const handleImgError = (e) => {
      e.target.src = require("./picture.png").default;
  }
  return(
    <>
      <img 
      className='imgLarge' 
      src={url} 
      onError={handleImgError} 
      style={{border, borderColor}}></img>
    </>
  );
};

export default ImageLarge;