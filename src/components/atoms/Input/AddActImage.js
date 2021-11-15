import React, {useState, useRef} from 'react';

const AddActImage = ({setUrl}) => {
  const fileInput = useRef();
  const [fileURL, setFileURL] = useState(""); 
  const [isUpload, setIsUpload] = useState(false);
  const onChange = (e) => {
    (e.target.files[0] !== 0)
    ? setFileURL(URL.createObjectURL(e.target.files[0]))
    : setFileURL('')
    (e.target.files.length > 0)? setIsUpload(true) : setIsUpload(false);
    setUrl(URL.createObjectURL(e.target.files[0]));
  };
  
  return(
    <React.Fragment>
      {
          isUpload
          ?<div className='input-actImage-after'>
            <img className='input-actImage' src={fileURL} alt='활동 사진 추가' onClick={() => fileInput.current.click()}></img>
          </div>
          :<div className='input-actImage-before' onClick={() => fileInput.current.click()}> 
            <div>활동 사진을 추가해주세요.</div>
          </div>
      }
      <button type='button' className='btn-actImageUpload' onClick={() => fileInput.current.click()} >사진 업로드</button>
      <input type='file' accept='image/*' ref={fileInput} onChange={onChange} hidden></input>  
    </React.Fragment>
  );
};

export default AddActImage;