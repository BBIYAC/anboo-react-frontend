import React, { useState, useRef } from 'react';
import NHActImage from '../../atoms/Input/NHActImage';
import {BsPlusLg} from 'react-icons/bs';

const NursingHomeImageEditBlock = () => {
  const fileInput = useRef();
  const [files, setFiles] = useState();
  const onChange = (e) => {
      setFiles(e.target.files[0]);
  }

  const [images, setImages] = useState([]);

  const removeImage = (id) => {
    setImages(images.filter(image => {
      return image.id !== id;
    }))
  }

  const renderImages = images.length ? images.map(image => {
    return (
      <NHActImage 
      image={image}
      key={image.id} 
      removeImage={ removeImage }/>
    );
  }):"";

  const addImage = (event) => {
    event.preventDefault();
    fileInput.current.click()
    
    setImages([
      {
        id: Date.now(),         // DB id 대신 시간으로 사용함
        image: <NHActImage/>
      },
      ...images,
    ])
  };


  return(
    <React.Fragment>
      <hr></hr>
      <form onSubmit={addImage}>
        <div className="grid-container">
          <button
          type="submit"
          className="addNhImage">
            <BsPlusLg /> 
          </button>
          <input type="file" ref={fileInput} accept="image/*" onChange={onChange} style={{display:'none'}}></input>
          {renderImages}
        </div>
      </form>
    </React.Fragment>
  );
};

export default NursingHomeImageEditBlock;