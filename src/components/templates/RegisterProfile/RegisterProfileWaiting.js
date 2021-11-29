import React, { useState, useEffect } from "react";
import NoticeWaitingBlock from '../../molecules/Block/NoticeWaitingBlock';
import RoundRectangle from "../../atoms/Button/RoundRectangle";
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { apiUrl } from "../../../pages/ApiURL";

const RegisterProfileWaiting = () => {
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  let history = useHistory();
  const onClick = () => {
    history.push("/rg/nh-location");
  }

  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
    history.push('/');
  }

  // ################################사용자 구분 코드################################
  useEffect(()=>{
    if(headers.Authorization.split(" ")[1] === "null"){
      headers.Authorization = '';
    };
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        axios({url:`${apiUrl}/not-nok/waiting-for-nh-approval/${history.location.state.isId}/`, method: 'get', headers:headers})
        .then(response=>{

        })
        history.push('/rg/profile');
      }else if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 3){ // 미승인 관리자
        history.push('/mg/home')
      }else if(key === 4){ // 승인 관리자
        history.push('/mg/home')
      }else if(key === 6){ // 비회원
        history.push('/rg/nh-location')
      }else{ // 관리자 승인 대기
        history.push('/mg/home')
      }
    }).catch(error => { // 로그인 token 없는 경우(비회원)
    })
  },[])
  // ################################사용자 구분 코드################################
  return(
    <>
      <div className="header">
        <IoIosArrowBack opacity='0' size="20"/>
        요양인 프로필
        <BiLogOut size="20" onClick={onLogoutClick}/>
      </div>
      <NoticeWaitingBlock />
      <RoundRectangle btnText="홈으로 이동하기" onClick={onClick}/>
    </>
  );
};

export default RegisterProfileWaiting;