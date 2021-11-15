import React, {useState} from 'react';
import AddImage from '../../atoms/Input/AddImage';
import Birth from '../../atoms/Input/Birth';
import Caution from '../../atoms/Input/Caution';
import StarBlock from '../../molecules/Block/StarBlock';
import InputSelectBlock from '../../molecules/Block/InputSelectBlock';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import BelowBarBlock from '../../molecules/Block/BelowBarBlock';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SaveModal from '../../organisms/Modal/SaveModal'

const  RegisterProfileAfter= () => {
  const [fillMessage, setFillMessage] = useState(false);
  const [isRegister, setIsRegister] = useState('');
  const [isGender, setIsGender] = useState('');
  const [isBirth, setIsBirth] = useState('');
  const [isCaution, setIsCaution] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [modalText, setModalText] = useState('');

  const onClickEdit = () => {
    setFillMessage(true); // 비어있는 input 경고
    if(isRegister && isGender && isBirth){
      setIsClicked(true);
      setModalText('수정되었습니다.');
      console.log({type:'PUT', isRegister, isGender, isBirth, isCaution});
      /*
      axios register profile GET & PUT
      */
    }
  }

  return (
    <React.Fragment>
    <div className="header">
        <IoIosArrowBack opacity='0' size="20"/>
        요양자 프로필
        <BiLogOut size="20"/>
    </div>
      <AddImage />
      <InputSelectBlock setIsRegister={setIsRegister} setIsGender={setIsGender} fillMessage={fillMessage} />
      <Birth setIsBirth={setIsBirth} fillMessage={fillMessage} />
      <Caution setIsCaution={setIsCaution} />
      <div className="tit-name">이용하고 계신 요양원이 마음에 드시나요?</div>
      <StarBlock />
      {
        (isRegister && isGender && isBirth)
        ?<><RoundRectangle btnText='요양자 프로필 수정하기' onClick={onClickEdit}/>
           <SaveModal isClicked={isClicked} setIsClicked={setIsClicked} text={modalText} /></>
        :<RoundRectangle btnText='요양자 프로필 수정하기' color='white' background='var(--color-dark-gray)' border='1px solid var(--color-dark-gray)'/>
      }
      <BelowBarBlock isProfile/>
    </React.Fragment>
  );
};

export default RegisterProfileAfter;