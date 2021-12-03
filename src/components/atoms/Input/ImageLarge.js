import React from 'react';
import ImageZoomIn from '../../organisms/Modal/ImageZoomIn';

const ImageLarge = ({ url, border, borderColor }) => {
  // 이미지 클릭
  const [isClicked, setIsClicked] = useState(false);

  // Default Image
  const handleImgError = (e) => {
      e.target.src = require("./logo.png").default;
  }

  return(
    <>
      <img className='imgLarge' src={url} onError={handleImgError} style={{border, borderColor}}></img>
      <ImageZoomIn isClicked={isClicked} url={url} setIsClicked={setIsClicked} />
    </>
  );
};

export default ImageLarge;