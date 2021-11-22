import React, { useEffect, useState } from 'react';
import Manager from './Manager';
import ManagerForm from './ManagerForm';
import ManagerImage from '../../atoms/Input/ManagerImage';

const NursingHomeManagerInfoEditBlock = ({membersArray}) => {
  const [caregivers, setCaregivers] = useState([]);

  useEffect(()=>{
    setCaregivers([...membersArray.filter(caregiver =>
      caregiver.position === '요양사').map(member=>{
        return {
          image: <ManagerImage url={member.image} />,
          name: member.nh_employee_name,
          phone: 0 + member.nh_employee_tel.substring(3,5)
                  +'-'+ member.nh_employee_tel.substring(5,9)
                  +'-'+ member.nh_employee_tel.substring(9,13),}
      }), ...caregivers])
  },[membersArray]);

  const removeCaregiver = (phone) => {
    setCaregivers(caregivers.filter(caregiver => {
      return caregiver.phone !== phone;
    }));
  };

  const renderCaregivers = caregivers ? caregivers.map(caregiver => {
    return (
      <Manager 
      caregiver={caregiver} 
      key={caregiver.phone}
      removeCaregiver={removeCaregiver}/>
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
      <ManagerForm addManager={addManager} />
      <div className="div-NursingHomeManagerInfo">
        {renderCaregivers}
      </div>
    </React.Fragment>
  );
};

export default NursingHomeManagerInfoEditBlock;