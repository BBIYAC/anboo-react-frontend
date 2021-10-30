import React from "react";
import NursingHomeDetailInfoEditBlock from "../../molecules/Block/NursingHomeDetailInfoEditBlock";
import NursingHomeChiefInfoEditBlock from "../../molecules/Block/NursingHomeChiefInfoEditBlock";
import NursingHomeManagerInfoEditBlock from "../../molecules/Block/NursingHomeManagerInfoEditBlock";
// import NursingHomeImageBlock from "../../molecules/Block/NursingHomeImageBlock";
import NursingHomeImageEditBlock from "../../molecules/Block/NursingHomeImageEditBlock";
import OvalLarge from "../../atoms/Button/OvalLarge";

const MgNHInfoEdit = () => {
  return(
    <>
      <NursingHomeDetailInfoEditBlock />
      <hr/>
      <NursingHomeChiefInfoEditBlock />
      <hr/>
      <ul>
        <NursingHomeManagerInfoEditBlock />
        <NursingHomeManagerInfoEditBlock />
        <NursingHomeManagerInfoEditBlock isAdd/>
      </ul>
      <NursingHomeImageEditBlock />
      <hr/>
      <OvalLarge btnText="저장하기"/>
    </>
  );
};

export default MgNHInfoEdit;