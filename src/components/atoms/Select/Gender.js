import React, { useState, useEffect } from 'react';

const Gender = ({setIsGender, fillMessage}) => {
    const selectList = ['남', '여'];
    const [selected, setSelected] = useState('');
    const [color, setColor] = useState({color: 'gray'});
    const [isNull, setIsNull] = useState(false);

    const changeSelect = (e) =>{
        setSelected(e.target.value);
        setColor({color: 'black'});
        e.target.value.length > 0 ? setIsNull(false) : setIsNull(true);
    };

    useEffect(() => {
        selected == '' ? setIsNull(fillMessage): setIsGender(true);
    }, [fillMessage, isNull])

    const handleStyle = {
        width: '70px', 
        paddingLeft: '10px', 
        height: '55px'
    };

    return(
        <div className='sel-size' style={handleStyle}>
            <div className="tit-userchoice">성별</div>
            <select name='gender' className="sel-userchoice" defaultValue='default' onChange={changeSelect} style={color}>
                <option value='default' disabled hidden>선택</option>
                {selectList.map((item) =>(
                    <option value={item} key={item} style={{color: 'black'}}>
                        {item}
                    </option>
                ))}
            </select>
            {isNull && <div className='notice-massage'>※ 필수</div>}
        </div>
    );
};

export default Gender;