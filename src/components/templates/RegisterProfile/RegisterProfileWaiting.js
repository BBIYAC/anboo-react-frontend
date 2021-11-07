import React from "react";
import NoticeWaitingBlock from '../../molecules/Block/NoticeWaitingBlock';
import BelowBarBlock from '../../molecules/Block/BelowBarBlock';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ManagerHomeWaiting = () => {
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
      <BelowBarBlock isProfile/>
    </>
  );
};

export default ManagerHomeWaiting;