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

    //유효성 검사
    var exp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const [isExept, setIsExept] = useState(false);

    const onChange = (e) => {
        setTxtEmail(e.target.value);
        if(e.target.value.length > 0){
            setIsDisabled(false);
            setColor({color: 'var(--color-blue)', borderColor: 'var(--color-blue)'});
            exp.test(txtEmail)? setIsExept(false) : setIsExept(true);
        }
        else{
            setIsDisabled(true);
            setColor({color: 'var(--color-dark-gray)', borderColor: 'var(--color-dark-gray)'});
        };
    };

    useEffect(() => {
        (txtEmail === '') 
        ? setIsNull(fillMessage)
        : (!isExept && isDisabled)? setShowCheck(true): setShowCheck(false);
    }, [fillMessage, isDisabled])


    const onCFClick = () => {
        const numLength = 6;
        let random = '';
        for(let i=0; i<numLength; i++){
            const rnum = Math.floor(Math.random() * 9);
            random += rnum.toString();
        }
        const templateID = 'template_3ilirv4';
        const serviceID = 'anboo_gmail';
        if(!isExept){
            console.log(random);
            setEmailCheck(random);
            sendFeedback(serviceID, templateID, {message: random, to_email: txtEmail});
            setShowCheck(true);
            setIsDisabled(true);
            setColor({color: 'var(--color-dark-gray)', borderColor: 'var(--color-dark-gray)'});
            setIsNull(false);
        }
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
                value={txtEmail||""} 
                placeholder='예시) abc@anboo.com'>
                </input>
                <Certification type='button' text='인증' onClick={onCFClick} color={color} disabled={isDisabled}/>
            </div>
            {isNull && <div className='notice-massage'>※ 필수로 인증해주세요.</div>}
            {isExept && <div className='notice-massage'>※ 이메일 형식에 맞지 않습니다.</div>}
            { showCheck && <EmailCheck checkNum={emailCheck} onCFClick={onCFClick} setIsEmail={setIsEmail} fillMessage={fillMessage} email={txtEmail} /> }
        </React.Fragment>
    );
};

export default Email;