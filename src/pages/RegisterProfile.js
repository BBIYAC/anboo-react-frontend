import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { apiUrl } from './ApiURL';
import RegisterProfileAfter from '../components/templates/RegisterProfile/RegisterProfileAfter';
import RegisterProfileWaiting from '../components/templates/RegisterProfile/RegisterProfileWaiting';
import RegisterProfileBefore from '../components/templates/RegisterProfile/RegisterProfileBefore';
import axios from 'axios';
import '../components/atoms/Select/Select.css';
import '../components/atoms/Input/Input.css';
import '../components/atoms/Button/Button.css';


const  RegisterProfile= () => {
  let history = useHistory();
  const [userState, setUserState] = useState();
  // ################################사용자 구분 코드################################
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  useEffect(()=>{
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        // axios 미등록 보호자인지 등록 대기중인지 GET
        setUserState(key);
        // setUserState(0);
      }else if(key === 2){ // 등록 보호자
        setUserState(key);
      }else if(key === 3 || key === 4){ // 미승인 관리자 & 승인 관리자 & 승인 대기
        history.push('/mg/home');
      }else{ // 비회원의 경우
        history.push('/rg/nh-location');
      }
    }).catch(error => {
        console.error(error);
      })
    },[])
  // ################################사용자 구분 코드################################

  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }

  const pageState = (state) => {
    switch(state){
      case 2:{ // 등록 보호자
        return <RegisterProfileAfter onLogoutClick={onLogoutClick}/>
      }
      case 1:{ // 미등록 보호자
        return <RegisterProfileBefore onLogoutClick={onLogoutClick} />
      }
      case 0: { // 등록 대기 보호자
        <RegisterProfileWaiting onLogoutClick={onLogoutClick} />
      }
      default:{
        return;
      }
    }
  }

  return (
    <React.Fragment>
      {pageState(userState)}
    </React.Fragment>
  );
};

export default RegisterProfile;