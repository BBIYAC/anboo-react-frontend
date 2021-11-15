import React, {useState} from 'react';
import AddImage from '../../atoms/Input/AddImage';
import Birth from '../../atoms/Input/Birth';
import Caution from '../../atoms/Input/Caution';
import InputSelectBlock from '../../molecules/Block/InputSelectBlock';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import Floating from '../../atoms/Button/Floating';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SaveModal from '../../organisms/Modal/SaveModal'

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

  return (
    <React.Fragment>
        <div className="header">
            <IoIosArrowBack size="20"/>
            요양자 프로필
            <BiLogOut size="20"/>
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