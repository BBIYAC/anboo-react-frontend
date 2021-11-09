import React, { useState,  useEffect } from 'react';

const UserChoice = ({setIsUser, fillMessage}) =>{
  const selectList = ['보호자', '관리자'];
  const [selected, setSelected] = useState('');
  const [color, setColor] = useState({color: 'gray'});
  const [isNull, setIsNull] = useState(false);

  const changeSelect = (e) =>{
      setSelected(e.target.value);
      setColor({color: 'black'});
      e.target.value.length > 0 ? setIsNull(false) : setIsNull(true);
  };

  useEffect(() => {
    selected == '' ? setIsNull(fillMessage): setIsUser(true);
  }, [fillMessage, selected])

  return(
    <React.Fragment>
      <div className="tit-userchoice">보호자 or 관리자</div>
      <select name='user' className="sel-userchoice" onChange={changeSelect} defaultValue='default' style={color}>
        <option value='default' disabled hidden>사용자를 선택해주세요.</option>
        {selectList.map((item) =>(
          <option value={item} key={item} style={{color: 'black'}}>
            {item}
          </option>
        ))}
      </select>
      {isNull && <div className='notice-massage'>※ 필수로 선택해주세요.</div>}
    </React.Fragment>
  );
};

export default UserChoice;