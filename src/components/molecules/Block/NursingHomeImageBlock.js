import React from 'react';
import ImageMiddle from '../../atoms/Input/ImageMiddle';
import AddNursingHomeImage from '../../atoms/Input/AddNursingHomeImage';

const NursingHomeImageBlock = () => {
  return(
    <React.Fragment>
      <hr></hr>
      <div className="grid-container">
        <div className="grid-item"><ImageMiddle /></div>
        <div className="grid-item"><ImageMiddle /></div>
        <div className="grid-item"><ImageMiddle /></div>
        <div className="grid-item"><ImageMiddle /></div>
        <div className="grid-item"><ImageMiddle /></div>
        <div className="grid-item"><ImageMiddle /></div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeImageBlock;