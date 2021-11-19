import React, {useState, useEffect} from 'react';

const Birth = ({setIsBirth, fillMessage}) => {
    const [titBirth, setTitBirth] = useState('');
    const [isNull, setIsNull] = useState(false);
    const onChange = (e) => {
        setTitBirth(e.target.value);
        (e.target.value.length > 0) 
        ? setIsNull(false) 
        : setIsNull(true);
        
    };

    useEffect(() => {
        (titBirth === '') 
        ? setIsNull(fillMessage)
        : setIsBirth(titBirth);
    }, [fillMessage, titBirth])

    return(
      <>
        <div className="tit-name">생년월일</div>
        <input className="input-name" type='date' onChange={onChange} value={titBirth} placeholder='숫자만 입력해주세요. 예) 001122'></input>
        {isNull && <div className='notice-massage'>※ 필수로 입력해주세요.</div>}
      </>
    );
};

export default Birth;