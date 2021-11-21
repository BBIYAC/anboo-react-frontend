import React,{useState, useEffect} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import {BiLogOut} from 'react-icons/bi';
import { apiUrl } from './ApiURL';
import ManagerBelowBarBlock from '../components/molecules/Block/ManagerBelowBarBlock';
import ManagerHomeBefore from '../components/templates/ManagerHome/ManagerHomeBefore';
import ManagerHomeAfter from '../components/templates/ManagerHome/ManagerHomeAfter';
import ManagerHomeWaiting from '../components/templates/ManagerHome/ManagerHomeWaiting';
import axios from "axios";
import '../components/atoms/Label/Label.css';
import '../components/molecules/Block/Block.css';

const ManagerHome = () => {
  let history = useHistory();
  const [userState, setUserState] = useState();
  // axios authentication GET - 사용자 구분
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
        axios({url: `${apiUrl}/supervisor/if-approved-by-admin/` ,method : 'get' ,headers:headers})
        .then(response =>{
          response.data.is_waiting
          ? setUserState(0)
          : setUserState(key)
        }).catch(error => {
            console.error(error);
        });
      }else{ // 비회원
        history.push('/');
      }
    }).catch(error => {
        console.error(error);
        history.push('/');
    });
  })

  const pageState = (state) => {
    switch(state){
      case 4:{
        return <><ManagerHomeAfter /><ManagerBelowBarBlock isHome /></>
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