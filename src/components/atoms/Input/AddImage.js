import React, { useRef } from 'react';
import ImageLarge from './ImageLarge';


const AddImage = ({file, setFile, url, border, borderColor}) => {
  const fileInput = useRef(null)
  const onChange = async e => {
      if(e.target.files && e.target.files.length > 0){
          setFile(e.targe.files[0])
      }
  }
  // Default Image
  const handleImgError = (e) => {
    e.target.src = 'https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user2-add-icon.png';
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