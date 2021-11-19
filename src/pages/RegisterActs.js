import React, {useState, useEffect} from 'react';
import NursingHomeActBlock from '../components/molecules/Block/NursingHomeActBlock';
import BelowBarBlock from '../components/molecules/Block/BelowBarBlock';
import { BiLogOut } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import '../components/atoms/Label/Label.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from './ApiURL';


const  RegisterActs= () => {
  const NursingHomeActs = [
    {url: '', content:'오늘은 윷놀이를 했어요~', date:'2021년 10월 29일'},
    {url: '', content:'오늘은 윷놀이를 했어요~', date:'2021년 10월 29일'},
    {url: '', content:'오늘은 윷놀이를 했어요~', date:'2021년 10월 29일'},
  ]
  /*
  axios request GET
  */

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
        history.push('/rg/nh-location');
    })
  },[])
  // ################################사용자 구분 코드################################

  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }

  const [acts, setActs] = useState([]);
  useEffect(()=>{
    setActs(NursingHomeActs);
  },[])

  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack opacity="0" size="20"/>
        요양원 활동 목록
        <Link className="linkComponent" to="/">
          <BiLogOut className="BiLogOut" size="20" onClick={onLogoutClick}/>
        </Link>
      </div>
      <ul>
        {
          acts.map((contents, idx)=>(
            <li><NursingHomeActBlock contents={contents} key={idx} /></li>
          ))
        }
      </ul>
      <BelowBarBlock isHome/>
    </React.Fragment>
  );
};

export default RegisterActs;