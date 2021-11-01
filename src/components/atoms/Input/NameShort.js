import React, { useState } from 'react';

const NameShort = () => {
    const [titName, setTitName] = useState('');
    const onChange = (e) => {
        setTitName(e.target.value);
    };
    const handleStyle = {
        display: 'block',
        width: 'var(--width)'
    };
    return(
        <div style={handleStyle}>
            <div className="tit-name">요양자 이름</div>
            <input className="input-name" onChange={onChange} value={titName}></input>
        </div>
    );
};

export default NameShort;