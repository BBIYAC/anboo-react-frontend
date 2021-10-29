import React from 'react';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import BelowBarBlock from '../components/molecules/Block/BelowBarBlock';
import PostRequestTextArea from '../components/atoms/Input/PostRequestTextArea';
import RequestDate from '../components/atoms/Label/RequestDate';
import { BiLogOut } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';

const  RegisterPostRequest= () => {
  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack size="20"/>
        요청사항 작성
        <BiLogOut size="20"/>
      </div>
      <PostRequestTextArea />
      <RequestDate />
      <RoundRectangle btnText="요청사항 보내기" />
      <BelowBarBlock isRequest />
    </React.Fragment>
  );
};

export default RegisterPostRequest;