import React from "react";
import { BsPlusLg } from 'react-icons/bs';

const AddPost = () => {
    const handleAddStyle = {
        fontSize: '30px',
        color: 'var(--color-blue)',
        border: 'var(--border-bottom)',
        borderRadius: 'var(--border-radius)',
        padding: '10px 0',
        width: '100%',
    };
    return(
        <>
            <BsPlusLg style={handleAddStyle}/>
        </>
    );
};

export default AddPost;