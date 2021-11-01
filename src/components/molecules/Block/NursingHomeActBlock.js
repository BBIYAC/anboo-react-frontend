import React from 'react';
import ActImage from '../../atoms/Input/ActImage';
import NursingHomeActsText from '../../atoms/Label/NursingHomeActsText';

const NursingHomeActBlock = () => {
  return(
    <React.Fragment>
      <hr></hr>
      <div className="block-NursingHomeAct">
        <ActImage />
        <NursingHomeActsText />
      </div>
    </React.Fragment>
  );
};

export default NursingHomeActBlock;