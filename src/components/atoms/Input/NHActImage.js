import React, { useState, useRef } from 'react';


const NHActImage = ({ id, removeImage, file }) => {
  // Default Image
  const handleImgError = (e) => {
    e.target.src = require("./picture.png").default;
  }

  return(
    <React.Fragment>
    <div style={{position:"relative"}} >
      <button className="btn-actImageDelete" onClick={() => removeImage(id)}>X</button>
      <img
        className="img-nhAct" 
        src={URL.createObjectURL(file)}
        onError={handleImgError}>
      </img>
    </div>
    </React.Fragment>
  );
};

export default NHActImage;