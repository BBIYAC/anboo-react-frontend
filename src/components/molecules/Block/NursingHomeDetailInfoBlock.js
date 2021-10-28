import React from 'react';
import NursingHomeInfo from '../../atoms/Label/NursingHomeInfo';
import ImageLarge from '../../atoms/Input/ImageLarge';
import { AiFillStar } from 'react-icons/ai';

const NursingHomeDetailInfoBlock = () => {
  return(
    <React.Fragment>
      <hr/>
      <div className="block-NursingHomeDetailInfo">
        <div className="NursingHomeInfo">
          <ImageLarge />
          <NursingHomeInfo />
        </div>
        <AiFillStar className="aifillstar"/>
      </div>
       
    </React.Fragment>
  );
};

export default NursingHomeDetailInfoBlock;