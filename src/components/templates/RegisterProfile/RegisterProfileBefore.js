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

const  RegisterProfileBefore= () => {
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
            <IoIosArrowBack size="20"/>
            요양자 프로필
            <BiLogOut size="20"/>
        </div>
        <AddImage url=""/>
        <InputSelectBlock setIsRegister={setIsRegister} setIsGender={setIsGender} fillMessage={fillMessage} />
        <Birth setIsBirth={setIsBirth} fillMessage={fillMessage} />
        <Caution />
        {
          (isRegister && isGender && isBirth)
          ?<Link className="linkComponent" to="/rg/profile">
              <RoundRectangle btnText='요양자 등록 요청하기 링크'/>
          </Link>
          :<RoundRectangle type='button' btnText="요양자 등록 요청하기 버튼" onClick={onClick} />
        }
        
        <Link className="linkComponent" to="/">
          <Floating background='var(--color-blue)' />
        </Link>
    </React.Fragment>
  );
};

export default RegisterProfileBefore;