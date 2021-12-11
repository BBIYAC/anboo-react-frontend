import React, {useState, useEffect} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { useHistory } from "react-router-dom";
import {BiLogOut} from 'react-icons/bi';
import { apiUrl } from './ApiURL';
import ManagerBelowBarBlock from '../components/molecules/Block/ManagerBelowBarBlock';
import RequestBlock from '../components/molecules/Block/RequestBlock';
import Floating from '../components/atoms/Button/Floating';
import axios from 'axios';

const  ManagerRequests= () => {
  const [requests, setRequests] = useState([]);
  const [feedback, setFeedback] = useState(false);
  let history = useHistory();
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  useEffect(()=>{
    // axios authentication GET - 사용자 구분
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
        // axios request GET - 요청사항 확인
        axios({url:`${apiUrl}/supervisor/requests/`,method : 'get' ,headers: headers})
        .then(response =>{
          console.log(response.data)
          setRequests(response.data);
        }).catch(error => {
            console.error(error);
        })
      }else{ // 비회원
        history.push('/');
      }
    }).catch(error => { // access token 없는 경우(비회원)
      console.error(error);
        history.push('/');
    })
  },[headers, feedback])
 
  const onSigninClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }
  

  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack opacity='0' size="20"/>
        요청사항
        <BiLogOut size="20" onClick={onSigninClick}/>
      </div>
      {
        requests.sort((a, b)=>{ // 최신 날짜순으로 정렬
          var date1 = a.uploaded_date;
          var date2 = b.uploaded_date;
          if(date1 > date2) return -1;
          if(date1 < date2) return 1;
          return 0;
        }).map((request, idx)=>(
          <RequestBlock 
            requestId={request.id} // 요청사항 식별 ID
            requestTitle={request.requester_name} // 보호자 이름
            requestName={request.np_name} // 요양인 이름
            requestContent={request.context} // 보호자 요청사항 내용
            requestDate={request.uploaded_date} // 요청사항 날짜
            response={request.feed} // 관리자 답변
            setFeedback={setFeedback} // 답변 여부
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