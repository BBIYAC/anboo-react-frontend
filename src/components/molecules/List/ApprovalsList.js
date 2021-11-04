import React from "react";
import ApprovalInfoBlock from "../Block/ApprovalInfoBlock";

const ApprovalsList = () => {
  return (
    <React.Fragment>
      <div className="div-managementScroll">
        <ApprovalInfoBlock/>
        <ApprovalInfoBlock/>
        <ApprovalInfoBlock/>
        <ApprovalInfoBlock/>
        <ApprovalInfoBlock/>
      </div>
    </React.Fragment>
  );
};

export default ApprovalsList;