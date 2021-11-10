import React, {useState, useEffect} from 'react';

const Birth = ({setIsBirth, fillMessage}) => {
    const [titBirth, setTitBirth] = useState('');
    const [isNull, setIsNull] = useState(false);
    const [isLong, setIsLong] = useState(false);
    const onChange = (e) => {
        setTitBirth(e.target.value);
        (e.target.value.length > 0) 
        ? setIsNull(false) 
        : (isLong)? setIsNull(false): setIsNull(true);
        e.target.value.length !== 6 ? setIsLong(true): setIsLong(false);
    };

    useEffect(() => {
        (titBirth === '') 
        ? setIsNull(fillMessage)
        : (!isLong)? setIsBirth(true): setIsBirth(false);
    }, [fillMessage, titBirth])

    return(
        <>
            <div className="tit-name">생년월일</div>
            <input className="input-name" type='number' onChange={onChange} value={titBirth} placeholder='숫자만 입력해주세요. 예) 001122'></input>
            {isLong && <div className='notice-massage'>※ 6자리를 입력해주세요. 예시) 001122</div>}
            {isNull && <div className='notice-massage'>※ 필수로 입력해주세요.</div>}
        </>
    );
};

export default Birth;