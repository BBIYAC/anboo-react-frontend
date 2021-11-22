import React from 'react';
import ManagerImage from '../../atoms/Input/ManagerImage';
import NursingHomeChiefInfoInput from '../../atoms/Input/NursingHomeChiefInfoInput';

const NursingHomeChiefInfoEditBlock = ({chiefInfo}) => {
  return(
    <React.Fragment>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ManagerImage url={chiefInfo.chiefImage}/>
          <NursingHomeChiefInfoInput chiefInfo={chiefInfo} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfoEditBlock;