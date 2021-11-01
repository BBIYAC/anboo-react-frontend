import React from 'react';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import {FaBirthdayCake} from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';

const SignUpAfter = () => {
    return(
        <>
        <div className="header">
          <IoIosArrowBack  opacity="0" size="20"/>
          회원가입
          <BiLogOut opacity="0" size="20"/>
        </div>
        <FaBirthdayCake className="img-welcome" style={{color: '#5BB1F9', width: '80px', height: '80px', marginTop: '20vh'}}/>
        <div className="img-welcome" style={{color: '#5BB1F9', margin: '10px 0 30vh 0'}}>가입을 환영합니다 :)</div>
        <RoundRectangle btnText="로그인" />
        </>
    );
};

export default SignUpAfter;