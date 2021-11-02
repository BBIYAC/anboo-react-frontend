import React, { useState } from "react";
import ImageMiddle from "../../atoms/Input/ImageMiddle";
import MembersInfo from "../../atoms/Label/MembersInfo";
import {IoIosCheckmarkCircleOutline} from 'react-icons/io';
import {IoIosCheckmarkCircle} from 'react-icons/io';
import {IoIosCloseCircleOutline} from 'react-icons/io';
import {IoIosCloseCircle} from 'react-icons/io';

const MemberInfoBlock = () => {
  return (
    <React.Fragment>
      <div className="member">
        <div className="div-memberInfo">
          <ImageMiddle />
          <MembersInfo />
        </div>
        <div>
          <IoIosCheckmarkCircleOutline color="var(--color-green)" size="30"/>
          <IoIosCloseCircleOutline size="30" color="var(--color-red)"/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MemberInfoBlock;