import React, { useEffect, useState } from 'react';
import Manager from './Manager';
import ManagerForm from './ManagerForm';

const NursingHomeManagerInfoEditBlock = ({
  membersArray,
  nhEmployeeList, 
  setNHEmployeeList, 
  changeValue,
  setChangeValue}) => {
  const [caregivers, setCaregivers] = useState([]);
  const [image, setImage] = useState([])
  
  useEffect(()=>{
    if (changeValue.length === 0) return
    const reImage = changeValue[0].image
    const reName = changeValue[0].name
    const rePhone = changeValue[0].phone
    const managerIdx = changeValue[1]
    let updateValue = [...caregivers]
    
    updateValue[managerIdx].image = reImage
    updateValue[managerIdx].name = reName
    updateValue[managerIdx].phone = rePhone
    setCaregivers(updateValue)
  },[changeValue])

  useEffect(()=>{
    setCaregivers([...membersArray.filter((caregiver, idx) =>
      idx > 0).map((member, index)=>{
        return {
          key: index,
          id: member.id,
          image: member.image ? member.image : '',
          name: member.nh_employee_name,
          phone: member.nh_employee_tel,
        }
    }), ...caregivers])
  },[membersArray]);

  useEffect(()=>{
    if(caregivers) {
      setNHEmployeeList([nhEmployeeList[0], ...caregivers.map((caregiver, index)=>{
        return {
          key: index,
          nh_employee_name: caregiver.name,
          nh_employee_tel : caregiver.phone.includes('+82')
                            ? caregiver.phone
                            : '+82' + caregiver.phone.replace(/-/g, '').substring(1, caregiver.phone.length -2),
          nh_employee_image: caregiver.image,
          nh_employee_position : '요양사',
        }
      })])
    }
  },[caregivers])

  const removeCaregiver = (phone) => {
    setCaregivers(caregivers.filter(caregiver => {
      return caregiver.phone !== phone;
    }));
  };

  
  const renderCaregivers = caregivers ? caregivers.map((caregiver, index) => {
    return (
      <Manager 
      key={caregiver.phone}
      caregiver={caregiver} 
      removeCaregiver={removeCaregiver}
      setChangeValue={setChangeValue}
      index={index}/>
    );
  }) : <span style={{fontSize:"var(--font-size-small)"}}>추가된 요양사가 없습니다.</span>;

  const addManager = (caregiver) => {
    setCaregivers([
      caregiver,
      ...caregivers,
    ]);
  };

  return(
    <React.Fragment>
      <ManagerForm addManager={addManager} image={image} setImage={setImage} />
      <div className="div-NursingHomeManagerInfo">
        {renderCaregivers}
      </div>
    </React.Fragment>
  );
};

export default NursingHomeManagerInfoEditBlock;