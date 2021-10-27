import React from 'react';
import SearchBlock from '../components/molecules/Block/SearchBlock';
import MapBlock from '../components/molecules/Block/MapBlock';
import { IoIosArrowBack } from 'react-icons/io'
import { BiPowerOff } from 'react-icons/bi'
import '../components/atoms/Button/Button.css';
import '../components/molecules/Block/Block.css';


const RegisterNhLocation= () => {
  return (
    <React.Fragment>
      <div className="div-headerButton">
        <IoIosArrowBack size="25"/>
        <BiPowerOff size="25"/>
      </div>
      <div className="title">요양원 위치</div>
      <SearchBlock />
      <MapBlock />
    </React.Fragment>
  );
};

export default RegisterNhLocation;