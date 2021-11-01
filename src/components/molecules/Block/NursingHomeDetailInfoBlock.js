import React from 'react';
import NursingHomeInfo from '../../atoms/Label/NursingHomeInfo';
import ImageLarge from '../../atoms/Input/ImageLarge';
import { AiFillStar } from 'react-icons/ai';

const NursingHomeDetailInfoBlock = ({ width, height }) => {
  return(
    <React.Fragment>
      <hr/>
      <div className="block-NursingHomeDetailInfo">
        <div className="NursingHomeInfo">
          <ImageLarge />
          <NursingHomeInfo />
        </div>
        <AiFillStar 
        className="aifillstar"
        style={{width, height}}/>
      </div> 
    </React.Fragment>
  );
};

export default NursingHomeDetailInfoBlock;