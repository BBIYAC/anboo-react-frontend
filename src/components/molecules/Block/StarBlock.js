import React from 'react';
import Star from '../../atoms/Button/Star';

const Satisfaction = () => {
    const handleStyle = {
        display: 'flex',
        padding: '0 30px',
        justifyContent: 'space-between',
        border: '1px solid #ddd',
        borderRadius: 'var(--border-radius)',
        margin: '20px 0 40px 0' 
    }
    return(
        <div className="satisfaction" style={handleStyle}>
            <Star clicked/>
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    );
};

export default Satisfaction;