import React from "react";
import MgNHInfo from "../../organisms/Profile/MgNHInfo";
import Floating from "../../atoms/Button/Floating";
import ManagerBelowBarBlock from "../../molecules/Block/ManagerBelowBarBlock";
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link } from "react-router-dom";

const NursingHomeInfo = () => {
  return(
    <>
      <div className="header">
        <Link to="/mg/home">
         <IoIosArrowBack size="20"/>
        </Link>
        요양원 정보
        <Link to="/">
          <BiLogOut size="20"/>
        </Link>
      </div>
      <MgNHInfo />
      <Link to="/mg/requests">
        <Floating background="var(--color-green)"/>
      </Link>
      <ManagerBelowBarBlock isRequest/>
    </>
  );
};

export default NursingHomeInfo;