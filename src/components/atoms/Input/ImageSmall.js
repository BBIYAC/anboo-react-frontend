import React, {useState, useEffect} from 'react';
import ImageZoomIn from '../../organisms/Modal/ImageZoomIn';

const ImageSmall = ({url}) => {
  // 이미지 클릭
  const [isClicked, setIsClicked] = useState(false);

  // Default Image
  const handleImgError = (e) => {
    e.target.src = require("./picture.png").default;
  }
  const [imageURL, setImageURL] = useState('');
  useEffect(()=>{
    setImageURL(url);
  },[])

   // Image Zoom in
   const onClick = (e) => {
    setIsClicked(true);
  }
 
  return(
    <React.Fragment>
      <img className="imgSmall" url="" src={imageURL} onError={handleImgError} onClick={onClick}></img>
      <ImageZoomIn isClicked={isClicked} url={url} setIsClicked={setIsClicked} />
    </React.Fragment>
  );
};

export default ImageSmall;