import React from "react";
import MgNHInfo from "../../organisms/Profile/MgNHInfo";
import Floating from "../../atoms/Button/Floating";
import ManagerBelowBarBlock from "../../molecules/Block/ManagerBelowBarBlock";
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link } from "react-router-dom";

const NursingHomeInfo = ({
  onClick, 
  onSigninClick, 
  isNotMember,
  nh_name, 
  nh_tel, 
  nh_address, 
  representativeImage,
  nh_images,
  chiefName, 
  chiefTel, 
  chiefImage, 
  membersArray,
  time,
  starRating,}) => {
  return(
    <>
      <div className="header">
        <Link className="linkComponent" to="/mg/home">
         <IoIosArrowBack size="20"/>
        </Link>
        요양원 정보
        <BiLogOut size="20" onClick={onSigninClick}/>
      </div>
      <MgNHInfo 
        onClick={onClick} 
        isNotMember={isNotMember}
        name={nh_name} 
        tel={nh_tel} 
        address={nh_address} 
        representativeImage={representativeImage}
        images={nh_images}
        chiefName={chiefName}
        chiefTel={chiefTel}
        chiefImage={chiefImage}
        membersArray={membersArray}
        time={time}
        starRating={starRating}
       />
      <Link className="linkComponent" to="/mg/requests">
        <Floating background="var(--color-green)"/>
      </Link>
      <ManagerBelowBarBlock isRequest/>
    </>
  );
};

export default NursingHomeInfo;