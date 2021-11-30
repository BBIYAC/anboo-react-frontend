import React from 'react';
import StarRatingLabel from './StarRatingLabel';

const NursingHomeInfo = ({name, address, tel, time, starRating}) => {
  // console.log(time)
  return(
    <React.Fragment>
      <div className="div-nursinghomeinfo">
        <span className="nursinghome-info">
          <span style={{fontWeight:"bold"}}>이름: </span> 
          {name}
        </span>
        <span className="nursinghome-address">
          <span style={{fontWeight:"bold"}}>주소: </span>
          {address}
        </span>
        <span className="nursinghome-info">
          <span style={{fontWeight:"bold"}}>전화번호: </span>
          {tel}
        </span>
        <span className="nursinghome-info" >
          <span style={{fontWeight:"bold"}}>운영시간: </span>
          {time}
        </span>
        <StarRatingLabel size="20" color="var(--color-yellow)" starRating={Math.round(starRating * 10) / 10}/>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeInfo;