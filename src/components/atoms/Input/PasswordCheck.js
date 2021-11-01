import React, {useState} from 'react';

const PasswordCheck = () =>{
    const [titPasswordCheck, setTitPasswordCheck] = useState('');
    const onChange = (e) => {
        setTitPasswordCheck(e.target.value);
    };
    return(
        <React.Fragment>
            <div className="tit-passwordcheck">비밀번호 확인</div>
            <input required type="password" className="input-passwordcheck" onChange={onChange} value={titPasswordCheck} placeholder='비밀번호를 다시 입력해주세요.'></input>
        </React.Fragment>
    );
};

export default PasswordCheck;