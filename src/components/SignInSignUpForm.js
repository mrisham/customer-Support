import React from "react";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";

const SignInSignUpForm = ({ showSignUp, handleSignUpClick }) => {
  return (
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
  );
};

export default SignInSignUpForm;
