import React, {useState} from 'react';

const PhoneNumber = () =>{
    const [titPhone, setTitPhone] = useState('');
    const [isLong, setIsLong] = useState(false);
    const [isNotNum, setIsNotNum] = useState(true);
    const onChange = (e) => {
        setTitPhone(e.target.value);
        ( e.target.value.length > 11 )? setIsLong(true) : setIsLong(false);
        ( e.target.value == '' )? setIsNotNum(true) : setIsNotNum(false);
    };
    return(
        <React.Fragment>
            <div className="tit-name">전화번호</div>
            <input name='phonenumber' required type='number' className="input-name" onChange={onChange} value={titPhone} placeholder="'-'를 제외한 전화번호를 입력해주세요."></input>
            {isLong? <div className='notice-massage'>※ 정확하게 입력해주세요.</div>  : null}
            {isNotNum? <div className='notice-massage'>※ 숫자만 입력해주세요. 예시) 01012345678</div>  : null}
        </React.Fragment>
    );
};

export default PhoneNumber;