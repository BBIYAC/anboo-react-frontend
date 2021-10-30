import React from "react";
import MgNHInfo from "../../organisms/Profile/MgNHInfo";
import Floating from "../../atoms/Button/Floating";
import ManagerBelowBarBlock from "../../molecules/Block/ManagerBelowBarBlock";
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';

const NursingHomeInfo = () => {
  return(
    <>
      <div className="header">
        <IoIosArrowBack size="20"/>
        요양원 정보
        <BiLogOut size="20"/>
      </div>
      <MgNHInfo />
      <Floating background="var(--color-green)"/>
      <ManagerBelowBarBlock isRequest/>
    </>
  );
};

export default NursingHomeInfo;