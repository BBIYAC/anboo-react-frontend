import React, {useState, useEffect} from 'react';

const Caution = ({isCaution, setIsCaution}) => {
  const [titName, setTitName] = useState('');
  const onChange = (e) => {
      setTitName && setTitName(e.target.value);
      setIsCaution && setIsCaution(e.target.value);
  };

  useEffect(()=>{
      setTitName(isCaution);
  },[isCaution])

  useEffect(()=>{
    setIsCaution(titName)
  },[titName])
  
  return(
    <>
      <div className="tit-name">특이사항</div>
      <input className="input-name" onChange={onChange} value={titName||""} placeholder='특이사항을 입력해주세요.'></input>
    </>
  );
};

export default Caution;