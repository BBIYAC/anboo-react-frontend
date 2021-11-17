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
  // ################################사용자 구분 코드################################
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  useEffect(()=>{
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        history.push('/rg/nh-location');
      }else if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 3){ // 미승인 관리자
        history.push('/mg/home');
      }else if(key === 4){ // 승인 관리자
        return;
      }
    }).catch(error => { // access token 없는 경우(비회원)
        // history.push('/');
        return;
    })
  },[headers])
  // ################################사용자 구분 코드################################
  const onSigninClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }


  // const location = useLocation();
  // useEffect(()=>{
  //   console.log(location.state.members);
  // },[])

  return (
    <React.Fragment>
      {isPost? <ManagerActsPost onSigninClick={onSigninClick} />: <ManagerActsList onClick={()=>setIsPost(true)} onSigninClick={onSigninClick}/>}
      <Link className="linkComponent" to="/mg/requests">
        <Floating background='var(--color-green)' />
      </Link>
      <ManagerBelowBarBlock isMember/>
    </React.Fragment>
  );
};

export default ManagerActs;