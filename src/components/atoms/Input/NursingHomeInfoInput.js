import React from 'react';

const NursingHomeInfoInput = () => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <input className="input-mgNhInfoEditInput" type="text" placeholder="요양원 이름"></input>
        <input className="input-mgNhInfoEditInput" type="text" placeholder="요양원 주소"></input>
        <input className="input-mgNhInfoEditInput" type="text" placeholder="운영시간"></input>
        <input className="input-mgNhInfoEditInput" type="text" placeholder="요양원 종교"></input>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeInfoInput;