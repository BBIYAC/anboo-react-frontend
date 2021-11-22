import React, { useState } from "react";

const Rating = () => {
	const ratingList = 
  ['4.0~5.0', '3.0~4.0', '2.0~3.0', '1.0~2.0'];
  const [rating, ratingSelected] = useState('');

  const changeSelect = (e) =>{
    ratingSelected(e.target.value);
  };

  return (
    <React.Fragment>
      <select className="sel-ratingchoice" onChange={changeSelect} value={rating}>
        <option value="" selected disabled>평점</option>
        {ratingList.map((item) =>(
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default Rating;