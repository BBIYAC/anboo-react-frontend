import React, {useState, useRef } from 'react';


const ManagerImage = ({border, borderColor,image, setImage}) => {
  const fileInput = useRef();
  const [fileURL, setFileURL] = useState(""); 
  const onChange = (e) => {
    if(e.target.files[0] !== 0){
      setFileURL(URL.createObjectURL(e.target.files[0]));
      setImage && setImage([...image, e.target.files[0]])
    }
  };
  
  // Default Image
  const handleImgError = (e) => {
    e.target.src = require("./picture.png").default;
  }

  return(
    <>
      <img
      className="img-managerProfile" 
      url=""
      src={fileURL}
      onClick={() => fileInput.current.click()}
      onError={handleImgError} 
      style={{border, borderColor}}>
      </img>
      <input type="file" ref={fileInput} onChange={onChange} style={{display:'none'}}></input>
    </>
  );
};

export default ManagerImage;