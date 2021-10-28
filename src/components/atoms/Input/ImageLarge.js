import React from 'react';

const ImageLarge = ({ url }) => {
  // Default Image
  const handleImgError = (e) => {
      e.target.src = 'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png';
  }
  return(
    <>
      <img className='imgLarge' src={url} onError={handleImgError} ></img>
    </>
  );
};

export default ImageLarge;