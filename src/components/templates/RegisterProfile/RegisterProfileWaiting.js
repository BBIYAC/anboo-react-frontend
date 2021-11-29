import React, { useState, useEffect } from "react";
import NoticeWaitingBlock from '../../molecules/Block/NoticeWaitingBlock';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';

const RegisterProfileWaiting = ({onLogoutClick}) => {

  
  return(
    <>
      <div className="header">
        <IoIosArrowBack opacity='0' size="20"/>
        요양인 프로필
        <BiLogOut size="20" onClick={onLogoutClick}/>
      </div>
      <NoticeWaitingBlock />
    </>
  );
};

export default RegisterProfileWaiting;