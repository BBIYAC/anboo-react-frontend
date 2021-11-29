import React, { useEffect, useState } from "react";
import TextIcon from "../../atoms/Button/TextIcon";
import ImageSmall from "../../atoms/Input/ImageSmall";
import RoundRectangleSmall from "../../atoms/Button/RoundRectangleSmall";
import {AiOutlineDoubleRight} from 'react-icons/ai';
import axios from "axios";
import { apiUrl } from '../../../pages/ApiURL';


const ApprovalsListBlock = () => {
  const [members, setMembers] = useState([]);
  const [users, setUsers] = useState([]);
  // axios register member list GET
  const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')}
  useEffect(()=>{
    axios({url:`${apiUrl}/supervisor/not-approved-nok-list/`,method : 'get' ,headers:headers})
    .then(response =>{
      setMembers(response.data.np_info);
      setUsers(response.data.user_integrated);
    }).catch(error => { 
        console.error(error);
    })
    
  },[])

  const userName = (member) =>{
    let result = ''
    for(let i=0; i<users.length; i++){
      if(users[i].id === member.integrated_id){
        result = users[i].name;
        break;
      }else{
        result = 'Null';
      }
    }
    return result;
  }

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

  const onApproval = () => {
    let selectedUsers = members.filter(member => member?.isChecked === true)
    let userIDs = selectedUsers.map(user => {return user.integrated_id})
    axios({url:`${apiUrl}/supervisor/not-approved-nok-list/`,method : 'put' ,headers:headers, data:{
      user_id: userIDs,
    }})
    .then(response =>{
      window.location.reload();
    }).catch(error => { 
        console.error(error);
    })
  }

  const onDelete = (e) => {
    const {id} = e.target
    axios({url:`${apiUrl}/supervisor/nh-nok-list/`,method : 'delete' ,headers:headers, data:{
      user_id: [id],
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
        <span>요양인 등록 승인 목록</span>
      </div> 

      <hr/>

      <div className="managementOption">
        <TextIcon 
        btnText="등록 승인" 
        icon={<AiOutlineDoubleRight size="13"/>}
        onClick={onApproval}/>
        <div className="btn-option">
          <label className="lbl-allSelect" style={{paddingRight:"0.5rem", fontSize: "0.8rem"}}>모두 선택</label>
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
          {member.image?<ImageSmall url={member.image} />:<ImageSmall url='' /> }
          <div className="div-info">
            <div className="listInfo-name">
              {userName(member)} 님({member.np_name} 님 보호자)</div>
            <div className="listInfo-year">등록 요청일: {
            member.uploaded_date
            ? member.uploaded_date.split('-')[0]+'.'
            + member.uploaded_date.split('-')[1]+'.'
            + member.uploaded_date.split('-')[2].substring(0,2)
            : 'Null'}</div>
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

export default ApprovalsListBlock;