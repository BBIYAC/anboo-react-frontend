import React from 'react';
import ImageSmall from '../../atoms/Input/ImageSmall';
import NursingHomeManagerInfo from '../../atoms/Label/NursingHomeManagerInfo';

const NursingHomeManagerInfoBlock = () => {
  return(
    <React.Fragment>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ImageSmall />
          <NursingHomeManagerInfo />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeManagerInfoBlock;