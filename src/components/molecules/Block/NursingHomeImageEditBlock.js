import React, { useState, useRef } from 'react';
import ImageMiddle from '../../atoms/Input/ImageMiddle';
import {BsPlusLg} from 'react-icons/bs';

const NursingHomeImageEditBlock = () => {
  const fileInput = useRef();
  const [files, setFiles] = useState();
  const onChange = (e) => {
      console.log(e.target.files[0].name, e.target.files[0].size); // 파일 이름, 바이트        
      setFiles(e.target.files[0]);
  }

  const [images, setImages] = useState([
    {image: <ImageMiddle />},
    {image: <ImageMiddle />},
    {image: <ImageMiddle />},
  ])

  const renderImages = images.map(image => {
    return (
      <ImageMiddle/>
    );
  });

  const addImage = (event) => {
    images.push({
      image: <ImageMiddle/>
    })
  }


  return(
    <React.Fragment>
      <hr></hr>
      <div className="grid-container">
        <button 
        className="addNhImage"
        onClick={() => fileInput.current.click()}>
          <BsPlusLg /> 
        </button>
        <input type="file" ref={fileInput} onChange={onChange} style={{display:'none'}}></input>
        {renderImages}
      </div>
    </React.Fragment>
  );
};

export default NursingHomeImageEditBlock;