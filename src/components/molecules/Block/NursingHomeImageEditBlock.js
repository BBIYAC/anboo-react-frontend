import React, { useState, useRef } from 'react';
import NHActImage from '../../atoms/Input/NHActImage';
import {BsPlusLg} from 'react-icons/bs';

const NursingHomeImageEditBlock = ({setNhImageList}) => {
  const fileInput = useRef();
  const [file, setFile] = useState("");
  const [images, setImages] = useState([]);
  
  const onChange = (e) => {
    const imageFiles = e.target.files[0];
    setFile(imageFiles);
  }

  const removeImage = (id) => {
    setImages(images.filter(image => {
      return image.id !== id;
    }));
  }
  
  const addImage = () => {
    fileInput.current.click();              // input 클릭 파일탐색기에서 사진 업로드하기.
    setImages([                 // 이미지 state 지정
      {
        id: Date.now(),         // DB id 대신 시간으로 사용함
        file: file,
      },
      ...images,
    ])
  };

  const renderEditImages = images.map(image => {
    return (
      <NHActImage
      id={image.id}
      file={image.file}
      removeImage={ removeImage }/>
    );
  });

  return(
    <React.Fragment>
      <hr/>
      <div className="grid-container">
        <input type="file" ref={fileInput} accept="image/*" onChange={onChange} hidden></input>
        <button type="button" onClick={addImage} className="addNhImage"><BsPlusLg /></button>
        {renderEditImages}
      </div>
    </React.Fragment>
  );
};

export default NursingHomeImageEditBlock;