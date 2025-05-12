import React from 'react';

const Button = ({name}) => {
    return (
        <div className="">
            <button className="py-2 px-4 m-2 bg-gray-200 text-black rounded-xl">{name}</button>
        </div>
    );
};

export default Button;