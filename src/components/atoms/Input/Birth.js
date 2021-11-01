import React, {useState} from 'react';

const Birth = () => {
    const [titBirth, setTitBirth] = useState('');
    const onChange = (e) => {
        setTitBirth(e.target.value);
    };
    return(
        <>
            <div className="tit-name">생년월일</div>
            <input className="input-name" onChange={onChange} value={titBirth}></input>
        </>
    );
};

export default Birth;