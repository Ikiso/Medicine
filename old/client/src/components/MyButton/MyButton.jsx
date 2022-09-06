import React from 'react';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} >{children}</button>
    );
};

export default MyButton;