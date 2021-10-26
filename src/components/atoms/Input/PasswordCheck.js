import React, {useState} from 'react';

const PasswordCheck = () =>{
    const [titPasswordCheck, setTitPasswordCheck] = useState('');
    const onChange = (e) => {
        setTitPasswordCheck(e.target.value);
    };
    return(
        <React.Fragment>
            <div className="tit-passwordcheck">비밀번호 확인</div>
            <input type="password" className="input-passwordcheck" onChange={onChange} value={titPasswordCheck}></input>
        </React.Fragment>
    );
};

export default PasswordCheck;