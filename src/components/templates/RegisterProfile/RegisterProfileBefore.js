import React from 'react';
import AddImage from '../../atoms/Input/AddImage';
import Birth from '../../atoms/Input/Birth';
import Caution from '../../atoms/Input/Caution';
import InputSelectBlock from '../../molecules/Block/InputSelectBlock';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import Floating from '../../atoms/Button/Floating';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const  RegisterProfileBefore= () => {
  return (
    <React.Fragment>
        <div className="header">
            <IoIosArrowBack size="20"/>
            요양자 프로필
            <BiLogOut size="20"/>
        </div>
        <AddImage url=""/>
        <InputSelectBlock />
        <Birth />
        <Caution />
        <RoundRectangle btnText='요양자 등록 요청하기'/>
        <Link className="linkComponent" to="/">
          <Floating background='var(--color-blue)' />
        </Link>
    </React.Fragment>
  );
};

export default RegisterProfileBefore;