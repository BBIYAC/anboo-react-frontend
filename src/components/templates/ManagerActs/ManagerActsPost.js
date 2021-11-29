import React, {useState} from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import AddActImage from '../../atoms/Input/AddActImage';
import PostActTextArea from '../../atoms/Input/PostActTextArea';
import RequestDate from '../../atoms/Label/RequestDate';
import OvalLarge from '../../atoms/Button/OvalLarge';
import UsersBlock from '../../molecules/Block/UsersBlock';
import { Link } from "react-router-dom";
import { apiUrl } from '../../../pages/ApiURL';
import axios from 'axios';
import { useHistory } from 'react-router';

const ManagerActsPost = ({onSigninClick, members}) => {
  // 회원관리(/mg/rgs/) 페이지에서 선택한 사람들
  const users = [...members['selected']];
  const names = users.map(user=> user['np_name']);
  const ids = users.map(user=> user['np_id']); 
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');
  const [clicked, setClicked] = useState(false);
  let history = useHistory();
  const onClick = () => {
    setClicked(true);
    if(url && content){
      if(ids.length !== members['members'] || members.length === 1){ // 일부 선택 or 한 명 선택
        for(let i=0; i<users.length; i++){
          // axios acts post POST
          const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')}
          var formData = new FormData();
          formData.append('np_id', ids[i])
          formData.append('post_title', '요양원 내 활동 등록');
          formData.append('post_context', content);
          formData.append('post_picture', url);

          // FormData의 key, value 확인
          // for (let pair of formData.entries()) {
          //   console.log('[일부 or 한 명 선택]', pair[0], ':', pair[1]);
          // }
  
          axios({url: `${apiUrl}/supervisor/posts/` ,method : 'post' ,headers:headers, data: formData})
          .then(response =>{
            console.log(response)
          }).catch(error => {
              console.error(error);
          });
        }
      }else{ // 전체 선택
        // axios acts post POST
        const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')}
        var formData = new FormData();
        formData.append('post_title', '요양원 내 활동 등록');
        formData.append('post_context', content);
        formData.append('post_picture', url);

        // FormData의 key, value 확인
        // for (let pair of formData.entries()) {
        //   console.log('[전체 선택]', pair[0], ':', pair[1]);
        // }

        axios({url: `${apiUrl}/supervisor/posts/` ,method : 'post' ,headers:headers, data: formData})
        .then(response =>{
          console.log(response)
        }).catch(error => {
            console.error(error);
        });
      }
    }
    history.goBack(-1);
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