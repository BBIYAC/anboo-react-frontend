import React, {useState, useRef } from 'react';
import AddNHImage from '../Button/AddNHImage';

const AddNursingHomeImage = () => {
  const fileInput = useRef();
  const [files, setFiles] = useState();
  const onChange = (e) => {
      console.log(e.target.files[0].name, e.target.files[0].size); // 파일 이름, 바이트        
      setFiles(e.target.files[0]);
  };

    return(
      <>
        <AddNHImage onClick={() => fileInput.current.click()}/>
        {/* <BsPlusLg className="addMiddle-mg" onClick={() => fileInput.current.click()}/> */}
        <input type="file" ref={fileInput} onChange={onChange} style={{display:'none'}}></input>
      </>
    );
};

export default AddNursingHomeImage;