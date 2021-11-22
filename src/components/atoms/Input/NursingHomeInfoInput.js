import React from 'react';

const NursingHomeInfoInput = ({name, tel, address, time}) => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <input className="input-mgNhInfoEditInput" type="text" placeholder={name}></input>
        <input className="input-mgNhInfoEditInput" type="text" placeholder={address}></input>
        <input className="input-mgNhInfoEditInput" type="text" placeholder={tel}></input>
        <input className="input-mgNhInfoEditInput" type="text" placeholder={time}></input>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeInfoInput;