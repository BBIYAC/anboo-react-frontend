import React from "react";
import {AiOutlineExclamationCircle} from 'react-icons/ai';

const  NotRegisteredEmptyActImages = ({color}) => {
  return (
    <React.Fragment>
      <div className="div_emptyNotice" style={{color}}>
        <AiOutlineExclamationCircle size='80'/>
        <span>요양원 활동 이미지가 게시되지 않았습니다.</span>
      </div>
    </React.Fragment>
  );
};

export default NotRegisteredEmptyActImages;