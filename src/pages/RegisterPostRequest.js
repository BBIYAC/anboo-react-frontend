import React from 'react';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import BelowBarBlock from '../components/molecules/Block/BelowBarBlock';
import PostRequestTextArea from '../components/atoms/Input/PostRequestTextArea';
import RequestDate from '../components/atoms/Label/RequestDate';
import { BiLogOut } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const  RegisterPostRequest= () => {
  return (
    <React.Fragment>
      <div className="header">
        <Link className="linkComponent" to="/rg/requests">
          <IoIosArrowBack size="20"/>
        </Link>
        요청사항 작성
        <Link className="linkComponent" to="/">
          <BiLogOut size="20"/>
        </Link>
      </div>
      <PostRequestTextArea />
      <RequestDate />
      <Link className="linkComponent" to="/rg/requests">
        <RoundRectangle type='submit' btnText="요청사항 보내기" />
      </Link>
      <BelowBarBlock isRequest />
    </React.Fragment>
  );
};

export default RegisterPostRequest;