import React, {useState, useEffect} from "react";
import NursingHomeInfoCheckBlock from '../../molecules/Block/NursingHomeInfoCheckBlock';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import AddCertificationFile from '../../atoms/Input/AddCertificationFile';
import NoticeBlock from '../../molecules/Block/NoticeBlock';
import { FaSearch } from 'react-icons/fa';
import './ManagerHome.css';
import { useHistory } from "react-router";
import axios from 'axios';
import { apiUrl } from "../../../pages/ApiURL";

const ManagerHomeBefore = () => {
  const [search, setSearch] = useState('');
  const [uploadFiles, setUploadFiles] = useState([]);
  const [nursingHome, setNursingHome] = useState();
  let history = useHistory();
  const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')}
  const onChange = (e) => {
    setSearch(e.target.value);
  }
  const onClick = () => {
    // axios 파일 등록 후 승인 요청 POST
    var formData = new FormData();
    formData.append('nh_id', nursingHome);
    formData.append('documentary_evidence_file', uploadFiles);

    axios({url: `${apiUrl}/supervisor/document-evidence/` ,method : 'post' ,headers:headers, data:formData})
    .then(response =>{
      console.log('post success!!', response);
    }).catch(error => {
        console.error(error);
    });
    console.log('nursingHome:', nursingHome);
    console.log('uploadFiles:', uploadFiles);
  }
    return(
        <React.Fragment>
            <NoticeBlock />
            <div className="box-search">
              <input className="searchBox" type="text" placeholder="요양원 이름, 주소, 지역 검색" onChange={onChange}></input>
              <button className="search-icon"><FaSearch size="20"/></button>
            </div>
            <hr/>
            <div className="div-NursingHomeInfoCheckBlockList">
              <NursingHomeInfoCheckBlock search={search} setNursingHome={setNursingHome} />
            </div>
            <AddCertificationFile setUploadFiles={setUploadFiles} />
            <RoundRectangle type='button' btnText='요양원 등록 요청하기' background='var(--color-green)' onClick={onClick} />
        </React.Fragment>
    );
};

export default ManagerHomeBefore;
