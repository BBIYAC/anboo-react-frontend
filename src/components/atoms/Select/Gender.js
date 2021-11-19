import React, { useState, useEffect } from 'react';

const Gender = ({isGender, setIsGender, fillMessage}) => {
    const [selected, setSelected] = useState('');
    const [color, setColor] = useState({color: 'gray'});
    const [isNull, setIsNull] = useState(false);

    const changeSelect = (e) =>{
        setSelected(e.target.value);
        setColor({color: 'black'});
        e.target.value.length > 0 ? setIsNull(false) : setIsNull(true);
    };

    useEffect(()=>{
        setSelected(isGender);
        setColor({color:'black'});
    },[isGender])

    useEffect(() => {
        selected === '' ? setIsNull(fillMessage): setIsGender(selected);
    }, [fillMessage, selected])
    

    const handleStyle = {
        width: '70px', 
        paddingLeft: '10px', 
        height: '55px'
    };

    return(
        <div className='sel-size' style={handleStyle}>
            <div className="tit-userchoice">성별</div>
            <select name='gender' className="sel-userchoice" value={selected} onChange={changeSelect} style={color}>
                <option value='' disabled hidden>선택</option>
                <option value='남' style={{color: 'black'}}>남</option>
                <option value='여' style={{color: 'black'}}>여</option>
            </select>
            {isNull && <div className='notice-massage'>※ 필수</div>}
        </div>
    );
};

export default Gender;