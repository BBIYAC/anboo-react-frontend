import React, {useState, useEffect} from 'react';

const PhoneNumber = ({setIsPhone, fillMessage}) =>{
    const [titPhone, setTitPhone] = useState('');
    const [isLong, setIsLong] = useState(false);
    const [isNotNum, setIsNotNum] = useState(false);
    const [isNull, setIsNull] = useState(false);
    const onChange = (e) => {
        setTitPhone(e.target.value);
        ( e.target.value.length > 11 )? setIsLong(true) : setIsLong(false);
        ( e.target.value === '' )? setIsNotNum(true) : setIsNotNum(false);
        (e.target.value.length > 0) 
        ? setIsNull(false) 
        : (isLong || isNotNum)? setIsNull(false): setIsNull(true);
    };
    useEffect(() => {
        (titPhone === '') 
        ? setIsNull(fillMessage)
        : (!isLong && !isNotNum)? setIsPhone(titPhone): setIsPhone('');
    }, [fillMessage, titPhone])
    return(
        <React.Fragment>
            <div className="tit-name">전화번호</div>
            <input name='phonenumber' type='number' className="input-name" onChange={onChange} value={titPhone} placeholder="'-'를 제외한 전화번호를 입력해주세요."></input>
            {isLong && <div className='notice-massage'>※ 정확하게 입력해주세요.</div>}
            {isNotNum && <div className='notice-massage'>※ 숫자만 입력해주세요. 예시) 01012345678</div>}
            {isNull && <div className='notice-massage'>※ 필수로 입력해주세요.</div>}
        </React.Fragment>
    );
};

export default PhoneNumber;