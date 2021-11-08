import React, {useState, useEffect} from 'react';

const PasswordCheck = ({isNotNull, pwdCheck, setIsNotNull, fillMessage}) =>{
    const [titPasswordCheck, setTitPasswordCheck] = useState('');
    const [isEqual, setIsEqual] = useState(true);
    const [isNull, setIsNull] = useState(false);
    const onChange = (e) => {
        setTitPasswordCheck(e.target.value);
        (pwdCheck == e.target.value)? setIsEqual(true) : setIsEqual(false);
        e.target.value.length > 0 ? setIsNull(false) : setIsNull(true);
    };
    useEffect(() => {
        titPasswordCheck == '' ? setIsNull(fillMessage): setIsNotNull(true);
    }, [fillMessage])
    return(
        <React.Fragment>
            <div className="tit-passwordcheck">비밀번호 확인</div>
            <input type="password" className="input-passwordcheck" onChange={onChange} value={titPasswordCheck} placeholder='비밀번호를 다시 입력해주세요.'></input>
            {isEqual? null : <div className='notice-massage'>※ 비밀번호가 일치하지 않습니다.</div>}
            {isNull && <div className='notice-massage'>※ 필수로 입력해주세요.</div>}
        </React.Fragment>
    );
};

export default PasswordCheck;