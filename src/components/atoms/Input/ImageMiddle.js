import React, {useEffect, useState} from 'react';
import ImageZoomIn from '../../organisms/Modal/ImageZoomIn';

const ImageMiddle = ({url}) => {
  // 이미지 클릭
  const [isClicked, setIsClicked] = useState(false);

  // Default Image
  const handleImgError = (e) => {
    e.target.src = require("../Input/picture.png").default;
  }
  
  // Image Zoom in
  const onClick = (e) => {
    console.log(e.target.src);
    setIsClicked(true);
  }

  return(
    <React.Fragment>
      <img className="imgMiddle" src={url} onError={handleImgError} onClick={onClick}></img>
      <ImageZoomIn isClicked={isClicked} url={url} setIsClicked={setIsClicked} />
    </React.Fragment>
  );
};

export default ImageMiddle;