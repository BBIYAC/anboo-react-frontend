import React from "react";
import NoticeWaitingBlock from '../../molecules/Block/NoticeWaitingBlock';
import RoundRectangle from "../../atoms/Button/RoundRectangle";
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const RegisterProfileWaiting = () => {
  return(
    <>
      <div className="header">
        <IoIosArrowBack opacity='0' size="20"/>
        요양자 프로필
        <Link className="linkComponent" to="/">
          <BiLogOut size="20"/>
        </Link>
      </div>
      <NoticeWaitingBlock />
      <Link className="linkComponent" to="/rg/nh-location">
        <RoundRectangle btnText="홈으로 이동하기"/>
      </Link>
    </>
  );
};

export default RegisterProfileWaiting;