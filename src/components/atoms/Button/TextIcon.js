import React from 'react';
const handleClick = () => {
  console.log("this");
}

const TextIcon = ({btnText, icon, backgroundColor, border, color}) =>{
  return(
    <React.Fragment>
      <button 
      className="btn-textIcon" 
      onClick={handleClick}
      style={{backgroundColor, border, color}}>
        {btnText}
        {icon}
      </button>
    </React.Fragment>
  );
};

export default TextIcon;