import React, {useState} from 'react';

const NameLong = () =>{
    const exp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi; // 특수문자 정규식
    const numExp = /[0-9]/gi; // 한글 정규식
    const [titName, setTitName] = useState('');
    const [isExept, setIsExept] = useState(false);
    const [isNumExept, setIsNumExept] = useState(false);
    const onChange = (e) => {
        setTitName(e.target.value);
        ( exp.test(e.target.value) )? setIsExept(true) : setIsExept(false);
        ( numExp.test(e.target.value) )? setIsNumExept(true) : setIsNumExept(false);
    };
    return(
        <React.Fragment>
            <div className="tit-name">이름</div>
            <input name='username' className="input-name" onChange={onChange} value={titName} placeholder='이름을 입력해주세요.' required></input>
            {isExept? <div className='notice-massage'>※ 특수문자는 입력하실 수 없습니다.</div> : null}
            {isNumExept? <div className='notice-massage'>※ 숫자는 입력하실 수 없습니다.</div> : null}
        </React.Fragment>
    );
};

export default NameLong;