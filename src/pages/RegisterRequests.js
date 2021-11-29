import React, {useState, useEffect} from 'react';
import { BiLogOut } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import AddPost from '../components/atoms/Button/AddPost';
import RequestBlock from '../components/molecules/Block/RequestBlock';
import BelowBarBlock from '../components/molecules/Block/BelowBarBlock';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from './ApiURL';

const  RegisterRequests = () => {
  const [requests, setRequests] = useState([]);
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
        return;
      }else if(key === 3 || key === 4){ // 미승인 관리자 & 승인 관리자 & 승인 대기
        history.push('/mg/home');
      }else{ // 비회원의 경우
        history.push('/');
      }
    }).catch(error => { 
        console.error(error);
    })

    // axios request GET - 요청사항 확인
    axios({url:`${apiUrl}/nok/requests/get/`,method : 'get' ,headers: headers})
    .then(response =>{
      setRequests(response.data);
    }).catch(error => {
        console.error(error);
    })
  },[headers])

  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
    // history.push('/');
  }

  return (
      <React.Fragment>
          <div className="header">
              <IoIosArrowBack opacity="0" size="20"/>
              요청사항 목록
              <BiLogOut size="20" onClick={onLogoutClick}/>
          </div>
          <Link className="linkComponent" to="/rg/post-request">
            <AddPost className='register' />
          </Link>
          {
            requests.reverse().map((request, idx)=>(
              <RequestBlock 
                requestTitle='' 
                requestContent={request.context} 
                requestDate={request.uploaded_date} 
                response={request.comment} 
                key={idx}
              />
            ))
          }
          <BelowBarBlock isRequest/>
      </React.Fragment>
  );
};

export default RegisterRequests;