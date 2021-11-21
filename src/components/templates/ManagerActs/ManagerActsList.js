import React, {useState, useEffect} from 'react';
import NursingHomeActBlock from '../../molecules/Block/NursingHomeActBlock';
import AddPost from '../../atoms/Button/AddPost';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../../../pages/ApiURL';

const ManagerActsList = ({onClick, onSigninClick, members}) => {
  const users = [...members['selected']];
  const np_id = users[0].np_id;  
  const [acts, setActs] = useState([]);
  let history = useHistory();
  const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')}
  // axios acts GET
  useEffect(()=>{
    if(users.length === 1){ // 한 명 선택
      axios({url:`${apiUrl}/supervisor/posts/${np_id}/`,method : 'get' ,headers:headers})
      .then(response =>{
        console.log(response);
        setActs(response.data);
      }).catch(error => {
          console.error(error);
      })
    }else{ // 전체 선택
      axios({url:`${apiUrl}/supervisor/posts/`,method : 'get' ,headers:headers})
      .then(response =>{
        console.log(response);
        setActs(response.data);
      }).catch(error => {
          console.error(error);
      })
    }
    
  },[])

  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack size="20" onClick={()=>history.goBack(-1)}/>
          활동 기록
        <BiLogOut size="20" onClick={onSigninClick}/>
      </div>
      <AddPost className='manager addPostIcon' onClick={onClick}/>
      <ul>
        {
          acts.sort((a, b)=>{ // 최신 날짜순으로 정렬
            var date1 = a.uploaded_date;
            var date2 = b.uploaded_date;
            if(date1 > date2) return -1;
            if(date1 < date2) return 1;
            return 0;
          }).map((contents, idx)=>(
            <li key={idx}><NursingHomeActBlock contents={contents} /></li>
          ))
        }
      </ul>
    </React.Fragment>
  );
};

export default ManagerActsList;