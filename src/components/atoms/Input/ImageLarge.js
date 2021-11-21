import React from 'react';
import ImageZoomIn from '../../organisms/Modal/ImageZoomIn';

const ImageLarge = ({ url, border, borderColor }) => {
  // 이미지 클릭
  const [isClicked, setIsClicked] = useState(false);

  // Default Image
  const handleImgError = (e) => {
      e.target.src = require("./picture.png").default;
  }

  // Image Zoom in
  const onClick = (e) => {
    setIsClicked(true);
  }
  return(
    <>
      <img 
      className='imgLarge' 
      src={url} 
      onError={handleImgError} 
      style={{border, borderColor}}></img>
    </>
  );
};

export default ImageLarge;