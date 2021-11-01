<<<<<<< HEAD
import React, {useState, useRef } from 'react';
import ImageLarge from './ImageLarge';
=======
import React, { useRef } from 'react';
>>>>>>> ac64b7f681c46e975219de6ec3f890fd630b3c81


const AddImage = ({ url, border, borderColor}) => {
  const fileInput = useRef();
  const [files, setFiles] = useState();
  const onChange = (e) => {
      console.log(e.target.files[0].name, e.target.files[0].size); // 파일 이름, 바이트        
      setFiles(e.target.files[0]);
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
      src={url}
      onClick={() => fileInput.current.click()}
      onError={handleImgError} 
      style={{border, borderColor}}></img>
      <input type="file" ref={fileInput} onChange={onChange} style={{display:'none'}}></input>
    </>
  );
};

export default AddImage;