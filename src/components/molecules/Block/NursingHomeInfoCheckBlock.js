import React from 'react';
import ImageMiddle from '../../atoms/Input/ImageMiddle';
import NursingHomeInfo from '../../atoms/Label/NursingHomeInfo';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {AiFillCheckCircle} from 'react-icons/ai';

const NursingHomeInfoCheckBlock = ({isSelected}) => {
  return(
    <React.Fragment>
      <hr></hr>
      <div className="block-NursingHomeInfo">
        <div className="NursingHomeInfo">
          <ImageMiddle />
          <NursingHomeInfo />
        </div>
        {isSelected?<AiFillCheckCircle className='NursingHomeCheck'/>:<AiOutlineCheckCircle className='NursingHomeCheck' />}
      </div>
    </React.Fragment>
  );
};

export default NursingHomeInfoCheckBlock;