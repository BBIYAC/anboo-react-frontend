import React from 'react';

const ActImage = ({url}) => {
  return(
    <React.Fragment>
    <img 
    src={url} 
    className="img-actImage"
    alt='활동 이미지'
     /> 
    </React.Fragment>
  );
};

export default ActImage;