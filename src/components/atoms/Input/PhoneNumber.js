import React, {useState} from 'react';

const PhoneNumber = () =>{
    const [titPhone, setTitPhone] = useState('');
    const onChange = (e) => {
        setTitPhone(e.target.value);
    };
    return(
        <React.Fragment>
            <div className="tit-name">전화번호</div>
            <input name='phonenumber' required type='number' className="input-name" onChange={onChange} value={titPhone} placeholder="'-'를 제외한 전화번호를 입력해주세요."></input>
        </React.Fragment>
    );
};

export default PhoneNumber;