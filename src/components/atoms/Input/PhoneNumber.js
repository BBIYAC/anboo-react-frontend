import React, {useState} from 'react';

const PhoneNumber = () =>{
    const [titPhone, setTitPhone] = useState('');
    const onChange = (e) => {
        setTitPhone(e.target.value);
    };
    return(
        <React.Fragment>
            <div className="tit-name">전화번호</div>
            <input className="input-name" onChange={onChange} value={titPhone}></input>
        </React.Fragment>
    );
};

export default PhoneNumber;