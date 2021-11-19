import React from 'react';

const NursingHomeActsText = ({contents}) => {
  const year = contents.uploaded_date.substring(0, 4);
  const month = contents.uploaded_date.substring(5, 7);
  const day = contents.uploaded_date.substring(8, 10);
  const hour = contents.uploaded_date.substring(11, 13);
  const minutes = contents.uploaded_date.substring(14, 16);
  const date = year+'년 '+month+'월 '+day+'일 '+hour+'시 '+minutes+'분';
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