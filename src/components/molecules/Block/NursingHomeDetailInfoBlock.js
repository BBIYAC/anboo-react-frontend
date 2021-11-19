import React, { useState } from 'react';
import NursingHomeInfo from '../../atoms/Label/NursingHomeInfo';
import ImageMiddle from '../../atoms/Input/ImageMiddle';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';

const NursingHomeDetailInfoBlock = ({width, height, isNotMember, name, address, tel, starRating }) => {
  const [isSummary, setIsSummary]= useState(true);
  const onClick = () => {
    if(isSummary){
      setIsSummary(false);
    }
    else {
      setIsSummary(true);
    }
  }
  return(
    <React.Fragment>
      <hr/>
      <div className="block-NursingHomeDetailInfo">
        <div className="NursingHomeInfo">
          <ImageMiddle url=""/>
          <NursingHomeInfo name={name} address={address} tel={tel} starRating={starRating}/>
        </div>
        {isNotMember 
        ? ""
        :isSummary
          ? <BsBookmark className="aifillstar" style={{width, height}} onClick={onClick}/>
          : <BsBookmarkFill className="aifillstar" style={{width, height}} onClick={onClick}/>
        } 
      </div> 
    </React.Fragment>
  );
};

export default NursingHomeDetailInfoBlock;