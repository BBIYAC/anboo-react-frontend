import React, { useEffect, useState } from "react";
import TextIcon from "../../atoms/Button/TextIcon";
import ImageSmall from "../../atoms/Input/ImageSmall";
import RoundRectangleSmall from "../../atoms/Button/RoundRectangleSmall";
import {AiOutlineDoubleRight} from 'react-icons/ai';


const ApprovalsListBlock = () => {
  const memberInfo = [
    { image: <ImageSmall/>, name: "김갑수", year: "2001.01.01" },
    { image: <ImageSmall/>, name: "이갑수", year: "2002.01.01" },
    { image: <ImageSmall/>, name: "박갑수", year: "2003.01.01" },
    { image: <ImageSmall/>, name: "최갑수", year: "2004.01.01" },
    { image: <ImageSmall/>, name: "권갑수", year: "2005.01.01" },
  ];
  /*
  axios register member list GET
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

  return (
    <React.Fragment>
      <hr/>

      <div className="membersListTitle">
        <span>요양자 등록 승인 목록</span>
      </div> 

      <hr/>

      <div className="managementOption">
        <TextIcon 
        btnText="등록 승인" 
        icon={<AiOutlineDoubleRight size="13"/>}/>
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
        {members.map(member => (
        <div className="div-list">
          {member.image}
          <div className="div-info">
            <div className="listInfo-name">{member.name} 님</div>
            <div className="listInfo-year">요청날짜: {member.year}</div>
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

export default ApprovalsListBlock;