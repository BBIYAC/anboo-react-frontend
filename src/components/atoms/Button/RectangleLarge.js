import React from 'react';

const RectangleLarge = ({btnText, background, borderLeftWidth , borderLeftStyle, onClick}) =>{
  return(
    <React.Fragment>
      <button 
      className="btn-rectangleLarge"
      style={{background, borderLeftWidth , borderLeftStyle}}
      onClick={onClick}>
        {btnText}
      </button>
    </React.Fragment>
  );
};

export default RectangleLarge;