import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Rating = () => {
	const ratingList = 
  ['5.0', '4.5', '4.0', '3.5', '3.0',
   '2.5', '2.0', '1.5', '1.0', '0.5', '0.0'];
  const [rating, ratingSelected] = useState('');

  const changeSelect = (e) =>{
    ratingSelected(e.target.value);
  };

  return (
    <React.Fragment>
      <select className="sel-ratingchoice" onChange={changeSelect} value={rating}>
        {ratingList.map((item) =>(
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <IoIosArrowDown className="arrow-down-rating"/>
    </React.Fragment>
  );
};

export default Rating;