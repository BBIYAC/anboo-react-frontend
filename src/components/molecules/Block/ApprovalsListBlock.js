import React from "react";
import OvalSmall from "../../atoms/Button/OvalSmall";
import ApprovalsList from "../List/ApprovalsList";
import {IoIosCheckmarkCircleOutline} from 'react-icons/io';
import {IoIosCheckmarkCircle} from 'react-icons/io';

const ApprovalsListBlock = () => {
  return (
    <React.Fragment>
      <hr/>
      <div className="approvalsListTitle">
        <OvalSmall btnText="등록 승인"/>
        요양자 등록 승인
        <div className="div-allSelect">
          <span className="span-allSelect">모두 선택</span>
          <IoIosCheckmarkCircleOutline className="btn-allSelect"/>
        </div>
      </div>
      <hr/> 
      <ApprovalsList/>
    </React.Fragment>
  );
};

export default ApprovalsListBlock;