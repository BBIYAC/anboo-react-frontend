import React, {useState, useEffect} from 'react';
import NursingHomeActBlock from '../components/molecules/Block/NursingHomeActBlock';
import BelowBarBlock from '../components/molecules/Block/BelowBarBlock';
import { BiLogOut } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import '../components/atoms/Label/Label.css';
import { Link } from 'react-router-dom';

const  RegisterActs= () => {
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
        <IoIosArrowBack opacity="0" size="20"/>
        요양원 활동 목록
        <Link className="linkComponent" to="/">
          <BiLogOut size="20"/>
        </Link>
      </div>
      <ul>
        {
          acts.map((contents, idx)=>(
            <li><NursingHomeActBlock contents={contents} key={idx} /></li>
          ))
        }
      </ul>
      <BelowBarBlock isHome/>
    </React.Fragment>
  );
};

export default RegisterActs;