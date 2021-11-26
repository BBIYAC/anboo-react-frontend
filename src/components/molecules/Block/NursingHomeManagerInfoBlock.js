import React from 'react';
import ImageSmall from '../../atoms/Input/ImageSmall';
import NursingHomeManagerInfo from '../../atoms/Label/NursingHomeManagerInfo';

const NursingHomeManagerInfoBlock = ({
  memberName,
  membersTel,
  membersImage,
  position}) => {
  return(
    <React.Fragment>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ImageSmall url={membersImage? membersImage : ''}/>
          <NursingHomeManagerInfo 
          memberName={memberName}
          membersTel={membersTel}
          position={position}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeManagerInfoBlock;