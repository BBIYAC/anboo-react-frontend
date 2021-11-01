import React, { useRef } from 'react';


const ManagerImage = ({file, setFile, url, border, borderColor}) => {
  const fileInput = useRef(null)
  const onChange = async e => {
      if(e.target.files && e.target.files.length > 0){
          setFile(e.targe.files[0])
      }
  }
  // Default Image
  const handleImgError = (e) => {
    e.target.src = require("./picture.png").default;
  }

  return(
    <>
      <img
      className="img-managerProfile" 
      url=""
      src={url}
      onClick={() => fileInput.current.click()}
      onError={handleImgError} 
      style={{border, borderColor}}></img>
      <input type="file" ref={fileInput} onChange={onChange} style={{display:'none'}}></input>
    </>
  );
};

export default ManagerImage;