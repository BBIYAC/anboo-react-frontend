import React, {useState} from 'react';
import { AiOutlineAim } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { BiColorFill, BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
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

const locations = [
  // 대전광역시
  { lat:36.327099 , lng:127.475060 },     // 동구
  { lat:36.283761 , lng:127.411601 },     // 중구
  { lat:36.283472 , lng:127.344916 },     // 서구
  { lat:36.380228 , lng:127.333443 },     // 유성구
  { lat:36.414858 , lng:127.440642 },     // 대덕구
  // 충청남도
  { lat:36.299673 , lng:127.231917 },     // 계룡시
  { lat:36.489584 , lng:127.072094 },     // 공주시
  { lat:36.127741 , lng:127.474189 },     // 금산군
  { lat:36.200449 , lng:127.155811 },     // 논산시
  { lat:36.918734 , lng:126.650972 },     // 당진시
  { lat:36.340553 , lng:126.610382 },     // 보령시
  { lat:36.253657 , lng:126.857728 },     // 부여군
  { lat:36.791866 , lng:126.446753 },     // 서산시
  { lat:36.090850 , lng:126.691562 },     // 서천군
  { lat:36.818272 , lng:126.976961 },     // 아산시
  { lat:36.681065 , lng:126.782890 },     // 예산군
  { lat:36.824652 , lng:127.201716 },     // 천안시
  { lat:36.444492 , lng:126.846507 },     // 청양군
  { lat:36.766131 , lng:126.299652 },     // 태안군
  { lat:36.583657 , lng:126.614090 },     // 홍성군
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

  const markerLabel = {
    text: "123",
    fontSize: "8px",
    fontWeight: "bold"
  };

  return (
  <LoadScript googleMapsApiKey="AIzaSyC526zoNUjyiZlFOXmIy7_KGgaxcj7ecIo">
    <div className="header">
      <IoIosArrowBack opacity="0" size="20"/>
      요양원 위치
      <Link className="linkComponent" to="/">
        <BiLogOut size="20"/>
      </Link>
    </div>
    <div className="block-location">
      <div className="box-location">
        <Link className="search_linkComponent" to="/rg/nhs">
          <button className="btn_search">요양원 이름, 주소, 지역 검색하기</button>
        </Link>
        <button className="btn-myLocation" onClick={getLocation}><AiOutlineAim size="25"/></button>
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
            label={markerLabel}
            />
          ))
        }
      </MarkerClusterer>
    </GoogleMap>
  </LoadScript>
  );
};

export default RegisterNhLocation;

