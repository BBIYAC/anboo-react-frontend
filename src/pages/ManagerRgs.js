import React, {useState, useEffect} from 'react';
import MgRgsManagement from '../components/templates/ManagerRgsManagement/MgRgsManagement';
import { useHistory } from 'react-router';
import axios from "axios";
import { apiUrl } from './ApiURL';

const ManagerRgs= () => {
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
      }else{ // 비회원
        history.push('/');
      }
    }).catch(error => { 
        return;
    })
  },[headers])
  // ################################사용자 구분 코드################################
  const onSigninClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }

  return (
    <React.Fragment>
      <MgRgsManagement onClick={onSigninClick}/>
    </React.Fragment>
  );
};

export default ManagerRgs;