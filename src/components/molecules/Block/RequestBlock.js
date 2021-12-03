import React, {useState} from "react";
import {IoIosSend} from 'react-icons/io';
import axios from 'axios';
import { apiUrl } from "../../../pages/ApiURL";

const RequestBlock = ({setFeedback, requestId, requestTitle, requestName, requestContent, requestDate, response, isManager}) => {
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

    const handleBoldStyle = {
        fontWeight: 'bold'
    };

    const [content, setContent] = useState('');
    const [clicked, setClicked] = useState(false);
    const onSubmit = () => {
      setClicked(true);
      console.log(content)
      if(content){
          // axios request response POST - 요청사항 응답
          const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')};
          axios({url:`${apiUrl}/supervisor/requests/`,method : 'post' ,headers: headers, data:{
              nok_request_id: requestId,
              comment: content,
          }})
          .then(response =>{
              console.log('post success!', response.data);
              setFeedback(true);
          }).catch(error => {
              console.error(error);
        })
      }
    }
    const onChange = (e) => {
        setContent(e.target.value);
    }

    const year = requestDate.substring(0, 4);
    const month = requestDate.substring(5, 7);
    const day = requestDate.substring(8, 10);
    const hour = requestDate.substring(11, 13);
    const minutes = requestDate.substring(14, 16);
    const date = year+'년 '+month+'월 '+day+'일 '+hour+'시 '+minutes+'분';
    

    return(
        <><div style={handleRequestBlockStyle}>
            { isManager &&
                <div style={handleBoldStyle}>{requestTitle} 님({requestName} 님 보호자)</div>
            }
            <div>{requestContent}</div>
            <div style={handleRequestDateStyle}>{date}</div>
            {
            response
            ?<div style={handleResponseStyle}>
                <p className='response-title'>답글:</p> 
                <p>{response}</p>
            </div>
            :isManager &&
                <div style={handleResponseStyle}>
                    <p className='response-title'>답글:</p> 
                    <input className='input-response' type='text' value={content||""} onChange={onChange}></input>
                    <IoIosSend className='icon-send' onClick={onSubmit}/>
                </div> 
            }
        </div>
        {clicked && content === '' && <div className='notice-massage'>※ 필수로 입력해주세요.</div>}</>
    );
};

export default RequestBlock;