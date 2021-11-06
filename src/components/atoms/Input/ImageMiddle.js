import React from 'react';

const ImageMiddle = ({url}) => {
  // Default Image
  const handleImgError = (e) => {
    e.target.src = require("./picture.png").default;
  }
  return(
    <React.Fragment>
      <img className="imgMiddle" src={url} onError={handleImgError}></img>
    </React.Fragment>
  );
};

export default ImageMiddle;