import React, {useState, useEffect} from 'react';
import ManagerImage from '../../atoms/Input/ManagerImage';
import NursingHomeChiefInfoInput from '../../atoms/Input/NursingHomeChiefInfoInput';

const NursingHomeChiefInfoEditBlock = ({
  chiefInfo,
  nhInfoList, 
  setNhInfoList,}) => {
  const [nhChief, setNhChief] = useState({
    nh_employee_name: chiefInfo.chiefName,
    nh_employee_tel : chiefInfo.chiefTel,
  });
  // const [image, setImage] = useState(chiefInfo.chiefImage);

  useEffect(()=>{
    setNhInfoList([{
      nh_employee_name: nhChief.nh_employee_name,
      nh_employee_tel : nhChief.nh_employee_tel,
      nh_employee_position: chiefInfo.chiefPosition,
      nh_employee_image: chiefInfo.chiefImage,
      nh_employee_id: chiefInfo.chiefId
    }, ...nhInfoList])
    // if(image === '') return
    // setNhEmployeeImages([image, ...nhEmployeeImages.slice(1,nhEmployeeImages.length)])
  },[nhChief])

  return(
    <React.Fragment>
      <div className="block-NursingHomeManagerInfo">
        <div className="NursingHomeManagerInfo">
          <ManagerImage url={chiefInfo.chiefImage}/>
          <NursingHomeChiefInfoInput chiefInfo={chiefInfo} nhChief={nhChief} setNhChief={setNhChief} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfoEditBlock;