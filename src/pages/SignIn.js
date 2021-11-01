import React from 'react';
import UserChoice from '../components/atoms/Select/UserChoice';
import Id from '../components/atoms/Input/Id';
import Password from '../components/atoms/Input/Password';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import '../components/atoms/Select/Select.css';
import '../components/atoms/Input/Input.css';
import '../components/atoms/Button/Button.css';

const SignIn = () => {
  const signinSubmit = (event) => {
    event.preventDefault();
    alert('로그인 완료');
  };

  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack  opacity="0" size="20"/>
        로그인
        <BiLogOut opacity="0" size="20"/>
      </div>
      <form onSubmit={signinSubmit}>
        <UserChoice />
        <Id />
        <Password />
        <RoundRectangle btnText="로그인" />
      </form>
      <RoundRectangle btnText="회원가입" />
      <RoundRectangle color="var(--color-blue)" background="white" btnText="비회원으로 시작" />
    </React.Fragment>
  );
};

export default SignIn;