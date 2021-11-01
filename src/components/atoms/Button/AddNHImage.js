import React, { useRef } from 'react';
import { BsPlusLg } from 'react-icons/bs';


const AddNHImage = ({file, setFile, url, border, borderColor}) => {
  const fileInput = useRef(null)
  const onChange = async e => {
      if(e.target.files && e.target.files.length > 0){
          setFile(e.targe.files[0])
      }
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