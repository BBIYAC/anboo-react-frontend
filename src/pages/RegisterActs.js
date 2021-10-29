import React from 'react';
import NursingHomeActBlock from '../components/molecules/Block/NursingHomeActBlock';
import BelowBarBlock from '../components/molecules/Block/BelowBarBlock';
import { BiLogOut } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import '../components/atoms/Label/Label.css';

const  RegisterActs= () => {
  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack opacity="0" size="20"/>
        요양원 활동 목록
        <BiLogOut size="20"/>
      </div>
      <ul>
        <li><NursingHomeActBlock /></li>
        <li><NursingHomeActBlock /></li>
        <li><NursingHomeActBlock /></li>
      </ul>
      <BelowBarBlock isHome/>
    </React.Fragment>
  );
};

export default RegisterActs;