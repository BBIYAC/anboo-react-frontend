import React from 'react';
import ImageSmall from '../../atoms/Input/ImageSmall';
import NursingHomeChiefInfo from '../../atoms/Label/NursingHomeChiefInfo';

const NursingHomeChiefInfoBlock = ({ chiefName, chiefImage, chiefTel }) => {
  return(
    <React.Fragment>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ImageSmall url={chiefImage}/>
          <NursingHomeChiefInfo  chiefName={chiefName} chiefTel={chiefTel}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfoBlock;