import React from 'react';
import NursingHomeInfoInput from '../../atoms/Input/NursingHomeInfoInput';
import ImageLarge from '../../atoms/Input/ImageLarge';

const NursingHomeDetailInfoEditBlock = () => {
  return(
    <React.Fragment>
      <hr/>
      <div className="block-NursingHomeDetailInfo">
        <div className="NursingHomeInfo">
          <ImageLarge />
          <NursingHomeInfoInput />
        </div>
      </div> 
    </React.Fragment>
  );
};

export default NursingHomeDetailInfoEditBlock;