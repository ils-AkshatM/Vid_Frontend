import React from "react";
import bgim from "../../assets/icons/bg.jpg";

const AuthContainer = ({ children }) => {
  return (
    <div className="Container bg-[#F3F4F9]">
      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full">
        <div className="bg-white rounded-lg shadow-md flex relative w-11/12 lg:w-3/4 h-3/4">
          <div className="hidden lg:block lg:w-[60.666667%] relative">
            <img
              src={bgim}
              alt="localImg"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-[39.333333%]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
