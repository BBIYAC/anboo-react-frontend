import React, { useState } from 'react';

const UserChoice = () =>{
  const selectList = ['보호자', '관리자'];
  const [selected, setSelected] = useState('');
  const [color, setColor] = useState({color: 'gray'});

  const changeSelect = (e) =>{
      setSelected(e.target.value);
      setColor({color: 'black'});
  };

  return(
    <React.Fragment>
      <div className="tit-userchoice">보호자 or 관리자</div>
      <select name='user' required className="sel-userchoice" onChange={changeSelect} defaultValue='default' style={color}>
        <option value='default' disabled hidden>사용자를 선택해주세요.</option>
        {selectList.map((item) =>(
          <option value={item} key={item} style={{color: 'black'}}>
            {item}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default UserChoice;