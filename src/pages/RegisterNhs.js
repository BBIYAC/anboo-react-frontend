import React, { useState, useEffect } from 'react';
import Rating from '../components/atoms/Select/Rating';
import Favorites from '../components/atoms/Button/Favorites';
import Floating from '../components/atoms/Button/Floating';
import NursingHomeInfoBlock from '../components/molecules/Block/NursingHomeInfoBlock';
import axios from "axios";
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
  const [btnState, setBtnState] = useState(false);
  const [ratingState, setRatingState] = useState('');
  const [bookmarkedList, setBookmarkedList] = useState([]);
  const [search, setSearch] = useState(history.location.state.cityName);
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})


  const bookMarkAfterSearch = () => {
    // -----------------------------------즐겨찾기-----------------------------------
    if(btnState){
      // 요양원 북마크 리스트 GET
      axios({url:`${apiUrl}/not-nok/bookmark-list/`, method: 'get', headers:headers})
      .then(response=> {
        setBookmarkedList(response.data.objects.bookmarked_nh_id);
      })
      // 북마크된 요양원만 출력
      let bookmarkedArray=[];
      axios({url:`${apiUrl}/nh-info/`, method: 'get'})
      .then(response=>{
        for(let i = 0; i < bookmarkedList.length; i++){
          let idx = bookmarkedList[i];
          for(let j = 0; j < response.data.length; j++){
            if(idx == response.data[j].id){
              bookmarkedArray[i] = response.data[j];
            }
          }
        }
        setNursingHomes(bookmarkedArray);
      })
      
    }else {           // 즐겨찾기 버튼 비활성 이벤트
      axios({url:`${apiUrl}/nh-info/search=${search}/`, method: 'get'})
      .then(response=>{
        setNursingHomes(response.data);
      }).catch(error=> {
        console.error(error);
      })
    }
    // -----------------------------------즐겨찾기-----------------------------------
  }

  const bookMarkBeforeSearch = () => {
    // -----------------------------------즐겨찾기-----------------------------------
    if(btnState){
      // 북마크된 요양원만 출력
      let bookmarkedArray=[];
      axios({url:`${apiUrl}/nh-info/`, method: 'get'})
      .then(response=>{
        for(let i = 0; i < bookmarkedList.length; i++){
          let idx = bookmarkedList[i];
          for(let j = 0; j < response.data.length; j++){
            if(idx == response.data[j].id){
              bookmarkedArray[i] = response.data[j];
            }
          }
        }
        setNursingHomes(bookmarkedArray);
      })
      
    }else {           // 즐겨찾기 버튼 비활성 이벤트
      axios({url:`${apiUrl}/nh-info/`, method: 'get'})
      .then(response=>{
        setNursingHomes(response.data);
      }).catch(error=> {
        console.error(error);
      })
    }
    // -----------------------------------즐겨찾기-----------------------------------
  }


  const ratingAfterSearch = () => {
    // -----------------------------------평점 리스트 필터링-----------------------------------
    let ratingArray = [];
    switch(parseInt(ratingState)){
      case 4:
        console.log("4");
        axios({url:`${apiUrl}/nh-info/search=${search}/`, method: 'get'})
        .then(response=>{
          for(let i = 0; i < response.data.length; i++){
            if(response.data[i].star_avg >= 4 && response.data[i].star_avg < 5){
              ratingArray[i] = response.data[i];
            }
          }
          setNursingHomes(ratingArray);
        }).catch(error=> {
          console.error(error);
        })
        break;
      case 3:
        console.log("3");
        axios({url:`${apiUrl}/nh-info/search=${search}/`, method: 'get'})
        .then(response=>{
          for(let i = 0; i < response.data.length; i++){
            if(response.data[i].star_avg >= 3 && response.data[i].star_avg < 4){
              ratingArray[i] = response.data[i];
            }
          }
          setNursingHomes(ratingArray);
        }).catch(error=> {
          console.error(error);
        })
        break;
      case 2:
        console.log("2");
        axios({url:`${apiUrl}/nh-info/search=${search}/`, method: 'get'})
        .then(response=>{
          for(let i = 0; i < response.data.length; i++){
            if(response.data[i].star_avg >= 2 && response.data[i].star_avg < 3){
              ratingArray[i] = response.data[i];
            }
          }
          setNursingHomes(ratingArray);
        }).catch(error=> {
          console.error(error);
        })
        break;
      case 1:
        console.log("1");
        axios({url:`${apiUrl}/nh-info/search=${search}/`, method: 'get'})
        .then(response=>{
          for(let i = 0; i < response.data.length; i++){
            if(response.data[i].star_avg >= 1 && response.data[i].star_avg < 2){
              ratingArray[i] = response.data[i];
            }
          }
          setNursingHomes(ratingArray);
        }).catch(error=> {
          console.error(error);
        })
        break;
      default:
        return;
    }
    // -----------------------------------평점 리스트 필터링-----------------------------------
  }


  const ratingBeforeSearch = () => {
    // -----------------------------------평점 리스트 필터링-----------------------------------
    let ratingArray = [];
    switch(parseInt(ratingState)){
      case 4:
        console.log("4");
        axios({url:`${apiUrl}/nh-info/`, method: 'get'})
        .then(response=>{
          for(let i = 0; i < response.data.length; i++){
            if(response.data[i].star_avg >= 4 && response.data[i].star_avg < 5){
              ratingArray[i] = response.data[i];
            }
          }
          setNursingHomes(ratingArray);
        }).catch(error=> {
          console.error(error);
        })
        break;
      case 3:
        console.log("3");
        axios({url:`${apiUrl}/nh-info/`, method: 'get'})
        .then(response=>{
          for(let i = 0; i < response.data.length; i++){
            if(response.data[i].star_avg >= 3 && response.data[i].star_avg < 4){
              ratingArray[i] = response.data[i];
            }
          }
          setNursingHomes(ratingArray);
        }).catch(error=> {
          console.error(error);
        })
        break;
      case 2:
        console.log("2");
        axios({url:`${apiUrl}/nh-info/`, method: 'get'})
        .then(response=>{
          for(let i = 0; i < response.data.length; i++){
            if(response.data[i].star_avg >= 2 && response.data[i].star_avg < 3){
              ratingArray[i] = response.data[i];
            }
          }
          setNursingHomes(ratingArray);
        }).catch(error=> {
          console.error(error);
        })
        break;
      case 1:
        console.log("1");
        axios({url:`${apiUrl}/nh-info/`, method: 'get'})
        .then(response=>{
          for(let i = 0; i < response.data.length; i++){
            if(response.data[i].star_avg >= 1 && response.data[i].star_avg < 2){
              ratingArray[i] = response.data[i];
            }
          }
          setNursingHomes(ratingArray);
        }).catch(error=> {
          console.error(error);
        })
        break;
      default:
        return;
    }
    // -----------------------------------평점 리스트 필터링-----------------------------------
  }


  useEffect(()=>{
    if(headers.Authorization.split(" ")[1] === "null"){
      headers.Authorization = '';
    };

    // 사용자 구분 GET
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        // axios 미등록 보호자인지 등록 대기중인지 GET
        axios({url:`${apiUrl}/not-nok/waiting-for-nh-approval/`, method: 'get', headers:headers})
        .then(response=>{
          if(response.data.is_waiting){
            history.push('/rg/profile') // 등록 대기 중
          }else{
            setIsMember(true);
            // 요양원 북마크 리스트 GET
            axios({url:`${apiUrl}/not-nok/bookmark-list/`, method: 'get', headers:headers})
            .then(response=> {
              setBookmarkedList(response.data.objects.bookmarked_nh_id);
            })

            if(search){         // 검색어가 있을 때
              axios({url:`${apiUrl}/nh-info/search=${search}/`, method: 'get'})
              .then(response=>{
                setNursingHomes(response.data);
              }).catch(error=> {
                console.error(error);
              })

              bookMarkAfterSearch();
              ratingAfterSearch();

            }else{              // 검색어가 없을 때
              axios({url:`${apiUrl}/nh-info/`, method: 'get'})
              .then(response=>{
                setNursingHomes(response.data);
              }).catch(error=> {
                console.error(error);
              })
              
              bookMarkBeforeSearch();
              ratingBeforeSearch();
            }
          }
        })
        
        
      }else if(key === 2){                    // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 3){                    // 미승인 관리자
        history.push('/mg/home');
      }else if(key === 4){                    // 승인 관리자
        history.push('/mg/home');
      }else if(key === 6){                    // 비회원
        setIsMember(false);
        axios({url:`${apiUrl}/not-nok/bookmark-list/`, method: 'get'})
        .then(response=> {
          setBookmarkedList(response.data.objects.bookmarked_nh_id);
        })

        if(search){                           // 검색어가 있을 때
          axios({url:`${apiUrl}/nh-info/search=${search}/`, method: 'get'})
          .then(response=>{
            setNursingHomes(response.data);
          }).catch(error=> {
            console.error(error);
          })

          ratingAfterSearch();
          
        }else{                                // 검색어가 없을 때
          axios({url:`${apiUrl}/nh-info/`, method: 'get'})
          .then(response=>{
            setNursingHomes(response.data);
          }).catch(error=> {
            console.error(error);
          })

          ratingBeforeSearch();
          
        }
        
      }else{ // 관리자 승인 대기
        setUserState('waiting');
      }
    }).catch(error => {
      console.log(error);
    })
  },[search, btnState, ratingState]);
  
  // 로그아웃 이벤트
  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
    history.push('/');
  }
  // 로그인 이벤트
  const onLoginClick = () => {
    history.push('/');
  }

  // 북마크된 요양원 렌더링
  const renderBookmarkedNH = nursingHomes.map((nursingHome, index) => {
    return (
      <NursingHomeInfoBlock nursingHome={nursingHome} key={index}/>
      );
  });
  
  // 요양원 렌더링
  const renderNursingHomes = nursingHomes.map((nursingHome, index) => {
    return (
      <NursingHomeInfoBlock nursingHome={nursingHome} key={index}/>
      );
  });
    
  const onChange = (e) => {
    setSearch(e.target.value);
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
              placeholder={history.location.state.cityName === undefined ? "요양원 이름, 주소 검색하기" : history.location.state.cityName }
              onChange={onChange}
            ></input>
          </div>
					<div className="block-keyword">
            {isMember
              ? <Favorites setBtnState={setBtnState}/>
              : null
            }
						<Rating setRatingState={setRatingState}/>
					</div>
				</div>
      </div>
      <div className="div-nursingHomeScroll">
        {btnState
          ? renderBookmarkedNH
          : renderNursingHomes
        }
      </div>
      <Link className="linkComponent" to="/rg/nh-location">
        <Floating background="var(--color-blue)"/>
      </Link>
    </React.Fragment>
  );
};

export default RegisterNhs;