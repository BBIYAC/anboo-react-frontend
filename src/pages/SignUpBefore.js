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
    const [isNotNull, setIsNotNull] = useState(false);
    const [fillMessage, setFillMessage] = useState(false);

    const onClick = () => {
        setFillMessage(true); // 비어있는 input 경고
    }


    return (
        <React.Fragment>
            <div className="header">
              <IoIosArrowBack  opacity="0" size="20"/>
              회원가입
              <BiLogOut opacity="0" size="20"/>
            </div>
            <form onSubmit={signupSubmit}>
                <UserChoice isNotNull={isNotNull} setIsNotNull={setIsNotNull} fillMessage={fillMessage} />
                <NameLong isNotNull={isNotNull} setIsNotNull={setIsNotNull} fillMessage={fillMessage} />
                <Id isNotNull={isNotNull} setIsNotNull={setIsNotNull} fillMessage={fillMessage} />
                <Password isNotNull={isNotNull} setIsNotNull={setIsNotNull} fillMessage={fillMessage} setPwd={setPwd}/>
                <PasswordCheck isNotNull={isNotNull} setIsNotNull={setIsNotNull} fillMessage={fillMessage} pwdCheck={pwd}/>
                <PhoneNumber isNotNull={isNotNull} setIsNotNull={setIsNotNull} fillMessage={fillMessage} />
                <Email isNotNull={isNotNull} setIsNotNull={setIsNotNull} fillMessage={fillMessage} />
                {
                    isNotNull
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