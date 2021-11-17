import React from 'react';

const PostActTextArea = ({content, setContent}) =>{
  const onChange = (e) => {
    setContent(e.target.value); 
  }
  return(
    <React.Fragment>
      <textarea 
        placeholder='활동 내용을 작성해주세요.' 
        className="textarea-acts" 
        value={content} 
        onChange={onChange}></textarea>
    </React.Fragment>
  );
};

export default PostActTextArea;