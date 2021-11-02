import React from "react";
import TextIcon from "../../atoms/Button/TextIcon";
import ApprovalsList from "../List/ApprovalsList";
import SeeMore from "../../atoms/Button/SeeMore";
import {AiOutlineCheck} from 'react-icons/ai';
import {AiFillCheckCircle} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineDoubleRight} from 'react-icons/ai';

const ApprovalsListBlock = () => {
  return (
    <React.Fragment>
      <hr/>
      <div className="approvalsListTitle">
        <span>요양자 등록 승인</span>
      </div>
      <hr/> 
      <div className="managementOption">
        <TextIcon btnText="등록 승인" icon={<AiOutlineDoubleRight size="13"/>}/>
        <TextIcon 
        btnText="모두 선택" 
        icon={<AiOutlineCheck size="13"/>}
        backgroundColor="var(--color-white)"
        border="1px solid"
        color="var(--color-green)"/>
      </div>
      <ApprovalsList/>
      <SeeMore className="members seemore" icon={<AiOutlinePlus size="15"/>}/>
    </React.Fragment>
  );
};

export default ApprovalsListBlock;