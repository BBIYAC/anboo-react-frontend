import React, { useEffect, useState } from "react";
import TextIcon from "../../atoms/Button/TextIcon";
import ImageSmall from "../../atoms/Input/ImageSmall";
import {AiOutlineDoubleRight} from 'react-icons/ai';
import RoundRectangleSmall from "../../atoms/Button/RoundRectangleSmall";
import { useHistory } from "react-router";
import axios from "axios";
import { apiUrl } from '../../../pages/ApiURL';

const MembersListBlock = () => {
  const history = useHistory();
  const [members, setMembers] = useState([]);
  // axios member list GET
  const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')}
  useEffect(()=>{
    axios({url:`${apiUrl}/supervisor/nh-nok-list/`,method : 'get' ,headers:headers})
    .then(response =>{
      setMembers(response.data.np_info);
    }).catch(error => { 
        console.error(error);
    })
    
  },[])

  const handleChange = (e) => {
    const {name, checked} = e.target;
    if(name === "allSelect") {
      let tempMember = members.map(member => { 
        return {...member, isChecked : checked};
      });
      setMembers(tempMember);
    } else {
      let tempMember = members.map(member => 
        member.np_name === name ? {...member, isChecked : checked} : member
      );
      setMembers(tempMember);
    }
  };


  const onClick = () => {
    const selected = members.filter((member) => {return member?.isChecked});
    const data = {}
    const temp_array = []
    for (let i=0; i<selected.length; i++){
      let temp = {}
      temp['np_name'] = selected[i].np_name; 
      temp['np_date'] = selected[i].np_date;
      temp_array.push(temp);
    }
    data['selected'] = temp_array;
    data["members"] = members.length;
    selected.length > 0 && history.push({pathname: '/mg/acts', state: {params: data}})
    
  }

  const onDelete = (e) => {
    const {id} = e.target
    axios({url:`${apiUrl}/supervisor/nh-nok-list/`,method : 'delete' ,headers:headers, data:{
      user_id: id,
    }})
    .then(response =>{
      window.location.reload();
    }).catch(error => { 
        console.error(error);
    })
  }

  return (
    <React.Fragment>
      <hr/>

      <div className="membersListTitle">
        <span>총 회원 목록</span>
      </div> 

      <hr/>

      <div className="managementOption" >
        <TextIcon
          btnText="활동 등록" 
          icon={<AiOutlineDoubleRight size="13"/>}
          onClick={onClick}
        />
        <div className="btn-option">
          <label className="lbl-allSelect">모두 선택</label>
          <input 
            name="allSelect"
            type="checkbox"
            checked = {members.filter(member => member?.isChecked !== true).length < 1}
            onChange={handleChange}/>
        </div>
      </div>

      <hr/>

      <div className="div-managementScroll">
        {members.map((member, idx) => (
        <div className="div-list" key={idx}>
          <ImageSmall url={member.image} />
          <div className="div-info">
            <div className="listInfo-name">{member.np_name} 님</div>
            <div className="listInfo-year">생년월일: {member.np_date.split('-')[0]+'.'
                                                    + member.np_date.split('-')[1]+'.'
                                                    + member.np_date.split('-')[2]}</div>
          </div>
          
          <div className="div-checkBoxAndDelete">
            <RoundRectangleSmall id={member.integrated_id} btnText="삭제" onClick={onDelete}/>
            <input type="checkbox" 
            className="form-check-input" 
            name={member.np_name}
            checked={member?.isChecked || false}
            onChange={handleChange}/>
          </div>
        </div>
      ))}
      </div>
    </React.Fragment>
  );
};

export default MembersListBlock;