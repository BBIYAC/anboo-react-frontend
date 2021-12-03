import React from 'react';


// const NHActImage = ({ id, removeImage, removeEditImage, file }) => {
const NHActImage = ({ id, removeImage, file }) => {
  // Default Image
  const handleImgError = (e) => {
    e.target.src = require("./logo.png").default;
  }


  const handleRemoveCilck = () => {
    removeImage(id)
  }

  return(
    <React.Fragment>
    <div style={{position:"relative"}} >
      <button 
        className="btn-actImageDelete" 
        onClick={handleRemoveCilck}>X</button>
      <img
        className="img-nhAct" 
        src={typeof file === 'object'
        ? URL.createObjectURL(file)
        : file }
        onError={handleImgError}>
      </img>
    </div>
    </React.Fragment>
  );
};

export default NHActImage;