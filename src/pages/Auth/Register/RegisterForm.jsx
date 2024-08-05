import React from "react";
import TextInput from "../../../components/InputFields/TextField";
import { PasswordField } from "../../../components/InputFields/PasswordField";
import Button from "../../../components/Buttons/Button";
import UploadButton from "../../../components/Buttons/UploadButton";

const RegisterForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <TextInput
          type="email"
          placeholder="Email"
          label=""
          id="email"
          className="w-72 h-8"
        />
        <TextInput
          type="alphaNumber"
          placeholder="Username"
          label=""
          id="username"
          className="w-72 h-8"
        />
        <TextInput
          type="alphaNumber"
          placeholder="Full Name"
          label=""
          id="fullName"
          className="w-72 h-8"
        />
        <PasswordField
          label=""
          placeholder="Password"
          type="password"
          id="password"
          className="w-72 h-8"
        />
        <div className="flex justify-between my-4 items-center">
            <span>Profile Image:</span>
          <UploadButton name="Profile Image" showFileName="true" />
        </div>
        <div className="flex justify-between my-4 items-center">
            <span>Cover Image:</span>
          <UploadButton name="Cover Image" showFileName="true" />
        </div>
      </div>
      <div className="flex justify-center items-center my-3 mt-7">
        <Button
          label="Sign Up"
          type="Submit"
          className="w-72 py-2 rounded focus:outline-none focus:shadow-lg border-solid cursor-pointer"
        />
      </div>
    </div>
  );
};

export default RegisterForm;
