import React, { useState, useRef } from 'react';


const NHActImage = ({ id, removeImage }) => {
  const fileInput = useRef();
  const [fileURL, setFileURL] = useState([]); 

  const onChange = (e) => {
    (e.target.files[0] !== 0)
    && setFileURL(URL.createObjectURL(e.target.files[0]));
  };

  console.log(fileURL);

  // Default Image
  const handleImgError = (e) => {
    e.target.src = require("./picture.png").default;
  }

  return(
    <React.Fragment>
    <div style={{position:"relative"}} >
      <button className="btn-actImageDelete" onClick={() => removeImage(id)}>X</button>
      <img
        className="img-nhAct" 
        src={fileURL}
        onClick={() => fileInput.current.click()}
        onError={handleImgError}>
      </img>
    </div>
    <input type="file" ref={fileInput} accept="image/*" onChange={onChange} hidden></input>
    </React.Fragment>
  );
};

export default NHActImage;