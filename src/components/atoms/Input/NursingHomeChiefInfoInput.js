import React, {useEffect, useState} from 'react';

const NursingHomeChiefInfoInput = ({chiefInfo, setNhChief}) => {
  const [name, setName] = useState('시설장 성함');
  const [tel, setTel] = useState('시설장 전화번호');

  useEffect(()=>{
    setName(chiefInfo.chiefName);
    setTel(chiefInfo.chiefTel);
    
  },[])

  useEffect(()=>{
    setNhChief({
      nh_employee_name: name,
      nh_employee_tel : tel,
    })
  },[name, tel])

  const onNameChange = (e) =>{
    e.target.value && setName(e.target.value);
  }

  const onTelChange = (e) =>{
    e.target.value && setTel(e.target.value);
  }
    
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <input 
        name='chiefName' 
        className="input-mgNhInfoEditInput" 
        type="text" 
        placeholder={name}
        onBlur={onNameChange}></input>
        <input 
        name='chiefTel' 
        className="input-mgNhInfoEditInput" 
        type="text"
        placeholder={tel}
        onBlur={onTelChange}></input>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfoInput;