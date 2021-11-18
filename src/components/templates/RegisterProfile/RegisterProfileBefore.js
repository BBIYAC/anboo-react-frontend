import React, {useState, useEffect} from 'react';
import AddImage from '../../atoms/Input/AddImage';
import Birth from '../../atoms/Input/Birth';
import Caution from '../../atoms/Input/Caution';
import InputSelectBlock from '../../molecules/Block/InputSelectBlock';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import Floating from '../../atoms/Button/Floating';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom';
import SaveModal from '../../organisms/Modal/SaveModal'
import axios from 'axios';
import { apiUrl } from '../../../pages/ApiURL';

const  RegisterProfileBefore= () => {
  const [fillMessage, setFillMessage] = useState(false);
  const [isRegister, setIsRegister] = useState('');
  const [isGender, setIsGender] = useState('');
  const [isBirth, setIsBirth] = useState('');
  const [isCaution, setIsCaution] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [modalText, setModalText] = useState('');

  const onClickSave = () => {
    setFillMessage(true); // 비어있는 input 경고
    if(isRegister && isGender && isBirth){
      setIsClicked(true);
      setModalText('저장되었습니다.');
      console.log({type:'POST', isRegister, isGender, isBirth, isCaution});
      /*
      axios register profile POST
      */
    }
  };

  const [userState, setUserState] = useState('');
  let history = useHistory();
  // ################################사용자 구분 코드################################
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken')})
  useEffect(()=>{
    if(headers.Authorization.split(" ")[1] === "null"){
      headers.Authorization = '';
    };
    axios({url:`${apiUrl}/authentication/check/`,method : 'get' ,headers:headers})
    .then(response =>{
      let key = response.data.key;
      if(key === 2){ // 등록 보호자
        history.push('/rg/acts');
      }else if(key === 3){ // 미승인 관리자
        history.push('/mg/home')
      }else if(key === 4){ // 승인 관리자
        history.push('/mg/home')
      }else{ // 관리자 승인 대기
        history.push('/mg/home')
      }
    }).catch(error => { // 로그인 token 없는 경우(비회원)
        console.error(error);
        history.push('/rg/profile');
    })
  },[])
  // ################################사용자 구분 코드################################

  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
    history.push('/');
  }

  const onBackClick = () => {
    history.push('/rg/nh-info');
  }
  return (
    <React.Fragment>
        <div className="header">
          <IoIosArrowBack size="20" onClick={onBackClick}/>
          요양자 프로필
          <BiLogOut size="20" onClick={onLogoutClick}/>
      </div>
        <AddImage url=""/>
        <InputSelectBlock setIsRegister={setIsRegister} setIsGender={setIsGender} fillMessage={fillMessage} />
        <Birth setIsBirth={setIsBirth} fillMessage={fillMessage} />
        <Caution setIsCaution={setIsCaution} />
        {
          (isRegister && isGender && isBirth)
          ?<><Link className="linkComponent" to="/rg/profile">
              <RoundRectangle type='submit' btnText='요양자 등록 요청하기' onClick={onClickSave}/>
          </Link>
          <SaveModal isClicked={isClicked} setIsClicked={setIsClicked} text={modalText} /></>
          :<RoundRectangle type='button' btnText="요양자 등록 요청하기" onClick={onClickSave} />
        }
        <Link className="linkComponent" to="/">
          <Floating background='var(--color-blue)' />
        </Link>
    </React.Fragment>
  );
};

export default RegisterProfileBefore;