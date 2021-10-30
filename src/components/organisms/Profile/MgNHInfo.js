import React from "react";
import NursingHomeDetailInfoBlock from "../../molecules/Block/NursingHomeDetailInfoBlock";
import NursingHomeChiefInfoBlock from "../../molecules/Block/NursingHomeChiefInfoBlock";
import NursingHomeManagerInfoBlock from "../../molecules/Block/NusingHomeManagerInfoBlock";
import NursingHomeImageBlock from "../../molecules/Block/NursingHomeImageBlock";
import OvalLarge from "../../atoms/Button/OvalLarge";

const MgNHInfo = () => {
  return(
    <>
      <NursingHomeDetailInfoBlock opacity="0"/>
      <NursingHomeChiefInfoBlock />
      <NursingHomeManagerInfoBlock />
      <NursingHomeImageBlock />
      <hr/>
      <OvalLarge btnText="수정하기"/>
    </>
  );
};

export default MgNHInfo;