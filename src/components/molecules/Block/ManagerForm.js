import React, { useEffect, useState } from "react";
import {IoPersonAdd} from 'react-icons/io5';
import ManagerImage from '../../atoms/Input/ManagerImage';

const ManagerForm = ({ addManager }) => {
  const [caregiverName, setCaregiverName] = useState('');
  const [caregiverPhone, setCaregiverPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const resetForm = () => {
    setCaregiverName('');
    setCaregiverPhone('');
  }

  const validateForm = () => {
    resetErrors();
    let validated = true;
    if(!caregiverName) {
      setNameError("성함을 옳바르게 입력해주세요.")
      validated = false;
    }
    if(!caregiverPhone) {
      setPhoneError("전화번호를 옳바르게 입력해주세요.")
      validated = false;
    }
    return validated
  }

  const resetErrors = () => {
    setNameError("")
    setPhoneError("")
  };

  const onSubmit = (event) => {
    event.preventDefault();     // submit 시 새로고침이 되지 않는다.
    if(validateForm()) {
      addManager({
        image: <ManagerImage/>,
        name: caregiverName,
        phone: caregiverPhone,
      });
      resetErrors();
      resetForm();
    }
  };

  return(
    <form onSubmit={onSubmit}>
      <div className="block-NHAddManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ManagerImage url=''/>
          <div className="div-nursinghomeinfo">
            <input 
            type = "text"
            value = {caregiverName}
            className="input-mgNhInfoEditInput"
            placeholder="요양사 성함"
            onChange={e => setCaregiverName(e.target.value)}></input>
            <span style={{color:"red", fontSize:"var(--font-size-micro)"}}>{nameError}</span>
            <input 
            type = "tel"
            value = {caregiverPhone}
            className="input-mgNhInfoEditInput"
            placeholder="요양사 전화번호"
            onChange={e => setCaregiverPhone(e.target.value)}></input>
            <span style={{color:"red", fontSize:"var(--font-size-micro)"}}>{phoneError}</span>
          </div>
        </div>
        <button style={{background:"none", border:"none"}} type="submit">
          <IoPersonAdd size="25" color="var(--color-green)"/>
        </button>
      </div>
    </form>
  );
}

export default ManagerForm;