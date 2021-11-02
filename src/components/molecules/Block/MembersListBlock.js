import React from "react";
import TextIcon from "../../atoms/Button/TextIcon";
import MembersList from "../List/MembersList";
import SeeMore from "../../atoms/Button/SeeMore";
import {AiOutlineCheck} from 'react-icons/ai';
// import {AiFillCheckCircle} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineDoubleRight} from 'react-icons/ai';

const MembersListBlock = () => {
  return (
    <React.Fragment>
      <hr/>
      <div className="membersListTitle">
        <span>총 회원 목록</span>
      </div> 
      <hr/>
      <div className="managementOption">
        <TextIcon btnText="활동 등록" icon={<AiOutlineDoubleRight size="13"/>}/>
        <TextIcon 
        btnText="모두 선택" 
        icon={<AiOutlineCheck size="13" />}
        backgroundColor="var(--color-white)"
        border="1px solid"
        color="var(--color-green)"/>
      </div>
      <MembersList/>
      <SeeMore className="members seemore" text="더 보기" icon={<AiOutlinePlus size="15"/>}/>
    </React.Fragment>
  );
};

export default MembersListBlock;