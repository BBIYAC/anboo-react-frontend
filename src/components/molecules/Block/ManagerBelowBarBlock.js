import React from 'react';
import FooterIconBlock from '../../molecules/Block/FooterIconBlock';
import {FiUsers} from 'react-icons/fi';
import {AiOutlineHome} from 'react-icons/ai';
import {BiBuildings} from 'react-icons/bi';
import { useHistory } from 'react-router-dom';

const ManagerBelowBarBlock = ({isMember, isHome, isRequest}) => {
  let history = useHistory();
  return(
    <div className='belowbar'>
      {isMember? <FooterIconBlock icon={<FiUsers />} name="회원관리" isSelected isManager onClick={()=>{history.push('/mg/rgs')}}/>
               : <FooterIconBlock icon={<FiUsers />} name="회원관리" onClick={()=>{history.push('/mg/rgs')}} />  }
      {isHome ? <FooterIconBlock icon={<AiOutlineHome />} name="홈" isSelected isManager onClick={()=>{history.push('/mg/home')}} />
              : <FooterIconBlock icon={<AiOutlineHome />} name="홈" onClick={()=>{history.push('/mg/home')}} />  }
      {isRequest? <FooterIconBlock icon={<BiBuildings />} name="시설정보" isSelected isManager onClick={()=>{history.push('/mg/nh-info')}} />
                : <FooterIconBlock icon={<BiBuildings />} name="시설정보" onClick={()=>{history.push('/mg/nh-info')}} />  }
    </div>
  );
};

export default ManagerBelowBarBlock ;