import React from "react";
import Floating from "../../atoms/Button/Floating";
import ManagerBelowBarBlock from "../../molecules/Block/ManagerBelowBarBlock";
import MgNHInfoEdit from "../../organisms/Profile/MgNHInfoEdit";
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link } from "react-router-dom";

const NursingHomeInfoEdit = ({onClick, onSigninClick}) => {
  return(
    <>
      <div className="header">
        <Link className="linkComponent" to="/mg/profile">
          <IoIosArrowBack size="20"/>
        </Link>
        요양원 정보 수정
        <BiLogOut size="20" onClick={onSigninClick}/>
      </div>
      <MgNHInfoEdit onClick={onClick} />
      <Link className="linkComponent" to="/mg/home">
        <Floating background="var(--color-green)"/>
      </Link>
      <ManagerBelowBarBlock isRequest/>
    </>
  );
};

export default NursingHomeInfoEdit;