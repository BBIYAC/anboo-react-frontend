import React, {useState, useRef, useEffect } from 'react';


const ManagerImage = ({url, border, borderColor, setImage, setCaregiverImage}) => {
  const fileInput = useRef();
  const [fileURL, setFileURL] = useState(""); 
  var inputFile = '';
  const onChange = (e) => {
    if(e.target.files[0] !== 0){
      inputFile = e.target.files[0]
      setFileURL(URL.createObjectURL(inputFile));
      setImage && setImage(inputFile);
      setCaregiverImage && setCaregiverImage(inputFile);
    }
  };
  
  useEffect(()=>{
    setFileURL(url);
  },[url])

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