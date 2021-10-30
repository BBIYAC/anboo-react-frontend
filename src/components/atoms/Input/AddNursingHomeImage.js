import React, { useRef } from 'react';
import AddNHImage from '../Button/AddNHImage';

const AddNursingHomeImage = ({file, setFile}) => {
    const fileInput = useRef(null)
    const onChange = async e => {
        if(e.target.files && e.target.files.length > 0){
            setFile(e.targe.files[0])
        }
    }

    return(
      <>
        <AddNHImage onClick={() => fileInput.current.click()}/>
        {/* <BsPlusLg className="addMiddle-mg" onClick={() => fileInput.current.click()}/> */}
        <input type="file" ref={fileInput} onChange={onChange} style={{display:'none'}}></input>
      </>
    );
};

export default AddNursingHomeImage;