import React, {useState, useRef, useEffect } from 'react';


const AddImage = ({url, border, borderColor}) => {
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

  useEffect(()=>{
    setFileURL(url);
  }, [url])
  
  return(
    <>
      <img
      className="img-rgProfile" 
      url=""
      src={fileURL}
      onClick={() => fileInput.current.click()}
      onError={handleImgError} 
      style={{border, borderColor}}
      alt='프로필 이미지'></img>
      <input type="file" accept='image/*' ref={fileInput} onChange={onChange} style={{display:'none'}}></input>
    </>
  );
};

export default AddImage;
