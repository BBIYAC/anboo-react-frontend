import React, { useState } from 'react';
import {IoIosArrowDown} from 'react-icons/io';

const Gender = () => {
    const selectList = ['남', '여'];
    const [selected, setSelected] = useState('');

    const changeSelect = (e) =>{
        setSelected(e.target.value);
    };
    const handleStyle = {
        width: '70px', 
        paddingLeft: '10px', 
        height: '55px'
    };

    return(
        <div className='sel-size' style={handleStyle}>
            <div className="tit-userchoice">성별</div>
            <select className="sel-userchoice" onChange={changeSelect} value={selected}>
                {selectList.map((item) =>(
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Gender;