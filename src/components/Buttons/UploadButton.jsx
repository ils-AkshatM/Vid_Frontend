import React, { useState } from "react";
import { BiUpload } from "react-icons/bi";

const UploadButton = ({ showFileName = false, name }) => {
  const [file, setFile] = useState(null);

  const handleButtonChange = (e) => {
    // Handle the file change here
    const selectedFile = e.target.files[0];
    setFile(e.target.files[0]);
    console.log("Selected File:", selectedFile);
  };

  return (
    <div>
      <div className="flex items-center">
        <div className="font-semibold">
          <input
            className="text-xs rounded-lg w-56 py-2 px-3 text-gray-700 border-none items-center hidden"
            name={name}
            id={name}
            type="file"
            onChange={handleButtonChange}
          ></input>
          <label
            htmlFor={name}
            className="h-9 flex text-red-650 border border-red-650 bg-white
                        text-xs px-2 items-center rounded-lg"
          >
            <BiUpload className="mr-2 fill-red-650 h-8" /> Upload
          </label>
        </div>
        {showFileName && (
          <div className="text-xs ms-2 overflow-hidden text-nowrap text-ellipsis">
            {file?.name || (
              <span className="text-[#AAAAAA]">No File Chosen</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// export const UploadButtonFM = ({ showFileName=false, fileName, name, accept, onSelect=()=>{}}) => {
//   const [file, setFile] = useState(null);

//   const handleButtonChange = (e) => {
//     // Handle the file change here
//     const selectedFile = e.target.files[0];

//    if(e.target.files[0]){
//      setFile(e.target.files[0]);
//      onSelect(selectedFile)
//    }
//   };

//   return (
//     <div>
//       <div className="flex items-center">
//         <div className="font-semibold">
//           <input
//             className="text-xs rounded-lg w-56 py-2 px-3 text-gray-700 border-none items-center hidden"
//             name={name}
//             id={name}
//             type="file"
//             accept={accept}
//             onChange={handleButtonChange}
//           />
//           <label
//             htmlFor={name}
//             className="h-9 flex text-red-650 border border-red-650 bg-white
//                         text-xs px-2 items-center rounded-lg"
//           >
//             <UploadEx className="mr-2 fill-red-650 h-8" /> Upload
//           </label>
//         </div>
//         {showFileName && (
//           <div className="text-xs ms-2 overflow-hidden text-nowrap text-ellipsis">
//             {fileName || (
//               <span className="text-[#AAAAAA]">No File Chosen</span>
//             )}
//           </div>
//         )}
//       </div>
//       <div className={`text-red-500 text-xs italic h-3 text-wrap break-words`}>
//         <ErrorMessage name={name} />
//       </div>
//     </div>
//   );
// };
export default UploadButton;
