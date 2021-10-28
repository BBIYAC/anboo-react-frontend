import React from 'react';
import ImageMiddle from '../../atoms/Input/ImageMiddle';
import NursingHomeInfo from '../../atoms/Label/NursingHomeInfo';
import { AiFillStar } from 'react-icons/ai';

const NursingHomeInfoBlock = () => {
  return(
    <React.Fragment>
      <hr></hr>
      <div className="block-NursingHomeInfo">
        <div className="NursingHomeInfo">
          <ImageMiddle />
          <NursingHomeInfo />
        </div>
        <AiFillStar className="aifillstar"/>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeInfoBlock;