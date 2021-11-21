import React from "react";
import {AiOutlineExclamationCircle} from 'react-icons/ai';

const  NotRegisteredEmptyChief = ({color}) => {
  return (
    <React.Fragment>
      <div className="div_emptyNotice" style={{color}}>
        <AiOutlineExclamationCircle size='80'/>
        <span>요양원장 정보가 게시되지 않았습니다.</span>
      </div>
    </React.Fragment>
  );
};

export default NotRegisteredEmptyChief;