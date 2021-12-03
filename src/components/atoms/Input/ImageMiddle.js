import React, {useState} from 'react';
import ImageZoomIn from '../../organisms/Modal/ImageZoomIn';

const ImageMiddle = ({url}) => {
  // 이미지 클릭
  const [isClicked, setIsClicked] = useState(false);

  // Default Image
  const handleImgError = (e) => {
    e.target.src = require("../Input/logo.png").default;
  }
  
  // Image Zoom in
  const onClick = (e) => {
    setIsClicked(true);
  }

  return(
    <React.Fragment>
      <img 
      className="imgMiddle" 
      src={url===null?require("../Input/logo.png").default:url} 
      onError={handleImgError} 
      onClick={onClick}></img>
      <ImageZoomIn isClicked={isClicked} url={url} setIsClicked={setIsClicked} />
    </React.Fragment>
  );
};

export default ImageMiddle;