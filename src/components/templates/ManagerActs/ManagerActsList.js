import React, {useState, useEffect} from 'react';
import NursingHomeActBlock from '../../molecules/Block/NursingHomeActBlock';
import AddPost from '../../atoms/Button/AddPost';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';

const ManagerActsList = ({onClick, onSigninClick}) => {
  const NursingHomeActs = [
    {url: '', content:'오늘은 윷놀이를 했어요~', date:'2021년 10월 29일'},
    {url: '', content:'오늘은 윷놀이를 했어요~', date:'2021년 10월 29일'},
    {url: '', content:'오늘은 윷놀이를 했어요~', date:'2021년 10월 29일'},
  ]
  /*
  axios request GET
  */
  const [acts, setActs] = useState([]);
  useEffect(()=>{
    setActs(NursingHomeActs);
  },[])

  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack size="20"/>
          활동 기록
        <BiLogOut size="20" onClick={onSigninClick}/>
      </div>
      <AddPost className='manager' onClick={onClick}/>
      <ul>
        {
          acts.map((contents, idx)=>(
            <li><NursingHomeActBlock contents={contents} key={idx} /></li>
          ))
        }
      </ul>
    </React.Fragment>
  );
};

export default ManagerActsList;