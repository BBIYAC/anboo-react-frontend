import React, { useState, useEffect } from 'react';
import ImageSmall from '../../atoms/Input/ImageSmall';

const NursingHomeInfoCheckBlock = () => {
  const nursingHomeInfo = [
    { image: <ImageSmall url=""/>, name: "행복 요양원", address: "대전 서구 관저동" },
    { image: <ImageSmall url=""/>, name: "최고 요양원", address: "대전 서구 관저동" },
    { image: <ImageSmall url=""/>, name: "좋아 요양원", address: "대전 서구 관저동" },
    { image: <ImageSmall url=""/>, name: "쥬아 요양원", address: "대전 서구 관저동" },
    { image: <ImageSmall url=""/>, name: "됴아 요양원", address: "대전 서구 관저동" },
  ];

  const [nursingHomes, setNursingHomes] = useState([]);

  useEffect(() => {
    setNursingHomes(nursingHomeInfo);
  }, []);

  const handleClick = (e) => {
    const {name, checked} = e.target;
    let tempNursingHome = nursingHomes.map(nursingHome => 
      nursingHome.name === name ? {...nursingHome, isChecked : checked} : {...nursingHome, isChecked: false}
    );
    setNursingHomes(tempNursingHome);
  }
  
  return(
    <React.Fragment>
      {nursingHomes.map(nursingHome => (
        <div className="div-list">
          {nursingHome.image}
          <div className="div-info">
            <div className="listInfo-name">이름: {nursingHome.name}</div>
            <div className="listInfo-year">주소: {nursingHome.address}</div>
          </div>
          
          <input type="checkbox" 
          className="form-check-input" 
          name={nursingHome.name}
          checked={nursingHome.isChecked || false}
          onChange={handleClick}/>
        </div>
      ))}
    </React.Fragment>
  );
};

export default NursingHomeInfoCheckBlock;