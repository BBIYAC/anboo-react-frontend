import React from 'react';

const NursingHomeManagerInfo = ({
  memberName,
  membersTel,
  position,}) => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <p className="nursinghome-position">{position}</p>
        <p className="nursinghome-info">{memberName}</p>
        <p className="nursinghome-tel">{membersTel}</p>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeManagerInfo;