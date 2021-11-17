import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import RegisterProfileAfter from '../components/templates/RegisterProfile/RegisterProfileAfter';
import RegisterProfileWaiting from '../components/templates/RegisterProfile/RegisterProfileWaiting';
import RegisterProfileBefore from '../components/templates/RegisterProfile/RegisterProfileBefore';
import '../components/atoms/Select/Select.css';
import '../components/atoms/Input/Input.css';
import '../components/atoms/Button/Button.css';
import axios from 'axios';

const  RegisterProfile= () => {
  const [userState, setUserState] = useState('');
  let history = useHistory();
  // ################################사용자 구분 코드################################
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  const apiUrl =  'http://ec2-54-180-93-130.ap-northeast-2.compute.amazonaws.com';
  useEffect(()=>{
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 3){ // 미승인 관리자
        setUserState('before');
      }else if(key === 4){ // 승인 관리자
        setUserState('after');
      }else{ // 관리자 승인 대기
        setUserState('waiting');
      }
    }).catch(error => { // 로그인 token 없는 경우(비회원)
        console.error(error);
        history.push('/rg/nh-location');
    })
  },[])
  // ################################사용자 구분 코드################################

  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }
  const pageState = (state) => {
    switch(state){
      case 'after':{
        return <RegisterProfileAfter />
      }
      case 'waiting':{
        return <RegisterProfileWaiting />
      }
      default:{
        return <RegisterProfileBefore />
      }
    }
  }
  useEffect(()=>{
    setUserState('after');
  })
  return (
    <React.Fragment>
      {pageState(userState)}
    </React.Fragment>
  );
};

export default RegisterProfile;