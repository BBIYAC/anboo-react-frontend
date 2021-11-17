import React, {useState, useEffect} from 'react';

const NameLong = ({setIsName, fillMessage}) =>{
    /* eslint-disable */
    const exp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi; // 특수문자 정규식
    const numExp = /[0-9]/gi; // 한글 정규식
    const [titName, setTitName] = useState('');
    const [isExept, setIsExept] = useState(false);
    const [isNumExept, setIsNumExept] = useState(false);
    const [isNull, setIsNull] = useState(false);
    const onChange = (e) => {
        setTitName(e.target.value);
        ( exp.test(e.target.value) )? setIsExept(true) : setIsExept(false);
        ( numExp.test(e.target.value) )? setIsNumExept(true) : setIsNumExept(false);
        (e.target.value.length > 0) 
        ? setIsNull(false) 
        : (isExept || isNumExept)? setIsNull(false): setIsNull(true);
    };
    useEffect(() => {
        (titName === '') 
        ? setIsNull(fillMessage)
        : (!isExept && !isNumExept)? setIsName(titName): setIsName('');
      }, [fillMessage, titName])
    return(
        <React.Fragment>
            <div className="tit-name">이름</div>
            <input name='username' className="input-name" onChange={onChange} value={titName} placeholder='이름을 입력해주세요.'></input>
            {isExept && <div className='notice-massage'>※ 특수문자는 입력하실 수 없습니다.</div>}
            {isNumExept && <div className='notice-massage'>※ 숫자는 입력하실 수 없습니다.</div>}
            {isNull && <div className='notice-massage'>※ 필수로 입력해주세요.</div>}
        </React.Fragment>
    );
};

export default NameLong;