import React from 'react';
import UserChoice from '../components/atoms/Select/UserChoice';
import NameLong from '../components/atoms/Input/NameLong';
import Id from '../components/atoms/Input/Id';
import Password from '../components/atoms/Input/Password';
import PasswordCheck from '../components/atoms/Input/PasswordCheck';
import PhoneNumber from '../components/atoms/Input/PhoneNumber';
import Email from '../components/atoms/Input/Email';
import EmailCheck from '../components/atoms/Input/EmailCheck';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import '../components/atoms/Select/Select.css';
import '../components/atoms/Input/Input.css';
import '../components/atoms/Button/Button.css';


const SignUp = () => {
    const signupSubmit = (event) => {
        event.preventDefault();
        alert('회원가입 완료');
    };

    return (
        <React.Fragment>
            <div className="header">회원가입</div>
            <form onSubmit={signupSubmit}>
                <UserChoice />
                <NameLong />
                <Id />
                <Password />
                <PasswordCheck />
                <PhoneNumber />
                <Email />
                <EmailCheck />
                <RoundRectangle btnText="회원가입" />
            </form>
        </React.Fragment>
    );
};

export default SignUp;