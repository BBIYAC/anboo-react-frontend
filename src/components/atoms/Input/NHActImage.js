import React, { useState, useRef } from 'react';


const NHActImage = ({ image, removeImage, file }) => {
  const fileInput = useRef();
  const [fileURL, setFileURL] = useState(""); 
  const onChange = (e) => {
    (e.target.files[0] !== 0)
    && setFileURL(URL.createObjectURL(e.target.files[0]));
  };
  
  // Default Image
  const handleImgError = (e) => {
    e.target.src = require("./picture.png").default;
  }

  return(
    <>
    <div style={{position:"relative"}}>
      <button 
      className="btn-actImageDelete"
      onClick={() => removeImage(image.id)}>
        삭제
      </button>
      <img
      className="img-nhAct" 
      url=""
      src={fileURL}
      onClick={() => fileInput.current.click()}
      onError={handleImgError}>
      </img>
      <input type="file" ref={fileInput} accept="image/*" onChange={onChange} style={{display:'none'}}></input>
    </div>
    </>
  );
};

export default NHActImage;