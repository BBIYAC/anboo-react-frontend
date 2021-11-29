import React, {useState, useEffect} from 'react';
import NursingHomeActBlock from '../components/molecules/Block/NursingHomeActBlock';
import BelowBarBlock from '../components/molecules/Block/BelowBarBlock';
import { BiLogOut } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import '../components/atoms/Label/Label.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from './ApiURL';


const  RegisterActs= () => {
  const [acts, setActs] = useState([]);
  let history = useHistory();
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  useEffect(()=>{
    
    // axios authentication GET - 사용자 확인
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        history.push('/rg/nh-location');
      }else if(key === 2){ // 등록 보호자
        // axios acts GET - 요양원 활동 목록
        axios({url:`${apiUrl}/nok/nh-activity/`,method : 'get' ,headers:headers})
        .then(response =>{
          console.log(response);
          const posts = [...response.data.posts_for_all, ...response.data.posts_for_me]
          setActs(posts);
        }).catch(error => {
            console.error(error);
        })
      }else if(key === 3 || key === 4){ // 미승인 관리자 & 승인 관리자 & 관리자 승인 대기
        history.push('/mg/home')
      }else{ // 비회원
        history.push('/rg/nh-location');
      }
    }).catch(error => {
        history.push('/');
    })
  },[headers])


  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }

  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack opacity="0" size="20"/>
        요양원 활동 목록
        <BiLogOut size="20" onClick={onLogoutClick}/>
      </div>
      <ul>
        {acts.sort((a, b)=>{ // 최신 날짜순으로 정렬
          var date1 = a.uploaded_date;
          var date2 = b.uploaded_date;
          if(date1 > date2) return -1;
          if(date1 < date2) return 1;
          return 0;
        }).map((contents, idx)=>(
            <li key={idx}><NursingHomeActBlock contents={contents} /></li>
          ))}
      </ul>
      <BelowBarBlock isHome/>
    </React.Fragment>
  );
};

export default RegisterActs;