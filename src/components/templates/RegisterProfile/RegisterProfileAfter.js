import React, {useState, useEffect} from 'react';
import AddImage from '../../atoms/Input/AddImage';
import Birth from '../../atoms/Input/Birth';
import Caution from '../../atoms/Input/Caution';
import StarBlock from '../../molecules/Block/StarBlock';
import InputSelectBlock from '../../molecules/Block/InputSelectBlock';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import BelowBarBlock from '../../molecules/Block/BelowBarBlock';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import SaveModal from '../../organisms/Modal/SaveModal'
import { apiUrl } from '../../../pages/ApiURL';
import axios from 'axios';

const  RegisterProfileAfter= ({onLogoutClick}) => {
  const [fillMessage, setFillMessage] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isRegister, setIsRegister] = useState('');
  const [isGender, setIsGender] = useState('');
  const [isBirth, setIsBirth] = useState('');
  const [isCaution, setIsCaution] = useState('');
  const [defaults, setDefaults] = useState({
    np_name: '',
    gender: '',
    np_date: '',
    memo: '',
    np_profile_image: '',
  });

  
  useEffect(()=>{
    const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')};
    // axios 요양인 정보 GET
    axios({url:`${apiUrl}/nok/np-profile/`,method : 'get' ,headers:headers})
    .then(response =>{
      const datas = response.data.profile;
      setDefaults(datas);
    }).catch(error => {
        console.error(error);
    })

    // 별점 GET
    // axios({url:`${apiUrl}/not-nok/star/detail/`,method : 'get' ,headers:headers})
    // .then(response =>{
    //   console.log('response:', response);
    // }).catch(error => {
    //     console.error(error);
    // })
  },[])

  const onClickEdit = () => {
    setFillMessage(true); // 비어있는 input 경고
    if(isRegister && isGender && isBirth){
      setIsClicked(true);
      console.log({type:'PUT', isRegister, isGender, isBirth, isCaution});
      /*
      axios register profile PUT
      */
    }
  }

  return (
    <React.Fragment>
    <div className="header">
        <IoIosArrowBack opacity='0' size="20"/>
        요양인 프로필
        <BiLogOut size="20" onClick={onLogoutClick}/>
    </div>
      <AddImage url={defaults.np_profile_image} />
      <InputSelectBlock isRegister={defaults.np_name} isGender={defaults.gender} setIsRegister={setIsRegister} setIsGender={setIsGender} fillMessage={fillMessage} />
      <Birth isBirth={defaults.np_date} setIsBirth={setIsBirth} fillMessage={fillMessage} />
      <Caution isCaution={defaults.memo} setIsCaution={setIsCaution} />
      <div className="tit-name">이용하고 계신 요양원이 마음에 드시나요?</div>
      <StarBlock />
      {
        (isRegister && isGender && isBirth)
        ?<><RoundRectangle btnText='요양인 프로필 수정하기' onClick={onClickEdit}/>
           <SaveModal isClicked={isClicked} setIsClicked={setIsClicked} text='수정되었습니다.' /></>
        :<RoundRectangle btnText='요양인 프로필 수정하기' color='white' background='var(--color-dark-gray)' border='1px solid var(--color-dark-gray)'/>
      }
      <BelowBarBlock isProfile/>
    </React.Fragment>
  );
};

export default RegisterProfileAfter;