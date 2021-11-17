import React,{useState, useEffect} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import {BiLogOut} from 'react-icons/bi';
import ManagerBelowBarBlock from '../components/molecules/Block/ManagerBelowBarBlock';
import '../components/atoms/Label/Label.css';
import '../components/molecules/Block/Block.css';
import ManagerHomeBefore from '../components/templates/ManagerHome/ManagerHomeBefore';
import ManagerHomeAfter from '../components/templates/ManagerHome/ManagerHomeAfter';
import { useHistory } from 'react-router-dom';
import axios from "axios";

const ManagerHome = () => {
  let history = useHistory();
  const [userState, setUserState] = useState();

  // ################################사용자 구분 코드################################
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  const apiUrl =  'http://ec2-54-180-93-130.ap-northeast-2.compute.amazonaws.com';
  useEffect(()=>{
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        history.push('/rg/nh-location');
      }else if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 3){ // 미승인 관리자
        // axios supervisor/if-approved-by-admin/ GET 관리자 승인 여부
        setUserState(3); // 요양원 등록 전
        // history.push('/mg/waiting'); // 요양원 승인 대기
      }else if(key === 4){ // 승인 관리자
        setUserState(4);
      }
    }).catch(error => { // access token 없는 경우(비회원)
        history.push('/');
    },[headers]);
  })
  // ################################사용자 구분 코드################################

  const pageState = (state) => {
    switch(state){
      case 4:{
        return <><ManagerHomeAfter />
                 <ManagerBelowBarBlock isHome /></>
      }
      case 3:{
        return <ManagerHomeBefore />
      }
    }
  }

  const onSigninClick = () => {
    setHeaders({Authorization : 'Bearer ' + localStorage.removeItem('accessToken')});
  }
    return (
        <React.Fragment>
            <div className="header">
              <IoIosArrowBack opacity='0' size="20"/>
              관리자 홈
              <BiLogOut size="20" onClick={onSigninClick}/>
            </div>
            {pageState(userState)}
        </React.Fragment>
    );
};

export default ManagerHome;