import React, {useState, useEffect} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import {BiLogOut} from 'react-icons/bi';
import RequestBlock from '../components/molecules/Block/RequestBlock';
import ManagerBelowBarBlock from '../components/molecules/Block/ManagerBelowBarBlock';
import Floating from '../components/atoms/Button/Floating';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { apiUrl } from './ApiURL';

const  ManagerRequests= () => {
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
        history.push('/');
    })
  },[headers])
  // ################################사용자 구분 코드################################
  const onSigninClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }
  const [requests, setRequests] = useState([]);
  const requestInfo = [
    { title:'# 박혁거세(박순자님 아들)', content:'박순자님 견과류 알레르기가 있으니 음식에 견과류 넣지 말아주세요!', date:'2021년 10월 28일 20시 34분',  response:'' },
    { title:'# 박혁거세(박순자님 아들)', content:'박순자님 견과류 알레르기가 있으니 음식에 견과류 넣지 말아주세요!', date:'2021년 10월 28일 20시 34분',  response:'네, 확인했습니다.' },
    { title:'# 박혁거세(박순자님 아들)', content:'박순자님 견과류 알레르기가 있으니 음식에 견과류 넣지 말아주세요!', date:'2021년 10월 28일 20시 34분',  response:'박순자님 견과류 금지 확인했습니다 :)' },
  ]
  /*
  axios request GET
  */
  useEffect(()=>{
    setRequests(requestInfo);
  },[])

  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack opacity='0' size="20"/>
        요청사항
        <BiLogOut size="20" onClick={onSigninClick}/>
      </div>
      {
        requests.map((request, idx)=>(
          <RequestBlock 
            requestTitle={request.title} 
            requestContent={request.content} 
            requestDate={request.date} 
            response={request.response} 
            isManager
            key={idx}
          />
        ))
      }
      <Floating background='var(--color-green)' />
      <ManagerBelowBarBlock />
    </React.Fragment>
  );
};

export default ManagerRequests;