import React from 'react';
import FooterIconBlock from '../../molecules/Block/FooterIconBlock';
import {FiUsers} from 'react-icons/fi';
import {AiOutlineHome} from 'react-icons/ai';
import {BiBuildings} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ManagerBelowBarBlock = ({isMember, isHome, isRequest}) => {
  return(
    <div className='belowbar'>
      <Link to="/mg/rgs">
        {isMember? <FooterIconBlock icon={<FiUsers />} name="회원관리" isSelected isManager />:
        <FooterIconBlock icon={<FiUsers />} name="회원관리" />  }
      </Link>
      <Link to="/mg/home">
        {isHome ? <FooterIconBlock icon={<AiOutlineHome />} name="홈" isSelected isManager />: 
        <FooterIconBlock icon={<AiOutlineHome />} name="홈" />  }
      </Link>
      <Link to="/mg/nh-info">
        {isRequest ? <FooterIconBlock icon={<BiBuildings />} name="시설정보" isSelected isManager />:
        <FooterIconBlock icon={<BiBuildings />} name="시설정보" />  }
      </Link>
    </div>
  );
};

export default ManagerBelowBarBlock ;