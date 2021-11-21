import React from "react";
import NursingHomeDetailInfoEditBlock from "../../molecules/Block/NursingHomeDetailInfoEditBlock";
import NursingHomeChiefInfoEditBlock from "../../molecules/Block/NursingHomeChiefInfoEditBlock";
import NursingHomeManagerInfoEditBlock from "../../molecules/Block/NursingHomeManagerInfoEditBlock";
import NursingHomeImageEditBlock from "../../molecules/Block/NursingHomeImageEditBlock";
import OvalLarge from "../../atoms/Button/OvalLarge";

const MgNHInfoEdit = ({onClick, name, tel, address, image}) => {
  return(
    <React.Fragment>
      <NursingHomeDetailInfoEditBlock name={name} tel={tel} address={address} image={image}/>
      <hr/>
      <NursingHomeChiefInfoEditBlock />
      <hr/>
      <NursingHomeManagerInfoEditBlock/>
      <NursingHomeImageEditBlock />
      <hr/>
      <OvalLarge btnText="저장하기" onClick={onClick}/>
    </React.Fragment>
  );
};

export default MgNHInfoEdit;