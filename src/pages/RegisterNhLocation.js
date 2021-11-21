import React, { useState, useEffect } from 'react';
import { AiOutlineAim } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut, BiLogIn } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import { apiUrl } from './ApiURL';
import axios from 'axios';
import '../components/atoms/Button/Button.css';
import '../components/molecules/Block/Block.css';
import { 
  GoogleMap, 
  LoadScript, 
  MarkerClusterer ,
  Marker, } from '@react-google-maps/api';
  
const mapContainerStyle = {
  width: "var(--width)",
  height: "calc(100vh - 180px)",
  marginTop: "1rem",
  marginBottom: "1rem",
};

// 충남 대전 위경도
const locations = [
  // 대전광역시
  // { name: "동구" , lat:36.324082 , lng:127.475089 },     // 동구
  // { name: "중구" , lat:36.280926 , lng:127.411073 },     // 중구
  // { name: "서구" , lat:36.280382 , lng:127.345191 },     // 서구
  // { name: "유성구" , lat:36.377231 , lng:127.333387 },     // 유성구
  // { name: "대덕구" , lat:36.412396 , lng:127.440246 },     // 대덕구
  // 충청남도
  { name: "계룡시" , lat:36.291933 , lng:127.234403 },     // 계룡시
  { name: "공주시" , lat:36.480288 , lng:127.075043 },     // 공주시
  { name: "금산군" , lat:36.119378 , lng:127.478240 },     // 금산군
  { name: "논산시" , lat:36.191263 , lng:127.157623 },     // 논산시
  { name: "당진시" , lat:36.911535 , lng:126.654480 },     // 당진시
  { name: "보령시" , lat:36.333612 , lng:126.612906 },     // 보령시
  { name: "부여군" , lat:36.246767 , lng:126.856818 },     // 부여군
  { name: "서산시" , lat:36.784875 , lng:126.450234 },     // 서산시
  { name: "서천군" , lat:36.080735 , lng:126.691281 },     // 서천군
  { name: "아산시" , lat:36.808837 , lng:126.978682 },     // 아산시
  { name: "예산군" , lat:36.671042 , lng:126.784322 },     // 예산군
  { name: "천안시" , lat:36.804501 , lng:127.202564 },     // 천안시
  { name: "청양군" , lat:36.431013 , lng:126.852949 },     // 청양군
  { name: "태안군" , lat:36.745988 , lng:126.298059 },     // 태안군
  { name: "홍성군" , lat:36.568189 , lng:126.608199 },     // 홍성군
]

const imageOptions = {
  imagePath:
    'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
}

const center = {lat: 36.481275, lng: 128.098754}
const zoom = 6
const restriction = {
  latLngBounds: {
    north: 45,
    south: 25,
    east: 140,
    west: 116,
  },
}
const mapDefaultOptions = {
  disableDefaultUI: true,
  zoom,
  center,
  minZoom: zoom - 2,
  maxZoom: zoom + 14,
  restriction,
}

const createKey = (location) => {
  return location.lat + location.lng
}

const RegisterNhLocation = () => {
  const [latitude, setLat] = useState(null);
  const [longitude, setLng] = useState(null);
  const center = {lat: latitude, lng: longitude};
  const [userState, setUserState] = useState('');
  const [logState, setLogState] = useState(false);
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem("accessToken")});
  
  
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setLat(null);
        setLng(null);
      }, () => {});
    } else {}
  }

  // 각 지역 마다의 요양원 개수를 label로 출력하는 코드입니다.
  // const markerLabel = {
  //   text: "00시",
  //   fontSize: "8px",
  //   fontWeight: "bold",
  //   color: "black",
  // };
  
  let history = useHistory();
  
  useEffect(()=>{         // 마운트 될 시 바로 실행되는 코드
    // 키 값 보는 if문 코드
    if(headers.Authorization.split(" ")[1] === "null"){
      headers.Authorization = '';
    };
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      console.log(key);
      console.log(response.data);
      if(key === 1){ // 미등록 보호자
        setLogState(false);
      }else if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 3){ // 미승인 관리자
        setUserState('before');
      }else if(key === 4){ // 승인 관리자
        setUserState('after');
      }else if(key === 6){ // 비회원
        setLogState(true);
      }else{ // 관리자 승인 대기
        setUserState('waiting');
      }
    }).catch(error => { // 로그인 token 없는 경우(비회원)
    })
  },[])
  
  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
    history.push('/');
  }

  const onLoginClick = ()  => {
    history.push('/');
  }
  
  return (
    <LoadScript googleMapsApiKey="AIzaSyC526zoNUjyiZlFOXmIy7_KGgaxcj7ecIo">
    <div className="header">
      <IoIosArrowBack opacity="0" size="20"/>
      요양원 위치
      {logState?<BiLogIn size="20" onClick={onLoginClick}/>:<BiLogOut size="20" onClick={onLogoutClick}/>}
    </div>
    <div className="block-location">
      <div className="box-location">
        <button className="btn_search" 
        onClick={()=>history.push({pathname: '/rg/nhs', state:{allList: true, searchDefault: true}})}>요양원 이름, 주소 검색하기</button>
        <button className="btn-myLocation" 
        onClick={getLocation}><AiOutlineAim size="25"/></button>
      </div>
    </div>
    <GoogleMap 
    mapContainerStyle={mapContainerStyle}
    options={mapDefaultOptions}
    center={center}
    // 0: earth, 3: continent, 4: large islands, 6: large rivers
    // 10: large roads, 15: buildings, ~20
    zoom={6}>
      <MarkerClusterer 
      options={imageOptions}
      averageCenter={true}
      minimumClusterSize={5}
      gridSize={50}>
        {(clusterer) =>
          locations.map((location) => (
            <Marker 
            key={createKey(location)} 
            position={location}
            clusterer={clusterer}
            clickable={true}
            icon={require("./marker.png").default}
            // label={markerLabel}
            onClick={()=>history.push({pathname: '/rg/nhs', state: {cityName: location.name}})}
            />
          ))
        }
      </MarkerClusterer>
    </GoogleMap>
  </LoadScript>
  );
};

export default RegisterNhLocation;

