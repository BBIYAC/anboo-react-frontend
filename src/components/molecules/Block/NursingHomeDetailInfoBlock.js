import React, { useState, useEffect } from 'react';
import NursingHomeInfo from '../../atoms/Label/NursingHomeInfo';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import defalutImage from '../../atoms/Input/picture.png';
import axios from 'axios';
import { apiUrl } from '../../../pages/ApiURL';
import ImageNhInfo from '../../atoms/Input/ImageNhInfo';

const NursingHomeDetailInfoBlock = ({isNotMember, name, address, tel, starRating, id, image, bookMark, time }) => {
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
          <ImageNhInfo url={image==null ? defalutImage : image}/>
          <NursingHomeInfo name={name} address={address} tel={tel} time={time} starRating={starRating}/>
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