import React, {useState} from 'react';

const Password = () =>{
    const [titPassword, setTitPassword] = useState('');
    const onChange = (e) => {
        setTitPassword(e.target.value);
    };
    return(
        <React.Fragment>
            <div className="tit-password">비밀번호</div>
            <input type="password" className="input-password" onChange={onChange} value={titPassword}></input>
        </React.Fragment>
    );
};

export default Password;