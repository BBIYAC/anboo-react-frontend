import React from 'react';
import SearchBlock from '../components/molecules/Block/SearchBlock';
import MapBlock from '../components/molecules/Block/MapBlock';
import Floating from '../components/atoms/Button/Floating';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import '../components/atoms/Button/Button.css';
import '../components/molecules/Block/Block.css';

const RegisterNhLocation= () => {
  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack opacity="0" size="20"/>
        요양원 위치
        <BiLogOut size="20"/>
      </div>
      <SearchBlock />
      <MapBlock />
      <Floating background="var(--color-blue)"/>
    </React.Fragment>
  );
};

export default RegisterNhLocation;