import React from 'react';

const sizes = {
    default: `py-3 px-6 bg-gray-900 text-white`,
    lg: `py-4 px-12`,
    xl: `py-5 px-16 text-lg`,
    outline: `py-2 px-6 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white`,
};

const Button = ({ children, className = '', size }) => {
    return (
        <div>
            <button
                type="button"
                className={`
        ${sizes[size] || sizes.default}
        ${className}
         rounded-2xl text-base font-semibold transition delay-50 duration-300
    `}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
