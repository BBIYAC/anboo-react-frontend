import React, { useEffect, useState } from "react";
import TextIcon from "../../atoms/Button/TextIcon";
import ImageSmall from "../../atoms/Input/ImageSmall";
import {AiOutlineDoubleRight} from 'react-icons/ai';
import RoundRectangleSmall from "../../atoms/Button/RoundRectangleSmall";
import { useHistory } from "react-router";

const MembersListBlock = () => {
  const history = useHistory();
  const memberInfo = [
    { image: <ImageSmall/>, name: "김순덕", year: "2001.01.01" },
    { image: <ImageSmall/>, name: "이순덕", year: "2002.01.01" },
    { image: <ImageSmall/>, name: "박순덕", year: "2003.01.01" },
    { image: <ImageSmall/>, name: "최순덕", year: "2004.01.01" },
    { image: <ImageSmall/>, name: "권순덕", year: "2005.01.01" },
  ];
  /*
  axios member list GET
  */
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(memberInfo);
  }, []);

  const handleChange = (e) => {
    const {name, checked} = e.target;
    if(name === "allSelect") {
      let tempMember = members.map(member => { 
        return {...member, isChecked : checked};
      });
      setMembers(tempMember);
    } else {
      let tempMember = members.map(member => 
        member.name === name ? {...member, isChecked : checked} : member
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
      temp['name'] = selected[i].name; 
      temp['year'] = selected[i].year;
      temp_array.push(temp);
    }
    data['selected'] = temp_array;
    data["members"] = members.length;
    selected.length > 0 && history.push({pathname: '/mg/acts', state: {params: data}})
    
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
        {members.map(member => (
        <div className="div-list">
          {member.image}
          <div className="div-info">
            <div className="listInfo-name">{member.name} 님</div>
            <div className="listInfo-year">생년월일: {member.year}</div>
          </div>
          
          <div className="div-checkBoxAndDelete">
            <RoundRectangleSmall btnText="삭제"/>
            <input type="checkbox" 
            className="form-check-input" 
            name={member.name}
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