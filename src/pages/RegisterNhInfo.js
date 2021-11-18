import React, {useEffect, useState} from 'react';
import NursingHomeDetailInfoBlock from '../components/molecules/Block/NursingHomeDetailInfoBlock';
import NursingHomeChiefInfoBlock from '../components/molecules/Block/NursingHomeChiefInfoBlock';
import NursingHomeManagerInfoBlock from '../components/molecules/Block/NursingHomeManagerInfoBlock';
import NursingHomeImageBlock from '../components/molecules/Block/NursingHomeImageBlock';
import BelowRectangleBlock from '../components/molecules/Block/BelowRectangleBlock';
import Floating from '../components/atoms/Button/Floating';
import NotMemberNotice from '../components/atoms/Label/NotMemberNotice';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { apiUrl } from './ApiURL';

const  RegisterNhInfo= () => {
  let history = useHistory();
  const [nhInfo, setNHInfo] = useState("");
  const [isNotMember, setIsNotMember] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  // ################################사용자 구분 코드################################
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  useEffect(()=>{
    console.log(history.location.state.id);
    console.log(history.location.state.starRating);
    if(headers.Authorization.split(" ")[1] === "null"){
      headers.Authorization = '';
    };
    console.log(headers);

    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 3){ // 미승인 관리자
        history.push('/mg/home');
      }else if(key === 4){ // 승인 관리자
        history.push('/mg/home');
      }else if(key === 6){ // 비회원
        console.log(`${apiUrl}/nh-info/${history.location.state.id}/`)
        axios({url:`${apiUrl}/nh-info/${history.location.state.id}/`, method: 'get'})
        .then(response => {
          console.log(response);
          setIsNotMember(true);
          setName(response.data.nh_name);
          setAddress(response.data.nh_address);
        })
      }else{ // 관리자 승인 대기
        history.push('/mg/home');
      }
    }).catch(error => { // 로그인 token 없는 경우(비회원)
    })
  },[])
  // ################################사용자 구분 코드################################

  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }

  const onClick = () => {
    history.goBack(-1);
  }
  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack size="20" onClick={onClick}/>
        요양원 정보
        <Link className="linkComponent" to="/">
          <BiLogOut size="20" onClick={onLogoutClick}/>
        </Link>
      </div>
      <NursingHomeDetailInfoBlock name={name} address={address} starRating={history.location.state.starRating}/>
      <hr/>
      {isNotMember
      ?<NotMemberNotice/>
      :<div>
      <NursingHomeChiefInfoBlock />
      <hr/>
      <NursingHomeManagerInfoBlock />
      <NursingHomeImageBlock />
      <BelowRectangleBlock />
      </div>
      }
      <Link className="linkComponent" to="/rg/nh-location">
        <Floating background="var(--color-blue)"/>
      </Link>
    </React.Fragment>
  );
};

export default RegisterNhInfo;