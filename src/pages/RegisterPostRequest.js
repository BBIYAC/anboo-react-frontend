import React, {useState, useEffect} from 'react';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import BelowBarBlock from '../components/molecules/Block/BelowBarBlock';
import PostRequestTextArea from '../components/atoms/Input/PostRequestTextArea';
import RequestDate from '../components/atoms/Label/RequestDate';
import axios from 'axios';
import { BiLogOut } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useHistory } from 'react-router-dom';
import { apiUrl } from './ApiURL';


const  RegisterPostRequest= () => {
  const [request, setRequest] = useState('');
  const [clicked, setClicked] = useState(false);
  const onChange = (e) =>{
    setRequest(e.target.value);
  }
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
        history.push('/rg/post-request');
    })
  },[])
  // ################################사용자 구분 코드################################

  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }

  const onClick = () => {
    setClicked(true);
    if(request){
      console.log(request);
      /*
      axios request post in register request POST
      */
    }
  }

  return (
    <React.Fragment>
      <div className="header">
        <Link className="linkComponent" to="/rg/requests">
          <IoIosArrowBack size="20"/>
        </Link>
        요청사항 작성
        <Link className="linkComponent" to="/">
          <BiLogOut size="20" onClick={onLogoutClick}/>
        </Link>
      </div>
      <PostRequestTextArea request={request} setRequest={setRequest} onChange={onChange} />
      {clicked && request === '' && <div className='notice-massage'>※ 필수로 입력해주세요.</div>}
      <RequestDate />
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