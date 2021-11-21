import React from 'react';
import StarRatingLabel from './StarRatingLabel';

const NursingHomeInfo = ({name, address, tel, starRating}) => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <span className="nursinghome-info">{name}</span>
        <span className="nursinghome-address">{address}</span>
        <StarRatingLabel size="20" color="var(--color-yellow)" starRating={starRating}/>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeInfo;