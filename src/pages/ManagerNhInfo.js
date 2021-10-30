import React from 'react';
import ManagerNHInfo from '../components/organisms/Profile/ManagerNHInfo';
import Floating from '../components/atoms/Button/Floating';
import ManagerBelowBarBlock from '../components/molecules/Block/ManagerBelowBarBlock';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import '../components/atoms/Button/Button.css';

const ManagerNhInfo= () => {
  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack size="20"/>
        요양원 정보
        <BiLogOut size="20"/>
      </div>
      <ManagerNHInfo />
      <Floating background="var(--color-green)"/>
      <ManagerBelowBarBlock isRequest/>
    </React.Fragment>
  );
};

export default ManagerNhInfo;