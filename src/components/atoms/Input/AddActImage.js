import React, {useState, useRef} from 'react';

const AddActImage = () => {
  const fileInput = useRef();
  const [fileURL, setFileURL] = useState(""); 
  const [isUpload, setIsUpload] = useState(false);
  const onChange = (e) => {
      const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);  
      setFileURL(imageUrl);
      (e.target.files.length > 0)? setIsUpload(true) : setIsUpload(false);
  };
  
  return(
    <React.Fragment>
      {
          isUpload
          ?<div className='input-actImage-after'>
            <img className='input-actImage' src={fileURL}></img>
          </div>
          :<div className='input-actImage-before'> 
            <div>활동 사진을 추가해주세요.</div>
          </div>
      }
      <button type='button' className='btn-actImageUpload' onClick={() => fileInput.current.click()} >사진 업로드</button>
      <input type='file' accept='image/*' ref={fileInput} onChange={onChange} hidden></input>  
    </React.Fragment>
  );
};

export default AddActImage;