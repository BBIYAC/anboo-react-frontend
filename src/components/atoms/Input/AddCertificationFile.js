import React, {useState, useRef} from "react";
import {AiOutlinePaperClip} from 'react-icons/ai';
import {IoIosClose} from 'react-icons/io';

const AddCertificationFile = () => {
    const fileInput = useRef();
    const [files, setFiles] = useState([]);
    const [isUpload, setIsUpload] = useState(false);
    const onChange = (e) => {
        setFiles([...e.target.files]);
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
                        <div><AiOutlinePaperClip size='20' /> {file.name}</div> 
                        <div>{(file.size/1000).toFixed(2)+'KB'} <IoIosClose size="30" onClick={()=>{setIsUpload(false);setFiles([]);}} /></div>
                    </div>
                )}</div>
                :<div className='input-certificationfile'> 
                <div>증빙서류를 제출해주세요.</div>
                <button type='button' className='btn-fileUpload' onClick={() => fileInput.current.click()} >파일 올리기</button>
                </div>
            }
           
            <input type='file' name='files[]' ref={fileInput} onChange={onChange} hidden multiple></input>

        </>
    );
};

export default AddCertificationFile;