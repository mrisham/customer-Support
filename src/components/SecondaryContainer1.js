import React, { useState } from "react";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import SubmitBtn from "./SubmitBtn";

const SecondaryContainer = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowForgotPassword(false); // Close the forgot password form when sign up is clicked
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
    setShowSignUp(false); // Close the sign-up form when forgot password is clicked
  };

  return (
    <div className="w-[1000px] h-[700px] flex flex-col items-center justify-center bg-lighterGreen gap-14">
      <div className="h-[59px] w-[601px] justify-center text-[48px] font-bold italic mt-[-60px]  ">
        Helpdesk System
      </div>
      <div>
        {showForgotPassword ? (
          <div className="flex flex-col gap-4 mb-8">
            <p className="text-xl">
              Don’t worry, Enter your email below and we will send you a link to
              change password.
            </p>
            <input
              type="text"
              placeholder="Email"
              className="w-[601px] h-[73px] border border-black p-5 text-[30px] mb-6 text-black outline-none ml-[4.5rem]"
            />
            <SubmitBtn />
            <SignUpButton />
          </div>
        ) : (
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4 mb-8"
          >
            <input
              type="text"
              placeholder="Username"
              className="w-[601px] h-[73px] border border-black mb-4 p-5 text-[30px] text-black outline-none"
            />
            <input
              type="text"
              placeholder="Password"
              className="w-[601px] h-[73px] border border-black p-5 text-[30px] mb-6 text-black outline-none"
            />
            {showSignUp && (
              <input
                type="text"
                placeholder="Email"
                className="w-[601px] h-[73px] border border-black p-5 text-[30px] mb-6 text-black outline-none"
              />
            )}
            {showSignUp ? <SignUpButton /> : <SignInButton />}
          </form>
        )}

        {!showForgotPassword && (
          <div className="flex justify-between">
            <button
              onClick={handleForgotPasswordClick}
              className="text-redBtn text-[20px] px-4 py-2 rounded"
            >
              Forgot Password
            </button>
            {!showForgotPassword && (
              <button
                onClick={handleSignUpClick}
                className="text-black text-[30px] px-4 py-2 rounded"
              >
                Sign Up
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
