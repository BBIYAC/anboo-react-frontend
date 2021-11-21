import React, { useState, useEffect } from 'react';
import Rating from '../components/atoms/Select/Rating';
import Favorites from '../components/atoms/Button/Favorites';
import Floating from '../components/atoms/Button/Floating';
import NursingHomeInfoBlock from '../components/molecules/Block/NursingHomeInfoBlock';
import axios from "axios";
import { FaSearch } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut, BiLogIn } from 'react-icons/bi';
import { apiUrl } from './ApiURL';
import '../components/atoms/Button/Button.css';
import '../components/molecules/Block/Block.css';
import '../components/atoms/Label/Label.css';

const RegisterNhs= () => {
  let history = useHistory();
  const [userState, setUserState] = useState('');
  const [nursingHomes, setNursingHomes] = useState([]);
  const [isMember, setIsMember] = useState(true);
  const [search, setSearch] = useState(history.location.state.cityName);
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})

  useEffect(()=>{
    if(headers.Authorization.split(" ")[1] === "null"){
      headers.Authorization = '';
    };
    // 사용자 구분 GET
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        setIsMember(true);
        if(search){
          axios({url:`${apiUrl}/nh-info/search=${search}/`, method: 'get'})
          .then(response=>{
            setNursingHomes(response.data);
          }).catch(error=> {
            console.error(error);
          })
        }else{
          axios({url:`${apiUrl}/nh-info/`, method: 'get'})
          .then(response=>{
            setNursingHomes(response.data);
          }).catch(error=> {
            console.error(error);
          })
        }
      }else if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 3){ // 미승인 관리자
        history.push('/mg/home');
      }else if(key === 4){ // 승인 관리자
        history.push('/mg/home');
      }else if(key === 6){  // 비회원
        setIsMember(false);
        if(search){
          axios({url:`${apiUrl}/nh-info/search=${search}/`, method: 'get'})
          .then(response=>{
            setNursingHomes(response.data);
          }).catch(error=> {
            console.error(error);
          })
        }else{
          axios({url:`${apiUrl}/nh-info/`, method: 'get'})
          .then(response=>{
            setNursingHomes(response.data);
          }).catch(error=> {
            console.error(error);
          })
        }
      }else{ // 관리자 승인 대기
        setUserState('waiting');
      }
    }).catch(error => {
      console.log(error);
    })
  },[search]);
  
  // 로그아웃 이벤트
  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
    history.push('/');
  }
  // 로그인 이벤트
  const onLoginClick = () => {
    history.push('/');
  }

  // 요양원 렌더링
  const renderNursingHomes = nursingHomes.map(nursingHome => {
    return (
      <NursingHomeInfoBlock nursingHome={nursingHome}/>
    );
  });

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  const onFavClick = () => {
    axios({url:`${apiUrl}/nh-info/`, method: 'get'})
    .then(response=>{
      console.log("헤이헤이 리헤이")
    }).catch(error=> {
      console.error(error);
    })
  }

  return (
    <React.Fragment>
      <div className="header-contain">
        <div className="header">
          <Link className="linkComponent" to="/rg/nh-location">
            <IoIosArrowBack size="20"/>
          </Link>
          요양원 리스트
          {isMember?<BiLogOut size="20" onClick={onLogoutClick}/>:<BiLogIn size="20" onClick={onLoginClick}/>}
        </div>
        <div className="block-search">
          <div className="box-search">
            <input 
              className="searchBox"
              type="text"
              // 지도 화면에서 마커를 클릭할 시와 클릭하지 않고 상단의 검색하러 가기 버튼을 누를 시 이벤트를 다르게 하기 위함.
              placeholder="요양원 이름, 주소 검색하기"
              onChange={onChange}
            ></input>
            <button className="search-icon"><FaSearch size="20"/></button>
          </div>
					<div className="block-keyword">
            {isMember
              ? <Favorites onClick={onFavClick}/>
              : null
            }
						<Rating />
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