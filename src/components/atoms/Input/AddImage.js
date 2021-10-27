import React, {  useRef } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import ImageLarge from './ImageLarge';


const AddImage = ({file, setFile}) => {
    const fileInput = useRef(null)
    const onChange = async e => {
        if(e.target.files && e.target.files.length > 0){
            setFile(e.targe.files[0])
        }
    }

    
    return(
        <>
            <ImageLarge url=""/>
            <BsPlusLg className="addLarge" onClick={() => fileInput.current.click()}/>
            <input type="file" ref={fileInput} onChange={onChange} style={{display:'none'}}></input>
        </>
    );
};

export default AddImage;