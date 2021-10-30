import React from "react";
import OvalSmall from "../../atoms/Button/OvalSmall";
import MembersList from "../List/MembersList";
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {AiFillCheckCircle} from 'react-icons/ai';

const MembersListBlock = () => {
  return (
    <React.Fragment>
      <hr/>
      <div className="membersListTitle">
        <OvalSmall btnText="활동 등록"/>
        총 회원 목록
        <div className="div-allSelect">
          <span className="span-allSelect">모두 선택</span>
          <AiOutlineCheckCircle className="btn-allSelect"/>
        </div>
      </div> 
      <hr/>
      <MembersList/>
    </React.Fragment>
  );
};

export default MembersListBlock;