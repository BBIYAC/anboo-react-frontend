import React, { useState, useEffect } from 'react';
import RegisterProfileAfter from '../components/templates/RegisterProfile/RegisterProfileAfter';
import RegisterProfileWaiting from '../components/templates/RegisterProfile/RegisterProfileWaiting';
import RegisterProfileBefore from '../components/templates/RegisterProfile/RegisterProfileBefore';
import axios from 'axios';
import { useHistory } from 'react-router';
import { apiUrl } from './ApiURL';
import '../components/atoms/Select/Select.css';
import '../components/atoms/Input/Input.css';
import '../components/atoms/Button/Button.css';


const  RegisterProfile= () => {
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  const [userState, setUserState] = useState();
  const [nhId, setNhId] = useState();

  useEffect(()=>{
    console.log('history.location.state.isId', history.location.state.isId)
    history.location.state.isId && setNhId(history.location.state.isId)
  },[])

  let history = useHistory();
  useEffect(()=>{
    if(headers.Authorization.split(" ")[1] === "null"){
      headers.Authorization = '';
    };
    console.log(history.location.state.isId)
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        // axios 미등록 보호자인지 등록 대기중인지 GET
        if(history.location.state.isId){ 
          axios({url:`${apiUrl}/not-nok/waiting-for-nh-approval/${history.location.state.isId}/`, method: 'get', headers:headers})
          .then(response=>{
            key = 0;
          })
        }
        setUserState(key);
      }else if(key === 2){ // 등록 보호자
        setUserState(key);
      }else if(key === 3 || key === 4){ // 미승인 관리자 & 승인 관리자 & 승인 대기
        history.push('/mg/home');
      }else{ // 비회원의 경우
        history.push('/');
      }
    }).catch(error => {
        console.error(error);
      })
    },[headers])

  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
    history.push('/');
  }

  const pageState = (state) => {
    switch(state){
      case 2:{ // 등록 보호자
        return <RegisterProfileAfter onLogoutClick={onLogoutClick}/>
      }
      case 1:{ // 미등록 보호자
        return <RegisterProfileBefore onLogoutClick={onLogoutClick} nhId={nhId} />
      }
      case 0:{ // 등록 대기 보호자
        return <RegisterProfileWaiting onLogoutClick={onLogoutClick} />
      }
      default:{ 
        return 
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