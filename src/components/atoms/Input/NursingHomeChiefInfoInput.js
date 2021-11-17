import React from 'react';

const NursingHomeChiefInfoInput = () => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <input className="input-mgNhInfoEditInput" type="text" placeholder="시설장 성함"></input>
        <input className="input-mgNhInfoEditInput" type="text" placeholder="시설장 전화번호"></input>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfoInput;