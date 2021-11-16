import React, {useState} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import {BiLogOut} from 'react-icons/bi';
import RequestBlock from '../components/molecules/Block/RequestBlock';
import ManagerBelowBarBlock from '../components/molecules/Block/ManagerBelowBarBlock';
import Floating from '../components/atoms/Button/Floating';
import { Link } from "react-router-dom";
import { useEffect } from 'react/cjs/react.development';

const  ManagerRequests= () => {
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
        <Link className="linkComponent" to="/">
          <BiLogOut size="20"/>
        </Link>
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