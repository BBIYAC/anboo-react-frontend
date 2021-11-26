import React, { useState, useEffect } from 'react';

const NursingHomeInfoInput = ({name, tel, address, time,  setNhInfoInput}) => {
  const [inputs, setInputs] = useState({
    nh_name : name,
    nh_operating_hour : time,
    nh_tel : tel,
    nh_address : address,
  })
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    })
  }
  useEffect(()=>{
    setNhInfoInput(inputs);
  },[inputs])


  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <input 
          name='nh_name' 
          className="input-mgNhInfoEditInput" 
          type="text" 
          maxLength = "20"
          placeholder={name} 
          onChange={onChange}
        ></input>
        <input 
          name='nh_address' 
          className="input-mgNhInfoEditInput" 
          type="text" 
          maxLength = "50"
          placeholder={address} 
          onChange={onChange}
        ></input>
        <input 
          name='nh_tel' 
          className="input-mgNhInfoEditInput" 
          type="tel" 
          maxLength = "13"
          placeholder={tel} 
          onChange={onChange}
        ></input>
        <input 
          name='nh_operating_hour' 
          className="input-mgNhInfoEditInput" 
          type="text" 
          maxLength = "30"
          placeholder={time} 
          onChange={onChange}
        ></input>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeInfoInput;