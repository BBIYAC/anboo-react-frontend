import React, {useState, useEffect} from 'react';
import Certification from '../Button/Certification';
import EmailCheck from './EmailCheck';
import{ init, send } from 'emailjs-com';
init("user_brnC0U62ecoZo1WSgZLyL");

const Email = ({setIsEmail, fillMessage}) =>{
    const [txtEmail, setTxtEmail] = useState('');
    const [emailCheck, setEmailCheck] = useState('');
    const [showCheck, setShowCheck] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isNull, setIsNull] = useState(false);
    const [color, setColor] = useState({color: 'var(--color-dark-gray)', borderColor: 'var(--color-dark-gray)'});
    const onChange = (e) => {
        setTxtEmail(e.target.value);
        if(e.target.value.length != 0){
            setIsDisabled(false);
            setColor({color: 'var(--color-blue)', borderColor: 'var(--color-blue)'});
        }
        else{
            setIsDisabled(true);
            setColor({color: 'var(--color-dark-gray)', borderColor: 'var(--color-dark-gray)'});
            setIsNull(true);
        };
    };

    useEffect(() => {
        showCheck === false && setIsNull(fillMessage);
    }, [fillMessage, isNull])


    const onCFClick = () => {
        const numLength = 6;
        let random = '';
        for(let i=0; i<numLength; i++){
            const rnum = Math.floor(Math.random() * 9);
            random += rnum.toString();
        }
        console.log(random);
        const templateID = 'template_3ilirv4';
        const serviceID = 'anboo_gmail';
        // sendFeedback(serviceID, templateID, {message: random, to_email: txtEmail});
        setEmailCheck(random);
        setShowCheck(true);
        setIsDisabled(true);
        setColor({color: 'var(--color-dark-gray)', borderColor: 'var(--color-dark-gray)'});
        setIsNull(false);
    };

    const sendFeedback = (serviceID, templateID, variables) => {
        send(
            serviceID, templateID, variables
        ).then(res => {
            console.log('Email successfully sent!')
        }).catch(err => console.error('There has been an error: ',err))
    }

    return(
        <React.Fragment>
            <div className="tit-email">이메일</div>
            <div className="div-emailcheck">
                <input
                name='useremail'
                type='email' 
                className="input-email" 
                onChange={onChange} 
                value={txtEmail} 
                placeholder='예시) abc@anboo.com'>
                </input>
                <Certification type='button' text='인증' onClick={onCFClick} color={color} disabled={isDisabled}/>
            </div>
            {isNull && <div className='notice-massage'>※ 필수로 인증해주세요.</div>}
            { showCheck && <EmailCheck checkNum={emailCheck} onCFClick={onCFClick} setIsEmail={setIsEmail} fillMessage={fillMessage} /> }
        </React.Fragment>
    );
};

export default Email;