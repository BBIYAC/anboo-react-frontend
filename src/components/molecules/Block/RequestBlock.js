import React from "react";

const RequestBlock = ({requestTitle, requestContent, requestDate, response}) => {
    const handleRequestBlockStyle = {
        border: 'var(--border-bottom)',
        borderRadius: 'var(--border-radius)',
        padding: '20px',
        marginTop: '20px',
        textAlign: 'left',
        lineHeight: '25px',
    };

    const handleRequestDateStyle = {
        textAlign: 'right',
        marginTop: '10px',
        fontSize: '0.8rem',
    };

    const handleResponseStyle = {
        borderTop : 'var(--border-bottom)',
        padding: '10px 10px 0 10px',
        marginTop: '10px',
        // color: 'var(--color-blue)',
    };
    return(
        <div style={handleRequestBlockStyle}>
            <div>{requestTitle}</div>
            <div>{requestContent}</div>
            <div style={handleRequestDateStyle}>{requestDate}</div>
            {response?<div style={handleResponseStyle}>답글 : {response}</div>:<></> }
            
        </div>
    );
};

export default RequestBlock;