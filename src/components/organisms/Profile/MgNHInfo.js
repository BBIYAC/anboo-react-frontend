import React from "react";
import NursingHomeDetailInfoBlock from "../../molecules/Block/NursingHomeDetailInfoBlock";
import NursingHomeChiefInfoBlock from "../../molecules/Block/NursingHomeChiefInfoBlock";
import NursingHomeManagerInfoBlock from "../../molecules/Block/NursingHomeManagerInfoBlock";
import NhImageGrid from "../../molecules/Block/NhImageGrid";
import OvalLarge from "../../atoms/Button/OvalLarge";
import NotRegisteredEmptyActImages from "../../atoms/Label/NotRegisteredEmptyActImages";
import NotRegisteredEmptyManagers from "../../atoms/Label/NotRegisteredEmptyManagers";
import NotRegisteredEmptyChief from "../../atoms/Label/NotRegisteredEmptyChief";

const MgNHInfo = ({
  onClick, 
  isNotMember,
  name, 
  tel, 
  address, 
  image, 
  images, 
  position, 
  chiefName, 
  chiefTel, 
  chiefImage, 
  membersArray,
  time,
  starRating,}) => {
  const renderManagers = membersArray.map((member, index) => {
    if(index > 0){
      return(
        <NursingHomeManagerInfoBlock 
        key={index}
        memberName={member.nh_employee_name}
        membersTel={
          0 + member.nh_employee_tel.substring(3,5)
        +'-'+ member.nh_employee_tel.substring(5,9)
        +'-'+ member.nh_employee_tel.substring(9,13)}
        membersImage={member.image}
        position={member.position} />
      );
    };
  });

  const renderImages = images.map((image, idx) => {
    return(
      <NhImageGrid url={image.nh_image} key={idx}/>
    );
  });

  return(
    <React.Fragment>
      <NursingHomeDetailInfoBlock 
      width="0" 
      height="0" 
      name={name} 
      tel={tel} 
      address={address} 
      image={image} 
      isNotMember={isNotMember}
      time={time}
      starRating={starRating}/>

      <hr/>

      {chiefName==''
        ? <NotRegisteredEmptyChief color="var(--color-green)"/>
        : <NursingHomeChiefInfoBlock 
          position={position} 
          chiefName={chiefName} 
          chiefTel={chiefTel} 
          chiefImage={chiefImage} />
      }

      <hr/>

      {membersArray.length==0
        ? <NotRegisteredEmptyManagers color="var(--color-green)"/>
        : renderManagers
      }
        
      <hr/>

      {images.length==0
        ? <NotRegisteredEmptyActImages color="var(--color-green)"/>
        : <div className="grid-container">{/*여기에 정렬된 줌인 이미지 추가*/}</div>
      }
      
      <hr/>

      <OvalLarge btnText="수정하기" onClick={onClick}/>
    </React.Fragment>
  );
};

export default MgNHInfo;