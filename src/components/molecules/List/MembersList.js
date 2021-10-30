import React from "react";
import MemberInfoBlock from "../Block/MemberInfoBlock";

const MembersList = () => {
  return (
    <React.Fragment>
      <div className="div-managementScroll">
        <MemberInfoBlock/>
        <MemberInfoBlock/>
        <MemberInfoBlock/>
        <MemberInfoBlock/>
        <MemberInfoBlock/>  
      </div>
    </React.Fragment>
  );
};

export default MembersList;