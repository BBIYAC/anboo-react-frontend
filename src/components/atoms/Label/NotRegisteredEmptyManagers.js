import React from "react";
import {AiOutlineExclamationCircle} from 'react-icons/ai';

const  NotRegisteredEmptyManagers = ({color}) => {
  return (
    <React.Fragment>
      <div className="div_emptyNotice" style={{color}}>
        <AiOutlineExclamationCircle size='80'/>
        <span>요양사 정보가 게시되지 않았습니다.</span>
      </div>
    </React.Fragment>
  );
};

export default NotRegisteredEmptyManagers;