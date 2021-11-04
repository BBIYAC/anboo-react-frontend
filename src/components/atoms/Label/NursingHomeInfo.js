import React from 'react';
import StarRatingLabel from './StarRatingLabel';

const NursingHomeInfo = () => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <span className="nursinghome-info">안심 요양원</span>
        <span className="nursinghome-address">대전광역시 서구 관저동</span>
        <span className="nursinghome-religion">기독교</span>
        <StarRatingLabel size="20" color="var(--color-yellow)"/>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeInfo;