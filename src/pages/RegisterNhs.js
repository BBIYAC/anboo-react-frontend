import React from 'react';
import SearchBlock from '../components/molecules/Block/SearchBlock';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import '../components/atoms/Button/Button.css';
import '../components/molecules/Block/Block.css';

const  RegisterNhs= () => {
  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack size="25"/>
        요양원 리스트
        <BiLogOut size="25"/>
      </div>
      <SearchBlock />
      <hr></hr>
    </React.Fragment>
  );
};

export default RegisterNhs;