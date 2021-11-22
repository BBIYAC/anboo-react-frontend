import React from "react";
import NursingHomeDetailInfoEditBlock from "../../molecules/Block/NursingHomeDetailInfoEditBlock";
import NursingHomeChiefInfoEditBlock from "../../molecules/Block/NursingHomeChiefInfoEditBlock";
import NursingHomeManagerInfoEditBlock from "../../molecules/Block/NursingHomeManagerInfoEditBlock";
import NursingHomeImageEditBlock from "../../molecules/Block/NursingHomeImageEditBlock";
import OvalLarge from "../../atoms/Button/OvalLarge";
import NhImageGrid from "../../molecules/Block/NhImageGrid";
import axios from "axios";
import { apiUrl } from "../../../pages/ApiURL";

const MgNHInfoEdit = ({
  onClick, 
  name, 
  tel, 
  address, 
  image, 
  images, 
  membersArray,
  chiefName,
  chiefTel,
  chiefImage,
  time,}) => {
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

  const renderImages = images.map((image, idx) => {
    return(
      <NhImageGrid url={image.nh_image} key={idx}/>
    );
  });

  const chiefInfo = {
    'chiefName': chiefName,
    'chiefTel': 0 + chiefTel.substring(3,5)
                  +'-'+ chiefTel.substring(5,9)
                  +'-'+ chiefTel.substring(9,13),
    'chiefImage': chiefImage,
  }

  return(
    <React.Fragment>
      <NursingHomeDetailInfoEditBlock name={name} tel={tel} address={address} time={time} image={image}/>
      <hr/>
      <NursingHomeChiefInfoEditBlock chiefInfo={chiefInfo} />
      <hr/>
      <NursingHomeManagerInfoEditBlock membersArray={membersArray}/>
      <NursingHomeImageEditBlock prevImages={renderImages} />
      <hr/>
      <OvalLarge btnText="저장하기" onClick={()=>onSubmit()}/>
    </React.Fragment>
  );
};

export default MgNHInfoEdit;