import React, {useState} from 'react';

const Id = () =>{
    const [titId, setTitId] = useState('');
    const onChange = (e) => {
        setTitId(e.target.value);
    };
    return(
        <React.Fragment>
            <div className="tit-id">아이디</div>
            <input name='userid' required className="input-id" onChange={onChange} value={titId} placeholder='아이디를 입력해주세요.'></input>
        </React.Fragment>
    );
};

export default Id;