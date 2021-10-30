import React from "react";
import ApprovalInfoBlock from "../Block/ApprovalInfoBlock";

const ApprovalsList = () => {
  return (
    <React.Fragment>
      <div className="div-managementScroll">
        <ul>
          <li><ApprovalInfoBlock/></li>
          <li><ApprovalInfoBlock/></li>
          <li><ApprovalInfoBlock/></li>
          <li><ApprovalInfoBlock/></li>
          <li><ApprovalInfoBlock/></li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ApprovalsList;