import React from "react";
import Floating from "../../atoms/Button/Floating";
import ManagerBelowBarBlock from "../../molecules/Block/ManagerBelowBarBlock";
import MgNHInfoEdit from "../../organisms/Profile/MgNHInfoEdit";
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';

const NursingHomeInfoEdit = () => {
  return(
    <>
      <div className="header">
        <IoIosArrowBack size="20"/>
        요양원 정보 수정
        <BiLogOut size="20"/>
      </div>
      <MgNHInfoEdit />
      <Floating background="var(--color-green)"/>
      <ManagerBelowBarBlock isRequest/>
    </>
  );
};

export default NursingHomeInfoEdit;