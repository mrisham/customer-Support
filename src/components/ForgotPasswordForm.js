import React from "react";
import SubmitBtn from "./SubmitBtn";
import SignUpButton from "./SignUpButton";

const ForgotPasswordForm = () => {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="text-xl font-medium  mb-4 ">
        <p>Don’t worry, Enter your email below and we will</p>
        <p>send you a link to change password. </p>
      </div>
      <input
        type="text"
        placeholder="Email"
        className="w-[601px] h-[73px] border border-black p-5 text-[30px] mb-6 text-black outline-none ml-[4.5rem]"
      />
      <div className="flex flex-col gap-4">
        <SubmitBtn />
        <SignUpButton />
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
