import React from "react";
import {AiOutlineExclamationCircle} from 'react-icons/ai';

const NotMemberNotice = () => {
  return (
    <React.Fragment>
      <div className="div-notMemberNotice">
        <AiOutlineExclamationCircle size='100'/>
        <span>로그인 후 확인하실 수 있습니다.</span>
      </div>
    </React.Fragment>
  );
};

export default NotMemberNotice;