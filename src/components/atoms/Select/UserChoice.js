import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const UserChoice = () =>{
    const selectList = ['보호자', '관리자'];
    const [selected, setSelected] = useState('');

    const changeSelect = (e) =>{
        setSelected(e.target.value);
    };

    return(
        <React.Fragment>
            <div className="tit-userchoice">보호자 or 관리자</div>
            <select className="sel-userchoice" onChange={changeSelect} value={selected}>
                {selectList.map((item) =>(
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
            <IoIosArrowDown className='arrow-down'/>
        </React.Fragment>
    );
};

export default UserChoice;