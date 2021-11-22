import React from "react";
import ImageMiddle from "../../atoms/Input/ImageMiddle";
import StarRatingLabel from "../../atoms/Label/StarRatingLabel";
import { useHistory } from "react-router";

const NursingHomeInfoBlock = ({nursingHome}) => {
  let history = useHistory();
  let star = 0.0;
  if(nursingHome.star_avg===undefined){
    star = "0.0";
  }else {
    star = nursingHome.star_avg.toFixed(1);
  }

  const onClick = () => {
    history.push({pathname: '/rg/nh-info', state: {id: nursingHome.id, starRating: star}});
  }
  
  return (
    <React.Fragment>
      <div className="nursingHome" onClick={onClick}>
        <ImageMiddle url={nursingHome.nh_representative_image}/>
        <div className="div-nhInfo">
          <div className="nursingHomeInfo-name">{nursingHome.nh_name}</div>
          <div className="nursingHomeInfo-address">{nursingHome.nh_address}</div>
          <StarRatingLabel starRating={star}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeInfoBlock;