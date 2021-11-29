import React, { useState } from "react";
import NursingHomeDetailInfoEditBlock from "../../molecules/Block/NursingHomeDetailInfoEditBlock";
import NursingHomeChiefInfoEditBlock from "../../molecules/Block/NursingHomeChiefInfoEditBlock";
import NursingHomeManagerInfoEditBlock from "../../molecules/Block/NursingHomeManagerInfoEditBlock";
import NursingHomeImageEditBlock from "../../molecules/Block/NursingHomeImageEditBlock";
import OvalLarge from "../../atoms/Button/OvalLarge";
import axios from "axios";
import { apiUrl } from "../../../pages/ApiURL";
import { useHistory } from "react-router";

const MgNHInfoEdit = ({
  id,
  name, 
  tel, 
  address, 
  representativeImage, 
  images, 
  membersArray,
  chiefName,
  chiefTel,
  chiefImage,
  time}) => {
  const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')}
  const [changeValue, setChangeValue] = useState([]);
  const [postCheck, setPostCheck] = useState([false, false, false, false]);

  // 요양원 정보 수정
  const [nhInfo, setNhInfo] = useState({
    nh_id : "",
    nh_name : "",
    nh_operating_hour : "",
    nh_tel : "",
    nh_address : "",
    nh_representative_image : ""
  });

  // 요양원 직원 정보 수정
  const [nhEmployeeList, setNHEmployeeList] = useState([{
    nh_employee_name: "",
    nh_employee_tel : "",
    nh_employee_images: '',
    nh_employee_position : '',
  }]);

  const [nhImageList, setNhImageList] = useState([]); // 활동 이미지 배열

  let history = useHistory();
  const onSubmit = () => {
    
    console.log(nhInfo)
    console.log(nhEmployeeList)
    console.log(nhImageList)

    let representative_form_data = new FormData();
    let activity_image_list_formdata = new FormData();
    for (let i of nhImageList) {
      activity_image_list_formdata.append("nh_image_list", i.file);

    }
    for (let key in nhInfo) {
      if (key == 'nh_id') {
        representative_form_data.append('id', nhInfo[key]);
      }
      representative_form_data.append(key, nhInfo[key]);
    }

    axios({ url: `${apiUrl}/supervisor/save-nh-info/`, method: 'put', headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken'), 'Content-Type': 'multipart/form-data' }, data: representative_form_data })
      .then(response => {
        console.log(response)
      }).catch(error => {
        console.error(error);
      })
    axios({ url: `${apiUrl}/supervisor/save-activity-images/`, method: 'post', headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken'), 'Content-Type': 'multipart/form-data' }, data: activity_image_list_formdata })
      .then(response => {
        console.log(response)
      }).catch(error => {
        console.error(error);
      })

    axios({ url: `${apiUrl}/supervisor/save-employee-info/`, method: 'post', headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') }, data: nhEmployeeList })
      .then(response => {
        for (let val2 of response.data) {
          for (let val1 of nhEmployeeList) {
            if (val1.nh_employee_tel == val2.nh_employee_tel) {
              let nh_employee_image_form_data = new FormData();
              nh_employee_image_form_data.append("nh_employee_id", val2.id);
              nh_employee_image_form_data.append("nh_employee_image", val1.nh_employee_image);

              axios({ url: `${apiUrl}/supervisor/save-employee-image/`, method: 'post', headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken'), 'Content-Type': 'multipart/form-data' }, data: nh_employee_image_form_data })
                .then(response => {
                  console.log(response.data)
                  history.go(0); // 새로고침

                }).catch(error => {
                  console.error(error);
                })
            }
          }
        }
      }).catch(error => {
        console.error(error);
      })

    }

  const chiefInfo = {
    'chiefName': chiefName,
    'chiefTel': chiefTel,
    'chiefImage': chiefImage,
  }

  return(
    <React.Fragment>
      <NursingHomeDetailInfoEditBlock 
        id={id}
        name={name} 
        tel={tel} 
        address={address} 
        time={time} 
        representativeImage={representativeImage} 
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
        editImgs={images}
        setNhImageList={setNhImageList} />
      <hr/>
      <OvalLarge btnText="저장하기" onClick={()=>onSubmit()}/>
    </React.Fragment>
  );
};

export default MgNHInfoEdit;