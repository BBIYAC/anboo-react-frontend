import React, { useEffect, useState } from "react";
import ImageMiddle from "../../atoms/Input/ImageMiddle";
import StarRatingLabel from "../../atoms/Label/StarRatingLabel";
import { Link } from 'react-router-dom';

const NursingHomeInfoBlock = () => {
  const nursingHomeInfo = [
    { id:1, image: <ImageMiddle/>, name: "안부 요양원", address: "대전광역시 서구 관저동", religion: "기독교" },
    { id:2, image: <ImageMiddle/>, name: "안심 요양원", address: "대전광역시 서구 관저동", religion: "불교" },
    { id:3, image: <ImageMiddle/>, name: "안정 요양원", address: "대전광역시 서구 가수원동", religion: "원불교" },
    { id:4, image: <ImageMiddle/>, name: "안녕 요양원", address: "대전광역시 중구 둔산동", religion: "천주교" },
    { id:5, image: <ImageMiddle/>, name: "안산 요양원", address: "대전광역시 유성구", religion: "기독교" },
  ];

  const [nursingHomes, setNursingHomes] = useState([]);

  useEffect(() => {
    setNursingHomes(nursingHomeInfo);
  }, []);

  return (
    <React.Fragment>
      <div className="div-nursingHomeScroll">
        {nursingHomes.map((nursingHome, index) => (
        <Link key={index} className="linkComponent" to="/rg/nh-info">
          <div className="nursingHome">
            {nursingHome.image}
            <div className="div-nhInfo">
              <div className="nursingHomeInfo-name">{nursingHome.name}</div>
              <div className="nursingHomeInfo-address">{nursingHome.address}</div>
              <div className="nursingHomeInfo-religion">{nursingHome.religion}</div>
              <StarRatingLabel />
            </div>
          </div>
        </Link>
      ))}
      </div>
    </React.Fragment>
  );
};

export default NursingHomeInfoBlock;