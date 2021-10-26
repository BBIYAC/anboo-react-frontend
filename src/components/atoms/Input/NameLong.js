import React, {useState} from 'react';

const NameLong = () =>{
    const [titName, setTitName] = useState('');
    const onChange = (e) => {
        setTitName(e.target.value);
    };
    return(
        <React.Fragment>
            <div className="tit-name">이름</div>
            <input className="input-name" onChange={onChange} value={titName}></input>
        </React.Fragment>
    );
};

export default NameLong;