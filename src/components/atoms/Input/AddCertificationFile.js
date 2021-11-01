import React, {useRef} from "react";

const AddCertificationFile = ({file, setFile}) => {
    const fileInput = useRef(null)
    const onChange = async e => {
        if(e.target.files && e.target.files.length > 0){
            setFile(e.targe.files[0])
        }
    }
    return(
        <>
            <hr></hr>
            <div className='input-certificationfile' onClick={() => fileInput.current.click()} >증빙서류를 제출해주세요.</div>
            <input type='file' ref={fileInput} onChange={onChange} hidden></input>
        </>
    );
};

export default AddCertificationFile;