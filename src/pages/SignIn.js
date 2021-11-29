import React, { useEffect, useState } from 'react';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import UserChoice from '../components/atoms/Select/UserChoice';
import Password from '../components/atoms/Input/Password';
import Id from '../components/atoms/Input/Id';
import axios from 'axios';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom';
import { apiUrl } from './ApiURL';
import '../components/atoms/Select/Select.css';
import '../components/atoms/Input/Input.css';
import '../components/atoms/Button/Button.css';

const SignIn = () => {
  // 유효성 검사
  const [isUser, setIsUser] = useState('');
  const [isId, setIsId] = useState('');
  const [isPassword, setIsPassword] = useState('');
  const [fillMessage, setFillMessage] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')}
  const params = {
    "username" : isId,
    "password" : isPassword,
  }
  let history = useHistory();

   // 사용자 체크 GET
  const userAuthorization = ()=>{
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        history.push('/rg/nh-location');

      }else if(key === 2){ // 등록 보호자
        history.push('/rg/acts');

      }else if(key === 3 || key === 4){ // 미승인 관리자 & 승인 관리자 & 승인 대기
        history.push('/mg/home');

      }else{ // 비회원의 경우
        history.push('/rg/nh-location');

      }
    }).catch(error => {
        console.error(error);
    })
  }

  // 로그인 성공 시 페이지 이동
  useEffect(()=>{ 
    loginSuccess && userAuthorization();
  },[loginSuccess])

  const signinSubmit = (event) => {
    event.preventDefault();
    
    if (isUser === '보호자') {
      // 보호자 계정 POST
      axios({ url: `${apiUrl}/signin/nok/`, method: 'post', data: params })
      .then(response => {
        localStorage.setItem('accessToken',response.data.access);
        setLoginSuccess(true);
      }).catch(error => {
        console.log(error)
      })
    }
    else if (isUser === '관리자') {
      // 관리자 계정 POST
      axios({ url: `${apiUrl}/signin/nh-supervisor/`, method: 'post', data: params })
        .then(response => {
          localStorage.setItem('accessToken',response.data.access);
          setLoginSuccess(true);
        }).catch(error => {
          console.log(error)
        })
    }
  };

  const onClick = () => {
    setFillMessage(true); // 비어있는 input 경고
  }

  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack opacity="0" size="20" />
        로그인
        <BiLogOut opacity="0" size="20" />
      </div>
      <form onSubmit={signinSubmit}>
        <UserChoice setIsUser={setIsUser} fillMessage={fillMessage} />
        <Id setIsId={setIsId} fillMessage={fillMessage} />
        <Password setIsPassword={setIsPassword} fillMessage={fillMessage} />
        {
          (isUser && isId && isPassword)
            ? <RoundRectangle type='submit' btnText="로그인" />
            : <RoundRectangle type='button' btnText="로그인" onClick={onClick} />
        }
      </form>
      <Link className="linkComponent" to="/signup/before">
        <RoundRectangle btnText="회원가입" />
      </Link>
      <Link className="linkComponent" to="rg/nh-location">
        <RoundRectangle
          color="var(--color-blue)"
          background="white"
          btnText="비회원으로 시작하기"
          border="1px solid" />
      </Link>
    </React.Fragment>
  );
};

export default SignIn;