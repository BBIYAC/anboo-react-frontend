import React, {useEffect, useState} from 'react';

const ActImage = ({url}) => {
  return(
    <React.Fragment>
    <img 
    src={url} 
    className="img-actImage"
     /> 
    </React.Fragment>
  );
};

export default ActImage;