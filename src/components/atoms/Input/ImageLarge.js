import React from 'react';

const ImageLarge = ({ url }) => {
  // Default Image
  const handleImgError = (e) => {
      e.target.src = 'https://jc.edu.pk/wp-content/uploads/2019/11/user.jpg';
  }
  return(
    <>
      <img className='imgLarge' src={url} onError={handleImgError} ></img>
    </>
  );
};

export default ImageLarge;