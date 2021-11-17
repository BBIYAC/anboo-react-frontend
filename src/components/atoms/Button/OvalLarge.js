import React from 'react';

const OvalLarge = ({btnText, onClick}) =>{
  return(
    <React.Fragment>
      <button 
      className="btn-ovalLarge" onClick={onClick}>
        {btnText}
      </button>
    </React.Fragment>
  );
};

export default OvalLarge;