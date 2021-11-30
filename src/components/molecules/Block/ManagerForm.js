import React, { useEffect, useState } from "react";
import { BsSlashCircle } from "react-icons/bs";
import {IoPersonAdd} from 'react-icons/io5';
import ManagerImage from '../../atoms/Input/ManagerImage';

const ManagerForm = ({ addManager, setImage, image }) => {
  const [caregiverName, setCaregiverName] = useState('');
  const [caregiverPhone, setCaregiverPhone] = useState('');
  const [caregiverImage, setCaregiverImage] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const resetForm = () => {
    setCaregiverName('');
    setCaregiverPhone('');
    setCaregiverImage('');
  }

  const validateForm = () => {
    resetErrors();
    let validated = true;
    if(!caregiverName) {
      setNameError("성함을 올바르게 입력해주세요.")
      validated = false;
    }
    if(!caregiverPhone) {
      setPhoneError("전화번호를 올바르게 입력해주세요.")
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
        image: caregiverImage,
        name: caregiverName,
        phone: caregiverPhone,
        position: "요양사"
      });
      resetErrors();
      resetForm();
    }
  };

  return(
    <form onSubmit={onSubmit}>
      <div className="block-NHAddManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ManagerImage 
            url={caregiverImage && URL.createObjectURL(caregiverImage)} 
            setCaregiverImage={setCaregiverImage} 
            image={image} 
            setImage={setImage} 
          />
          <div className="div-nursinghomeinfo">
            <p className="txt_position">요양사</p>
            <input 
            type = "text"
            maxLength = "30"
            value = {caregiverName||""}
            className="input-mgNhInfoEditInput"
            placeholder="성함"
            onChange={e => setCaregiverName(e.target.value)}></input>
            <span style={{color:"red", fontSize:"var(--font-size-micro)"}}>{nameError}</span>
            <input 
            type = "tel"
            maxLength = "13"
            value = {caregiverPhone}
            className="input-mgNhInfoEditInput"
            placeholder="전화번호( '-' 포함 )"
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