import React from 'react';

const FooterIconBlock = ({icon, name, isSelected}) => {
  const handleTextStyle = {
    fontSize: '0.8rem'
  };
  const handleStyle = isSelected?{
    fontSize: '1.5rem',
    color: 'var(--color-blue)',
  }: {
    fontSize: '1.5rem',
    color: 'var(--color-dark-gray)',
  };
  
  return(
    <div style={handleStyle}>
      {icon}
      <div style={handleTextStyle}>{name}</div>
    </div>
  );
};

export default FooterIconBlock;