import React, {useState} from 'react';
import UserChoice from '../components/atoms/Select/UserChoice';
import NameLong from '../components/atoms/Input/NameLong';
import Id from '../components/atoms/Input/Id';
import Password from '../components/atoms/Input/Password';
import PasswordCheck from '../components/atoms/Input/PasswordCheck';
import PhoneNumber from '../components/atoms/Input/PhoneNumber';
import Email from '../components/atoms/Input/Email';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const SignUpBefore = () => {
    const signupSubmit = (event) => {
        event.preventDefault();
    };
    const [pwd, setPwd] = useState('');
    const [fillMessage, setFillMessage] = useState(false);

    // 유효성 검사
    const [isUser, setIsUser] = useState(false);
    const [isName, setIsName] = useState(false);
    const [isId, setIsId] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordCheck, setIsPasswordCheck] = useState(false);
    const [isPhone, setIsPhone] = useState(false);
    const [isEmail, setIsEmail] = useState(false);

    const onClick = () => {
        setFillMessage(true); // 비어있는 input 경고
        console.log(isUser, isName, isId, isPassword, isPasswordCheck, isPhone, isEmail);
    }


    return (
        <React.Fragment>
            <div className="header">
              <IoIosArrowBack  opacity="0" size="20"/>
              회원가입
              <BiLogOut opacity="0" size="20"/>
            </div>
            <form onSubmit={signupSubmit}>
                <UserChoice setIsUser={setIsUser} fillMessage={fillMessage} />
                <NameLong setIsName={setIsName} fillMessage={fillMessage} />
                <Id setIsId={setIsId} fillMessage={fillMessage} />
                <Password setIsPassword={setIsPassword} fillMessage={fillMessage} setPwd={setPwd}/>
                <PasswordCheck setIsPasswordCheck={setIsPasswordCheck} fillMessage={fillMessage} pwdCheck={pwd}/>
                <PhoneNumber setIsPhone={setIsPhone} fillMessage={fillMessage} />
                <Email setIsEmail={setIsEmail} fillMessage={fillMessage} />
                {
                    (isUser && isName && isId && isPassword && isPasswordCheck && isPhone && isEmail)
                    ?<Link className="linkComponent" to="/signup/after">
                        <RoundRectangle type='submit' btnText="회원가입" />
                    </Link>
                    :<RoundRectangle type='button' btnText="회원가입" onClick={onClick} />
                }
            </form>
        </React.Fragment>
    );
};

export default SignUpBefore;