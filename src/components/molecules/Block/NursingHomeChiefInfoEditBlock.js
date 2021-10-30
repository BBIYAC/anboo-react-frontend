import React from 'react';
import ImageSmall from '../../atoms/Input/ImageSmall';
import NursingHomeChiefInfoInput from '../../atoms/Input/NursingHomeChiefInfoInput';

const NursingHomeChiefInfoEditBlock = () => {
  return(
    <React.Fragment>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ImageSmall />
          <NursingHomeChiefInfoInput />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfoEditBlock;