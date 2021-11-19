import React, { useEffect, useState } from "react";
import NoticeWaitingBlock from '../../molecules/Block/NoticeWaitingBlock';
import RoundRectangle from "../../atoms/Button/RoundRectangle";
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';

const RegisterProfileWaiting = ({onLogoutClick}) => {
  let history = useHistory();
  const onClick = () => {
    history.push("/rg/nh-location");
  }
  return(
    <>
      <div className="header">
        <IoIosArrowBack opacity='0' size="20"/>
        요양인 프로필
        <BiLogOut size="20" onClick={onLogoutClick}/>
      </div>
      <NoticeWaitingBlock />
      <RoundRectangle btnText="홈으로 이동하기" onClick={onClick}/>
    </>
  );
};

export default RegisterProfileWaiting;