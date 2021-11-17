import React, {useState} from 'react';

const PostRequestTextArea = ({request, setRequest, onChange}) =>{
  return(
    <React.Fragment>
      <textarea placeholder='요청사항을 작성해주세요.' className="handleResponseStyle" value={request} onChange={onChange}></textarea>
    </React.Fragment>
  );
};

export default PostRequestTextArea;