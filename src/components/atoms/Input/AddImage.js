import React, {useState, useRef } from 'react';


const AddImage = ({border, borderColor}) => {
  const fileInput = useRef();
  const [fileURL, setFileURL] = useState(""); 
  const onChange = (e) => {
      const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);  
      setFileURL(imageUrl);
  };
  
  // Default Image
  const handleImgError = (e) => {
    e.target.src = require("./picture.png").default;

  }
  return(
    <>
      <img
      className="img-rgProfile" 
      url=""
      src={fileURL}
      onClick={() => fileInput.current.click()}
      onError={handleImgError} 
      style={{border, borderColor}}></img>
      <input type="file" accept='image/*' ref={fileInput} onChange={onChange} style={{display:'none'}}></input>
    </>
  );
};

export default AddImage;
