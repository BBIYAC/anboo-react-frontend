import React, {useState} from 'react';

const Email = () =>{
    const [titEmail, setTitEmail] = useState('');
    const onChange = (e) => {
        setTitEmail(e.target.value);
    };
    return(
        <React.Fragment>
            <div className="tit-email">이메일</div>
            <input className="input-email" onChange={onChange} value={titEmail}></input>
        </React.Fragment>
    );
};

export default Email;