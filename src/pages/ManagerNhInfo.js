import React from 'react';
import NursingHomeDetailInfoBlock from '../components/molecules/Block/NursingHomeDetailInfoBlock';
import NursingHomeChiefInfoBlock from '../components/molecules/Block/NursingHomeChiefInfoBlock';
import NursingHomeManagerInfoBlock from '../components/molecules/Block/NusingHomeManagerInfoBlock';
import NursingHomeImageBlock from '../components/molecules/Block/NursingHomeImageBlock';
import Floating from '../components/atoms/Button/Floating';
import BelowBarBlock from '../components/molecules/Block/BelowBarBlock';
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
      <NursingHomeDetailInfoBlock />
      <NursingHomeChiefInfoBlock />
      <NursingHomeManagerInfoBlock />
      <NursingHomeImageBlock />
      <Floating background="var(--color-green)"/>
      <BelowBarBlock name="MGhandleStyle" isHome/>
    </React.Fragment>
  );
};

export default ManagerNhInfo;