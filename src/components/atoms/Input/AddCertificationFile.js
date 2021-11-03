import React, {useState, useRef} from "react";
import {AiOutlinePaperClip} from 'react-icons/ai';
import {IoIosClose} from 'react-icons/io';

const AddCertificationFile = () => {
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

    return(
        <>
            <hr></hr>
            {
                isUpload
                ?<div className='input-certificationfile-upload'>
                {files.map((file, idx)=> 
                    <div className='file-upload' key={idx}>
                        <p className='txt_filename'><AiOutlinePaperClip size='20' /> {file.name}</p> 
                        <div>{fileSize(file.size)}</div>
                    </div>
                )}</div>
                :<div className='input-certificationfile'> 
                    <div>증빙서류를 제출해주세요.</div>
                </div>
            }
            <button type='button' className='btn-fileUpload' onClick={(e)=>{setIsUpload(false);setFiles([]);}} >전체 삭제</button>
            <button type='button' className='btn-fileUpload' onClick={() => fileInput.current.click()} >파일 올리기</button>
            <input type='file' name='files[]' ref={fileInput} onChange={onChange} hidden multiple></input>

        </>
    );
};

export default AddCertificationFile;