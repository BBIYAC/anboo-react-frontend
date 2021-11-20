import React, {useState, useEffect} from 'react';

const ImageSmall = ({url}) => {
  // Default Image
  const handleImgError = (e) => {
    e.target.src = require("./picture.png").default;
  }
  const [imageURL, setImageURL] = useState('');
  useEffect(()=>{
    setImageURL(url);
  },[])
 
  return(
    <React.Fragment>
      <img 
      className="imgSmall" 
      url="" 
      src={imageURL}
      onError={handleImgError}>
      </img>
    </React.Fragment>
  );
};

export default ImageSmall;