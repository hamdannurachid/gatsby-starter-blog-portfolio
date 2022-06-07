import React from 'react';

// const sizes = {
//     default: `w-5 h-5 bg-blue-600`,
//     small: `w-2.5 h-2.5 bg-gray-900 `,
// };

const Section = ({ children, className = '', size }) => {
    return (

        <div className={`
        
        ${className}
        
        mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 
    `}>

            {children}
        </div>



    );
};

export default Section;
