import React from "react";
import {AiOutlineExclamationCircle} from 'react-icons/ai';

const NoticeBlock = () => {
    return(
        <div className='manager noticeblock'>
            <AiOutlineExclamationCircle size='30px' />
            <p className='noticetext'>요양원을 등록하셔야 이용이 가능합니다.<br/>
                등록을 원하시면 요양원을 찾으신 후 등록해주세요.
            </p>
        </div>
    );
};

export default NoticeBlock;