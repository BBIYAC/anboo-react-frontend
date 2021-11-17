import React from 'react';
import Floating from '../../atoms/Button/Floating';
import ManagerBelowBarBlock from '../../molecules/Block/ManagerBelowBarBlock';
import MembersListBlock from '../../molecules/Block/MembersListBlock';
import ApprovalsListBlock from '../../molecules/Block/ApprovalsListBlock';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link } from "react-router-dom";

const MgRgsManagement = ({onClick}) => {
  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack opacity='0' size="20"/>
        회원 관리
        <BiLogOut size="20" onClick={onClick}/>
      </div>
      <MembersListBlock/>
      <ApprovalsListBlock/>
      <Link className="linkComponent" to="/mg/requests">
        <Floating background='var(--color-green)'/>
      </Link>
      <ManagerBelowBarBlock isMember/>
    </React.Fragment>
  );
};

export default MgRgsManagement;