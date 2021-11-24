import React, { useState, useRef, useEffect } from 'react';
import NHActImage from '../../atoms/Input/NHActImage';
import {BsPlusLg} from 'react-icons/bs';

const NursingHomeImageEditBlock = ({setNhImageList}) => {
  const fileInput = useRef();
  const [file, setFile] = useState("");
  const [images, setImages] = useState([]);

  useEffect(()=>{
    setNhImageList(images);
  },[images])

  const onChange = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile);
  }

  const removeImage = (id) => {
    setImages(images.filter(image => {
      return image.id !== id;
    }));
  }
  
  const addImage = () => {
    fileInput.current.click();
    setImages([
      ...images,
      {
        id: Date.now(),
        file : file,
      },
    ])
  };

  const renderEditImages = images.map(image => {
    return (
      <NHActImage
      id={image.id}
      files={image.files}
      removeImage={ removeImage }/>
    );
  });

  return(
    <React.Fragment>
      <hr/>
      <div className="grid-container">
        {renderEditImages}
        <button type="button" onClick={addImage} className="addNhImage"><BsPlusLg /></button>
        <input type="file" ref={fileInput} accept="image/*" onChange={onChange} hidden></input>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeImageEditBlock;