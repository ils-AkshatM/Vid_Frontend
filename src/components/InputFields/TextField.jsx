// src/components/TextField.js
import React from "react";

const TextInput = (({ label, name, placeholder, className, value, type, maxLength, disabled=false, onChange=undefined }) => (
  <div className="flex justify-between items-center mb-4">
    {label && <span className="text-sm">{label}</span>}
    <div>
      <div className={`${className} text-sm border p-1 border-[#CCCCCC] rounded-md bg-[#F9FAFC] h-fit overflow-hidden`}>
        {
          type==='number' || type==='decimal' || type==='phone' ?
          <input
            type="text"
            placeholder={placeholder}
            className="bg-[#F9FAFC] border-none w-full placeholder-italic text-black not-italic text-xs font-semibold"
            name={name}
            autoComplete='off'
            value={value}
            disabled={disabled}
            maxLength={maxLength}
            onChange={onChange}
          />
          :
          (type==='alphaNumber'?
            <input
              type="text"
              placeholder={placeholder}
              className="bg-[#F9FAFC] border-none w-full placeholder-italic text-black not-italic text-xs font-semibold"
              name={name}
              autoComplete='off'
              value={value}
              disabled={disabled}
              maxLength={maxLength}
              onChange={onChange}
            />
          :
          <input
            type="text"
            placeholder={placeholder}
            className="bg-[#F9FAFC] outline-none border-none w-full placeholder-italic text-black not-italic text-xs font-semibold"
            name={name}
            autoComplete='off'
            value={value}
            maxLength={maxLength}
            onChange={onChange}
          />)
        }
      </div>
    </div>
  </div>
));

export default TextInput;
