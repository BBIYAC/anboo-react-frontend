import React, {useState, useRef, useEffect } from 'react';


const AddImage = ({url, border, borderColor, setIsImage, pictures, setPictures}) => {
  const fileInput = useRef();
  const [fileURL, setFileURL] = useState(""); 
  const onChange = (e) => {
      const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);  
      setFileURL(imageUrl);
      setIsImage && setIsImage(imageFile);
      setPictures && setPictures(imageFile);
  };
  
  // Default Image
  const handleImgError = (e) => {
    e.target.src = require("./picture.png").default;
    // setIsImage && setIsImage(); // File 객체로 디폴트 이미지 추가
  }

  useEffect(()=>{
    setFileURL(
      typeof url === 'object'
      ? URL.createObjectURL(url)
      : url);
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
