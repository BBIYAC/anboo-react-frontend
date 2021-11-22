import React from 'react';
import StarRatingLabel from './StarRatingLabel';

const NursingHomeInfo = ({name, address, tel, time, starRating}) => {
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <span className="nursinghome-info">{name}</span>
        <span className="nursinghome-address">주소: {address}</span>
        <span className="nursinghome-info">전화번호: {tel}</span>
        <span className="nursinghome-info" >운영시간: {time}</span>
        <StarRatingLabel size="20" color="var(--color-yellow)" starRating={Math.round(starRating * 10) / 10}/>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeInfo;