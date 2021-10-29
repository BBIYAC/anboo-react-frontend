import React from 'react';
import NursingHomeRegisterWarning from '../../atoms/Label/NursingHomeRegisterWarning';
import { RiErrorWarningLine } from 'react-icons/ri';

const NursingHomeManagerInfoBlock = () => {
  return(
    <React.Fragment>
      <RiErrorWarningLine />
      <NursingHomeRegisterWarning />
    </React.Fragment>
  );
};

export default NursingHomeManagerInfoBlock;