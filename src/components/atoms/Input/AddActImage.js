import React, {useState, useRef} from 'react';

const AddActImage = () => {
  const fileInput = useRef();
  const [files, setFiles] = useState();
  const onChange = (e) => {
      console.log(e.target.files[0].name, e.target.files[0].size); // 파일 이름, 바이트        
      setFiles(e.target.files[0]);
  };
  return(
    <React.Fragment>
        <img title='이미지를 추가하세요.'  src="" className="img-actImage" onClick={() => fileInput.current.click()} /> 
        <input type='file'  ref={fileInput} onChange={onChange} hidden></input>  
    </React.Fragment>
  );
};

export default AddActImage;