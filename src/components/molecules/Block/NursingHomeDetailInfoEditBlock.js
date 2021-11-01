import React from 'react';
import NursingHomeInfoInput from '../../atoms/Input/NursingHomeInfoInput';
import AddImage from '../../atoms/Input/AddImage';

const NursingHomeDetailInfoEditBlock = () => {
  return(
    <React.Fragment>
      <hr/>
      <div className="block-NursingHomeDetailInfo">
        <div className="NursingHomeInfo">
          <AddImage url=""/>
          <NursingHomeInfoInput />
        </div>
      </div> 
    </React.Fragment>
  );
};

export default NursingHomeDetailInfoEditBlock;