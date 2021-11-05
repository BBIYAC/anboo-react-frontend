import React,{useState} from "react";
import SeeMore from '../../atoms/Button/SeeMore';
import {MdKeyboardArrowUp} from 'react-icons/md';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {FaUser} from 'react-icons/fa';
// import { IoScaleOutline } from "react-icons/io5";

const UsersBlock = ({users}) => {
  const userList = [...users];
  const [isSummary, setIsSummary] = useState(true);
  const [moreText, setMoreText] = useState('더 보기');
  const [moreIcon, setMoreIcon] = useState(<MdKeyboardArrowDown size='20' />);
  const onClick = () => {
    if(isSummary) {
      setIsSummary(false); 
      setMoreText('간략히');
      setMoreIcon(<MdKeyboardArrowUp size='20' />);
    }  
    else{
      setIsSummary(true);
      setMoreText('더 보기');
      setMoreIcon(<MdKeyboardArrowDown size='20' />);
    }
  };
  return(
    <>
    {(userList.length > 1)
    ?<>
    {
      isSummary
      ?<div><FaUser className='manager' size='13'/> {userList[0]+'님 외 '+(userList.length-1)+'명'}</div>
      :<div className='txt-users'>
      {
        userList.map((name, idx)=>
          <div className='txt-user' key={idx}><FaUser className='manager' size='13'/> {name}님</div>
        )
      }
      </div>
    }
      <SeeMore className='manager seemore' datas={userList} text={moreText} icon={moreIcon} onClick={onClick}/>
    </>
    :<div className='one-user'><FaUser className='manager' size='13'/> {userList[0]+'님'}</div>}
    </>
  );
};

export default UsersBlock;