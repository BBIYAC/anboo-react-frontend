import React, {useState} from "react";
import {IoIosSend} from 'react-icons/io'
;
const RequestBlock = ({requestTitle, requestContent, requestDate, response, isManager}) => {
    const handleRequestBlockStyle = {
        border: 'var(--border-bottom)',
        borderRadius: 'var(--border-radius)',
        padding: '10px 20px 10px 20px',
        marginTop: '20px',
        textAlign: 'left',
        lineHeight: '25px',
    };

    const handleRequestDateStyle = {
        textAlign: 'right',
        marginTop: '10px',
        fontSize: '0.8rem',
    };

    const handleResponseStyle = {
        borderTop : 'var(--border-bottom)',
        paddingTop: '10px',
        lineHeight: '1.5rem',
        marginTop: '10px',
        display: 'flex',
    };

    const [content, setContent] = useState('');
    const [clicked, setClicked] = useState(false);
    const onSubmit = () => {
        setClicked(true);
        if(content){
            console.log(content);
            /*
            axios request response POST
            */
        }
    }
    const onChange = (e) => {
        setContent(e.target.value);
    }

    return(
        <><div style={handleRequestBlockStyle}>
            <div>{requestTitle}</div>
            <div>{requestContent}</div>
            <div style={handleRequestDateStyle}>{requestDate}</div>
            {
            response
            ?<div style={handleResponseStyle}>
                <p className='response-title'>답글:</p> 
                <p>{response}</p>
            </div>
            :isManager &&
                <div style={handleResponseStyle}>
                    <p className='response-title'>답글:</p> 
                    <input className='input-response' type='text' value={content} onChange={onChange}></input>
                    <IoIosSend className='icon-send' onClick={onSubmit}/>
                </div> 
            }
        </div>
        {clicked && content === '' && <div className='notice-massage'>※ 필수로 입력해주세요.</div>}</>
    );
};

export default RequestBlock;