import React, { useState, useRef, useEffect } from 'react';
import NHActImage from '../../atoms/Input/NHActImage';
import {BsPlusLg} from 'react-icons/bs';

const NursingHomeImageEditBlock = ({setNhImageList, editImgs}) => {
  const fileInput = useRef();
  const [images, setImages] = useState([]);

  console.log("여기")
  console.log(editImgs)
  
  const removeImage = (id) => {
    setImages(images.filter(image => {
      return image.id !== id;
    }));
  }


  useEffect(()=>{setNhImageList([...images])},[images])
  
  useEffect(()=>{
    setImages(editImgs.map(editImage => {
      return {
        id: editImage.id,
        file: editImage.nh_image,
        previewURL: "",
      }
    }))
  },[])
  

  const renderEditImages = images.map((image, index) => {
  return (
    <NHActImage
    key={index}
    id={image.id}
    file={image.file}
    removeImage={ removeImage }/>
    );
  });
  

  const handleFileOnChange = (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setImages([
        {
          id: Date.now(),
          file : file,
          previewURL : reader.result
        },
        ...images,
      ]);
    }
    reader.readAsDataURL(file);
  }
    
  const addImage = () => {
    fileInput.current.click();
  };

  let profile_preview = null;
  if(images.file !== ''){
    profile_preview = <img className='profile_preview' src={images.previewURL}></img>
  }
  return(
    <React.Fragment>
      <hr/>
      <div className="grid-container">
        <button type="button" onClick={addImage} className="addNhImage"><BsPlusLg /></button>
        {renderEditImages}
        <input type="file" ref={fileInput} accept="image/*" onChange={handleFileOnChange} hidden></input>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeImageEditBlock;
