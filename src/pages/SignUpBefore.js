import React, {useState} from 'react';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import PasswordCheck from '../components/atoms/Input/PasswordCheck';
import PhoneNumber from '../components/atoms/Input/PhoneNumber';
import UserChoice from '../components/atoms/Select/UserChoice';
import NameLong from '../components/atoms/Input/NameLong';
import Password from '../components/atoms/Input/Password';
import Email from '../components/atoms/Input/Email';
import Id from '../components/atoms/Input/Id';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom';
import { apiUrl } from './ApiURL';
import axios from 'axios';

const SignUpBefore = () => {
    // 유효성 검사
    const [isUser, setIsUser] = useState('');
    const [isName, setIsName] = useState('');
    const [isId, setIsId] = useState('');
    const [isPassword, setIsPassword] = useState('');
    const [isPasswordCheck, setIsPasswordCheck] = useState('');
    const [isPhone, setIsPhone] = useState('');
    const [isEmail, setIsEmail] = useState('');
    const [fillMessage, setFillMessage] = useState(false);
    let history = useHistory();

    const signupSubmit = (event) => {
      event.preventDefault();
      console.log({isUser, isName, isId, isPassword, isPhone, isEmail} );
      /*
      axios signup form POST
      */
      const params = {
        "username" : isId,
        "password" : isPassword,
        "tel" : "+82"+isPhone.substring(1,isPhone.length+1),
        "name": isName,
        "email" : isEmail
      }
      if (isUser === '보호자'){
        axios({url:`${apiUrl}/signup/nok/`,method : 'post',data:params})
        .then(response =>{
          console.log(response)
          history.push("/signup/after");
        }).catch(error => {
          console.error(error)
        })
      }
      else if (isUser === '관리자'){
        axios({url:`${apiUrl}/signup/nh-supervisor/`,method : 'post',data:params})
        .then(response =>{
        console.log(response)
        history.push("/signup/after");
      }).catch(error => {
        console.error(error)
      })
      }
    };
    
    
    const onClick = () => {
        setFillMessage(true); // 비어있는 input 경고
    }


    return (
        <React.Fragment>
            <div className="header">
              <Link className="linkComponent" to="/">
                <IoIosArrowBack size="20"/>
              </Link>
              회원가입
              <BiLogOut opacity="0" size="20"/>
            </div>
            <form onSubmit={signupSubmit}>
                <UserChoice setIsUser={setIsUser} fillMessage={fillMessage} />
                <NameLong setIsName={setIsName} fillMessage={fillMessage} />
                <Id setIsId={setIsId} fillMessage={fillMessage} />
                <Password setIsPassword={setIsPassword} fillMessage={fillMessage}/>
                <PasswordCheck setIsPasswordCheck={setIsPasswordCheck} fillMessage={fillMessage} pwdCheck={isPassword}/>
                <PhoneNumber setIsPhone={setIsPhone} fillMessage={fillMessage} />
                <Email setIsEmail={setIsEmail} fillMessage={fillMessage} />
                {
                    (isUser && isName && isId && isPassword && isPasswordCheck && isPhone && isEmail)
                    ?<RoundRectangle type='submit' btnText="회원가입"/>
                    :<RoundRectangle type='button' btnText="회원가입" onClick={onClick} />
                }
            </form>
        </React.Fragment>
    );
};

export default SignUpBefore;