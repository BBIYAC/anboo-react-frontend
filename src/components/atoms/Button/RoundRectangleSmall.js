import React from 'react';

const RoundRectangleSmall = ({btnText, onClick, id}) =>{
  return(
    <React.Fragment>
      <button 
      className="btn-roundrectanglesmall"
      onClick={onClick}
      id={id}>
        {btnText}
      </button>
    </React.Fragment>
  );
};

export default RoundRectangleSmall;