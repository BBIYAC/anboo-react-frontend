import React, {useState, useEffect} from 'react';
import ManagerImage from '../../atoms/Input/ManagerImage';
import NursingHomeChiefInfoInput from '../../atoms/Input/NursingHomeChiefInfoInput';

const NursingHomeChiefInfoEditBlock = ({chiefInfo, setNhInfoListObject, setNhEmployeeImages, position }) => {
  const [nhChief, setNhChief] = useState([{
    nh_employee_name: chiefInfo.chiefName,
    nh_employee_tel : chiefInfo.chiefTel,
    nh_employee_position: position
  }]);
  const [image, setImage] = useState([]);

  useEffect(()=>{
    setNhInfoListObject({
      nh_employee_name: nhChief.nh_employee_name,
      nh_employee_tel : nhChief.nh_employee_tel,
      nh_employee_position: nhChief.nh_employee_position
    })
  },[nhChief])

  useEffect(()=>{
    setNhEmployeeImages([...image])
  },[image])

  return(
    <React.Fragment>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ManagerImage url={chiefInfo.chiefImage} image={image} setImage={setImage}/>
          <NursingHomeChiefInfoInput chiefInfo={chiefInfo} nhChief={nhChief} setNhChief={setNhChief} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfoEditBlock;