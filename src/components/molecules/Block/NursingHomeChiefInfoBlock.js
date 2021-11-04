import React from 'react';
import ImageSmall from '../../atoms/Input/ImageSmall';
import NursingHomeChiefInfo from '../../atoms/Label/NursingHomeChiefInfo';

const NursingHomeChiefInfoBlock = () => {
  return(
    <React.Fragment>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ImageSmall url=""/>
          <NursingHomeChiefInfo />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfoBlock;