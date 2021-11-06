import React from 'react';
import SearchBlock from '../components/molecules/Block/SearchBlock';
import MapBlock from '../components/molecules/Block/MapBlock';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import '../components/atoms/Button/Button.css';
import '../components/molecules/Block/Block.css';
import { Link } from 'react-router-dom';

const RegisterNhLocation= () => {
  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack opacity="0" size="20"/>
        요양원 위치
        <Link to="/">
          <BiLogOut size="20"/>
        </Link>
      </div>
      <SearchBlock />
      <MapBlock />
    </React.Fragment>
  );
};

export default RegisterNhLocation;