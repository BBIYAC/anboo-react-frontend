import React, {useState, useEffect} from 'react';
import NursingHomeInfo from '../components/templates/ManagerNHInfo/NursingHomeInfo';
import NursingHomeInfoEdit from '../components/templates/ManagerNHInfo/NursingHomeInfoEdit';
import axios from 'axios';
import { useHistory } from 'react-router';
import { apiUrl } from './ApiURL';
import '../components/atoms/Button/Button.css';

const ManagerNhInfo= () => {
  const [isEdit, setIsEdit] = useState(false);

  // 요양원 정보
  const [id, setId] = useState('');
  const [name, setName] = useState('요양원 이름');
  const [tel, setTel] = useState('01012345678');
  const [address, setAddress] = useState('요양원 주소');
  const [image, setImage] = useState('');
  const [time, setTime] = useState('요양원 운영시간');
  const [starRating, setStarRating] = useState('');

  // 요양원장 정보
  const [chiefName, setChiefName] = useState('');
  const [chiefTel, setChiefTel] = useState('');
  const [chiefImage, setChiefImage] = useState('');

  // 요양원 관리자 정보 리스트
  const [membersArray, setMembersArray] = useState([]);


  // 회원 비회원
  const [isNotMember, setIsNotMember] = useState(false);

  const [images, setImages] = useState([]);
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  let history = useHistory();
  
  
  const detailGet = () => {
    // 요양원 상세정보 GET
    axios({url:`${apiUrl}/supervisor/nh-info/`, method: 'get',headers:headers})
    .then(response => {
      console.log(response)
      setId(response.data.nh_info.id);
      setName(response.data.nh_info.nh_name);
      setTel(response.data.nh_info.nh_tel);
      setAddress(response.data.nh_info.nh_address);
      setImage(response.data.nh_info.nh_representative_image);
      setImages(response.data.nh_images);
      setTime(response.data.nh_info.nh_operating_hour);
      setStarRating(response.data.nh_star_avg);
      console.log(response.data.nh_info)

      // 관리자 상세정보 GET
      axios({url:`${apiUrl}/not-nok/employee-info/${response.data.nh_info.id}/`, method: 'get', headers:headers})
      .then(response => {
        setChiefName(response.data.employee_info[0].nh_employee_name);
        setChiefTel(response.data.employee_info[0].nh_employee_tel);
        setChiefImage(response.data.employee_info[0].image);
        setMembersArray(response.data.employee_info);
      })
      .catch(error => {
        setChiefName('');
        setChiefTel('');
        setChiefImage('');
        setMembersArray([]);
      })
    })
    .catch(error => {
      
    })
  }

  useEffect(()=>{
    // 사용자 구분 GET
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        history.push('/rg/nh-location');
      }else if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 3){ // 미승인 관리자
        history.push('/mg/home');
      }else if(key === 4){ // 승인 관리자
        detailGet();
        setIsNotMember(true);
      }else{ // 비회원
        history.push('/');
      }
    }).catch(error => {
        console.error(error)
    })
  },[headers])


  const onSigninClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
  }


  return (
    <React.Fragment>
      {isEdit
      ? <NursingHomeInfoEdit 
        onClick={()=>setIsEdit(false)} 
        onSigninClick={onSigninClick} 
        nh_id={id}
        nh_name={name}
        nh_tel={tel}
        nh_address={address}
        nh_image={image} 
        nh_images={images}
        chiefName={chiefName}
        chiefTel={chiefTel}
        chiefImage={chiefImage}
        membersArray={membersArray}
        time={time}/>
      : <NursingHomeInfo 
        onClick={()=>setIsEdit(true)} 
        onSigninClick={onSigninClick} 
        isNotMember={isNotMember}
        nh_name={name}
        nh_tel={tel}
        nh_address={address} 
        nh_image={image} 
        nh_images={images}
        chiefName={chiefName}
        chiefTel={
          0 + chiefTel.substring(3,5)
          +'-'+chiefTel.substring(5,9)
          +'-'+chiefTel.substring(9,13)} 
        chiefImage={chiefImage}
        membersArray={membersArray}
        time={time}
        starRating={starRating}/>}
    </React.Fragment>
  );
};

export default ManagerNhInfo;