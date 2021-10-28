import React, { useRef } from 'react';
import ImageMiddle from './ImageMiddle';
import { BsPlusLg } from 'react-icons/bs';

const AddNursingHomeImage = ({file, setFile}) => {
    const fileInput = useRef(null)
    const onChange = async e => {
        if(e.target.files && e.target.files.length > 0){
            setFile(e.targe.files[0])
        }
    }

    return(
      <>
        <ImageMiddle url=""/>
        <BsPlusLg className="addMiddle" onClick={() => fileInput.current.click()}/>
        <input type="file" ref={fileInput} onChange={onChange} style={{display:'none'}}></input>
      </>
    );
};

export default AddNursingHomeImage;