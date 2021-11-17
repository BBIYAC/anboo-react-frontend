import React, { useState } from 'react';
import Manager from './Manager';
import ManagerForm from './ManagerForm';

const NursingHomeManagerInfoEditBlock = () => {
  const [caregivers, setCaregivers] = useState([]);

  const removeCaregiver = (phone) => {
    setCaregivers(caregivers.filter(caregiver => {
      return caregiver.phone !== phone;
    }));
  };

  const renderCaregivers = caregivers.length ? caregivers.map(caregiver => {
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
      <ManagerForm addManager={addManager}/>
      <div className="div-NursingHomeManagerInfo">
        {renderCaregivers}
      </div>
    </React.Fragment>
  );
};

export default NursingHomeManagerInfoEditBlock;