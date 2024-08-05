import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";
import LoginForm from "./LoginForm";
import AuthContainer from "../AuthContainer";
import { REGISTER_ENDPOINT } from "../../../routing/routes";

const Login = () => {
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
            <LoginForm />
          </div>
          <div className="w-full flex flex-col items-center justify-center mb-6">
            <span className="text-sm">
              Don't have an account?
              <Link to={REGISTER_ENDPOINT} className="text-blue-500 ml-1">
                Sign Up
              </Link>
            </span>
          </div>    
        </div>
      </div>
    </AuthContainer>
  );
};

export default Login;
