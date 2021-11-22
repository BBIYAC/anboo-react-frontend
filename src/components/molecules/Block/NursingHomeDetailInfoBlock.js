import React, { useState } from 'react';
import NursingHomeInfo from '../../atoms/Label/NursingHomeInfo';
import ImageMiddle from '../../atoms/Input/ImageMiddle';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import defalutImage from '../../atoms/Input/picture.png';
import axios from 'axios';
import { apiUrl } from '../../../pages/ApiURL';

const NursingHomeDetailInfoBlock = ({isNotMember, name, address, tel, starRating, id, image, bookMark }) => {
  const [isSummary, setIsSummary]= useState(true);
  const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')}
  // console.log(isNotMember)
  const onClick = () => {
    if(isSummary){
      setIsSummary(false);
      // axios bookmark POST
      const params = {
        "nh_id" : id
      }
      axios({url:`${apiUrl}/not-nok/bookmark-list/post-and-delete/`, method: 'post', headers:headers, data: params})
      .then(response => {
        console.log("클릭됨");
        console.log(response);
      })
    }
    else {
      setIsSummary(true);
      // axios bookmark 
      const params = {
        "nh_id" : id
      }
      axios({url:`${apiUrl}/not-nok/bookmark-list/post-and-delete`, method: 'delete', headers:headers, data: params})
      .then(response => {
        console.log("클릭안됨");
        console.log(response);
      })
    }
  }
  return(
    <React.Fragment>
      <hr/>
      <div className="block-NursingHomeDetailInfo">
        <div className="NursingHomeInfo">
          <ImageMiddle url={image==null ? defalutImage : image}/>
          <NursingHomeInfo name={name} address={address} tel={tel} starRating={starRating}/>
        </div>
        {isNotMember 
        ? ""
        : isSummary
          ? <BsBookmark className="aifillBookmark" onClick={onClick}/>
          : <BsBookmarkFill className="aifillBookmark" onClick={onClick}/>
        }
      </div> 
    </React.Fragment>
  );
  
};

export default NursingHomeDetailInfoBlock;