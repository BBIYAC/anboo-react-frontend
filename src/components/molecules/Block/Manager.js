import React,{useState, useEffect} from 'react';
import ManagerImage from '../../atoms/Input/ManagerImage';
import {IoPersonRemove} from 'react-icons/io5';

const Manager = ({caregiver, removeCaregiver, setChangeValue, index}) => {
  const [image, setImage] = useState(caregiver.image)
  const [name, setName] = useState(caregiver.name);
  const [phone, setPhone] = useState(caregiver.phone);
  const [profile, setProfile] = useState();

  useEffect(()=>{
    typeof caregiver.image === 'object'
    ? setProfile(URL.createObjectURL(caregiver.image))
    : setProfile(caregiver.image)
  }, [caregiver])

  useEffect(()=>{
    const data = {image, name, phone}
    setChangeValue([data, index])
  },[name, phone, image])

  
  const onNameChange = (e) =>{
    e.target.value && setName(e.target.value)
  }

  const onTelChange = (e) =>{
    e.target.value && setPhone(e.target.value)
  }

  return (
    <React.Fragment>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ManagerImage url={profile} setImage={setImage}/>
          <div className="div-nursinghomeinfo">
            <p className="txt_position">요양사</p>
            <input 
            type = "text"
            maxLength = "30"
            className="input-mgNhInfoEditInput"
            placeholder={caregiver.name}
            onBlur={onNameChange}></input>
            <input 
            type = "tel"
            maxLength = "11"
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