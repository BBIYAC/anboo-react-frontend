import React from 'react';

const TextIcon = ({btnText, icon, backgroundColor, border, color, onClick}) =>{
  return(
    <React.Fragment>
      <button 
      className="btn-textIcon" 
      style={{backgroundColor, border, color}}
      onClick={onClick}>
        {btnText}
        {icon}
      </button>
    </React.Fragment>
  );
};

export default TextIcon;