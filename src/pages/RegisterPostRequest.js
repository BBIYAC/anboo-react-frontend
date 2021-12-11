import React, {useState, useEffect} from 'react';
import PostRequestTextArea from '../components/atoms/Input/PostRequestTextArea';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import BelowBarBlock from '../components/molecules/Block/BelowBarBlock';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { apiUrl } from './ApiURL';


const  RegisterPostRequest= () => {
  const [request, setRequest] = useState('');
  const [clicked, setClicked] = useState(false);
  const onChange = (e) =>{
    setRequest(e.target.value);
  }
  let history = useHistory();
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  useEffect(()=>{
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
  },[headers])

  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }

  const onClick = () => {
    setClicked(true);
    if(request){
      console.log(request);
      // axios request post in register request POST
      axios({url:`${apiUrl}/nok/requests/post/`,method : 'post' ,headers: headers, data: {
        title: '보호자',
        context: request,
      }})
      .then(response =>{
        console.log(response);
        history.push('/rg/requests');
        
      }).catch(error => {
          console.error(error);
      })
    }
  }

  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack size="20" onClick={()=>history.goBack(-1)}/>
        요청사항 작성
        <Link className="linkComponent" to="/">
          <BiLogOut size="20" onClick={onLogoutClick}/>
        </Link>
      </div>
      <PostRequestTextArea request={request} setRequest={setRequest} onChange={onChange} />
      {clicked && request === '' && <div className='notice-massage'>※ 필수로 입력해주세요.</div>}
      {
        clicked
        ?<Link className="linkComponent" to="/rg/requests">
          <RoundRectangle type='submit' btnText="요청사항 보내기" onClick={onClick}/>
        </Link>
        :<RoundRectangle type='submit' btnText="요청사항 보내기" onClick={onClick}/>
      }
      
      <BelowBarBlock isRequest />
    </React.Fragment>
  );
};

export default RegisterPostRequest;