import React, { useEffect, useState } from "react";
import NoticeWaitingBlock from '../../molecules/Block/NoticeWaitingBlock';
import RoundRectangle from "../../atoms/Button/RoundRectangle";
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';

const RegisterProfileWaiting = ({onLogoutClick}) => {
  let history = useHistory();
<<<<<<< HEAD
  // ################################사용자 구분 코드################################
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  useEffect(()=>{
    if(headers.Authorization.split(" ")[1] === "null"){
      headers.Authorization = '';
    };
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        // ...
      }else if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 3){ // 미승인 관리자
        history.push('/mg/home')
      }else if(key === 4){ // 승인 관리자
        history.push('/mg/home')
      }else if(key === 6){ // 비회원
        history.push('/rg/profile')
      }else{ // 관리자 승인 대기
        history.push('/mg/home')
      }
    }).catch({ // 로그인 token 없는 경우(비회원)
    })
  },[])
  // ################################사용자 구분 코드################################

  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
=======
  const onClick = () => {
    history.push("/rg/nh-location");
>>>>>>> aa1205a45888d534cef61695cc2ee20f4dca20dc
  }
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