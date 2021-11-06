import React, {useState} from 'react';
import UserChoice from '../components/atoms/Select/UserChoice';
import NameLong from '../components/atoms/Input/NameLong';
import Id from '../components/atoms/Input/Id';
import Password from '../components/atoms/Input/Password';
import PasswordCheck from '../components/atoms/Input/PasswordCheck';
import PhoneNumber from '../components/atoms/Input/PhoneNumber';
import Email from '../components/atoms/Input/Email';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const SignUpBefore = () => {
    const signupSubmit = (event) => {
        event.preventDefault();
        alert('회원가입 완료');
    };
    const [pwd, setPwd] = useState('');

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
                <Password setPwd={setPwd}/>
                <PasswordCheck pwdCheck={pwd}/>
                <PhoneNumber />
                <Email />
                <Link to="/signup/after">
                  <RoundRectangle btnText="회원가입" />
                </Link>
            </form>
        </React.Fragment>
    );
};

export default SignUpBefore;