import React from "react";
import NursingHomeInfoCheckBlock from '../../molecules/Block/NursingHomeInfoCheckBlock';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import AddCertificationFile from '../../atoms/Input/AddCertificationFile';
import NoticeBlock from '../../molecules/Block/NoticeBlock';
import { FaSearch } from 'react-icons/fa';
import './ManagerHome.css';
const axios = require('axios');

const ManagerHomeBefore = () => {
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

