import React, {useState, useRef, useEffect} from "react";
import {AiOutlinePaperClip} from 'react-icons/ai';

const AddCertificationFile = ({setUploadFiles}) => {
  const fileInput = useRef();
  const [files, setFiles] = useState([]);
  const [isUpload, setIsUpload] = useState(false);
  const fileSize = (size) => {
      if(size > 1000000){
          return (size/1000000).toFixed(2)+'MB';
      }
      else if(size > 1000){
          return (size/1000).toFixed(2)+'KB';
      }
  };
  const onChange = (e) => {
      setFiles([...files, ...e.target.files]);
      (e.target.files.length > 0)? setIsUpload(true) : setIsUpload(false);
  };
  
  useEffect(()=>{
      setUploadFiles(files);
  },[files])

  return(
    <>
      <hr></hr>
      {
        isUpload
        ?<div className='input-certificationfile-upload'>
        {files.map((file, idx)=> 
          <div className='file-upload' key={idx}>
            <p className='txt-fileName'><AiOutlinePaperClip size='20' /> {file.name}</p> 
            <div className='txt-fileSize'>{fileSize(file.size)}</div>
          </div>
        )}</div>
        :<div className='input-certificationfile' onClick={() => fileInput.current.click()}> 
            <div>증빙서류를 제출해주세요.</div>
        </div>
    }
      <div className='div-fileButton'>
        <button type='button' className='btn-fileDelete' onClick={()=>{setFiles([]);setIsUpload(false); fileInput.current.value=null;}} >삭제</button>
        <button type='button' className='btn-fileUpload' onClick={() => fileInput.current.click()} >추가</button>
        <input type='file' ref={fileInput} onChange={onChange} hidden multiple></input>
      </div> 
    </>
  );
};

export default AddCertificationFile;