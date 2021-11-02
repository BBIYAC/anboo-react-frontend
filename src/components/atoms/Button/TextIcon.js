import React from 'react';

const TextIcon = ({btnText, icon, backgroundColor, border, color}) =>{
  const handleClick = () => {
    console.log("this");
  }
  
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