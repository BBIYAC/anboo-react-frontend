// import React from 'react';
// import ImageMiddle from '../../atoms/Input/ImageMiddle';
// import NursingHomeInfo from '../../atoms/Label/NursingHomeInfo';
// import {AiOutlineCheckCircle} from 'react-icons/ai';
// import {AiFillCheckCircle} from 'react-icons/ai';

// const NursingHomeInfoCheckBlock = ({isSelected}) => {
//   return(
//     <React.Fragment>
//       <div className="block-NursingHomeInfo">
//         <div className="NursingHomeInfo">
//           <ImageMiddle />
//           <NursingHomeInfo />
//         </div>
//         {isSelected?<AiFillCheckCircle className='NursingHomeCheck'/>:<AiOutlineCheckCircle className='NursingHomeCheck' />}
//       </div>
//     </React.Fragment>
//   );
// };

// export default NursingHomeInfoCheckBlock;

import React, { useState, useEffect } from 'react';
import ImageSmall from '../../atoms/Input/ImageSmall';

const NursingHomeInfoCheckBlock = ({isSelected}) => {
  const nursingHomeInfo = [
    { image: <ImageSmall/>, name: "행복 요양원", address: "대전 서구 관저동" },
    { image: <ImageSmall/>, name: "최고 요양원", address: "대전 서구 관저동" },
    { image: <ImageSmall/>, name: "좋아 요양원", address: "대전 서구 관저동" },
    { image: <ImageSmall/>, name: "쥬아 요양원", address: "대전 서구 관저동" },
    { image: <ImageSmall/>, name: "됴아 요양원", address: "대전 서구 관저동" },
  ];

  const [nursingHomes, setNursingHomes] = useState([]);

  useEffect(() => {
    setNursingHomes(nursingHomeInfo);
  }, []);

  const handleClick = (e) => {
    const {name, checked} = e.target;
    let tempNursingHome = nursingHomes.map(nursingHome => 
      nursingHome.name === name ? {...nursingHome, isChecked : checked} : nursingHome
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