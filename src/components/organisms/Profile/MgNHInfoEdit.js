import React, { useState, useEffect } from "react";
import NursingHomeDetailInfoEditBlock from "../../molecules/Block/NursingHomeDetailInfoEditBlock";
import NursingHomeChiefInfoEditBlock from "../../molecules/Block/NursingHomeChiefInfoEditBlock";
import NursingHomeManagerInfoEditBlock from "../../molecules/Block/NursingHomeManagerInfoEditBlock";
import NursingHomeImageEditBlock from "../../molecules/Block/NursingHomeImageEditBlock";
import OvalLarge from "../../atoms/Button/OvalLarge";
import NhImageGrid from "../../molecules/Block/NhImageGrid";
import axios from "axios";
import { apiUrl } from "../../../pages/ApiURL";
import { useHistory } from "react-router";

const MgNHInfoEdit = ({
  onClick, 
  id,
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
  position}) => {
  const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')}
  const [changeValue, setChangeValue] = useState([]);

  // 요양원 정보 수정
  const [nhInfo, setNhInfo] = useState({
    nh_id : "",
    nh_name : "",
    nh_operating_hour :"",
    nh_tel : "",
    nh_address : "",
    nh_representative_picture : ""
  });

  // 요양원 직원 정보 수정
  const [nhEmployeeList, setNHEmployeeList] = useState([{
    nh_employee_id: "",
    nh_employee_name: "",
    nh_employee_tel : "",
    nh_employee_position: '',
    nh_employee_images: ''
  }]);

  // const [nhEmployeeImages, setNhEmployeeImages] = useState([]); // 직원 이미지 배열
  const [nhImageList, setNhImageList] = useState([]); // 활동 이미지 배열



  let history = useHistory();
  const onSubmit = () => {
    // onClick();
    var formData = new FormData()

    formData.append("nh_representative_picture", nhInfo.nh_representative_picture);
    // formData.append("nh_employee_images", nhEmployeeImages);
    formData.append("nh_image_list", nhImageList);
    formData.append("nh_info", JSON.stringify(formData));
    formData.append("nh_employee_list", nhEmployeeList);
    console.log(nhEmployeeList);
    

    // console.log(nhInfo.nh_representative_picture, nhImageList, nhInfo, nhEmployeeList)
    console.log("-------------------------------------------");
    for(let pair of formData.entries()) {
      console.log(pair[0], ':', pair[1]);
    }
    
    // // FormData의 key, value 확인
    // for (let value of formData.values()) {
    //     console.log(value);
    //   }
    // for (let key of formData.keys()) {
    //   console.log(key);
    // }

    // axios detail edit POST
    // axios({url:`${apiUrl}/supervisor/nh-info/`,method : 'post' ,headers:headers, data: formData})
    // .then(response =>{
    //   console.log(response)
    // }).catch(error => { 
    //     console.error(error);
    // })

    history.goBack(-1);
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
    'chiefPosition': position,
    'chiefImage': chiefImage,
    'chiefId' : membersArray[0].id
  }

  return(
    <React.Fragment>
      <NursingHomeDetailInfoEditBlock 
        id={id}
        name={name} 
        tel={tel} 
        address={address} 
        time={time} 
        image={image} 
        setNhInfo={setNhInfo}/>

      <hr/>

      <NursingHomeChiefInfoEditBlock 
        chiefInfo={chiefInfo}
        nhEmployeeList={nhEmployeeList}
        setNHEmployeeList={setNHEmployeeList} />

      <hr/>

      <NursingHomeManagerInfoEditBlock 
        membersArray={membersArray}
        nhEmployeeList={nhEmployeeList}
        setNHEmployeeList={setNHEmployeeList}
        changeValue={changeValue}
        setChangeValue={setChangeValue} />

      <NursingHomeImageEditBlock 
        nhImageList={nhImageList}
        setNhImageList={setNhImageList} />
      <hr/>
      <OvalLarge btnText="저장하기" onClick={()=>onSubmit()}/>
    </React.Fragment>
  );
};

export default MgNHInfoEdit;