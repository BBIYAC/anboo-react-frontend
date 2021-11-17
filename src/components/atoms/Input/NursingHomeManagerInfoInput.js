import React from 'react';

const NursingHomeManagerInfoInput = ({name, phone, onChange}) => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <input 
        className="input-mgNhInfoEditInput"
        placeholder={name}></input>
        <input 
        className="input-mgNhInfoEditInput"
        placeholder={phone}></input>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeManagerInfoInput;