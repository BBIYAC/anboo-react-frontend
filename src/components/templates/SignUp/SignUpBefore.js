import React from 'react';
import UserChoice from '../../atoms/Select/UserChoice';
import NameLong from '../../atoms/Input/NameLong';
import Id from '../../atoms/Input/Id';
import Password from '../../atoms/Input/Password';
import PasswordCheck from '../../atoms/Input/PasswordCheck';
import PhoneNumber from '../../atoms/Input/PhoneNumber';
import Email from '../../atoms/Input/Email';
import EmailCheck from '../../atoms/Input/EmailCheck';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';

const SignUpBefore = () => {
    const signupSubmit = (event) => {
        event.preventDefault();
        alert('회원가입 완료');
    };

    return (
        <React.Fragment>
            <div className="header">
              <IoIosArrowBack  opacity="0" size="20"/>
              회원가입
              <BiLogOut opacity="0" size="20"/>
            </div>
            <form onSubmit={signupSubmit}>
                <UserChoice />
                <NameLong />
                <Id />
                <Password />
                <PasswordCheck />
                <PhoneNumber />
                <Email />
                <RoundRectangle btnText="회원가입" />
            </form>
        </React.Fragment>
    );
};

export default SignUpBefore;