import React from "react";
import { BsPlusLg } from 'react-icons/bs';

const AddPost = ({className, onClick}) => {
    const handleAddStyle = {
        fontSize: '30px',
        border: '1px solid',
        borderRadius: 'var(--border-radius)',
        padding: '10px 0',
        width: '100%',
    };
    return(
        <>
            <BsPlusLg className={className} style={handleAddStyle} onClick={onClick}/>
        </>
    );
};

export default AddPost;