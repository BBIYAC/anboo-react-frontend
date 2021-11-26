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
    nh_employee_image : chiefInfo.image,
  });

  useEffect(()=>{
    setNHEmployeeList([{
      nh_employee_name: nhChief.nh_employee_name,
      nh_employee_tel : nhChief.nh_employee_tel.includes('+82')
                        ? nhChief.nh_employee_tel
                        : '+82' + nhChief.nh_employee_tel.replace(/-/g, '').substring(1, nhChief.nh_employee_tel.length -2),
      nh_employee_image: nhChief.nh_employee_image,
      nh_employee_position : '요양원장',
    }, ...nhEmployeeList.slice(1, nhEmployeeList.length)])
  },[nhChief])

  return(
    <React.Fragment>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ManagerImage url={chiefInfo.chiefImage} setNhChief={setNhChief} nhChief={nhChief}/>
          <NursingHomeChiefInfoInput chiefInfo={chiefInfo} setNhChief={setNhChief} nhChief={nhChief} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfoEditBlock;