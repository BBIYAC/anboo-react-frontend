import React from 'react';
import ImageSmall from '../../atoms/Input/ImageSmall';
import NursingHomeChiefInfo from '../../atoms/Label/NursingHomeChiefInfo';

const NursingHomeChiefInfoBlock = ({ chiefName, chiefImage, chiefTel, position }) => {
  return(
    <React.Fragment>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ImageSmall url={chiefImage}/>
          <NursingHomeChiefInfo  chiefName={chiefName} chiefTel={chiefTel} position={position} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfoBlock;