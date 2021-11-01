import React from 'react';
import ImageSmall from '../../atoms/Input/ImageSmall';
import NursingHomeManagerInfoInput from '../../atoms/Input/NursingHomeManagerInfoInput';
import {IoPersonRemove} from 'react-icons/io5';
import {IoPersonAdd} from 'react-icons/io5';

const NursingHomeManagerInfoEditBlock = ({isAdd}) => {
  return(
    <React.Fragment>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ImageSmall />
          <NursingHomeManagerInfoInput />
        </div>
        {isAdd?<IoPersonAdd size="25" color="var(--color-green)"/>
        :<IoPersonRemove size="25" color="var(--color-red)"/>}
      </div>
    </React.Fragment>
  );
};

export default NursingHomeManagerInfoEditBlock;