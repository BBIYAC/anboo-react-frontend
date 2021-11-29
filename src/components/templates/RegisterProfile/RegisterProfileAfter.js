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
  const [isImage, setIsImage] = useState('');
  const [defaults, setDefaults] = useState({
    np_name: '',
    gender: '',
    np_date: '',
    memo: '',
    np_profile_image: '',
  });
  const [star, setStar] = useState(0);
  const [putCheck, setPutCheck] = useState([]);

  const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')};
  const header = {Authorization : 'Bearer ' + localStorage.getItem('accessToken'), 'Content-Type': 'multipart/form-data' };

  useEffect(()=>{
    // axios 요양인 정보 GET
    axios({url:`${apiUrl}/nok/np-profile/`,method : 'get' ,headers:headers})
    .then(response =>{
      console.log(response.data);
      response.data.profile && setDefaults(response.data.profile);
    }).catch(error => {
        console.error(error);
    })


    // 별점 GET
    axios({url:`${apiUrl}/nok/star/detail/`,method : 'get' ,headers:headers})
    .then(response =>{
      response.data.star_rating && setStar(response.data.star_rating)
    }).catch(error => {
        console.error(error);
    })
  },[])

  useEffect(()=>{
    console.log(defaults.np_profile_image);
    setIsImage(defaults.np_profile_image || '');
  },[defaults])


  const onClickEdit = () => {
    setFillMessage(true); // 비어있는 input 경고
    if(isRegister && isGender && isBirth){
      console.log({type:'PUT', isRegister, isGender, isBirth, isCaution, isImage, star});
      // axios register profile PUT
      let formData = new FormData();
      formData.append('np_name', isRegister);
      formData.append('np_date', isBirth);
      formData.append('memo', isCaution);
      formData.append('gender', isGender);
      formData.append('np_profile_image', isImage);

      axios({url:`${apiUrl}/nok/np-profile/`,method : 'put' ,headers:header, data: formData})
      .then(response =>{
        console.log(response)
        setPutCheck(putCheck =>[...putCheck, true]);
        // axios star rating PUT
        axios({url:`${apiUrl}/nok/star/post/`,method : 'put' ,headers:headers, data: {
          star_rating: star
        }})
        .then(response =>{
          setPutCheck(putCheck => [...putCheck, true]);
        }).catch(error => {
            console.error(error);
        })
      }).catch(error => {
          console.error(error);
      })

      

    }
  }

  useEffect(()=>{
    putCheck.length === 2 && setIsClicked(true);
  },[putCheck]);


  return (
    <React.Fragment>
    <div className="header">
        <IoIosArrowBack opacity='0' size="20"/>
        요양인 프로필
        <BiLogOut size="20" onClick={onLogoutClick}/>
    </div>
      <AddImage url={isImage} setIsImage={setIsImage} />
      <InputSelectBlock isRegister={defaults.np_name} isGender={defaults.gender} setIsRegister={setIsRegister} setIsGender={setIsGender} fillMessage={fillMessage} />
      <Birth isBirth={defaults.np_date} setIsBirth={setIsBirth} fillMessage={fillMessage} />
      <Caution isCaution={defaults.memo} setIsCaution={setIsCaution} />
      <div className="tit-name">이용하고 계신 요양원이 마음에 드시나요?</div>
      <StarBlock star_rating={star} setStarRating={setStar} />
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