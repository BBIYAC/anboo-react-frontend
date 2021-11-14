import React from "react";
import NursingHomeDetailInfoBlock from "../../molecules/Block/NursingHomeDetailInfoBlock";
import NursingHomeChiefInfoBlock from "../../molecules/Block/NursingHomeChiefInfoBlock";
import NursingHomeManagerInfoBlock from "../../molecules/Block/NursingHomeManagerInfoBlock";
import NursingHomeImageBlock from "../../molecules/Block/NursingHomeImageBlock";
import OvalLarge from "../../atoms/Button/OvalLarge";

const MgNHInfo = ({onClick}) => {
  return(
    <>
      <NursingHomeDetailInfoBlock width="0" height="0"/>
      <hr/>
      <NursingHomeChiefInfoBlock />
      <hr/>
      <ul>
        <NursingHomeManagerInfoBlock />
        <NursingHomeManagerInfoBlock />
        <NursingHomeManagerInfoBlock />
      </ul>
        <NursingHomeImageBlock />
      <hr/>
      <OvalLarge btnText="수정하기" onClick={onClick}/>
    </>
  );
};

export default MgNHInfo;