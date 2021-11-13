import React, {useState, useRef } from 'react';
import { BsPlusLg } from 'react-icons/bs';


const AddNHImage = () => {
  const fileInput = useRef();
  const [files, setFiles] = useState();
  const onChange = (e) => {
      console.log(e.target.files[0].name, e.target.files[0].size); // 파일 이름, 바이트        
      setFiles(e.target.files[0]);
  }
  return(
    <React.Fragment>
      <button 
      className="addNhImage"
      onClick={() => fileInput.current.click()}>
        <BsPlusLg /> 
      </button>
      <input type="file" ref={fileInput} onChange={onChange} style={{display:'none'}}></input>
    </React.Fragment>
  );
};

export default AddNHImage;