import React, {useState} from 'react';

const NameLong = () =>{
    const [titName, setTitName] = useState('');
    const onChange = (e) => {
        setTitName(e.target.value);
    };
    return(
        <React.Fragment>
            <div className="tit-name">이름</div>
            <input name='username' className="input-name" onChange={onChange} value={titName} placeholder='이름을 입력해주세요.' required></input>
        </React.Fragment>
    );
};

export default NameLong;