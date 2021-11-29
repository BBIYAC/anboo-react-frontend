import React, { useState, useEffect } from 'react';
import ManagerActsList from '../components/templates/ManagerActs/ManagerActsList';
import ManagerBelowBarBlock from '../components/molecules/Block/ManagerBelowBarBlock';
import Floating from '../components/atoms/Button/Floating'
import ManagerActsPost from '../components/templates/ManagerActs/ManagerActsPost';
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from 'axios';
import { apiUrl } from './ApiURL';

const ManagerActs = () => {
  const [isPost, setIsPost] = useState(false);
  let history = useHistory();
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  useEffect(()=>{
    // 사용자 구분 GET
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        // axios 미등록 보호자인지 등록 대기중인지 GET
        axios({url:`${apiUrl}/not-nok/waiting-for-nh-approval/`, method: 'get', headers:headers})
        .then(response=>{
          response.data.is_waiting
          ? history.push('/rg/profile') // 등록 대기 중
          : history.push('/rg/nh-location'); // 미등록 보호자
        })
      }else if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 3){ // 미승인 관리자
        history.push('/mg/home');
      }else if(key === 4){ // 승인 관리자
        return;
      }else{ // 비회원
        history.push('/');
      }
    }).catch(error => { 
        return;
    })
  },[headers])
  const onSigninClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }
  
  const location = useLocation();
  const params = location.state.params;
  const member_length = params['members'];
  const selected = params['selected'];

  useEffect(()=>{
    selected.length > 1 && selected.length < member_length && setIsPost(true); // 일부 선택
  },[params])


  return (
    <React.Fragment>
      {isPost
      ? <ManagerActsPost onSigninClick={onSigninClick} members={params} />
      : <ManagerActsList onClick={()=>setIsPost(true)} onSigninClick={onSigninClick} members={params}/>}
      <Link className="linkComponent" to="/mg/requests">
        <Floating background='var(--color-green)' />
      </Link>
      <ManagerBelowBarBlock isMember/>
    </React.Fragment>
  );
};

export default ManagerActs;