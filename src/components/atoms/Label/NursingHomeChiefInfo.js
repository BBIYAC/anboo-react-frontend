import React from 'react';

const NursingHomeChiefInfo = ({chiefName, chiefTel, position}) => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <p className="nursinghome-position">{position}</p>
        <p className="nursinghome-info">{chiefName}</p>
        <p className="nursinghome-tel">{chiefTel}</p>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeChiefInfo;