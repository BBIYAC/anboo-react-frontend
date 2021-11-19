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
<<<<<<< HEAD
  const [userState, setUserState] = useState('');
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})

  
=======
>>>>>>> aa1205a45888d534cef61695cc2ee20f4dca20dc
  let history = useHistory();
  const [userState, setUserState] = useState();
  // ################################사용자 구분 코드################################
  useEffect(()=>{
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
<<<<<<< HEAD
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
=======
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
>>>>>>> aa1205a45888d534cef61695cc2ee20f4dca20dc
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
<<<<<<< HEAD
        return <RegisterProfileBefore/>
=======
        return;
>>>>>>> aa1205a45888d534cef61695cc2ee20f4dca20dc
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