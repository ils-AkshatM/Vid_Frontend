import React from "react";
import { PasswordField } from "../../../components/InputFields/PasswordField";
import Button from "../../../components/Buttons/Button";
import TextInput from "../../../components/InputFields/TextField";

const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <TextInput
          type="alphaNumber"
          placeholder="Username/email"
          label=""
          id="username"
          className="w-72 h-8"
        />
        <PasswordField
          label=""
          placeholder="Password"
          type="password"
          id="password"
          className="w-72 h-8"
        />
      </div>
      <div className="flex justify-center items-center my-3 mt-7">
        <Button
          label="Login"
          type="Submit"
          className="w-72 py-2 rounded focus:outline-none focus:shadow-lg border-solid cursor-pointer"
        />
      </div>
    </div>
  );
};

export default LoginForm;
