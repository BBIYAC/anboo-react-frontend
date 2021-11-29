import React, {useEffect, useState} from 'react';
import NursingHomeDetailInfoBlock from '../components/molecules/Block/NursingHomeDetailInfoBlock';
import NursingHomeChiefInfoBlock from '../components/molecules/Block/NursingHomeChiefInfoBlock';
import NursingHomeManagerInfoBlock from '../components/molecules/Block/NursingHomeManagerInfoBlock';
import BelowRectangleBlock from '../components/molecules/Block/BelowRectangleBlock';
import NotMemberNotice from '../components/atoms/Label/NotMemberNotice';
import NotRegisteredNotice from '../components/atoms/Label/NotRegisteredNotice';
import NhImageGrid from '../components/molecules/Block/NhImageGrid';
import Floating from '../components/atoms/Button/Floating';
import NotRegisteredEmptyManagers from '../components/atoms/Label/NotRegisteredEmptyManagers';
import NotRegisteredEmptyActImages from '../components/atoms/Label/NotRegisteredEmptyActImages';
import NotRegisteredEmptyChief from '../components/atoms/Label/NotRegisteredEmptyChief';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { BiLogOut, BiLogIn } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import { apiUrl } from './ApiURL';
import '../components/molecules/Block/Block.css';
import '../components/atoms/Label/Label.css';

const  RegisterNhInfo= () => {
  let history = useHistory();
  const [isNotMember, setIsNotMember] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);
  const [isRegisteredEmpty, setIsRegisteredEmpty] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [tel, setTel] = useState('');
  const [time, setTime] = useState('');
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);
  const [bookMark, setBookMark] = useState(false);
  const [logState, setLogState] = useState(false);
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  const [chiefName, setChiefName] = useState('');
  const [chiefTel, setChiefTel] = useState('');
  const [chiefImage, setChiefImage] = useState('');
  const [membersArray, setMembersArray] = useState([]);

  useEffect(()=>{
    if(headers.Authorization.split(" ")[1] === "null"){
      headers.Authorization = '';
    };
    
    // 사용자 구분 GET
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        
        // 요양원 상세정보 GET
        axios({url:`${apiUrl}/not-nok/nh-info/${history.location.state.id}/`, method: 'get',headers:headers})
        .then(response => {
          console.log(response);
          setName(response.data.nh_info.nh_name);
          setAddress(response.data.nh_info.nh_address);
          setTel(response.data.nh_info.nh_tel);
          setTime(response.data.nh_info.nh_operating_hour)
          setImages(response.data.nh_images)
        })
        // 관리자 상세정보 GET
        axios({url:`${apiUrl}/not-nok/employee-info/${history.location.state.id}/`, method: 'get', headers:headers})
        .then(response => {
          if(response.data.is_registered == false ){     // 요양원이 등록되지 않은 경우
            setIsRegistered(false);
          }else if(response.data.is_registered == true && response.data.employee_info.length != 0 ){        // 요양원이 등록되었고 요양사, 활동 정보가 있을 경우
            setChiefName(response.data.employee_info[0].nh_employee_name);
            setChiefTel(response.data.employee_info[0].nh_employee_tel);
            setChiefImage(response.data.employee_info[0].image);
            setMembersArray(response.data.employee_info);
          }else {                 // 요양원이 등록되었지만 요양사, 활동 정보가 없을 경우
            setIsRegisteredEmpty(true);
          }
        })
        // 요양원 북마크 GET
        axios({url:`${apiUrl}/not-nok/bookmark-list/${history.location.state.id}/`, method: 'get', headers:headers})
        .then(response=> {
          setBookMark(response.data.result);
        })

      }else if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 3){ // 미승인 관리자
        setIsNotMember(false);
        history.push('/mg/home');
      }else if(key === 4){ // 승인 관리자
        setIsNotMember(false);
        history.push('/mg/home');
      }else if(key === 6){ // 비회원
        // 비회원 정보 GET
        axios({url:`${apiUrl}/nh-info/${history.location.state.id}/`, method: 'get'})
        .then(response => {
          console.log(response)
          setIsNotMember(true);
          setName(response.data.nh_name);
          setAddress(response.data.nh_address);
          setTime(response.data.nh_operating_hour);
          setTel(response.data.nh_tel);
          // setImages(response.data.nh_representative_image);
          setLogState(true);
        })
      }else{ // 관리자 승인 대기
        history.push('/mg/home');
      }
    }).catch(error => { 
    })
  },[])

  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
    history.push('/');
  }

  const onLoginClick = () => {
    history.push('/');
  }

  const onClick = () => {
    history.goBack(-1);
  }

  const renderManagers = membersArray.map((member, index) => {
    if(index > 0){
      return(
        <NursingHomeManagerInfoBlock 
        key={index}
        memberName={member.nh_employee_name}
        membersTel={
          0 + member.nh_employee_tel.substring(3,5)
        +'-'+ member.nh_employee_tel.substring(5,9)
        +'-'+ member.nh_employee_tel.substring(9,13)}
        membersImage={member.image} />
      );
    };
  });

  const renderImages = images.map((image, index) => {
    return(
      <NhImageGrid url={image.nh_image} key={index}/>
    );
  });

  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack size="20" onClick={onClick}/>
        요양원 정보
        {logState?<BiLogIn size="20" onClick={onLoginClick}/>:<BiLogOut size="20" onClick={onLogoutClick}/>}
      </div>
      <NursingHomeDetailInfoBlock 
      isNotMember={isNotMember}
      name={name} 
      address={address} 
      tel={tel}
      time={time}
      starRating={history.location.state.starRating}
      bookMark={bookMark}
      id = {history.location.state.id}/>
      <hr/>

      {isNotMember
      ?<NotMemberNotice/>         // 비회원인 경우
      :isRegistered               // 등록된 요양원인 경우
      ?isRegisteredEmpty          // 등록된 요양원이지만 정보가 없는 경우
      ?<>
        <NotRegisteredEmptyChief/>
        <hr/> 
        <NotRegisteredEmptyManagers/>
        <hr/>
        <NotRegisteredEmptyActImages/>
      </>
      :<div>
      <NursingHomeChiefInfoBlock 
      chiefName={chiefName} 
      chiefTel={
        0 + chiefTel.substring(3,5)
        +'-'+chiefTel.substring(5,9)
        +'-'+chiefTel.substring(9,13)} 
      chiefImage={chiefImage} />
      <hr/>
      <div className="div_memberBox">
        { renderManagers }
      </div>
      <hr></hr>
      <div className="grid-container">
        {renderImages}
      </div>
      <BelowRectangleBlock tel={tel} id={history.location.state.id}/>
      </div>
      :<NotRegisteredNotice/>         // 등록되지 않은 요양원인 경우
      }

      <Link className="linkComponent" to="/rg/nh-location">
        <Floating background="var(--color-blue)"/>
      </Link>
    </React.Fragment>
  );
};

export default RegisterNhInfo;