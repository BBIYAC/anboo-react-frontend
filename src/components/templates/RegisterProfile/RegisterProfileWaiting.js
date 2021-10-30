import React from "react";
import NoticeWaitingBlock from '../../molecules/Block/NoticeWaitingBlock';
import BelowBarBlock from '../../molecules/Block/BelowBarBlock';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';

const ManagerHomeWaiting = () => {
    return(
        <>
            <div className="header">
                <IoIosArrowBack opacity='0' size="20"/>
                요양자 프로필
                <BiLogOut size="20"/>
            </div>
            <NoticeWaitingBlock />
            <BelowBarBlock isProfile/>
        </>
    );
};

export default ManagerHomeWaiting;