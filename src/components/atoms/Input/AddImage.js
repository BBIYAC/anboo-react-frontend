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
    const dataURLtoFile = (dataurl, fileName) => {
 
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), 
          n = bstr.length, 
          u8arr = new Uint8Array(n);
          
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      
      return new File([u8arr], fileName, {type:mime});
    }
    
    //Usage example:
    var file = dataURLtoFile(e.target.src,'picture.png');
    setIsImage && setIsImage(file);
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
