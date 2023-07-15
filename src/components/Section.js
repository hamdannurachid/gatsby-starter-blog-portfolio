import React from 'react';

// const sizes = {
//     default: `w-5 h-5 bg-blue-600`,
//     small: `w-2.5 h-2.5 bg-gray-900 `,
// };

const Section = ({ children, className = '', size }) => {
    return (

        <div className={`
        
        ${className}
        
        sm:mx-auto mx-4 lg:py-12 max-w-7xl
    `}>

            {children}
        </div>



    );
};

export default Section;
