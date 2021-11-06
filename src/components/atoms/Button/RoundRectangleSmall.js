import React from 'react';

const RoundRectangleSmall = ({btnText}) =>{
  return(
    <React.Fragment>
      <button 
      className="btn-roundrectanglesmall">
        {btnText}
      </button>
    </React.Fragment>
  );
};

export default RoundRectangleSmall;