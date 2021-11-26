import React, {useState, useEffect} from 'react';
import ManagerImage from '../../atoms/Input/ManagerImage';
import NursingHomeChiefInfoInput from '../../atoms/Input/NursingHomeChiefInfoInput';

const NursingHomeChiefInfoEditBlock = ({
  chiefInfo,
  nhEmployeeList, 
  setNHEmployeeList,}) => {
  const [nhChief, setNhChief] = useState({
    nh_employee_name: chiefInfo.chiefName,
    nh_employee_tel : chiefInfo.chiefTel,
  });

  // console.log(chiefInfo)
  useEffect(()=>{
    setNHEmployeeList([{
      nh_employee_name: nhChief.nh_employee_name,
      nh_employee_tel : nhChief.nh_employee_tel,
      nh_employee_image: chiefInfo.chiefImage,
      nh_employee_id: chiefInfo.chiefId
    }, ...nhEmployeeList])
  },[nhChief])

  return(
    <React.Fragment>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ManagerImage url={chiefInfo.chiefImage}/>
          <NursingHomeChiefInfoInput chiefInfo={chiefInfo} setNhChief={setNhChief} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfoEditBlock;