import React from 'react';
import FooterIconBlock from '../../molecules/Block/FooterIconBlock';
import {FiUsers} from 'react-icons/fi';
import {AiOutlineHome} from 'react-icons/ai';
import {RiPencilLine} from 'react-icons/ri';

const ManagerBelowBarBlock = ({isMember, isHome, isRequest}) => {
    return(
        <div className='belowbar'>
            {isMember? <FooterIconBlock icon={<FiUsers />} name="회원관리" isSelected isManager />:
            <FooterIconBlock icon={<FiUsers />} name="회원관리" />  }
            {isHome ? <FooterIconBlock icon={<AiOutlineHome />} name="홈" isSelected isManager />: 
            <FooterIconBlock icon={<AiOutlineHome />} name="홈" />  }
            {isRequest ? <FooterIconBlock icon={<RiPencilLine />} name="요청사항" isSelected isManager />:
            <FooterIconBlock icon={<RiPencilLine />} name="요청사항" />  }
        </div>
    );
};

export default ManagerBelowBarBlock ;