import React from 'react';

const ImageSmall = ({url}) => {
  // Default Image
  const handleImgError = (e) => {
    e.target.src = require("./picture.png").default;
  }
  return(
    <React.Fragment>
      <img 
      className="imgSmall" 
      url="" 
      src={url}
      alt='이미지'
      onError={handleImgError}>
      </img>
    </React.Fragment>
  );
};

export default ImageSmall;