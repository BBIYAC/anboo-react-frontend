import React from 'react';

const OvalLarge = ({btnText}) =>{
  return(
    <React.Fragment>
      <button 
      className="btn-ovalLarge">
        {btnText}
      </button>
    </React.Fragment>
  );
};

export default OvalLarge;