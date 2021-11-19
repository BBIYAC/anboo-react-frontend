import React from "react";
import {AiOutlineExclamationCircle} from 'react-icons/ai';

const NoticeBlock = ({isManager}) => {
    return(
        <>
        {
            isManager?
            <div className='manager noticewaitingblock'>
                <AiOutlineExclamationCircle size='100'/>
                <p>요양원 등록 승인 대기 중입니다.</p>
            </div>:
            <div className='register noticewaitingblock'>
                <AiOutlineExclamationCircle size='100'/>
                <p>요양인 등록 승인 대기 중입니다.</p>
            </div>
        }
        </>    
    );
};

export default NoticeBlock;