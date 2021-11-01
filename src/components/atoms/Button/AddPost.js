import React from "react";
import { BsPlusLg } from 'react-icons/bs';

const AddPost = ({className}) => {
    const handleAddStyle = {
        fontSize: '30px',
        borderRadius: 'var(--border-radius)',
        padding: '10px 0',
        width: '100%',
    };
    return(
        <>
            <BsPlusLg className={className} style={handleAddStyle}/>
        </>
    );
};

export default AddPost;