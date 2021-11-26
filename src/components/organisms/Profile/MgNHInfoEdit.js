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
  time,}) => {
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
    nh_employee_name: "",
    nh_employee_tel : "",
    nh_employee_images: '',
    nh_employee_position : '',
  }]);

  // const [nhEmployeeImages, setNhEmployeeImages] = useState([]); // 직원 이미지 배열
  const [nhImageList, setNhImageList] = useState([]); // 활동 이미지 배열


  

  let history = useHistory();
  const onSubmit = () => {
    // onClick();
    // var formData = new FormData()

    // formData.append("nh_representative_picture", nhInfo.nh_representative_picture);
    // // formData.append("nh_employee_images", nhEmployeeImages);
    // formData.append("nh_image_list", nhImageList);
    // formData.append("nh_info", JSON.stringify(formData));
    // formData.append("nh_employee_list", nhEmployeeList);
    // // console.log(nhImageList);
    

    // console.log(nhInfo.nh_representative_picture, nhImageList, nhInfo, nhEmployeeList)
    // // console.log("-------------------------------------------");
    // // for(let pair of formData.entries()) {
    // //   console.log(pair[0], ':', pair[1]);
    // // }
    
    // // // FormData의 key, value 확인
    // // for (let value of formData.values()) {
    // //     console.log(value);
    // //   }
    // // for (let key of formData.keys()) {
    // //   console.log(key);
    // // }

    // // axios detail edit POST
    // // axios({url:`${apiUrl}/supervisor/nh-info/`,method : 'post' ,headers:headers, data: formData})
    // // .then(response =>{
    // //   console.log(response)
    // // }).catch(error => { 
    // //     console.error(error);
    // })

    console.log(nhInfo)
    console.log(nhEmployeeList)
    console.log(nhImageList)

    




    let activity_image_list_formdata = new FormData();
    let representative_form_data = new FormData();
    for (let i of nhImageList) {
      // console.log(i)
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

    console.log(nhEmployeeList)
    axios({ url: `${apiUrl}/supervisor/save-employee-info/`, method: 'post', headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') }, data: nhEmployeeList })
      .then(response => {
        console.log(response.data)
        for (let val2 of response.data) {
          for (let val1 of nhEmployeeList) {
            let phonenumber = '+82' + val1.nh_employee_tel.replace(/-/gi, '').slice(1, val1.nh_employee_tel.replace(/-/gi, '').length)
            if (phonenumber == val2.nh_employee_tel) {
              console.log(val2)
              console.log(val1)
              console.log("-----------");
              let nh_employee_image_form_data = new FormData();
              nh_employee_image_form_data.append("nh_employee_id", val2.id);
              nh_employee_image_form_data.append("nh_employee_image", val1.nh_employee_image);

              axios({ url: `${apiUrl}/supervisor/save-employee-image/`, method: 'post', headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken'), 'Content-Type': 'multipart/form-data' }, data: nh_employee_image_form_data })
                .then(response => {
                  console.log(response.data)

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
        editImgs={images}
        setNhImageList={setNhImageList} />
      <hr/>
      <OvalLarge btnText="저장하기" onClick={()=>onSubmit()}/>
    </React.Fragment>
  );
};

export default MgNHInfoEdit;