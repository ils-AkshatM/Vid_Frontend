import React from "react";
import Logo from "../../../components/Logo/Logo";
import AuthContainer from "../AuthContainer";
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";
import { LOGIN_ENDPOINT } from "../../../routing/routes";

const Register = () => {
  return (
    <AuthContainer>
      <div className="bg-white text-black min-h-[75vh] flex items-center justify-center rounded-lg shadow-lg animate-fadeIn">
        <div className="mx-auto w-full max-w-sm flex flex-col p-6">
          <div className="w-full flex justify-center items-center mb-6">
            <Logo
              className="w-full text-center text-2xl font-semibold"
              inline={true}
            />
          </div>
          <div className="animate-bounceIn">
            <RegisterForm />
          </div>
          <div className="w-full flex flex-col items-center justify-center mb-6">
            <span className="text-sm">
              Already have an account?
              <Link to={LOGIN_ENDPOINT} className="text-blue-500 ml-1">
                Login
              </Link>
            </span>
          </div>   
        </div>
      </div>
    </AuthContainer>
  );
};

export default Register;
