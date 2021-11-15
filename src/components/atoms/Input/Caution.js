import React, {useState} from 'react';

const Caution = ({setIsCaution}) => {
    const [titName, setTitName] = useState('');
    const onChange = (e) => {
        setTitName(e.target.value);
        setIsCaution(titName);
    };
    return(
        <>
            <div className="tit-name">특이사항</div>
            <input className="input-name" onChange={onChange} value={titName} placeholder='특이사항을 입력해주세요.'></input>
        </>
    );
};

export default Caution;