import React from "react";
import NursingHomeInfoCheckBlock from '../../molecules/Block/NursingHomeInfoCheckBlock';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import AddCertificationFile from '../../atoms/Input/AddCertificationFile';
import NoticeBlock from '../../molecules/Block/NoticeBlock';
import { FaSearch } from 'react-icons/fa';
import './ManagerHome.css';
const axios = require('axios');

const ManagerHomeBefore = () => {
  // ################################아래 코드는 각 화면에 모두 들어갈 코드입니다.################################
  // 사용자 구별을 위한 코드
  const headers = {
    Authorization : 'Bearer ' + localStorage.getItem('accessToken')
  }
  // 서버 주소
  const apiUrl = 'http://ec2-54-180-93-130.ap-northeast-2.compute.amazonaws.com'
  // 데이터를 접근하기 위한 경로
  axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
  // response (서버에서 보내주는) 받아오기
  .then(response => {
      console.log(response)

  }).catch(error => {
      console.error(error)
  })
  // ################################위의 코드는 각 화면에 모두 들어갈 코드입니다.################################
  /* 
  브라우저 개발자 모드 console 창의 Object -> data -> key 값 
  1 : 미등록 보호자 
  2 : 등록보호자 
  3: 미승인 관리자 
  4: 승인된 관리자 
  no key : 비회원 
  */
    return(
        <React.Fragment>
            <NoticeBlock />
            <div className="box-search">
              <input className="searchBox" type="text" placeholder="요양원 이름, 주소, 지역 검색"></input>
              <button className="search-icon"><FaSearch size="20" color="var(--color-dark-gray)"/></button>
            </div>
            <hr/>
            <div className="div-NursingHomeInfoCheckBlockList">
              <NursingHomeInfoCheckBlock />
            </div>
            <AddCertificationFile />
            <RoundRectangle btnText='요양원 등록 요청하기' background='var(--color-green)' />
        </React.Fragment>
    );
};

export default ManagerHomeBefore;

