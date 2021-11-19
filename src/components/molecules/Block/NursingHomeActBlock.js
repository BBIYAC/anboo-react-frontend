import React from 'react';
import ActImage from '../../atoms/Input/ActImage';
import NursingHomeActsText from '../../atoms/Label/NursingHomeActsText';

const NursingHomeActBlock = ({contents}) => {
  return(
    <React.Fragment>
      <div className="block-NursingHomeAct">
        {contents.post_picture && <ActImage url={contents.post_picture} />}
        <NursingHomeActsText contents={contents} />
      </div>
    </React.Fragment>
  );
};

export default NursingHomeActBlock;