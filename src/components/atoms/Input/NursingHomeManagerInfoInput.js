import React from 'react';

const NursingHomeManagerInfoInput = ({name, phone}) => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <p className="txt_position">요양사</p>
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