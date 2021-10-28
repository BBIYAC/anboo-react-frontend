import React, { useState } from 'react';
import NursingHomeInfoBlock from '../Block/NursingHomeInfoBlock';

const NursingHomeInfoList = ({ opacity }) => {
  return(
    <React.Fragment>
      <ul>
        <li><NursingHomeInfoBlock /></li>
        <li><NursingHomeInfoBlock /></li>
        <li><NursingHomeInfoBlock /></li>
        <li><NursingHomeInfoBlock /></li>
      </ul>
    </React.Fragment>
  );
};

export default NursingHomeInfoList;