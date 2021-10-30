import React from 'react';

const OvalSmall = ({btnText}) =>{
  return(
    <React.Fragment>
      <button 
      className="btn-ovalSmall">
        {btnText}
      </button>
    </React.Fragment>
  );
};

export default OvalSmall;