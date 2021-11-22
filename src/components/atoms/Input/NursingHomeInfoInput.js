import React from 'react';

const NursingHomeInfoInput = ({name, tel, address}) => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <input className="input-mgNhInfoEditInput" type="text" placeholder={name}></input>
        <input className="input-mgNhInfoEditInput" type="text" placeholder={address}></input>
        <input className="input-mgNhInfoEditInput" type="text" placeholder={tel}></input>
        <input className="input-mgNhInfoEditInput" type="text" placeholder={"운영시간"}></input>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeInfoInput;