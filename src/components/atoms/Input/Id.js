import React, {useState} from 'react';

const Id = () =>{
    const exp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
    const hangul = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
    const [titId, setTitId] = useState('');
    const [isLong, setIsLong] = useState(false);
    const [isExept, setIsExept] = useState(false);
    const [isHangul, setIsHangul] = useState(false);
    const onChange = (e) => {
        setTitId(e.target.value);
        ( e.target.value.length > 15 )? setIsLong(true) : setIsLong(false);
        ( exp.test(e.target.value) )? setIsExept(true) : setIsExept(false);
        ( hangul.test(e.target.value) )? setIsHangul(true) : setIsHangul(false);
    };
    return(
        <React.Fragment>
            <div className="tit-id">아이디</div>
            <input name='userid' required className="input-id" onChange={onChange} value={titId} placeholder='아이디를 입력해주세요.'></input>
            {isLong? <div className='notice-massage'>※ 15자 이내로 입력해주세요.</div> : null}
            {isExept? <div className='notice-massage'>※ 특수문자는 입력하실 수 없습니다.</div> : null}
            {isHangul? <div className='notice-massage'>※ 영어만 사용할 수 있습니다.</div> : null}
        </React.Fragment>
    );
};

export default Id;