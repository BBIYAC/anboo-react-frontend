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

const  RegisterProfileBefore= ({nhId, setUserState}) => {
  const [fillMessage, setFillMessage] = useState(false);
  const [isImage, setIsImage] = useState("");
  const [isRegister, setIsRegister] = useState('');
  const [isGender, setIsGender] = useState('');
  const [isBirth, setIsBirth] = useState('');
  const [isCaution, setIsCaution] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isId, setIsId] = useState('');
  const [modalText, setModalText] = useState('');
  const [headers, setHeaders] = useState({Authorization : 'Bearer ' + localStorage.getItem('accessToken'),  'Content-Type': 'multipart/form-data'})
  const header = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')};
  const star = 0;

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
      .then(resProfile => {
        // axios star rating POST
        axios({url:`${apiUrl}/nok/star/post/`,method : 'put' ,headers:header, data: {
          star_rating: star
        }})
        .then(resStar =>{
          setModalText('저장되었습니다.');
          setIsClicked(true);
        }).catch(error => {
            console.error(error);
        })
      })
    }
    history.go(0);
  };

  let history = useHistory();

  useEffect(()=>{
    setIsId(nhId);
  },[])

  const onLogoutClick = () => {
    setHeaders({Authorization : localStorage.removeItem('accessToken')});
    history.push('/');
  }

  const onBackClick = () => {
    history.goBack(-1);
  }

  const onSaveClick = () => {
    setUserState(0);
  }
  
  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack size="20" onClick={onBackClick}/>
        요양인 프로필
        <BiLogOut size="20" onClick={onLogoutClick}/>
      </div>
        <AddImage url="" setIsImage={setIsImage}/>
        <InputSelectBlock setIsRegister={setIsRegister} setIsGender={setIsGender} fillMessage={fillMessage} />
        <Birth setIsBirth={setIsBirth} fillMessage={fillMessage} />
        <Caution setIsCaution={setIsCaution} />
        {
          (isRegister && isGender && isBirth)
          ?<>
          <Link className="linkComponent" to="/rg/profile">
            <RoundRectangle type='button' btnText='요양인 등록 요청하기' onClick={onClickSave}/>
          </Link>
          <SaveModal isClicked={isClicked} setIsClicked={setIsClicked} text={modalText} onSaveClick={onSaveClick} />
          </>
          :<RoundRectangle type='button' btnText="요양인 등록 요청하기" onClick={onClickSave} />
        }
        <Link className="linkComponent" to="/rg/nh-location">
          <Floating background='var(--color-blue)' />
        </Link>
    </React.Fragment>
  );
};

export default RegisterProfileBefore;