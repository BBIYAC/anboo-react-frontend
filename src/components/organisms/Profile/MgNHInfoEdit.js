import React, { useState, useEffect } from "react";
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
  time,
  position,}) => {
  const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')}
  const members = [...membersArray];

  // 요양원 정보 수정
  const [nhInfo, setNhInfo] = useState({
    nh_name : "Null",
    nh_operating_hour :"Null",
    nh_tel : "Null",
    nh_address : "Null",
    nh_representative_picture : "Null"
  });

  // 요양원 직원 이미지 정보 수정
  const [nhInfoListObject, setNhInfoListObject] = useState([{
    nh_employee_name: "Null",
    nh_employee_tel : "Null",
    nh_employee_position: 'Null'
  }]);

  const [nhEmployeeImages, setNhEmployeeImages] = useState([]); // 직원 이미지 배열
  const [nhImageList, setNhImageList] = useState([]); // 활동 이미지 배열

  const onSubmit = () => {
    // onClick();
    var formData = new FormData()

    var nh_info = {
            "nh_name" : nhInfo.nh_name,
            "nh_operating_hour" : nhInfo.nh_operating_hour,
            "nh_tel" : nhInfo.nh_tel,
            "nh_address" : nhInfo.nh_address
    }

    var nh_info_list = []
    for(var i = 0 ;i<nhInfoListObject.length;i++){ // the number of the employees
      nh_info_list.push(nhInfoListObject[i])
    }

    formData.append("nh_representative_picture", nhInfo.nh_representative_picture);
    formData.append("nh_employee_images", nhEmployeeImages);
    formData.append("nh_image_list", nhImageList);
    formData.append("nh_info", nh_info);
    formData.append("nh_info_list", nh_info_list);

    // FormData의 key, value 확인
    // for (let pair of formData.entries()) {
    //   console.log(pair[0], ':', pair[1]);
    // }

    console.log(nhInfo, nhInfoListObject, nhEmployeeImages ,nhImageList);

    // axios detail edit POST
    // axios({url:`${apiUrl}/supervisor/nh-info/`,method : 'post' ,headers:headers, data: formData})
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
      <NursingHomeDetailInfoEditBlock 
        name={name} 
        tel={tel} 
        address={address} 
        time={time} 
        image={image} 
        setNhInfo={setNhInfo}/>

      <hr/>

      <NursingHomeChiefInfoEditBlock 
        chiefInfo={chiefInfo}
        nhInfoListObject={nhInfoListObject}
        setNhInfoListObject={setNhInfoListObject}
        nhEmployeeImages={nhEmployeeImages}
        setNhEmployeeImages={setNhEmployeeImages}
        position={position} />

      <hr/>

      <NursingHomeManagerInfoEditBlock 
        membersArray={membersArray}
        nhInfoListObject={nhInfoListObject}
        setNhInfoListObject={setNhInfoListObject}
        nhEmployeeImages={nhEmployeeImages}
        setNhEmployeeImages={setNhEmployeeImages} />

      <NursingHomeImageEditBlock 
        prevImages={renderImages}
        nhImageList={nhImageList}
        setNhImageList={setNhImageList} />
      <hr/>
      <OvalLarge btnText="저장하기" onClick={()=>onSubmit()}/>
    </React.Fragment>
  );
};

export default MgNHInfoEdit;