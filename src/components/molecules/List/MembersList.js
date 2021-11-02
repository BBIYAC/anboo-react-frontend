import React from "react";
import MemberInfoBlock from "../Block/MemberInfoBlock";

const MembersList = ({onClick}) => {
  
  return (
    <React.Fragment>
      <div className="div-managementScroll">
        <MemberInfoBlock onClick={onClick}/>
        <MemberInfoBlock onClick={onClick}/>
        <MemberInfoBlock onClick={onClick}/>
      </div>
    </React.Fragment>
  );
};

export default MembersList;