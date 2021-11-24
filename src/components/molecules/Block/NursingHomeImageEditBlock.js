import React, { useState, useRef, useEffect } from 'react';
import NHActImage from '../../atoms/Input/NHActImage';
import {BsPlusLg} from 'react-icons/bs';

const NursingHomeImageEditBlock = ({setNhImageList}) => {
  const fileInput = useRef();
  // const [file, setFile] = useState("초깃값");
  const [images, setImages] = useState([]);

  useEffect(()=>{
    setNhImageList(images);
  },[images])

  
  const removeImage = (id) => {
    setImages(images.filter(image => {
      return image.id !== id;
    }));
  }
  
  const renderEditImages = images.map(image => {
    return (
      <NHActImage
      id={image.id}
      file={image.file}
      removeImage={ removeImage }/>
      );
    });
    
    /* 5 */ 
    // const onChange = (e) => {
    //   const imageFile = e.target.files[0];
    //   setFile(imageFile);
    // }

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
    
    /* 2 */
    const addImage = () => {
      /* 3 */ 
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
        {profile_preview}
        <input type="file" ref={fileInput} accept="image/*" onChange={handleFileOnChange} hidden></input>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeImageEditBlock;
