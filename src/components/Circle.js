import React from 'react';

const sizes = {
    default: `w-5 h-5 bg-blue-600 gap-x-12`,
    small: `w-2.5 h-2.5 bg-gray-900 `,
};

const Circle = ({ className = '', size }) => {
    return (

        <div className={`
        ${sizes[size] || sizes.default}
        ${className}
        
        rounded-full
    `}></div>



    );
};

export default Circle;
