import React, { useState } from 'react';
import NursingHomeInfo from '../../atoms/Label/NursingHomeInfo';
import ImageLarge from '../../atoms/Input/ImageLarge';
import { AiFillStar } from 'react-icons/ai';

const NursingHomeDetailInfoBlock = ({width, height }) => {
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
          <ImageLarge url=""/>
          <NursingHomeInfo />
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