import React from 'react';

const FooterIconBlock = ({icon, name, isSelected, isManager}) => {
    const handleStyle = isSelected?isManager?{
        fontSize: '1.5rem',
        color: 'var(--color-green)',
    }: {
        fontSize: '1.5rem',
        color: 'var(--color-blue)',
    }: {
        fontSize: '1.5rem',
        color: 'var(--color-dark-gray)',
    };

    const handleTextStyle = {
        fontSize: '0.8rem'
    };
    return(
        <div style={handleStyle}>
            {icon}
            <div style={handleTextStyle}>{name}</div>
        </div>
    );
};

export default FooterIconBlock;