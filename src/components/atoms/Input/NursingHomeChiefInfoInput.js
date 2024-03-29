import React, {useEffect, useState} from 'react';

const NursingHomeChiefInfoInput = ({chiefInfo, setNhChief, nhChief}) => {
  const [name, setName] = useState('시설장 성함');
  const [tel, setTel] = useState("시설장 전화번호('-' 포함)");

  useEffect(()=>{
    chiefInfo.chiefName && setName(chiefInfo.chiefName);
    chiefInfo.chiefTel && setTel(chiefInfo.chiefTel);
  },[])

  useEffect(()=>{
    setNhChief({
      nh_employee_name: name,
      nh_employee_tel : tel,
      nh_employee_image : nhChief.nh_employee_image,
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
        <p className="txt_position">요양원장</p>
        <input 
        name='chiefName' 
        className="input-mgNhInfoEditInput" 
        type="text" 
        maxLength = "10"
        placeholder={name}
        onBlur={onNameChange}></input>
        <input 
        name='chiefTel' 
        className="input-mgNhInfoEditInput" 
        type="tel"
        maxLength = "13"
        placeholder={tel.includes('+82')? 0 + tel.substring(3,5) + '-' + tel.substring(5,9) + '-' + tel.substring(9,13) : tel}
        onBlur={onTelChange}></input>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfoInput;