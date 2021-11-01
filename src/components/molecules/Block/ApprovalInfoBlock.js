import React from "react";
import ImageMiddle from "../../atoms/Input/ImageMiddle";
import ApprovalsInfo from "../../atoms/Label/ApprovalsInfo";
import {IoIosCheckmarkCircleOutline} from 'react-icons/io';
import {IoIosCheckmarkCircle} from 'react-icons/io';
import {IoIosCloseCircleOutline} from 'react-icons/io';
import {IoIosCloseCircle} from 'react-icons/io';

const ApprovalInfoBlock = () => {
  return (
    <React.Fragment>
      <div className="approval">
        <div className="div-approvalInfo">
          <ImageMiddle/>
          <ApprovalsInfo/>
        </div>
        <div>
          <IoIosCheckmarkCircleOutline size="30" color="var(--color-green)"/>
          <IoIosCloseCircleOutline size="30" color="var(--color-red)"/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ApprovalInfoBlock;