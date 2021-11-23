import React,{useState, useEffect} from 'react';
import ManagerImage from '../../atoms/Input/ManagerImage';
import {IoPersonRemove} from 'react-icons/io5';

const Manager = ({caregiver, removeCaregiver, setChangeValue, index}) => {
  const [name, setName] = useState(caregiver.name);
  const [phone, setPhone] = useState(caregiver.phone);
  const [profile, setProfile] = useState();

  useEffect(()=>{
    typeof caregiver.image === 'object'
    ? setProfile(URL.createObjectURL(caregiver.image))
    : setProfile(caregiver.image)
  }, [caregiver])

  useEffect(()=>{
    const data = {name, phone}
    setChangeValue([data, index])
  },[name, phone])

  
  const onNameChange = (e) =>{
    setName(e.target.value)
  }

  const onTelChange = (e) =>{
    setPhone(e.target.value)
  }

  return (
    <React.Fragment>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ManagerImage url={profile}/>
          <div className="div-nursinghomeinfo">
            <input 
            type = "text"
            className="input-mgNhInfoEditInput"
            placeholder={caregiver.name}
            onBlur={onNameChange}></input>
            <input 
            type = "tel"
            className="input-mgNhInfoEditInput"
            placeholder={caregiver.phone}
            onBlur={onTelChange}></input>
          </div>
        </div>
        <button 
        style={{background:"none", border:"none"}} 
        type="submit"
        onClick={() => removeCaregiver(caregiver.phone)}>
          <IoPersonRemove size="25" color="var(--color-red)"/>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Manager;