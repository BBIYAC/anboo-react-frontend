import React from 'react';
import NursingHomeDetailInfoBlock from '../components/molecules/Block/NursingHomeDetailInfoBlock';
import NursingHomeChiefInfoBlock from '../components/molecules/Block/NursingHomeChiefInfoBlock';
import NursingHomeManagerInfoBlock from '../components/molecules/Block/NusingHomeManagerInfoBlock';
import NursingHomeImageBlock from '../components/molecules/Block/NursingHomeImageBlock';
import Floating from '../components/atoms/Button/Floating';
import ManagerBelowBarBlock from '../components/molecules/Block/ManagerBelowBarBlock';
import OvalLarge from '../components/atoms/Button/OvalLarge';
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
      <ManagerBelowBarBlock isHome/>
      <hr/>
      <OvalLarge btnText="수정하기"/>
    </React.Fragment>
  );
};

export default ManagerNhInfo;