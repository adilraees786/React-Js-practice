
import React from 'react';

const Button = ({ children, onClick, extraClass }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 bg-[#1689FE] cursor-pointer text-white font-semibold rounded-md hover:bg-primary-hover transition whitespace-nowrap ${extraClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
