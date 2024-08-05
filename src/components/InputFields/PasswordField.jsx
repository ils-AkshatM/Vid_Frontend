// import React, { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// export const PasswordField = ({ label, name, value, onChange, placeholder }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="mb-4 flex justify-between items-center gap-3">
//       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
//         {label}
//       </label>
//       <div className="relative w-52">
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id={name}
//           type={showPassword ? "text" : "password"}
//           name={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//         />
//         <div
//           className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//           onClick={togglePasswordVisibility}
//         >
//           {showPassword ? <FaEyeSlash /> : <FaEye />}
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const PasswordField = (({ label, name, placeholder, className, errorBoxClassname, disabled=false }) => {
    const [hide, setHide] = useState(false)
    
    return (
        <div className="flex justify-between mb-0.5">
        {label && <span className="text-sm mt-2">{label}</span>}
        <div >
            <div className={`${className} text-sm border border-[#CCCCCC] rounded-md p-1 bg-[#F9FAFC] h-fit overflow-hidden flex items-center`}>
                <input
                    disabled={disabled}
                    type={!hide? "password" : "text"}
                    placeholder={placeholder}
                    className="bg-[#F9FAFC] outline-none border-none w-full placeholder-italic text-black not-italic text-xs font-semibold"
                    name={name}
                    autoComplete='new-password'
                />
                <span className='cursor-pointer mr-2' onClick={()=> setHide(prev=> !prev)}>
                    {hide ? <FaEye/> : <FaEyeSlash/>}
                </span>
            </div>
        </div>
        </div>
    )
});