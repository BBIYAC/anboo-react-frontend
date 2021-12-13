import React, { useState } from "react";

const Rating = ({setRatingState}) => {
	const ratingList = 
  ['5.0~4.0', '3.9~3.0', '2.9~2.0', '1.9~1.0', '0.9~0.0'];
  const [rating, ratingSelected] = useState('');

  const changeSelect = (e) =>{
    ratingSelected(e.target.value);
    setRatingState(e.target.value);
  };

  return (
    <React.Fragment>
      <select className="sel-ratingchoice" onChange={changeSelect} value={rating||""}>
        <option value="" >모두보기</option>
        {ratingList.map((item,index) =>(
          <option value={4-index} key={item}>
            {item}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default Rating;