import React, { useState } from "react";
import ImageMiddle from "../../atoms/Input/ImageMiddle";
import MembersInfo from "../../atoms/Label/MembersInfo";
import {IoIosCheckmarkCircleOutline} from 'react-icons/io';
import {IoIosCloseCircleOutline} from 'react-icons/io';

const MemberInfoBlock = () => {
  const [isSummary, setSummary] = useState(true);
  const [isBtnColor, setBtnColor] = useState("var(--color-dark)");
  const onClick = () => {
    if(isSummary){
      setSummary(false);
      setBtnColor("var(--color-green)");
    }
    else {
      setSummary(true);
      setBtnColor("var(--color-datk)")
    }
  }
  return (
    <React.Fragment>
      <div className="member">
        <div className="div-memberInfo">
          <ImageMiddle />
          <MembersInfo />
        </div>
        <div>
          {isSummary
          ?<IoIosCheckmarkCircleOutline 
            color={isBtnColor}
            onClick={onClick} 
            size="30"/>
          :<IoIosCheckmarkCircleOutline 
            color={isBtnColor}
            onClick={onClick} 
            size="30"/>
          }
          <IoIosCloseCircleOutline size="30" color="var(--color-red)"/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MemberInfoBlock;