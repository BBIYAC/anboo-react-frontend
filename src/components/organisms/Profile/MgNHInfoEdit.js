import React from "react";
import NursingHomeDetailInfoEditBlock from "../../molecules/Block/NursingHomeDetailInfoEditBlock";
import NursingHomeChiefInfoEditBlock from "../../molecules/Block/NursingHomeChiefInfoEditBlock";
import NursingHomeManagerInfoEditBlock from "../../molecules/Block/NursingHomeManagerInfoEditBlock";
import NursingHomeImageEditBlock from "../../molecules/Block/NursingHomeImageEditBlock";
import OvalLarge from "../../atoms/Button/OvalLarge";
import NhImageGrid from "../../molecules/Block/NhImageGrid";
import axios from "axios";
import { apiUrl } from "../../../pages/ApiURL";

const MgNHInfoEdit = ({onClick, name, tel, address, image, images, membersArray}) => {
  const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')}
  const members = [...membersArray];
  const onSubmit = () => {
    onClick();
    // axios detail edit POST
    // axios({url:`${apiUrl}/supervisor/nh-info/`,method : 'post' ,headers:headers})
    // .then(response =>{
    //   console.log(response)
    // }).catch(error => { 
    //     console.error(error);
    // })
  }

  const renderManagers = members.map((member, index) => {
    if(index > 0){
      return(
        <NursingHomeChiefInfoEditBlock 
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
      <NursingHomeDetailInfoEditBlock name={name} tel={tel} address={address} image={image}/>
      <hr/>
      <NursingHomeChiefInfoEditBlock />
      <hr/>
      <NursingHomeManagerInfoEditBlock/>
      {renderManagers}
      <NursingHomeImageEditBlock prevImages={renderImages} />
      <hr/>
      <OvalLarge btnText="저장하기" onClick={()=>onSubmit()}/>
    </React.Fragment>
  );
};

export default MgNHInfoEdit;