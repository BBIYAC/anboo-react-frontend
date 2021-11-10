import React, { useState } from "react";

const Religion = () => {
  const religionList = ['기독교', '불교', '천주교', '원불교'];
  const [religion, religionSelected] = useState('');

  const changeSelect = (e) =>{
    religionSelected(e.target.value);
  };

  return (
    <React.Fragment>
      <select className="sel-religionchoice" onChange={changeSelect} value={religion}>
        {religionList.map((item) =>(
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default Religion;