import React from "react";
import ImageMiddle from "../../atoms/Input/ImageMiddle";
import StarRatingLabel from "../../atoms/Label/StarRatingLabel";
import { useHistory } from "react-router";

const AllNHInfoBlock = ({nh}) => {
  /*
  axios nursinghome info GET
  */
  let history = useHistory();
  const onClick = () => {
    history.push({pathname: '/rg/nh-info', state: {id: nh.id, starRating: nh.star_avg}});
  }

  return (
    <React.Fragment>
      <div className="nursingHome" onClick={onClick}>
        <ImageMiddle url={nh.nh_representative_image}/>
        <div className="div-nhInfo">
          <div className="nursingHomeInfo-name">{nh.nh_name}</div>
          <div className="nursingHomeInfo-address">{nh.nh_address}</div>
          {/* <div className="nursingHomeInfo-religion">{nursingHome.religion}</div> */}
          <StarRatingLabel starRating={nh.star_avg}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllNHInfoBlock;