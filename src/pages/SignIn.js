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
import { Link, useHistory } from 'react-router-dom';
import { apiUrl } from './ApiURL';
import axios from 'axios';

const SignIn = () => {
  // 유효성 검사
  const [isUser, setIsUser] = useState('');
  const [isId, setIsId] = useState('');
  const [isPassword, setIsPassword] = useState('');
  const [fillMessage, setFillMessage] = useState(false);
  let history = useHistory();

  const signinSubmit = (event) => {
    event.preventDefault();
    console.log({ isUser, isId, isPassword });
    /*
     axios signin form POST
    */

    const userAuthorization = ()=>{
      const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')}
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
     
    const params = {
      "username" : isId,
      "password" : isPassword,
    }
    if (isUser === '보호자') {
      axios({ url: `${apiUrl}/signin/nok/`, method: 'post', data: params })
<<<<<<< HEAD
        .then(response => {
          console.log(response.data.access);
          localStorage.setItem('accessToken',response.data.access);
          history.push({pathname: '/rg/nh-location', state:{key:1}});
        }).catch(error => {
          console.log(error)
        })
=======
      .then(response => {
        localStorage.setItem('accessToken',response.data.access);
        userAuthorization();
      }).catch(error => {
        console.log(error)
      })
>>>>>>> aa1205a45888d534cef61695cc2ee20f4dca20dc
    }
    else if (isUser === '관리자') {
      axios({ url: `${apiUrl}/signin/nh-supervisor/`, method: 'post', data: params })
        .then(response => {
          localStorage.setItem('accessToken',response.data.access);
          userAuthorization();
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
            // ?<Link className="linkComponent" to="/mg/home">
            //     <RoundRectangle type='submit' btnText="로그인" />
            // </Link>
            ? <RoundRectangle type='submit' btnText="로그인" />
            : <RoundRectangle type='button' btnText="로그인" onClick={onClick} />
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
          border="1px solid" />
      </Link>
    </React.Fragment>
  );
};

export default SignIn;