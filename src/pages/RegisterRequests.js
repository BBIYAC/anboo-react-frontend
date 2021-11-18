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
  const requestInfo = [
    { title:'# 박혁거세(박순자님 아들)', content:'박순자님 견과류 알레르기가 있으니 음식에 견과류 넣지 말아주세요!', date:'2021년 10월 28일 20시 34분',  response:'' },
    { title:'# 박혁거세(박순자님 아들)', content:'박순자님 견과류 알레르기가 있으니 음식에 견과류 넣지 말아주세요!', date:'2021년 10월 28일 20시 34분',  response:'네, 확인했습니다.' },
    { title:'# 박혁거세(박순자님 아들)', content:'박순자님 견과류 알레르기가 있으니 음식에 견과류 넣지 말아주세요!', date:'2021년 10월 28일 20시 34분',  response:'박순자님 견과류 금지 확인했습니다 :)' },
  ]
  
  let history = useHistory();
  const [userState, setUserState] = useState('');
  // ################################사용자 구분 코드################################
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  useEffect(()=>{
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        history.push('/rg/nh-location');
      }else if(key === 3){ // 미승인 관리자
        setUserState('before');
      }else if(key === 4){ // 승인 관리자
        setUserState('after');
      }else{ // 관리자 승인 대기
        setUserState('waiting');
      }
    }).catch(error => { // 로그인 token 없는 경우(비회원)
        console.error(error);
        history.push('/rg/requests');
    })
  },[])
  // ################################사용자 구분 코드################################

  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }

  useEffect(()=>{
    setRequests(requestInfo);
  },[])
  return (
      <React.Fragment>
          <div className="header">
              <IoIosArrowBack opacity="0" size="20"/>
              요청사항 목록
              <Link className="linkComponent" to="/">
                <BiLogOut size="20" onClick={onLogoutClick}/>
              </Link>
          </div>
          <Link className="linkComponent" to="/rg/post-request">
            <AddPost className='register' />
          </Link>
          {
            requests.map((request, idx)=>(
              <RequestBlock 
                requestTitle={request.title} 
                requestContent={request.content} 
                requestDate={request.date} 
                response={request.response} 
                key={idx}
              />
            ))
          }
          <BelowBarBlock isRequest/>
      </React.Fragment>
  );
};

export default RegisterRequests;