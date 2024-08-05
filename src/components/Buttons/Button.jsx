import React from "react";

const Button = ({ label, onClick, className, disabled, type, ref }) => {
  return (
    <button
      ref={ref}
      className={`${className} bg-red-600 text-white text-xs px-3 h-8 font-semibold rounded-lg border-[#941A25] border `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
