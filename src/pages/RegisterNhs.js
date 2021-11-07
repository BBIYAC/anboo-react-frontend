import React from 'react';
import SearchBlock from '../components/molecules/Block/SearchBlock';
import NursingHomeInfoBlock from '../components/molecules/Block/NursingHomeInfoBlock';
import Floating from '../components/atoms/Button/Floating';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import '../components/atoms/Button/Button.css';
import '../components/molecules/Block/Block.css';
import '../components/atoms/Label/Label.css';
import { Link } from 'react-router-dom';


const  RegisterNhs= () => {
  return (
    <React.Fragment>
      <div className="header-contain">
        <div className="header">
          <Link className="linkComponent" to="/rg/nh-location">
            <IoIosArrowBack size="20"/>
          </Link>
          요양원 리스트
          <Link className="linkComponent" to="/">
            <BiLogOut size="20"/>
          </Link>
        </div>
        <SearchBlock />
      </div>
      <NursingHomeInfoBlock />
      <Link className="linkComponent" to="/rg/nh-location">
        <Floating background="var(--color-blue)"/>
      </Link>
    </React.Fragment>
  );
};

export default RegisterNhs;