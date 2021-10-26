import React, {useState} from 'react';
import Certification from '../Button/Certification';

const EmailCheck = () =>{
    const [titEmailCheck, setTitEmailCheck] = useState('');
    const onChange = (e) => {
        setTitEmailCheck(e.target.value);
    };
    return(
        <React.Fragment>
            <div className="tit-emailcheck">이메일 인증</div>
            <div className="div-emailcheck">
                <input className="input-emailcheck" onChange={onChange} value={titEmailCheck}></input>
                <Certification />
            </div>
        </React.Fragment>
    );
};

export default EmailCheck;