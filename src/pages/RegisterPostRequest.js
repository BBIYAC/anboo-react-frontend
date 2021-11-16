import React, {useState} from 'react';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import BelowBarBlock from '../components/molecules/Block/BelowBarBlock';
import PostRequestTextArea from '../components/atoms/Input/PostRequestTextArea';
import RequestDate from '../components/atoms/Label/RequestDate';
import { BiLogOut } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const  RegisterPostRequest= () => {
  const [request, setRequest] = useState('');
  const [clicked, setClicked] = useState(false);
  const onChange = (e) =>{
    setRequest(e.target.value);
  }
  const onClick = () => {
    setClicked(true);
    if(request){
      console.log(request);
      /*
      axios request post in register request POST
      */
    }
  }

  return (
    <React.Fragment>
      <div className="header">
        <Link className="linkComponent" to="/rg/requests">
          <IoIosArrowBack size="20"/>
        </Link>
        요청사항 작성
        <Link className="linkComponent" to="/">
          <BiLogOut size="20"/>
        </Link>
      </div>
      <PostRequestTextArea request={request} setRequest={setRequest} onChange={onChange} />
      {clicked && request === '' && <div className='notice-massage'>※ 필수로 입력해주세요.</div>}
      <RequestDate />
      {
        clicked
        ?<Link className="linkComponent" to="/rg/requests">
          <RoundRectangle type='submit' btnText="요청사항 보내기" onClick={onClick}/>
        </Link>
        :<RoundRectangle type='submit' btnText="요청사항 보내기" onClick={onClick}/>
      }
      
      <BelowBarBlock isRequest />
    </React.Fragment>
  );
};

export default RegisterPostRequest;