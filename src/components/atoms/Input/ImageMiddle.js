import React from 'react';

const ImageMiddle = ({url}) => {
  // Default Image
  const handleImgError = (e) => {
    e.target.src = 'https://jc.edu.pk/wp-content/uploads/2019/11/user.jpg';
  }
  return(
    <React.Fragment>
      <img className="imgMiddle" src={url} onError={handleImgError}></img>
    </React.Fragment>
  );
};

export default ImageMiddle;