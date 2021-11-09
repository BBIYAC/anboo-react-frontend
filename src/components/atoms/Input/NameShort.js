import React, { useState, useEffect } from 'react';

const NameShort = ({setIsRegister, fillMessage}) => {
    const [txtName, setTxtName] = useState('');
    const [isNull, setIsNull] = useState(false);
    const onChange = (e) => {
        setTxtName(e.target.value);
        e.target.value.length > 0 ? setIsNull(false) : setIsNull(true);
    };

    useEffect(() => {
        txtName == '' ? setIsNull(fillMessage): setIsRegister(true);
      }, [fillMessage, isNull])

    const handleStyle = {
        display: 'block',
        width: 'var(--width)'
    };
    return(
        <div style={handleStyle}>
            <div className="tit-name">요양자 이름</div>
            <input className="input-name" onChange={onChange} value={txtName} placeholder='이름을 입력해주세요.'></input>
            {isNull && <div className='notice-massage'>※ 필수로 입력해주세요.</div>}
        </div>
    );
};

export default NameShort;