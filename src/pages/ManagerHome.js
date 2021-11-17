import React,{useState, useEffect} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import {BiLogOut} from 'react-icons/bi';
import ManagerBelowBarBlock from '../components/molecules/Block/ManagerBelowBarBlock';
import '../components/atoms/Label/Label.css';
import '../components/molecules/Block/Block.css';
import ManagerHomeBefore from '../components/templates/ManagerHome/ManagerHomeBefore';
import ManagerHomeAfter from '../components/templates/ManagerHome/ManagerHomeAfter';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import ManagerHomeWaiting from '../components/templates/ManagerHome/ManagerHomeWaiting';
import { apiUrl } from './ApiURL';

const ManagerHome = () => {
  let history = useHistory();
  const [userState, setUserState] = useState();

  // ################################사용자 구분 코드################################
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  useEffect(()=>{
    axios({url: `${apiUrl}/authentication/check/` ,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        history.push('/rg/nh-location');
      }else if(key === 2){ // 등록 보호자
        history.push('/rg/acts'); 
      }else if(key === 3 || key === 4){ // 미승인 관리자 & 승인 관리자 
        // axios supervisor/if-approved-by-admin/ GET 관리자 승인 여부
        setUserState(key); // 요양원 등록 전 & 요양원 등록 승인
        // setUserState(); // 요양원 승인 대기
      }else{ // 비회원
        history.push('/');
      }
    }).catch(error => {
        console.error(error);
    },[]);
  })
  // ################################사용자 구분 코드################################

  const pageState = (state) => {
    switch(state){
      case 4:{
        return <><ManagerHomeAfter />
                 <ManagerBelowBarBlock isHome /></>
      }
      case 3:{
        return <ManagerHomeBefore />
      }
      default:{
        return <ManagerHomeWaiting />
      }
    }
  }

  const onSigninClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }
    return (
        <React.Fragment>
            <div className="header">
              <IoIosArrowBack opacity='0' size="20"/>
              관리자 홈
              <BiLogOut size="20" onClick={onSigninClick}/>
            </div>
            {pageState(userState)}
        </React.Fragment>
    );
};

export default ManagerHome;