import React from 'react';

const NursingHomeManagerInfoInput = () => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <input 
        className="input-mgNhInfoEditInput"
        placeholder="요양사 성함"></input>
        <input 
        className="input-mgNhInfoEditInput"
        placeholder="요양사 전화번호"></input>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeManagerInfoInput;