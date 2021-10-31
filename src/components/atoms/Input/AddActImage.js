import React, {useRef} from 'react';

const AddActImage = ({file, setFile}) => {
    const fileInput = useRef(null)
    const onChange = async e => {
        if(e.target.files && e.target.files.length > 0){
            setFile(e.targe.files[0])
        }
    }
  return(
    <React.Fragment>
        <img title='이미지를 추가하세요.'  src="" className="img-actImage" onClick={() => fileInput.current.click()} /> 
        <input type='file'  ref={fileInput} onChange={onChange} hidden></input>  
    </React.Fragment>
  );
};

export default AddActImage;