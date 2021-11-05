import React from "react";
import MemberInfoBlock from "../Block/MemberInfoBlock";

const MembersList = ({isAllSelect}) => {
  
  return (
    <React.Fragment>
      <div className="div-managementScroll">
        <MemberInfoBlock isAllSelect={isAllSelect}/>
        <MemberInfoBlock isAllSelect={isAllSelect}/>
        <MemberInfoBlock isAllSelect={isAllSelect}/>
        <MemberInfoBlock isAllSelect={isAllSelect}/>
        <MemberInfoBlock isAllSelect={isAllSelect}/>
      </div>
    </React.Fragment>
  );
};

export default MembersList;