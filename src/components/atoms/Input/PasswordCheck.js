import React, {useState} from 'react';

const PasswordCheck = ({pwdCheck}) =>{
    const [titPasswordCheck, setTitPasswordCheck] = useState('');
    const [isEqual, setIsEqual] = useState(true);
    const onChange = (e) => {
        setTitPasswordCheck(e.target.value);
        (pwdCheck == e.target.value)? setIsEqual(true) : setIsEqual(false);
    };
    return(
        <React.Fragment>
            <div className="tit-passwordcheck">비밀번호 확인</div>
            <input required type="password" className="input-passwordcheck" onChange={onChange} value={titPasswordCheck} placeholder='비밀번호를 다시 입력해주세요.'></input>
            {isEqual? null : <div className='notice-massage'>※ 비밀번호가 일치하지 않습니다.</div>}
        </React.Fragment>
    );
};

export default PasswordCheck;