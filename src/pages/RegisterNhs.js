import React, { useState, useEffect } from 'react';
import Rating from '../components/atoms/Select/Rating';
import Religion from '../components/atoms/Select/Religion';
import Favorites from '../components/atoms/Button/Favorites';
import Floating from '../components/atoms/Button/Floating';
import NursingHomeInfoBlock from '../components/molecules/Block/NursingHomeInfoBlock';
import axios from "axios";
import { FaSearch } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { apiUrl } from './ApiURL';
import '../components/atoms/Button/Button.css';
import '../components/molecules/Block/Block.css';
import '../components/atoms/Label/Label.css';

const RegisterNhs= () => {
  // ################################사용자 구분 코드################################
  let history = useHistory();
  let arr = [];
  const [userState, setUserState] = useState('');
  const [nursingHomes, setNursingHomes] = useState([]);
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  useEffect(()=>{
    if(headers.Authorization.split(" ")[1] === "null"){
      headers.Authorization = '';
    };
    console.log(headers);
    console.log(history.location.state.key);
    console.log(history.location.state.cityName);
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      console.log(key);
      if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 3){ // 미승인 관리자
        setUserState('before');
      }else if(key === 4){ // 승인 관리자
        setUserState('after');
      }else if(key === 6){  // 비회원
        axios({url:`${apiUrl}/nh-info/search=${history.location.state.cityName}/`, method: 'get'})
        .then(response=>{
          for(let i = 0; i < response.data.length; i++){
            arr[i] = response.data[i];
            // console.log(response.data[i])        // 요양원 리스트 데이터
          }
          setNursingHomes(arr);

        })
      }else{ // 관리자 승인 대기
        setUserState('waiting');
      }
    }).catch(error => { // 로그인 token 없는 경우(비회원)
    })
  },[])
  // ################################사용자 구분 코드################################
  
  // 로그아웃 처리 코드
  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }

  // 요양원 개수만큼 반복
  const renderNursingHomes = nursingHomes.map(nursingHome => {
    return (
      <NursingHomeInfoBlock nursingHome={nursingHome}/>
    );
  });

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
            <input 
            className="searchBox"
            type="text"
            // 지도 화면에서 마커를 클릭할 시와 클릭하지 않고 상단의 검색하러 가기 버튼을 누를 시 이벤트를 다르게 하기 위함.
            placeholder={
              history.location.state.searchDefault==="요양원 이름, 주소, 지역 검색하기"
              ? "요양원 이름, 주소, 지역 검색하기"
              : history.location.state.cityName
              }>
            </input>
            <button className="search-icon"><FaSearch size="20"/></button>
          </div>
					<div className="block-keyword">
						<Favorites />
						<Rating />
						<Religion />
					</div>
				</div>
      </div>
      <div className="div-nursingHomeScroll">
        {renderNursingHomes}
      </div>
      <Link className="linkComponent" to="/rg/nh-location">
        <Floating background="var(--color-blue)"/>
      </Link>
    </React.Fragment>
  );
};

export default RegisterNhs;