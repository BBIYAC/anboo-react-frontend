import React, {useState} from 'react';
import Certification from '../Button/Certification';

const EmailCheck = () =>{
    const [titEmailCheck, setTitEmailCheck] = useState('');
    const [color, setColor] = useState({color: 'var(--color-dark-gray)', borderColor: 'var(--color-dark-gray)'});
    const onChange = (e) => {
        setTitEmailCheck(e.target.value);
        if(e.target.value.length != 0){
            setColor({color: 'var(--color-blue)', borderColor: 'var(--color-blue)'});
        }
        else{
            setColor({color: 'var(--color-dark-gray)', borderColor: 'var(--color-dark-gray)'});
        };
    };
    return(
        <React.Fragment>
            <div className="tit-emailcheck">이메일 인증번호</div>
            <div className="div-emailcheck">
                <input type='number' required className="input-emailcheck" onChange={onChange} value={titEmailCheck} placeholder='인증번호를 입력해주세요.'></input>
                <Certification text='확인' color={color}/>
            </div>
        </React.Fragment>
    );
};

export default EmailCheck;