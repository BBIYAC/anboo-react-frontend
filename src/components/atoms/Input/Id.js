import React, {useState} from 'react';

const Id = () =>{
    const [titId, setTitId] = useState('');
    const onChange = (e) => {
        setTitId(e.target.value);
    };
    return(
        <React.Fragment>
            <div className="tit-id">아이디</div>
            <input className="input-id" onChange={onChange} value={titId}></input>
        </React.Fragment>
    );
};

export default Id;