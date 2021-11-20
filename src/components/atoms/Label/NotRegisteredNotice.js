import React from "react";
import {AiOutlineExclamationCircle} from 'react-icons/ai';

const NotRegisteredNotice = () => {
  return (
    <React.Fragment>
      <div className="div-notRegisteredNotice">
        <AiOutlineExclamationCircle size='100'/>
        <span>이 요양원은 등록되지 않은 요양원입니다.</span>
      </div>
    </React.Fragment>
  );
};

export default NotRegisteredNotice;