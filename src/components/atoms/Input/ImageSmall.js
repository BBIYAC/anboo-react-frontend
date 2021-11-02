import React from 'react';

const ImageSmall = ({url}) => {
  return(
    <React.Fragment>
      <img className="imgSmall" src={url}></img>
    </React.Fragment>
  );
};

export default ImageSmall;