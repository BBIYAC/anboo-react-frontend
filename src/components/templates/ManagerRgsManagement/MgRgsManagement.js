import React from 'react';
import Floating from '../../atoms/Button/Floating';
import ManagerBelowBarBlock from '../../molecules/Block/ManagerBelowBarBlock';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';

const MgRgsManagement = () => {
  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack opacity='0' size="20"/>
        회원 관리
        <BiLogOut size="20"/>
      </div>
      
      <Floating background='var(--color-green)'/>
      <ManagerBelowBarBlock isMember/>
    </React.Fragment>
  );
};

export default MgRgsManagement;