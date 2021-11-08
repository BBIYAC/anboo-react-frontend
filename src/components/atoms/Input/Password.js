import React, {useState, useEffect} from 'react';

const Password = ({isNotNull, setPwd, setIsNotNull, fillMessage}) =>{
    const [titPassword, setTitPassword] = useState('');
    const [isLong, setIsLong] = useState(false);
    const [isNull, setIsNull] = useState(false);
    const onChange = (e) => {
        setTitPassword(e.target.value);
        if(e.target.value.length < 8 || e.target.value.length > 15){
            setIsLong(true);
        }
        else{
            setIsLong(false);
        }
        setPwd(e.target.value);
        e.target.value.length > 0 ? setIsNull(false) : setIsNull(true);
    };
    useEffect(() => {
        titPassword == '' ? setIsNull(fillMessage): setIsNotNull(true);
      }, [fillMessage])
    return(
        <React.Fragment>
            <div className="tit-password">비밀번호</div>
            <input name='userpassword' type="password" className="input-password" onChange={onChange} value={titPassword} placeholder='비밀번호를 입력해주세요.'></input>
            {isLong && <div className='notice-massage'>※ 8~15자 이내로 입력해주세요.</div>}
            {isNull && <div className='notice-massage'>※ 필수로 입력해주세요.</div>}
        </React.Fragment>
    );
};

export default Password;