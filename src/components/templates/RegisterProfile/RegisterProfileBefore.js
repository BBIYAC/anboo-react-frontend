import React, {useState, useEffect} from 'react';
import AddImage from '../../atoms/Input/AddImage';
import Birth from '../../atoms/Input/Birth';
import Caution from '../../atoms/Input/Caution';
import InputSelectBlock from '../../molecules/Block/InputSelectBlock';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import Floating from '../../atoms/Button/Floating';
import RegisterProfileWaiting from '../RegisterProfile/RegisterProfileWaiting';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom';
import SaveModal from '../../organisms/Modal/SaveModal'
import axios from 'axios';
import { apiUrl } from '../../../pages/ApiURL';

const  RegisterProfileBefore= ({nhId}) => {
  const [fillMessage, setFillMessage] = useState(false);
  const [isImage, setIsImage] = useState("");
  const [isRegister, setIsRegister] = useState('');
  const [isGender, setIsGender] = useState('');
  const [isBirth, setIsBirth] = useState('');
  const [isCaution, setIsCaution] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isId, setIsId] = useState('');
  const [waiting, setWaiting] = useState(false);
  const [modalText, setModalText] = useState('');
  const [userState, setUserState] = useState(false);
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken'),  'Content-Type': 'multipart/form-data'})
  const [params, setParams] = useState()
  const onClickSave = () => {
    setFillMessage(true); // 비어있는 input 경고
    if(isRegister && isGender && isBirth){
      const params = {
        "nh_id": isId,
        "np_profile_image": isImage,
        "np_name": isRegister,
        "gender": isGender,
        "np_date": isBirth,
        "memo": isCaution
      }

    
      let np_profile_formdata = new FormData();
      np_profile_formdata.append("nh_id", isId);
      np_profile_formdata.append("np_profile_image", isImage);
      np_profile_formdata.append("np_name", isRegister);
      np_profile_formdata.append("gender", isGender);
      np_profile_formdata.append("np_date", isBirth);
      np_profile_formdata.append("memo", isCaution);

      console.log(params)

      // axios register profile POST
      axios({url:`${apiUrl}/not-nok/np-profile/`, method: 'post', data: np_profile_formdata, headers: headers })
      .then(response => {
        console.log('register profile POST success', response);
        setModalText('저장되었습니다.');
        setIsClicked(true);
      })
    }
  };



  let history = useHistory();
  // ################################사용자 구분 코드################################
  useEffect(()=>{
    if(headers.Authorization.split(" ")[1] === "null"){
      headers.Authorization = '';
    };
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      console.log(nhId)
      let key = response.data.key;
      if(key === 1){ // 미등록 보호자
        axios({url:`${apiUrl}/not-nok/waiting-for-nh-approval/${nhId}/`, method: 'get', headers:headers})
        .then(response=>{
          console.log('success')
          response.data.is_waiting && setWaiting(response.data.is_waiting)
        })
        setIsId(nhId);
        history.push('/rg/profile');
      }else if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 3){ // 미승인 관리자
        history.push('/mg/home')
      }else if(key === 4){ // 승인 관리자
        history.push('/mg/home')
      }else if(key === 6){ // 비회원
        setUserState(false);
      }else{ // 관리자 승인 대기
        history.push('/mg/home')
      }
    }).catch(error => {
    })
  },[])
  // ################################사용자 구분 코드################################

  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
    history.push('/');
  }

  const onBackClick = () => {
    history.goBack(-1);
  }
  
  return (
    <React.Fragment>
      {waiting
      ?<RegisterProfileWaiting />
      :<>
        <div className="header">
          <IoIosArrowBack size="20" onClick={onBackClick}/>
          요양인 프로필
          <BiLogOut size="20" onClick={onLogoutClick}/>
        </div>
          <AddImage url="" setIsImage={setIsImage}/>
          {/* <AddImage url="" /> */}
          <InputSelectBlock setIsRegister={setIsRegister} setIsGender={setIsGender} fillMessage={fillMessage} />
          <Birth setIsBirth={setIsBirth} fillMessage={fillMessage} />
          <Caution setIsCaution={setIsCaution} />
          {
            (isRegister && isGender && isBirth)
            ?<>
            <Link className="linkComponent" to="/rg/profile">
              <RoundRectangle type='button' btnText='요양자 등록 요청하기' onClick={onClickSave}/>
            </Link>
            <SaveModal isClicked={isClicked} setIsClicked={setIsClicked} text={modalText} />
            </>
            :<RoundRectangle type='button' btnText="요양자 등록 요청하기" onClick={onClickSave} />
          }
          <Link className="linkComponent" to="/rg/nh-location">
            <Floating background='var(--color-blue)' />
          </Link>
        </>
      }
    </React.Fragment>
  );
};

export default RegisterProfileBefore;