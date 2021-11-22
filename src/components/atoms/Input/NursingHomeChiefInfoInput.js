import React, {useEffect, useState} from 'react';

const NursingHomeChiefInfoInput = ({chiefInfo}) => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  useEffect(()=>{
    setName(chiefInfo.chiefName);
    setTel(chiefInfo.chiefTel);
  },[chiefInfo])

  const onNameChange = (e) =>{
    setName(e.target.value);
  }

  const onTelChange = (e) =>{
    setTel(e.target.value);
  }
    
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <input 
        name='chiefName' 
        className="input-mgNhInfoEditInput" 
        type="text" 
        placeholder="시설장 성함" 
        value={name} 
        onChange={onNameChange}></input>
        <input 
        name='chiefTel' 
        className="input-mgNhInfoEditInput" 
        type="text"
        placeholder="시설장 전화번호" 
        value={tel} 
        onChange={onTelChange}></input>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfoInput;