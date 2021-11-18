import React from 'react';
import StarRatingLabel from './StarRatingLabel';

const NursingHomeInfo = ({name, address, starRating}) => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <span className="nursinghome-info">{name}</span>
        <span className="nursinghome-address">{address}</span>
        <span className="nursinghome-religion">기독교</span>
        <StarRatingLabel size="20" color="var(--color-yellow)" starRating={starRating}/>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeInfo;