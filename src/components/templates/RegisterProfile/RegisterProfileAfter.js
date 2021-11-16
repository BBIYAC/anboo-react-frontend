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
  const [isRegister, setIsRegister] = useState(false);
  const [isGender, setIsGender] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [modalText, setModalText] = useState('');

  const onClickSave = () => {
    setFillMessage(true); // 비어있는 input 경고
    setIsEdit(true);
    setIsClicked(true);
    setModalText('저장되었습니다.');
  };

  const onClickEdit = () => {
    setFillMessage(true); // 비어있는 input 경고
    setIsClicked(true);
    setModalText('수정되었습니다.');
  }

  return (
    <React.Fragment>
    <div className="header">
        <IoIosArrowBack opacity='0' size="20"/>
        요양자 프로필
        <Link className="linkComponent" to="/">
          <BiLogOut size="20"/>
        </Link>
    </div>
      <AddImage />
      <InputSelectBlock setIsRegister={setIsRegister} setIsGender={setIsGender} fillMessage={fillMessage} />
      <Birth setIsBirth={setIsBirth} fillMessage={fillMessage} />
      <Caution />
      <div className="tit-name">이용하고 계신 요양원이 마음에 드시나요?</div>
      <StarBlock />
      {
        isEdit
        ?(isRegister && isGender && isBirth)
          ?<RoundRectangle btnText='요양자 프로필 수정하기' onClick={onClickEdit}/>
          :<RoundRectangle btnText='요양자 프로필 수정하기' color='white' background='var(--color-dark-gray)' border='1px solid var(--color-dark-gray)'/>
        
        :(isRegister && isGender && isBirth)
          ?<RoundRectangle type='button' btnText="요양자 프로필 저장하기" onClick={onClickSave} />
          :<RoundRectangle type='button' btnText="요양자 프로필 저장하기" color='white' background='var(--color-dark-gray)' border='1px solid var(--color-dark-gray)' />
      }
      <SaveModal isClicked={isClicked} setIsClicked={setIsClicked} text={modalText} />
      <BelowBarBlock isProfile/>
    </React.Fragment>
  );
};

export default RegisterProfileAfter;