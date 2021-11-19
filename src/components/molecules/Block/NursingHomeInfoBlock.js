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
        <ImageMiddle url="https://anboo-bucket.s3.ap-northeast-2.amazonaws.com/media/NH_repre/196_%EC%B2%9C%EC%95%88%ED%95%9C%EB%A7%88%EC%9D%8C%EC%9A%94%EC%96%91%EC%9B%90/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B711.png"/>
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