import React, { useState } from "react";
import SignInSignUpForm from "./SignInSignUpForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

const SecondaryContainer = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowForgotPassword(false);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
    setShowSignUp(false);
  };

  return (
    <div className="w-[1000px] h-[700px] flex flex-col items-center justify-center bg-lighterGreen gap-14">
      <div className="h-[59px] w-[601px] justify-center text-[48px] font-bold italic mt-[-60px]  ">
        Helpdesk System
      </div>
      <div>
        {showForgotPassword ? (
          <ForgotPasswordForm />
        ) : (
          <SignInSignUpForm
            showSignUp={showSignUp}
            handleSignUpClick={handleSignUpClick}
          />
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
