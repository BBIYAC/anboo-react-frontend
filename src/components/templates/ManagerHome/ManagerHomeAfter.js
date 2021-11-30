import React, {useState, useEffect} from "react";
import Floating from "../../atoms/Button/Floating";
import LeftLargeText from "../../atoms/Label/LeftLargeText";
import CountRequestBlock from "../../molecules/Block/CountRequestBlock";
import { useHistory } from "react-router";
import axios from "axios";
import { apiUrl } from "../../../pages/ApiURL";

const ManagerHomeAfter = () => {
  const [datas, setDatas] = useState({
    non_response: 0,
    non_approval: 0,
  })
  let history = useHistory();
  const headers = {Authorization : 'Bearer ' + localStorage.getItem('accessToken')}
  useEffect(()=>{
    // axios number of not response GET - 답변하지 않은 요청사항 개수
    axios({url: `${apiUrl}/supervisor/no-response-to-request/` ,method : 'get' ,headers:headers})
    .then(resRequests =>{
      // axios number of not approval GET - 승인하지 않은 보호자 & 환자 리스트
      axios({url: `${apiUrl}/supervisor/not-approved-nok-list/` ,method : 'get' ,headers:headers})
      .then(resMembers =>{
        setDatas({
          non_response: resRequests.data.number_of_not_responded_requests,
          non_approval: resMembers.data.np_info.length,
        })
      }).catch(error => {
          console.error(error);
      });
    }).catch(error => {
        console.error(error);
    });

    
  }, [])

  return(
    <>
      <LeftLargeText text='안녕하세요!' />
      <LeftLargeText text='오늘도 기분좋게 일해봐요. 모두 화이팅!' />
      <CountRequestBlock request='요청사항 미응답' count={datas.non_response} onClick={()=>history.push('/mg/requests/')} />
      <CountRequestBlock request='요양인 등록 미승인' count={datas.non_approval} onClick={()=>history.push('/mg/rgs/')} />
      <Floating background='var(--color-green)' onClick={()=>history.push('/mg/requests')}/>
    </>
  );
};

export default ManagerHomeAfter;