import React, {useState} from "react";
import NursingHomeInfoCheckBlock from '../../molecules/Block/NursingHomeInfoCheckBlock';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import AddCertificationFile from '../../atoms/Input/AddCertificationFile';
import NoticeBlock from '../../molecules/Block/NoticeBlock';
import { FaSearch } from 'react-icons/fa';
import './ManagerHome.css';
import axios from 'axios';
import { apiUrl } from "../../../pages/ApiURL";

const ManagerHomeBefore = () => {
  const [search, setSearch] = useState('');
  const [uploadFiles, setUploadFiles] = useState([]);
  const [nursingHome, setNursingHome] = useState();
  const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken'),
                  'Content-Type': 'multipart/form-data'}
  const onChange = (e) => {
    setSearch(e.target.value);
  }
  const onClick = () => {
    // axios 파일 등록 후 승인 요청 POST
    var formData = new FormData();
    formData.append('nh_id', nursingHome);
    uploadFiles.forEach((file)=> formData.append('documentary_evidence_file', file));

    axios({url: `${apiUrl}/supervisor/document-evidence/` ,method : 'post' ,headers:headers, data:formData})
    .then(response =>{
      window.location.reload();
    }).catch(error => {
        console.error(error);
    });
  }
    return(
      <React.Fragment>
        <NoticeBlock />
        <div className="box-search">
          <input className="searchBox" type="text" placeholder="요양원 이름, 주소, 지역 검색" onChange={onChange}></input>
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
