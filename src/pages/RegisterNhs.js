import React from 'react';
import SearchBlock from '../components/molecules/Block/SearchBlock';
import NursingHomeInfoList from '../components/molecules/List/NursingHomeInfoList';
import Floating from '../components/atoms/Button/Floating';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import '../components/atoms/Button/Button.css';
import '../components/molecules/Block/Block.css';
import '../components/atoms/Label/Label.css';

const  RegisterNhs= () => {
  return (
    <React.Fragment>
      <div className="header-contain">
        <div className="header">
          <IoIosArrowBack size="20"/>
          요양원 리스트
          <BiLogOut size="20"/>
        </div>
        <SearchBlock />
      </div>
      <NursingHomeInfoList />
      <Floating />
    </React.Fragment>
  );
};

export default RegisterNhs;