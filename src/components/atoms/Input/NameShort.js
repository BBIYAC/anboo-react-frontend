import React, { useState, useEffect } from 'react';

const NameShort = ({isRegister, setIsRegister, fillMessage}) => {
    const numExp = /[0-9]/gi; // 한글 정규식
    const [txtName, setTxtName] = useState('');
    const [isNull, setIsNull] = useState(false);
    const [isNumExept, setIsNumExept] = useState(false);
    const onChange = (e) => {
        setTxtName(e.target.value);
        ( numExp.test(e.target.value) )? setIsNumExept(true) : setIsNumExept(false);
        (e.target.value.length > 0) 
        ? setIsNull(false) 
        : (isNumExept)? setIsNull(false): setIsNull(true);
    };

    useEffect(()=>{
        setTxtName(isRegister)
    },[isRegister])

    useEffect(() => {
        txtName === '' 
        ? setIsNull(fillMessage)
        : (!isNumExept)? setIsRegister(txtName): setIsRegister('');
      }, [fillMessage, txtName])

    const handleStyle = {
        display: 'block',
        width: 'var(--width)'
    };
    return(
        <div style={handleStyle}>
            <div className="tit-name">요양인 이름</div>
            <input className="input-name" onChange={onChange} value={txtName} placeholder='이름을 입력해주세요.'></input>
            {isNull && <div className='notice-massage'>※ 필수로 입력해주세요.</div>}
            {isNumExept && <div className='notice-massage'>※ 숫자는 입력하실 수 없습니다.</div>}
        </div>
    );
};

export default NameShort;