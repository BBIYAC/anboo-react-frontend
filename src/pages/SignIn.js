import React, { useState } from 'react';
import UserChoice from '../components/atoms/Select/UserChoice';
import Id from '../components/atoms/Input/Id';
import Password from '../components/atoms/Input/Password';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import '../components/atoms/Select/Select.css';
import '../components/atoms/Input/Input.css';
import '../components/atoms/Button/Button.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  // 유효성 검사
  const [isUser, setIsUser] = useState('');
  const [isId, setIsId] = useState('');
  const [isPassword, setIsPassword] = useState('');
  const [fillMessage, setFillMessage] = useState(false);

  const signinSubmit = (event) => {
    event.preventDefault();
    console.log({isUser, isId, isPassword});
    /*
     axios signin form POST
    */
  };

  const onClick = () => {
    setFillMessage(true); // 비어있는 input 경고
  }


  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack  opacity="0" size="20"/>
        로그인
        <BiLogOut opacity="0" size="20"/>
      </div>
      <form onSubmit={signinSubmit}>
        <UserChoice setIsUser={setIsUser} fillMessage={fillMessage} />
        <Id setIsId={setIsId} fillMessage={fillMessage} />
        <Password setIsPassword={setIsPassword} fillMessage={fillMessage} />
        {
            (isUser && isId && isPassword)
            // ?<Link className="linkComponent" to="/mg/home">
            //     <RoundRectangle type='submit' btnText="로그인" />
            // </Link>
            ?<RoundRectangle type='submit' btnText="로그인" />
            :<RoundRectangle type='button' btnText="로그인" onClick={onClick} />
        }
        {/* <Link to="/rg/acts">
          <RoundRectangle btnText="로그인" />
        </Link> */}
      </form>
      <Link className="linkComponent" to="/signup/before">
        <RoundRectangle btnText="회원가입" />
      </Link>
      <Link className="linkComponent" to="rg/nh-location">
        <RoundRectangle 
        color="var(--color-blue)" 
        background="white" 
        btnText="비회원으로 시작하기" 
        border="1px solid"/>
      </Link>
    </React.Fragment>
  );
};

export default SignIn;