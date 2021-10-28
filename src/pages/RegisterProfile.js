import React from 'react';
import AddImage from '../components/atoms/Input/AddImage';
import Birth from '../components/atoms/Input/Birth';
import Caution from '../components/atoms/Input/Caution';
import StarBlock from '../components/molecules/Block/StarBlock';
import InputSelectBlock from '../components/molecules/Block/InputSelectBlock';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import Floating from '../components/atoms/Button/Floating';
import BelowBarBlock from '../components/molecules/Block/BelowBarBlock';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import '../components/atoms/Select/Select.css';
import '../components/atoms/Input/Input.css';
import '../components/atoms/Button/Button.css';


const  RegisterProfile= () => {
    return (
        <React.Fragment>
            <div className="header">
              <IoIosArrowBack size="25"/>
              요양자 프로필
              <BiLogOut size="25"/>
            </div>
            <AddImage />
            <InputSelectBlock />
            <Birth />
            <Caution />
            <div className="tit-name">이용하고 계신 요양원이 마음에 드시나요?</div>
            <StarBlock />
            <RoundRectangle btnText='요양자 프로필 수정하기'/>
            <BelowBarBlock isProfile/>
            <Floating />
        </React.Fragment>
    );
};

export default RegisterProfile;