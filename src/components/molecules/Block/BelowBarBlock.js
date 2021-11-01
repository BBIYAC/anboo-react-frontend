import React from 'react';
import FooterIconBlock from '../../molecules/Block/FooterIconBlock';
import {BiUser} from 'react-icons/bi';
import {AiOutlineHome} from 'react-icons/ai';
import {RiPencilLine} from 'react-icons/ri';

const BelowBarBlock = ({isProfile, isHome, isRequest}) => {
    return(
        <div className='belowbar'>
            {isProfile ? <FooterIconBlock icon={<BiUser />} name="프로필" isSelected />:
            <FooterIconBlock icon={<BiUser />} name="프로필" />  }
            {isHome ? <FooterIconBlock icon={<AiOutlineHome />} name="홈" isSelected />: 
            <FooterIconBlock icon={<AiOutlineHome />} name="홈" />  }
            {isRequest ? <FooterIconBlock icon={<RiPencilLine />} name="요청사항" isSelected />:
            <FooterIconBlock icon={<RiPencilLine />} name="요청사항" />  }
        </div>
    );
};

export default BelowBarBlock ;