import React from "react";
import Floating from "../../atoms/Button/Floating";
import ManagerBelowBarBlock from "../../molecules/Block/ManagerBelowBarBlock";
import MgNHInfoEdit from "../../organisms/Profile/MgNHInfoEdit";
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { useHistory } from "react-router-dom";

const NursingHomeInfoEdit = ({
  onClick, 
  onSigninClick, 
  nh_id,
  nh_name, 
  nh_tel, 
  nh_address, 
  representativeImage, 
  nh_images,
  chiefName,
  chiefTel,
  chiefImage,
  membersArray,
  time}) => {
  let history = useHistory();
  return(
    <>
      <div className="header">
        <IoIosArrowBack size="20" onClick={()=>history.goBack(-1)}/>
        요양원 정보 수정
        <BiLogOut size="20" onClick={onSigninClick}/>
      </div>
      <MgNHInfoEdit 
      onClick={onClick} 
      id={nh_id}
      name={nh_name} 
      tel={nh_tel} 
      address={nh_address} 
      representativeImage={representativeImage}
      images={nh_images}
      chiefName={chiefName} 
      chiefTel={chiefTel}
      chiefImage={chiefImage}
      membersArray={membersArray}
      time={time} />
      <Floating background="var(--color-green)" onClick={()=>history.push("/mg/requests")}/>
      <ManagerBelowBarBlock isRequest/>
    </>
  );
};

export default NursingHomeInfoEdit;