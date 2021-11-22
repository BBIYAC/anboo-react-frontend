import React, { useState, useEffect } from 'react';
import NursingHomeInfo from '../../atoms/Label/NursingHomeInfo';
import ImageMiddle from '../../atoms/Input/ImageMiddle';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import defalutImage from '../../atoms/Input/picture.png';
import axios from 'axios';
import { apiUrl } from '../../../pages/ApiURL';

const NursingHomeDetailInfoBlock = ({isNotMember, name, address, tel, starRating, id, image, bookMark }) => {
  const [isCheck, setIsCheck]= useState(bookMark);
  const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')}
  
  useEffect(()=> {
    if(bookMark==true){
      console.log(bookMark + "이거");
      setIsCheck(true);
    }else {
      setIsCheck(false);
    }
  },[bookMark])

  const onBookMarkOnClick = () => {      // 북마크 등록
    // axios bookmark POST
    const params = {
      "nh_id" : id
    }
    axios({url:`${apiUrl}/not-nok/bookmark-list/post-and-delete/`, method: 'post', headers:headers, data: params})
    .then(response => {
      console.log("북마크 등록");
      console.log(response);
    })
    setIsCheck(true);
  }

  const onBookMarkOffClick = () => {       // 북마크 삭제
    // axios bookmark 
    const params = {
      "nh_id" : id
    }
    axios({url:`${apiUrl}/not-nok/bookmark-list/post-and-delete`, method: 'delete', headers:headers, data: params})
    .then(response => {
      console.log("북마크 삭제");
      console.log(response);
    })
    setIsCheck(false);
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
        : isCheck
          ? <BsBookmarkFill className="aifillBookmark" onClick={onBookMarkOffClick}/>
          : <BsBookmark className="aifillBookmark" onClick={onBookMarkOnClick}/>
        }
      </div>
    </React.Fragment>
  );
  
};

export default NursingHomeDetailInfoBlock;