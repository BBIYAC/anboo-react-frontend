import React from 'react';
import NursingHomeDetailInfoBlock from '../components/molecules/Block/NursingHomeDetailInfoBlock';
import NursingHomeChiefInfoBlock from '../components/molecules/Block/NursingHomeChiefInfoBlock';
import NursingHomeCaregiverInfoBlock from '../components/molecules/Block/NusingHomeCaregiverInfoBlock';
import NursingHomeImageBlock from '../components/molecules/Block/NursingHomeImageBlock';
import BelowRectangleBlock from '../components/molecules/Block/BelowRectangleBlock';
import Floating from '../components/atoms/Button/Floating';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';

const  RegisterNhInfo= () => {
    return (
        <React.Fragment>
            <div className="header">
              <IoIosArrowBack size="25"/>
              요양원 정보
              <BiLogOut size="25"/>
            </div>
            <NursingHomeDetailInfoBlock />
            <NursingHomeChiefInfoBlock />
            <NursingHomeCaregiverInfoBlock />
            <NursingHomeImageBlock />
            <BelowRectangleBlock />
            <Floating />
        </React.Fragment>
    );
};

export default RegisterNhInfo;