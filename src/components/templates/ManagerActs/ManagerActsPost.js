import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import AddActImage from '../../atoms/Input/AddActImage';
import PostActTextArea from '../../atoms/Input/PostActTextArea';
import RequestDate from '../../atoms/Label/RequestDate';
import OvalLarge from '../../atoms/Button/OvalLarge';
import UsersBlock from '../../molecules/Block/UsersBlock';

const ManagerActsList = () => {
  // const users = ['이말순', '홍길동', '김춘향', '박순자', '박상순', '김갑수'];
  const users = ['이말순'];
  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack size="20"/>
          활동 등록
        <BiLogOut size="20"/>
      </div>
      <AddActImage />
      <PostActTextArea />
      <RequestDate />
      <UsersBlock users={users}/>
      <OvalLarge btnText="등록하기"/>
    </React.Fragment>
  );
};

export default ManagerActsList;