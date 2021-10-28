import React from 'react';

const RectangleLarge = ({btnText, background, borderLeftWidth , borderLeftStyle}) =>{
  return(
    <React.Fragment>
      <button 
      className="btn-rectangleLarge"
      style={{background,borderLeftWidth , borderLeftStyle}}>
        {btnText}
      </button>
    </React.Fragment>
  );
};

export default RectangleLarge;