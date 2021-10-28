import React from 'react';
import ImageMiddle from '../../atoms/Input/ImageMiddle';
import NursingHomeInfo from '../../atoms/Label/NursingHomeInfo';

const NursingHomeInfoBlock = () => {
  return(
    <React.Fragment>
      <hr></hr>
      <div className="block-NursingHomeInfo">
        <div className="NursingHomeInfo">
          <ImageMiddle />
          <NursingHomeInfo />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeInfoBlock;