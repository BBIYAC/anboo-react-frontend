import React, {useState, useEffect} from 'react';

const RequestDate = () => {
  const [timer,setTimer] = useState('');
  const currentTime = () => {
    const date = new Date();
    const year = String(date.getFullYear()).padStart(2,'0');
    const month = String(date.getMonth()+1).padStart(2,'0'); // (0~11)로 1월이 0으로 표기되므로 +1
    const day = String(date.getDate()).padStart(2,'0');
    const hour = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    setTimer(year+'년 '+month+'월 '+day+'일 '+hour+'시 '+minutes+'분');
  };

  useEffect(() => {
    currentTime();
  }, []);

  return(
    <React.Fragment>
      <div className="handleDataStyle">{timer}</div>
    </React.Fragment>
  );
};

export default RequestDate;