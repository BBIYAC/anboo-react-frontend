import React, {useState, useEffect} from 'react';
import ManagerImage from '../../atoms/Input/ManagerImage';
import NursingHomeChiefInfoInput from '../../atoms/Input/NursingHomeChiefInfoInput';

const NursingHomeChiefInfoEditBlock = ({
  chiefInfo,
  nhInfoList, 
  setNhInfoList, 
  nhEmployeeImages, 
  setNhEmployeeImages, }) => {
  const [nhChief, setNhChief] = useState({
    nh_employee_name: chiefInfo.chiefName,
    nh_employee_tel : chiefInfo.chiefTel,
  });
  const [image, setImage] = useState(chiefInfo.chiefImage);

  useEffect(()=>{
    setNhInfoList([{
      nh_employee_name: nhChief.nh_employee_name,
      nh_employee_tel : nhChief.nh_employee_tel,
      nh_employee_position: chiefInfo.chiefPosition
    }, ...nhInfoList.slice(1, nhInfoList.length)])
    if(image === '') return
    setNhEmployeeImages([image, ...nhEmployeeImages.slice(1,nhEmployeeImages.length)])
  },[nhChief, image])

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