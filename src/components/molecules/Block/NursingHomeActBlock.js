import React from 'react';
import ActImage from '../../atoms/Input/ActImage';
import NursingHomeActsText from '../../atoms/Label/NursingHomeActsText';

const NursingHomeActBlock = ({contents}) => {
  return(
    <React.Fragment>
      <div className="block-NursingHomeAct">
        <ActImage url={contents.url} />
        <NursingHomeActsText contents={contents} />
      </div>
      <hr></hr>
    </React.Fragment>
  );
};

export default NursingHomeActBlock;