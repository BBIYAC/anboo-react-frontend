import React from 'react';
import ImageSmall from '../../atoms/Input/ImageSmall';
import NursingHomeCaregiverInfo from '../../atoms/Label/NursingHomeCargiverInfo';

const NursingHomeCaregiverInfoBlock = () => {
  return(
    <React.Fragment>
      <hr></hr>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ImageSmall />
          <NursingHomeCaregiverInfo />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeCaregiverInfoBlock;