import React from 'react';

const NursingHomeActsText = ({contents}) => {

  const year = contents.uploaded_date.split('-')[0];
  const month = contents.uploaded_date.split('-')[1];
  const day = contents.uploaded_date.split('-')[2].substring(0, 2);
  const date = year+'년 '+month+'월 '+day+'일';
  return(
    <React.Fragment>
      <div className="div-nursinghomeactstext">
        <p className="nursinghome-acttext">{contents.post_context}</p>
        <p className="nursinghome-actdate">{date}</p>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeActsText;