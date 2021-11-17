import React, { useState, useEffect } from 'react';
import Rating from '../components/atoms/Select/Rating';
import Religion from '../components/atoms/Select/Religion';
import Favorites from '../components/atoms/Button/Favorites';
import NursingHomeInfoBlock from '../components/molecules/Block/NursingHomeInfoBlock';
import Floating from '../components/atoms/Button/Floating';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom';
import '../components/atoms/Button/Button.css';
import '../components/molecules/Block/Block.css';
import '../components/atoms/Label/Label.css';
import axios from "axios";

const RegisterNhs= () => {
  let history = useHistory();
  const [userState, setUserState] = useState('');
  // ################################사용자 구분 코드################################
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  const apiUrl =  'http://ec2-54-180-93-130.ap-northeast-2.compute.amazonaws.com';
  useEffect(()=>{
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
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
  return (
    <React.Fragment>
      <div className="header-contain">
        <div className="header">
          <Link className="linkComponent" to="/rg/nh-location">
            <IoIosArrowBack size="20"/>
          </Link>
          요양원 리스트
          <Link className="linkComponent" to="/">
            <BiLogOut size="20" onClick={onLogoutClick}/>
          </Link>
        </div>
        <div className="block-search">
          <div className="box-search">
            <input className="searchBox" type="text" placeholder="요양원 이름, 주소, 지역 검색"></input>
            <button className="search-icon"><FaSearch size="20" color="var(--color-dark-gray)"/></button>
          </div>
					<div className="block-keyword">
						<Favorites />
						<Rating />
						<Religion />
					</div>
				</div>
      </div>
      <NursingHomeInfoBlock />
      <Link className="linkComponent" to="/rg/nh-location">
        <Floating background="var(--color-blue)"/>
      </Link>
    </React.Fragment>
  );
};

export default RegisterNhs;