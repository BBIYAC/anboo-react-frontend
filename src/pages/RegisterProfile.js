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
  const [userState, setUserState] = useState('');
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})

  
  let history = useHistory();
  // ################################사용자 구분 코드################################
  useEffect(()=>{
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        // history.push('/rg/profile')
        // setUserState('after');
      }else if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 6){ // 비회원
        // setUserState('before');
      }else if(key === 4){ // 승인 관리자
        setUserState('after');
      }else{ // 관리자 승인 대기
        setUserState('waiting');
      }
    }).catch(error => { // 로그인 token 없는 경우(비회원)
    })
  },[])
  // ################################사용자 구분 코드################################

  const pageState = (state) => {
    switch(state){
      case 'after':{
        return <RegisterProfileAfter />
      }
      case 'waiting':{
        return <RegisterProfileWaiting />
      }
      default:{
        return <RegisterProfileBefore/>
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