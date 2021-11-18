import React from "react";
import ImageMiddle from "../../atoms/Input/ImageMiddle";
import StarRatingLabel from "../../atoms/Label/StarRatingLabel";
import { useHistory } from "react-router";

const NursingHomeInfoBlock = ({nursingHome}) => {
  /*
  axios nursinghome info GET
  */
  let history = useHistory();
  const onClick = () => {
    // console.log(nursingHome.id);
    history.push({pathname: '/rg/nh-info', state: {id: nursingHome.id, starRating: nursingHome.star_avg}});
  }

  return (
    <React.Fragment>
      <div className="nursingHome" onClick={onClick}>
        <ImageMiddle/>
        <div className="div-nhInfo">
          <div className="nursingHomeInfo-name">{nursingHome.nh_name}</div>
          <div className="nursingHomeInfo-address">{nursingHome.nh_address}</div>
          {/* <div className="nursingHomeInfo-religion">{nursingHome.religion}</div> */}
          <StarRatingLabel starRating={nursingHome.star_avg}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NursingHomeInfoBlock;