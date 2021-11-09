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

const  RegisterProfileAfter= () => {
  const [fillMessage, setFillMessage] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isGender, setIsGender] = useState(false);
  const [isBirth, setIsBirth] = useState(false);

  const onClick = () => {
    setFillMessage(true); // 비어있는 input 경고
  };

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
      <Caution />
      <div className="tit-name">이용하고 계신 요양원이 마음에 드시나요?</div>
      <StarBlock />
      {
          (isRegister && isGender && isBirth)
          ?<Link className="linkComponent" to="/rg/profile">
              <RoundRectangle btnText='요양자 프로필 수정하기'/>
          </Link>
          :<RoundRectangle type='button' btnText="요양자 프로필 수정하기" onClick={onClick} />
        }
      <BelowBarBlock isProfile/>
    </React.Fragment>
  );
};

export default RegisterProfileAfter;