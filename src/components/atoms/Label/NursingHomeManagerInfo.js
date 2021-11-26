import React from 'react';

const NursingHomeManagerInfo = ({
  memberName,
  membersTel,}) => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <p className="nursinghome-position">요양사</p>
        <p className="nursinghome-info">{memberName}</p>
        <p className="nursinghome-tel">{membersTel}</p>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeManagerInfo;