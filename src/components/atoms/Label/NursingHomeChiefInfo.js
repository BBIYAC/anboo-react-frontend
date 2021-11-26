import React from 'react';

const NursingHomeChiefInfo = ({chiefName, chiefTel}) => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <p className="nursinghome-position">요양원장</p>
        <p className="nursinghome-info">{chiefName}</p>
        <p className="nursinghome-tel">{chiefTel}</p>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfo;