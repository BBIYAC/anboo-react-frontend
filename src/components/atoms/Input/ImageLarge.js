import React from 'react';

const ImageLarge = ({ url, border, borderColor }) => {
  // Default Image
  const handleImgError = (e) => {
      e.target.src = 'https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user2-add-icon.png';
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