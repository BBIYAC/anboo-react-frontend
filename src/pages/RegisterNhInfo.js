import React from 'react';
import NursingHomeDetailInfoBlock from '../components/molecules/Block/NursingHomeDetailInfoBlock';
import NursingHomeChiefInfoBlock from '../components/molecules/Block/NursingHomeChiefInfoBlock';
import NursingHomeManagerInfoBlock from '../components/molecules/Block/NursingHomeManagerInfoBlock';
import NursingHomeImageBlock from '../components/molecules/Block/NursingHomeImageBlock';
import BelowRectangleBlock from '../components/molecules/Block/BelowRectangleBlock';
import Floating from '../components/atoms/Button/Floating';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const  RegisterNhInfo= () => {
  return (
    <React.Fragment>
      <div className="header">
        <Link className="linkComponent" to="/rg/nhs">
          <IoIosArrowBack size="20"/>
        </Link>
        요양원 정보
        <Link className="linkComponent" to="/">
          <BiLogOut size="20"/>
        </Link>
      </div>
      <NursingHomeDetailInfoBlock />
      <hr/>
      <NursingHomeChiefInfoBlock />
      <hr/>
      <NursingHomeManagerInfoBlock />
      <NursingHomeImageBlock />
      <BelowRectangleBlock />
      <Link className="linkComponent" to="/rg/nh-location">
        <Floating background="var(--color-blue)"/>
      </Link>
    </React.Fragment>
  );
};

export default RegisterNhInfo;