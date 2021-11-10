import React, {useState, useRef, useEffect} from 'react';
import CertificationModal from '../../organisms/Modal/CertificationModal';
import Certification from '../Button/Certification';

const EmailCheck = ({checkNum, onCFClick, fillMessage, setIsEmail}) =>{
    const cfNumCheck = useRef();
    const [txtEmailCheck, setTxtEmailCheck] = useState('');
    const [isSuccess, setIsSuccess] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isNull, setIsNull] = useState(false);
    const [min, setMin] = useState(3);
    const [sec, setSec] = useState(0);
    const [color, setColor] = useState({color: 'var(--color-blue)', borderColor: 'var(--color-blue)'});
    const onChange = (e) => {
        setTxtEmailCheck(e.target.value);
        if(e.target.value.length !== 0){
            setIsDisabled(false);
            setColor({color: 'var(--color-blue)', borderColor: 'var(--color-blue)'});
        }
    };
    
    const onClick = () => {
        if(cfNumCheck.current.value === checkNum){
            setIsSuccess(true);
            setIsDisabled(true);
            setColor({color: 'var(--color-dark-gray)', borderColor: 'var(--color-dark-gray)'});
            setIsNull(false);
            setIsEmail(true);
        }
        else{
            setIsSuccess(false);
            setIsDisabled(false);
            setIsNull(false);
        }
    };

    useEffect(() => {
        const countdown = setInterval(() => {
            if (sec > 0) {
                setSec(sec - 1);
            }
            if (sec === 0) {
                if (min === 0) {
                    clearInterval(countdown);
                    setIsClicked(true);
                } else {
                    setMin(min - 1);
                    setSec(59);
                }
            }
            if(isDisabled){
                setMin(3);
                setSec(0);
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [min, sec]);

    useEffect(()=>{
        txtEmailCheck === '' && setIsNull(fillMessage);
    },[fillMessage, isDisabled])

    return(
        <React.Fragment>
            <div className="tit-emailcheck">이메일 인증번호</div>
            <div className="div-emailcheck">
                <input 
                type='number' 
                name='emailCheck' 
                ref={cfNumCheck} 
                className="input-emailcheck" 
                onChange={onChange} 
                value={txtEmailCheck} 
                placeholder='인증번호를 입력해주세요.'>
                </input>
                <div className='emailcheck_timer'>{min}:{sec < 10 ? `0${sec}` : sec}</div>
                <Certification type='button' text='확인' color={color} onClick={onClick} disabled={isDisabled}/>
            </div>
            {isSuccess? null: <div className='notice-massage'>※ 인증번호가 일치하지 않습니다.</div>}
            {isNull && <div className='notice-massage'>※ 필수로 인증해주세요.</div>}
            <CertificationModal 
            isClicked={isClicked} 
            setIsClicked={setIsClicked} 
            onCFClick={onCFClick}
            setMin={setMin}
            setSec={setSec}/>
        </React.Fragment>
    );
};

export default EmailCheck;