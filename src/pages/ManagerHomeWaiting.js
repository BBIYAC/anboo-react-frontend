import React,{useState, useEffect} from "react";
import NoticeWaitingBlock from '../components/molecules/Block/NoticeWaitingBlock';
import {IoIosArrowBack} from 'react-icons/io';
import {BiLogOut} from 'react-icons/bi';
import ManagerBelowBarBlock from '../components/molecules/Block/ManagerBelowBarBlock';
import axios from "axios";
import { useHistory } from "react-router";

const ManagerHomeWaiting = () => {
    let history = useHistory();
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
            history.push('/mg/home');
        }else if(key === 4){ // 승인 관리자
            console.log('승인');
        }
        }).catch(error => { // access token 없는 경우(비회원)
            history.push('/');
        })
    },[])
    // ################################사용자 구분 코드################################
    const onSigninClick = () => {
        setHeaders({Authorization : 'Bearer ' + localStorage.removeItem('accessToken')});
        window.location.reload();
      }
    return(
        <>
            <div className="header">
              <IoIosArrowBack opacity='0' size="20"/>
              관리자 홈
              <BiLogOut size="20" onClick={onSigninClick}/>
            </div>
            <NoticeWaitingBlock isManager />
        </>
    );
};

export default ManagerHomeWaiting;