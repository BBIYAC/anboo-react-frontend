import React, { useState } from 'react';
import NursingHomeInfo from '../../atoms/Label/NursingHomeInfo';
import ImageMiddle from '../../atoms/Input/ImageMiddle';
import { AiFillStar } from 'react-icons/ai';

const NursingHomeDetailInfoBlock = ({width, height, name, address, starRating }) => {
  const [isSummary, setIsSummary]= useState(true);
  const [isStarColor, setStarColor] = useState("var(--color-dark-gray)");
  const onClick = () => {
    if(isSummary){
      setIsSummary(false);
      setStarColor("var(--color-yellow)");
    }
    else {
      setIsSummary(true);
      setStarColor("var(--color-dark-gray)");
    }
  }
  return(
    <React.Fragment>
      <hr/>
      <div className="block-NursingHomeDetailInfo">
        <div className="NursingHomeInfo">
          <ImageMiddle url=""/>
          <NursingHomeInfo name={name} address={address} starRating={starRating}/>
        </div>
        {isSummary
        ?<AiFillStar 
          className="aifillstar"
          color={isStarColor}
          style={{width, height}}
          onClick={onClick}/>
        :<AiFillStar 
          className="aifillstar"
          color={isStarColor}
          style={{width, height}}
          onClick={onClick}/>}
      </div> 
    </React.Fragment>
  );
};

export default NursingHomeDetailInfoBlock;