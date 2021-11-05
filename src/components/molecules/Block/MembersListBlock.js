import React, { useState } from "react";
import TextIcon from "../../atoms/Button/TextIcon";
import MembersList from "../List/MembersList";
import {AiOutlineCheck} from 'react-icons/ai';
// import {AiFillCheckCircle} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineDoubleRight} from 'react-icons/ai';

const MembersListBlock = () => {
  const [isSummary, setSummary] = useState(true);
  const [isBtnColor, setBtnColor] = useState("var(--color-dark)");
  // 전체 선택과 전체 선택 해제
  const onClick = () => {
    if(isSummary){
      setSummary(false);
      setBtnColor("var(--color-green)");
    }
    else {
      setSummary(true);
      setBtnColor("var(--color-datk)")
    }
  }
  
  // 개별 선택으로 다 선택되었을 때 전체 선택 체크

  // 전체 선택 후 개별 선택 해제 시 전체 선택 체크 해제
  return (
    <React.Fragment>
      <hr/>
      <div className="membersListTitle">
        <span>총 회원 목록</span>
      </div> 
      <hr/>
      <div className="managementOption">
        <TextIcon 
        btnText="활동 등록" 
        icon={<AiOutlineDoubleRight size="13"/>}/>
        {isSummary
        ?<TextIcon 
          btnText="모두 선택"
          icon={<AiOutlineCheck size="13" />}
          backgroundColor="var(--color-white)"
          border="1px solid"
          color={isBtnColor}
          onClick={onClick}/>
        :<TextIcon 
          btnText="모두 해제"
          icon={<AiOutlineCheck size="13" />}
          backgroundColor="var(--color-white)"
          border="1px solid"
          color={isBtnColor}
          onClick={onClick}/>
        }
      </div>
      <hr />
      <MembersList />
      {/* <SeeMore className="manager seemore" text="더 보기" icon={<AiOutlinePlus size="15"/>}/> */}
    </React.Fragment>
  );
};

export default MembersListBlock;