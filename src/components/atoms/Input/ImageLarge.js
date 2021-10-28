import React from 'react';

const ImageLarge = ({ url }) => {
  // Default Image
  const handleImgError = (e) => {
      e.target.src = '';
  }
  return(
    <>
      <img className='imgLarge' src={url} onError={handleImgError} ></img>
    </>
  );
};

export default ImageLarge;