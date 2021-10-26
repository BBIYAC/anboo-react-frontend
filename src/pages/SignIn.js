import React from 'react';
import UserChoice from '../components/atoms/Select/UserChoice';
import Id from '../components/atoms/Input/Id';
import Password from '../components/atoms/Input/Password';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';

const Login = () => {
  const signinSubmit = (event) => {
    event.preventDefault();
    alert('로그인 완료');
  };

  return (
    <React.Fragment>
      <div className="title">로그인</div>
      <form onSubmit={signinSubmit}>
        <UserChoice />
        <Id />
        <Password />
        <RoundRectangle btnText="로그인" />
      </form>
      <RoundRectangle btnText="회원가입" />
      <RoundRectangle color="#5BB1F9" background="white" btnText="비회원으로 시작" />
    </React.Fragment>
  );
};

export default Login;