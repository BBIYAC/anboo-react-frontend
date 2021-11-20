import React from "react";
import {AiOutlineExclamationCircle} from 'react-icons/ai';

const  NotRegisteredEmptyNotice = () => {
  return (
    <React.Fragment>
      <div className="div_emptyManager">
        <AiOutlineExclamationCircle size='100'/>
        <span>요양사 정보가 게시되지 않았습니다.</span>
      </div>
      <hr></hr>
      <div className="div_emptyActImage">
        <AiOutlineExclamationCircle size='100'/>
        <span>요양원 활동 이미지가 게시되지 않았습니다.</span>
      </div>
    </React.Fragment>
  );
};

export default NotRegisteredEmptyNotice;