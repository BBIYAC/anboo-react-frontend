import React from 'react';
import '../components/atoms/Button/Button.css';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import {FaBirthdayCake} from 'react-icons/fa';

const SignUpAfter = () => {
    return(
        <>
        <div className="title">회원가입</div>
        <FaBirthdayCake className="img-welcome" style={{color: '#5BB1F9', width: '80px', height: '80px', marginTop: '70%'}}/>
        <div className="img-welcome" style={{color: '#5BB1F9', margin: '10px 0 100% 0'}}>가입을 환영합니다 :)</div>
        <RoundRectangle btnText="로그인" />
        </>
    );
};

export default SignUpAfter;