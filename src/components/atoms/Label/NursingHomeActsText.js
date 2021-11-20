import React from 'react';

const NursingHomeActsText = ({contents}) => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeactstext">
        <p className="nursinghome-acttext">{contents.content}</p>
        <p className="nursinghome-actdate">{contents.date}</p>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeActsText;