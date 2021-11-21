import React, {useState} from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import AddActImage from '../../atoms/Input/AddActImage';
import PostActTextArea from '../../atoms/Input/PostActTextArea';
import RequestDate from '../../atoms/Label/RequestDate';
import OvalLarge from '../../atoms/Button/OvalLarge';
import UsersBlock from '../../molecules/Block/UsersBlock';
import { Link } from "react-router-dom";

const ManagerActsPost = ({onSigninClick, members}) => {
  // 회원관리(/mg/rgs/) 페이지에서 선택한 사람들
  const users = [...members];
  const names = users.map(user=> user['np_name']); 
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    setClicked(true);
    if(url && content){
      console.log({url, content});
      /*
      axios acts post POST
      */
    }
  }
  return (
    <React.Fragment>
      <div className="header">
        <Link className="linkComponent" to="/mg/rgs">
          <IoIosArrowBack size="20"/>
        </Link>
          활동 등록
        <BiLogOut size="20" onClick={onSigninClick}/>
      </div>
      {clicked && url === '' && <div className='notice-massage'>※ 필수로 추가해주세요.</div>}
      <AddActImage setUrl={setUrl} />
      {clicked && content === '' && <div className='notice-massage'>※ 필수로 입력해주세요.</div>}
      <PostActTextArea content={content} setContent={setContent} />
      <RequestDate />
      <UsersBlock users={names}/>
      <OvalLarge btnText="등록하기" onClick={onClick}/>
    </React.Fragment>
  );
};

export default ManagerActsPost;