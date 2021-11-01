import React, {useState} from 'react';
import Certification from '../Button/Certification';
import EmailCheck from './EmailCheck';

const Email = () =>{
    const [titEmail, setTitEmail] = useState('');
    const [showCheck, setShowCheck] = useState(false);
    const [color, setColor] = useState({color: 'var(--color-dark-gray)', borderColor: 'var(--color-dark-gray)'});
    const onChange = (e) => {
        setTitEmail(e.target.value);
        if(e.target.value.length != 0){
            setColor({color: 'var(--color-blue)', borderColor: 'var(--color-blue)'});
        }
        else{
            setColor({color: 'var(--color-dark-gray)', borderColor: 'var(--color-dark-gray)'});
        };
    };

    const onClick = () => setShowCheck(true);

    return(
        <React.Fragment>
            <div className="tit-email">이메일</div>
            <div className="div-emailcheck">
                <input name='useremail' required type='email' className="input-email" onChange={onChange} value={titEmail} placeholder='예시) abc@anboo.com'></input>
                <Certification text='인증' onClick={onClick} color={color}/>
            </div>
            { showCheck ? <EmailCheck /> : null }
        </React.Fragment>
    );
};

export default Email;