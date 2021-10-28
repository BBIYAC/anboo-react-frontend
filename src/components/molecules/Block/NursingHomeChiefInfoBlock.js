import React from 'react';
import ImageSmall from '../../atoms/Input/ImageSmall';
import NursingHomeChiefInfo from '../../atoms/Label/NursingHomeChiefInfo';

const NursingHomeChiefInfoBlock = () => {
  return(
    <React.Fragment>
      <hr></hr>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ImageSmall />
          <NursingHomeChiefInfo />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfoBlock;